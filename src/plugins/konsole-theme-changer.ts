const plugin: Fig.Plugin = {
  name: "konsole-theme-changer",
  type: "shell",
  description: "`zsh-konsole-theme-changer` - change konsole theme from zsh.",
  github: "rocknrollMarc/zsh-konsole-theme-changer",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
