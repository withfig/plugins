/** The Fig namespace */
declare namespace Fig {
  /* Local device context about a plugin */
  interface PluginContext {
    installDirectory: string;
  }

  /* Context used to generate shell source code in a dotfile  */
  interface DotfileCompilationContext {
    plugin: PluginContext;
    shell: Shell;
  }

  /* Function that compiles a context to a string/string[] result to be included in dotfiles */
  type DotfileCompiler<T, S=Record<string, never>> = T extends string | string[]
    ? (_: S & { ctx: DotfileCompilationContext }) => T
    : never;

  /* DeviceEnvironment mediates queries about the local device environment */
  interface DeviceEnvironment {
    plugin: PluginContext;
    listFolder: (path: string) => Promise<string[]>;
  }

  type InstallationScriptCompiler = DotfileCompiler<string | string[]>;
  type InstallationScript =  string | string[] | InstallationScriptCompiler;

  interface PluginInstallation {
    preScript?: InstallationScript;
    postScript?: InstallationScript;
    sourceFiles?: InstallationScript;
  }

  type PluginOrigin = "github" | { github: string; };
  type Installation = PluginInstallation & {
    [key in Shell]?: PluginInstallation;
  } & {
    origin: PluginOrigin;
  };

  /* Current value of a field in a plugin configuration. */
  type ConfigurationValue = unknown;
  type ConfigurationDictionary = Record<string, ConfigurationValue>;

  /*  A ConfigurationGenerator dynamically computes a result based on current configuration item values. */
  type ConfigurationGenerator<
    T,
    S = Record<string, never>
  > = (_: S & { config: ConfigurationDictionary }) => T;

  type DeviceConfigurationGenerator<T> = ConfigurationGenerator<T | Promise<T>, { env?: DeviceEnvironment }>

  type UIType =
    | "multiselect"
    | "select"
    | "bool"
    | "number"
    | "string"

  // Interface common to Configuration *items* and Configuration groups (which contain configuration items)
  interface ConfigurationElementInterface {
    displayName?: string;
    description: string;
    details?: string;
    hidden?: ConfigurationGenerator<boolean>;
    disabled?: ConfigurationGenerator<boolean>;
  }

  interface ConfigurationItemInterface extends ConfigurationElementInterface {
    name?: string;
    // Defines the UI type for an item (how to display it)
    type: UIType;
  }

  // Multiselect UI item type
  interface MultiselectConfigurationItem<T> extends ConfigurationItemInterface {
    type: "multiselect";
    default?: T | T[];
    options?: T[] | DeviceConfigurationGenerator<T[]>;
  }

  // Select UI item type
  interface SelectConfigurationItem<T> extends ConfigurationItemInterface {
    type: "select";
    default?: T;
    options?: T[] | DeviceConfigurationGenerator<T[]>;
  }

  // Basic boolean, string, and number UI item types
  interface BasicConfigurationItemInterface<T> extends ConfigurationItemInterface {
    type: Extract<(
        | { data: string, type: "string" }
        | { data: boolean, type: "bool" }
        | { data: number, type: "number" }
      ), { data: T }>["type"];
    default?: T;
    options?: T[] | DeviceConfigurationGenerator<T[]>;
  }

  // An item that can support select, multiselect, or basic UI
  type SelectableConfigurationItem<T> = (
    | MultiselectConfigurationItem<T>
    | SelectConfigurationItem<T>
    | BasicConfigurationItemInterface<T>
  )

  type EnvironmentVariableConfigurationItem<T> =
    SelectableConfigurationItem<T> & { enviromentVariable: string };

  type ScriptConfigurationItem<T = unknown> = SelectableConfigurationItem<T> & {
    name: string;
    script: DotfileCompiler<string, { value: T }>;
  };

  type ConfigurationItem =
    | EnvironmentVariableConfigurationItem<boolean>
    | EnvironmentVariableConfigurationItem<string>
    | EnvironmentVariableConfigurationItem<number>
    | ScriptConfigurationItem<boolean>
    | ScriptConfigurationItem<string>
    | ScriptConfigurationItem<number>;

  interface ConfigurationGroup extends ConfigurationElementInterface {
    displayName: string;
    configuration: ConfigurationItem[]
  }

  type PluginType = "shell";
  type Shell = "zsh" | "bash" | "fish";

  type Author =
    | string
    | {
        /** The name of the author */
        name: string;
        /** The Twitter handle of the author */
        twitter?: string;
        /** The GitHub username of the author */
        github?: string;
      };

  export interface Plugin {
    /** The name of the plugin */
    name: string;
    /** The plugin type */
    type: PluginType;
    /** A description of the plugin */
    description?: string;
    /** The icon for the plugin */
    icon?: string;
    /** The site for the plugin */
    site?: string;
    /** The docs for the plugin */
    docs?: string;
    /** The github for the plugin in the format (owner/repo) */
    github?: string;
    /** The twitter for the plugin */
    twitter?: string;
    /** The authors for the plugin */
    authors?: Author[];
    /** The license for the plugin */
    license?: string[];
    /** The shells that the plugin supports */
    shells?: Shell[];
    /** The tags for the plugin */
    tags?: string[];
    /** The installation for the plugin */
    installation: Installation;
    /** The configuration for the plugin */
    configuration?: (ConfigurationItem | ConfigurationGroup)[];
  }
}
