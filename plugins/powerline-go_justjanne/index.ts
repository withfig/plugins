const plugin: Fig.Plugin = {
  name: "powerline-go_justjanne",
  type: "shell",
  description: " A beautiful and useful low-latency prompt for your shell, written in go",
  authors: [
    {
      name: "justjanne",
      github: "justjanne",
    }
  ],
  github: "justjanne/powerline-go",
  license: ["GPL-3.0"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: [
    "go",
    "powerline",
    "theme",
    "color-scheme",
    "developer-tools",
    "zsh",
    "bash",
    "fish",
    "shell",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"generatePreview.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"generatePreview.sh"
      ],
    },
  },
};

export default plugin;
