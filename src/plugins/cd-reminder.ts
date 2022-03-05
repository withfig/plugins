const plugin: Fig.Plugin = {
  name: "cd-reminder",
  type: "shell",
  description: "An Oh-My-Zsh Plugin to display reminders when cd-ing into specified directories",
  github: "bartboy011/cd-reminder",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
