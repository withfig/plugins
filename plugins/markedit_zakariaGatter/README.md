# MarkEdit

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Installation](#installation)
- [Help](#help)

## About
[Markedit] is a very simple (zsh / bash) Plugin to mark Files and Edit them With Auto completion for existing Marks

[Markedit] allow you to ...

* Mark A file to edit
* Mark A file to edit as root
* Remove Marks
* Jump and edit a Mark on the fly
* Edit exist Marks

#### Usage
---

* **Add Mark** :

``` sh
ea makedit /path/to/markedit/markedit
```
Or if the File need Sudo Permission
``` sh
ea _ markedit /path/to/markedit/markedit.plugin.zsh
```

* **Remove Mark** :
```sh
er markedit
```

* **Edit Mark** :
```sh
em markedit
```

* **Show Marks** :
```sh
es
markedit    /path/to/markedit/markedit		# Mark with out sudo Permission
markedit    /path/to/markedit/markedit   sudo    # mark with sudo Permission
```

* **Change Mark Name or File** :
```sh
ee markedit
```

## INSTALLATION

```sh
git clone https://gitlab.com/zakariaGatter/MarkEdit /path/to/markedit
```

#### Add MarkEdit Plugin to ~./zshrc

---

```sh
source /path/to/markedit/markedit
```

## HELP

```
    MARK EDIT (20-05-2018)
    Written by Zakaria Barkouk (zakaria.gatter@gmail.com)

    Mark your file To easy Access

OPTS :
        ea          Add Mark File
        er          Remove Mark File
        es          Show All Mark File's
        em          Edit Mark File
        ee          change or Edit Exist Mark

EXAMPLE :
        ea bashrc ~/.bashrc     ( add 'bashrc' Mark with out sudo Permission )
        ea _ bashrc ~/.bashrc   ( add 'bashrc' Mark with sudo Permission )
        em bashrc               ( Edit to 'bashrc' Mark)
        er bashrc ...           ( Remove 'bashrc' Mark and support multi Delete)
        ee bashrc               (Edit Exist mark like change the mark name or File)

```

[MarkEdit]:https://gitlab.com/zakariaGatter/MarkEdit

