const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "<";

client.login(process.env.TOKEN);


client.on("message", message =>{
    if(!message.guild) return
    if(message.content === "hello"){
        message.channel.send("Bonjour " + message.author.username)
    }
    if(message.content === "cc"){
        message.channel.send("Bonjour " + message.author.username)
    }
    if(message.content === "salut"){
        message.channel.send("Bonjour " + message.author.username)
    }
    if(message.content === "bonjour"){
        message.channel.send("Bonjour " + message.author.username)
    }
    if(message.content === "yo"){
        message.channel.send("Bonjour " + message.author.username)
    }
    if(message.content === "Bonjour"){
        message.channel.send("Bonjour " + message.author.username)
    }
    if(message.content === "Coucou"){
        message.channel.send("Bonjour " + message.author.username)
    }
});
