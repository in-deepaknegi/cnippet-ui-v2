import React from "react";

const S3 = () => {
    return (
        <section className="py-8 lg:py-16">
            <div className="mx-auto max-w-full px-4 md:max-w-[95%] lg:px-8">
                <div
                    className="relative isolate overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-400"
                    style={{
                        backgroundImage: "url('/images/hero/h13.jpg')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="absolute z-[-9] h-full w-full bg-gradient-to-t from-black/30 to-black/40"></div>

                    <div className="mx-auto flex flex-col justify-between gap-y-5 px-6 py-8 text-center md:gap-x-10 md:py-20 lg:flex-row lg:px-8 lg:text-left">
                        <h2 className="text-4xl font-semibold text-white md:text-6xl">
                            Website development
                        </h2>
                        <p className="mt-auto max-w-xl text-center text-base text-gray-100 md:text-right md:text-lg">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                            fugiat aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default S3;
