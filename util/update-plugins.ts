import axios, { AxiosError } from "axios";
import dotenv from "dotenv";
import * as fs from "fs/promises";

dotenv.config();

const individual = process.env["PLUGINS_UPDATE_INDIVIDUAL"] !== undefined;

if (individual)
  console.log("Updating plugins individually. This will take a while.");

const plugins = process.argv
  .slice(2)
  .filter((file) => file.match(/^plugins\/[A-Za-z0-9_\-\.]*\/index\.ts$/))
  .map((file) => file.replace(/\.ts$/, ".js"))
  .map(async (file) => {
    let plugin = await import(`../dist/cjs/${file}`);
    return plugin.default;
  });

const readmes = process.argv
  .slice(2)
  .filter((file) =>
    file.match(/^plugins\/[A-Za-z0-9_\-\.]*\/(README|readme)\.md$/)
  )
  .map(async (file) => ({
    name: file.replace(/^plugins\/(.*)\/(README|readme)\.md$/, "$1"),
    content: await fs.readFile(file, { encoding: "utf8" }),
  }));

const updateRemote = async ({
  plugins,
  readmes,
}: {
  plugins?: any[];
  readmes?: any[];
}) => {
  return await axios.post(
    "https://api.fig.io/plugins/update",
    { plugins: plugins ?? [], readmes: readmes ?? [] },
    {
      headers: {
        Authorization: `Bearer ${process.env.PLUGINS_UPDATE_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
};

Promise.all([Promise.all(plugins), Promise.all(readmes)]).then(
  async ([plugins, readmes]) => {
    console.log("Updating plugins:");
    for (const plugin of plugins) {
      console.log(`- ${plugin.name}`);
    }

    console.log("Updating readmes:");
    for (const readme of readmes) {
      console.log(`- ${readme.name}`);
    }

    if (individual) {
      let error = false;

      for (const plugin of plugins) {
        updateRemote({ plugins: [plugin] })
          .then((res) => {
            console.log(`${res.status} ${res.statusText}`);
            console.log(`Updated plugin: ${plugin.name}`);
          })
          .catch((err: AxiosError) => {
            console.log(
              `Failed to update plugin (${plugin.name}):`,
              err.message
            );
            error = true;
          });

        // Sleep for a bit to avoid hitting the API too quickly
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      for (const readme of readmes) {
        updateRemote({ readmes: [readme] })
          .then((res) => {
            console.log(`${res.status} ${res.statusText}`);
            console.log(`Updated readme: ${readme.name}`);
          })
          .catch((err: AxiosError) => {
            console.log(
              `Failed to update readme (${readme.name}):`,
              err.message
            );
            error = true;
          });

        // Sleep for a bit to avoid hitting the API too quickly
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      if (error) process.exit(1);
    } else {
      updateRemote({ plugins, readmes })
        .then((res) => {
          console.log(`${res.status} ${res.statusText}`);
          console.log("Updated plugins");
          process.exit(0);
        })
        .catch((err: AxiosError) => {
          console.log("Failed to update:", err.message);
          process.exit(1);
        });
    }
  }
);
