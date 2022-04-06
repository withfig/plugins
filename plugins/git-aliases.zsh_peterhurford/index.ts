const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "git-aliases.zsh_peterhurford",
  displayName: "Git Aliases (peterhurford)",
  type: "shell",
  description: "Useful aliases for interacting with GitHub more quickly.",
  authors: [
    {
      name: "peterhurford",
      github: "peterhurford",
    },
  ],
  github: "peterhurford/git-aliases.zsh",
  shells: ["zsh"],
  categories: ["Alias"],
  installation: {
    origin: "github",
    sourceFiles: ["git-aliases.plugin.zsh"],
  },
  configuration: [
    {
      name: "GIT_ALIASES_SILENCE_GIT_STATUS",
      description: "Disable `git status` with every branch change",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
    {
      name: "GIT_ALIASES_AUTO PUSH_NEW_BRANCH",
      description: "Automatically push a new branch upon branch creation",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
    {
      name: "GIT_ALIASES_ICDIFF",
      description: "Use `icdiff` instead of `diff` for diffing",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
    {
      name: "GIT_ALIASES_SHORTER_GIT_STATUS",
      description: "Enable a shorter, prettier version of `git status`",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
  ],
};

export default plugin;
