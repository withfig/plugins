const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "sm-prompt_blyndusk",
  type: "shell",
  description: "⛓ a Simplistic & Minimalist theme for Bash and Zsh prompts.",
  authors: [
    {
      name: "blyndusk",
      github: "blyndusk",
    },
  ],
  github: "blyndusk/sm-prompt",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: [
    "bash",
    "zsh",
    "bash-theme",
    "zsh-theme",
    "prompt",
    "theme",
    "simplistic",
    "minimalist",
    "sm",
    "sm-theme",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["sm.theme.bash"],
    },
    zsh: {
      sourceFiles: ["sm.theme.zsh"],
    },
  },
};

export default plugin;
