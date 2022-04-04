const plugin: Fig.Plugin = {
  name: "jenkins-zsh_tomplex",
  type: "shell",
  description: "A jenkins plugin for ZSH.",
  authors: [
    {
      name: "tomplex",
      github: "tomplex",
    },
  ],
  github: "tomplex/jenkins-zsh",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "oh-my-zsh", "jenkins"],
  installation: {
    origin: "github",
    sourceFiles: ["jenkins.plugin.zsh"],
  },
};

export default plugin;
