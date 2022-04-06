// Requires compiling down an executable

const plugin: Fig.Plugin = {
  icon: "📜",
  name: "zsh-history_b4b4r07",
  displayName: "Zsh History Searchable by SQL",
  type: "shell",
  description:
    "A plugin for zsh history extended by golang, dealing it like SQL",
  authors: [
    {
      name: "b4b4r07",
      github: "b4b4r07",
      twitter: "b4b4r07",
    },
  ],
  github: "b4b4r07/zsh-history",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "golang", "go", "zsh-plugin", "sql"],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
};

export default plugin;
