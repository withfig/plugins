const plugin: Fig.Plugin = {
  name: "monthrename",
  type: "shell",
  description: "Zsh function in a plugin which renames month names to numbers in filenames",
  github: "NotTheDr01ds/zsh-plugin-monthrename",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
