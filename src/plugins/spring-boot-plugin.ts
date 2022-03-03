const plugin: Fig.Plugin = {
  name: "spring-boot-plugin",
  type: "shell",
  description: "oh-my-zsh Spring Boot plugin",
  github: "linux-china/oh-my-zsh-spring-boot-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
