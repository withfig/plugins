const plugin: Fig.Plugin = {
  name: "wd_mfaerevaag",
  type: "shell",
  description: ":rocket: Jump to custom directories in zsh",
  authors: [
    {
      name: "mfaerevaag",
      github: "mfaerevaag",
    }
  ],
  github: "mfaerevaag/wd",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "shell",
    "zsh",
    "productivity",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"wd.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"wd.plugin.zsh"
      ],
    },
  },
};

export default plugin;
