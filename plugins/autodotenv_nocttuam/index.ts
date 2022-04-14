const plugin: Fig.Plugin = {
  name: "autodotenv_nocttuam",
  displayName: "Auto Dotenv",
  description:
    "autodotenv is a oh-my-zsh plugin inspired in official dotenv plugin",
  icon: "⭐️",
  type: "shell",
  authors: [
    {
      name: "nocttuam",
      github: "nocttuam",
    },
  ],
  github: "nocttuam/autodotenv",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "oh-my-zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["autoenv.plugin.zsh"],
  },
};

export default plugin;
