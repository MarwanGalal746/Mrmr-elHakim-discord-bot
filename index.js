require('dotenv').config()
const fetch = require("node-fetch")
const {Client} = require('discord.js')
const client  = new Client();

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}


client.on('ready' , () => {})
client.on('message', (message) => {
    if(message.author.bot) return ;
    if(message.content === "$inspire") {
      getQuote().then(quote => message.channel.send(quote))
    }
})
client.login(process.env.DISCORDJS_BOT_TOKEN)

