const {readFileSync, whiteFileSync} = require("fs");
const {resolve} = require("path");
module.exports = {
    index: function(){
        let file = resolve(__dirname, "../data/products.json")
        let data = readFileSync(file);
        return JSON.parse(data);
    }
}