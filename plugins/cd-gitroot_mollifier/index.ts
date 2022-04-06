const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "cd-gitroot_mollifier",
  displayName: "cd-gitroot",
  type: "shell",
  description: "zsh plugin to cd to git repository root directory.",
  authors: [
    {
      name: "mollifier",
      github: "mollifier",
    },
  ],
  github: "mollifier/cd-gitroot",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Productivity Hack"],
  installation: {
    origin: "github",
    sourceFiles: ["cd-gitroot.plugin.zsh"],
  },
};

export default plugin;
