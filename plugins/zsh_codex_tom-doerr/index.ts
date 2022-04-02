const plugin: Fig.Plugin = {
  name: "zsh_codex_tom-doerr",
  displayName: "Zsh Codex",
  icon: "🦾",
  type: "shell",
  description:
    "This is a ZSH plugin that enables you to use OpenAI's Codex AI in the command line.",
  authors: [
    {
      name: "tom-doerr",
      github: "tom-doerr",
    },
  ],
  github: "tom-doerr/zsh_codex",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "openai", "codex", "ai"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh_codex.plugin.zsh"],
  },
};

export default plugin;
