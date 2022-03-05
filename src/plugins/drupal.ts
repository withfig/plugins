const plugin: Fig.Plugin = {
  name: "drupal",
  type: "shell",
  description: "Drush auto-completion and other Drupal related goodies",
  github: "yhaefliger/zsh-drupal",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "drupal",
    "drush",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
