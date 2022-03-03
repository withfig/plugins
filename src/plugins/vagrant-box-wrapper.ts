const plugin: Fig.Plugin = {
  name: "vagrant-box-wrapper",
  type: "shell",
  description: "🎁 Plugin for zsh/bash that can switch between vagrant boxes, and can control them from outside of the vagrant directories.",
  github: "evanthegrayt/vagrant-box-wrapper",
  shells: ["zsh"],
  tags: [
    "plugin",
    "productivity",
    "oh-my-zsh",
    "vagrant",
    "vagrant-boxes",
    "bash-it",
    "shell-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
