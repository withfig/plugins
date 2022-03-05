const plugin: Fig.Plugin = {
  name: "sfdx-autocomplete",
  type: "shell",
  description: "autocomplete plugin for sfdx (bash & zsh) based on oclif/plugin-autocomplete and heroku/heroku-cli-autocomplete",
  github: "jayree/sfdx-autocomplete-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
