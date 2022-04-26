# Plugin Schema

The plugin schema defines metadata, installation, and configuration details about a plugin. 

## Plugin Fields

### `name`

The unique name for the plugin, this must be the same name as the filename and can not be changed later.

It should also match the regex `[a-zA-Z][a-zA-Z0-9\.-_]*`, start with alphabetic character and followed by any number of alphanumeric characters, `.`, `-`, or `_`.

Declaration: `name: string;`

---

### `displayName`

The name used for display purposes

Declaration: `displayName?: string;

---

### `type`

The type of the plugin, the only current type of plugin is a `shell` plugin

Declaration: `type: "shell"`

---

### `description`

A short description of a plugin, this should breifly explain what the plugin is in less than 100 characters.

Declaration: `description?: string`

---

### `icon`

The icon of a plugin used in the plugin store

This should either be an emoji or a url to a square image

Declaration: `icon?: string`

---

### `screenshots`

An array of screenshots that will be displayed along with the plugin.

Declaration: `screenshots?: string[];`

---

### `site`

A url to the offical site of a plugin

Declaration: `site?: string`

---

### `docs`

A url to the offical docs for a plugin

Declaration: `docs?: string`

---

### `github`

The `owner/repo` of the plugin, this is both used for metadata and determining where to clone the plugin from

Declaration: `github?: string`

---

### `twitter`

The twitter handle for the plugin

Declaration: `twitter?: string`

---

### `authors`

A list of authors who created the plugin

Declaration: `authors?: Author[]`

#### `Author` type

The authors is a list of the following type:

```typescript
type Author =
  | string
  | {
      name: string;
      twitter?: string;
      github?: string;
    };
```

If the author is a string that is their name, the twitter should be their twitter handle, and github should be the github username

---

### `license`

The license is a list of the licences of the plugin 

The string should follow the [SPDX License syntax](https://en.wikipedia.org/wiki/Software_Package_Data_Exchange#License_syntax)

Declaration: `license?: string[]`

---

### `shells`

This is an inclusive list of the shells that a plugin supports

Declaration: `shells?: Shell[]` 

#### `Shell` type

```typescript
type Shell = "bash" | "zsh" | "fish";
```

---

### `categories`

The categories is a list of the catagories that a plugin falls under, this array should contain at least one category

Declaration: `categories?: Category[]`

#### `Category` type

```typescript
type Category =
  | "Completion"
  | "Prompt"
  | "Color"
  | "Alias"
  | "Convenience Function"
  | "Productivity Hack"
  | "Framework"
  | "Other";
```

---

### `keywords`

Keywords act as additional metadata for a plugin that is fully user definable

Declaration: `keywords?: string[]`

---

### `installation`

See [Installation](installation_schema.md)

---

### `configuration`

See [Configuration](configuration_schema.md)

