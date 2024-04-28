import React from "react";

const timeline = [
    {
        step: 1,
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    },
    {
        step: 2,
        title: "Voluptate repudiandae",
        para: "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    },
    {
        step: 3,
        title: "Architecto nihil",
        para: "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    },
    {
        step: 4,
        title: "Geritecto velit",
        para: "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    },
];

const S1 = () => {
    return (
        <section className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl text-left">
                    <p className="text-base font-semibold leading-7 text-blue-700">
                        Get familiar with our process
                    </p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        How it works
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua.
                    </p>
                </div>

                <div className="mx-auto mt-6 grid grid-cols-1 gap-8 lg:mx-0 lg:grid-cols-4">
                    {timeline.map((item, i) => (
                        <div key={i}>
                            <time
                                dateTime="2021-08"
                                className="flex items-center text-sm font-bold leading-7 text-blue-700"
                            >
                                <svg
                                    viewBox="0 0 4 4"
                                    className="mr-4 h-1 w-1 flex-none"
                                    aria-hidden="true"
                                >
                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                </svg>
                                <span className="w-16 lg:w-auto">Step {item.step}</span>
                                <div className="static ml-2 h-[1px] w-full bg-gray-300 sm:ml-4 lg:ml-5 lg:mr-[-1.5rem] lg:w-auto lg:flex-auto "></div>
                            </time>
                            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800">
                                {item.title}
                            </p>
                            <p className="mt-2 text-[0.925rem] leading-6 text-gray-600">
                                {item.para}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default S1;
