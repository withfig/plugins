const plugin: Fig.Plugin = {
  name: "wakatime (sobolevn)",
  type: "shell",
  description: "🕒Track how much time you have spent in your terminal!",
  github: "sobolevn/wakatime-zsh-plugin",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "oh-my-zsh",
    "antigen",
    "zsh-plugin",
    "wakatime",
    "oh-my-zsh-plugin",
    "time-tracking",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
