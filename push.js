var webpush = require('web-push');

// const vapidKeys = webpush.generateVAPIDKeys();
const vapidKeys = {
    publicKey: 'BAwt0Q-xmEsMJmiUogjK0-8jifPsB2NAR_5eSATzHLd3LYA6Jm_diDN643cigQQl-_kkApym-Mb5815qf2EUN5w',
    privateKey: 'hq6-moPrJx_qQBEuSxgV9g--EAzLwXgHF_UzyJ8Id60'
}

webpush.setVapidDetails(
    'mailto:test@code.co.uk',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );


  let sub= {
      endpoint:"https://fcm.googleapis.com/fcm/send/coBl5CZn0yI:APA91bHkmtZ5IFHGy2W8dG0EL7YtvBu9L02gek5OwHqvZa_n1hpp9JyvWnaOAZQIOEe_PSlhXTsDZeGs04iDpRvI3l4PR47z07YclewDZfmndAN_WdkkAWLtx5AJTSeoGAf81WZMcEMh",
      expirationTime:null,
      keys:{
          p256dh:"BMo6gP5wPZr8WkMoTxi3ueZs8CkR4dBnHJC-cL6MCtAQzfkQaJNPg1WC1NqCG_N67d5AHUHcpwFvm8-VlQVnOIw",
          auth:"JgabLrTShnJvlUNWtmwGww"
        }
    }

  push.sendNotification(sub, 'Test Message')