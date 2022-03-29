const plugin: Fig.Plugin = {
  name: "zsh-notify_luismayta",
  type: "shell",
  description: "Get notified when your command is done",
  authors: [
    {
      name: "luismayta",
      github: "luismayta",
      twitter: "slovacus",
    }
  ],
  github: "luismayta/zsh-notify",
  license: ["LGPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "r2d2",
    "autoinstall",
    "notify",
    "automation",
    "peru",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-notify.zsh"],
  },
};

export default plugin;
