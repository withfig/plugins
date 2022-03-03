const plugin: Fig.Plugin = {
  name: "bol",
  type: "shell",
  description: "An oh-my-zsh plugin, that prints a random quote when you open a terminal.",
  github: "ikhurramraza/bol",
  shells: ["zsh"],
  tags: [
    "oh-my-zsh",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
