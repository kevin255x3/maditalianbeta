import React from 'react';

function Reservation() {
    return (
        <div className="w-full min-h-screen pt-24 pb-20 bg-[#FDF8ED] text-[#33312B] px-6 sm:px-12 md:px-20 lg:px-32">
            <h1 className="text-4xl sm:text-5xl font-black text-center mb-12 uppercase tracking-wider text-[#33312B]">
                Reserve a Table
            </h1>

            <div className="max-w-4xl mx-auto">
                {/* Embed TableAgent Widget */}
                <iframe
                    src="https://www.tableagent.com/widget/YOUR_RESTAURANT_ID/"
                    width="100%"
                    height="600"
                    style={{ border: 'none' }}
                    title="TableAgent Reservation Widget"
                ></iframe>
            </div>
        </div>
    );
}

export default Reservation;