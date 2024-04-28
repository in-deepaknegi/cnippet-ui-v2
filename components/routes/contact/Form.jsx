import React from 'react'

const Form = () => {
    return (
        <section className='isolate relative overflow-hidden'>
            <div className='mx-auto grid max-w-[90%] grid-cols-1 py-20 lg:grid-cols-2'>
                <div className='relative px-6 lg:px-8'>
                    <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
                        <h2 className='text-4xl font-medium'>Get in touch</h2>
                        <p className='mt-4 text-gray-700'>
                            We&apos;d love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out.
                        </p>
                        <dl className='mt-10 text-base text-gray-700 space-y-8'>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-600 my-auto'><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
                                <dd>
                                    House no 7, Thano Road, Tarli Jolly <br />
                                    Bhaniyawala, Dehradun <br />
                                    Uttarakhand 248140
                                </dd>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-600 my-auto'><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <dd>
                                    <a href="tel:+91 74569 63166">+91 74569 63166</a>
                                </dd>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-600 my-auto'><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                <dd>
                                    <a href="mailto: ui@cnippet.com">
                                        ui@cnippet.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form className="form space-y-5 max-w-xl px-4 mx-auto">
                    <div>
                        <label htmlFor="name" >Your name</label>
                        <input
                            type="name"
                            id="name"
                            placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" >Your email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@gmail.com"
                            required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" >Your message</label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Leave a comment..."></textarea>
                    </div>

                    <p className='text-sm text-gray-700'>
                        By submitting this form you agree to our
                        <span className='font-semibold'>
                            <a href="/terms"> terms and conditions </a>
                        </span>
                        and our
                        <span className='font-semibold'>
                            <a href="/privacy"> privacy policy</a>
                        </span>.
                    </p>

                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-black text-white rounded-lg sm:w-fit">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Form