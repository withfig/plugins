const plugin: Fig.Plugin = {
  name: "jq-zsh-plugin_reegnz",
  type: "shell",
  description: "jq zsh plugin",
  authors: [
    {
      name: "reegnz",
      github: "reegnz",
      twitter: "zoltanreegn",
    }
  ],
  github: "reegnz/jq-zsh-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "zshell",
    "jq",
    "cli",
    "shell",
    "fzf",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["jq.plugin.zsh"],
  },
};

export default plugin;
