import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="w-full pt-16 bg-[#FDF8ED]"> {/* Main container with brand background */}
            {/* Title section */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#33312B] pt-4 pb-6 px-4">
                THE MAD ITALIAN, LANGLEY'S BEST PIZZA AND PINTS
            </h1>

            {/* Pizza and Beer Image Section - PARALLAX REMAINS */}
            <div className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative overflow-hidden"> {/* Adjusted height for mobile */}
                    <div
                        className="absolute inset-0 w-full h-full parallax-bg bg-cover bg-bottom" // <-- Parallax kept
                        style={{ backgroundImage: 'url(/shoot2/head1.jpg)' }}
                        aria-label="Close up of a pizza"
                    ></div>
                </div>
                <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative overflow-hidden"> {/* Adjusted height for mobile */}
                    <div
                        // Note: This one still has bg-contain from previous steps, adjust if needed or revert to just parallax-bg
                        className="absolute inset-0 w-full h-full parallax-bg bg-cover" // <-- Parallax kept
                        style={{ backgroundImage: 'url(/cover2.jpg)' }}
                        aria-label="Glass of craft beer"
                    ></div>
                </div>
            </div>

            {/* Content section */}
            <div>
                {/* Changed background from red to warm black */}
                <div className="w-full bg-[#333133] py-6">
                    <h2 className="text-4xl md:text-6xl font-black text-[#FDF8ED] px-4 leading-tight">
                        FOR TUESDAY AFTERNOONS AND<br className="hidden sm:block" />
                        SATURDAY NIGHTS
                    </h2>
                </div>
                <div className="w-full bg-[#FDF8ED] py-6 px-4">
                    <p className="text-[#33312B] max-w-2xl text-base leading-relaxed">
                        The Mad Italian is about making imaginative choices and seeking pleasure in the rituals of
                        daily life. We love the easy conviviality of sharing a meal — the way a pizza, with beer or
                        without, can bring you into the moment. The Mad Italian is a chance to make these occasions
                        more inclusive, thoughtful and surprising.
                    </p>
                </div>
            </div>

            {/* Italian Dishes Section - Borders Removed */}
            <div className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative overflow-hidden"> {/* Adjusted height for mobile */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-top"
                        style={{ backgroundImage: 'url(/shot1.jpg)' }}
                        aria-label="Italian appetizer platter"
                    ></div>
                </div>
                <div className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative overflow-hidden"> {/* Adjusted height for mobile */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-right"
                        style={{ backgroundImage: 'url(/shoot2/covergrid2.jpg)' }}
                        aria-label="Italian pasta dish"
                    ></div>
                </div>
            </div>

            {/* Cocktails section */}
            <div>
                {/* Cocktail Titles */}
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#33312B] bg-[#FDF8ED] py-4 px-4">
                        SOMETIMES, ALWAYS, WHENEVER
                    </h2>
                    {/* Changed background from red to warm black */}
                    <div className="bg-[#333133] py-4 px-4">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FDF8ED]">
                            MAD ITALIAN COCKTAILS
                        </h3>
                    </div>
                </div>

                {/* Cocktail Images Row - Borders Removed */}
                <div className="w-full bg-[#FDF8ED] flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                        <div className="aspect-square relative overflow-hidden">
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url(/cocktail1.jpg)' }}
                                aria-label="Cocktail 1"
                            ></div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <div className="aspect-square relative overflow-hidden">
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url(/cc3.jpg)' }}
                                aria-label="Cocktail 2"
                            ></div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <div className="aspect-square relative overflow-hidden">
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url(/cocktail3.jpg)' }}
                                aria-label="Cocktail 3"
                            ></div>
                        </div>
                    </div>
                </div> {/* End of cocktail image flex container */}

                {/* NEW Cocktail Description Section */}
                {/* Changed background from red to warm black */}
                <div className="w-full bg-[#333133] py-6">
                    <h2 className="text-4xl md:text-6xl font-black text-[#FDF8ED] px-4 leading-tight">
                        HANDCRAFTED & UNIQUE<br className="hidden sm:block" />
                        COCKTAIL CREATIONS
                    </h2>
                </div>
                <div className="w-full bg-[#FDF8ED] py-6 px-4">
                    <p className="text-[#33312B] max-w-2xl text-base leading-relaxed">
                        Explore our unique range of cocktails, crafted with imagination and the finest ingredients.
                        From refreshing twists on classics to bold new flavors featuring draft beer infusions,
                        there's a perfect sip for every moment. Discover your new favorite.
                    </p>
                </div>
                {/* --- End of NEW Cocktail Description --- */}


                {/* --- Full Width Parallax Banner (No Top/Bottom Margin) --- */}
                <div className="w-screen h-[40vh] md:h-[50vh] relative overflow-hidden"> {/* Removed mb-16 */}
                    <div
                        className="absolute inset-0 w-full h-full parallax-bg bg-cover bg-center" // Added bg-cover
                        style={{ backgroundImage: 'url(/homefooter.jpg)' }}
                        aria-label="Restaurant interior or food scene"
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-10"></div> {/* Added overlay */}
                </div>
                {/* --- End of Banner --- */}


                {/* Menu Link Section */}
                {/* Changed background from red to warm black */}
                <div className="bg-[#333133] py-4 sm:py-6 px-4">
                    <Link to="/menu" className="block">
                        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#FDF8ED] hover:underline cursor-pointer"> {/* Adjusted font sizes */}
                            MENU
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;