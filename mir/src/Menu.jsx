import React, { useState, useMemo } from 'react';

// Updated Menu Data
const menuItems = [
    // Pizzas
    { id: 1, category: 'Pizzas', name: 'Margharita', description: 'fior di latte mozzarella, fresh basil, extra virgin olive oil, salt, grana padano, San Marzano Tomato sauce.', price: '$18' },
    { id: 2, category: 'Pizzas', name: 'Cheese', description: 'fior di latte mozzarella, white cheddar, grana padano, San Marzano tomato sauce.', price: '$18' },
    { id: 3, category: 'Pizzas', name: 'Mediterranean', description: 'spinach, artichoke hearts, grape tomatoes, red onion, black olives, feta, balsamic reduction, San Marzano tomato sauce, grana padano.', price: '$20' },
    { id: 4, category: 'Pizzas', name: 'Vegetarian', description: 'red onion, green pepper, sauteed mushrooms, grape tomatoes, olives, fior di latte mozzarella, arugula, olive oil, grana Padano, San Marzano tomato sauce.', price: '$20' },
    { id: 5, category: 'Pizzas', name: 'Jalapeno Sizzle', description: 'spinach, italian sausage, bacon, red onion, jalapeno, fior di latte mozzarella, hot drizzle, grana padano, alfredo sauce.', price: '$20' },
    { id: 6, category: 'Pizzas', name: 'Pepperoni', description: 'Pepperoni, white cheddar, fior di latte mozzarella, grana padano, San Marzano tomato sauce.', price: '$19.50' },
    { id: 7, category: 'Pizzas', name: 'Hawaiian', description: 'ham, pineapple, bacon, white cheddar, fior di latte mozzarella, grana padano, San Marzano tomato sauce.', price: '$20' },
    { id: 8, category: 'Pizzas', name: 'Italian Sausage', description: 'pepperoni, Italian sausage, sauteed mushrooms, green pepper, fior di latte mozzarella, grana padano, San Marzano tomato sauce.', price: '$21' },
    { id: 9, category: 'Pizzas', name: 'Meat Lovers', description: 'pepperoni, ham, Italian sausage, bacon, white cheddar, fior di latte mozzarella, grana padano, San Marzano tomato sauce.', price: '$21' },
    { id: 10, category: 'Pizzas', name: 'BBQ Chicken', description: 'chicken, caramelized onions, white cheddar, fior de latte mozzarella, BBQ drizzle, arugula, extra virgin olive oil, grana padano, alfredo sauce.', price: '$21' },
    { id: 11, category: 'Pizzas', name: 'Chicken Alfredo', description: 'chicken, caramelized onions, grape tomatoes, fior di latte mozzarella, arugula, extra virgin olive oil, grana padano, alfredo sauce.', price: '$21' },
    { id: 12, category: 'Pizzas', name: 'Buffalo Chicken', description: 'Buffalo style chicken, fior de latte mozzarella, house drizzle, green onion, grana padano, alfredo sauce.', price: '$21' },
    { id: 13, category: 'Pizzas', name: 'Cheesesteak', description: 'steak, onion, sauteed mushrooms, green pepper, provolone, grana padano, alfredo sauce.', price: '$21' },
    { id: 14, category: 'Pizzas', name: 'Nutty Honey', description: 'spicy capicola, fior de latte, ground pistachio, chili flakes, pesto, honey, grana padano, alfredo sauce.', price: '$21' },
    // Appetizers
    { id: 15, category: 'Appetizers', name: 'Mad Rolls', description: 'Chicken, salt & pepper, white cheddar.', price: '$16' },
    { id: 16, category: 'Appetizers', name: 'Chicken Wings', description: 'house marinated, southeast rub.', price: '$18' },
    { id: 17, category: 'Appetizers', name: 'Garlic Cheese Bread', description: 'Garlic, provolone cheese, grana padano.', price: '$12' },
    { id: 18, category: 'Appetizers', name: 'Fries', description: '', price: '$8' },
    // Mad Italian Signature Cocktails
    { id: 20, category: 'Signature Cocktails', name: 'Mad Margarita', description: 'Hornotis Tequila, triple sec, fresh lime juice, simple syrup, hot jalapeno, basil.', price: '$14' },
    { id: 21, category: 'Signature Cocktails', name: 'Lime Margarita', description: 'Hornitos Tequila, triple sec, fresh lime juice, simple syrup, lime.', price: '$14' },
    { id: 22, category: 'Signature Cocktails', name: 'Lover’s Margarita', description: '1800 Tequila, triple sec, fresh lime juice, simple syrup, strawberries.', price: '$15' },
    { id: 23, category: 'Signature Cocktails', name: 'Cucumber Margarita', description: '1800 Tequila, triple sec, fresh lime juice, fresh cucumber juice, simple syrup', price: '$15' },
    { id: 24, category: 'Signature Cocktails', name: 'The Grand Margarita', description: 'Espolon reposado Tequila, fresh lime juice, simple syrup, Grand Marnier', price: '$18' },
    { id: 25, category: 'Signature Cocktails', name: 'Enzoni', description: 'Campari, Beefeater gin, fresh lemon juice, simple syrup, grapes', price: '$15' },
    { id: 26, category: 'Signature Cocktails', name: 'La Nuit', description: 'Goslings dark rum, Grand Marnier, Cassis', price: '$18' },
    { id: 27, category: 'Signature Cocktails', name: 'Espresso Martini', description: 'Vanilla vodka, kahlua, fresh espresso (add 0.5 oz of baileys)', price: '$14' },
    { id: 28, category: 'Signature Cocktails', name: 'Moscow Mule', description: 'Vodka, limoncello, fresh lime juice, ginger beer, basil', price: '$14' },
    { id: 29, category: 'Signature Cocktails', name: 'Aperol Spritz', description: 'Cinzano prosecco, Aperol, soda, orange', price: '$13' },
    { id: 30, category: 'Signature Cocktails', name: 'The St-Germain Spritz', description: 'Cinzano prosecco, St-Germain, soda water, lemon', price: '$13' },
    { id: 31, category: 'Signature Cocktails', name: 'Long Island Iced Tea', description: 'vodka, gin, tequila, bacardi, peach snapps, fresh lime juice, zero sugar iced tea, lemon', price: '$15' },
    { id: 32, category: 'Signature Cocktails', name: 'Old Fashioned', description: 'Bourbon, simple syrup, angustora bitters, orange peel', price: '$15' },
    { id: 33, category: 'Signature Cocktails', name: 'Negroni', description: 'Martini vermouth, compari, bombay gin, orange peel', price: '$15' },
    { id: 34, category: 'Signature Cocktails', name: 'Mojito', description: 'Bacardi, fresh lime juice, simple syrup, mint, lemon', price: '$14' },
    { id: 35, category: 'Signature Cocktails', name: 'Caesar', description: '', price: '$10' },
    // Beers & Cider on Tap
    { id: 36, category: 'Beers & Cider on Tap', name: 'Trading Post Hell’s Lager', description: '16 oz', price: '$7.99' },
    { id: 37, category: 'Beers & Cider on Tap', name: 'Dead Frog Pepper Lime Lager', description: '16oz', price: '$7.99' },
    { id: 38, category: 'Beers & Cider on Tap', name: '5 Roads Permanent IPA', description: '16 oz', price: '$7.99' },
    { id: 39, category: 'Beers & Cider on Tap', name: 'Fuggles Salted Caramel Ale', description: '16 oz', price: '$8.99' },
    { id: 40, category: 'Beers & Cider on Tap', name: 'Sour (rotating)', description: '16 oz', price: '$7.99' },
    { id: 41, category: 'Beers & Cider on Tap', name: 'House Lager', description: '16 oz', price: '$7.99' },
    { id: 42, category: 'Beers & Cider on Tap', name: 'Fraser Valley Cider', description: '12 oz', price: '$9.99' },
    { id: 43, category: 'Beers & Cider on Tap', name: 'Bira Moretti, Italian lager', description: '14 oz', price: '$9.99' },
    { id: 44, category: 'Beers & Cider on Tap', name: 'More Local Beers', description: 'Want more local beer options, worry not. We have A LOT of beers to choose from. Ask your server for details!', price: '' },
    // Imports (bottles/cans)
    { id: 45, category: 'Imports (Bottles/Cans)', name: 'Corona', description: '12 oz', price: '$8.49' },
    { id: 46, category: 'Imports (Bottles/Cans)', name: 'Guinness', description: '16 oz', price: '$9' },
    { id: 47, category: 'Imports (Bottles/Cans)', name: 'Heineken', description: '12 oz', price: '$8.49' },
    { id: 48, category: 'Imports (Bottles/Cans)', name: 'Heineken Silver (4%)', description: '12 oz', price: '$7.25' },
    { id: 49, category: 'Imports (Bottles/Cans)', name: 'Bira Moretti, bottles', description: '12 oz', price: '$8.50' },
    // White Wine
    { id: 50, category: 'White Wine', name: 'Santa Margarita (Italy) Pinot Grigio', description: '6 oz / 9 oz / Bottle', price: '$11 / $16 / $43' },
    { id: 51, category: 'White Wine', name: 'Ruffino Pinot Grigio (Italy) Pinot Grigio', description: '6 oz / 9 oz / Bottle', price: '$10.50 / $15 / $40' },
    { id: 52, category: 'White Wine', name: 'Sandhill (BC, Canada)', description: '6 oz / 9 oz / Bottle', price: '$12 / $18 / $50' },
    { id: 53, category: 'White Wine', name: 'Fern Walk Rose (Okanagan BC) Rose', description: '6 oz / 9 oz', price: '$12 / $16' }, // Bottle price removed as per client data
    { id: 54, category: 'White Wine', name: 'Jackson-Triggs (Okanagan BC) Sauvignon Blanc', description: '6 oz / 9 oz / Bottle', price: '$10 / $13 / $35' },
    { id: 55, category: 'White Wine', name: 'Savian Bio (Italy) Pinot Grigio', description: 'Bottle', price: '$50' },
    // Bubbles
    { id: 56, category: 'Bubbles', name: 'Lamarca Prosecco (Italy)', description: 'Glass / Bottle', price: '$12 / $48' },
    { id: 57, category: 'Bubbles', name: 'Cinzano Prosecco (Italy)', description: 'Glass / Bottle', price: '$10 / $40' },
    { id: 58, category: 'Bubbles', name: 'Blanc De Blancs (Italy) Brut', description: 'Bottle', price: '$37' },
    // Red Wine
    { id: 59, category: 'Red Wine', name: 'THE JUDGE Hester Creek', description: 'Bottle', price: '$115' },
    { id: 60, category: 'Red Wine', name: 'Valpolicella (Italy) Classico Bolla', description: '6 oz / 9 oz / Bottle', price: '$11.50 / $15.50 / $41' },
    { id: 61, category: 'Red Wine', name: 'Deakin Estate (Australia) Shiraz Cabernet', description: '6 oz / 9 oz / Bottle', price: '$10 / $15 / $37' },
    { id: 62, category: 'Red Wine', name: 'Cono Sur Organic (Chile) Cabernet Sauvignon', description: '6 oz / 9 oz / Bottle', price: '$11 / $16 / $43' },
    { id: 63, category: 'Red Wine', name: 'Our Story (Okanagan Valley BC) Cabernet Merlot', description: '6 oz / 9 oz / Bottle', price: '$10 / $15 / $40' },
    { id: 64, category: 'Red Wine', name: 'SEN (Chile) house', description: '6 oz / 9 oz / Bottle', price: '$8 / $11 / $28' },
    { id: 65, category: 'Red Wine', name: 'Pindarie (Barossa Valley, Australia)', description: 'Bottle', price: '$65' },
    // Alcohol-free beverages
    { id: 66, category: 'Alcohol-Free Beverages', name: 'Corona Zero (355ml)', description: '', price: '$6.49' },
    { id: 67, category: 'Alcohol-Free Beverages', name: 'Boylan Soda', description: 'cane cola, orange, ginger ale, birch beer, root beer', price: '$4.49' },
    { id: 68, category: 'Alcohol-Free Beverages', name: 'Organic Sparkling Strawberry Soda', description: '', price: '$4.49' },
    { id: 69, category: 'Alcohol-Free Beverages', name: 'Organic Sparkling Blueberry Soda', description: '', price: '$4.49' },
    { id: 70, category: 'Alcohol-Free Beverages', name: 'Organic Sparkling Blackberry Soda', description: '', price: '$4.49' },
    { id: 71, category: 'Alcohol-Free Beverages', name: 'Good Drink Iced Tea', description: 'Lemonade, Green tea, Strawberry', price: '$4.99' },
    { id: 72, category: 'Alcohol-Free Beverages', name: 'Cabana Strawberry Lemonade', description: '', price: '$5.99' },
    { id: 73, category: 'Alcohol-Free Beverages', name: 'Cabana Lemonade', description: '', price: '$5.99' },
    { id: 74, category: 'Alcohol-Free Beverages', name: 'Organic Brew Dr. Kombucha', description: '', price: '$7.25' },
];

// Define categories in the desired display order (Pasta removed)
const categoriesInOrder = ['Pizzas', 'Appetizers', 'Signature Cocktails', 'Beers & Cider on Tap', 'Imports (Bottles/Cans)', 'White Wine', 'Bubbles', 'Red Wine', 'Alcohol-Free Beverages'];
const filterCategories = ['All', ...categoriesInOrder]; // Update filter categories

function Menu() {
    const [activeCategory, setActiveCategory] = useState('All');

    // Prepare items for display: grouped if 'All', flat array if filtered
    const displayData = useMemo(() => {
        if (activeCategory === 'All') {
            const grouped = {};
            categoriesInOrder.forEach(cat => {
                grouped[cat] = menuItems.filter(item => item.category === cat);
            });
            return grouped;
        }
        return { [activeCategory]: menuItems.filter(item => item.category === activeCategory) };
    }, [activeCategory]);

    // Helper function to render a list of items for a category
    const renderItemList = (items) => {
        return items.map(item => (
            <div
                key={item.id}
                className="mb-4 break-inside-avoid p-2 rounded transition-colors duration-150 ease-in-out hover:bg-[#f7f1e4]" // Slightly darker hover
            >
                <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-md font-bold text-[#33312B] uppercase tracking-wide">{item.name}</h3>
                    <span className="flex-shrink-0 border-b border-dotted border-[#BC8F60] mx-2 flex-grow"></span>
                    <p className="text-md font-semibold text-[#33312B] flex-shrink-0">{item.price}</p>
                </div>
                <p className="text-sm text-[#33312B]">{item.description}</p>
            </div>
        ));
    };

    return (
        // Add horizontal padding back to the main container
        <div className="w-full min-h-screen pt-24 pb-20 bg-[#FDF8ED] text-[#33312B] px-6 sm:px-12 md:px-20 lg:px-32">
            <h1 className="text-4xl sm:text-5xl font-black text-center mb-12 uppercase tracking-wider text-[#33312B]">
                MENU
            </h1>

            {/* --- Banner Image --- */}
            {/* Increased height slightly, added negative margins to make it full-width */}
            <div className="w-screen h-[40vh] md:h-[50vh] relative overflow-hidden mb-16 -mx-6 sm:-mx-12 md:-mx-20 lg:-mx-32">
                <div
                    // Added parallax-bg class
                    className="absolute inset-0 w-full h-full parallax-bg bg-cover bg-center"
                    style={{ backgroundImage: 'url(/menubanner.jpg)' }} // Use your desired banner image
                    aria-label="Delicious food or restaurant scene"
                ></div>
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
            {/* --- End Banner Image --- */}

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-16">
                {filterCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-sm sm:text-base font-semibold uppercase tracking-wider pb-1 transition-colors duration-200 ease-in-out
                            ${activeCategory === category
                                ? 'text-[#333133] border-b-2 border-[#333133]'
                                : 'text-[#33312B] hover:text-[#333133]'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Menu Content */}
            <div className="space-y-12">
                {Object.entries(displayData).map(([category, items]) => (
                    items.length > 0 && (
                        // Removed React.Fragment as it's no longer needed without the conditional banner
                        <section key={category}>
                            <h2 className="text-2xl sm:text-3xl font-black text-[#33312B] mb-6 uppercase tracking-wide">{category}</h2>
                            <div className="columns-1 md:columns-2 md:gap-12 lg:gap-16">
                                {renderItemList(items)}
                            </div>
                        </section>
                    )
                ))}
                {Object.values(displayData).every(items => items.length === 0) && activeCategory !== 'All' && (
                    <p className="text-center text-[#33312B] mt-10">No items found for this category.</p>
                )}
            </div>
        </div>
    );
}

export default Menu;