const plugin: Fig.Plugin = {
  icon: "😀",
  name: "ZshTheme-CodeMachine_CodeMonkeyMike",
  displayName: "CodeMachine",
  type: "shell",
  description: "Theme for Zsh called CodeMachine, its friggen awesome",
  authors: [
    {
      name: "CodeMonkeyMike",
      github: "CodeMonkeyMike",
    },
  ],
  github: "CodeMonkeyMike/ZshTheme-CodeMachine",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["codemachine.zsh-theme"],
  },
};

export default plugin;
