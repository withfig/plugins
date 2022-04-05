const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "up.zsh_peterhurford",
  type: "shell",
  description:
    'A zshell plugin for the "up" command, which can cd up an arbitrary number of directories',
  authors: [
    {
      name: "peterhurford",
      github: "peterhurford",
    },
  ],
  github: "peterhurford/up.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["up.plugin.zsh"],
  },
};

export default plugin;
