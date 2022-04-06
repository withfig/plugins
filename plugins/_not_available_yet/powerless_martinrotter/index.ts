const plugin: Fig.Plugin = {
  name: "powerless_martinrotter",
  displayName: "Powerless (martinrotter)",
  description: "Minimalistic/responsive ZSH prompt inspired by powerline.",
  icon: "🧑‍💻",
  screenshots: [
    "https://raw.githubusercontent.com/martinrotter/powerless/master/screenshots/powerless.gif",
  ],
  type: "shell",
  authors: [
    {
      name: "martinrotter",
      github: "martinrotter",
    },
  ],
  github: "martinrotter/powerless",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "agnoster", "powerline", "prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["powerless.zsh"],
  },
};

export default plugin;
