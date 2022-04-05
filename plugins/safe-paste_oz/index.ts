const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "safe-paste_oz",
  type: "shell",
  description:
    "Zsh safe-paste plugin for antigen. See http://cirw.in/blog/bracketed-paste",
  authors: [
    {
      name: "oz",
      github: "oz",
      twitter: "ephoz",
    },
  ],
  github: "oz/safe-paste",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["safe-paste.plugin.zsh"],
  },
};

export default plugin;
