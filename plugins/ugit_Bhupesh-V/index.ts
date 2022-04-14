const plugin: Fig.Plugin = {
  icon: "🚨️",
  name: "ugit_Bhupesh-V",
  displayName: "Ugit",
  type: "shell",
  screenshots: [
    "https://user-images.githubusercontent.com/34342551/135706491-0e987e0c-3a6d-4da6-bd16-d69bb36c42a9.gif",
    "https://user-images.githubusercontent.com/34342551/115037937-a608d800-9eec-11eb-88a9-252da7d6f507.png",
  ],
  description:
    "Ugit helps undo git commands. Your damage control git buddy. Undo from 17+ git scenarios.",
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
