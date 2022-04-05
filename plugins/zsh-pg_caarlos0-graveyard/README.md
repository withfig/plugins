# zsh-pg [![Build Status](https://travis-ci.org/caarlos0/zsh-pg.svg?branch=master)](https://travis-ci.org/caarlos0/zsh-pg)

A ZSH plugin with utility functions to work with PostgreSQL.

# Commands

- `pg create <name>`: create a database
- `pg drop <name>`: drop a database
- `pg ls`: list databases
- `pg cp <origin> <target>`: make a copy of a database
- `pg mv <origin> <target>`: rename a database
- `pg kill-connections <database>`: kill all connections to a database
- `pg dump-table <database> <table> > file.sql`: dump table data (in form of
inserts) into the `file.sql`

# Install

### Using antibody:

```sh
$ antibody bundle caarlos0/zsh-pg
```

### Using antigen:

```sh
$ antigen bundle caarlos0/zsh-pg
```

# Thanks to

- [original idea](https://github.com/juanibiapina/pg)

