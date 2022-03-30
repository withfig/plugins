/** The Fig namespace */
declare namespace Fig {
  /** Local device context about a plugin */
  interface PluginContext {
    /** The directory the plugin was installed in */
    installDirectory: string;
  }

  /** Context used to generate shell source code in a dotfile  */
  interface DotfileCompilationContext {
    plugin: PluginContext;
    /** The shell the plugin is being compiled for */
    shell: Shell;
  }

  /** Function that compiles a context to a string-like result or block to be
    * included in dotfiles
    */
  type DotfileCompiler<T, S> = (_: T & { ctx: DotfileCompilationContext }) => S

  /** DeviceEnvironment mediates queries about the local device environment */
  interface DeviceEnvironment {
    plugin: PluginContext;
    /** A function to list the directories in a folder */
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

  type BinaryDependency = {
    type: "binary";
    name: string;
  };
  type Dependency = BinaryDependency;

  type Installation = PluginInstallation & {
    [key in Shell]?: PluginInstallation;
  } & {
    /** The origin of the plugin */
    origin: PluginOrigin;
    /** Specify any dependencies the plugin has */
    dependencies?: Dependency[];
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
  // This enforces that, e.g. you can only use booleans with a toggle/checkbox UI.
  type UIsWithValueType<T> = T extends infer A ? (
    | A extends unknown[] ? MultiselectUI<A> : never
    | A extends boolean ? BasicUI<A, "checkbox" | "toggle"> : never
    | A extends string ? BasicSuggestionUI<A, "select" | "text"> : never
    | A extends number ? BasicSuggestionUI<A, "select" | "text"> : never
    | BasicSuggestionUI<A, "select">
  ) : never;

  // Gets all valid UIs that satisfy { value: T, uiType: S }
  type UI<T, S extends UIType = UIType> = Extract<UIsWithValueType<T>, { uiType: S }>

  // Interface common to Configuration *items* and Configuration groups (which contain configuration items)
  interface ConfigurationInterface {
    /** */
    displayName?: string;
    description?: string;
    additionalDetails?: string;
    hidden?: ConfigurationGenerator<boolean>;
    disabled?: ConfigurationGenerator<boolean>;
  }

  interface ConfigurationItemInterface<T, S> extends ConfigurationInterface {
    name?: string;
    compile?: DotfileCompiler<{ value: T }, S>;
  }

  type EnvironmentVariableItemForType<T, S extends UIType> = (
    ConfigurationItemInterface<T, {
      value: string,
      concat?: boolean,
      export?: boolean
    } | string | string[]>
    & UI<T, S>
    & { environmentVariable: string; }
  );

  type ScriptItemForType<T, S extends UIType> = (
    ConfigurationItemInterface<T, string>
    & UI<T, S>
    & {
        name: string;
        compile: DotfileCompiler<{ value: T }, string>
      }
  );

  type ScriptItem = (
    | ScriptItemForType<string[], "multiselect">
    | ScriptItemForType<number[], "multiselect">
    | ScriptItemForType<boolean, "checkbox" | "toggle">
    | ScriptItemForType<string, "select" | "text">
    | ScriptItemForType<number, "select" | "text">
  )

  type EnvironmentVariableItem = (
    | EnvironmentVariableItemForType<string[], "multiselect">
    | EnvironmentVariableItemForType<number[], "multiselect">
    | EnvironmentVariableItemForType<string, "select" | "text">
    | EnvironmentVariableItemForType<number, "select" | "text">
    | EnvironmentVariableItemForType<boolean, "checkbox" | "toggle">
  )

  type ConfigurationItem =
    | ScriptItem
    | EnvironmentVariableItem

  interface ConfigurationGroup extends ConfigurationInterface {
    /** The name of the group to display in the interface */
    displayName: string;
    /** The children configuration items that are a part of the group */
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


  type Category =
    | "Completion"
    | "Prompt"
    | "Color"
    | "Alias"
    | "Convenience Function"
    | "Productivity Hack"
    | "Framework"
    | "Other";

  export interface Plugin {
    /** The name of the plugin */
    name: string;
    /** The name of the plugin used in UI if defined */
    displayName?: string;
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
    /** The categories for the plugin */
    categories?: Category[];
    /** The keywords for the plugin */
    keywords?: string[];
    /** The installation for the plugin */
    installation: Installation;
    /** The configuration for the plugin */
    configuration?: (ConfigurationItem | ConfigurationGroup)[];
 }
}
