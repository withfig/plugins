const plugin: Fig.Plugin = {
  name: "zsh-autocomplete",
  type: "shell",
  description:
    "Real-time type-ahead completion for Zsh. Asynchronous find-as-you-type autocompletion.",
  icon: "🤖",
  authors: [
    {
      name: "marlonrichert",
      github: "marlonrichert",
      twitter: "MarlonRichert",
    },
  ],
  github: "marlonrichert/zsh-autocomplete",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "completion",
    "autocomplete",
    "zsh-autocomplete",
    "zsh-plugin",
    "zsh-completion",
    "asynchronous",
    "autocompletion",
    "non-blocking",
    "zsh-plugins",
    "typeahead",
    "typeahead-completions",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-autocomplete.plugin.zsh"],
  },
};

export default plugin;
