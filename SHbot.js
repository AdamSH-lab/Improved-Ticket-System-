const Discord = require("discord.js");
const SH = new Discord.Client();
const toekn = ""
const prefix = "$"
const fs = require("fs")



SH.on("ready", () => {
    console.log("bot connected")
})



SH.on("message", message => {
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    if (command === "roomhelp") {
        if (!message.member.roles.exists("name", "Donator")) return message.channel.send(`**${message.author} Sorry but you need to donate to our server in purpose to use this command!**`)
        if (args[1] === null) return message.channel.send(`${message.author} Please prvoide reason for your help room for example\n**!roomhelp (reason)`)
        if (message.guild.channels.exists("name", `${message.author} Help Room`)) return message.channel.send(`${message.author} You already have a voice help room created`)
        let guild = message.guild;
        var random = Math.floor(Math.random(100, 1000))
        guild.createChannel(`${message.author} Help Room`, "voice").then(m => {
            m.overwritePermissions(message.guild.id, {
                VIEW_CHANNEL: false
            })
            m.overwritePermissions(message.author.id, {
                VIEW_CHANNEL: true
            })
            m.overwritePermissions("663504550585434139", {
                VIEW_CHANNEL: true
            })
        })
        var embed = new Discord.RichEmbed()
        .setTitle(`Your Voice room Has been created`)
        .addField("**Thank you for Choosing our help system our staff will be back to you soon as possible**\n **for now I have created for you an help voice channel**\n **note: the voice channel will be deleted in 10 min**\n if You need more then voice channel you can open a ticket that you can write to our staff", "Smart Help System")
        .setFooter("Made By AdamSH")
        .setColor("#08fc34")
        message.channel.send(`${message.author}`)
        message.channel.send(embed)
    }
})

const sh3 = new Discord.RichEmbed()
.setTitle("📑Ticket System📑")
.setColor(`#f50b0b`)
.setDescription(`**You already have a Ticket Open⛔**`)
.setFooter("SH Ticket System")
const sh4 = new Discord.RichEmbed()
.setTitle("📑Ticket System📑")
.setColor(`#f50b0b`)
.setDescription(`**I Cant Find An "Ticket Staff" Role, Please Create a role🛠️**`)
.setFooter("SH Ticket System")
const sh8 = new Discord.RichEmbed()
.setTitle("📑Ticket System📑")
.setColor(`#06ad22`)
.setDescription(`**Please provide the help you need to make the help faster✅**`)
.setFooter(`SH Ticket System`)
SH.on('message', message => {
    if  (message.content.toLowerCase().startsWith(prefix + "open")) {
        if (!message.guild.roles.exists("name", "Ticket Staff")) return message.channel.send(sh4);
        if (message.guild.channels.exists("name","ticket-" + message.author.id)) return message.channel.send(sh3);
        if (message.guild.roles.exists("name", "Ticket Staff")) {
            message.guild.createChannel(`Ticket-${message.author.id}`, "text").then(g => {
                let role1 = message.guild.roles.find("name", "Ticket Staff");
                let role2 = message.guild.roles.find("name", "@everyone");
                g.overwritePermissions(message.author, {
                    READ_MESSAGES: true,
                    SEND_MESSAGES: true
                });
                g.overwritePermissions(role2, {
                    READ_MESSAGES: false,
                    SEND_MESSAGES: false
                });
                g.overwritePermissions(role1, {
                    READ_MESSAGES: true,
                    SEND_MESSAGES: true
                });
                g.send(sh8)
                g.send(`${message.author}`)
                const sh2 = new Discord.RichEmbed()
                .setTitle(`📑Ticket System📑`)
                .setColor(`#06ad22`)
                .setDescription(`** Hey I have been created a Ticket For you at ${g.name} Go Check It Out**`)
                .setFooter("improved Ticket System by AdamSH")
                message.channel.send(sh2)
            }
            )
        }
    }
});
const sh1 = new Discord.RichEmbed()
.setTitle("📑Ticket Systems📑")
.setDescription("**Error, You cant close a Non Ticket Channel!**")
.setColor(`#f50b0b`)
.setFooter(`improved Ticket System by AdamSH`)
const sh7 = new Discord.RichEmbed()
.setTitle("📑Ticket Systems📑")
.setDescription("**Error, You Need A `Ticket Staff` Role To use this Command!**")
.setColor(`#f50b0b`)
.setFooter(`improved Ticket System by AdamSH`)
SH.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'close')) {
        if (!message.channel.name.startsWith(`ticket`)) return message.channel.send(sh1);
        if (!message.member.roles.exists("name", "Ticket Staff")) return message.channel.send(sh7);
        message.channel.delete();
    }
})
const sh10 = new Discord.RichEmbed()
.setTitle("📑Ticket Systems📑")
.setDescription("**User Has Requested To Close This Ticket**")
.setColor(`#f50b0b`)
.setFooter(`improved Ticket System by AdamSH`)
SH.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + "lock")) {
        if (!message.channel.name.startsWith(`ticket`)) return message.channel.send(`**${message.author} You cant use this command in non ticket room!!**`);
        message.channel.send('@everyone')
        message.channel.send(sh10)
    }
})

SH.on('message', message => {
    const sh9 = new Discord.RichEmbed()
    .setTitle("📑Ticket Systems📑")
    .setDescription('Thank you for Using SH Improved Ticket System, Here Is My Available Commands :')
    .addField("**$open**", "**This Command Will open for you a Private Ticket That You can contact a support Team!✅**")
    .addField("$help", "**This Command Will show you all Available Commands!✅**")
    .addField("$roomhelp", "**This Command will only available for Donators, it will open for you a private voice room that you can talk privately with our staff✅**")
    .addField("$lock", "**This command will ask the staff to close the Ticket✅**")
    .addBlankField(true)
    .addField("**$close(For Admins)**", "**This Command will close User Ticket!✅**")
    .setFooter("SH Ticket System")
    if (message.content.toLowerCase().startsWith(prefix + 'help')) {
        message.channel.send(sh9)
    }

})



SH.login(toekn)