const plugin: Fig.Plugin = {
  name: "last-working-directory (mdumitru)",
  type: "shell",
  description: "This is a clone of the plugin of the same name present at: https://github.com/robbyrussell/oh-my-zsh",
  github: "mdumitru/last-working-dir",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
