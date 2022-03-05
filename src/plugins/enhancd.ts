const plugin: Fig.Plugin = {
  name: "enhancd",
  type: "shell",
  description: "A next-generation cd command with your interactive filter",
  icon: "🚀",
  github: "b4b4r07/enhancd",
  authors: [
    {
      name: "b4b4r07",
      github: "b4b4r07",
      twitter: "b4b4r07",
    },
  ],
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  tags: ["cd"],
  installation: {
    origin: "github",
    sourceFiles: "init.sh",
    fish: {
      sourceFiles: ({ ctx }) => {
        return ["conf.d/", "functions/"].map(dir => `${ctx.plugin.installDirectory}${dir}*`) 
      }
    }
  },
};

export default plugin;
