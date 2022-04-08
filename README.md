# smart-sort-lines

Sorts lines of code with a tiny bit of intelligence.

If all but the last line of text end with a comma, then after sorting, all but the last line of text will still
end with a comma.

If the first line of text is a left bracket and the last line of text is a right bracket, they will not be sorted.

## TODO

[X] sort lines
[X] preserve leading whitespace
[X] handle trailing commas
[X] handle surrounding square brackets
[ ] maybe handle other trailing characters
[ ] maybe handle other surrounding characters
