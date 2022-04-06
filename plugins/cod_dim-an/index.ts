const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "cod_dim-an",
  displayName: "Cod Completion Daemon",
  type: "shell",
  description: "cod is a completion daemon for bash/fish/zsh",
  authors: [
    {
      name: "dim-an",
      github: "dim-an",
    },
  ],
  github: "dim-an/cod",
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  keywords: ["shell", "completion", "zsh", "bash", "fish"],
  installation: {
    origin: "github",
    dependencies: [
      {
        name: "cod",
        type: "binary",
      },
    ],
    bash: {
      postScript: "source <(cod init $$ bash)",
    },
    zsh: {
      sourceFiles: ["cod.plugin.zsh"],
    },
    fish: {
      postScript: "cod init $fish_pid fish | source",
    },
  },
};

export default plugin;
