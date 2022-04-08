/*

Sorts a multiline string, ignoring case.

Additionally:

* If all the lines except for the last end with a comma, then the new sorted string's lines will all end with commas,
  except for the last one which will have no comma.
* If the first and last lines are brackets or parens, they are kept in place.

*/
function sortLines(text) {
  if (isBlank(text)) {
    return text;
  } else {
    let lines, joiner, surroundStart, surroundEnd;

    lines = text.split("\n").filter(isPresent);
    [lines, surroundStart, surroundEnd] = unsurround(lines);

    if (isCommaSeparated(lines)) {
      lines = removeTrailingCommas(lines);
      joiner = ",\n";
    } else {
      joiner = "\n";
    }

    if (isPresent(surroundStart) && isPresent(surroundEnd)) {
      surroundStart = surroundStart + "\n";
      surroundEnd = surroundEnd + "\n";
    } else {
      surroundStart = surroundEnd = "";
    }

    lines.sort(isort);
    return surroundStart + lines.join(joiner) + "\n" + surroundEnd;
  }
}

module.exports = sortLines;

// // //

function compact(lines) {
  return lines.filter((line) => isPresent(line));
}

function endsWithComma(text) {
  return /,\s*$/.test(text);
}

function isBlank(text) {
  return !text || /^\s*$/.test(text);
}

function isCommaSeparated(list) {
  const last = list.slice(-1);
  const rest = list.slice(0, -1);
  return !endsWithComma(last) && rest.every(endsWithComma);
}

function isPresent(text) {
  return !isBlank(text);
}

function isort(a, b) {
  var upperA = a.toUpperCase();
  var upperB = b.toUpperCase();
  if (upperA < upperB) {
    return -1;
  } else if (upperA > upperB) {
    return 1;
  } else {
    return 0;
  }
}

function removeTrailingCommas(lines) {
  return lines.map((line) => line.replace(/,\s*$/, ""));
}

function unsurround(lines) {
  const first = lines.at(0);
  const last = lines.at(-1);

  if (/^\s*\[\s*$/.test(first) && /^\s*\]\s*$/.test(last)) {
    return [lines.slice(1, -1), first, last];
  } else {
    return [lines, null, null];
  }
}
