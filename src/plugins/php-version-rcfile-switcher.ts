const plugin: Fig.Plugin = {
  name: "php-version-rcfile-switcher",
  type: "shell",
  description: "A simple zsh plugin for the shell tool \"php-version\" to automatically switch between php versions if an rc-file is present",
  github: "xellos866/php-version_rcfile-switcher",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
