import fetch from "node-fetch";
import { loadPlugin } from ".";

const pluginNames = process.argv.slice(2)
  .filter(file => file.startsWith("src/plugins/") && file.endsWith(".ts"))
  .map(file => file.slice("src/plugins/".length, -".ts".length));

Promise.all(pluginNames.map(name => loadPlugin(name))).then(plugins => {
  fetch("https://api.fig.io/plugins/update", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PLUGINS_UPDATE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plugins })
  }).then(res => process.exit(res.ok ? 0 : 1));
})

