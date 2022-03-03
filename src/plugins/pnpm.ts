const plugin: Fig.Plugin = {
  name: "pnpm",
  type: "shell",
  description: "Pnpm aliases for oh-my-zsh",
  github: "ntnyq/omz-plugin-pnpm",
  shells: ["zsh"],
  tags: [
    "zsh-plugin",
    "pnpm",
    "oh-my-zsh-plugin",
    "omz-plugin",
    "pnpm-aliases",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
