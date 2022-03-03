const plugin: Fig.Plugin = {
  name: "gpg-agent",
  type: "shell",
  description: "very simple gpg-agent plugin for zsh",
  github: "axtl/gpg-agent.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
