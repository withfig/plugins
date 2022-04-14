const plugin: Fig.Plugin = {
  icon: "😎",
  name: "kubectx-zshplugin_unixorn",
  displayName: "Kubectx",
  type: "shell",
  description: "Loads kubectx and kubens automagically for you",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    },
  ],
  github: "unixorn/kubectx-zshplugin",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "kubernetes",
    "zsh",
    "zsh-plugin",
    "k8s",
    "k3s",
    "kubectx",
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["kubectx.plugin.zsh"],
  },
};

export default plugin;
