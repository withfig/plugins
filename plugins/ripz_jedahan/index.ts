const plugin: Fig.Plugin = {
  name: "ripz_jedahan",
  type: "shell",
  description: "💡 ripgrep-powered zsh plugin alias reminder",
  authors: [
    {
      name: "jedahan",
      github: "jedahan",
    }
  ],
  github: "jedahan/ripz",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "ripgrep",
    "aliases",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["ripz.plugin.zsh"],
  },
};

export default plugin;
