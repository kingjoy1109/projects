var webpush = require("./web-push");

// const vapidKeys = webpush.generateVAPIDKeys();
const vapidKeys = {
  publicKey:
    "BAwt0Q-xmEsMJmiUogjK0-8jifPsB2NAR_5eSATzHLd3LYA6Jm_diDN643cigQQl-_kkApym-Mb5815qf2EUN5w",
  privateKey: "hq6-moPrJx_qQBEuSxgV9g--EAzLwXgHF_UzyJ8Id60",
};

webpush.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = code;

// webpush.sendNotification(sub, "Test Message");
