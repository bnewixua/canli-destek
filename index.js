const { PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const config = require("./config.json")
const wixua = require("croxydb")
const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users", "roles", "everyone",]
  },
  partials: PARTIALS,
  retryLimit: 32
});

//bnewixua <3

global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs");
const { TOKEN } = require("./config.json");
const { Modal } = require("discord-modals");
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: props.dm_permission,
        type: 1
    });

    console.log(`[BOT] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
    console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(TOKEN)
//bnewixua <3

const wixua2 = new ModalBuilder()
.setCustomId('form')
.setTitle('Mesajın')
  const a1 = new TextInputBuilder()
  .setCustomId('mesaj')
  .setLabel('Destek ekibine gönderilecek mesajın')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('örnek: Kayıt sistemini kuramıyorum')
  .setRequired(true)
  const row = new ActionRowBuilder().addComponents(a1);
  
wixua2.addComponents(row);

client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "ekibicagir"){
    await interaction.showModal(wixua2).catch(() => {});
  }
})  

client.on('interactionCreate', async (interaction) => {
  if(interaction.type !== InteractionType.ModalSubmit) return
  if(interaction.customId === 'form') {

    let mesaj = interaction.fields.getTextInputValue('mesaj');

    const embed = new EmbedBuilder()
    .setAuthor({name: interaction.user.tag, iconURL: interaction.user.avatarURL() })
    .setDescription("> Başarılı bir şekilde destek ekibini çağırdın")
    .setColor("Green")

const sever = interaction.guild;

const inviteURL = await interaction.channel.createInvite({ maxAge: 172800 })
const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Sunucuya Git")
                    .setEmoji("🚀")
                    .setStyle(ButtonStyle.Link)
                    .setURL(`${inviteURL}`)
            )
.addComponents(
  new ButtonBuilder()
      .setEmoji(`✅`)
      .setLabel(`Onayla`)
      .setStyle(3)
      .setCustomId("onayla")
)
.addComponents(
  new ButtonBuilder()
      .setEmoji(`❌`)
      .setLabel(`Reddet`)
      .setStyle(4)
      .setCustomId("red")
)


const yt = "1093118909563023420"//Destek ekibi rol id


const embed2 = new EmbedBuilder()
.setAuthor({name: "Destek isteyen var", iconURL: sever.iconURL({ dynamic: true })})
.setDescription(`> Yeni bir kullanıcı destek istiyor en kısa zamanda **ilgilenin**\n\n⭐ Destek isteyen: **${interaction.user.tag}**\n🍁 Destek isteme sebebi: **${mesaj}**`)
.setColor("Red")

const channelid = client.channels.cache.get(config.channelid)
    if(!channelid) return;

    channelid.send({embeds: [embed2], components: [row2], content: `<@&${yt}>`})
    await interaction.reply({ embeds: [embed], ephemeral: true})
  }
})

client.on('interactionCreate', async (interaction) => {
  if(interaction.customId === "onayla") {

    const embed = new EmbedBuilder()
    .setAuthor({name: interaction.user.tag, iconURL: interaction.user.avatarURL()})
    .setDescription("> Başarılı bir şekilde **onayladın**")
    .setColor("Green")
    .setFooter({text: "Wixua Tester"})

    interaction.update({embeds: [embed], ephemeral: true, components: []})

  }
  if(interaction.customId === "red") {

    const embed = new EmbedBuilder()
    .setAuthor({name: interaction.user.tag, iconURL: interaction.user.avatarURL()})
    .setDescription("> Başarılı bir şekilde **reddettin**")
    .setColor("Red")
    .setFooter({text: "Wixua Tester"})

    interaction.update({embeds: [embed], ephemeral: true, components: []})

  }

  })



