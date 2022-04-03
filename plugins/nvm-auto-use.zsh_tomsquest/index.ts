const plugin: Fig.Plugin = {
  name: "nvm-auto-use.zsh_tomsquest",
  type: "shell",
  description:
    "ZSH plugin to call `nvm use` automatically whenever you enter a directory that contains an `.nvmrc` file with a string telling nvm which node to use",
  authors: [
    {
      name: "tomsquest",
      github: "tomsquest",
    },
  ],
  github: "tomsquest/nvm-auto-use.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["nvm", "zsh-plugins", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["nvm-auto-use.zsh"],
  },
};

export default plugin;
