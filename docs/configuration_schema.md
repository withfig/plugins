# Configuration Schema

Configuration is the part of Plugins that makes it so powerful as compared to
other plugin systems, the ability to quickly see all the setting and change
them allows users to start using a plugin to its full potential much quicker!

The installation field takes a list of configurations, these can also be grouped
together

Declaration: `configuration?: (ConfigurationItem | ConfigurationGroup)[];

---

## `ConfigurationItem`

A `ConfigurationItem` can be one of two varients, `EnvironmentVariableItem` or 
`ScriptItem`, they both also have the elements of [`Ui`](#ui) and
[`ConfigurationInterface`](#configurationinterface)

### `EnvironmentVariableItem`


      value: string,
      concat?: boolean,
      export?: boolean
 

### `ScriptItem`


---

## `ConfigurationInterface`

- `displayName`: The name of the configuration item, this is what is displayed
  to the user

- `description`: A description of the configuration item, this should be relatively short

- `additionalDetails`: Additional information about the configuration item

- `hidden`: Whether or not the configuration item is hidden based on a [`ConfigurationGenerator<bool>`](#configurationgenerator)

- `disabled`: Whether or not the configuration item is disabled based on a [`ConfigurationGenerator<bool>`](#configurationgenerator)

```typescript
interface ConfigurationInterface {
  displayName?: string;
  description?: string;
  additionalDetails?: string;
  hidden?: ConfigurationGenerator<boolean>;
  disabled?: ConfigurationGenerator<boolean>;
}
```

---

## `ConfigurationGroup`

A `ConfigurationGroup` can take all the elements in
[`ConfigurationInterface`](#configurationinterface) but requires a 
`displayName` and has a list of children `configuration` that contains a list of
[`ConfigurationItem`](#configurationitem)s.

Declaration:

```typescript
interface ConfigurationGroup extends ConfigurationInterface {
  displayName: string;
  configuration: ConfigurationItem[]
}
```
