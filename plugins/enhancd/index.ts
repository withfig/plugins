const plugin: Fig.Plugin = {
  name: "enhancd",
  type: "shell",
  description: "A next-generation cd command with your interactive filter",
  icon: "🚀",
  github: "b4b4r07/enhancd",
  authors: [
    {
      name: "b4b4r07",
      github: "b4b4r07",
      twitter: "b4b4r07",
    },
  ],
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  categories: ["Productivity Hack"],
  keywords: [
    "bash",
    "zsh",
    "zplug",
    "shell",
    "fuzzy-search",
    "fzf",
    "fzf-scripts",
    "cd",
    "cli",
    "command-line-tool",
    "command-line-interface",
    "shell-extension",
    "shell-scripts",
    "jump",
    "autojump",
    "z",
    "fasd",
  ],
  installation: {
    origin: "github",
    sourceFiles: "init.sh",
    fish: {
      sourceFiles: ({ ctx }) => {
        return ["conf.d/", "functions/"].map(
          (dir) => `${ctx.plugin.installDirectory}${dir}*`
        );
      },
    },
  },
};

export default plugin;
