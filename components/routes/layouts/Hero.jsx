import React from "react";

const Header = () => {
    return (
        <section className="bg-white py-8 font-swim lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-lg leading-7 text-blue-700">
                        Get the help you need
                    </p>
                    <h2 className="mt-3 text-4xl text-gray-900 md:text-5xl">
                        Page Layouts
                    </h2>
                    <p className="mt-6 text-base leading-8 text-gray-500 md:text-lg">
                        Enhance your understanding of page layout with the help of our
                        comprehensive resource that includes informative articles, detailed
                        tutorials, and practical examples to assist you in mastering this
                        crucial aspect of design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;
