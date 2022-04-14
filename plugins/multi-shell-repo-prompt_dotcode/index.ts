const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "multi-shell-repo-prompt_dotcode",
  displayName: "Multi Shell Repo Prompt",
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
    sourceFiles: ["prompt.sh"],
  },
};

export default plugin;
