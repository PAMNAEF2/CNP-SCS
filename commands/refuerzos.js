const {
	SlashCommandBuilder,
	ChatInputCommandInteraction,
	Client,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder
  } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('refuerzos')
        .addStringOption(option => option.setName('razón').setDescription('La razón que quiera expulsarlo').setRequired(true))
		.setDescription('Mandar refuerzos en el canal'),
	async execute(interaction) {
		const reason = interaction.options.getString('razón')
		if (interaction.channel.id !="817125116575481907") {
			return interaction.reply("Este canal no es el adecuado")
			}
		

        interaction.reply({content: `Nuestro compañero ${interaction.user}, necesita refuerzos en la ciudad, la razón: **${reason}**\n\||Ping: <@&811378272122044467>||` ,allowedMentions:{parse:["roles"]}})

        await interaction.user.send(`Usted ha pedido refuerzos por: \`${reason}\``).catch(err => {})
			
	},

};
