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
		.setName('expulsar')
        .addUserOption(option => option.setName('usuario').setDescription('La persona que quieras avisar').setRequired(true))
        .addStringOption(option => option.setName('razón').setDescription('Razón del aviso').setRequired(true))
        .setDescription('Expulsa a alguien'),
    
	async execute(interaction) {
    	const reason = interaction.options.getString('razón')
        const user = interaction.options.getMember('usuario')
        if (interaction.guild.members.cache.get (user => user.id === "928332789093388288")) {
            return interaction.reply({content: "A mi querido PAMNAEF no le puedes expulsar, es mi creador tonto a que te baneo? te re gusta el pito B)", ephemeral: true})
        }
        if (interaction.member.roles.cache.find (rol => rol.id === "812393724352528384" || "878322648482979940")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="810984217852248085") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
 
        
		
        interaction.reply({content: `El superior ${interaction.user}, expulsa a ${user} por la siguiente razón: **${reason}**`})

        interaction.guild.members.kick(user.id, {
            reason: `${reason}`,
          })
        /*if (user.roles.cache.find (rol => rol.id === "1024001697653194832")){
            interaction.guild.members.kick(user.id, {
                reason: "Tener 3 avisos",
              })
                              }*/

	},

};
