type ColorComponent = {
  name: string;
  default: string;
  componentDescription: string;
};

const colorComponents: ColorComponent[] = [
  {
    name: "execution_time",
    default: "yellow",
    componentDescription:
      "The execution time of the last command when exceeding 'Command Max Execution Time'.",
  },
  {
    name: "git:arrow",
    default: "cyan",
    componentDescription: "The 'Git Up Arrow Symbol' and 'Git Down Arrow Symbol'.",
  },
  {
    name: "git:stash",
    default: "cyan",
    componentDescription: "The 'Git Stash Symbol'.",
  },
  {
    name: "git:branch",
    default: "242",
    componentDescription: "The name of the current branch when in a Git repository.",
  },
  {
    name: "git:branch:cached",
    default: "red",
    componentDescription: "The name of the current branch when the data isn't fresh.",
  },
  {
    name: "git:action",
    default: "242",
    componentDescription:
      "The current action in progress (cherry-pick, rebase, etc.) when in a Git repository.",
  },
  {
    name: "git:dirty",
    default: "218",
    componentDescription: "The asterisk showing the branch is dirty.",
  },
  {
    name: "host",
    default: "242",
    componentDescription: "The hostname when on a remote machine.",
  },
  {
    name: "path",
    default: "blue",
    componentDescription: "The current path, for example, `PWD`.",
  },
  {
    name: "prompt:error",
    default: "red",
    componentDescription: "The 'Prompt Symbol' when the previous command has *failed*.",
  },
  {
    name: "prompt:success",
    default: "magenta",
    componentDescription: "The 'Prompt Symbol' when the previous command has *succeeded*.",
  },
  {
    name: "prompt:continuation",
    default: "242",
    componentDescription:
      "The state of the parser in the continuation prompt (PS2). It's the pink part in [this screenshot](https://user-images.githubusercontent.com/147409/70068574-ebc74800-15f8-11ea-84c0-8b94a4b57ff4.png), it appears in the same spot as `virtualenv`. You could for example matching both colors so that Pure has a uniform look.",
  },
  {
    name: "suspended_jobs",
    default: "red",
    componentDescription: "The `✦` symbol that indicates that jobs are running in the background.",
  },
  {
    name: "user",
    default: "242",
    componentDescription: "The username when on a remote machine.",
  },
  {
    name: "user:root",
    default: "default",
    componentDescription: "The username when the user is root.",
  },
  {
    name: "virtualenv",
    default: "242",
    componentDescription: "The name of the Python `virtualenv` when in use.",
  },
];

const createConfigurationOptionForColorComponent = (component: ColorComponent): Fig.ScriptItem => {
  const nameRegex = /[:_\s]+/;
  const title = component.name
    .split(nameRegex)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const name = component.name.replace(nameRegex, "-");
  const description =
    component.componentDescription.charAt(0).toLowerCase() +
    component.componentDescription.slice(1);

  return {
    name,
    type: "script",
    displayName: `[Color] ${title}`,
    description: `Color of ${description}`,
    default: component.default,
    interface: "text",
    compile: ({ value }: { value: string }) =>
      `zstyle :prompt:pure:${component.name} color ${value}`,
  };
};

const plugin: Fig.Plugin = {
  name: "pure",
  icon: "🧊",
  type: "shell",
  description: "Pretty, minimal and fast ZSH prompt",
  github: "sindresorhus/pure",
  authors: [
    {
      name: "Sindre Sorhus",
      twitter: "sindresorhus",
      github: "sindresorhus",
    },
  ],
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "shell",
    "zsh",
    "prompt",
    "shell-prompt",
    "shell-theme",
    "theme",
    "git",
    "pure",
    "minimal",
    "terminal",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["async.zsh", "pure.zsh"],
  },
  configuration: [
    {
      displayName: "Prompt Symbol",
      description: "The symbol to use for the prompt",
      type: "environmentVariable",
      default: "❯",
      interface: "text",
      environmentVariable: "PURE_PROMPT_SYMBOL",
    },
    {
      displayName: "Git Down Arrow Symbol",
      description: "The symbol to use for the git down arrow",
      type: "environmentVariable",
      default: "⇣",
      interface: "text",
      environmentVariable: "PURE_GIT_DOWN_ARROW",
    },
    {
      displayName: "Git Up Arrow Symbol",
      description: "The symbol to use for the git up arrow",
      type: "environmentVariable",
      default: "⇡",
      interface: "text",
      environmentVariable: "PURE_GIT_UP_ARROW",
    },
    {
      displayName: "Git Stash Symbol",
      description: "The symbol to use for the git stash symbol",
      type: "environmentVariable",
      default: "≡",
      interface: "text",
      environmentVariable: "PURE_GIT_STASH_SYMBOL",
    },
    {
      displayName: "VI-Mode Prompt Symbol",
      description: "The symbol to use for the prompt when in vi-mode",
      type: "environmentVariable",
      default: "❮",
      interface: "text",
      environmentVariable: "PURE_PROMPT_VICMD_SYMBOL",
    },
    {
      displayName: "Command Max Execution Time",
      type: "environmentVariable",
      description:
        "The max execution time (in seconds) of a process before its run time is shown when it exits.",
      default: 5,
      interface: "text",
      environmentVariable: "PURE_CMD_MAX_EXEC_TIME",
    },
    {
      displayName: "Enable Git Pull",
      type: "environmentVariable",
      description: "Allow Pure to check whether the current Git remote has been updated.",
      default: false,
      interface: "toggle",
      environmentVariable: "PURE_GIT_PULL",
    },
    {
      displayName: "Include Untracked Files in Git Dirty Check",
      description:
        "Include untracked files in Git dirtiness check. Mostly useful on large repos (like WebKit).",
      type: "environmentVariable",
      default: false,
      interface: "toggle",
      environmentVariable: "PURE_GIT_UNTRACKED_DIRTY",
    },
    {
      displayName: "Git Dirty Check Delay",
      description:
        "Time in seconds to delay git dirty checking when `git status` takes > 5 seconds.",
      type: "environmentVariable",
      default: 1800,
      interface: "text",
      environmentVariable: "PURE_GIT_DELAY_DIRTY_CHECK",
    },
    {
      name: "show-git-stash-status",
      displayName: "Show Git Stash Status",
      type: "script",
      description: "Show git stash status as part of the prompt. Off by default.",
      default: false,
      interface: "toggle",
      compile: ({ value }: { value: boolean }) =>
        value ? "zstyle :prompt:pure:git:stash show yes" : "",
    },
    {
      name: "only-fetch-upstream",
      displayName: "Only Fetch Upstream",
      description:
        "Set Pure to only `git fetch` the upstream branch of the current local branch. In some cases, this can result in faster updates for Git arrows, but for most users, it's better to leave this setting disabled.",
      type: "script",
      default: false,
      interface: "toggle",
      compile: ({ value }: { value: boolean }) =>
        value ? "zstyle :prompt:pure:git:fetch only_upstream yes" : "",
    },
    {
      name: "nix-shell-in-prompt",
      displayName: "[Nix Shell] Enable Shell Name In Prompt",
      description: "When using nix-shell integration, add the shell name to the prompt.",
      type: "script",
      default: true,
      interface: "toggle",
      compile: ({ value }: { value: boolean }) =>
        !value ? "zstyle :prompt:pure:environment:nix-shell show no" : "",
    },
    {
      displayName: "Color",
      configuration: [
        {
          name: "load-zsh-nearcolor",
          displayName: "[Color] Load zsh/nearcolor",
          type: "script",
          description:
            "Enable use of RGB colors with hexidecimal format for Pure prompt color configuration if you are unable to use a terminal with 24-bit color support",
          additionalDetails:
            "If you are unable to use a [terminal that support 24-bit colors](https://gist.github.com/XVilka/8346728), you can enable this option to load the module [`zsh/nearcolor`](http://zsh.sourceforge.net/Doc/Release/Zsh-Modules.html#The-zsh_002fnearcolor-Module). It will map any hexadecimal color to the nearest color in the 88 or 256 color palettes of your terminal, but without using the first 16 colors, since their values can be modified by the user. Keep in mind that when using this module you won't be able to display true RGB colors. It only allows you to specify colors in a more convenient way.",
          default: false,
          interface: "toggle",
          compile: ({ value }: { value: boolean }) => (value ? "zmodload zsh/nearcolor" : ""),
        },
        ...colorComponents.map(createConfigurationOptionForColorComponent),
      ],
    },
  ],
};

export default plugin;
