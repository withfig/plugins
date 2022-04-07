const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "zsh-vim-mode_softmoth",
  displayName: "Zsh Vi Mode",
  type: "shell",
  description: "Friendly bindings for ZSH's vi mode",
  authors: [
    {
      name: "softmoth",
      github: "softmoth",
    },
  ],
  github: "softmoth/zsh-vim-mode",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "vi-mode", "bindkey", "prompt", "cursor"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-vim-mode.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "Initial Keymap",
      type: "environmentVariable",
      description:
        "Keymap to set on each new command prompt. Zsh defaults to INSERT mode (viins keymap)",
      name: "VIM_MODE_INITIAL_KEYMAP",
      interface: "select",
      options: [
        "insert",
        "command",
        {
          option: "last",
          description:
            "Persists whatever keymap you left off on in the previous command for the next prompt",
        },
      ],
      default: "insert",
      compile: (value: string) => {
        switch (value) {
          case "command":
            return "vicmd";
          case "last":
            return "last";
          case "insert":
          default:
            return "viins";
        }
      },
    },
  ],
};

export default plugin;
