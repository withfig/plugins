const plugin: Fig.Plugin = {
  name: "msfvenom",
  type: "shell",
  description: "zsh completion for msfvenom in Metasploit",
  github: "Green-m/msfvenom-zsh-completion",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "msfvenom",
    "metasploit",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
