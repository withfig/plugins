const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "zimfw_zimfw",
  displayName: "zimfw",
  type: "shell",
  description: "Zim: Modular, customizable, and blazing fast Zsh framework",
  authors: [
    {
      name: "zimfw",
      github: "zimfw",
    },
  ],
  github: "zimfw/zimfw",
  license: ["MIT"],
  site: "https://zimfw.sh",
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: [
    "zim",
    "zsh",
    "framework",
    "zsh-configuration",
    "zimfw",
    "zsh-plugin-manager",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zimfw.zsh"],
  },
};

export default plugin;
