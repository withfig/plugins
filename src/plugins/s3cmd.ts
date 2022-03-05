const plugin: Fig.Plugin = {
  name: "s3cmd",
  type: "shell",
  description: "Zsh autocomplete plugin for s3cmd",
  github: "FFKL/s3cmd-zsh-plugin",
  shells: ["zsh"],
  tags: [
    "zsh",
    "s3cmd",
    "zsh-autocomplete-plugin",
    "s3cmd-zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
