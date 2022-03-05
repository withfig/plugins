const plugin: Fig.Plugin = {
  name: "windows-title",
  type: "shell",
  description: "A simple zsh plugin that dynamically sets your terminal window title",
  github: "mdarocha/zsh-windows-title",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
