const plugin: Fig.Plugin = {
  name: "zplug_zplug",
  displayName: "zplug",
  icon: "🌺",
  type: "shell",
  description: "A next-generation plugin manager for zsh",
  authors: [
    {
      name: "zplug",
      github: "zplug",
    }
  ],
  github: "zplug/zplug",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Framework"],
  keywords: [
    "zplug",
    "zsh",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"build.sh","run.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"init.zsh"
      ],
    },
  },
};

export default plugin;
