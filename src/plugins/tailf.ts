const plugin: Fig.Plugin = {
  name: "tailf",
  type: "shell",
  description: "tail -f with prefixed newlines instead of trailing",
  github: "rummik/zsh-tailf",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "follow",
    "tail",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
