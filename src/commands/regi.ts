import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/command";
import { DataBase } from "../utils/DB";
import { asyncPost, register } from "../utils/fetch";
import { apis } from "../utils/api";

export const regi: Command = {
    data: new SlashCommandBuilder()
        .setName("regi")
        .setDescription("test regi sys")
        .addStringOption((option) =>
            option
                .setName("account")
                .setDescription("account")
                .setRequired(true)
        )
        .addStringOption((option) =>
        option
            .setName("password")
            .setDescription("password")
            .setRequired(true)
    )
    ,

    run: async (interaction) => {
        const info = {
            account:interaction.options.get("account")?.value,
            password:interaction.options.get("password")?.value,
        }

        register({
            name: info.account,
            password: info.password
        }).then(res => {
            if (res.code == "200") {
                interaction.reply(`${String(res.body.name)} sucess regist with Id:${String(res.body._id)}`)
            } else {
                interaction.reply("register fail")
            }
        })
    }
}