const plugin: Fig.Plugin = {
  name: "cod_dim-an",
  type: "shell",
  description: "cod is a completion daemon for bash/fish/zsh",
  authors: [
    {
      name: "dim-an",
      github: "dim-an",
    }
  ],
  github: "dim-an/cod",
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Compleation"],
  keywords: [
    "shell",
    "completion",
    "zsh",
    "bash",
    "fish",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"wc.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"cod.plugin.zsh"
      ],
    },
  },
};

export default plugin;
