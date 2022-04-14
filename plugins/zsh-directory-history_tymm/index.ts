const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "zsh-directory-history_tymm",
  displayName: "Zsh Directory History",
  type: "shell",
  description: "Provides directory-sensitive history features for zsh",
  authors: [
    {
      name: "tymm",
      github: "tymm",
    },
  ],
  github: "tymm/zsh-directory-history",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["directory-history.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "History Search Forward Keybinding",
      name: "history-search-forward-keybinding",
      type: "script",
      interface: "text",
      default: "\\e[B",
      compile: (value) =>
        value ? `bindkey '${value}' directory-history-search-forward` : "",
    },
    {
      displayName: "History Search Backward Keybinding",
      name: "history-search-backward-keybinding",
      type: "script",
      interface: "text",
      default: "\\e[A",
      compile: (value) =>
        value ? `bindkey '${value}' directory-history-search-backward` : "",
    },
    {
      displayName: "Substring Search Up Keybinding",
      name: "history-substring-search-up-keybinding",
      type: "script",
      interface: "text",
      default: "^j",
      compile: (value) =>
        value ? `bindkey '${value}' history-substring-search-up` : "",
    },
    {
      displayName: "Substring Search Down Keybinding",
      name: "history-substring-search-down-keybinding",
      type: "script",
      interface: "text",
      default: "^k",
      compile: (value) =>
        value ? `bindkey '${value}' history-substring-search-down` : "",
    },
  ],
};

export default plugin;
