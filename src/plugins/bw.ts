const plugin: Fig.Plugin = {
  name: "bw",
  type: "shell",
  description: "zsh_bw-autocomplete",
  github: "CupricReki/zsh-bw-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
