const plugin: Fig.Plugin = {
  icon: "💥",
  name: "gpg-crypt_Czocher",
  type: "shell",
  description: "A simple file/directory encryption/decryption plugin for ZSH.",
  authors: [
    {
      name: "Czocher",
      github: "Czocher",
    },
  ],
  github: "Czocher/gpg-crypt",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["gpg-crypt.plugin.zsh"],
  },
};

export default plugin;
