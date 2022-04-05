const plugin: Fig.Plugin = {
  icon: "💾",
  name: "gcloud-project_avivl",
  type: "shell",
  description:
    "If your are working with ,multiple gcp projects and struggle to remember which one is currently active, here is a solution for you.",
  authors: [
    {
      name: "avivl",
      github: "avivl",
    },
  ],
  github: "avivl/gcloud-project",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["shell", "bash", "zsh-plugin", "google-cloud-platform"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["init.sh"],
    },
    zsh: {
      sourceFiles: ["init.sh"],
    },
  },
};

export default plugin;
