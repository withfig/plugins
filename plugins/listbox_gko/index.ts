const plugin: Fig.Plugin = {
  icon: "💬",
  name: "listbox_gko",
  displayName: "Listbox",
  screenshots: ["https://github.com/gko/listbox/raw/master/demo.gif"],
  type: "shell",
  description: "Listbox element for bash and zsh",
  authors: [
    {
      name: "gko",
      github: "gko",
      twitter: "konstantin",
    },
  ],
  github: "gko/listbox",
  license: ["MIT"],
  shells: ["zsh", "bash"],
  categories: ["Convenience Function"],
  keywords: [
    "listbox",
    "listbox-element",
    "zshrc",
    "zsh",
    "bash",
    "bashrc",
    "list",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["listbox.zsh"],
  },
};

export default plugin;
