const plugin: Fig.Plugin = {
  name: "hbt",
  type: "shell",
  description: "Experimental command suggestion system based on historical usage of commands in certain locations.",
  github: "lzambarda/hbt",
  shells: ["zsh"],
  tags: [
    "go",
    "zsh",
    "terminal",
    "suggestions",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
