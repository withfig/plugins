const plugin: Fig.Plugin = {
  name: "drush_zsh_completion",
  type: "shell",
  description: "Drush ZSH Completion. Please follow on drupal.org",
  github: "webflo/drush_zsh_completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
