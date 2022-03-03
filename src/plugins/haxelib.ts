const plugin: Fig.Plugin = {
  name: "haxelib",
  type: "shell",
  description: "null",
  github: "tong/zsh.plugin.haxelib",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "haxelib",
    "complete",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
