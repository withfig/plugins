const plugin: Fig.Plugin = {
  name: "svn-n-zsh",
  type: "shell",
  description: "Improved version of SVN plugin provided with the oh-my-zsh.",
  github: "khrt/svn-n-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
