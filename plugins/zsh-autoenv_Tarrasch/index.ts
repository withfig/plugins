const plugin: Fig.Plugin = {
  icon: "🌱",
  name: "zsh-autoenv_Tarrasch",
  displayName: "zsh-autoenv",
  type: "shell",
  description: "Autoenv for zsh",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    },
  ],
  github: "Tarrasch/zsh-autoenv",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zshrc", "autoenv"],
  installation: {
    origin: "github",
    sourceFiles: ["autoenv.plugin.zsh"],
  },
  configuration: [
    {
      name: "AUTOENV_FILE_ENTER",
      type: "environmentVariable",
      description: "Name of the file to look for when entering directories.",
      default: ".autoenv.zsh",
      interface: "text",
    },

    {
      name: "AUTOENV_FILE_LEAVE",
      type: "environmentVariable",
      description:
        "Name of the file to look for when leaving directories. Requires AUTOENV_HANDLE_LEAVE=1.",
      default: ".autoenv_leave.zsh",
      interface: "text",
      disabled: ({ config }) => {
        const handleLeave = config.AUTOENV_HANDLE_LEAVE as boolean;
        return !handleLeave;
      },
    },

    {
      name: "AUTOENV_LOOK_UPWARDS",
      type: "environmentVariable",
      description: 'Look for zsh-autoenv "enter" files in parent dirs?',
      default: true,
      interface: "toggle",
      compile: (value) => (value ? "1" : "0"),
    },
    {
      name: "AUTOENV_HANDLE_LEAVE",
      type: "environmentVariable",
      description:
        'Handle leave events when changing away from a subtree, where an "enter" event was handled?',
      default: true,

      interface: "toggle",
      compile: (value) => (value ? "1" : "0"),
    },
    {
      name: "AUTOENV_DISABLED",
      type: "environmentVariable",
      description:
        "(Temporarily) disable zsh-autoenv. This gets looked at in the chpwd handler.",
      default: false,
      interface: "toggle",
      compile: (value) => (value ? "1" : "0"),
    },
  ],
};

export default plugin;
