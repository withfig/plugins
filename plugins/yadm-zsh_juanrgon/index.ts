const plugin: Fig.Plugin = {
  name: "yadm-zsh_juanrgon",
  type: "shell",
  description: "yadm zsh plugin",
  authors: [
    {
      name: "juanrgon",
      github: "juanrgon",
    }
  ],
  github: "juanrgon/yadm-zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["yadm.plugin.zsh"],
  },
};

export default plugin;
