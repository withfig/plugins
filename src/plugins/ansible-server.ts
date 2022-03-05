const plugin: Fig.Plugin = {
  name: "ansible-server",
  type: "shell",
  description: "Completions for viasite-ansible/ansible-server",
  github: "viasite-ansible/zsh-ansible-server",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
