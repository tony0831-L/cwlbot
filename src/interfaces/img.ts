export interface img{
    "denoising_strength": number,
    "prompt": string, //提示词
    "negative_prompt": string, //反向提示词
    "seed": number, //种子，随机数
    "batch_size": number, //每次张数
    "n_iter": number, //生成批次
    "steps": number, //生成步数
    "cfg_scale": number, //关键词相关性
    "width": number, //宽度
    "height": number, //高度
    "restore_faces": boolean, //脸部修复
    "tiling": boolean, //可平埔
//     "override_settings": {
//         "sd_model_checkpoint" :"hitoriGotohBocchiThe_v1.safetensors [50075d8b84]"
//    }, // 一般用于修改本次的生成图片的stable diffusion 模型，用法需保持一致
    "sampler_index": string //采样方法
}