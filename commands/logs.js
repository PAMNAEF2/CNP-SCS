const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  PermissionsBitField,
} = require("discord.js");

const noteSchema = require("../schemas/noteSchema");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("registro")
    .setDescription("Obtener los registros de un usuario")
    .setDefaultMemberPermissions(PermissionsBitField.Administrator)
    .addSubcommand((subCmd) =>
      subCmd
        .setName("notas")
        .setDescription("Obtener las notas de un usuario")
        .addUserOption((option) => {
          return option
            .setName("usuario")
            .setDescription("Usuario del que obtener los registros de notas.")
            .setRequired(true);
        })
        .addIntegerOption((option) => {
          return option
            .setName("pagina")
            .setDescription("La página para mostrar si hay más de 1")
            .setMinValue(2)
            .setMaxValue(20);
        })
    ),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    switch (interaction.options.getSubcommand()) {
      case "notas":
        {
          const { member } = interaction;
          const user = interaction.options.getUser("usuario");
          const page = interaction.options.getInteger("pagina");
          const noteData = await noteSchema.find({
            userId: user.id,
            guildId: interaction.guild.id,
          });
          const roles = await interaction.guild.roles
          .fetch("1032242037443006554")
          .catch(console.error);
      
          if (!noteData?.length)
            return interaction.reply({
              embeds: [
                new EmbedBuilder()
                  .setTitle("Notas del usuario")
                  .setDescription(`${user} no tiene notas!`)
                  .setColor("Red"),
              ],
            });

          const embed = new EmbedBuilder()
            .setTitle(`Notas de ${user.tag}`)
            .setColor("#2f3136");

          // if the user selected a page
          if (page) {
            const pageNum = 5 * page - 5;

            if (noteData.length >= 6) {
              embed.setFooter({
                text: `pagina ${page} de ${Math.ceil(noteData.length / 5)}`,
              });
            }

            for (const notes of noteData.splice(pageNum, 5)) {
              const moderator = interaction.guild.members.cache.get(
                notes.moderator
              );

              embed.addFields({
                name: `<:note_emoji_2:1028290390194929814>  ${notes._id}`,
                value: `<:replycontinued:1015235683209707534> Nota: \`${notes.note}\`\n<:replycontinued:1015235683209707534> Fecha de la nota: ${notes.noteDate}\n<:reply:1015235235195146301> Moderador: ${moderator}`,
              });
            }

            return await interaction.reply({ embeds: [embed] });
          }

          // if the user did not select a page
          if (noteData.length >= 6) {
            embed.setFooter({
              text: `pagina 1 de ${Math.ceil(noteData.length / 5)}`,
            });
          }

          for (const notes of noteData.slice(0, 5)) {
            const moderator = interaction.guild.members.cache.get(
              notes.moderator
            );

            embed.addFields({
              name: `<:id:1031200662123466793> ${notes._id}`,
              value: `<:replycontinued:1031199338937995277> Nota: \`${notes.note}\`\n<:replycontinued:1031199338937995277> Fecha de la nota: ${notes.noteDate}\n<:reply:1031199338937995277> Moderador: ${moderator}`,
            });
          }

          await interaction.reply({ embeds: [embed] });
        }      
      
        break;

      default:
        break;
        
    }
  },
};
