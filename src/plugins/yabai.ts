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
    origin: "github",
  },
};

export default plugin;
