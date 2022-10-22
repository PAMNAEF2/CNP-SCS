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
		.setName('activacion-uip')
        .addStringOption(option => option.setName('razón').setDescription('Razón de activacion').setRequired(true))
		.setDescription('Manda la activacion del UIP'),
	async execute(interaction) {
    	const reason = interaction.options.getString('razón')
        if (!nteraction.member.roles.cache.find (rol => rol.id === "914966861370769418" || "914966866299076608" || "993591959639818276" || "914966865439248404" || "1030623885248446464")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="923311252103634974") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		

        interaction.reply({content: `El superior ${interaction.user}, esta activando la UIP por la siguiente razón: **${reason}**\n\||Ping: <@&914966859500109894>||` ,allowedMentions:{parse:["roles"]}})

	},

};
