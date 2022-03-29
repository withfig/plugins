const plugin: Fig.Plugin = {
  name: "ubunly-zsh-theme_alejandromume",
  type: "shell",
  description: "The new Kali Linux console bringed to Ubuntu",
  authors: [
    {
      name: "alejandromume",
      github: "alejandromume",
    }
  ],
  github: "alejandromume/ubunly-zsh-theme",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"INSTALL.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"INSTALL.sh"
      ],
    },
  },
};

export default plugin;
