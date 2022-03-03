const plugin: Fig.Plugin = {
  name: "crayon-syntax",
  type: "shell",
  description: "ZSH shell script syntax hightlighting for Wordpress Crayon Plugin",
  github: "gsemet/crayon-syntax-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
