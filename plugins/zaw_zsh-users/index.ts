const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "zaw_zsh-users",
  displayName: "Zaw",
  type: "shell",
  description: "zsh anything.el-like widget.",
  authors: [
    {
      name: "zsh-users",
      github: "zsh-users",
    },
  ],
  github: "zsh-users/zaw",
  license: ["BSD-3"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zaw.plugin.zsh"],
  },
  configuration: [
    {
      name: "max-lines",
      displayName: "Max Lines",
      description: "Maximum number of lines to display",
      type: "script",
      interface: "text",
      default: "",
      compile: (value) =>
        value ? `zstyle ':filter-select' max-lines ${value}` : "",
    },
    {
      name: "rotate-list",
      displayName: "Enable rotation for filter-select",
      type: "script",
      interface: "toggle",
      default: false,
      compile: (value) =>
        `zstyle ':filter-select' rotate-list ${value ? "yes" : "no"}`,
    },
    {
      name: "case-insensitive",
      displayName: "Enable case-insensitive search",
      type: "script",
      interface: "toggle",
      default: false,
      compile: (value) =>
        `zstyle ':filter-select' case-insensitive ${value ? "yes" : "no"}`,
    },
    {
      name: "extended-search",
      displayName: "Enable extended search",
      additionalDetails: `If this style set to be true value, the searching \
        behavior will be extended as follows:\n\n\
        \`^\` Match the beginning of the line if the word begins with \`^\`\n\
        \`$\` Match the end of the line if the word ends with \`$\`\n\
        \`!\` Match anything except the word following it if the word begins \
        with \`!\` so-called smartcase searching\n\n\
        If you want to search these metacharacters, please doubly escape them.`,
      type: "script",
      interface: "toggle",
      default: false,
      compile: (value) =>
        `zstyle ':filter-select' extended-search ${value ? "yes" : "no"}`,
    },
    {
      name: "hist-find-no-dups",
      displayName: "Ignore duplicates in history source",
      type: "script",
      interface: "toggle",
      default: false,
      compile: (value) =>
        `zstyle ':filter-select' hist-find-no-dups ${value ? "yes" : "no"}`,
    },
    {
      name: "escape-descriptions",
      displayName: "Escape Descriptions",
      description: "Display literal newlines, not \\n, etc",
      type: "script",
      interface: "toggle",
      default: false,
      compile: (value) =>
        `zstyle ':filter-select' escape-descriptions ${value ? "yes" : "no"}`,
    },
    // TODO: ':zaw:<source-name>' default <func_name>
    // TODO: ':zaw:<source-name>' alt <func_name>
    {
      displayName: "Editor",
      description: "Editor to use for editing files",
      type: "environmentVariable",
      name: "ZAW_EDITOR",
      interface: "text",
      default: "",
    },
  ],
};

export default plugin;
