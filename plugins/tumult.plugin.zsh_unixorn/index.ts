const plugin: Fig.Plugin = {
  name: "tumult.plugin.zsh_unixorn",
  displayName: "Tumult",
  description:
    "Tumult is a collection of macOS-specific functions and scripts for your " +
    "shell environment. It is packaged as a ZSH plugin, but can be used in " +
    "bash/fish as well.",
  type: "shell",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    },
  ],
  github: "unixorn/tumult.plugin.zsh",
  license: ["Apache-2.0"],
  shells: ["zsh", "bash"],
  categories: ["Convenience Function"],
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
    zsh: {
      sourceFiles: ["tumult.plugin.zsh"],
    },
    bash: {
      pathDirectories: ({ ctx }) => [`${ctx.plugin.installDirectory}/bin`],
    },
  },
};

export default plugin;
