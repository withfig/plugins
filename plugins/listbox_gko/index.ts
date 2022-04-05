const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "listbox_gko",
  type: "shell",
  description: "💬 listbox element for bash",
  authors: [
    {
      name: "gko",
      github: "gko",
      twitter: "konstantin",
    },
  ],
  github: "gko/listbox",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
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
    sourceFiles: ["listbox.plugin.zsh"],
  },
};

export default plugin;
