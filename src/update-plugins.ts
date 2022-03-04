import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const plugins = process.argv.slice(2)
  .filter(file => file.match(/^src\/plugins\/.*\.ts$/))
  .map(file => {
    const js = import(file.replace(/^src/, ".").replace(/\.ts$/, ".js"))
    return js.then(plugin => plugin.default)
  });

Promise.all(plugins).then(plugins => {
  axios.post(
    "https://api.fig.io/plugins/update",
    { plugins },
    {
      headers: {
        Authorization: `Bearer ${process.env.PLUGINS_UPDATE_TOKEN}`,
        "Content-Type": "application/json"
      }
    }
  ).then((res) => {
    console.log("Updated successfully");
    process.exit(0);
  }).catch((err: AxiosError) => {
    console.log("Failed to update:", err.message);
    process.exit(1);
  });
})
