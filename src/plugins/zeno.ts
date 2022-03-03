const plugin: Fig.Plugin = {
  name: "zeno",
  type: "shell",
  description: "zsh fuzzy completion and utility plugin with Deno.",
  github: "yuki-yano/zeno.zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "typescript",
    "fzf",
    "deno",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
