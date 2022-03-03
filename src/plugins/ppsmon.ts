const plugin: Fig.Plugin = {
  name: "ppsmon",
  type: "shell",
  description: "oh-my-zsh theme that displays the current network packets per second TX rate in your prompt",
  github: "mzpqnxow/ppsmon",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
