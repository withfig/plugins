Store your history into a sqlite3 database. Improves on the normal history by storing, for each history command:

- The start and stop times of the command
- The working directory where the command was run
- The hostname of the machine
- A unique per-host session ID, so history from several sessions is not confused
- The exit status of the command

It is also possible to merge multiple history databases together without conflict, so long as all your machines have different hostnames.

**Note:** This package requires sqlite3 and coreutils commands installed
on your `PATH`.

### Importing old history

[go-histdbimport](https://github.com/drewis/go-histdbimport) and [ts-histdbimport](https://github.com/phiresky/ts-histdbimport) are useful tools for doing this! Note that the imported history will not include metadata such as the working directory or the exit status, since that is not stored in the normal history file format, so queries using `--in DIR`, etc. will not work as expected.

### Integration with `zsh-autosuggestions`

If you use
[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
you can configure it to search the history database instead of the ZSH
history file by choosing an integration type. Choosing
`frequency-in-subdirectory` will result in the following db query to
select the suggestion:

```sql
SELECT commands.argv
FROM history
LEFT JOIN commands ON history.command_id = commands.rowid
LEFT JOIN places ON history.place_id = places.rowid
WHERE places.dir LIKE '$(sql_escape $PWD)%'
    AND commands.argv LIKE '$(sql_escape $1)%'
GROUP BY commands.argv
ORDER BY COUNT(*) DESC
LIMIT 1
```

This query will find the most frequently issued command that is issued in
the current directory or any subdirectory. You can get other behaviours by
changing the query, for example `frequency-in-directory` will issue this
query:

```sql
SELECT commands.argv
FROM history
LEFT JOIN commands ON history.command_id = commands.rowid
LEFT JOIN places ON history.place_id = places.rowid
WHERE commands.argv LIKE '$(sql_escape $1)%'
GROUP BY commands.argv, places.dir
ORDER BY places.dir != '$(sql_escape $PWD)',
    COUNT(*) DESC
LIMIT 1
```

This will find the most frequently issued command issued exactly in this
directory, or if there are no matches it will find the most frequently
issued command in any directory.

You can also choose `custom` to write a custom SQL query that uses other
DB fields fields like the hostname to restrict to suggestions on this host, etc.

### Reverse isearch

You can enable `history-reverse-isearch` in configuration, which will bind
`^r` over the typical reverse history search shell functionality.
This is like normal `history-reverse-isearch` except:
- The search will start with the buffer contents automatically
- The editing keys are all standard (because it does not really use the minibuffer).

  This means pressing `C-a` or `C-e` or similar will not exit the search like normal `history-reverse-isearch`
- The accept key (`RET`) does not cause the command to run immediately but instead lets you edit it

There are also a few extra keybindings:

- `M-j` will `cd` to the directory for the history entry you're looking at.
  This means you can search for ./run-this-command and then `M-j` to go to the right directory before running.
- `M-h` will toggle limiting the search to the current host's history.
- `M-d` will toggle limiting the search to the current directory and subdirectories' histories

## Database schema
The database lives by default in `$HOME/.histdb/zsh-history.db`.
You can look in it easily by running `_histdb_query`, as this actually just fires up sqlite with the database.

For inspiration you can also use `histdb` with the `-d` argument and it will print the SQL it's running.

### Querying history
You can query the history with the `histdb` command.
With no arguments it will print one screenful of history on the current host.

With arguments, it will print history lines matching their concatenation.

For wildcards within a history line, you can use the `%` character, which is like the shell glob `*`, so `histdb this%that` will match any history line containing `this` followed by `that` with zero or more characters in-between.

To search on particular hosts, directories, sessions, or time periods, see the help with `histdb --help`.

You can also run `histdb-top` to see your most frequent commands, and `histdb-top dir` to show your favourite directory for running commands in, but these commands are really a bit useless.

**Example:**

```
$ histdb strace
time   ses  dir  cmd
17/03  438  ~    strace conkeror
22/03  522  ~    strace apropos cake
22/03  522  ~    strace -e trace=file s
22/03  522  ~    strace -e trace=file ls
22/03  522  ~    strace -e trace=file cat temp/people.vcf
22/03  522  ~    strace -e trace=file cat temp/gammu.log
22/03  522  ~    run-help strace
24/03  547  ~    man strace
```

These are all the history entries involving `strace` in my history.
If there was more than one screenful, I would need to say `--limit 1000` or some other large number.
The command does not warn you if you haven't seen all the results.
The `ses` column contains a unique session number, so all the `522` rows are from the same shell session.

To see all hosts, add `--host` /after/ the query terms.
To see a specific host, add `--host hostname`.
To see all of a specific session say e.g. `-s 522 --limit 10000`.

## Synchronising history
You should be able to synchronise the history using `git`; a 3-way merge driver is supplied in `histdb-merge`.

The 3-way merge will only work properly if all the computers on which you use the repository have different hostnames.

The `histdb-sync` function will initialize git in the histdb directory and configure the merge driver for you first time you run it.
Subsequent times it will commit all changes, pull all changes, force a merge, and push all changes back again.
The commit message is useless, so if you find that kind of thing upsetting you will need to fix it.

The reason for using `histdb-sync` instead of doing it by hand is that if you are running the git steps in your shell the history database will be changed each command, and so you will never be able to do a pull / merge.
