const plugin: Fig.Plugin = {
  name: "openshift-origin",
  type: "shell",
  description: "A few shortcuts to common openshift origin (oc) actions",
  github: "ryanswart/openshift-origin-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
