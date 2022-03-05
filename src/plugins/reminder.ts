const plugin: Fig.Plugin = {
  name: "reminder",
  type: "shell",
  description: "A very very simple OhMyZsh plugin which displays reminders above every prompt",
  github: "AlexisBRENON/oh-my-zsh-reminder",
  shells: ["zsh"],
  tags: [
    "shell",
    "ohmyzsh-plugin",
    "displays-reminders",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
