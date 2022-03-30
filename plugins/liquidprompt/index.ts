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
          description: "Display the last command error code if it is not `0`.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_ERROR",
        },
        {
          displayName: "Enable Battery Status",
          description:
            "Display the status of the battery, if there is one, using color and marks.",
          additionalDetails:
            "Will be disabled if `acpi` is not found on Linux, or `pmset` is not found on MacOS.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_BATT",
        },
        {
          displayName: "Enable Runtime",
          description: "Display the runtime of the last command.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_RUNTIME",
        },
        {
          displayName: "Enable Detached Session",
          description: "Display the number of detached multiplexer sessions.",
          additionalDetails:
            "Will be disabled if neither `screen` nor `tmux` are found.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_DETACHED_SESSIONS",
        },
        {
          displayName: "Enable Dirstack",
          description:
            "Display the size of the directory stack if it is greater than `1`.",
          default: false,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_DIRSTACK",
        },
        {
          displayName: "Fully Qualified Hostname",
          description:
            "Display the fully qualified hostname instead of the short hostname.",
          default: false,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_FQDN",
        },
        {
          displayName: "Enable Color",
          description: "Use terminal formatting when displaying the prompt.",
          additionalDetails: "Will be disabled if tput is not found.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_COLOR",
        },
        {
          displayName: "Enable Jobs",
          description: "Display the number of running and sleeping shell jobs.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_JOBS",
        },
      ],
    },
    {
      displayName: "VCS",
      configuration: [
        {
          displayName: "Enable Git",
          description: "Display VCS information inside Git repositories.",
          additionalDetails: "Will be disabled if `git` is not found.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_GIT",
        },
        {
          displayName: "Git Mark",
          description:
            "Mark used to indicate that the current directory is inside of a Git repository.",
          default: "±",
          uiType: "text",
          environmentVariable: "LP_MARK_GIT",
          hidden: ({ config }) => !config["LP_ENABLE_GIT"],
        },
        {
          displayName: "Enable Mercurial",
          description: "Display VCS information inside Mercurial repositories.",
          additionalDetails: "Will be disabled if `hg` is not found.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_HG",
        },
        {
          displayName: "Mercurial Mark",
          description:
            "Mark used to indicate that the current directory is inside of a Mercurial repository.",
          default: "☿",
          uiType: "text",
          environmentVariable: "LP_MARK_HG",
          hidden: ({ config }) => !config["LP_ENABLE_HG"],
        },
        {
          displayName: "Enable Subversion",
          description:
            "Display VCS information inside Subversion repositories.",
          additionalDetails: "Will be disabled if `svn` is not found.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_SVN",
        },
        {
          displayName: "Subversion Mark",
          description:
            "Mark used to indicate that the current directory is inside of a Subversion repository.",
          default: "‡",
          uiType: "text",
          environmentVariable: "LP_MARK_SVN",
          hidden: ({ config }) => !config["LP_ENABLE_SVN"],
        },
        {
          displayName: "Enable Fossil",
          description: "Display VCS information inside Fossil repositories.",
          additionalDetails: "Will be disabled if `fossil` is not found.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_FOSSIL",
        },
        {
          displayName: "Fossil Mark",
          description:
            "Mark used to indicate that the current directory is inside of a Fossil repository.",
          default: "⌘",
          uiType: "text",
          environmentVariable: "LP_MARK_FOSSIL",
          hidden: ({ config }) => !config["LP_ENABLE_FOSSIL"],
        },
        {
          displayName: "Enable Bazaar",
          description: "Display VCS information inside Bazaar repositories.",
          additionalDetails: "Will be disabled if `bzr` is not found.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_BZR",
        },
        {
          displayName: "Bazaar Mark",
          description:
            "Mark used to indicate that the current directory is inside of a Bazaar repository.",
          default: "⚯",
          uiType: "text",
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
          description:
            "Use the shorten path feature if the path is too long to fit in the prompt line.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_ENABLE_SHORTEN_PATH",
        },
        {
          displayName: "Shortend Path Characters",
          description:
            "The number of characters to save at the start and possibly the end of a directory name when shortening the path.",
          default: 3,
          uiType: "text",
          environmentVariable: "LP_PATH_CHARACTER_KEEP",
          hidden: ({ config }) => !config["LP_ENABLE_SHORTEN_PATH"],
        },
        {
          displayName: "Path Keep",
          description:
            "The number of directories (counting `/`) to display at the beginning of a shortened path.",
          additionalDetails:
            "Set to `1`, will display only root. Set to `0`, will keep nothing from the beginning of the path.",
          default: 2,
          uiType: "text",
          environmentVariable: "LP_PATH_KEEP",
          hidden: ({ config }) => !config["LP_ENABLE_SHORTEN_PATH"],
        },
        {
          displayName: "Path Length Max Width",
          description:
            "The maximum percentage of the terminal width used to display the path before removing the center portion of the path and replacing with `LP_MARK_SHORTEN_PATH`.",
          default: 35,
          uiType: "text",
          environmentVariable: "LP_PATH_LENGTH",
          hidden: ({ config }) => !config["LP_ENABLE_SHORTEN_PATH"],
        },
        {
          displayName: "Path Length Max Width",
          description:
            "Sets the method used for shortening the path display when it exceeds the maximum length set by `LP_PATH_LENGTH`.",
          default: "truncate_chars_from_path_left",
          uiType: "select",
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
          description:
            "Display the root directory of the current VCS repository with special formatting, set by LP_COLOR_PATH_VCS_ROOT. If LP_ENABLE_SHORTEN_PATH is enabled, also prevent the path shortening from shortening or hidding the VCS root directory.",
          default: true,
          uiType: "toggle",
          environmentVariable: "LP_PATH_VCS_ROOT",
        },
        {
          displayName: "Mark Prefix",
          description:
            "String added directly before `LP_MARK_DEFAULT`, after all other parts of the prompt. Can be used to tag the prompt in a way that is less intrusive than `LP_PS1_PREFIX`, or add a newline before the prompt mark.",
          default: "",
          uiType: "text",
          environmentVariable: "LP_MARK_PREFIX",
        },
        {
          displayName: "Prompt Prefix",
          description: "A string displayed at the start of the prompt.",
          default: "",
          uiType: "text",
          environmentVariable: "LP_PS1_PREFIX",
        },
        {
          displayName: "Prompt Postfix",
          description:
            "A string displayed at the very end of the prompt, after even the prompt mark.",
          default: "",
          uiType: "text",
          environmentVariable: "LP_PS1_POSTFIX",
        },
      ],
    },
  ],
};

export default plugin;
