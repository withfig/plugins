const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "rockz_aperezdc",
  type: "shell",
  description: "Virtualfish-alike Lua+LuaRocks “Rockenv” wrapper for Zsh",
  authors: [
    {
      name: "aperezdc",
      github: "aperezdc",
    },
  ],
  github: "aperezdc/rockz",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["luarocks", "lua", "luajit", "environment", "profile-manager"],
  installation: {
    origin: "github",
    sourceFiles: ["rockz.plugin.zsh"],
  },
};

export default plugin;
