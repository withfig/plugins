const plugin: Fig.Plugin = {
  name: "lando (mannuel)",
  type: "shell",
  description: "This plugin adds aliases for various Lando commands",
  github: "mannuel/lando-alias-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
