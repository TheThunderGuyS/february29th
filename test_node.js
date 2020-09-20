#!/usr/bin/env node
var february29th = require("./index.js");
if (february29th.isFebruary29th()) {
    console.log("Yes");
}
else {
    console.log("No");
}
