const plugin: Fig.Plugin = {
  name: "git-prompt-useremail",
  type: "shell",
  description: "💂‍♂️ zsh plugin adds prompt reminders for git user.email",
  github: "mroth/git-prompt-useremail",
  shells: ["zsh"],
  tags: [
    "emoji",
    "zsh",
    "prompt",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
