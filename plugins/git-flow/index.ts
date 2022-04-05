const plugin: Fig.Plugin = {
  name: "git-flow",
  type: "shell",
  description:
    "Git extensions to provide high-level repository operations for Vincent Driessen's branching model.",
  authors: [
    {
      name: "Vincent Driessen",
      github: "nive",
      twitter: "nive",
    },
  ],
  github: "nvie/gitflow",
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  categories: ["Convenience Function"],
  installation: {
    origin: "github",
    pathDirectories: ({ ctx }) => [ctx.plugin.installDirectory],
  },
};

export default plugin;
