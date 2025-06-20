// utils/sendEmail.ts
import nodemailer from 'nodemailer';

export const sendEmail = async (to: string) => {
  const transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",      // change if using another provider
            port: 587,
            secure: false,               // true if using port 465
            auth: {
            user: process.env.EMAIL_USERNAME!,
            pass: process.env.EMAIL_PASSWORD!,
        },
    });

  const mailOptions = {
        from: `"Vonce" <${process.env.EMAIL_USERNAME}>`,
        to,
        subject: "Welcome to Vonce!",
        text: "You're now subscribed to Vonce. One person, one conversation, every day. 🚀",
        html: `
            <div>
            <table style="border-spacing: 0; width: 100%; table-layout: fixed; max-width: 600px; margin: 0 auto" border="0" cellspacing="0" cellpadding="0" width="100%" class="x_664557157wrapper">
                <tbody>
                    <tr>
                        <td style="padding: 0" align="center">
                            <table bgcolor="#ffffff" style="border-spacing: 0; width: 100%; background-color: rgb(255, 255, 255); border-radius: 12px; overflow: hidden; margin-top: 20px" border="0" cellspacing="0" cellpadding="0" width="100%" class="x_664557157container">
                                <tbody>
                                    <tr>
                                        <td style="padding: 40px 30px 20px 30px; text-align: center" class="x_664557157content-padding">
                                            <table style="border-spacing: 0" border="0" cellspacing="0" cellpadding="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td style="padding-bottom: 20px" align="center">
                                                            <img height="84" width="150" alt="Vonce Logo" src="https://www.vonce.in/images/vonce_logo_mail.png">
                                                            <br>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <h1 style="font-size: 32px; font-weight: 700; color: rgb(255, 87, 87); margin: 0; padding: 0; line-height: 1.5">
                                                Let’s build this together.&nbsp;🎉
                                                <br>
                                            </h1>
                                            <p style="margin: 0px; padding: 15px 0px 0px; line-height: 1.5;" class="x_664557157small-text">
                                                <span class="colour" style="color:rgb(102, 102, 102)">
                                                    <span class="size" style="font-size: 14px; margin: 0px; padding: 15px 0px 0px; line-height: 1.5;">
                                                        Thank you for signing up for early access to Vonce, the new social networking app that connects one person a day for meaningful conversations.
                                                        <br>
                                                    </span>
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px 30px; text-align: center" class="x_664557157content-padding">
                                            <p style="padding: 0px 0px 20px; line-height: 1.6; margin: 0px;">
                                                <span class="size" style="font-size: 16px; padding: 0px 0px 20px; line-height: 1.6; margin: 0px;">
                                                    Welcome to the Vonce community! We're thrilled to have you join us on this journey to create more genuine connections. Get ready for a fresh take on social networking.
                                                    <br>
                                                </span>
                                            </p>
                                            <p style="padding: 0px 0px 25px; line-height: 1.6; margin: 0px;">
                                                <span class="size" style="font-size: 16px; padding: 0px 0px 25px; line-height: 1.6; margin: 0px;">
                                                    In the meantime, stay connected with us and follow our story:
                                                    <br>
                                                </span>
                                            </p>
                                            <table style="border-spacing: 0" border="0" cellspacing="0" cellpadding="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td style="padding-bottom: 30px" align="center">
                                                            <a target="_blank" style="display: inline-block; margin: 0 10px; color: rgb(255, 87, 87); font-size: 24px; text-decoration: none" class="x_664557157social-icon" href="https://www.instagram.com/vonce.in?igsh=dHJyc2Q1b2Rmc3hj">
                                                                <span class="size" style="font-size:18.667px">
                                                                    <b>
                                                                        Instagram
                                                                    </b>
                                                                </span>
                                                            </a>
                                                            <a target="_blank" style="display: inline-block; margin: 0 10px; color: rgb(255, 87, 87); font-size: 24px; text-decoration: none" class="x_664557157social-icon" href="https://www.linkedin.com/company/vonceapp">
                                                                <span class="size" style="font-size:18.667px">
                                                                    <b>
                                                                        LinkedIn
                                                                    </b>
                                                                </span>
                                                            </a>
                                                            <br>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p style="padding: 0px 0px 30px; line-height: 1.6; margin: 0px;">
                                                <span class="size" style="font-size: 16px; padding: 0px 0px 30px; line-height: 1.6; margin: 0px;">
                                                    Have any feedback, questions, or thoughts you'd like to share? Just hit reply to this email or
                                                    <span style="box-sizing: border-box; margin: 0; padding: 0; text-align: left">
                                                        &nbsp;
                                                    </span>
                                                    <a target="_blank" style="color: rgb(255, 87, 87); text-decoration: none; font-weight: 600" href="https://www.vonce.in/getintouch">
                                                        get in touch with us
                                                    </a>
                                                    . We'd love to hear from you!
                                                    <br>
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" bgcolor="#FFF7EB" style="background-color: rgb(255, 247, 235); border-top: 1px solid rgb(238, 238, 238); padding: 20px 0; text-align: center; font-size: 14px; color: rgb(136, 136, 136); border-bottom-left-radius: 12px" class="x_664557157footer">
                                            <p style="margin: 0px; padding: 0px; line-height: 1.5;">
                                                <span class="size" style="font-size: 16px; margin: 0px; padding: 0px; line-height: 1.5;">
                                                    Let’s bring back conversations 💬
                                                    <br>
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <br>
            </div>
            <div>
                <br>
           </div>
        </div>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
};
