const plugin: Fig.Plugin = {
  name: "zsh-autoswitch-virtualenv_MichaelAquilina",
  displayName: "Zsh Autoswitch Python Virtualenv",
  icon: "🐍",
  type: "shell",
  description:
    "ZSH plugin to automatically switch python virtualenvs (including pipenv and poetry) as you move between directories",
  authors: [
    {
      name: "MichaelAquilina",
      github: "MichaelAquilina",
    },
  ],
  github: "MichaelAquilina/zsh-autoswitch-virtualenv",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh-plugins",
    "virtualenv",
    "shell-script",
    "python",
    "virtualenvwrapper",
    "zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["autoswitch_virtualenv.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "Message Format",
      type: "environmentVariable",
      name: "AUTOSWITCH_MESSAGE_FORMAT",
      description: "Message to display when switching directories",
      interface: "text",
      default: "Switching %venv_type: %venv_name [%py_version]",
    },
    {
      displayName: "Default Virtualenv",
      type: "environmentVariable",
      name: "AUTOSWITCH_DEFAULTENV",
      description: "Default virtualenv when not in a python project",
      interface: "text",
      default: null,
    },
    {
      displayName: "Default Python Binary",
      type: "environmentVariable",
      name: "AUTOSWITCH_DEFAULT_PYTHON",
      description: "Default python binary to use to create virtualenvs",
      additionalDetails:
        "Can still be overridden with the `--python` parameter",
      interface: "text",
      default: null,
    },
    {
      displayName: "Autoswitch Filename",
      type: "environmentVariable",
      name: "AUTOSWITCH_FILE",
      description:
        "The file that is searched for in each directory in order to tell if a virtualenv should be automatically activated",
      interface: "text",
      default: ".venv",
    },
    {
      displayName: "Default Requirements File",
      type: "environmentVariable",
      name: "AUTOSWITCH_DEFAULT_REQUIREMENTS",
      description:
        "Default requirements file to use when creating a virtualenv",
      interface: "text",
      default: null,
    },
    {
      displayName: "Silent Autoswitch",
      type: "environmentVariable",
      name: "AUTOSWITCH_SILENT",
      description:
        "Prevent verbose messages from being displayed when moving between directories",
      interface: "toggle",
      default: false,
      compile: (value) => (value ? "1" : null),
    },
    {
      displayName: "Virtualenv Location",
      type: "environmentVariable",
      name: "AUTOSWITCH_VIRTUAL_ENV_DIR",
      description:
        "Location that created virtualenvs are placed in. You can use a relative path for virtualenvs to be stored in each project directory.",
      interface: "text",
      default: "$HOME/.virtualenvs",
    },
    {
      displayName: "Pip Install Mode",
      type: "environmentVariable",
      name: "AUTOSWITCH_PIPINSTALL",
      description:
        "Choose the pip installation mode mode that `mkenv` installs with. By default this is `editable` mode (for development).",
      interface: "select",
      options: ["editable", "full"],
      default: "editable",
      compile: (value: string) => (value === "full" ? "FULL" : null),
    },
  ],
};

export default plugin;
