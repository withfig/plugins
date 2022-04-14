const plugin: Fig.Plugin = {
  icon: "😀",
  name: "fancy-ctrl-z_mdumitru",
  displayName: "Fancy Ctrl-Z",
  type: "shell",
  description:
    "This is a clone of the plugin of the same name present at: https://github.com/robbyrussell/oh-my-zsh",
  authors: [
    {
      name: "mdumitru",
      github: "mdumitru",
    },
  ],
  github: "mdumitru/fancy-ctrl-z",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["fancy-ctrl-z.zsh"],
  },
};

export default plugin;
