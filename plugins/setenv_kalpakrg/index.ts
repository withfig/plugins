const plugin: Fig.Plugin = {
  name: "setenv_kalpakrg",
  type: "shell",
  description: "Oh my zsh plugin to run script on change directory",
  authors: [
    {
      name: "kalpakrg",
      github: "kalpakrg",
    },
  ],
  github: "kalpakrg/setenv",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["setenv.plugin.zsh"],
  },
};

export default plugin;
