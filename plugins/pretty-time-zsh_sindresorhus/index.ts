const plugin: Fig.Plugin = {
  icon: "👾",
  name: "pretty-time-zsh_sindresorhus",
  type: "shell",
  description:
    "Convert seconds to a human readable string: 165392 → 1d 21h 56m 32s",
  authors: [
    {
      name: "sindresorhus",
      github: "sindresorhus",
      twitter: "sindresorhus",
    },
  ],
  github: "sindresorhus/pretty-time-zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["pretty-time.plugin.zsh"],
  },
};

export default plugin;
