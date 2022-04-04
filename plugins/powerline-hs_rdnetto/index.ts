const plugin: Fig.Plugin = {
  name: "powerline-hs_rdnetto",
  type: "shell",
  description:
    "A lightning fast reimplementation of the Powerline prompt generator in Haskell.",
  authors: [
    {
      name: "rdnetto",
      github: "rdnetto",
    },
  ],
  github: "rdnetto/powerline-hs",
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["test-case.sh"],
    },
    zsh: {
      sourceFiles: ["test-case.sh"],
    },
  },
};

export default plugin;
