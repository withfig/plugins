const plugin: Fig.Plugin = {
  name: "gcloud-project",
  type: "shell",
  description: "If your are working with ,multiple gcp projects and struggle to remember which one is currently active, here is a solution for you.",
  github: "avivl/gcloud-project",
  shells: ["zsh"],
  tags: [
    "shell",
    "bash",
    "zsh-plugin",
    "google-cloud-platform",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
