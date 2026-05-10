# EmailJS Setup Guide for Contact Form

Follow these steps to enable email notifications from your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Click "Connect Account" and authorize EmailJS to send emails
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "General" in the dashboard
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Update Contact.js

Open `src/components/Contact.js` and replace these values:

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test the Form

1. Run your portfolio: `npm start`
2. Navigate to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email at **nuwangimahesha@gmail.com**

## Troubleshooting

- **Emails not arriving?** Check your spam folder
- **Error message?** Verify all IDs are correct in Contact.js
- **Still not working?** Check the browser console for error messages

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

This is perfect for a portfolio contact form!

## Alternative: FormSubmit (No Setup Required)

If you prefer a simpler solution without registration, you can use FormSubmit:

Replace the form action in Contact.js with:
```javascript
<form action="https://formsubmit.co/nuwangimahesha@gmail.com" method="POST">
```

This will send emails directly without any configuration!
