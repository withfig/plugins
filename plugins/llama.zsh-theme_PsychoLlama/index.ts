const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "llama.zsh-theme_PsychoLlama",
  displayName: "Llama Zsh Theme",
  type: "shell",
  description: "The preferred ZSH theme of llamas everywhere",
  authors: [
    {
      name: "PsychoLlama",
      github: "PsychoLlama",
    },
  ],
  github: "PsychoLlama/llama.zsh-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "theme"],
  installation: {
    origin: "github",
    sourceFiles: ["llama.zsh-theme"],
  },
};

export default plugin;
