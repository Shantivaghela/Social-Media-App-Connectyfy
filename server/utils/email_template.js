const Otp_template = (otp) => `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Email Template</title>
    <style>
        /* Global Reset and Body Styling */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            margin: 0;
            padding: 0;
            background-color: #f4f7fa; /* Light background for the page outside the main card */
            color: #333333;
        }

        /* Container for the entire email body */
        .email-container {
            max-width: 600px;
            margin: 40px auto; /* Centers the content and adds top/bottom spacing */
            background-color: #ffffff;
            border-radius: 8px; /* Slight rounding for the whole container */
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            overflow: hidden; /* Ensures header and footer don't overflow */
        }

        /* Header Styling (The purple bar) */
        .header {
            background-color: #48a6a6; 
            color: #ffffff;
            padding: 20px 0;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }

        /* Main Content Area Styling */
        .content {
            padding: 30px;
            line-height: 1.6;
        }

        /* OTP Code Box Styling */
        .otp-box {
            background-color: #f7f7f7; /* Very light grey */
            padding: 20px;
            margin: 30px 0;
            text-align: center;
            border-radius: 4px;
        }

        /* OTP Code Number Styling */
        .otp-code {
            font-size: 40px;
            font-weight: 800; /* Extra bold */
            color: #48a6a6; /* Same deep purple as the header */
            letter-spacing: 2px; /* Slight spacing for readability */
            display: block;
        }

        /* Important Text Styling (e.g., validity time) */
        .important-text {
            font-weight: bold;
        }

        /* Footer Styling (Copyright bar) */
        .footer {
            background-color: #f4f4f4; /* Slightly darker grey for contrast */
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666666;
            border-top: 1px solid #eeeeee; /* Separator line */
        }

        /* Responsiveness for small screens */
        @media only screen and (max-width: 620px) {
            .email-container {
                width: 100% !important;
                margin: 0;
                border-radius: 0;
                box-shadow: none;
            }
            .content {
                padding: 20px;
            }
            .header {
                font-size: 20px;
            }
            .otp-code {
                font-size: 32px;
            }
        }
    </style>
</head>
<body>

    <div class="email-container">
        <div class="header">
            Your OTP Code
        </div>

        <div class="content">
            <p>Hello, This is email from <b>Connectyfy</b></p>
            <p>Your One-Time Password (OTP) for account verification is:</p>

            <div class="otp-box">
                <span class="otp-code">${otp}</span>
            </div>

            <p>This OTP is valid for <span class="important-text">10 minutes</span>. Please do not share this code with anyone.</p>

            <p>If you didn't request this code, please ignore this email.</p>
            <p>Thank you for using our service!</p>
        </div>

        <div class="footer">
            &copy; 2025 Connectyfy. All rights reserved.
        </div>
    </div>

</body>
</html>

`;

module.exports = { Otp_template }