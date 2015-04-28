"use strict";

function randomGuid() {
    var numberOfBlocks = arguments[0] === undefined ? 4 : arguments[0];

    function s4() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
    }

    var output = "";
    var num = numberOfBlocks;
    while (num > 0) {
        output += s4();
        if (num > 1) output += "-";
        num--;
    }
    return output;
}
exports.randomGuid = randomGuid;

//generate a guid that is tested unique against id's on the current doc
function domSafeRandomGuid() {
    var numberOfBlocks = arguments[0] === undefined ? 4 : arguments[0];

    function s4() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
    }

    var output = "";
    var num = numberOfBlocks;
    while (num > 0) {
        output += s4();
        if (num > 1) output += "-";
        num--;
    }

    if (null === document.getElementById(output)) {
        return output;
    } else {
        domSafeRandomGuid(numberOfBlocks);
    }
}
exports.domSafeRandomGuid = domSafeRandomGuid;

