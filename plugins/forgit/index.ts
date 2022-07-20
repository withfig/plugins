const commandConfiguration = [
  { command: "forgit_log", defaultAlias: "glo" },
  { command: "forgit_diff", defaultAlias: "gd" },
  { command: "forgit_add", defaultAlias: "ga" },
  { command: "forgit_reset_head", defaultAlias: "grh" },
  { command: "forgit_ignore", defaultAlias: "gi" },
  { command: "forgit_checkout_file", defaultAlias: "gcf" },
  { command: "forgit_checkout_branch", defaultAlias: "gcb" },
  { command: "forgit_checkout_tag", defaultAlias: "gct" },
  { command: "forgit_checkout_commit", defaultAlias: "gco" },
  { command: "forgit_revert_commit", defaultAlias: "grc" },
  { command: "forgit_clean", defaultAlias: "gclean" },
  { command: "forgit_stash_show", defaultAlias: "gss" },
  { command: "forgit_cherry_pick", defaultAlias: "gcp" },
  { command: "forgit_rebase", defaultAlias: "grb" },
  { command: "forgit_fixup", defaultAlias: "gfu" },
]
  .map(({ command, defaultAlias }) => {
    const title = command
      .split("_")
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const aliasItem: Fig.ConfigurationItem = {
      displayName: `${title} Alias`,
      type: "environmentVariable",
      description: `Alias for ${command} action`,
      interface: "text",
      name: command,
      default: defaultAlias,
      export: false,
    };
    const fzfOptionsItem: Fig.ConfigurationItem = {
      displayName: `${title} fzf Options`,
      type: "environmentVariable",
      description: `Options passed to fzf for command ${command}`,
      interface: "text",
      name: `${command.toUpperCase()}_FZF_OPTS`,
      default: null,
    };
    return [aliasItem, fzfOptionsItem];
  })
  .flat();

const plugin: Fig.Plugin = {
  name: "forgit",
  displayName: "Forgit",
  type: "shell",
  description: "A utility tool powered by fzf for using git interactively.",
  icon: "💤",
  authors: [
    {
      name: "wfxr",
      github: "wfxr",
    },
  ],
  github: "wfxr/forgit",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["fzf", "git", "cli", "zsh", "zsh-plugin", "bash", "fish"],
  installation: {
    origin: "github",
    bash: {
      postScript: ({ ctx }) =>
        `export PATH="$PATH:${ctx.plugin.installDirectory}/bin"`,
      sourceFiles: ["forgit.plugin.sh"],
    },
    zsh: {
      postScript: ({ ctx }) =>
        `export PATH="$PATH:${ctx.plugin.installDirectory}/bin"`,
      sourceFiles: ["forgit.plugin.zsh"],
    },
    fish: {
      postScript: ({ ctx }) =>
        `set -Ua fish_user_paths "${ctx.plugin.installDirectory}/bin"`,
      sourceFiles: ["conf.d/forgit.plugin.fish"],
    },
    dependencies: [
      {
        name: "fzf",
        type: "binary",
      },
    ],
  },
  configuration: [
    {
      displayName: "Forgit fzf Default Options",
      type: "environmentVariable",
      description:
        "Adds default fzf options for `forgit`, including keybinds, layout, etc.  (No need to repeat the options already configured in `FZF_DEFAULT_OPTS`)",
      interface: "text",
      name: "FORGIT_FZF_DEFAULT_OPTS",
      default: null,
    },
    ...commandConfiguration,
    {
      displayName: "Copy Command (linux only)",
      type: "environmentVariable",
      description: "Copy command to expose clipboard capabilities to forgit",
      interface: "text",
      name: "FORGIT_COPY_CMD",
      default: "xclip -selection clipboard",
    },
    {
      displayName: "Pagers",
      description:
        "Forgit will use the default configured pager from git.  But this behavior can be configured with the following options",
      configuration: [
        {
          displayName: `Forgit Common Pager`,
          type: "environmentVariable",
          description:
            "Common pager. Falls back to `git config core.pager` or `cat`",
          interface: "text",
          name: "FORGIT_PAGER",
          default: null,
        },
        {
          displayName: "Pager for `git show`",
          type: "environmentVariable",
          description: "Falls back to `git config pager.show` or common pager",
          interface: "text",
          name: "FORGIT_SHOW_PAGER",
          default: null,
        },
        {
          displayName: "Pager for `git diff`",
          type: "environmentVariable",
          description: "Falls back to `git config pager.diff` or common pager",
          interface: "text",
          name: "FORGIT_DIFF_PAGER",
          default: null,
        },
        {
          displayName: "Pager for `gitignore`",
          type: "environmentVariable",
          description:
            "Falls back to `bat -l gitignore --color always` or `cat`",
          interface: "text",
          name: "FORGIT_IGNORE_PAGER",
          default: null,
        },
        {
          displayName: "Git log format",
          type: "environmentVariable",
          description: "Format for `git log` when used with forgit",
          interface: "text",
          name: "FORGIT_LOG_FORMAT",
          default: "%C(auto)%h%d %s %C(black)%C(bold)%cr%reset",
        },
        {
          displayName: "Disable all aliases",
          type: "environmentVariable",
          interface: "toggle",
          name: "FORGIT_NO_ALIASES",
          default: false,
        },
        {
          displayName: "Set as git sub command",
          type: "environmentVariable",
          description: "For example, `ga` become `git forgit add`",
          interface: "select",
          name: "PATH",
          default: "",
          option: ["", "$PATH:$FORGIT_INSTALL_DIR/bin"],
        },
      ],
    },
  ],
};

export default plugin;
