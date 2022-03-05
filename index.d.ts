/** The Fig namespace */
declare namespace Fig {
  /** Local device context about a plugin */
  interface PluginContext {
    installDirectory: string;
  }

  /** Context used to generate shell source code in a dotfile  */
  interface DotfileCompilationContext {
    plugin: PluginContext;
    shell: Shell;
  }

  /** Function that compiles a context to a string/string[] result to be included in dotfiles */
  type DotfileCompiler<T, S> = S extends string | string[]
    ? (_: T & { ctx: DotfileCompilationContext }) => S
    : never;

  /** DeviceEnvironment mediates queries about the local device environment */
  interface DeviceEnvironment {
    plugin: PluginContext;
    listFolder: (path: string) => Promise<string[]>;
  }

  type InstallationScriptCompiler = DotfileCompiler<{}, string | string[]>;
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

  /** Current value of a field in a plugin configuration. */
  type ConfigurationValue = unknown;
  type ConfigurationDictionary = Record<string, ConfigurationValue>;

  /** Dynamically computes a result based on current configuration item values. */
  type ConfigurationGenerator<T, S={}> = (_: S & { config: ConfigurationDictionary }) => T;

  type DeviceConfigurationGenerator<T> = ConfigurationGenerator<T | Promise<T>, { env?: DeviceEnvironment }>

  type UIType =
    | "multiselect"
    | "select"
    | "text"
    | "checkbox"
    | "toggle"

  /** A UI augmented with suggestions that can be static or dynamically
   * generated from the user's environment
   */
  interface SuggestionUI<T> {
    uiType: UIType;
    options?: T[] | DeviceConfigurationGenerator<T[]>;
  }

  // Multiselect UI item type
  interface MultiselectUI<T extends unknown[]> extends SuggestionUI<T[number]> {
    uiType: "multiselect";
    default: T[number] | T;
  }

  interface BasicSuggestionUI<T, U extends UIType> extends SuggestionUI<T> {
    uiType: U;
    default: T;
  }

  interface BasicUI<T, U extends UIType> {
    uiType: U;
    default: T;
  }

  // Get all ui's that support a value type of T.
  type UIsWithValueType<T> = (
    | T extends unknown[] ? MultiselectUI<T> : never
    | T extends boolean ? BasicUI<T, "checkbox" | "toggle"> : never
    | T extends string ? BasicSuggestionUI<T, "select" | "text"> : never
    | T extends number ? BasicSuggestionUI<T, "select" | "text"> : never
    | BasicSuggestionUI<T, "select">
  )

  // Gets all valid UIs that satisfy { value: T, uiType: S }
  type UI<T, S extends UIType = UIType> = Extract<UIsWithValueType<T>, { uiType: S }>

  // Interface common to Configuration *items* and Configuration groups (which contain configuration items)
  interface ConfigurationInterface {
    displayName?: string;
    description: string;
    details?: string;
    hidden?: ConfigurationGenerator<boolean>;
    disabled?: ConfigurationGenerator<boolean>;
  }

  interface ConfigurationItemInterface<T, S> extends ConfigurationInterface {
    name?: string;
    compile?: DotfileCompiler<{ value: T }, S>;
  }

  type EnvironmentVariableItemForType<T, S extends UIType = UIType> = (
    ConfigurationItemInterface<T, {
      value: string,
      concat?: boolean,
      export?: boolean
    } | string>
    & UI<T, S>
    & { environmentVariable: string; }
  )

  type ScriptItemForType<T, S extends UIType = UIType> = (
    ConfigurationItemInterface<T, string>
    & UI<T, S>
    & {
        name: string;
        compile: DotfileCompiler<{ value: T }, string>
      }
  )

  type ScriptItem = (
    | ScriptItemForType<boolean[], "multiselect">
    | ScriptItemForType<string[], "multiselect">
    | ScriptItemForType<number[], "multiselect">
    | ScriptItemForType<boolean>
    | ScriptItemForType<string>
    | ScriptItemForType<number>
  )

  type EnvironmentVariableItem = (
    | EnvironmentVariableItemForType<boolean[], "multiselect">
    | EnvironmentVariableItemForType<string[], "multiselect">
    | EnvironmentVariableItemForType<number[], "multiselect">
    | EnvironmentVariableItemForType<boolean>
    | EnvironmentVariableItemForType<string>
    | EnvironmentVariableItemForType<number>
  )

  type ConfigurationItem =
    | ScriptItem
    | EnvironmentVariableItem

  interface ConfigurationGroup extends ConfigurationInterface {
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
