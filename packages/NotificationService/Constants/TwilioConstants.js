module.exports.TwilioConstants = (() => {
  const channels = {
    sms: "sms",
    whatsapp: "whatsapp",
  };

  return {
    getChannel: function (name) {
      return channels[name];
    },
  };
})();
