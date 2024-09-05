//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sten_4ldx_user:9o1M5XMhT9FutGJ7gN1S90S39i9C0pQQ@dpg-cqr69ng8fa8c73foguig-a.oregon-postgres.render.com/sten_4ldx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Darkside-Md/Inconnu-V2-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029ValSilu9Bb62q8tgBr3p";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029ValSilu9Bb62q8tgBr3p";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.devs = "50936698203";
global.sudo = process.env.SUDO || "50936698203";
global.owner = process.env.OWNER_NUMBER || "36698203";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME11MEhrWFJKZkRHT3ZmamtNdDVsZVpNY0ZwdjllWXk1eEtSdElSa0VVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjByQy8xWHlvNHVJbG1teWx6SW45TWVyMmR1MmdHY3NhWEF4aE1Ob25GUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SFBTLzZQU21rQWVMWmpWMGlobVF4RW1nckJlT3dINS9QZDBLRWFjbzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDdW1PZ1p0VTRhQk80Z210RkpDWmRMeDZZOGZxQXlvNnJSNnZjL1ZPb21vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFETE5BOFA3SVVvaXMvSDhZRFFVaDljNzdJT2N6RlJvMlVZSE13MnRybUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB3MlV6N2VXZWJ1N0cvRWRVUGlkWHRreGNzUjZVdlVIQm8rNThZQlByMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZtcGNQNlo0VlJYWkpwVTVIdWZHUXNBUGJ4OHBYVFdSQUc3U1gvc1BFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTBvaTYvbUM1eVR0WWdjcCtxM1NZaE9VOE92ZGtid1NGb1BBb3hNMVdERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMrYnV4a3lwb0RNb3pYZWtFaGlXbFlKczRza3hWY1pRL21KTWVaNGlKSTV2ZWROZXVDWTIxK3YvNGVmb3NINjdWWFBBSms3ZTNYYVVxT09TWWJTZkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6ImltcGR0cU42M0RrVlVRZy9ZRmxNQVBMZjNDL0krNEVaZ2wwY1ZUb0RiTkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJiZVVGWjdHVFVHLVhTbldjOXlTc1EiLCJwaG9uZUlkIjoiZDRjNzVmYzMtM2RhNS00NmI0LThkODUtODk5NDJhYzVhODk1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdQNEx0dmQzTXlaaTNNalRVVkgxTlBGWXQ4ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMmp0THBGMHJlRW5iRlR6cW9TTHFwU3RkK1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1hNUkxRVDEiLCJtZSI6eyJpZCI6IjIzNDkwNjg5NzkyNjM6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0w2bE5rTkVJYW41N1lHR0JzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaUR5TWtranFIdVBMTVZXNFJXaVhRNVNzWjd2T0haNktPTnIxRFNxZEFFND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaENiQmt6aWRjQjZYNEdEMVRaSjRuNnh3QXh1TjFZQzMyNURZQXdDTXc2cW5SM2crWk1WU1NGZ0RQTFFiaHNmOHE4RUhrME81c0FIWGlDZEh0bjZPQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImZRZ2ZvQ1FjeGtIN3hGeXdCdGdzbHFZdW1ham9KUksyMElIbERhS0VOYUhDNTRJb0kxZnhjR3FuQUprYnFjQzdrVmRLU3pMYmdxVVRuUEFYbEtNdkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2ODk3OTI2Mzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllnOGpKSkk2aDdqeXpGVnVFVm9sME9VckdlN3poMmVpamphOVEwcW5RQk8ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTU1MTUwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFML0EifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in DRK_ST_Tech| enjoy your time| this is DRK_ST_V1",
  author: process.env.PACK_AUTHER || "INCONNU TECH 💆‍♂️",
  packname: process.env.PACK_NAME || "🤫",
  botname: process.env.BOT_NAME || "INCONNU-V2-MD",
  ownername: process.env.OWNER_NAME || "INCONNU TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || ""
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
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
