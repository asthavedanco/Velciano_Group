import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Here you would typically send an email or save to a database
    console.log("New Inquiry received:", data);

    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your inquiry! Our team will get back to you shortly." 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
