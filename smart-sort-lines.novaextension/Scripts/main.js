const sortLines = require("sort.js");

exports.activate = function () {
  // Do work when the extension is activated
};

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
};

nova.commands.register("smart-sort-lines.sort", (editor) => {
  var selectedRanges = editor.selectedRanges;
  editor.edit(function (e) {
    for (var range of selectedRanges) {
      e.replace(range, sortLines(editor.getTextInRange(range)));
    }
  });
});
