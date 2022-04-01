const plugin: Fig.Plugin = {
  name: "fzf-fasd_wookayin",
  type: "shell",
  description: "🌸 fzf + fasd integration",
  authors: [
    {
      name: "wookayin",
      github: "wookayin",
    }
  ],
  github: "wookayin/fzf-fasd",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "fzf",
    "zsh",
    "fasd",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["fzf-fasd.plugin.zsh"],
  },
};

export default plugin;
