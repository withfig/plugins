const plugin: Fig.Plugin = {
  name: "autodotenv",
  type: "shell",
  description: "autodotenv is a oh-my-zsh plugin inspired in official dotenv plugin",
  github: "nocttuam/autodotenv",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
