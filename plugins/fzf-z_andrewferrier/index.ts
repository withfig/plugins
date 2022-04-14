const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "fzf-z_andrewferrier",
  displayName: "Fzf Z",
  type: "shell",
  description:
    "Plugin for zsh to integrate fzf and various 'frecency' plugins, including z.sh - enables easy switching between recent dirs in zsh",
  authors: [
    {
      name: "andrewferrier",
      github: "andrewferrier",
      twitter: "andrewferrier",
    },
  ],
  github: "andrewferrier/fzf-z",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["recentdirs.sh"],
    },
    zsh: {
      sourceFiles: ["fzf-z.plugin.zsh"],
    },
  },
};

export default plugin;
