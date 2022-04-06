const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "oh-my-zsh-powerline-theme_jeremyFreeAgent",
  displayName: "oh-my-zsh-powerline-theme",
  type: "shell",
  description: "oh-my-zsh Powerline style Theme",
  authors: [
    {
      name: "jeremyFreeAgent",
      github: "jeremyFreeAgent",
      twitter: "jeremyFreeAgent",
    },
  ],
  github: "jeremyFreeAgent/oh-my-zsh-powerline-theme",
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["theme", "prompt", "ohmyzsh", "zsh", "bash"],
  installation: {
    origin: "github",
    sourceFiles: ["install_in_omz.sh"],
    postScript: `export ZSH_THEME="powerline"`,
  },
  configuration: [
    {
      displayName: "Hide User Name",
      type: "environmentVariable",
      description: "Hide username in prompt.",
      name: "POWERLINE_HIDE_USER_NAME",
      interface: "toggle",
      default: false,
      compile: (value) => (value ? "true" : ""),
    },
    {
      displayName: "Hide Host Name",
      type: "environmentVariable",
      description: "Hide hostname in prompt.",
      name: "POWERLINE_HIDE_HOST_NAME",
      interface: "toggle",
      default: false,
      compile: (value) => (value ? "true" : ""),
    },
    {
      displayName: "Hide Git Status",
      type: "environmentVariable",
      description:
        "Hide git status (new files, modified files, unmerged files, etc.) from prompt",
      name: "POWERLINE_HIDE_GIT_PROMPT_STATUS",
      interface: "toggle",
      default: false,
      compile: (value) => (value ? "true" : ""),
    },
    {
      displayName: "Blank Line",
      type: "environmentVariable",
      description: "Add blank line before the prompt",
      name: "POWERLINE_NO_BLANK_LINE",
      interface: "toggle",
      default: true,
      compile: (value) => (value ? "" : "true"),
    },
    {
      displayName: "Path Display",
      type: "environmentVariable",
      description: "How to display the path in the prompt",
      name: "POWERLINE_NO_BLANK_LINE",
      interface: "select",
      default: "",
      options: [
        "",
        { option: "short", description: "Display ~ for home directory" },
        { option: "full", description: "Display full path" },
      ],
    },
    {
      displayName: "Hide Right Prompt",
      type: "environmentVariable",
      description: "Hide right prompt completely.",
      name: "POWERLINE_DISABLE_RPROMPT",
      interface: "toggle",
      default: false,
      compile: (value) => (value ? "true" : ""),
    },
    /* TODO: Additional configuration
  If you want to customize the current path display (overrides full path above):
  ```
  POWERLINE_CUSTOM_CURRENT_PATH="%3~"
  ```

  If you want git info on right instead of left:

  ```
  POWERLINE_SHOW_GIT_ON_RIGHT="true"
  ```

  If you want to tell if you are in a remote SSH session:

  ```
  POWERLINE_DETECT_SSH="true"
  ```

  If you want to hide virtualenv information in the prompt:

  ```
  POWERLINE_HIDE_VIRTUAL_ENV="true"
  ```

  Also you can change the icons of GIT info, default values are:
  ```
  POWERLINE_GIT_CLEAN="✔"
  POWERLINE_GIT_DIRTY="✘"
  POWERLINE_GIT_ADDED="%F{green}✚%F{black}"
  POWERLINE_GIT_MODIFIED="%F{blue}✹%F{black}"
  POWERLINE_GIT_DELETED="%F{red}✖%F{black}"
  POWERLINE_GIT_UNTRACKED="%F{yellow}✭%F{black}"
  POWERLINE_GIT_RENAMED="➜"
  POWERLINE_GIT_UNMERGED="═"
  ```
  */
    {
      displayName: "Right Prompt",
      description: "Right prompt configuration options",
      hidden: ({ config }) => Boolean(config.POWERLINE_DISABLE_RPROMPT),
      configuration: [
        {
          displayName: "First component",
          type: "environmentVariable",
          description:
            "First element of the right prompt. Defaults to date if empty. Set to 'none' to disable. Can select an option or specify custom text.",
          name: "POWERLINE_RIGHT_A",
          interface: "select",
          allowUserCreatedOptions: true,
          default: "",
          options: [
            { option: "", description: "Date (default)" },
            {
              option: "none",
              description: "Empty. Don't show first right prompt component.",
            },
            { option: "exit-status", description: "Exit code of last command" },
            {
              option: "exit-status-on-fail",
              description: "Exit code of last command if failed",
            },
            {
              option: "mixed",
              description: "Display date or nonzero exit code of last command",
            },
          ],
        },
        {
          displayName: "Date Format",
          type: "environmentVariable",
          hidden: ({ config }) => config.POWERLINE_RIGHT_A === "",
          description:
            "Date format used in first right prompt component when set to default",
          name: "POWERLINE_RIGHT_A_COLOR_BACK",
          interface: "text",
          default: "%D{%Y-%m-%d}",
        },
        {
          displayName: "First Component Foreground Color",
          type: "environmentVariable",
          description: "Foreground color of first element of the right prompt",
          name: "POWERLINE_RIGHT_A_COLOR_FRONT",
          interface: "text",
          default: "black",
        },
        {
          displayName: "First Component Background Color",
          type: "environmentVariable",
          description: "Background color of first element of the right prompt",
          name: "POWERLINE_RIGHT_A_COLOR_BACK",
          interface: "text",
          default: "red",
        },
        {
          displayName: "Secound Component",
          type: "environmentVariable",
          description:
            "Second element of the right prompt. Defaults to time if empty. Set to 'none' to disable.",
          name: "POWERLINE_RIGHT_B",
          interface: "select",
          allowUserCreatedOptions: true,
          default: "",
          options: ["", "none"],
        },
      ],
    },
  ],
};

export default plugin;
