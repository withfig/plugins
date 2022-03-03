const plugin: Fig.Plugin = {
  name: "zed",
  type: "shell",
  description: "A simple wrapper for z to install as zsh plugin.",
  github: "eendroroy/zed-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "z",
    "jumparound",
    "z-zsh",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
