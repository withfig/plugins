const plugin: Fig.Plugin = {
  name: "zsh-autocomplete",
  type: "shell",
  description:
    "Real-time type-ahead completion for Zsh. Asynchronous find-as-you-type autocompletion.",
  icon: "🤖",
  authors: [
    {
      name: "marlonrichert",
      github: "marlonrichert",
      twitter: "MarlonRichert",
    },
  ],
  github: "marlonrichert/zsh-autocomplete",
  license: ["MIT"],
  shells: ["zsh"],
  screenshots: ["images/alias-expansion.png",  "images/history-lines.png", "images/history-menu.png", "images/multi-select.png", "images/recent-dirs.png", "images/requoted.png", "images/unambiguous.png"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "completion",
    "autocomplete",
    "zsh-autocomplete",
    "zsh-plugin",
    "zsh-completion",
    "asynchronous",
    "autocompletion",
    "non-blocking",
    "zsh-plugins",
    "typeahead",
    "typeahead-completions",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-autocomplete.plugin.zsh"],
  },
  configuration: [
    {
      name: "Initial Completion Mode",
      description: "The initial type of suggestions on each new command line",
      type: "script",

      interface: "select",
      options: [
        "Autocompletion",
        "History Search"
      ],
      default: "Completions",
      compile: (value) => {
        const kv: Record<string, string> = {
          "Autocompletion": `''`,
          "History Search": `history-incremental-search-backward`
        }
        return `zstyle ':autocomplete:*' default-context ${kv[value]}`
      }
    },
    {
      name: "Minimum Delay",
      description: "Wait this many seconds for typing to stop, before showing completions.",
      type: "script",

      interface: "text",
      default: 0.05,
      compile: (value) => {
        return `zstyle ':autocomplete:*' min-delay ${value}`
      }
    },
    {
      name: "Minimum Input",
      description: "Wait until this many characters have been typed, before showing completions.",
      type: "script",

      interface: "text",
      default: 0,
      compile: (value) => {
        return `zstyle ':autocomplete:*' min-input ${value}`
      }
    },
    {
      name: "Ignored Input",
      description: "Do not show completions for commands that match this extended glob pattern.",
      type: "script",

      interface: "text",
      default: '',
      compile: (value) => {
        return `zstyle ':autocomplete:*' min-input '${value}'`
      }
    },
    {
      name: "List Lines",
      description: "If there are fewer than this many lines below the prompt, move the prompt up to make room for showing this many lines of completions (approximately).",
      type: "script",

      interface: "text",
      default: 16,
      compile: (value) => {
        return `zstyle ':autocomplete:*' list-lines ${value}`
      }
    },
    {
      name: "Number of history search suggestions",
      description: "Show this many history lines when pressing ↑.",
      type: "script",

      interface: "text",
      default: 16,
      compile: (value) => {
        return `zstyle ':autocomplete:history-search:*' list-lines ${value}`
      }
    },
    {
      name: "Number of incremental history search suggestions",
      description: "Show this many history lines when pressing ⌃R or ⌃S.",
      type: "script",

      interface: "text",
      default: 16,
      compile: (value) => {
        return `zstyle ':autocomplete:history-search:*' list-lines ${value}`
      }
    },
    {
      displayName: "List Recent Directories",
      name: "recent-dirs",
      description: "Include recently visited directories in suggestions.",
      additionalDetails: "This setting cannot be changed at runtime",
      type: "script",

      interface: "toggle",
      default:  true,
      compile: (value) => {
        return value ? '' : "zstyle ':autocomplete:*' recent-dirs off"
      }
    },
    {
      name: "Recent Directories Tool",
      description: "What tool should be used to generate the list of recent directories.",
      type: "script",

      interface: "select",
      default: "cdr",
      options: [
        "cdr",
        "zsh-z",
        "zoxide",
        "z.lua",
        "z.sh",
        "autojump",
        "fasd",
      ],
      hidden: ({ config }) => {
        return config["recent-dirs"] !== true
      },
      compile: (value) => {
        return `zstyle ':autocomplete:*' recent-dirs ${value}`
      }
    },
    {
      name: "Insert Unambiguous",
      description: "When disabled, tab inserts the top completion. When enabled, tab first inserts a substring common to all listed completions, if any.",
      type: "script",

      interface: "toggle",
      default:  false,
      compile: (value) => {
        return `zstyle ':autocomplete:*' insert-unambiguous ${value ? "yes": "no"}`
      }
    },
    {
      name: "Widget Style",
      description: `
      complete-word: (Shift-)Tab inserts the top (bottom) completion.
      menu-complete: Press again to cycle to next (previous) completion.
      menu-select:   Same as \`menu-complete\`, but updates selection in menu.`,
      additionalDetails: "This setting can NOT be changed at runtime.",
      type: "script",

      interface: "select",
      default: "complete-word",
      options: [
        "complete-word",
        "menu-complete",
        "menu-select",
      ],

      compile: (value) => {
        return `zstyle ':autocomplete:*' widget-style ${value}`
      }
    },
    {
      name: "Use Fzf completions",
      description: "Tab first tries Fzf's completion, then falls back to Zsh's",
      additionalDetails: " This setting can NOT be changed at runtime and requires that you have installed Fzf's shell extensions.",
      type: "script",

      interface: "toggle",
      default:  false,
      compile: (value) => {
        return`zstyle ':autocomplete:*' fzf-completion ${value ? "on" : "off"}`
      }
    },
    {
      name: "Add space after...",
      description: " Add a space after these completions",
      type: "script",

      interface: "multiselect",
      options: [
        "executables",
        "aliases",
        "functions",
        "builtins",
        "reserved-words",
        "commands"
      ],
      default: "executables aliases functions builtins reserved-words commands",
      compile: (value) => {
        return`zstyle ':autocomplete:*' add-space ${value.join(" ")}`
      }
    },
  ]
};

export default plugin;
