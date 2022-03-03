const plugin: Fig.Plugin = {
  name: "codex",
  type: "shell",
  description: "This is a ZSH plugin that enables you to use OpenAI's Codex AI in the command line.",
  github: "tom-doerr/zsh_codex",
  shells: ["zsh"],
  tags: [
    "zsh",
    "ai",
    "openai",
    "codex",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
