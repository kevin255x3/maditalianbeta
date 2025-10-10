import React, { useState, useMemo } from 'react';

// Updated Menu Data - Based on Client's Latest Finalized PDFs
const menuItems = [
    // Pizzas
    { id: 1, category: 'Pizzas', name: 'Margherita', description: 'Tomato sauce, fior di latte mozzarella, fresh basil, sea salt, grana padano, EV olive oil', price: '$19' },
    { id: 2, category: 'Pizzas', name: 'Vegetarian', description: 'Tomato sauce, sautéed mushroom, black olives, red onion, grape tomatoes, green pepper, arugula, white cheddar, fior di latte mozzarella, EV olive oil, grana padano', price: '$20' },
    { id: 3, category: 'Pizzas', name: 'Mediterranean', description: 'Tomato sauce, spinach, artichoke hearts, grape tomatoes, red onion, white cheddar, black olives, feta, balsamic reduction, grana padano', price: '$21' },
    { id: 4, category: 'Pizzas', name: 'Pepperoni', description: 'Tomato sauce, pepperoni, white cheddar, fior di latte mozzarella, grana padano', price: '$21' },
    { id: 5, category: 'Pizzas', name: 'Jalapeno Sizzle', description: 'Alfredo sauce, Italian sausage, bacon, red onion, spinach, jalapeno, fior di latte mozzarella, hot drizzle, grana padano', price: '$21' },
    { id: 6, category: 'Pizzas', name: 'Hawaiian', description: 'Tomato sauce, ham, pineapple, bacon, white cheddar, fior di latte mozzarella, grana padano', price: '$21' },
    { id: 7, category: 'Pizzas', name: 'Italian Sausage', description: 'Tomato sauce, pepperoni, Italian sausage, sautéed mushrooms, green pepper, fior di latte mozzarella, grana padano', price: '$22' },
    { id: 8, category: 'Pizzas', name: 'Meat Lovers', description: 'Tomato sauce, pepperoni, ham, Italian sausage, bacon, white cheddar, fior di latte mozzarella, grana padano', price: '$22.50' },
    { id: 9, category: 'Pizzas', name: 'BBQ Chicken', description: 'Alfredo sauce, chicken, caramelized onion, fior di latte mozzarella, BBQ drizzle, arugula, EV olive oil, grana padano', price: '$22.50' },
    { id: 10, category: 'Pizzas', name: 'Sun Kissed Pesto', description: 'Sundried tomato pesto, chicken, artichoke, fior di latte mozzarella, arugula, garlic confit, grana padano', price: '$22.50' },
    { id: 11, category: 'Pizzas', name: 'Red Flag', description: 'Tomato sauce, cup & char pepperoni, fresh jalapeno, fior di latte mozzarella, garlic confit, hot honey, grana padano', price: '$22.50' },
    { id: 12, category: 'Pizzas', name: 'Nutty Honey', description: 'Alfredo sauce, spicy capicollo, chili flakes, pistachio, fior di latte mozzarella, house pesto, honey, grana padano', price: '$22.50' },
    { id: 13, category: 'Pizzas', name: 'Cheesesteak', description: 'Alfredo sauce, steak, onion, sautéed mushrooms, green pepper, provolone, grana padano', price: '$22.50' },
    { id: 14, category: 'Pizzas', name: 'Buffalo Chicken', description: 'Alfredo sauce, buffalo style chicken, fior di latte mozzarella, green onion, house drizzle, grana padano', price: '$22.50' },
    { id: 15, category: 'Pizzas', name: 'Bambino (Any Pizza)', description: 'Any pizza in a smaller size', price: '$12' },

    // Appetizers
    { id: 17, category: 'Appetizers', name: 'Mad Rolls', description: 'Chicken, white cheddar, chili flakes, salt & pepper. <em>Served with marinara, garlic or chipotle sauce</em>', price: '$16' },
    { id: 18, category: 'Appetizers', name: 'Wings', description: 'Smokey Southwest. <em>Served with garlic or chipotle sauce</em>', price: '$19' },
    { id: 19, category: 'Appetizers', name: 'Garlic Cheese Bomb', description: 'Garlic oil base, provolone & cheddar. <em>Drizzle honey & chili flakes +$1.50</em>', price: '$14' },

    // Salads
    { id: 20, category: 'Salads', name: 'Caesar Salad', description: 'Romaine lettuce, red onion, grape tomatoes, croutons, house made caesar dressing, grana padano. <em>Add chicken +$4 Add bacon +$3</em>', price: '$14' },
    { id: 21, category: 'Salads', name: 'Burrata', description: 'Baby arugula, grape tomato, house pesto, EV olive oil, balsamic reduction', price: '$19' },

    // Mad Italian Signature Cocktails
    { id: 22, category: 'Signature Cocktails', name: 'Lime Margarita', description: 'Cazadores Tequila, triple sec, fresh lime juice, simple syrup, lime <em>+ salt rim</em>', price: '$13' },
    { id: 23, category: 'Signature Cocktails', name: 'Mad Margarita', description: 'Cazadores Tequila, triple sec, fresh lime juice, simple syrup, jalapeno <em>+ tajin rim</em>', price: '$14' },
    { id: 24, category: 'Signature Cocktails', name: 'Lover\'s Margarita', description: '1800 Tequila, triple sec, fresh lime juice, simple syrup, fresh strawberry <em>+ tajin rim</em>', price: '$16.75' },
    { id: 25, category: 'Signature Cocktails', name: 'Spicy Cucumber Margarita', description: '1800 Tequila, triple sec, fresh lime juice, simple syrup, cucumber, jalapeno <em>+ tajin rim</em>', price: '$16.75' },
    { id: 26, category: 'Signature Cocktails', name: 'Gin Basil Smash', description: 'Bombay Gin, fresh lemon juice, simple syrup, cucumber, basil, soda', price: '$15' },
    { id: 27, category: 'Signature Cocktails', name: 'Enzoni', description: 'Beefeater Gin, Aperol, fresh lemon juice, simple syrup, grapes', price: '$16' },
    { id: 28, category: 'Signature Cocktails', name: 'Espresso Martini', description: 'Absolut Vodka, Kahlua, fresh espresso, coffee beans', price: '$15' },
    { id: 29, category: 'Signature Cocktails', name: 'La Notte', description: 'Dark Rum, Grand Marnier, Cassis, orange', price: '$16' },
    { id: 30, category: 'Signature Cocktails', name: 'Moscow Mule', description: 'Absolut Vodka, limoncello, fresh lime juice, ginger beer, basil', price: '$13.50' },
    { id: 31, category: 'Signature Cocktails', name: 'Aeroplanino', description: 'Bourbon, Aperol, Amaro-Montenegro, fresh lemon juice, orange', price: '$16.75' },
    { id: 32, category: 'Signature Cocktails', name: 'Long Island Iced Tea', description: 'Vodka, Gin, Tequila, Bacardi, peach schnapps, fresh lime juice, black tea', price: '$15.50' },
    { id: 33, category: 'Signature Cocktails', name: 'Old Fashioned', description: 'Bourbon, bitters, orange', price: '$15' },
    { id: 34, category: 'Signature Cocktails', name: 'Negroni', description: 'Vermouth, Campari, Gin, orange', price: '$16' },
    { id: 35, category: 'Signature Cocktails', name: 'Mojito', description: 'Bacardi, fresh lime juice, simple syrup, soda, fresh mint', price: '$14' },
    { id: 36, category: 'Signature Cocktails', name: 'Aperol Spritz', description: 'Prosecco, Aperol, soda, orange', price: '$13' },
    { id: 37, category: 'Signature Cocktails', name: 'Caesar', description: 'Absolut Vodka, tobasco, worcestershire, fresh lime juice, clamato, pickled bean <em>+ celery salt rim</em>', price: '$10' },
    { id: 38, category: 'Signature Cocktails', name: 'Shaft', description: 'Absolut Vodka, Baileys, fresh espresso, Kahlua', price: '$12' },

    // Beers & Cider on Tap
    { id: 39, category: 'Beers & Cider on Tap', name: 'Mad Lager', description: '5% ABV | 12oz', price: '$6' },
    { id: 40, category: 'Beers & Cider on Tap', name: 'Birra Moretti', description: 'Lager, Italy | 4.6% ABV | 14oz / 60oz', price: '$10 / $38' },
    { id: 41, category: 'Beers & Cider on Tap', name: 'Hell\'s Lager', description: 'Trading Post Brewing, Langley, BC | 5% ABV | 16oz / 60oz', price: '$8 / $28' },
    { id: 42, category: 'Beers & Cider on Tap', name: 'Salted Caramel Ale', description: 'Fuggles Brewing, Richmond, BC | 6.2% ABV | 16oz / 60oz', price: '$9 / $30' },
    { id: 43, category: 'Beers & Cider on Tap', name: 'Chase My Tail Pale Ale', description: 'Yellow Dog Brewing, Port Moody, BC | 5.2% ABV | 16oz / 60oz', price: '$9 / $30' },
    { id: 44, category: 'Beers & Cider on Tap', name: 'German Pilsner', description: 'Farm Country Brewing, BC | 5% ABV | 16oz / 60oz', price: '$9 / $30' },
    { id: 45, category: 'Beers & Cider on Tap', name: 'Play Dead IPA', description: 'Yellow Dog Brewing, Port Moody, BC | 6.8% ABV | 16oz / 60oz', price: '$9 / $30' },
    { id: 46, category: 'Beers & Cider on Tap', name: 'Rhubarb Cider', description: 'Fraser Valley Cider, Langley, BC | 7.2% ABV | 12oz', price: '$10' },
    { id: 47, category: 'Beers & Cider on Tap', subcategory: 'Imports', name: 'Corona', description: '4.6% ABV | 330ml', price: '$8' },
    { id: 48, category: 'Beers & Cider on Tap', subcategory: 'Imports', name: 'Heineken', description: '5% ABV | 330ml', price: '$8' },
    { id: 49, category: 'Beers & Cider on Tap', subcategory: 'Imports', name: 'Stella', description: '5% ABV | 330ml', price: '$9' },
    { id: 50, category: 'Beers & Cider on Tap', subcategory: 'Imports', name: 'Guinness', description: '4.2% ABV | 440ml', price: '$10' },

    // Wine - By the Glass Only
    { id: 51, category: 'Wine', subcategory: 'Red Wine', name: 'House Red Blend', description: 'Chile | Medium body with ripe tannins | 6oz / 9oz', price: '$8 / $10' },
    { id: 52, category: 'Wine', subcategory: 'Red Wine', name: 'Merlot', description: 'Sumac Ridge, Private Reserve, Okanagan Valley, BC | Medium body | 6oz / 9oz', price: '$10 / $15' },
    { id: 53, category: 'Wine', subcategory: 'Red Wine', name: 'Shiraz Cabernet', description: 'Deaken Estate, Australia | Rich & juicy | 6oz / 9oz', price: '$10 / $15' },
    { id: 54, category: 'Wine', subcategory: 'Red Wine', name: 'Bolla Classico', description: 'Valpolicella, Italy | Well defined finish with hints of cherry | 6oz / 9oz', price: '$11 / $16' },
    { id: 55, category: 'Wine', subcategory: 'Red Wine', name: 'Character Red', description: 'Hester Creek, Okanagan Valley, BC | Full body & robust | 6oz / 9oz', price: '$14 / $21' },
    { id: 56, category: 'Wine', subcategory: 'White Wine', name: 'House White', description: 'Jackson-Triggs, Okanagan Valley, BC | Vibrant & fruity | 6oz / 9oz', price: '$10 / $12' },
    { id: 57, category: 'Wine', subcategory: 'White Wine', name: 'Pinot Grigio - Santa Margherita', description: 'Italy | Dry | 6oz / 9oz', price: '$11 / $17' },
    { id: 58, category: 'Wine', subcategory: 'White Wine', name: 'Pinot Grigio - Ruffino Lumina', description: 'Italy | Balanced with notes of pears and citrus fruit | 6oz / 9oz', price: '$10 / $15' },
    { id: 59, category: 'Wine', subcategory: 'White Wine', name: 'The Good Sauvignon Blanc', description: 'Saintly, Okanagan Valley, BC | Fresh & fruity | 6oz / 9oz', price: '$12 / $18' },
    { id: 60, category: 'Wine', subcategory: 'White Wine', name: 'The Good Rosé', description: 'Saintly, Okanagan Valley, BC | Dry, fresh & fruity | 6oz / 9oz', price: '$12 / $18' },
    { id: 61, category: 'Wine', subcategory: 'White Wine', name: 'Fern-Walk Rosé', description: 'Okanagan Valley, BC | Light and juicy | 6oz / 9oz', price: '$11 / $17' },
    { id: 62, category: 'Wine', subcategory: 'White Wine', name: 'Chardonnay', description: 'Oyster Bay Marlborough, New Zealand | Subtly oaky, fruity character | 6oz / 9oz', price: '$13 / $20' },
    { id: 63, category: 'Wine', subcategory: 'Bubbles', name: 'Ruffino Prosecco', description: 'Italy | Extra dry | 6oz', price: '$12' },
    { id: 64, category: 'Wine', subcategory: 'Ask Your Server', name: 'Ask Your Server', description: 'Want to explore more wine options? Ask your server about our current wine rotation and seasonal selections.', price: '' },

    // Alcohol-free beverages
    { id: 65, category: 'Alcohol-Free Beverages', name: 'Light Sparkling Water', description: '355ml', price: '$3.75' },
    { id: 66, category: 'Alcohol-Free Beverages', name: 'Boylan Soda', description: 'Birch Beer, Orange, Cane Cola, Ginger Ale, Black Cherry, Root Beer | 355ml', price: '$4.50' },
    { id: 67, category: 'Alcohol-Free Beverages', name: 'Sparkling Soda', description: 'Strawberry, Blueberry, Blackberry | 355ml', price: '$4.50' },
    { id: 68, category: 'Alcohol-Free Beverages', name: 'Cabana Lemonade', description: 'Strawberry, Lemon | 591ml', price: '$6.50' },
    { id: 69, category: 'Alcohol-Free Beverages', name: 'Regular Soda', description: 'Coke, Diet Coke, Ginger Ale, Coke Zero, Sprite, Tonic Water | 330ml', price: '$3' },
    { id: 70, category: 'Alcohol-Free Beverages', name: 'Good Drink Iced Tea', description: 'Mango, Lemon, Green Tea | 473ml', price: '$5' },
    { id: 71, category: 'Alcohol-Free Beverages', name: 'Orange/Apple Juice', description: '330ml', price: '$3' },
    { id: 72, category: 'Alcohol-Free Beverages', name: 'Shirley Temple', description: 'Orange juice, ginger ale, grenadine', price: '$7' },
    { id: 73, category: 'Alcohol-Free Beverages', name: 'Virgin Caesar', description: 'Clamato, fresh lime juice, tobasco, worcestershire, pickled bean <em>+ celery salt rim</em>', price: '$7' },
    { id: 74, category: 'Alcohol-Free Beverages', name: 'Virgin Mojito', description: 'Fresh lime juice, simple syrup, mint, soda', price: '$8' },
    { id: 75, category: 'Alcohol-Free Beverages', name: 'Virgin Moscow Mule', description: 'Fresh lime juice, basil, ginger beer', price: '$8' },
    { id: 76, category: 'Alcohol-Free Beverages', name: 'Virgin Margarita', description: 'Fresh lime juice, simple syrup, basil, soda <em>+ salt rim</em>', price: '$8' },

    // Desserts
    { id: 77, category: 'Dessert', name: 'Bananutella', description: 'Dough base, nutella, fresh banana, coconut flakes', price: '$17.50' },
    { id: 78, category: 'Dessert', name: 'New York Cheesecake', description: 'Graham cracker crust, berry compote, coconut whipped cream', price: '$12' },

    // House Made Sauces
    { id: 79, category: 'House Made Sauces', name: 'Dill Ranch', description: '2oz', price: '$1.50' },
    { id: 80, category: 'House Made Sauces', name: 'Garlic Sauce', description: '2oz', price: '$1.50' },
    { id: 81, category: 'House Made Sauces', name: 'Chipotle Sauce', description: '2oz', price: '$1.50' },
    { id: 82, category: 'House Made Sauces', name: 'Chili Oil', description: '2oz', price: '$1.50' },
    { id: 83, category: 'House Made Sauces', name: 'Caesar Salad Dressing', description: '2oz', price: '$2.50' },
    { id: 84, category: 'House Made Sauces', name: 'Marinara', description: '2oz', price: '$1.50' },
    { id: 85, category: 'House Made Sauces', name: 'Jalapeno Drizzle', description: '2oz', price: '$1.50' },
    { id: 86, category: 'House Made Sauces', name: 'Buffalo Ranch', description: '2oz', price: '$1.50' },
];

// Define categories in the desired display order
const categoriesInOrder = ['Pizzas', 'Appetizers', 'Salads', 'Signature Cocktails', 'Beers & Cider on Tap', 'Wine', 'Alcohol-Free Beverages', 'Dessert', 'House Made Sauces'];
const filterCategories = categoriesInOrder;

function Menu() {
    const [activeCategory, setActiveCategory] = useState('Pizzas');

    // Prepare items for display: filter by selected category
    const displayData = useMemo(() => {
        return { [activeCategory]: menuItems.filter(item => item.category === activeCategory) };
    }, [activeCategory]);

    // Helper function to render a list of items for a category
    const renderItemList = (items, category) => {
        // Special handling for Wine category with subcategories
        if (category === 'Wine') {
            const subcategories = ['Red Wine', 'White Wine', 'Bubbles', 'Ask Your Server'];

            return subcategories.map(subcategory => {
                const subcategoryItems = items.filter(item => item.subcategory === subcategory);
                if (subcategoryItems.length === 0) return null;

                return (
                    <div key={subcategory} className="mb-8 break-inside-avoid">
                        <h3 className="text-lg font-bold text-[#33312B] mb-4 uppercase tracking-wide border-b border-[#BC8F60] pb-2">
                            {subcategory}
                        </h3>
                        <div className="ml-4">
                            {subcategoryItems.map(item => (
                                <div
                                    key={item.id}
                                    className="mb-4 p-2 rounded transition-colors duration-150 ease-in-out hover:bg-[#f7f1e4]"
                                >
                                    {subcategory === 'Ask Your Server' ? (
                                        <div className="bg-amber-50 p-4 rounded-lg border border-[#BC8F60]">
                                            <div className="text-center">
                                                <h4 className="text-md font-bold text-[#33312B] uppercase tracking-wide mb-2">{item.name}</h4>
                                                <p className="text-sm text-[#33312B] italic">{item.description}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h4 className="text-md font-bold text-[#33312B] uppercase tracking-wide">{item.name}</h4>
                                                <span className="flex-shrink-0 border-b border-dotted border-[#BC8F60] mx-2 flex-grow"></span>
                                                <p className="text-md font-semibold text-[#33312B] flex-shrink-0">{item.price}</p>
                                            </div>
                                            <p className="text-sm text-[#33312B]" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }).filter(Boolean);
        }

        // Special handling for Beers & Cider on Tap with Imports subsection
        if (category === 'Beers & Cider on Tap') {
            const regularBeers = items.filter(item => !item.subcategory);
            const imports = items.filter(item => item.subcategory === 'Imports');

            return (
                <>
                    {regularBeers.map(item => (
                        <div
                            key={item.id}
                            className="mb-4 break-inside-avoid p-2 rounded transition-colors duration-150 ease-in-out hover:bg-[#f7f1e4]"
                        >
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-md font-bold text-[#33312B] uppercase tracking-wide">{item.name}</h3>
                                <span className="flex-shrink-0 border-b border-dotted border-[#BC8F60] mx-2 flex-grow"></span>
                                <p className="text-md font-semibold text-[#33312B] flex-shrink-0">{item.price}</p>
                            </div>
                            <p className="text-sm text-[#33312B]" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        </div>
                    ))}
                    {imports.length > 0 && (
                        <div className="mt-8 mb-8 break-inside-avoid">
                            <h3 className="text-lg font-bold text-[#33312B] mb-4 uppercase tracking-wide border-b border-[#BC8F60] pb-2">
                                Imports
                            </h3>
                            <div className="ml-4">
                                {imports.map(item => (
                                    <div
                                        key={item.id}
                                        className="mb-4 p-2 rounded transition-colors duration-150 ease-in-out hover:bg-[#f7f1e4]"
                                    >
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="text-md font-bold text-[#33312B] uppercase tracking-wide">{item.name}</h4>
                                            <span className="flex-shrink-0 border-b border-dotted border-[#BC8F60] mx-2 flex-grow"></span>
                                            <p className="text-md font-semibold text-[#33312B] flex-shrink-0">{item.price}</p>
                                        </div>
                                        <p className="text-sm text-[#33312B]" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            );
        }

        // Regular rendering for all other categories
        return items.map(item => (
            <div
                key={item.id}
                className="mb-4 break-inside-avoid p-2 rounded transition-colors duration-150 ease-in-out hover:bg-[#f7f1e4]"
            >
                {item.isSpecial ? (
                    <div className="bg-amber-50 p-4 rounded-lg border border-[#BC8F60]">
                        <div className="text-center">
                            <h3 className="text-md font-bold text-[#33312B] uppercase tracking-wide mb-2">{item.name}</h3>
                            <p className="text-sm text-[#33312B] italic">{item.description}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-md font-bold text-[#33312B] uppercase tracking-wide">{item.name}</h3>
                            <span className="flex-shrink-0 border-b border-dotted border-[#BC8F60] mx-2 flex-grow"></span>
                            <p className="text-md font-semibold text-[#33312B] flex-shrink-0">{item.price}</p>
                        </div>
                        <p className="text-sm text-[#33312B]" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </>
                )}
            </div>
        ));
    };

    return (
        <div className="w-full min-h-screen pt-24 pb-20 bg-[#FDF8ED] text-[#33312B] px-6 sm:px-12 tablet:px-16 md:px-20 lg:px-32">
            <h1 className="text-4xl sm:text-5xl font-black text-center mb-3 uppercase tracking-wider text-[#33312B]">
                MENU
            </h1>

            {/* Happy Hour Notice */}
            <div className="text-center mb-12">
                <div className="inline-block border-t border-b border-[#BC8F60] py-2 px-8">
                    <p className="text-xs sm:text-sm text-[#BC8F60] font-semibold uppercase tracking-wider">
                        Happy Hour Daily • 2-5PM & 8PM-Close
                    </p>
                </div>
            </div>

            {/* Banner Image */}
            <div className="w-screen h-[40vh] tablet:h-[45vh] md:h-[50vh] relative overflow-hidden mb-16 -mx-6 sm:-mx-12 tablet:-mx-16 md:-mx-20 lg:-mx-32">
                <div
                    className="absolute inset-0 w-full h-full parallax-bg bg-cover bg-center"
                    style={{ backgroundImage: 'url(/menubanner.jpg)' }}
                    aria-label="Delicious food or restaurant scene"
                ></div>
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

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
                        <section key={category}>
                            <h2 className="text-2xl sm:text-3xl font-black text-[#33312B] mb-6 uppercase tracking-wide">{category}</h2>
                            <div className={category === 'Wine' ? "space-y-6" : "columns-1 tablet:columns-2 tablet-lg:columns-2 md:gap-12 lg:gap-16"}>
                                {renderItemList(items, category)}
                            </div>
                        </section>
                    )
                ))}
                {Object.values(displayData).every(items => items.length === 0) && (
                    <p className="text-center text-[#33312B] mt-10">No items found for this category.</p>
                )}
            </div>
        </div>
    );
}

export default Menu;