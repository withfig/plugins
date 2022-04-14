const plugin: Fig.Plugin = {
  icon: "💥",
  name: "vanilli.sh_yous",
  displayName: "Vanilli",
  type: "shell",
  description: "A lightweight start point of shell configuration",
  authors: [
    {
      name: "yous",
      github: "yous",
    },
  ],
  github: "yous/vanilli.sh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "config"],
  installation: {
    origin: "github",
    sourceFiles: ["vanilli.zsh"],
  },
};

export default plugin;
