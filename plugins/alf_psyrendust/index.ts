const plugin: Fig.Plugin = {
  name: "alf_psyrendust",
  displayName: "Alf",
  description:
    "Alf is an out of this world super fast and configurable framework for zsh",
  icon: "🐽",
  type: "shell",
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
