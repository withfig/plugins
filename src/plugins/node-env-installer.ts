const plugin: Fig.Plugin = {
  name: "node-env-installer",
  type: "shell",
  description: "Plugin for Oh my zsh (https://github.com/ohmyzsh/ohmyzsh) that controls the versions of NodeJS projects with NVM.",
  github: "shiro-saber/node-env-installer",
  shells: ["zsh"],
  tags: [
    "oh-my-zsh",
    "nvm",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
