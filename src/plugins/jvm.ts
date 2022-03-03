const plugin: Fig.Plugin = {
  name: "jvm",
  type: "shell",
  description: "Antigen/Oh My Zsh plugin that allows selection of JDK on MacOSX",
  github: "mgryszko/jvm",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "antigen",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
