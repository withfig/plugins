const plugin: Fig.Plugin = {
  name: "wdnote",
  type: "shell",
  description: "Zsh plugin that prints a local file, titled \".wdnote\", if present upon changing directories",
  github: "sevenhearted/wdnote",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "prezto",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
