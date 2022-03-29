const plugin: Fig.Plugin = {
  name: "powerless_martinrotter",
  type: "shell",
  description: "Minimalistic/responsive ZSH prompt inspired by powerline.",
  authors: [
    {
      name: "martinrotter",
      github: "martinrotter",
    }
  ],
  github: "martinrotter/powerless",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "agnoster",
    "powerline",
    "prompt",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["powerless.zsh"],
  },
};

export default plugin;
