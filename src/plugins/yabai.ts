const plugin: Fig.Plugin = {
  name: "yabai",
  type: "shell",
  description: "zsh completions for yabai tiling WM",
  github: "Amar1729/yabai-zsh-completions",
  shells: ["zsh"],
  tags: [
    "zsh-completions",
    "yabai",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
