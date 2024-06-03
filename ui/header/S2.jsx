import React from "react";

const S2 = () => {
    return (
        <section className="relative isolate bg-white py-8 lg:py-16">
            <div className="mx-auto max-w-full px-4 md:max-w-[90%] lg:px-8 ">
                <div className="flex flex-col items-center justify-between gap-y-5 py-4 text-center md:gap-x-10 lg:flex-row lg:text-left">
                    <div className="flex flex-col gap-3 md:gap-6">
                        <p className="text-center text-base font-semibold leading-7 text-blue-700 lg:text-left">
                            Get the help you need
                        </p>
                        <h2 className="text-4xl font-semibold text-gray-900 md:text-6xl">
                            Website development
                        </h2>
                    </div>
                    <p className="mt-auto max-w-xl text-center text-base text-gray-900 md:text-right md:text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua.
                    </p>
                </div>
                {/* add extra content here */}
            </div>
        </section>
    );
};

export default S2;
