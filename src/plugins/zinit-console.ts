const plugin: Fig.Plugin = {
  name: "zinit-console",
  type: "shell",
  description: "A console for ZI – based on the zsh/zcurses Zshell module and the ZUI library",
  github: "z-shell/zi-console",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "zsh-plugin",
    "z-shell",
    "zi-console",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
