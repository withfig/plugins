const plugin: Fig.Plugin = {
  icon: "🐙",
  name: "ssh-connect_gko",
  displayName: "Ssh Connect (gko)",
  type: "shell",
  description: "Simple ssh manager based on bash/zsh history",
  authors: [
    {
      name: "gko",
      github: "gko",
      twitter: "konstantin",
    },
  ],
  github: "gko/ssh-connect",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["ssh", "manager", "connect", "zsh", "bash"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["ssh-connect.sh"],
    },
    zsh: {
      sourceFiles: ["ssh-connect.sh"],
    },
  },
};

export default plugin;
