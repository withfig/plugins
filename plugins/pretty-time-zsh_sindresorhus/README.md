> Convert seconds to a human readable string: `165392` → `1d 21h 56m 32s`


## Usage

```sh
$ date +%s
1407771536

$ pretty-time 165392
1d 21h 56m 32s

# seconds since epoch - yesterday since epoch + 11111 seconds
$ pretty-time "$(date +%s) - $(date -v-1d +%s) + 11111"
1d 3h 5m 11s
```


## Related

See [`pretty-ms`](https://github.com/sindresorhus/pretty-ms) for a JavaScript version that converts from milliseconds.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

