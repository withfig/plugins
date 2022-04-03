const plugin: Fig.Plugin = {
  name: "zsh-tab-title_trystan2k",
  type: "shell",
  description:
    "A ZSH plugin to set the terminal tab title according to current directory or running process. It's based (forked) from Oh-My-ZSH one.",
  authors: [
    {
      name: "trystan2k",
      github: "trystan2k",
    },
  ],
  github: "trystan2k/zsh-tab-title",
  license: ["NOASSERTION"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "zplugin"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["shellcheck.sh"],
    },
    zsh: {
      sourceFiles: ["zsh-tab-title.plugin.zsh"],
    },
  },
};

export default plugin;
