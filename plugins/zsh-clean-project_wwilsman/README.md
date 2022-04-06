# ZSH Clean Project

Removes files from projects optionally ignoring paths. A project is
determined by the presence of a git repo. `clean_project` does nothing
when not inside of a project.

## Installation with Antigen

```bash
antigen bundle wwilsman/zsh-clean-project
```

## Usage

```bash
clean_project -h
```

### Environment Variables

These should be set before first loading the plugin as `chpwd` is
triggered immediately and can clean files in your current project.

```bash
# Automatically clean the project after chpwd
AUTO_CLEAN_PROJECT=true

# Default file name patterns to clean
AUTO_CLEAN_PROJECT_FILE_PATTERNS=(
  ".DS_Store"
  "Thumbs.db"
)

# Default path patterns to ignore (project root relative)
AUTO_CLEAN_PROJECT_IGNORE_PATHS=(
  "./node_modules/*"
  "./bower_components/*"
)

# Output a message after auto cleaning
AUTO_CLEAN_PROJECT_SILENT=false

# The message output after auto cleaning
AUTO_CLEAN_PROJECT_SILENT="Automatically removed the following files:"
```

