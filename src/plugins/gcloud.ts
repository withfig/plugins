const plugin: Fig.Plugin = {
  name: "gcloud",
  type: "shell",
  description: "Z Shell auto completion for Google Cloud SDK",
  github: "littleq0903/gcloud-zsh-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
