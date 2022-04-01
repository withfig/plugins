const plugin: Fig.Plugin = {
  name: "auto-fu.zsh_hchbaw",
  type: "shell",
  description: "#zsh automatic complete-word and list-choices. Originally incr-0.2.zsh  by y.fujii <y-fujii at mimosa-pudica.net>",
  authors: [
    {
      name: "hchbaw",
      github: "hchbaw",
    }
  ],
  github: "hchbaw/auto-fu.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["auto-fu.zsh"],
  },
};

export default plugin;
