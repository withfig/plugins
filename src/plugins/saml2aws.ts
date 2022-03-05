const plugin: Fig.Plugin = {
  name: "saml2aws",
  type: "shell",
  description: "Command line completions for https://github.com/Versent/saml2aws",
  github: "sirhc/saml2aws.plugin.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
