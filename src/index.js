require('dotenv').config()
const fetch = require("node-fetch")
const {Client} = require('discord.js')
const client  = new Client();
const server = require('./server.js')

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
    if(message.content === "$quote") {
      getQuote().then(quote => message.channel.send(quote))
    } else if(message.content === "$help") {
      message.channel.send("Just type $quote to get a random quote")
    }
})
server()
client.login(process.env.DISCORDJS_BOT_TOKEN)

