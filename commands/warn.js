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
		.setName('avisar')
        .addUserOption(option => option.setName('usuario').setDescription('La persona que quieras avisar').setRequired(true))
        .addStringOption(option => option.setName('razón').setDescription('Razón del aviso').setRequired(true))
        .setDescription('Mandar una amonestación a alguien'),
    
	async execute(interaction) {
    	const reason = interaction.options.getString('razón')
        const user = interaction.options.getMember('usuario')
        if (!interaction.member.roles.cache.find (rol => rol.id === "812393724352528384" || "878322648482979940" || "1030623885248446464")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="896748107012911156") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		

        interaction.reply({content: `El superior ${interaction.user}, amonesta a ${user} por la siguiente razón: **${reason}**`})
        user.roles.add("826222914323611688")
        if (user.roles.cache.find (rol => rol.id === "826222914323611688")){
        user.roles.add("826222915329851392")
        await user.send(`Usted ha recibido un aviso por: \`${reason}\``).catch(err => {})
        }
        /*if (user.roles.cache.find (rol => rol.id === "1024001697653194832")){
            interaction.guild.members.kick(user.id, {
                reason: "Tener 3 avisos",
              })
                              }*/

	},

};
