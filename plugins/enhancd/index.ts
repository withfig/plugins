const plugin: Fig.Plugin = {
  name: "enhancd",
  displayName: "Enhancd",
  type: "shell",
  description: "A next-generation cd command with your interactive filter",
  icon: "🚀",
  github: "b4b4r07/enhancd",
  authors: [
    {
      name: "b4b4r07",
      github: "b4b4r07",
      twitter: "b4b4r07",
    },
  ],
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  categories: ["Productivity Hack"],
  keywords: [
    "bash",
    "zsh",
    "zplug",
    "shell",
    "fuzzy-search",
    "fzf",
    "fzf-scripts",
    "cd",
    "cli",
    "command-line-tool",
    "command-line-interface",
    "shell-extension",
    "shell-scripts",
    "jump",
    "autojump",
    "z",
    "fasd",
  ],
  installation: {
    origin: "github",
    dependencies: [{ type: "binary", name: "fzf" }],
    bash: {
      sourceFiles: ["init.sh"],
    },
    zsh: {
      sourceFiles: ["init.sh"],
    },
    fish: {
      conf: true,
      functions: true,
    },
  },
  configuration: [
    {
      displayName: "Command name",
      description: "Change the command name of enhancd `cd`",
      type: "environmentVariable",
      name: "ENHANCD_COMMAND",
      interface: "text",
      default: "cd",
    },
    {
      displayName: "Filter executable",
      description:
        "Specify the path of 3rd party filtering executable, like `fzf` or `peco`",
      additionalDetails:
        "The ENHANCD_FILTER is an environment variable. It looks exactly like the PATH variable containing with many different filters concatenated using '`:`'.",
      type: "environmentVariable",
      name: "ENHANCD_FILTER",
      interface: "text",
      default: "",
    },
    {
      displayName: "Shell hook after cd",
      description: "You can run any commands after changing directory.",
      additionalDetails:
        "(e.g. Setting this value to `ls` will trigger behavior similiar to `cd && ls`)",
      type: "environmentVariable",
      name: "ENHANCD_HOOK_AFTER_CD",
      interface: "text",
      default: "",
    },
    {
      displayName: "Using Fuzzy Match",
      type: "environmentVariable",
      name: "ENHANCD_USE_FUZZY_MATCH",
      interface: "toggle",
      default: true,
    },
    {
      displayName: "Double Dot (cd ..)",
      configuration: [
        {
          displayName: "Disable filtering on double dot (..)",
          description:
            "If you don't want to use the interactive filter, when specifing a double dot (`..`)",
          type: "environmentVariable",
          name: "ENHANCD_DISABLE_DOT",
          interface: "toggle",
          default: false,
          compile: (value) => (value ? "1" : "0"),
        },
        {
          displayName: "Double dot behavior",
          description: "You can customize the double-dot (`..`) argument",
          additionalDetails: `      
          If you set this variable any but \`..\`, it gives you the _double-dot_ behavior with that argument; i.e. upward search of directory hierarchy.
          Then \`cd ..\` changes current directory to parent directory without interactive filter.
          
          In other words, you can keep original \`cd ..\` behavior by this option.
          `,
          type: "environmentVariable",
          name: "ENHANCD_DOT_ARG",
          interface: "text",
          default: "..",
        },
      ],
    },
    {
      displayName: "Hyphen (cd -)",
      configuration: [
        {
          displayName: "Disable filtering on hyphen",
          description:
            "If you don't want to use the interactive filter, when specifing a hyphen as the argument to `cd`",
          type: "environmentVariable",
          name: "ENHANCD_DISABLE_HYPHEN",
          interface: "toggle",
          default: false,
          compile: (value) => (value ? "1" : "0"),
        },
        {
          displayName: "Hyphen behavior",
          description: "You can customize the hyphen (-) argument for enha.",
          additionalDetails: `      
          If you set this variable any but \`-\`, it gives you the _hyphen_ behavior with that argument; i.e. backward search of directory-change history.
          Then \`cd -\` changes current directory to \`$OLDPWD\` without interactive filter.
          
          In other words, you can keep original \`cd -\` behavior by this option.
          `,
          type: "environmentVariable",
          name: "ENHANCD_HYPHEN_ARG",
          interface: "text",
          default: "-",
        },
        {
          displayName: "Number of history entries",
          description: `You can customize the number of rows by "cd -"`,
          additionalDetails:
            "This value is passed to `head` comand as `-n` option.",
          type: "environmentVariable",
          name: "ENHANCD_HYPHEN_NUM",
          interface: "text",
          default: 10,
        },
      ],
    },
    {
      displayName: "No argument - 'cd '",
      configuration: [
        {
          displayName: "Disable filtering on HOME",
          description:
            "If you don't want to use the interactive filter when you call `cd` without an argument",
          type: "environmentVariable",
          name: "ENHANCD_DISABLE_HOME",
          interface: "toggle",
          default: false,
          compile: (value) => (value ? "1" : "0"),
        },
        {
          displayName: "ENHANCD_HOME_ARG",
          description:
            "You can customize to trigger the argumentless `cd` behavior by giving the string specified by this environment variable as an argument.",
          additionalDetails: `
          If you set this variable any but empty string, it gives you the behavior of \`cd\` with no argument; i.e. backward search of the whole directory-change history.
          Then \`cd\` with no argument changes current directory to \`$HOME\` without interactive filter.
    
          In other words, you can keep original behavior of \`cd\` with no argument by this option.
          `,
          type: "environmentVariable",
          name: "ENHANCD_HOME_ARG",
          interface: "text",
          default: "",
        },
      ],
    },
    {
      displayName: "Completions",
      configuration: [
        {
          displayName: "Completion Keybinding",
          type: "environmentVariable",
          additionalDetails: "Default is Tab (`^I`)",
          name: "ENHANCD_COMPLETION_KEYBIND",
          interface: "text",
          default: "^I",
        },
        {
          displayName: "Completion Behavior",
          type: "environmentVariable",
          additionalDetails:
            "See [#90](https://github.com/b4b4r07/enhancd/issues/90).",
          name: "ENHANCD_COMPLETION_BEHAVIOR",
          interface: "select",
          default: "default",
          options: ["default", "list", "history"],
        },
      ],
    },
  ],
};

export default plugin;
