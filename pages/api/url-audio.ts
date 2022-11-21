// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const axiosConfig = {
    headers: {
      apikey: "EshdtZdwaUVEOS54k69QBTl55PZ8BvO2",
    },
  };

  const data = new URLSearchParams({
    input: req.body,
  });

  const response = await axios.post(
    "https://api.zalo.ai/v1/tts/synthesize",
    data,
    axiosConfig
  );
  res.status(200).json(response.data);
}
