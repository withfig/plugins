const plugin: Fig.Plugin = {
  name: "p10k-promptconfig",
  type: "shell",
  description: "oh-my-zsh plugin for powerlevel10k prompt config files, lets you change your powerlevel10k prompt file using a variable in .zshrc",
  github: "ItsDoctorDoc/p10k-promptconfig",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
