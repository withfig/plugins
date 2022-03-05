const plugin: Fig.Plugin = {
  name: "gentoo",
  type: "shell",
  description: "[ORIGIN] Gentoo specific zsh completion support (ebuild, emerge, eselect, ...)",
  github: "gentoo/gentoo-zsh-completions",
  shells: ["zsh"],
  tags: [
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
