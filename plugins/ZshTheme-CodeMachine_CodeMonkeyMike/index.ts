const plugin: Fig.Plugin = {
  name: "ZshTheme-CodeMachine_CodeMonkeyMike",
  type: "shell",
  description: "Theme for Zsh called CodeMachine, its friggen awesome",
  authors: [
    {
      name: "CodeMonkeyMike",
      github: "CodeMonkeyMike",
    }
  ],
  github: "CodeMonkeyMike/ZshTheme-CodeMachine",
  shells: ["zsh"],
  categories: ["Compleation"],
  installation: {
    origin: "github",
    sourceFiles: ["codemachine.zsh-theme"],
  },
};

export default plugin;
