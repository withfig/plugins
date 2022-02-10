const plugin: Fig.Plugin = {
  name: "z.lua",
  type: "shell",
  description: "Fish-like autosuggestions for zsh",
  icon: "https://avatars.githubusercontent.com/u/567410",
  github: "skywind3000/z.lua",
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  tags: ["cd"],
  installation: {
    source: "github",
  },
};

export default plugin;
