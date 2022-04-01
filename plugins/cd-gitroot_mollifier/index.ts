const plugin: Fig.Plugin = {
  name: "cd-gitroot_mollifier",
  type: "shell",
  description: "zsh plugin to cd to git repository root directory.",
  authors: [
    {
      name: "mollifier",
      github: "mollifier",
    }
  ],
  github: "mollifier/cd-gitroot",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["cd-gitroot.plugin.zsh"],
  },
};

export default plugin;
