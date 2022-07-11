const plugin: Fig.Plugin = {
  icon: "😀",
  name: "wd_mfaerevaag",
  displayName: "Wd",
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
  configuration: [
    {
      displayName: "WD_CONFIG",
      type: "environmentVariable",
      description:
        "Defines the path where warp points get stored.",
      interface: "text",
      default: "$HOME/.warprc",
      name: "WD_CONFIG",
    },
  ],
};

export default plugin;
