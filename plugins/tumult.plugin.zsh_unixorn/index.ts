const plugin: Fig.Plugin = {
  name: "tumult.plugin.zsh_unixorn",
  type: "shell",
  description:
    "Tumult is a collection of macOS-specific functions and scripts for your shell environment. It is packaged as a ZSH plugin, but can be used in bash/fish as well.",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    },
  ],
  github: "unixorn/tumult.plugin.zsh",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugins",
    "macos",
    "macos-setup",
    "shell-scripts",
    "zsh-plugin",
    "zgen",
    "antigen",
    "zgenom",
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["tumult.plugin.zsh"],
  },
};

export default plugin;
