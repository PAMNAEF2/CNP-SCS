const {
	SlashCommandBuilder,
	EmbedBuilder
  } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('oposiciones_cerrar')
		.setDescription('Cerrar estado oposiciones'),
        async execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle("🔐 | Oposiciones")
        .setDescription("Oposiciones cerradas hasta nuevo aviso")
        interaction.reply({ embeds: [embed]})
	},
};
