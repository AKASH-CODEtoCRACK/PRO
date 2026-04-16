import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You need to get these from https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID',
  meetingTemplateId: process.env.NEXT_PUBLIC_EMAILJS_MEETING_TEMPLATE_ID || 'YOUR_MEETING_TEMPLATE_ID',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send Contact Form Email
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    // Send to company
    const companyResponse = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      {
        to_name: 'PRO Agency Team',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        reply_to: data.email,
      },
      EMAILJS_CONFIG.publicKey
    );

    // Send acknowledgment to user
    const userResponse = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      {
        to_name: data.name,
        to_email: data.email,
        from_name: 'PRO Agency',
        subject: 'Thank you for contacting us',
        message: `Dear ${data.name},\n\nThank you for reaching out to us. We have received your message and will get back to you within 24 hours.\n\nYour message:\n${data.message}\n\nBest regards,\nPRO Agency Team`,
        reply_to: 'noreply@proagency.ae',
      },
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, companyResponse, userResponse };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Send Meeting Request Email
export const sendMeetingEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}) => {
  try {
    // Send to company
    const companyResponse = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.meetingTemplateId,
      {
        to_name: 'PRO Agency Team',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        service: data.service,
        meeting_date: data.date,
        meeting_time: data.time,
        reply_to: data.email,
      },
      EMAILJS_CONFIG.publicKey
    );

    // Send acknowledgment to user
    const userResponse = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.meetingTemplateId,
      {
        to_name: data.name,
        to_email: data.email,
        from_name: 'PRO Agency',
        subject: 'Meeting Scheduled - Confirmation',
        message: `Dear ${data.name},\n\nYour meeting has been scheduled successfully!\n\nDetails:\n- Service: ${data.service}\n- Date: ${data.date}\n- Time: ${data.time}\n\nWe will send you a calendar invite shortly. If you need to reschedule, please contact us.\n\nBest regards,\nPRO Agency Team`,
        reply_to: 'noreply@proagency.ae',
      },
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, companyResponse, userResponse };
  } catch (error) {
    console.error('Meeting email sending failed:', error);
    throw error;
  }
};
