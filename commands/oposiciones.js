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
        .setImage("https://cdn.discordapp.com/attachments/952587106931318794/1035239014501978212/Copia_de_NUNCA_CONECTADO.gif")
        interaction.reply({ embeds: [embed]})
	},
};
