const colors = [
  "BOLD",
  "BLACK",
  "BOLD_GRAY",
  "RED",
  "BOLD_RED",
  "GREEN",
  "BOLD_GREEN",
  "YELLOW",
  "BOLD_YELLOW",
  "BLUE",
  "BOLD_BLUE",
  "PURPLE",
  "MAGENTA",
  "BOLD_PURPLE",
  "BOLD_MAGENTA",
  "PINK",
  "CYAN",
  "BOLD_CYAN",
  "WHITE",
  "BOLD_WHITE",
  "WARN_RED",
  "CRIT_RED",
  "DANGER_RED",
];

const plugin: Fig.Plugin = {
  name: "liquidprompt",
  icon: "💧",
  type: "shell",
  description:
    "A full-featured & carefully designed adaptive prompt for Bash & Zsh",
  authors: [
    {
      name: "nojhan",
      github: "nojhan",
      twitter: "nojhan",
    },
  ],
  github: "nojhan/liquidprompt",
  license: ["AGPL-3.0"],
  site: "https://liquidprompt.readthedocs.io/",
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "bash", "prompt", "linux-shell", "powerline"],
  screenshots: ["images/main.png"],
  installation: {
    origin: "github",
    sourceFiles: ["liquidprompt"],
  },
  configuration: [
    {
      displayName: "Features",
      configuration: [
        {
          displayName: "Enable Error",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_ERROR",
          description: "Display the last command error code if it is not `0`.",
          interface: "toggle",
          default: true,
        },
        {
          displayName: "Enable Battery Status",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_BATT",
          description:
            "Display the status of the battery, if there is one, using color and marks.",
          additionalDetails:
            "Will be disabled if `acpi` is not found on Linux, or `pmset` is not found on MacOS.",
          interface: "toggle",
          default: true,
        },
        {
          displayName: "Enable Runtime",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_RUNTIME",
          description: "Display the runtime of the last command.",
          interface: "toggle",
          default: true,
        },
        {
          displayName: "Enable Detached Session",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_DETACHED_SESSIONS",
          description: "Display the number of detached multiplexer sessions.",
          additionalDetails:
            "Will be disabled if neither `screen` nor `tmux` are found.",
          interface: "toggle",
          default: true,
        },
        {
          displayName: "Enable Dirstack",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_DIRSTACK",
          description:
            "Display the size of the directory stack if it is greater than `1`.",
          interface: "toggle",
          default: false,
        },
        {
          displayName: "Fully Qualified Hostname",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_FQDN",
          description:
            "Display the fully qualified hostname instead of the short hostname.",
          interface: "toggle",
          default: false,
        },
        {
          displayName: "Enable Color",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_COLOR",
          description: "Use terminal formatting when displaying the prompt.",
          additionalDetails: "Will be disabled if tput is not found.",
          interface: "toggle",
          default: true,
        },
        {
          displayName: "Enable Jobs",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_JOBS",
          description: "Display the number of running and sleeping shell jobs.",
          interface: "toggle",
          default: true,
        },
      ],
    },
    {
      displayName: "VCS",
      configuration: [
        {
          displayName: "Enable Git",
          type: "environmentVariable",
          environmentVariable: "LP_ENABLE_GIT",
          description: "Display VCS information inside Git repositories.",
          additionalDetails: "Will be disabled if `git` is not found.",
          interface: "toggle",
          default: true,
        },
        {
          displayName: "Git Mark",
          type: "environmentVariable",
          description:
            "Mark used to indicate that the current directory is inside of a Git repository.",
          default: "±",
          interface: "text",
          environmentVariable: "LP_MARK_GIT",
          hidden: ({ config }) => !config["LP_ENABLE_GIT"],
        },
        {
          displayName: "Enable Mercurial",
          type: "environmentVariable",
          description: "Display VCS information inside Mercurial repositories.",
          additionalDetails: "Will be disabled if `hg` is not found.",
          default: true,
          interface: "toggle",
          environmentVariable: "LP_ENABLE_HG",
        },
        {
          displayName: "Mercurial Mark",
          type: "environmentVariable",
          description:
            "Mark used to indicate that the current directory is inside of a Mercurial repository.",
          default: "☿",
          interface: "text",
          environmentVariable: "LP_MARK_HG",
          hidden: ({ config }) => !config["LP_ENABLE_HG"],
        },
        {
          displayName: "Enable Subversion",
          type: "environmentVariable",
          description:
            "Display VCS information inside Subversion repositories.",
          additionalDetails: "Will be disabled if `svn` is not found.",
          default: true,
          interface: "toggle",
          environmentVariable: "LP_ENABLE_SVN",
        },
        {
          displayName: "Subversion Mark",
          type: "environmentVariable",
          description:
            "Mark used to indicate that the current directory is inside of a Subversion repository.",
          default: "‡",
          interface: "text",
          environmentVariable: "LP_MARK_SVN",
          hidden: ({ config }) => !config["LP_ENABLE_SVN"],
        },
        {
          displayName: "Enable Fossil",
          type: "environmentVariable",
          description: "Display VCS information inside Fossil repositories.",
          additionalDetails: "Will be disabled if `fossil` is not found.",
          default: true,
          interface: "toggle",
          environmentVariable: "LP_ENABLE_FOSSIL",
        },
        {
          displayName: "Fossil Mark",
          type: "environmentVariable",
          description:
            "Mark used to indicate that the current directory is inside of a Fossil repository.",
          default: "⌘",
          interface: "text",
          environmentVariable: "LP_MARK_FOSSIL",
          hidden: ({ config }) => !config["LP_ENABLE_FOSSIL"],
        },
        {
          displayName: "Enable Bazaar",
          type: "environmentVariable",
          description: "Display VCS information inside Bazaar repositories.",
          additionalDetails: "Will be disabled if `bzr` is not found.",
          default: true,
          interface: "toggle",
          environmentVariable: "LP_ENABLE_BZR",
        },
        {
          displayName: "Bazaar Mark",
          type: "environmentVariable",
          description:
            "Mark used to indicate that the current directory is inside of a Bazaar repository.",
          default: "⚯",
          interface: "text",
          environmentVariable: "LP_MARK_BZR",
          hidden: ({ config }) => !config["LP_ENABLE_BZR"],
        },
      ],
    },
    {
      displayName: "Path Shortening",
      configuration: [
        {
          displayName: "Enable Path Shortening",
          type: "environmentVariable",
          description:
            "Use the shorten path feature if the path is too long to fit in the prompt line.",
          default: true,
          interface: "toggle",
          environmentVariable: "LP_ENABLE_SHORTEN_PATH",
        },
        {
          displayName: "Shortend Path Characters",
          type: "environmentVariable",
          description:
            "The number of characters to save at the start and possibly the end of a directory name when shortening the path.",
          default: 3,
          interface: "text",
          environmentVariable: "LP_PATH_CHARACTER_KEEP",
          hidden: ({ config }) => !config["LP_ENABLE_SHORTEN_PATH"],
        },
        {
          displayName: "Path Keep",
          type: "environmentVariable",
          description:
            "The number of directories (counting `/`) to display at the beginning of a shortened path.",
          additionalDetails:
            "Set to `1`, will display only root. Set to `0`, will keep nothing from the beginning of the path.",
          default: 2,
          interface: "text",
          environmentVariable: "LP_PATH_KEEP",
          hidden: ({ config }) => !config["LP_ENABLE_SHORTEN_PATH"],
        },
        {
          displayName: "Path Length Max Width",
          type: "environmentVariable",
          description:
            "The maximum percentage of the terminal width used to display the path before removing the center portion of the path and replacing with `LP_MARK_SHORTEN_PATH`.",
          default: 35,
          interface: "text",
          environmentVariable: "LP_PATH_LENGTH",
          hidden: ({ config }) => !config["LP_ENABLE_SHORTEN_PATH"],
        },
        {
          displayName: "Path Length Max Width",
          type: "environmentVariable",
          description:
            "Sets the method used for shortening the path display when it exceeds the maximum length set by `LP_PATH_LENGTH`.",
          default: "truncate_chars_from_path_left",
          interface: "select",
          options: [
            "truncate_chars_from_path_left",
            "truncate_chars_from_dir_right",
            "truncate_chars_from_dir_middle",
            "truncate_chars_to_unique_dir",
            "truncate_to_last_dir",
          ],
          environmentVariable: "LP_PATH_METHOD",
          hidden: ({ config }) => !config["LP_ENABLE_SHORTEN_PATH"],
        },
      ],
    },
    {
      displayName: "Prompt",
      configuration: [
        {
          displayName: "VCS Special Format",
          type: "environmentVariable",
          description:
            "Display the root directory of the current VCS repository with special formatting, set by LP_COLOR_PATH_VCS_ROOT. If LP_ENABLE_SHORTEN_PATH is enabled, also prevent the path shortening from shortening or hidding the VCS root directory.",
          default: true,
          interface: "toggle",
          environmentVariable: "LP_PATH_VCS_ROOT",
        },
        {
          displayName: "Mark Prefix",
          type: "environmentVariable",
          description:
            "String added directly before `LP_MARK_DEFAULT`, after all other parts of the prompt. Can be used to tag the prompt in a way that is less intrusive than `LP_PS1_PREFIX`, or add a newline before the prompt mark.",
          default: "",
          interface: "text",
          environmentVariable: "LP_MARK_PREFIX",
        },
        {
          displayName: "Prompt Prefix",
          type: "environmentVariable",
          description: "A string displayed at the start of the prompt.",
          default: "",
          interface: "text",
          environmentVariable: "LP_PS1_PREFIX",
        },
        {
          displayName: "Prompt Postfix",
          type: "environmentVariable",
          description:
            "A string displayed at the very end of the prompt, after even the prompt mark.",
          default: "",
          interface: "text",
          environmentVariable: "LP_PS1_POSTFIX",
        },
      ],
    },
  ],
};

export default plugin;
