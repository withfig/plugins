const plugin: Fig.Plugin = {
  name: "grep2awk_joepvd",
  type: "shell",
  description: "zsh/zle widget to transform grep commands to awk commands",
  authors: [
    {
      name: "joepvd",
      github: "joepvd",
    }
  ],
  github: "joepvd/grep2awk",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["grep2awk.plugin.zsh"],
  },
};

export default plugin;
