const plugin: Fig.Plugin = {
  name: "cheatsheet_0b10",
  type: "shell",
  description: "An oh-my-zsh plugin to create, and manage simple text cheatsheets",
  authors: [
    {
      name: "0b10",
      github: "0b10",
    }
  ],
  github: "0b10/cheatsheet",
  license: ["Unlicense"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["cheatsheet.plugin.zsh"],
  },
};

export default plugin;
