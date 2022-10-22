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
		.setName('ping')
		.setDescription('Mandar refuerzos en el canal'),
	async execute(interaction) {		
        if (!interaction.member.roles.cache.find (rol => rol.id === "1029716393731571773" || "1030623885248446464")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
        interaction.reply({content: `<@&810972644656283690>` ,allowedMentions:{parse:["roles"]}})
			
	},

};
