const plugin: Fig.Plugin = {
  name: "git-prompt-useremail_mroth",
  type: "shell",
  description:
    ":guardsman: zsh plugin adds prompt reminders for git user.email",
  authors: [
    {
      name: "mroth",
      github: "mroth",
      twitter: "mroth",
    },
  ],
  github: "mroth/git-prompt-useremail",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "emoji", "prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["git-prompt-useremail.plugin.zsh"],
  },
};

export default plugin;
