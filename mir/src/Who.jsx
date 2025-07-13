import React from 'react';

function Who() {
    return (
        <div className="w-full min-h-screen pt-16 pb-20 bg-[#FDF8ED] text-[#33312B]">

            {/* --- Header --- */}
            <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#33312B] uppercase tracking-wide">
                        A LETTER FROM OUR TEAM
                    </h1>
                </div>
            </div>

            {/* --- Main Content --- */}
            <div className="px-6 sm:px-12 md:px-20 lg:px-32">
                <div className="max-w-6xl mx-auto grid grid-cols-1 tablet-lg:grid-cols-2 gap-16 tablet-lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#33312B] mb-6 leading-tight">
                                On behalf of everyone at The Mad Italian, we'd like to extend a warm welcome to you.
                            </h2>

                            <div className="space-y-6 font-body text-base md:text-lg leading-relaxed text-[#33312B]">
                                <p>
                                    We're thrilled to have you join us and experience the culinary delights, vibrant atmosphere and great cocktails that our establishment is renowned for.
                                </p>

                                <p>
                                    As part of our cherished community, you're not just customers but valued members of our extended family. Our passion for authentic Italian pizza and commitment to exceptional service drives us to deliver an unforgettable dining experience every time you walk through our doors.
                                </p>

                                <p>
                                    From our mouthwatering salads to our signature pizzas & cocktails, each meal and beverage is prepared with the finest ingredients and a touch of love.
                                </p>

                                <p>
                                    We believe in creating a welcoming environment where friends and family can come together to enjoy great food, share laughter, and make lasting memories.
                                </p>

                                <p>
                                    We know there are many other places you could have chosen, but you chose us, and for that alone, we want to thank you.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="font-body text-base md:text-lg text-[#33312B] mb-4">
                                If your experience doesn't live up to our standards, please reach out at{' '}
                                <a href="mailto:hello@maditalianpizza.ca" className="text-[#33312B] hover:text-[#B51A00] transition-colors underline">
                                    hello@maditalianpizza.ca
                                </a>
                            </p>
                            <div className="mt-8">
                                <p className="font-body text-lg italic text-[#33312B]">Warm regards,</p>
                                <p className="font-display text-xl font-bold text-[#33312B] uppercase tracking-wide">The Mad Italian Team</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="aspect-[4/5] tablet-lg:aspect-[3/4] relative overflow-hidden">
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(/whopagepic.jpg)' }}
                            aria-label="The Mad Italian atmosphere"
                        ></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Who;