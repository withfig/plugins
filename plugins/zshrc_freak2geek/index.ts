const plugin: Fig.Plugin = {
  name: "zshrc_freak2geek",
  type: "shell",
  description: "A zsh plugin to load local \".zshrc\" files from your project scopes.",
  authors: [
    {
      name: "freak2geek",
      github: "freak2geek",
    }
  ],
  github: "freak2geek/zshrc",
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"install.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"zshrc.plugin.zsh"
      ],
    },
  },
};

export default plugin;
