const plugin: Fig.Plugin = {
  name: "base16",
  type: "shell",
  description: "Base16 for Shells",
  github: "chriskempson/base16-shell",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
