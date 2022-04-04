const plugin: Fig.Plugin = {
  name: "zsh-easy-motion_IngoMeyer441",
  type: "shell",
  description: "Vim's easy-motion for zsh",
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
  },
};

export default plugin;
