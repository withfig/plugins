const plugin: Fig.Plugin = {
  icon: "💥",
  name: "php-version_rcfile-switcher_xellos866",
  type: "shell",
  description:
    'A simple zsh plugin for the shell tool "php-version" to automatically switch between php versions if an rc-file is present',
  authors: [
    {
      name: "xellos866",
      github: "xellos866",
    },
  ],
  github: "xellos866/php-version_rcfile-switcher",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["php-version_rcfile-switcher.plugin.zsh"],
  },
};

export default plugin;
