const plugin: Fig.Plugin = {
  name: "vox",
  type: "shell",
  description: "This oh-my-zsh plugin allows you to control VOX (http://coppertino.com/vox/mac) using your terminal.",
  github: "andrewbonnington/vox.plugin.zsh",
  shells: ["zsh"],
  tags: [
    "cli",
    "terminal",
    "vox",
    "zsh-plugins",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
