const plugin: Fig.Plugin = {
  name: "auto-ls_desyncr",
  displayName: "auto-ls",
  description: "zsh plugin for auto-ls",
  icon: "📁",
  type: "shell",
  authors: [
    {
      name: "desyncr",
      github: "desyncr",
    },
  ],
  github: "desyncr/auto-ls",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Productivity Hack"],
  keywords: ["zsh", "plugin", "prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["auto-ls.plugin.zsh"],
  },
  configuration: [
    {
      name: "AUTO_LS_COMMANDS",
      description:
        "Use this configuration option to define the functions to run on cwd/enter-key",
      type: "environmentVariable",
      interface: "multiselect",
      allowUserCreatedOptions: true,
      options: [
        "ls",
        "'[[ -d $PWD/.git ]] && git status'",
        "'[[ -d $PWD/.git ]] && /usr/bin/git log|head'",
      ],
      default: [],
    },
    {
      name: "AUTO_LS_NEWLINE",
      description: "Configure `ls` to put a newline",
      type: "environmentVariable",
      interface: "toggle",
      default: true,
    },
    {
      name: "AUTO_LS_PATH",
      description: "Detect command full path to execute",
      type: "environmentVariable",
      interface: "toggle",
      default: true,
    },
    {
      name: "AUTO_LS_CHPWD",
      description: "Enable/disable auto-ls on directory change",
      type: "environmentVariable",
      interface: "toggle",
      default: true,
    },
  ],
};

export default plugin;
