const plugin: Fig.Plugin = {
  name: "multi-shell-repo-prompt_dotcode",
  type: "shell",
  description:
    "A shell script to make your prompt pretty and useful. Works with bash & zsh, git & hg.",
  authors: [
    {
      name: "dotcode",
      github: "dotcode",
    },
  ],
  github: "dotcode/multi-shell-repo-prompt",
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["prompt.sh"],
    },
    zsh: {
      sourceFiles: ["prompt.sh"],
    },
  },
};

export default plugin;
