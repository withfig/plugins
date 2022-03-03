const plugin: Fig.Plugin = {
  name: "vanilli.sh",
  type: "shell",
  description: "A lightweight start point of shell configuration",
  github: "yous/vanilli.sh",
  shells: ["zsh"],
  tags: [
    "config",
    "zsh",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
