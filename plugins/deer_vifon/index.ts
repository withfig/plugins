const plugin: Fig.Plugin = {
  name: "deer_vifon",
  displayName: "Deer",
  icon: "🦌",
  description: "ranger-like file navigation for zsh",
  github: "Vifon/deer",
  community: "https://gitter.im/Vifon/deer",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Productivity Hack"],
  authors: [
    {
      name: "Wojciech Siewierski",
      github: "vifon",
    },
  ],
  type: "shell",
  installation: {
    origin: "github",
    sourceFiles: ["deer"],
    postScript: "zle -N deer\nbindkey '\\eK' deer",
  },
  configuration: [
    {
      name: "height",
      type: "script",
      default: "35",
      interface: "text",
      compile: (value) => `zstyle ':deer:' height ${value}`,
    },
    {
      name: "show_hidden",
      type: "script",
      default: true,
      interface: "toggle",
      compile: (value) => `zstyle ':deer:' show-hidden ${value ? "yes" : "no"}`,
    },
  ],
};

export default plugin;
