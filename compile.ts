#!/usr/bin/env node
import chalk from "chalk";
import { execSync } from "child_process";
import chokidar from "chokidar";
import { Command } from "commander";
import { build } from "esbuild";
import fs from "fs";
import os from "os";
import path from "path";
import glob from "fast-glob";
import http from "http";
import finalhandler from "finalhandler";
import serveStatic from "serve-static";

const SOURCE_FOLDER_NAME = "plugins";
const DESTINATION_FOLDER_NAME = "dist/esm";
const SOURCE_FILE_GLOB = `${SOURCE_FOLDER_NAME}/**/*.(ts|md)`;
const PORT = 3691;

enum PLUGINS_DEV_STATE {
  USE_LOCAL_PLUGINS = "useLocalPlugins",
  PLUGINS_LAST_UPDATED = "localPluginsLastUpdated",
  PLUGIN_DIRECTORY = "pluginDirectory",
  PLUGIN_LOCAL_PORT = "localPluginPort",
}

const setDeveloperState = (key: string, value: string | null) => {
  try {
    return execSync(
      `fig _ local-state plugins.developer.${key} ${value === null ? "--delete" : value}`
    );
  } catch (_) {
    return null;
  }
};

const compile = async (files: string[]) => {
  const jsFiles = files.filter((file) => file.endsWith("ts"));
  const mdFiles = files.filter((file) => file.endsWith("md"));
  const dirs = files.map((file) => file.slice(0, file.lastIndexOf("/")));

  if (jsFiles.length > 0) {
    const fileName = jsFiles.length === 1 ? jsFiles[0] : `${jsFiles.length} plugins`;
    await build({
      entryPoints: jsFiles,
      entryNames: "[dir]/[name]",
      outbase: ".",
      outdir: DESTINATION_FOLDER_NAME,
      bundle: true,
      format: "esm",
      minify: true,
      sourcemap: "inline",
    }).catch((e: Error) => console.log(`Error building ${fileName}: ${e.message}`));
    console.log(`Built ${fileName}`);
  }
  if (mdFiles.length > 0) {
    mdFiles.forEach((mdFile) => {
      fs.copyFileSync(mdFile, `${DESTINATION_FOLDER_NAME}/${mdFile}`);
    });
    console.log(`Copied ${mdFiles.length} md files`);
  }
  setDeveloperState(PLUGINS_DEV_STATE.PLUGINS_LAST_UPDATED, `${Date.now()}`);
};

const warn = (warning: string, ...help: string[]) => {
  const text = help.map((x) => ` ${x}`).join("\n");
  console.log(
    `\n******\n\n${chalk.bold(chalk.yellow(` WARNING: ${warning}`))}\n\n${text}\n\n******\n`
  );
};

async function runProgram() {
  console.clear();
  const isMacOS = os.type() === "Darwin";

  if (isMacOS) {
    const globalFigAppPath = path.join("/", "Applications", "Fig.app");
    const localFigAppPath = path.join(os.homedir(), "Applications", "Fig.app");

    if (!fs.existsSync(globalFigAppPath) && !fs.existsSync(localFigAppPath)) {
      warn("Fig is not installed", chalk.bold(chalk.cyan("Download Fig at:")), "https://fig.io/");
    } else {
      try {
        execSync("fig --version");
      } catch (e) {
        warn(
          "Fig cli is not installed",
          chalk.bold(
            chalk.cyan(
              "1. Run the install and update script ( ◧ > Integrations > Developer > Run install and update script)"
            )
          ),
          chalk.bold(chalk.cyan("2. Create a new terminal session"))
        );
      }
    }
  } else {
    warn(
      "Looks like you're not on macOS. We're working on linux / windows builds!",
      chalk.bold(
        chalk.yellow(
          "You can still build and contribute to completion specs, but you won't be able to test them unless you are on a mac or a macosVM"
        )
      )
    );
  }

  console.log(
    `Welcome to ${chalk.magenta("Dev Mode")}\n\n`,
    `1. Edit your plugin(s) in the ${chalk.bold("plugins/")} directory\n`,
    `2. On save, they will compile to the local ${chalk.bold("dist/")} directory\n`,
    `3. Test your changes ${chalk.bold("instantly")} in fig\n`,
    `4. When done, hit ${chalk.bold("ctrl + c")} to exit\n`
  );
  if (isMacOS) {
    ["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) =>
      process.on(signal, () => {
        console.log("\nPlugins dev mode disabled\n");
        setDeveloperState(PLUGINS_DEV_STATE.USE_LOCAL_PLUGINS, null);
        process.exit();
      })
    );

    setDeveloperState(PLUGINS_DEV_STATE.USE_LOCAL_PLUGINS, "true");
    setDeveloperState(PLUGINS_DEV_STATE.PLUGINS_LAST_UPDATED, `${Date.now()}`);
    setDeveloperState(
      PLUGINS_DEV_STATE.PLUGIN_DIRECTORY,
      `${path.join(process.cwd(), DESTINATION_FOLDER_NAME, "plugins")}`
    );
    setDeveloperState(PLUGINS_DEV_STATE.PLUGIN_LOCAL_PORT, `${PORT}`);

    const watcher = chokidar.watch(SOURCE_FILE_GLOB, { ignoreInitial: true });
    const files = await glob(SOURCE_FILE_GLOB);
    await compile(files);

    // Process the changed file
    watcher.on("change", (file: string) => compile([file]));
    watcher.on("add", (file: string) => compile([file]));

    const serve = serveStatic("./plugins/");

    const server = http.createServer(function (req, res) {
      serve(req, res, () => {
        finalhandler(req, res)("");
      });
    });

    server.listen(PORT);
  }
}

new Command().name("plugin-compiler").action(runProgram).parse(process.argv);
