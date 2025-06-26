import React from 'react';

function Contact() {
    return (
        // Main container with padding for navbar and footer
        <div className="w-full min-h-screen pt-16 pb-20 bg-[#FDF8ED] text-[#33312B]">

            {/* --- Top Image Section (Centered) --- */}
            <div className="py-12 px-6 sm:px-12 md:px-20 lg:px-32"> {/* Wrapper with padding */}
                <div className="max-w-4xl mx-auto h-[50vh] md:h-[60vh] relative overflow-hidden"> {/* Removed background color */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: 'url(/contactcover.jpg)' }}
                        aria-label="Interior or exterior of the restaurant"
                    ></div>
                    {/* Optional Overlay */}
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
            </div>

            {/* --- Contact Info Section --- */}
            <div className="py-12 px-6 sm:px-12 md:px-20 lg:px-32 text-center">
                <div className="max-w-3xl mx-auto">
                    {/* Call Us */}
                    <div className="mb-10">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-3 uppercase tracking-wide">
                            Call Us
                        </h2>
                        <a href="tel:+16043714410" className="font-body text-lg md:text-xl text-[#33312B] hover:text-[#B51A00] transition-colors">
                            (604) 371-4410
                        </a>
                    </div>

                    {/* General Inquiries */}
                    <div className="mb-10">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-3 uppercase tracking-wide">
                            For General Inquiries
                        </h2>
                        <p className="font-body text-base md:text-lg text-[#33312B] mb-3">
                            We value your feedback and are grateful for your support. Please don't hesitate to reach out.
                        </p>
                        <a href="mailto:hello@maditalianpizza.ca" className="font-body text-lg md:text-xl text-[#33312B] hover:text-[#B51A00] transition-colors">
                            hello@maditalianpizza.ca
                        </a>
                    </div>

                    {/* Find Us */}
                    <div className="mb-10">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-3 uppercase tracking-wide">
                            Find Us
                        </h2>
                        <p className="font-body text-lg md:text-xl text-[#33312B]">
                            20728 Willoughby Town Centre Dr #100, Langley Twp, BC V2Y 0P3
                        </p>
                        <p className="font-body text-base md:text-lg text-gray-700 mt-1">
                            Located in: Willoughby Town Centre
                        </p>
                    </div>

                    {/* Service Options */}
                    <div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-3 uppercase tracking-wide">
                            Service Options
                        </h2>
                        <p className="font-body text-base md:text-lg text-[#33312B]">
                            Has outdoor seating <span className="mx-1">&bull;</span> Serves vegetarian dishes <span className="mx-1">&bull;</span> Has live music
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Map Section (Centered, Matches Top Image Size) --- */}
            <div className="py-12 px-6 sm:px-12 md:px-20 lg:px-32"> {/* Wrapper with padding */}
                <div className="max-w-4xl mx-auto h-[50vh] md:h-[60vh] relative overflow-hidden"> {/* Removed border */}

                    {/* Google Maps Embed - Placeholder, update with correct embed URL if address changed significantly */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.908615389042!2d-122.65031502351903!3d49.14535947137251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d1921d50b4f7%3A0xa114619d66dfcfb3!2sThe%20Mad%20Italian%20Pizza%20%26%20Pints!5e0!3m2!1sen!2sca!4v1745819640279!5m2!1sen!2sca" // IMPORTANT: You might need to update this src for the new address
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="The Mad Italian Location Map"
                    ></iframe>

                </div>
            </div>

            {/* --- Hours Section --- Changed to consistent Alfredo White background */}
            <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-center bg-[#FDF8ED]">
                <div className="max-w-xl mx-auto">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-6 uppercase tracking-wide">
                        Hours
                    </h2>
                    <div className="space-y-2 text-base md:text-lg text-[#33312B]">
                        <p className="font-body">Sunday: 12:00 PM - 9:00 PM</p>
                        <p className="font-body">Monday: 11:00 AM - 9:00 PM</p>
                        <p className="font-body">Tuesday: 11:00 AM - 9:00 PM</p>
                        <p className="font-body">Wednesday: 11:00 AM - 9:00 PM</p>
                        <p className="font-body">Thursday: 11:00 AM - 10:00 PM</p>
                        <p className="font-body">Friday: 11:00 AM - 11:00 PM</p>
                        <p className="font-body">Saturday: 11:00 AM - 11:00 PM</p>
                    </div>
                </div>
            </div>

            {/* --- Bottom Images Section (Centered, Complementary) --- */}
            <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto">
                    {/* Flex container for images */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16">

                        {/* Image 1 Container: Aspect ratio, constrained width */}
                        <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden"> {/* Removed background color and border */}
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url(/contactfooter1.jpg)' }}
                                aria-label="Atmosphere shot 1"
                            ></div>
                        </div>

                        {/* Image 2 Container: Aspect ratio, constrained width */}
                        <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden"> {/* Removed background color and border */}
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url(/contactfooter2.jpg)' }}
                                aria-label="Atmosphere shot 2"
                            ></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- Stay Updated on Events Section --- */}
            <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#FDF8ED]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-4 uppercase tracking-wide">
                        Stay Updated on Events
                    </h2>
                    <p className="font-body text-base md:text-lg text-[#33312B] leading-relaxed max-w-xl mx-auto">
                        For the latest on our live music schedule and special happenings, please follow our social media channels.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Contact;