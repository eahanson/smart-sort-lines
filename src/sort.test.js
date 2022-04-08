const sortLines = require("./sort");

describe("sortLines", () => {
  test("handles undefined", () => {
    expect(sortLines(undefined)).toBe(undefined);
  });

  test("handles empty string", () => {
    expect(sortLines("")).toBe("");
  });

  test("handles one-line string", () => {
    expect(sortLines("hello")).toBe("hello\n");
  });

  test("sorts lines alphabetically", () => {
    expect(sortLines("cat\nant\nbat\n")).toBe("ant\nbat\ncat\n");
  });

  test("sorts lines case-insensitively", () => {
    expect(sortLines("Cat\nant\nbat\n")).toBe("ant\nbat\nCat\n");
  });

  test("preserves commas at the end of lines", () => {
    expect(sortLines("cat,\nant,\nbat\n")).toBe("ant,\nbat,\ncat\n");
  });

  test("preserves leading spaces", () => {
    expect(sortLines("  cat,\n  ant,\n  bat\n")).toBe(
      "  ant,\n  bat,\n  cat\n"
    );
  });

  test("doesn't try to preserve commas if more than one comma is missing", () => {
    expect(sortLines("cat,\nant\nbat,\ndog\n")).toBe("ant\nbat,\ncat,\ndog\n");
  });

  test("preserves surrounding brackets when lines end with commas", () => {
    expect(sortLines("[\n  cat,\n  ant,\n  bat\n]")).toBe(
      "[\n  ant,\n  bat,\n  cat\n]\n"
    );
  });

  test("preserves surrounding parens when lines do not end with commas", () => {
    expect(sortLines("[\n  cat\n  ant\n  bat\n]")).toBe(
      "[\n  ant\n  bat\n  cat\n]\n"
    );
  });
});
