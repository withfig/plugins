import { ModuleConfiguration, compileZstyle } from "../utils";

const autosuggestions: ModuleConfiguration = {
  name: "autosuggestions",
  items: [
    {
      displayName: "Query Found Color",
      name: "query-found-color",
      description: "Sets the query found color",
      type: "script",
      interface: "text",
      default: "",
      compile: compileZstyle(":prezto:module:autosuggestions:color", "found"),
    },
  ],
};

export default autosuggestions;
