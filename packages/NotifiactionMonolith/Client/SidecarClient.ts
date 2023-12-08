const { NOTIFICATION_SIDECAR_URL } = process.env;

export interface startVerificationBody {
    to: string;
    channel: string;
}

export const sendVerificationCode = async (input: startVerificationBody) => {
    if (!NOTIFICATION_SIDECAR_URL)
        throw new Error("Missing some config");

    return fetch(`${NOTIFICATION_SIDECAR_URL}/verification`, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
}

export interface checkVerificationBody {
    to: string;
    code: string;
}

export const checkVerification = async (input: checkVerificationBody) => {
    if (!NOTIFICATION_SIDECAR_URL)
        throw new Error("Missing some config");

    const response = await fetch(`${NOTIFICATION_SIDECAR_URL}/verification`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    return response.json()

}