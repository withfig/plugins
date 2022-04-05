import { ModuleConfiguration, compileZstyle } from "../utils";

const historySubstringSearch: ModuleConfiguration = {
  name: "history-substring-search",
  items: [
    {
      displayName: "Query Found Color",
      name: "query-found-color",
      description: "Query found color for history substring search",
      type: "script",
      interface: "text",
      default: "",
      compile: compileZstyle(
        ":prezto:module:history-substring-search:color",
        "found"
      ),
    },
    {
      displayName: "Query Not Found Color",
      name: "query-not-found-color",
      description: "Query *not* found color for history substring search",
      type: "script",
      interface: "text",
      default: "",
      compile: compileZstyle(
        ":prezto:module:history-substring-search:color",
        "not-found"
      ),
    },
    {
      displayName: "Search Globbing Flags",
      name: "globbing-flags",
      description: "Set history search globbing flags",
      type: "script",
      interface: "text",
      default: "",
      compile: compileZstyle(
        ":prezto:module:history-substring-search",
        "globbing-flags"
      ),
    },
  ],
};

export default historySubstringSearch;
