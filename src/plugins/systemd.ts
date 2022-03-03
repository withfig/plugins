const plugin: Fig.Plugin = {
  name: "systemd",
  type: "shell",
  description: "forked from https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/systemd",
  github: "le0me55i/zsh-systemd",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
