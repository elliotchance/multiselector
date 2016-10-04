var MultiSelectorDynamicValue = function() {
  var clipboardEmoji = '\uD83D\uDCCB';

  this.evaluate = function() {
    switch (this.format) {
      case 'json':
        // The JSON format is easy because Paw only provide the data that is
        // selected (with the checkboxes) so we just need to convert it to text.
        return JSON.stringify(this.json);

      case 'list':
        // List returns the individual items separated with the string they
        // provide (which defaults to a comma). I would assume that they use a
        // JSON array so we only care about going to a key path depth of 1.
        return this.json.join(this.separator);
    }
  }

  this.title = function() {
    if (this.json === undefined || this.json.length === 0) {
      return 'Multi Selector ' + clipboardEmoji;
    }

    return clipboardEmoji;
  }

  this.text = function() {
    return this.evaluate();
  }
}

MultiSelectorDynamicValue.inputs = [
  InputField("json", "JSON", "JSON", {
    persisted: true
  }),
  InputField("format", "Format", "Select", {
    choices: {
      json: "JSON",
      list: "List"
    },
    persisted: true
  }),
  InputField("separator", "Separator (only for List)", "String", {
    defaultValue: ","
  })
];

// Set the Extension Identifier (must be same as the directory name).
MultiSelectorDynamicValue.identifier = "me.elliotchance.MultiSelectorDynamicValue";

// Give a display name to your Dynamic Value.
MultiSelectorDynamicValue.title = "Multi Selector";

// Link to the Dynamic Value documentation.
MultiSelectorDynamicValue.help = "https://github.com/elliotchance/multiselector";

// Call to register extension function.
registerDynamicValueClass(MultiSelectorDynamicValue);
