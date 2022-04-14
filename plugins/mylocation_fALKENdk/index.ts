const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "mylocation_fALKENdk",
  displayName: "MyLocation",
  type: "shell",
  description: "oh-my-zsh plugin to show your current location based on ip",
  authors: [
    {
      name: "fALKENdk",
      github: "fALKENdk",
    },
  ],
  github: "fALKENdk/mylocation",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugins", "oh-my-zsh", "oh-my-zsh-plugin", "vpn"],
  installation: {
    origin: "github",
    sourceFiles: ["mylocation.plugin.zsh"],
  },
};

export default plugin;
