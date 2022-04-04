const plugin: Fig.Plugin = {
  name: "cd-reminder_bartboy011",
  type: "shell",
  description:
    "An Oh-My-Zsh Plugin to display reminders when cd-ing into specified directories",
  authors: [
    {
      name: "bartboy011",
      github: "bartboy011",
    },
  ],
  github: "bartboy011/cd-reminder",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["cd-reminder.plugin.zsh"],
  },
};

export default plugin;
