const plugin: Fig.Plugin = {
  name: "pretty-time (sindresorhus)",
  type: "shell",
  description: "Convert seconds to a human readable string: 165392 → 1d 21h 56m 32s",
  github: "sindresorhus/pretty-time-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
