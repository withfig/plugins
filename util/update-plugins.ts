import axios, { AxiosError } from "axios";
import dotenv from "dotenv";
import * as fs from "fs/promises";

dotenv.config();

const plugins = process.argv
  .slice(2)
  .filter((file) => file.match(/^plugins\/[A-Za-z0-9_\-\.]*\/index\.ts$/))
  .map((file) => file.replace(/\.ts$/, ".js"))
  .map(async (file) => {
    const plugin = await import(`../${file}`);
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

    axios
      .post(
        "https://api.fig.io/plugins/update",
        { plugins, readmes },
        {
          headers: {
            Authorization: `Bearer ${process.env.PLUGINS_UPDATE_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
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
);
