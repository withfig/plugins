const plugin: Fig.Plugin = {
  name: "ssh-agent (hkupty)",
  type: "shell",
  description: "zsh ssh agent plugin",
  github: "hkupty/ssh-agent",
  shells: ["zsh"],
  tags: [
    "ssh-agent",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
