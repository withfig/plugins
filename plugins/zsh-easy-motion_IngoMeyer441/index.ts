const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "zsh-easy-motion_IngoMeyer441",
  displayName: "Zsh Easy Motion",
  description: "Vim's easy-motion for zsh",
  screenshots: [
    "https://raw.githubusercontent.com/IngoMeyer441/zsh-easy-motion/master/demo.svg",
  ],
  type: "shell",
  authors: [
    {
      name: "IngoMeyer441",
      github: "IngoMeyer441",
      twitter: "IngoMeyer441",
    },
  ],
  github: "IngoMeyer441/zsh-easy-motion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["easy_motion.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "python",
      },
    ],
  },
};

export default plugin;
