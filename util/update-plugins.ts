import axios, { AxiosError } from "axios";
import dotenv from "dotenv";
import * as fs from "fs/promises";
dotenv.config();

const plugins = process.argv
  .slice(2)
  .filter((file) => file.match(/^plugins\/.*\/index\.ts$/))
  .map((file) => file.replace(/\.ts$/, ".js"))
  .map(async (file) => {
    const plugin = await import(`../${file}`);
    return plugin.default;
  });

const readmes = process.argv
  .slice(2)
  .filter((file) => file.match(/^plugins\/.*\/(README|readme)\.md$/))
  .map(async (file) => ({
    name: file.replace(/^plugins\/(.*)\/(README|readme)\.md$/, "$1"),
    content: await fs.readFile(file, { encoding: "utf8" }),
  }));

Promise.all([Promise.all(plugins), Promise.all(readmes)]).then(
  ([plugins, readmes]) => {
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
        console.log("Updated successfully");
        process.exit(0);
      })
      .catch((err: AxiosError) => {
        console.log("Failed to update:", err.message);
        process.exit(1);
      });
  }
);
