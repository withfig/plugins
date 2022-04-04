const plugin: Fig.Plugin = {
  name: "zsh-abbrev-alias_momo-lab",
  type: "shell",
  description:
    "This zsh plugin provides functionality similar to Vim's abbreviation expansion.",
  authors: [
    {
      name: "momo-lab",
      github: "momo-lab",
    },
  ],
  github: "momo-lab/zsh-abbrev-alias",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugins", "zsh-plugin", "zle-widgets"],
  installation: {
    origin: "github",
    sourceFiles: ["abbrev-alias.plugin.zsh"],
  },
};

export default plugin;
