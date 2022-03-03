const plugin: Fig.Plugin = {
  name: "expressvpn",
  type: "shell",
  description: "expressvpn command completion for zsh",
  github: "tk7r/zsh-expressvpn",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
