const plugin: Fig.Plugin = {
  name: "wakatime-zsh-plugin_sobolevn",
  type: "shell",
  description: "🕒Track how much time you have spent in your terminal!",
  authors: [
    {
      name: "sobolevn",
      github: "sobolevn",
    }
  ],
  github: "sobolevn/wakatime-zsh-plugin",
  license: ["MIT"],
  site: "https://wakatime.com/terminal",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "wakatime",
    "antigen",
    "oh-my-zsh",
    "zsh-plugin",
    "oh-my-zsh-plugin",
    "shell",
    "time-tracking",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["wakatime.plugin.zsh"],
  },
};

export default plugin;
