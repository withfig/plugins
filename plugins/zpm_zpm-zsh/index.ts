const plugin: Fig.Plugin = {
  name: "zpm_zpm-zsh",
  type: "shell",
  description: "Zpm— Zsh Plugin Manager",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/zpm",
  license: ["LGPL-3.0"],
  site: "https://github.com/zpm-zsh/zpm",
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: [
    "zpm",
    "zsh",
    "shell",
    "zsh-plugin",
    "zpm-plugins",
    "android",
    "termux",
    "linux",
    "macos",
    "zsh-plugins",
    "openwrt",
    "raspberry-pi",
    "plugin",
    "rasspberry",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zpm.zsh"],
  },
};

export default plugin;
