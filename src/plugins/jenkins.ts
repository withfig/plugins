const plugin: Fig.Plugin = {
  name: "jenkins",
  type: "shell",
  description: "A jenkins plugin for ZSH.",
  github: "tomplex/jenkins-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "jenkins",
    "oh-my-zsh",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
