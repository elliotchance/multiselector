var MultiSelector = function() {
  this.evaluate = function() {
    var selected = [];

    this.choices.forEach(function(choice) {
        if (choice[2]) {
            selected.push(choice[1]);
        }
    });

    return selected.join(this.separator);
  }
}

MultiSelector.inputs = [
    InputField("choices", "Choices", "KeyValueList"),
    InputField("separator", "Separator", "String", {defaultValue: ","})
];

// Set the Extension Identifier (must be same as the directory name).
MultiSelector.identifier = "me.elliotchance.MultiSelector";

// Give a display name to your Dynamic Value.
MultiSelector.title = "Multi Selector";

// Link to the Dynamic Value documentation.
//MultiSelector.help = "https://paw.cloud/docs";

// Call to register extension function.
registerDynamicValueClass(MultiSelector);
