const plugin: Fig.Plugin = {
  icon: "💡",
  name: "zce.zsh_hchbaw",
  displayName: "Zce",
  type: "shell",
  description: "# zsh EasyMotion/ace-jump-mode",
  authors: [
    {
      name: "hchbaw",
      github: "hchbaw",
    },
  ],
  github: "hchbaw/zce.zsh",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zce.zsh"],
  },
  configuration: [
    {
      name: "keys",
      description: "Keys to be used for target characters",
      type: "script",
      interface: "text",
      default: "$(setopt braceccl; ${(j..)$(print {a-z} {A-Z})})",
      compile: (value) => `zstyle ":zce:*" keys "${value}"`,
    },
    {
      name: "fg",
      description: "A highlight sepc for target characters",
      type: "script",
      interface: "text",
      default: "fg=196,bold",
      compile: (value) => `zstyle ":zce:*" fg "${value}"`,
    },
    {
      name: "bg",
      description: "A highlight spec for BUFFER during zce is in effect",
      type: "script",
      interface: "text",
      default: "fg=black,bold",
      compile: (value) => `zstyle ":zce:*" bg "${value}"`,
    },
    {
      name: "prompt-char",
      description: "A prompt string for querying the searching character",
      type: "script",
      interface: "text",
      default: "%{\\e[1;32m%}Search for character:%{\\e[0m%} ",
      compile: (value) => `zstyle ":zce:*" prompt-char "${value}"`,
    },
    {
      name: "prompt-key",
      description: "A prompt string for querying the target character",
      type: "script",
      interface: "text",
      default: "%{\\e[1;32m%}Target key:%{\\e[0m%} ",
      compile: (value) => `zstyle ":zce:*" prompt-key "${value}"`,
    },
  ],
};

export default plugin;
