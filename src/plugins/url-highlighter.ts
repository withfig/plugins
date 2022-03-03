const plugin: Fig.Plugin = {
  name: "url-highlighter",
  type: "shell",
  description: "A plugin for zsh-syntax-highlighting that turns URLs green if they respond with a \"good\"** status, and red otherwise. Useful for checking URL typos.",
  github: "ascii-soup/zsh-url-highlighter",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
