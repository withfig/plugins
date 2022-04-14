const plugin: Fig.Plugin = {
  icon: "💾",
  name: "zeno.zsh_yuki-yano",
  displayName: "Zeno Zsh",
  type: "shell",
  description: "zsh fuzzy completion and utility plugin with Deno.",
  screenshots: [
    "https://user-images.githubusercontent.com/5423775/119225771-e0dfda80-bb40-11eb-8001-f5b575e29707.gif",
    "https://user-images.githubusercontent.com/5423775/119226132-aaa35a80-bb42-11eb-9b90-1071fce1fc7d.gif",
  ],
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
