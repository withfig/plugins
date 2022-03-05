const plugin: Fig.Plugin = {
  name: "dbic",
  type: "shell",
  description: "Zsh or Bash plugin for automatically setting up Environment variables for DBIx::Class::Migration's script and Dancer",
  github: "lejeunerenard/dbic-migration-env",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
