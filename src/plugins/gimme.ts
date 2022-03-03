const plugin: Fig.Plugin = {
  name: "gimme",
  type: "shell",
  description: "Oh-my-zsh plugin to manage Go installations with gimme",
  github: "folixg/gimme-ohmyzsh-plugin",
  shells: ["zsh"],
  tags: [
    "go",
    "zsh",
    "golang",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
    "gimme",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
