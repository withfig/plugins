const plugin: Fig.Plugin = {
  name: "gpg-crypt",
  type: "shell",
  description: "A simple file/directory encryption/decryption plugin for ZSH.",
  github: "Czocher/gpg-crypt",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
