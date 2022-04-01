const plugin: Fig.Plugin = {
  name: "gitcd.plugin.zsh_viko16",
  type: "shell",
  description: "👷 [oh-my-zsh plugin] git clone and change directory by a single command",
  authors: [
    {
      name: "viko16",
      github: "viko16",
    }
  ],
  github: "viko16/gitcd.plugin.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "oh-my-zsh-plugin",
    "zsh",
    "gitcd",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["gitcd.plugin.zsh"],
  },
};

export default plugin;
