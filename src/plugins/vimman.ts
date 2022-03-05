const plugin: Fig.Plugin = {
  name: "vimman",
  type: "shell",
  description: "View vim plugin manuals (help) like man in zsh",
  github: "yonchu/vimman",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
