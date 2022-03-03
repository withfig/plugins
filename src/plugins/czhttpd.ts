const plugin: Fig.Plugin = {
  name: "czhttpd",
  type: "shell",
  description: "zsh http server",
  github: "jsks/czhttpd",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "http",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
