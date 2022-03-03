const plugin: Fig.Plugin = {
  name: "zeit",
  type: "shell",
  description: "Yet another zsh theme",
  github: "vercel/zsh-theme",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "oh-my-zsh",
    "hyper",
    "vercel",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
