import type { NextApiRequest, NextApiResponse } from "next";
import EmailTemplate from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstname, lastname, email, message } = await req.body;
  const { data, error } = await resend.emails.send({
    from: "BGF Solutions - Contact Us <info@beyondsa.net>",
    to: ["info@beyondsa.net", email],
    subject: "BGF Solutions - Contact Us",
    text: "BGF Solutions - Contact Us",
    react: EmailTemplate({ firstname, lastname, email, message }),
  });
  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
