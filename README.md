# smart-sort-lines

Sorts lines of code with a tiny bit of intelligence.

If all but the last line of text end with a comma, then after sorting, all but the last line of text will still
end with a comma.

If the first line of text is a left bracket and the last line of text is a right bracket, they will not be sorted.

For example, this text:

```
  [
    cat,
    ant,
    BAT
  ]
```

gets sorted to:

```
  [
    ant,
    BAT,
    cat
  ]
```

## Nova extension

It also includes a [Nova](https://nova.app) extension. See [its readme](smart-sort-lines.novaextension/README.md).

## TODO

    [X] sort lines
    [X] preserve leading whitespace
    [X] handle trailing commas
    [X] handle surrounding square brackets
    [ ] fix: sometimes it adds an extra newline
    [ ] maybe handle other trailing characters
    [ ] maybe handle other surrounding characters

## Contributing

Contributions are welcome. Please use `bin/dev/build` to copy changes to the main JS into the Nova extension dir.
Use `bin/dev/test` to run all the tests.

## License, Copyright, Attributions

Copyright 2023 Erik Hanson. See [LICENSE](https://github.com/eahanson/smart-sort-lines/blob/main/LICENSE).
