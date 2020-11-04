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


  let sub= {"endpoint":"https://fcm.googleapis.com/fcm/send/fDAwimijSFw:APA91bEpM5h0Odm7QU1TzHv1mZJAuSqcQ1aeFDLvZIrWktcWmI8g34GMJe_q9gz9cu11HI1gUTkSo9Tb3Qh4NjngxXEtNbXTpTKLXSxd6xpDnAAEd49kRwN_UgG5TzgJaDog3rJKZTyI","expirationTime":null,"keys":{"p256dh":"BHv4eBNHpYkhcEUOyte1DC2BtZPpiknzBSH4FEyOACMu-_ccKmAz3bdAYBqM4KGcdaJNekUvr3fMBEzNpma6goE","auth":"ASTKr3svCP2LS2PlkEFeDw"}}

  push.sendNotification(sub, 'Test Message')