import { Attachment, AttachmentBuilder, CommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/command";
import { asyncPost } from "../utils/fetch";
import { apis } from "../utils/api";

export const dream: Command = {
    data: new SlashCommandBuilder()
        .setName("dream")
        .setDescription("生成圖片")
        .addStringOption((option) =>
            option
                .setName("prompt")
                .setDescription("提示词")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("negative_prompt")
                .setDescription("反向提示词")
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName("seed")
                .setDescription("种子，随机数")
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName("batch_size")
                .setDescription("每次张数")
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName("n_iter")
                .setDescription("生成批次")
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName("steps")
                .setDescription("生成步数")
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName("cfg_scale")
                .setDescription("关键词相关性")
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName("width")
                .setDescription("宽度")
                .setRequired(true)
                .addChoices(
                    { name: 'small', value: 512 },
                    { name: 'mid', value: 1024 },
                    { name: 'large', value: 1920 },
                )
        )
        .addNumberOption((option) =>
            option
                .setName("height")
                .setDescription("高度")
                .setRequired(true)
                .addChoices(
                    { name: 'small', value: 512 },
                    { name: 'mid', value: 1024 },
                    { name: 'large', value: 1080 },
                )
        )
        .addBooleanOption((option) =>
            option
                .setName("restore_faces")
                .setDescription("脸部修复")
        )
        .addBooleanOption((option) =>
            option
                .setName("tiling")
                .setDescription("可平埔")
        )
        .addStringOption((option) =>
            option
                .setName("sampler_index")
                .setDescription("采样方法")
                .addChoices(
                    { name: 'Euler', value: "Euler" },
                    { name: 'LMS', value: "LMS" }
                )
        )
    ,

    run: async (interaction) => {
        await interaction.deferReply();

        asyncPost(apis.textToImg, {
            "denoising_strength": 0,
            "prompt": interaction.options.get("prompt")?.value, //提示词
            "negative_prompt": interaction.options.get("negative_prompt")?.value ? interaction.options.get("negative_prompt")?.value : "", //反向提示词
            "seed": interaction.options.get("seed")?.value ? interaction.options.get("seed")?.value : -1, //种子，随机数
            "batch_size": interaction.options.get("batch_size")?.value ? interaction.options.get("batch_size")?.value : 1, //每次张数
            "n_iter": interaction.options.get("n_iter")?.value ? interaction.options.get("n_iter")?.value : 1, //生成批次
            "steps": interaction.options.get("steps")?.value ? interaction.options.get("steps")?.value : 50, //生成步数
            "cfg_scale": interaction.options.get("cfg_scale")?.value ? interaction.options.get("cfg_scale")?.value : 7, //关键词相关性
            "width": interaction.options.get("width")?.value ? interaction.options.get("width")?.value : 512, //宽度
            "height": interaction.options.get("height")?.value ? interaction.options.get("height")?.value : 512, //高度
            "restore_faces": interaction.options.get("restore_faces")?.value ? interaction.options.get("restore_faces")?.value : false, //脸部修复
            "tiling": interaction.options.get("tiling")?.value ? interaction.options.get("tiling")?.value : false, //可平埔
            "sampler_index": interaction.options.get("sampler_index")?.value ? interaction.options.get("sampler_index")?.value : "Euler" //采样方法
        }).then(async (res) => {
            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setAuthor({ name: interaction.user.username})
                .setDescription(`${interaction.user.username}使用高貴的4090生了一張圖片,參數自取`)
                .addFields(
                    { name: 'prompt (關鍵字)', value: String(interaction.options.get("prompt")?.value) },
                    { name: 'negative_prompt (反義詞)', value: String(interaction.options.get("negative_prompt")?.value) },
                )
                .addFields(
                    { name: 'seed',value: String(interaction.options.get("seed")?.value), inline: true },
                    { name: 'steps', value: String(interaction.options.get("steps")?.value), inline: true },
                    { name: 'batch_size', value: String(interaction.options.get("batch_size")?.value),inline: true },
                    { name: 'n_iter',value: String(interaction.options.get("n_iter")?.value), inline: true },
                    { name: 'cfg_scale', value: String(interaction.options.get("cfg_scale")?.value), inline: true },
                )
                .addFields(
                    { name: 'size', value: `${String(interaction.options.get("width")?.value)} x ${String(interaction.options.get("height")?.value)}`,inline: true },
                )
                .addFields(
                    { name: 'restore_faces', value: String(interaction.options.get("restore_faces")?.value),inline: true },
                    { name: 'tiling',value: String(interaction.options.get("tiling")?.value), inline: true },
                    { name: 'sampler_index',value: String(interaction.options.get("sampler_index")?.value), inline: true },
                )
                .setTimestamp()

            const buf = Buffer.from(res.images[0], 'base64');
            const attachment = new AttachmentBuilder(buf)
            interaction.editReply({ embeds:[exampleEmbed],files: [attachment] })
        })
    }
}