var webpush = require("web-push");

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

let sub = {
  endpoint:
    "https://sg2p.notify.windows.com/w/?token=BQYAAADpwf8CbQYC8daWYc9sQAxNO44Dsea4UbrhkqH25sodxIdcaK0a4XESS5VWPIrk0v1Vn5j5qrDHwWut6eI9bqHgeNOf2UnTD8HQZwZK3G3zbWxqhFYp8P3rJM4DOvEPK3pgaQ8BJeN3y50H87jmA6bO%2bQy8%2fNomapQPp2dq7ne1JO3e4blJSI82xtkeMP9o1xdbSLKZZPBHh07cY%2fSQm5Tjt%2fJq0wySiRMteNw9wSqTGllCoyd8DFgExTt2b6rCOyLuQWg0E%2fMrWibBDVhkgr4lYuOeZYvUAhRF%2btZrPhxD6o%2bd%2b9BiD5ie27WjpHHXZ9Zo1nqiPNn4Aarvlfp3QXLp",
  expirationTime: null,
  keys: {
    p256dh:
      "BH-02Qzt-ay8aXXpMdH1yMmNlMcx7O9L5atRTG9zY8CvanICLSm28NZYGr70AHlqfe0qAH5FcQKcQm5gLKUsduA",
    auth: "DYrx44uWBcYWgaSP21DMsA",
  },
};

webpush.sendNotification(sub, "Test Message");
