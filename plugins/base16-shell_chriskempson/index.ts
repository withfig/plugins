const plugin: Fig.Plugin = {
  name: "base16-shell_chriskempson",
  displayName: "base16-shell",
  type: "shell",
  description: "Base16 for Shells",
  authors: [
    {
      name: "chriskempson",
      github: "chriskempson",
    },
  ],
  github: "chriskempson/base16-shell",
  license: ["NOASSERTION"],
  site: "https://github.com/chriskempson/base16",
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["profile_helper.sh"],
    },
    zsh: {
      sourceFiles: ["base16-shell.plugin.zsh"],
    },
  },
};

export default plugin;
