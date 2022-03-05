const plugin: Fig.Plugin = {
  name: "cd-ssh",
  type: "shell",
  description: "`ssh` to a server when you accidental `cd` to it",
  github: "itsjohannawren/zsh-plugin-cd-ssh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
