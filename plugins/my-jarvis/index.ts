const plugin: Fig.Plugin = {
  name: "my-jarvis",
  type: "shell",
  displayName: "My Jarvis",
  icon: "🤖",
  site: "https://github.com/darkclown97/my-jarvis",
  github: "darkclown97/my-jarvis",
  description: "Your own Jarvis",
  screenshots: ["images/jarvis.png"],
  categories: ["Convenience Function", "Productivity Hack", "Other"],
  keywords: ["jarvis", "ai", "bot", "open ai"],
  shells: ["bash", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["jarvis.sh", "access-json.py"],
    bash: {
      postScript: ({ ctx }) =>
        `echo "\nexport JARVIS_LOCATION="${ctx.plugin.installDirectory}"\nsource $JARVIS_LOCATION/jarvis.sh\n" >> ~/.bashrc`,
    },
    zsh: {
      postScript: ({ ctx }) =>
        `echo "\nexport JARVIS_LOCATION="${ctx.plugin.installDirectory}"\nsource $JARVIS_LOCATION/jarvis.sh\n" >> ~/.zshrc`,
    },
  },
  configuration: [
    {
      type: "environmentVariable",
      name: "OPENAI_API_KEY",
      displayName: "OPENAI_API_KEY",
      description: "Your Open AI API key",
      interface: "text",
      default: "",
    },
    {
      type: "environmentVariable",
      name: "JARVIS_VOICE_RESPONSE",
      displayName: "MAKE JARVIS SPEAK [Works only on MacOS currently]",
      description: "Make jarvis read out the response",
      interface: "toggle",
      default: true,
    },
  ],
  authors: [
    { name: "Arun", twitter: "@imthedarkclown", github: "darkclown97" },
  ],
};
export default plugin;
