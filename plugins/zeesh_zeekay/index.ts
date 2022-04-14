const plugin: Fig.Plugin = {
  icon: "💡",
  name: "zeesh_zeekay",
  displayName: "Zeesh",
  type: "shell",
  description:
    "🐚 Putting the zee in your shell. A plugin-based framework for Zsh.",
  authors: [
    {
      name: "zeekay",
      github: "zeekay",
      twitter: "zeekay",
    },
  ],
  github: "zeekay/zeesh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: ["zsh", "shell", "zeesh"],
  installation: {
    origin: "github",
    sourceFiles: ["zeesh.zsh"],
  },
};

export default plugin;
