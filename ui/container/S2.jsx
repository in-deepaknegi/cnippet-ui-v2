import React from 'react'

const S2 = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                <div className="mx-auto space-x-0 space-y-10 md:flex md:space-x-10 md:space-y-0 lg:mx-0 lg:max-w-none">
                    <div className="w-full max-w-full lg:max-w-sm lg:flex-shrink">
                        <div className="bg-stripes-blue h-[50vh] w-full rounded-2xl border"></div>
                    </div>

                    <div className="flex w-full justify-end sm:justify-start sm:gap-8 lg:max-w-full lg:gap-6">
                        <div className="bg-stripes-green h-[50vh] w-full rounded-2xl border"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default S2