"use strict";
const fs = require('fs');
let data = {
    "name": "ux-link-panel",
    "modifiers": ["special", "horizontal", "important"],
    "elements": [
        {
            "name": "heading",
            "modifiers": ["uppercase"]
        },
        {
            "name": "description",
            "modifiers": ["note", "important"]
        },
        {
            "name": "items",
            "elements": [
                {
                    "name": "item",
                    "modifiers": ["external"],
                    "elements": [
                        {
                            "name": "icon",
                            "modifiers": ["small"]
                        },
                        {
                            "name": "link"
                        }
                    ]
                }
            ]
        }
    ]
};

//creates file to put outputs in
fs.writeFile("test.scss", "", (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("The file was created!");
});

//append block variable with modifiers and output each
function appendScss(text) {
    fs.appendFile("test.scss", text, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

function renderElements(elements) {
    let scssElements = "";

    elements.forEach(function(element) {
        scssElements += `${renderElement(element)}\n`;
    });

    return scssElements;
}

//render selector for main component/element
function renderElement(element, prefix) {
    let scssModifiers = "",
        scssElements  = "",
        scssElement   = "";

    prefix = prefix || "&__";

    if(element.modifiers) {
        scssModifiers = renderModifiers(element.modifiers);
    }

    if(element.elements) {
        scssElements = renderElements(element.elements);
    }

    scssElement = `${prefix}${element.name} {

            ${scssModifiers}
            ${scssElements}

}`;

    return scssElement;
}

//loop through array of modifiers and call rendering function for each
function renderModifiers(modifiers) {
    let scssModifiers = "";

    modifiers.forEach(function(modifier) {
        scssModifiers += `${renderModifier(modifier)}\n`;
    });

    return scssModifiers;
}

//return selector for each modifier
function renderModifier(modifier) {
    let scssModifier = `&--${modifier} {

}`;
    return scssModifier;
}

// function formatScss(strings, values) {
//     console.log(strings);
//     console.log("Values here " + values);
// }
//
// formatScss`testing how this thing works
// newline here
// newline and expression ${ 2+2 }`;

appendScss(renderElement(data, "."));
