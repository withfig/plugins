const plugin: Fig.Plugin = {
  name: "suffix-alias",
  type: "shell",
  description: "[ Abandoned ] Don't see much use of the project in lieu of xdg-open and other similar tools",
  github: "srijanshetty/zsh-suffix-alias",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
