import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import translate from "google-translate-api-x";

const bot = new Telegraf(process.env.TG_BOT_TOKEN);

bot.start(async(ctx) => {
    // console.log(ctx);
    // console.log(ctx);
    // console.log(ctx.chat);
    await ctx.reply('Hello, Mai Operation Moksh ka bot hu. Mai bhot saari cheezien kar skta hu. Mai aapke liye kisi text ko Hinglish se Devnaagari me convert kar skta hu. Aur aap jo bhi document/video/photo bologe vo mai aapko de skta hu.');
});


function getRandomStickerId() {
    const items = ["CAACAgIAAxkBAAOlZs8fJyTRFWR-A3MHEvL5yINMap8AAgUBAAL3AsgP0eV0t0YlpKE1BA","CAACAgIAAxkBAAOmZs8gHqMqTvpj1LlXR7J-nVcMdwwAApQwAAKQvYhI34Lj30E-SXM1BA","CAACAgIAAxkBAAOnZs8gQmCj989Z9MQGw0bQoTV_DvUAAtwwAAIJIZlKgx7OmeiqIyg1BA","CAACAgIAAxkBAAOoZs8g2KYb3cwid5a9sHph7xZigQsAAv8CAAK6wJUFd-bfFNfYsLs1BA"]
    return items[Math.floor(Math.random()*items.length)];
}


bot.on(message('text'), async(ctx) => {

    const { message_id: loadingStickerMessageId } = await ctx.replyWithSticker(getRandomStickerId())

    const txtMsg = ctx.update.message.text.toLowerCase();

    switch (txtMsg) {
        case 'cbi link':
            ctx.reply("https://www.change.org/cbi-enquiry-for-bapuji").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'jodhpur case details':
            ctx.reply(
                "Case type: CRLAD - CRIMINAL APPEAL (DB)(43)\nCase number: 123\nYear: 2018"
            ).then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case '2018 verdict':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/Jodhpur%20Case%20Final%20Judgement%20original%20(2).pdf?alt=media&token=2b8ffa13-a913-4a90-9fb3-da29886dc7cd").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'rc fir 2022':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/Complaint%20to%20CP%20Ahemdabaad%20(1).pdf?alt=media&token=3247593f-76e2-494a-8546-d301c159a14e").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'rc fir 2024':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/RC%20FIR%20on%20Gaddar%20Arjun%20(2).pdf?alt=media&token=c2c958a9-4a9d-451c-82bf-a5c1b669e49c").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'parole order':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/Parole%20Order.pdf?alt=media&token=7bd79bbb-514f-48ff-a3ff-f5f8f116f23c").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'sos rejection':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/SOS%20rejection%20Jodhpur%20High%20court%20Order%20COPY.pdf?alt=media&token=718b06b4-2252-4a9b-9ec4-08161bf45108").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'bapuji covid report':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/Jodhpur%20AIIIMS%20(2).pdf?alt=media&token=875db9c6-f501-43a0-90d7-db0ab49e452b").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'rc message':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/Ramchandra%20Ahemdabad%20Case.pdf?alt=media&token=873466bf-301a-4aef-93d9-ea94c13fe5c4").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'rahul gandu pil':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/rahul%20gandu%20pil_compressed.pdf?alt=media&token=c78a7a2e-b3c9-42d2-8a34-4ba0927df0c8").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'poison report':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/5_6185733687791849725%20(2).pdf?alt=media&token=ee210acf-3810-41b3-9762-a77906e3e811").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'fake son of bapuji':
            ctx.sendPhoto("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/image_2024-07-23_16-49-52.png?alt=media&token=62c5a5dd-0d4e-4e3b-b5f8-eeae9911468c").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'jodhpur jail reality':
            ctx.sendAudio("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/Satsang-14th-April-2024.mp3?alt=media&token=7a6a522f-8db9-400a-a17f-c34f087a7fe5").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'rajasthan government numbers':
            ctx.sendDocument("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/%E0%A4%B8%E0%A4%AD%E0%A5%80_%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF_%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%82%E0%A4%A1%E0%A4%B2_%E0%A4%95%E0%A5%87_%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0%20(2).pdf?alt=media&token=f1fc0afa-892b-473c-9339-7931e01d4d56").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'swami tweet':
            ctx.reply("https://x.com/Swamy39/status/1663733384164802561").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'bapuji dont know about legal':
            ctx.sendVideo("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/video_2024-08-28_19-47-31.mp4?alt=media&token=2ff70aef-96f2-4901-b7c5-1f0e2f1484d9").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'prarabh cutting':
            ctx.sendAudio("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/prarabdh%20cutting.mp3?alt=media&token=19b01aec-0142-4d53-ada5-b3622348cde5").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        case 'bohra interview':
            ctx.sendVideo("https://firebasestorage.googleapis.com/v0/b/chatwithstrangers-52745.appspot.com/o/video_2024-08-28_19-50-08.mp4?alt=media&token=21a9cdde-0152-4ada-a566-e7280069c6a3").then(() => {
                ctx.deleteMessage(loadingStickerMessageId)
            }, () => {
                ctx.deleteMessage(loadingStickerMessageId)
                ctx.reply('Sorry yrr! Kuchh issue hai. Thodi der baad try krna!')
            })
            break;
        default:
            const res = await translate(ctx.update.message.text, { from: 'hi', to: 'en', autoCorrect: true }).then(res => { 
                ctx.deleteMessage(loadingStickerMessageId)
                console.log(res);
                ctx.reply(res.raw[0][0]);
             });
            break;
    }
});


bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));