const plugin: Fig.Plugin = {
  icon: "💡",
  name: "alf_psyrendust",
  displayName: "Alf",
  type: "shell",
  description:
    "Alf is an out of this world super fast and configurable framework for zsh",
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
