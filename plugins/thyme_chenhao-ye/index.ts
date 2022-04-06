const plugin: Fig.Plugin = {
  icon: "😎",
  name: "thyme_chenhao-ye",
  type: "shell",
  description: "Seasoning for shells.",
  authors: [
    {
      name: "chenhao-ye",
      github: "chenhao-ye",
    },
  ],
  github: "chenhao-ye/thyme",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "theme", "starship"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["install.sh"],
    },
  },
};

export default plugin;
