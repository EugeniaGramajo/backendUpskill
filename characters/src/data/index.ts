const characters = require("./data.json")

module.exports = {
    list: async ()=>{
        return characters
    },
    create: async ()=>{
        throw new Error("aiuda")
    }
}