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
		.setName('desactivar-geo')
        .addStringOption(option => option.setName('razón').setDescription('Razón de desactivacion').setRequired(true))
		.setDescription('Manda la desactivacion del GEO'),
	async execute(interaction) {
    	const reason = interaction.options.getString('razón')
        if (!interaction.member.roles.cache.find (rol => rol.id === "811079523277864992" || "811272056288444443" || "810973099457249341" || "876360085612421130" || "1030623885248446464")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="872130715528073236") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		

        interaction.reply({content: `El superior ${interaction.user}, esta desactivando el GEO por la siguiente razón: **${reason}**\n\||Ping: <@&810972222494867466>||` ,allowedMentions:{parse:["roles"]}})

	},

};
