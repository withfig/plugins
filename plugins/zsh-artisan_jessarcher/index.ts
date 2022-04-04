const plugin: Fig.Plugin = {
  name: "zsh-artisan_jessarcher",
  type: "shell",
  description:
    "Laravel artisan plugin for zsh to help you to run artisan from anywhere in the project tree, with auto-completion, and it can automatically open files created by artisan!",
  authors: [
    {
      name: "jessarcher",
      github: "jessarcher",
      twitter: "jessarchercodes",
    },
  ],
  github: "jessarcher/zsh-artisan",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["artisan.plugin.zsh"],
  },
};

export default plugin;
