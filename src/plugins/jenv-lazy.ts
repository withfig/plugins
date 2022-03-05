const plugin: Fig.Plugin = {
  name: "jenv-lazy",
  type: "shell",
  description: "A ZSH plugin for lazy loading of jEnv.",
  github: "shihyuho/zsh-jenv-lazy",
  shells: ["zsh"],
  tags: [
    "java",
    "zsh",
    "lazy",
    "lazy-loading",
    "zsh-plugin",
    "jenv",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
