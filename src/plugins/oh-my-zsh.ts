type Mode = string;
const modes: Mode[] = ["prompt", "auto", "reminder", "disabled"];

const plugin: Fig.Plugin = {
  name: "oh-my-zsh",
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
  tags: ["framework", "zsh"],
  installation: {
    origin: "github",
    preScript: ({ ctx }) => `export ZSH="${ctx.plugin.installDirectory}"`,
    sourceFiles: "oh-my-zsh.sh"
  },
  configuration: [
    {
      displayName: "Plugins",
      description: "Oh My Zsh plugins to load",
      type: "multiselect",
      default: [],
      options: async ({ env }) => env
        ? await env.listFolder(`${env.plugin.installDirectory}/plugins`)
        : [],
      enviromentVariable: "plugins",
    },
    {
      displayName: "Theme",
      description: "The Oh My Zsh theme to use",
      type: "select",
      options: async ({ env }) => {
        if (!env) {
          return [];
        }
        const themes = await env.listFolder(`${env.plugin.installDirectory}/themes`);
        return themes.map((theme) => theme.replace(".zsh-theme", ""))
      },
      enviromentVariable: "ZSH_THEME",
    },
    {
      displayName: "Getting Updates",
      description: "By default, you will be prompted to check for updates every 2 weeks.",
      configuration: [
        {
          name: "mode",
          description: "",
          default: "prompt",
          type: "multiselect",
          options: modes,
          script: ({ value }: { value: string }) =>
            `zstyle ':omz:update' mode ${value}`
        },
        {
          name: "frequency",
          description: "How often Oh My Zsh checks for updates",
          type: "number",
          default: 14,
          script: ({ value }: { value: number }) =>
            `zstyle ':omz:update' frequency ${value}`,
          disabled: ({ config }) => config["mode"] !== "disabled"
        }
      ]
    },
    {
      name: "test",
      description: "hello there",
      type: "bool",
      default: false,
      script: ({ value }: { value: boolean }) =>
        `zstyle :prompt:pure:git:stash show ${value ? "yes" : "no"}`,
    },
  ],
};

export default plugin;
