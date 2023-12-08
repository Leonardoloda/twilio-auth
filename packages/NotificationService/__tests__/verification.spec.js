const request = require("supertest");
require("dotenv").config();

process.env.TWILIO_ACCOUNT_SID = process.env.TEST_TWILIO_ACCOUNT_SID || "leo";
process.env.TWILIO_AUTH_TOKEN = process.env.TEST_TWILIO_AUTH_TOKEN;
process.env.TWILIO_VERIFICATION_SID = process.env.TEST_TWILIO_VERIFICATION_SID;

const app = require("../server");

describe("Verification Tests", () => {
  const to = +15005550006;
  const channel = "sms";

  it("should start a new verification process", async () => {
    const response = await request(app).post("/verification").send({
      to,
      channel,
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body.serviceSid).toEqual(
      process.env.TEST_TWILIO_ACCOUNT_SID
    );
    expect(response.body.to).toEqual(phone);
    expect(response.body.channel).toEqual(channel);
  });

  it("should return a 403 when the verification process is missing info", async () => {
    const response = await request(app).post("/verification").send({
      to: "319",
    });

    expect(response.statusCode).toBe(403);
    expect(response.body).toEqual({
      message: "Missing config",
    });
  });

  it("should return a 403 when the verification check is missing info", async () => {
    const response = await request(app).put("/verification").send({
      to: "319",
    });

    expect(response.statusCode).toBe(403);
    expect(response.body).toEqual({
      message: "Missing config",
    });
  });
});
