const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "zi_z-shell",
  type: "shell",
  description: "𝕋ℍ𝔼 𝕊𝕎𝕀𝕊𝕊 𝔸ℝ𝕄𝕐 𝕂ℕ𝕀𝔽𝔼 𝔽𝕆ℝ ℤ𝕊ℍ 𝕌ℕ𝕀𝕏 𝕊ℍ𝔼𝕃𝕃",
  authors: [
    {
      name: "z-shell",
      github: "z-shell",
      twitter: "zshell_zi",
    },
  ],
  github: "z-shell/zi",
  license: ["MIT"],
  site: "https://z.digitalclouds.dev",
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: [
    "z-shell",
    "zi",
    "zsh",
    "zinit",
    "zplugin",
    "cli",
    "macos",
    "zsh-plugin-manager",
    "awesome-zsh-plugins",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zi.zsh"],
  },
};

export default plugin;
