const dbd = require("dbd.ts")
const bot = new dbd.Bot({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    prefix: ">"
})
bot.commands.load({
    path: "./commands/"
})
bot.addEvent([
    "onMessage",
    "onInteraction"
])
bot.commands.add({
    type: "basicCommand",
    name: "ping",
    code: `🏓 Pong! $pingms`
})
bot.commands.add({
    type: "basicCommand",
    name: "eval",
    code: `$onlyForIDs[$botOwnerID;]
$eval[$message]`
})
bot.login(process.env.TOKEN)