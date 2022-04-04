const plugin: Fig.Plugin = {
  name: "sepshell_sepehr",
  type: "shell",
  description:
    "Clean and minimal zsh theme with git bisecting/merging/rebasing modes and configurable prompt symbols.",
  authors: [
    {
      name: "sepehr",
      github: "sepehr",
    },
  ],
  github: "sepehr/sepshell",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["sepshell.zsh-theme"],
  },
};

export default plugin;
