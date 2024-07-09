//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://wa.me/message/SHUL2VJTYOORM1";
global.website = process.env.GURL || "https://wa.me/message/SHUL2VJTYOORM1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347053413595";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpxdCsvMGtLSDJqUi8rUjRZT2xPSnhPSE5UL3dtL0pya2crSmZ5UGwyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzN1S1Vkd0J5dHlnRFd5SXFwM2tRZnllQlRZZ2pnZ2lJVlAvTnRqVFZIdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR1J3djJiRzgvNEVjbkpvelB0L3U5Q2Qvcm9wODZJa3RKeUZnaVBPUFhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4dGcxT2hVbkN1YWF5SFhVMDRac3doZEZFL1BaSk1YRU5vM1pSY3cyMUdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQZEdxY2NVeFBFbEkvdVk5bjV1dDJKWG9QeGgrUnFPY3JvZDBadG9sR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFtOVFtMWdaMlNKUmMya0tZYmhTamtIZFovSWlhVW55dHNVc3cwK3BJMEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05oN3hydmVlZ21MS0RpZ3NXL3hiRklqdXhrSG5YRHRMZ28yazdaV2Ztaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Ntd3J0eEJGWE45cEk3Tm5hUjc0cThFY2RNejgxTGdhUTVoOFJvaG1DND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJvNG5jM2ZGNkYzUVkxdWFEOEljWW5SbzYxS2hCeWtQMldpelFmNWNvV09xMkhMc0hHQm9oQlM5eWdsVFg0SjRwYmFnNlJ3eEJ1eDNKSy9LVGFvMUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiIzT0ZHRGgvb1l2N21OSTRmdTFqbWJ2YnNhNWZVTmN3ZU05SWtuYkNiZ2lvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTM0MTM1OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0VBM0EwRjk3RURFNDQ1N0I1MEQ3M0NBMUJEOUY5Q0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDU0NjEzM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA1MzQxMzU5NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQkY2ODJCQTIxMzdCNDRBODZCNjA3ODFEMUVGMjE2NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTQ2MTMzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOnRydWV9LCJkZXZpY2VJZCI6ImZOZFdtdXdWU3NDTm5xa0V1TnpPdHciLCJwaG9uZUlkIjoiNjdhODMwMWYtNzZmMC00OTNmLTg2MDctZDJiN2E3ODM1MTBhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJHUWxGNnIzRGJzQlo2dy9vSnNKTEFqVDRJaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4VTJueXcwNk16UlJGWUVpNUZuQWZJemJXK0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQk1OWUQzUDciLCJtZSI6eyJpZCI6IjIzNDcwNTM0MTM1OTU6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEZWFkIENhbG0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05EUjJZUUdFTVhtdGJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdrVkZnSGY0VG51RGNxNlo1eUZaMUZpSEgvN3NGTGtnQy9qUU93OElYQUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVVMWh3ajFkM3hibnZBRjIweUxUM2tYSFNwZFFBaGJOWW11RG1mcjdpUkdNMHZid0dVZTBmVmthaUxVbEtRU0xCMUhQOWxkRlUrMitvdTNQdGxrVERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4YUFDZkRseFJ3aUxONXUxZVR1TGRheG9WZ1hCUitVWFl5NGx5NGx2eHZmeGdxNXh5Z2Y5VWNPaERreWhndFJpWmZ1OFBOWVFiUlpnRWlHTWk5TExCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTM0MTM1OTU6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScEZSWUIzK0U1N2czS3VtZWNoV2RSWWh4Lys3QlM1SUF2NDBEc1BDRndBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTQ2MTMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB2TCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "I LIVE ONLY BECAUSE MAYX GAVE ME LIFE   |I LIVE TO SERVE MAYX💅🏾|",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Bankaisi-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Bankaisi",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
