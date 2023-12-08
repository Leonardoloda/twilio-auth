const { Subject } = require("../Model/Subject");

module.exports.TwilioClient = class TwilioClient {
  constructor(accountSid, authToken, verificationSid) {
    this.client = require("twilio")(accountSid, authToken);
    this._verificationSid = verificationSid;
  }

  /**
   * Start a verification process
   * @param {Subject} subject
   */
  verify(subject) {
    return this.client.verify.v2
      .services(this._verificationSid)
      .verifications.create({
        to: subject.phone,
        channel: subject.channel,
      });
  }

  /**
   * Check the code for a verification
   * @param {Subject} subject
   */
  check(subject) {
    return this.client.verify.v2
      .services(this._verificationSid)
      .verificationChecks.create({
        to: subject.phone,
        code: subject.code,
      });
  }
};
