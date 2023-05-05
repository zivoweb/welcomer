const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Gabz Project')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

client.on("ready", async () => {
  console.log(`Gabz Project 🚀`)
  client.user
    .setActivity(`Gabz Project`, { type: "WATCHING" }) //status code
    .catch(error => console.log(error))
})

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "1103073153070145606") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({ format: "png" }))
  .setColor("title", "#FEFCFC") //white
  .setColor("username-box", "#FEFCFC") //white
  .setColor("discriminator-box", "#FEFCFC") //white
  .setColor("message-box", "#FEFCFC") //white
  .setColor("border", "#000000") //black
  .setColor("avatar", "#FEFCFC") //white
  .setBackground("https://cdn.discordapp.com/attachments/1103080678117093446/1103106672471310377/P_tech_letter_logo_TEMPLATE.png") //should be png format
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("1103073153657339950").send(`>>> <:welcomer:1103877587022905414> **Hallo ${member.user.toString()}**\n**Buat kamu yang ingin mengakses atau menggunakan server discord ✦ | PROMIND**\n\n<:cuk:1103879135438319656> **Pertama tama kamu harus verify terlebih dahulu**\n<#1103073153657339948>\n\n<:alert:1103879778827767808> **Ini penting, Kedua, Kamu wajib membaca :**\n<#1103112684083347476>\n<#1103073153657339951>\n<#1103109173383798874>\n<#1103073153657339952>\n\n<:bell:1103880912816586853> **Ketiga, Kamu ambil role yang kamu inginkan**\n<#1103088844817043456>\n\n**Selamat menikmati fitur dari server ✦ | PROMIND See You** <:lovebirds:1103881465235771442>`, attachment)
})



client.login(process.env.token)