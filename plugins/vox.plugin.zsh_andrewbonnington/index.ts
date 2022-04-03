const plugin: Fig.Plugin = {
  name: "vox.plugin.zsh_andrewbonnington",
  type: "shell",
  description:
    "This oh-my-zsh plugin allows you to control VOX (http://coppertino.com/vox/mac) using your terminal.",
  authors: [
    {
      name: "andrewbonnington",
      github: "andrewbonnington",
    },
  ],
  github: "andrewbonnington/vox.plugin.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["vox", "zsh-plugins", "terminal", "cli"],
  installation: {
    origin: "github",
    sourceFiles: ["vox.plugin.zsh"],
  },
};

export default plugin;
