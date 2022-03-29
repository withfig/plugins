const plugin: Fig.Plugin = {
  name: "typewritten_reobin",
  type: "shell",
  description: "A minimal, lightweight, informative zsh prompt theme",
  authors: [
    {
      name: "reobin",
      github: "reobin",
    }
  ],
  github: "reobin/typewritten",
  license: ["MIT"],
  site: "https://typewritten.dev",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "prompt",
    "theme",
    "minimal",
    "shell",
    "git",
    "terminal",
    "async",
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["typewritten.plugin.zsh"],
  },
};

export default plugin;
