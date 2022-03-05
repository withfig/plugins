const plugin: Fig.Plugin = {
  name: "tinygo",
  type: "shell",
  description: "adds bash/zsh/clink completion to tinygo",
  github: "sago35/tinygo-autocmpl",
  shells: ["zsh"],
  tags: [
    "bash",
    "completion",
    "tinygo",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
