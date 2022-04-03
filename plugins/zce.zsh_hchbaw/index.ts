const plugin: Fig.Plugin = {
  name: "zce.zsh_hchbaw",
  type: "shell",
  description: "# zsh EasyMotion/ace-jump-mode",
  authors: [
    {
      name: "hchbaw",
      github: "hchbaw",
    },
  ],
  github: "hchbaw/zce.zsh",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zce.zsh"],
  },
};

export default plugin;
