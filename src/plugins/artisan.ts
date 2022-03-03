const plugin: Fig.Plugin = {
  name: "artisan",
  type: "shell",
  description: "Laravel artisan plugin for zsh to help you to run artisan from anywhere in the project tree, with auto-completion, and it can automatically open files created by artisan!",
  github: "jessarcher/zsh-artisan",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
