const plugin: Fig.Plugin = {
  name: "zsh-sdkman_matthieusb",
  type: "shell",
  description: "Zsh plugin to provide aliases and completion scripts for sdkman",
  authors: [
    {
      name: "matthieusb",
      github: "matthieusb",
      twitter: "sbmatthieu",
    },
  ],
  github: "matthieusb/zsh-sdkman",
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["_zsh-sdkman.sh"],
    },
    zsh: {
      sourceFiles: ["zsh-sdkman.plugin.zsh"],
    },
  },
};

export default plugin;
