const plugin: Fig.Plugin = {
  icon: "🖍",
  name: "mysql-colorize_zpm-zsh",
  displayName: "mysql-colorize",
  description: "Adds color for mysql tables",
  type: "shell",
  screenshots: [
    "https://raw.githubusercontent.com/horosgrisa/mysql-colorize/master/screenshot.png",
  ],
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/mysql-colorize",
  license: ["GPL-3.0"],
  shells: ["bash", "zsh"],
  categories: ["Color"],
  keywords: ["mysql-colorize", "zsh", "mysql", "mysql-client"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["mysql-colorize.bash"],
    },
    zsh: {
      sourceFiles: ["mysql-colorize.plugin.zsh"],
    },
  },
};

export default plugin;
