const plugin: Fig.Plugin = {
  icon: "😀",
  name: "wd_mfaerevaag",
  displayName: "wd",
  screenshots: ["images/demo.gif"],
  type: "shell",
  description: "Jump to custom directories in zsh",
  authors: [
    {
      name: "mfaerevaag",
      github: "mfaerevaag",
    },
  ],
  github: "mfaerevaag/wd",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["shell", "zsh", "productivity"],
  installation: {
    origin: "github",
    zsh: {
      sourceFiles: ["wd.plugin.zsh"],
    },
  },
};

export default plugin;
