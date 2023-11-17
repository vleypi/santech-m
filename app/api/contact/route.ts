
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    
        const nodemailer = require("nodemailer");
        const dotenv = require('dotenv')
        dotenv.config()
        const body = await request.json()

        let transporter = nodemailer.createTransport({
          pool: true,
          host: "smtp.mail.ru",
          port: 465,
          secure: true,
          auth: {
              user: process.env.EMAIL, 
              pass: process.env.PASS
          }
        })

        console.log(process.env.PASS)

        let message = {
          from: process.env.EMAIL,
          to: process.env.EMAIL,
          subject: `Письмо от  ${body.name}, ${body.email}, ${body.phone}`,
          text: `Сообщение - ${body.text}`
      }

        await new Promise((resolve, reject) => {
          transporter.sendMail(message);
        });

        return NextResponse.json({ revalidated: true})
}

