module.exports.Subject = class Subject {
  _phone = "";
  _channel = "";
  _code = null;

  /**
   *
   * @param {string} phone
   * @param {string} channel
   * @param {string} code
   */
  constructor(phone, channel = "sms", code) {
    this._phone = phone;
    this._channel = channel;
    this._code = code;
  }

  get phone() {
    return this._phone;
  }

  get channel() {
    return this._channel;
  }

  get code() {
    return this._code;
  }
};
