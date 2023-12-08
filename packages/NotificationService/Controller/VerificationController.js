const { TwilioClient } = require("../Client/TwilioClient");
const { Subject } = require("../Model/Subject");

module.exports.VerificationController = class VerificationController {
  /**
   * Injects a client
   * @param {TwilioClient} client
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Start a verification process
   * @param {Subject} subject
   * @returns {Promise<unknown>}
   */
  startVerification(subject) {
    return this._client.verify(subject);
  }

  /**
   * Check a code
   * @param {Subject} subject
   * @returns {Promise<unknown>}
   */
  checkVerification(subject) {
    return this._client.check(subject);
  }
};
