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
      description: "Oh My Zsh plugins to load",
      uiType: "multiselect",
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
      uiType: "select",
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
          description: "",
          uiType: "multiselect",
          default: "prompt",
          options: modes,
          compile: ({ value }: { value: string[] }) =>
            `zstyle ':omz:update' mode ${value}`,
        },
        {
          name: "frequency",
          description: "How often Oh My Zsh checks for updates",
          uiType: "text",
          default: 14,
          compile: ({ value }: { value: number }) =>
            `zstyle ':omz:update' frequency ${value}`,
          disabled: ({ config }) => config["mode"] !== "disabled",
        },
      ],
    },
    {
      name: "test",
      description: "hello there",
      uiType: "checkbox",
      default: false,
      compile: ({ value }: { value: boolean }) =>
        `zstyle :prompt:pure:git:stash show ${value ? "yes" : "no"}`,
    },
  ],
};

export default plugin;
