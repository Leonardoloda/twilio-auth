import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.info("Verify", req.body);

  res.status(200).json({});
}
