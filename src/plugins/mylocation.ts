const plugin: Fig.Plugin = {
  name: "mylocation",
  type: "shell",
  description: "oh-my-zsh plugin to show your current location based on ip",
  github: "fALKENdk/mylocation",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "vpn",
    "zsh-plugins",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
