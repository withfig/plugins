const plugin: Fig.Plugin = {
  name: "autoupdate-antigen.zshplugin_unixorn",
  type: "shell",
  description: "Add automatic updating to antigen",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    }
  ],
  github: "unixorn/autoupdate-antigen.zshplugin",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["autoupdate-antigen.zsh"],
  },
};

export default plugin;
