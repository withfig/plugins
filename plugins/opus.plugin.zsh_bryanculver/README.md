# opus

Lightly simple utility to jump between projects from anywhere. No more `cd ../../../../` nonsense!

Leverages links in a `~/.opus_projects/` folder.

## How to Use:

### Adding a New Project

*Syntax:*
```bash
$ opus -c project_name /path/to/project/folder
```

*Example:*
```bash
$ opus -c nodeapp ~/Workspace/Repos/nodeapp
```

### Work on a Project

*Syntax:*
```bash
$ opus project_name
```

*Example:*
```bash
$ opus nodeapp
```

### Remove a Project

*Syntax:*
```bash
$ opus -d project_name
```

*Example:*
```bash
$ opus -d nodeapp
```

