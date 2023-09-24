const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const wixua = require("croxydb");
module.exports = {
  name: "canlı-destek",
  description: "Canlı destek sistemi!",
  type: 1,
  options: [],
  run: async (client, interaction) => {

//bnewixua <3

    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setEmoji(`⚒️`)
            .setLabel(`Destek Ekibini Çağır`)
            .setStyle(2)
            .setCustomId("ekibicagir")
    )
    .addComponents(
      new ButtonBuilder()
          .setEmoji(`💡`)
          .setLabel(`Destek Sunucusu`)
          .setStyle(ButtonStyle.Link)
          .setURL("Destek sunucu linki")
  )

    const server = interaction.guild;
    const embed = new EmbedBuilder()
    .setAuthor({name: "Canlı destek paneli", iconURL: server.iconURL({ dynamic: true })})
    .setDescription(`> Selamlar **${interaction.user.tag}**, destek vermek için herzaman hazırız. **Destek ekibini çağırmak için aşağıdaki butona basabilirsin.**`)
    .setFooter({text: "Wixua Tester"})
    .setColor("Blue")


    interaction.reply({embeds: [embed], ephemeral: true, components: [row]})
  }
}
