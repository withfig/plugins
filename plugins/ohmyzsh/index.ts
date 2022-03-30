type Mode = string;
const modes: Mode[] = ["prompt", "auto", "reminder", "disabled"];

const plugin: Fig.Plugin = {
  name: "ohmyzsh",
  type: "shell",
  description:
    "A community-driven framework for managing your zsh configuration",
  icon: "https://avatars.githubusercontent.com/u/22552083",
  site: "https://ohmyz.sh/",
  docs: "https://github.com/ohmyzsh/ohmyzsh/wiki",
  github: "ohmyzsh/ohmyzsh",
  twitter: "ohmyzsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    preScript: ({ ctx }) => `export ZSH="${ctx.plugin.installDirectory}"`,
    sourceFiles: "oh-my-zsh.sh",
  },
  configuration: [
    {
      displayName: "Plugins",
      type: "environmentVariable",
      description: "Oh My Zsh plugins to load",
      interface: "multiselect",
      default: [],
      options: async ({ env }) =>
        env
          ? await env.listFolder(`${env.plugin.installDirectory}/plugins`)
          : [],
      environmentVariable: "plugins",
    },
    {
      displayName: "Theme",
      description: "The Oh My Zsh theme to use",
      type: "environmentVariable",
      interface: "select",
      default: "robbyrussell",
      options: async ({ env }) => {
        if (!env) {
          return [];
        }
        const themes = await env.listFolder(
          `${env.plugin.installDirectory}/themes`
        );
        return themes.map((theme) => theme.replace(".zsh-theme", ""));
      },
      environmentVariable: "ZSH_THEME",
    },
    {
      displayName: "Getting Updates",
      description:
        "By default, you will be prompted to check for updates every 2 weeks.",
      configuration: [
        {
          name: "mode",
          type: "script",
          description: "",
          interface: "multiselect",
          default: "prompt",
          options: modes,
          compile: ({ value }) =>
            `zstyle ':omz:update' mode ${value}`,
        },
        {
          name: "frequency",
          type: "script",
          description: "How often Oh My Zsh checks for updates",
          interface: "text",
          default: 14,
          compile: ({ value }) =>
            `zstyle ':omz:update' frequency ${value}`,
          disabled: ({ config }) => config["mode"] !== "disabled",
        },
      ],
    },
    {
      name: "test",
      type: "script",
      description: "hello there",
      interface: "checkbox",
      default: false,
      compile: ({ value }) =>
        `zstyle :prompt:pure:git:stash show ${value ? "yes" : "no"}`,
    },
  ],
};

export default plugin;
