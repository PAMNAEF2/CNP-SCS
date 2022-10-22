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
		.setName('nuevo')
        .setDescription('Comando para los nuevos'),
    
	async execute(interaction) {
        interaction.reply({content: `Bienvenido, cadete ${interaction.user} \n\ \n\
Usted ha pasado las oposiciones del Cuerpo Nacional de Policía. Bienvenido a esta gran familia, por favor lea <#810974635235082261> para saber sobre nuestras normas y no terminar expulsado, también revise <#810984983292149810> para saber que armas puede utilizar y, vea <#886358563360997396> para saber que coches puede utilizar. \n\ \n\
Guia del Cuerpo Nacional de Policía. \n \n\
- Primero de todo vaya a <#866023157180530688> para saber cual es la placa que debe asignarse cuando entre de servicio. *(En liberty cuando te metes de policia pide que pongas numeros pues pones esa placa.)*\n\
- Antes de que entres de servicio tienes de rellenar la ficha que hay en <#810984315252244480>, esto siempre lo debes de realizar.\n\
- Después de todo eso te uniras a la Radio General del CNP que se encuentra en este mismo discord y si estamos en defcon 1 o 2 pues a Servicios CNP y GC que esto se encuentra en el discord de SCS. \n\ \n\
Si tiene alguna duda vaya a <#844984540560752680> y aquí un miembro o staff te podrá responder, gracias por escoger el CNP.
`})
        }
};
