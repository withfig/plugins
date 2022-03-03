const plugin: Fig.Plugin = {
  name: "instant-repl",
  type: "shell",
  description: "Activate a REPL for any command in your current zsh session.",
  github: "jandamm/instant-repl.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
