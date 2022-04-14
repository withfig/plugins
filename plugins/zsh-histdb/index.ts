const getZshAutosuggestIntegrationForQuery = (
  query: string,
  strategyName = "histdb_top"
) => `
_zsh_autosuggest_strategy_${strategyName}() {
    local query="${query}"
    suggestion=$(_histdb_query "$query")
}

ZSH_AUTOSUGGEST_STRATEGY=${strategyName}`;

const FREQUENCY_IN_CURRENT_DIRECTORY_QUERY = `
SELECT commands.argv
FROM history
LEFT JOIN commands ON history.command_id = commands.rowid
LEFT JOIN places ON history.place_id = places.rowid
WHERE commands.argv LIKE '$(sql_escape $1)%'
GROUP BY commands.argv, places.dir
ORDER BY places.dir != '$(sql_escape $PWD)',
    COUNT(*) DESC
LIMIT 1
`;

const FREQUENCY_IN_SUBDIRECTORY_QUERY = `
SELECT commands.argv
FROM history
LEFT JOIN commands ON history.command_id = commands.rowid
LEFT JOIN places ON history.place_id = places.rowid
WHERE places.dir LIKE '$(sql_escape $PWD)%'
    AND commands.argv LIKE '$(sql_escape $1)%'
GROUP BY commands.argv
ORDER BY COUNT(*) DESC
LIMIT 1
`;

const plugin: Fig.Plugin = {
  icon: "💡",
  name: "zsh-histdb",
  displayName: "Zsh Histdb",
  type: "shell",
  description: "A slightly better history for zsh",
  authors: [
    {
      name: "larkery",
      github: "larkery",
    },
  ],
  github: "larkery/zsh-histdb",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "history"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-histdb.plugin.zsh"],
    preScript: `
# TODO: Should only be run on Macos: https://github.com/larkery/zsh-histdb/pull/31 
HISTDB_TABULATE_CMD=(sed -e $'s/\x1f/\t/g')
    `,
    postScript: "autoload -Uz add-zsh-hook",
  },
  configuration: [
    {
      displayName: "Zsh Autosuggest Integration",
      name: "zsh-autosuggestion-integration",
      description:
        "Pull zsh-autosuggestion suggestions from the histdb, using a pre-made or custom strategy.",
      type: "script",
      interface: "select",
      default: "none",
      options: [
        "none",
        {
          option: "frequency-in-subdirectory",
          description:
            "Suggest the most frequently issued command in the current directory or any subdirectory.",
        },
        {
          option: "frequency-in-directory",
          description:
            "Suggest the most frequently issued command issued exactly in this directory, or if no matches then the most frequent in any directory.",
        },
        "custom",
      ],
      compile: (value) => {
        switch (value) {
          case "frequency-in-subdirectory":
            return getZshAutosuggestIntegrationForQuery(
              FREQUENCY_IN_SUBDIRECTORY_QUERY
            );
          case "frequency-in-directory":
            return getZshAutosuggestIntegrationForQuery(
              FREQUENCY_IN_CURRENT_DIRECTORY_QUERY
            );
          case "none":
          case "custom":
          default:
            return "";
        }
      },
    },
    {
      displayName: "Zsh Autosuggest Custom Query",
      name: "zsh-autosuggestion-custom-query",
      hidden: ({ config }) =>
        config["zsh-autosuggestion-integration"] !== "custom",
      description:
        "Custom SQL query to get suggestions for zsh-autosuggestions.",
      type: "script",
      interface: "textarea",
      default: FREQUENCY_IN_SUBDIRECTORY_QUERY,
      compile: (value) =>
        getZshAutosuggestIntegrationForQuery(value, "fig_custom_histdb_top"),
    },
    {
      displayName: "History Reverse Search Keybindings",
      name: "history-reverse-search",
      description:
        "Enable history-reverse-isearch through the history db with ctrl-r",
      type: "script",
      interface: "toggle",
      default: false,
      compile: (value, { ctx }) =>
        value
          ? `source ${ctx.plugin.installDirectory}/histdb-interactive.zsh\nbindkey '^r' _histdb-isearch`
          : "",
    },
  ],
};

export default plugin;
