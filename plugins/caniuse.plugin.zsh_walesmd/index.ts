const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "caniuse.plugin.zsh_walesmd",
  type: "shell",
  description:
    "This oh-my-zsh plugin brings CanIUse (http://caniuse.com) to your terminal.",
  authors: [
    {
      name: "walesmd",
      github: "walesmd",
    },
  ],
  github: "walesmd/caniuse.plugin.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["caniuse.plugin.zsh"],
  },
};

export default plugin;
