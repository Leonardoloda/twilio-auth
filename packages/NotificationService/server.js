require("dotenv").config();

const app = require("express")();
const bodyParser = require("body-parser");

const { Subject } = require("./Model/Subject");
const { TwilioConstants } = require("./Constants/TwilioConstants");
const { TwilioClient } = require("./Client/TwilioClient");
const {
  VerificationController,
} = require("./Controller/VerificationController");

app.use(bodyParser.json());

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_VERIFICATION_SID,
  SERVICE_PORT,
} = process.env;

if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_VERIFICATION_SID)
  throw new Error("Missing some config, please check your .env");

const client = new TwilioClient(
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_VERIFICATION_SID
);

const controller = new VerificationController(client);

app.post("/verification", async (req, res) => {
  const { to, channel } = req.body;

  if (!to || !channel)
    return res.status(403).json({
      message: "Missing config",
    });

  const subject = new Subject(to, TwilioConstants.getChannel(channel));
  const verificationResult = await controller.startVerification(subject);

  console.info("VerifiactionResult", verificationResult);

  res.status(200).json(verificationResult);
});

app.put("/verification", async (req, res) => {
  const { to, code } = req.body;

  if (!to || !code)
    return res.status(403).json({
      message: "Missing config",
    });

  const subject = new Subject(to, null, code);
  const checkingResult = await controller.checkVerification(subject);

  console.info("CheckingResult", checkingResult);

  res.status(200).json(checkingResult);
});

app.listen(SERVICE_PORT, () => {
  console.info("App running on port", SERVICE_PORT);
});

module.exports = app;
