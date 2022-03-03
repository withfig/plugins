const plugin: Fig.Plugin = {
  name: "fzf-gcloud",
  type: "shell",
  description: "Preview the gcloud api with fzf.",
  github: "mbhynes/fzf-gcloud",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
