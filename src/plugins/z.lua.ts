const plugin: Fig.Plugin = {
  name: "z.lua",
  type: "shell",
  description:
    "⚡ A new cd command that helps you navigate faster by learning your habits.",
  icon: "https://avatars.githubusercontent.com/u/567410",
  github: "skywind3000/z.lua",
  license: ["MIT"],
  authors: [
    {
      name: "skywind3000",
      github: "skywind3000",
    },
  ],
  shells: ["bash", "zsh", "fish"],
  categories: ["Productivity Hack"],
  keywords: [
    "autojump",
    "bash",
    "fasd",
    "z",
    "cd",
    "jump",
    "zsh",
    "fishshell",
    "zsh-plugin",
    "shell",
    "j",
    "plugin",
    "fuzzy",
    "fish",
    "fzf",
    "powershell",
  ],
  installation: {
    origin: "github",
    postScript: ({ ctx }) => {
      return `eval "$(lua ${ctx.plugin.installDirectory}/z.lua --init ${ctx.shell})"`;
    },
    fish: {
      sourceFiles: "init.fish",
    },
  },
};

export default plugin;
