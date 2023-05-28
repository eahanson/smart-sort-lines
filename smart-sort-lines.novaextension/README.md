**Smart Sort Lines** sorts lines of code with a little bit of intelligence.

If all but the last line of text end with a comma, then after sorting, all but the last line of text will still
end with a comma.

If the first line of text is a left bracket and the last line of text is a right bracket, they will not be sorted.

It's particularly useful when sorting a list. For example, this text:

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

## Usage

To run Smart Sort Lines:

- Select the **Editor → Smart Sort Lines** menu item; or
- Open the command palette and type `Smart Sort Lines`

## Contributing

Contributions are welcome. See [the outer project's README](https://github.com/eahanson/smart-sort-lines/blob/main/README.md).

## License, Copyright, Attributions

Copyright 2023 Erik Hanson. See [LICENSE](https://github.com/eahanson/smart-sort-lines/smart-sort-lines.novaextension/blob/main/LICENSE).
