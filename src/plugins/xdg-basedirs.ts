const plugin: Fig.Plugin = {
  name: "xdg-basedirs",
  type: "shell",
  description: "Configure apps to use XDG base directories",
  github: "zshzoo/xdg-basedirs",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
