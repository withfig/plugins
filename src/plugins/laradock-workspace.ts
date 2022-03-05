const plugin: Fig.Plugin = {
  name: "laradock-workspace",
  type: "shell",
  description: "Zsh Plugin for Laradock's Workspace",
  github: "rluders/laradock-workspace-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "laravel",
    "workspace",
    "zsh-plugin",
    "oh-my-zsh-plugin",
    "laradock",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
