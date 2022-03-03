const plugin: Fig.Plugin = {
  name: "zlitefetch",
  type: "shell",
  description: "A lightweight command-line system information plugin in zsh.",
  github: "ichi-h/zlitefetch",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
