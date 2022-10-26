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
		.setName('fichaje')
		.setDescription('Es un fichaje'),
	async execute(interaction) {
		var fs = require('fs'); 
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
				.setCustomId("FichajeEntrar")
				.setLabel("Entrar")
				.setStyle(ButtonStyle.Success)
          	)
			  .addComponents(
				new ButtonBuilder()
				.setCustomId("Duracion")
				.setLabel("Duracion")
				.setStyle(ButtonStyle.Secondary)
          	)
			.addComponents(
				new ButtonBuilder()
				.setCustomId("FichajeSalida")
				.setLabel("Salir")
				.setStyle(ButtonStyle.Danger)
			)
			function readJSON(canal, mensaje){
				var stringJSON = {
					"channelId": ""+canal,
					"messageId": ""+mensaje
				}
				var jsonContent = JSON.stringify(stringJSON);
				fs.writeFile("./recursos/info.json", jsonContent, 'utf8', function (err) {
				if (err) { 
					console.log("An error occured while writing JSON Object to File.");
					return console.log(err);
				}
			
				console.log("JSON file has been saved.");
		  		});
			}
		const embed = new EmbedBuilder()
			.setTitle(":ledger: | Fichaje")
			.setDescription("Para entrar a servicio presiona en el botón Entrar.\n\nSi ya has terminado tu turno presiona en el botón Salir.\n\n Si tiene <@&814734838887088158> no podra entrar de servicio. \n\nTambién puedes utilizar el comando de barra diagonal correspondiente:\n/servicio entrar\n/servicio salir")
			interaction.reply({ embeds: [embed] , components: [row]})
				/*console.log(interaction.channel.id)
				console.log(interaction.id)
				readJSON(interaction.channel.id, interaction.id)
            	delete require.cache[require.resolve(`../recursos/info.json`)];*/
			
	},
};
