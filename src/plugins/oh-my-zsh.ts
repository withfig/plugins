import listFolder from "../generators/listFolder";

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
  },
  configuration: [
    {
      displayName: "Plugins",
      description: "Oh My Zsh plugins to load",
      type: "multiselect",
      default: [],
      options: ({ ctx }) => listFolder(`${ctx.installDirectory}/plugins`),
      enviromentVariable: "plugins",
    },
    {
      displayName: "Theme",
      description: "The Oh My Zsh theme to use",
      type: "select",
      options: ({ ctx }) =>
        listFolder(`${ctx.installDirectory}/themes`).map((theme) =>
          theme.replace(".zsh-theme", "")
        ),
      enviromentVariable: "ZSH_THEME",
    },
    {
      displayName: "test",
      description: "test",
      type: "bool",
      default: false,
      script: ({ value }) =>
        `zstyle :prompt:pure:git:stash show ${value ? "yes" : "no"}`,
    },
  ],
};

export default plugin;
