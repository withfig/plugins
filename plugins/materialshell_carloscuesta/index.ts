const plugin: Fig.Plugin = {
  name: "materialshell_carloscuesta",
  type: "shell",
  description: "A material design theme for your terminal. ✨",
  authors: [
    {
      name: "carloscuesta",
      github: "carloscuesta",
      twitter: "crloscuesta",
    }
  ],
  github: "carloscuesta/materialshell",
  license: ["MIT"],
  site: "https://materialshell.carloscuesta.me",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "materialshell",
    "material-design",
    "shell",
    "zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["materialshell.zsh"],
  },
};

export default plugin;
