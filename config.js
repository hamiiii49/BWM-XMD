const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246jOBT8lZFfoScQkgCRWlog9wuQpMltNQ8GDHG4xjYk0Mq/r+h0q/thZ7aXJ8s2dcpVdc4rSDNM0RxVoP8KcoJLyFCzZFWOQB/oRRAgAnjgQwZBHwiTuqp2Utx2d1ZZXslFUxzbFakGy9b6qFwm1VTrLtWJP/SewZ0HeeHG2PsT4FoZGq2DZXavgxnUsX2ie9HMph2ZIm+pT+qrrevm/DjbOc/g3iBCTHAaDvMTShCB8RxVNsTke/QVc7tdrNmpHZp7qZPPumEew/iaqf5yxtWkl7UyzsGDWbp3vkf/Sm6mO/KrWDHhZT+edllH2fXsRdtqd9ncHpPDGdeKq472yoM+xWGK/KmPUoZZ9W3dewuxs9u1anElmcJot6+Ss0eYuyuzjTw11GihorNtCGK8/67u5uXGMk67rF4Wg2PtoOWUK3oHqqmGO9HHiyN2XpSRQpWw85W4TT6yEv0f3RNtGOH4NlaF+VWMz8tlRebuslgvHVkzjP1RszWPi0sjFaPv0S8dZlyjVtxy1kN0NU/2gCLvNsljedxCSzOLpZkt0zq0Nl90h6wgf2IZIS5vrReuKLu4XN2uXbw94YxrRZnVdnJpO0nzhbM0Zq4lSvWCmvVI7JAkzdJkYhK503F3WlqZrkNwxqHT9JIE0WCgPb+9KELV1Ad98c4DgkJMGYEMZ2mzJys8gH65QR5B7E1dUHMuRoeeY1QXrI3JguXWBkd0Xq8St2XMMeNOnB5kijvTngEPcpJ5iFLkTzBlGamWiFIYIgr6f//iQYpu7OFbU00SeRBgQpmTFnmcQf/D1I9D6HlZkbJNlXpGs0AE9IXPbcQYTkPayFikkHgnXCLjBBkF/QDGFN154KMSe6jBA514Qomznm9GiSfW1TiaW848bCifsvRxRZJkT1Tb4pMgKsFTJ/DUJ7cn955koRN0e2IgKpIPeIDfW6b557cOdk+h4GPJmgwTWR8fbcNXxORWWVR95OohPSLIB31GCsQDF3pRkb9kEUr/gLsewmRjb5yXm05FM3PmJ8uoSd3WA+EL7sNS0H/9HFNG5jd4bVPtaKP9BPAgeUsgbl6utiVBacs9uS3K/bb6F/15bYSEef4zRQzwIIXNbaAtLHP448eP0aip9W5Eg+IjBnFMQR8YS2lfdYXBcLbfnuXreKwNQ80INfBp3EcDPBJ27FlF4AlQ6bWKqr5p9gKxsXqWu52EM+zuwVrCbnujDeWX1fO/gIA+2EeW2va34bAadPHJ2tj+GhotZHAvou2chz1nOJQvQT5OjrepF/rjkni786zgTjbiikDvyXjIpeYhKObbWyuKWlO42Q7C56baI0Bfiw0I7EaZJFbz7QztoMA5L3kr4mRHPx9lab+eb6bXba+NncNucO2Q2qwXYaUtJ6cQV8eLZOvRwbHZajrX1Ty1r965nbS01aM130ZD/D6S8VvXvL7HLcDobcK9G/Gfhn0mX7jzXzDeZ+Zv0qXv0JmkkjkurVKmVFkNKomsywPHoVkZnrnd4Dwu/CjULUEA9/svHuQxZEFGEtAHNHEh4EEMKdM+O/cFJ4gymOSgL8pSr6cqXUniQVJpeb5hkH00PNCab8AG4P4PZHrMBgsIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

