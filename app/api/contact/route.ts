import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, meetingFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Determine which schema to use based on the presence of 'type' field
    const isMeeting = body.type === 'meeting';
    const schema = isMeeting ? meetingFormSchema : contactFormSchema;
    
    // Validate the request body
    const validatedData = schema.parse(body);
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send confirmation email to user
    
    console.log('Form submission received:', validatedData);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json(
      { 
        success: true, 
        message: isMeeting 
          ? 'Meeting scheduled successfully' 
          : 'Message sent successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process request',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}
