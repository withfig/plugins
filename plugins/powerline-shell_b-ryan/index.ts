const plugin: Fig.Plugin = {
  name: "powerline-shell_b-ryan",
  displayName: "powerline-shell",
  type: "shell",
  description: "A beautiful and useful prompt for your shell",
  authors: [
    {
      name: "b-ryan",
      github: "b-ryan",
    }
  ],
  github: "b-ryan/powerline-shell",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: [
    "python",
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
"test.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"test.sh"
      ],
    },
  },
};

export default plugin;
