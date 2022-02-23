const modes = [ "prompt", "auto", "reminder", "disabled"] as const;
type Mode = typeof modes[number]

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
    source: "github",
    pre: ({ ctx }) => `export ZSH="${ctx.installDirectory}"`,
    use: "oh-my-zsh.sh"
  },
  configuration: [
    {
      displayName: "Plugins",
      description: "Oh My Zsh plugins to load",
      type: "multiselect",
      default: [],
      options: async ({ ctx, env }) => { 
        return await env?.listFolder(`${ctx.installDirectory}/plugins`) ?? []
      },
      enviromentVariable: "plugins",
    },
    {
      displayName: "Theme",
      description: "The Oh My Zsh theme to use",
      type: "select",
      options: async ({ ctx, env }) => {
        const themes = await env?.listFolder(`${ctx.installDirectory}/themes`) ?? []
        return themes.map((theme) =>
          theme.replace(".zsh-theme", "")
        )
      },
      enviromentVariable: "ZSH_THEME",
    },
    {
      name: "test",
      description: "hello there",
      type: "bool",
      default: false,
      script: ({ value }) =>
        `zstyle :prompt:pure:git:stash show ${value ? "yes" : "no"}`,
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
          script: ({value}) => `zstyle ':omz:update' mode ${value}`
        },
        {
          name: "frequency",
          description: "How often Oh My Zsh checks for updates",
          type: "number",
          default: 14,
          script: ({value}) => `zstyle ':omz:update' frequency ${value}`,
          disabled: async ({ config }) => {
            const mode = config["mode"] as Mode
            return mode !== "disabled"
          }
        }
      ]
    }
  ],
};

export default plugin;
