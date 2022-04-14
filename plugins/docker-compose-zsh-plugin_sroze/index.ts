const plugin: Fig.Plugin = {
  icon: "💾",
  name: "docker-compose-zsh-plugin_sroze",
  displayName: "Docker Compose Zsh Plugin",
  type: "shell",
  description: "ZSH plugin that display status of project containers",
  authors: [
    {
      name: "sroze",
      github: "sroze",
    },
  ],
  github: "sroze/docker-compose-zsh-plugin",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["docker-compose.plugin.zsh"],
  },
};

export default plugin;
