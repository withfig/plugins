const plugin: Fig.Plugin = {
  name: "fzf-gcloud",
  type: "shell",
  description: "Preview the gcloud api with fzf.",
  github: "mbhynes/fzf-gcloud",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
