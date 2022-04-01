const plugin: Fig.Plugin = {
  name: "mysql-colorize_zpm-zsh",
  type: "shell",
  description: "Adds color for mysql tables",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    }
  ],
  github: "zpm-zsh/mysql-colorize",
  license: ["GPL-3.0"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "mysql-colorize",
    "zsh",
    "mysql",
    "mysql-client",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"mysql-colorize.bash"
      ],
    },
    zsh: {
      sourceFiles: [
"mysql-colorize.plugin.zsh"
      ],
    },
  },
};

export default plugin;
