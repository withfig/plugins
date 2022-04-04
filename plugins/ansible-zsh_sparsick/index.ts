const plugin: Fig.Plugin = {
  name: "ansible-zsh_sparsick",
  type: "shell",
  authors: [
    {
      name: "sparsick",
      github: "sparsick",
      twitter: "SandraParsick",
    },
  ],
  github: "sparsick/ansible-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["ansible.plugin.zsh"],
  },
};

export default plugin;
