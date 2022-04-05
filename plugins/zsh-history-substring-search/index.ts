const plugin: Fig.Plugin = {
  name: "zsh-history-substring-search",
  type: "shell",
  description: "ZSH port of Fish history search (up arrow)",
  icon: "🐠",
  authors: [
    {
      name: "zsh-users",
      github: "zsh-users",
    },
  ],
  github: "zsh-users/zsh-history-substring-search",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["history-search", "command-history", "fish-shell", "zsh-plugins"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-history-substring-search.plugin.zsh"],
  },
  configuration: [
    {
      name: "bind-keys",
      displayName: "Bind Keys",
      type: "script",
      interface: "text",
      default:
        `bindkey '...' history-substring-search-up\n` +
        `bindkey '...' history-substring-search-down`,
      compile: (value: string) => value,
    },
    {
      name: "Found Hightlight Style",
      additionalDetails:
        "A global variable that defines how the query should be highlighted " +
        "inside a matching command. Its default value causes this script to " +
        "highlight using bold, white text on a magenta background. See the " +
        '"Character Highlighting" section in the `zshzle(1)` man page to ' +
        "learn about the kinds of values you may assign to this variable.",
      type: "environmentVariable",
      environmentVariable: "HISTORY_SUBSTRING_SEARCH_HIGHLIGHT_FOUND",
      interface: "text",
      default: "",
    },
    {
      name: "Not Found Hightlight Style",
      additionalDetails:
        "a global variable that defines how the query should be highlighted " +
        "when no commands in the history match it. Its default value causes " +
        "this script to highlight using bold, white text on a red " +
        'background. See the "Character Highlighting" section in the ' +
        "`zshzle(1)` man page to learn about the kinds of values you may " +
        "assign to this variable.",
      type: "environmentVariable",
      environmentVariable: "HISTORY_SUBSTRING_SEARCH_HIGHLIGHT_NOT_FOUND",
      interface: "text",
      default: "",
    },
    {
      name: "Fuzzy Search",
      additionalDetails:
        "A global variable that defines how the command history will be " +
        "searched for your query. If true, causes this script to perform a " +
        "fuzzy search by words, matching in given order e.g. `ab c` will " +
        "match `*ab*c*`.",
      type: "environmentVariable",
      environmentVariable: "HISTORY_SUBSTRING_SEARCH_FUZZY",
      interface: "toggle",
      default: false,
    },
    {
      name: "Search Prefixed",
      additionalDetails:
        "A global variable that defines how the command history will be " +
        "searched for your query. If true, your query will " +
        "be matched against the start of each history entry. For example, if " +
        "this variable is empty, `ls` will match `ls -l` and `echo ls;` if " +
        "it is non-empty, `ls` will only match `ls -l`.",
      type: "environmentVariable",
      environmentVariable: "HISTORY_SUBSTRING_SEARCH_PREFIXED",
      interface: "toggle",
      default: false,
    },
    {
      name: "Ensure Unique",
      additionalDetails:
        "A global variable that defines whether all search results returned " +
        "are unique. If true, then only unique search results are presented. " +
        "This behaviour is off by default.",
      type: "environmentVariable",
      environmentVariable: "HISTORY_SUBSTRING_SEARCH_ENSURE_UNIQUE",
      interface: "toggle",
      default: false,
    },
  ],
};

export default plugin;
