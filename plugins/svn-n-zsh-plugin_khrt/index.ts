const plugin: Fig.Plugin = {
  icon: "💡",
  name: "svn-n-zsh-plugin_khrt",
  type: "shell",
  description: "Improved version of SVN plugin provided with the oh-my-zsh.",
  authors: [
    {
      name: "khrt",
      github: "khrt",
    },
  ],
  github: "khrt/svn-n-zsh-plugin",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["svn-n.plugin.zsh"],
  },
};

export default plugin;
