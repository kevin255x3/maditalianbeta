import React from 'react';

function About() {
    return (
        <div className="w-full min-h-screen px-0 sm:px-0 md:px-0 lg:px-0 pb-0 bg-[#FDF8ED] text-[#33312B]">

            {/* --- Top Banner --- */}
            <div className="w-screen h-[40vh] tablet:h-[45vh] md:h-[50vh] relative overflow-hidden mb-16 flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 w-full h-full parallax-bg bg-cover bg-center"
                    style={{ backgroundImage: 'url(/shot4.jpg)' }}
                    aria-label="Interior of The Mad Italian restaurant"
                ></div>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 p-4">
                    <h1 className="font-display text-4xl sm:text-5xl tablet:text-6xl md:text-7xl font-black text-white uppercase tracking-wider mb-4">
                        OUR STORY
                    </h1>
                </div>
            </div>

            {/* --- Story Section --- */}
            <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#FDF8ED]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-6 uppercase tracking-wide">
                        MORE THAN JUST PIZZA & PINTS
                    </h2>
                    <p className="font-body text-base md:text-lg leading-relaxed text-[#33312B] mb-4">
                        Welcome to The Mad Italian! We began with a simple idea: to create a warm, inviting space where our Langley neighbours can gather. We're thrilled to share our passion for culinary delights, a vibrant atmosphere, and great cocktails with you.
                    </p>
                    <p className="font-body text-base md:text-lg leading-relaxed text-[#33312B] mb-6">
                        Here, it’s all about enjoying genuinely good food, sharing laughter, and making lasting memories with friends and family—celebrating life's simplest pleasures together.
                    </p>
                </div>
            </div>

            {/* --- Specialties Section: Pizza --- */}
            <div className="flex flex-col tablet:flex-row items-center bg-[#FDF8ED]">
                <div className="w-full tablet:w-1/2 h-[50vh] tablet:h-[55vh] md:h-[60vh] bg-cover bg-center"
                    style={{ backgroundImage: 'url(/shoot2/grid4.jpg)' }}>
                </div>
                <div className="w-full tablet:w-1/2 p-8 tablet:p-10 md:p-12 lg:p-16 bg-[#FDF8ED]">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-4 uppercase tracking-wide">
                        PERFECTING THE PIZZA
                    </h3>
                    <p className="font-body text-base md:text-lg leading-relaxed text-[#33312B]">
                        Our passion for authentic Italian Pizza and commitment to exceptional service drives us to deliver an unforgettable dining experience. We take pride in crafting each pizza from scratch using only the finest local ingredients and a touch of love, making sure every bite is full of flavor. If we're not doing it great, we don't do it at all.
                    </p>
                </div>
            </div>

            {/* --- Specialties Section: Drinks --- */}
            <div className="flex flex-col tablet:flex-row-reverse items-center bg-[#FDF8ED]">
                <div className="w-full tablet:w-1/2 h-[50vh] tablet:h-[55vh] md:h-[60vh] bg-cover bg-center"
                    style={{ backgroundImage: 'url(/aboutpage22.jpg)' }}>
                </div>
                <div className="w-full tablet:w-1/2 p-8 tablet:p-10 md:p-12 lg:p-16 bg-[#FDF8ED]">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-4 uppercase tracking-wide">
                        CURATED PINTS & COCKTAILS
                    </h3>
                    <p className="font-body text-base md:text-lg leading-relaxed text-[#33312B]">
                        Our cocktail program is a point of pride. From perfectly balanced classics to creative signature drinks, each is prepared with the finest ingredients and that same touch of love. We apply the same attention to detail that goes into our food, ensuring every sip is a delight. Paired with our selection of local craft beers, there's something for every taste and occasion.
                    </p>
                </div>
            </div>

            {/* --- Text Section 1 --- */}
            <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#FDF8ED]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-6 uppercase tracking-wide">
                        HEART OF THE NEIGHBOURHOOD
                    </h2>
                    <p className="font-body text-base md:text-lg leading-relaxed text-[#33312B] mb-6">
                        At The Mad Italian, we aim to grow organically through word of mouth and personal referrals. As a part of our cherished community, you are not just customers but valued members of our extended family. We're your neighbors, creating a place where Tuesday night takeout and Saturday celebrations feel equally at home, making every visit extraordinary.
                    </p>
                </div>
            </div>

            {/* --- Text Section 2 --- */}
            <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#FDF8ED]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#33312B] mb-6 uppercase tracking-wide">
                        JOIN THE FAMILY
                    </h2>
                    <p className="font-body text-base md:text-lg leading-relaxed text-[#33312B] mb-4">
                        We invite you to become part of The Mad Italian story. Whether you're stopping by for a quick slice or settling in for the evening, our door is always open.
                    </p>
                    <p className="font-body text-base md:text-lg leading-relaxed text-[#33312B] mb-6">
                        We look forward to serving you!
                    </p>
                </div>
            </div>

            {/* --- Footer Banner --- */}
            <div className="w-screen h-[40vh] tablet:h-[45vh] md:h-[50vh] relative overflow-hidden flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 w-full h-full parallax-bg bg-cover bg-center"
                    style={{ backgroundImage: 'url(/visit1.jpg)' }}
                    aria-label="Empty tables at The Mad Italian restaurant"
                ></div>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 p-4">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                        Visit Us Soon
                    </h2>
                </div>
            </div>

        </div>
    );
}

export default About;