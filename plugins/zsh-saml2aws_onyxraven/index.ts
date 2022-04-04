const plugin: Fig.Plugin = {
  name: "zsh-saml2aws_onyxraven",
  type: "shell",
  description: "oh-my-zsh plugin for saml2aws",
  authors: [
    {
      name: "onyxraven",
      github: "onyxraven",
      twitter: "onyxraven",
    },
  ],
  github: "onyxraven/zsh-saml2aws",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-saml2aws.plugin.zsh"],
  },
};

export default plugin;
