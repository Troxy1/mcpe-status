const { EmbedBuilder } = require("discord.js")
const config = require("../config.js")
const request = require('request');
exports.run = async (client, message, args) => {

 
request(`https://api.mcsrvstat.us/bedrock/2/IP/Port`, function (error, response, body) {
  const json_body = JSON.parse(body);
  const TroxyAktif = json_body.players.online;
  const TroxyToplamAktif = json_body.players.max
       const snorscode = new EmbedBuilder()
       .setTitle("SunucuİSİM - Stats")
       .setDescription(`IP: SunucuIP\nPort: 19132\n\nDurum: **${TroxyAktif}/${TroxyToplamAktif}**`)
       .setColor("#ff0000")
  message.channel.send({embeds: [snorscode]})

})
}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "ip"
}