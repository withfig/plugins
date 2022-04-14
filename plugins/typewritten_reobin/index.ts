const plugin: Fig.Plugin = {
  name: "typewritten_reobin",
  displayName: "Typewritten",
  icon: "📠",
  type: "shell",
  description: "A minimal, lightweight, informative zsh prompt theme",
  screenshots: [
    "https://github.com/reobin/typewritten/raw/main/docs/_media/typewritten.gif?raw=true",
    "https://github.com/reobin/typewritten/raw/main/docs/_media/configuration_examples/bash.png",
    "https://github.com/reobin/typewritten/blob/main/docs/_media/configuration_examples/pure.png?raw=true",
    "https://github.com/reobin/typewritten/blob/main/docs/_media/configuration_examples/half_pure.png?raw=true",
  ],
  authors: [
    {
      name: "reobin",
      github: "reobin",
    },
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
