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
		.setName('quitar-inactividad')
        .setDescription('Quita la inactividad'),
	async execute(interaction) {
        if (!interaction.member.roles.cache.find (rol => rol.id === "814734838887088158")) {
            return interaction.reply({content: "No tienes inactividad", ephemeral: true})
        }
		if (interaction.channel.id !="811271616431390720") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		

        interaction.reply({content: `El señor ${interaction.user} ha vuelto de su inactividad.`})
        interaction.member.roles.remove("814734838887088158")
	},

};
