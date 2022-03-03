const plugin: Fig.Plugin = {
  name: "etcdctl",
  type: "shell",
  description: "etcdctl autocomplete plugin for oh-my-zsh.",
  github: "sheax0r/etcdctl-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
