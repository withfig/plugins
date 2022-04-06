const plugin: Fig.Plugin = {
  icon: "💡",
  name: "alf_psyrendust",
  type: "shell",
  description:
    "Alf is an out of this world super fast and configurable framework for zsh; it's modeled after Prezto and Antigen while utilizing Oh My Zsh under the covers; and offers standard defaults, aliases, functions, auto completion, automated updates and installable prompt themes and plugins.",
  authors: [
    {
      name: "psyrendust",
      github: "psyrendust",
      twitter: "psyrendust",
    },
  ],
  github: "psyrendust/alf",
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
};

export default plugin;
