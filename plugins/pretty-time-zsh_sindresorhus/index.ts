const plugin: Fig.Plugin = {
  name: "pretty-time-zsh_sindresorhus",
  displayName: "Pretty Time Zsh",
  icon: "🕑",
  type: "shell",
  description:
    "Convert seconds to a human readable string: `165392` → `1d 21h 56m 32s`",
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
  categories: ["Convenience Function"],
  installation: {
    origin: "github",
    sourceFiles: ["pretty-time.plugin.zsh"],
  },
};

export default plugin;
