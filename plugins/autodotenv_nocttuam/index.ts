const plugin: Fig.Plugin = {
  name: "autodotenv_nocttuam",
  type: "shell",
  description:
    "autodotenv is a oh-my-zsh plugin inspired in official dotenv plugin",
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
