const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "zsh-docker-run_rawkode",
  displayName: "Zsh Docker Run",
  type: "shell",
  description: "Run your favourite commands naturally, with Docker",
  authors: [
    {
      name: "rawkode",
      github: "rawkode",
      twitter: "rawkode",
    },
  ],
  github: "rawkode/zsh-docker-run",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "docker", "docker-image"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-docker-run.plugin.zsh"],
  },
};

export default plugin;
