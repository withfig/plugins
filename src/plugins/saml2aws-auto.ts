const plugin: Fig.Plugin = {
  name: "saml2aws-auto",
  type: "shell",
  description: "A zsh plugin for saml2aws-auto with autocomplete and profile status",
  github: "devndive/zsh-saml2aws-auto",
  shells: ["zsh"],
  tags: [
    "zsh",
    "saml2aws-auto",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
