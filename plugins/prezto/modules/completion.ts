import { ModuleConfiguration, compileZstyleList } from "../utils";
const completion: ModuleConfiguration = {
  name: "completion",
  items: [{
    displayName: "Ignored Hosts",
    name: "ignored-hosts",
    description: "Comma separated list of entries to ignore in static '/etc/hosts' for host completion",
    type: "script",
    // TODO: support multiselect-text.
    interface: "text",
    default: "0.0.0.0,127.0.0.1",
    compile: compileZstyleList(':prezto:module:completion:*:hosts', 'etc-host-ignores'),
  }]
}

export default completion;
