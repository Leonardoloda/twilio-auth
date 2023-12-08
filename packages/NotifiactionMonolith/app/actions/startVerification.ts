"use server";

import { User } from "next-auth";
import { sendVerificationCode } from "../../Client/SidecarClient";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const startVerification = async (user?: User) => {
    const userInfo = await client.user.findFirst({
        where: {
            email: user?.email
        }
    })

    if(!userInfo?.phone)
        throw new Error("Bad register")


    sendVerificationCode({
        to: userInfo?.phone,
        channel: "sms"
    })

};
