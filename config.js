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
global.waPresence = process.env.WAPRESENCE || "online";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUllQTRzTGV4MFE0WkI4TWlmWWtzM3NYRnBqNDZHcmpmNkEyT1E2YkdFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmx5bS8zbTRyUkdmQWduZUY3bFM3Vy9ZNVB1dEdBRysvQWpDZUs3bVR6az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTmU1WXZ2c2haOWVOcFFnVXJGOGwwa3d6QjRnWk9nMy80S3E2QmpqT21VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSUhLUjVpY0pmSThES05RRUxaT3J2V2JadTdWOW9qb0hBdXNWRGs4VDEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFTzRCY3NDVm16VkpFNFVGV1hKZmxIRktCUW4zVE56MFZvL3BuTmwzMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFmaWJxNlJndDNwSlVSSFpzUDVWN2o5bXhYdjZWazVKdW52RFlZZUxoQlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdLeGJDd3JKSFI2TWJ6eEZkVmQwNXBYRHVMZFViMTJZK2RwQklDd3ZsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHdsazBxZHJjeVpuNjJqNjdzUDh0OHFHZFQ5UW1qUzIvRDlCYXdRUzF5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhZNmdlSzhSV2pmekN6UkR6dXpaOTh0QnFBRFFpVnBPekJNYnkzYXlJVjJFY1NzVTRBelN4aWtQL0hrZkltbElnMVJGc3ErclhJTzR1WWl2QWRWb0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IndxZGQ2V0RhUldML1J1dDF0KzZ5Zlo2L00zNlpZRzBCSFBrWE9RYkpDSzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA1MzQxMzU5NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOTg4OEMyNkE4QzFFM0I2MDQ4MTQ3MkZGM0U4RUJBOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTM3NTU3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOnRydWV9LCJkZXZpY2VJZCI6IkVyZS1oUVN3VEF1MVVXOEw1cGw4eWciLCJwaG9uZUlkIjoiN2E0MTM0YmEtZTY3ZC00NzE0LTg5YTMtMzZmMTVlMzc5MTQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNYZWZjU1R5SStmV2o2WVoxQ245SHowM2ZqWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJma0RUZnNBWDFBUGZqMTU4UjVOZHhDTTNRTDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTlZTkFSSDEiLCJtZSI6eyJpZCI6IjIzNDcwNTM0MTM1OTU6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEZWFkIENhbG0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00vUjJZUUdFTVdqdGJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdrVkZnSGY0VG51RGNxNlo1eUZaMUZpSEgvN3NGTGtnQy9qUU93OElYQUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1JMzRGSnkvL3pZcVVIZFZNV244ZWhhS3M5dFdlY24zWnJhZzNBZ00xM2ZGMzZZU093SEJMYmNYbHdXLzZOTnZkYnJkWVArTGd4RHJ5UEtTNnhSTER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJUDByVDM3cEF3KzRlcW0zNWhuMkVzN0dGb1crOC96MTVPNHRIUkd0Z3lVd3N0YzVpbXE5eUEwTENTSTRoT2tERi9NamFTUWV5MVVXWnBFSzRBTWpDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTM0MTM1OTU6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScEZSWUIzK0U1N2czS3VtZWNoV2RSWWh4Lys3QlM1SUF2NDBEc1BDRndBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTM3NTU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB2TCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
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
