const plugin: Fig.Plugin = {
  icon: "💾",
  name: "zeno.zsh_yuki-yano",
  type: "shell",
  description: "zsh fuzzy completion and utility plugin with Deno.",
  authors: [
    {
      name: "yuki-yano",
      github: "yuki-yano",
      twitter: "yuki_ycino",
    },
  ],
  github: "yuki-yano/zeno.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["typescript", "deno", "zsh", "fzf"],
  installation: {
    origin: "github",
    sourceFiles: ["zeno-plugin.zsh", "zeno.zsh"],
  },
};

export default plugin;
