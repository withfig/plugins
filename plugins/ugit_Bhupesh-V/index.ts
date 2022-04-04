const plugin: Fig.Plugin = {
  name: "ugit_Bhupesh-V",
  type: "shell",
  description:
    "🚨️ ugit helps undo git commands. Your damage control git buddy. Undo from 17+ git scenarios.",
  authors: [
    {
      name: "Bhupesh-V",
      github: "Bhupesh-V",
      twitter: "bhupeshimself",
    },
  ],
  github: "Bhupesh-V/ugit",
  license: ["MIT"],
  site: "https://bhupesh.me/undo-your-last-git-mistake-with-ugit/",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "git-tools",
    "git-toolkit",
    "fzf-scripts",
    "bash-script",
    "shell-scripts",
    "undo-git-command",
    "undo-commands",
    "pro-git",
    "ugit",
    "developer-tools",
    "git-undo",
    "zgenom",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["ugit.plugin.zsh"],
  },
};

export default plugin;
