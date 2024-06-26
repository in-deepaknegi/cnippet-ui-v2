"use client";
import React, { useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import FetchPro from "@/atoms/library/getPro";
import { useRouter } from "next/navigation";

declare global {
    interface Window {
        Razorpay: any;
    }
}

const Pricing = () => {
    const { status, data: session } = useSession();
    const email = session?.user?.email;
    const { pro, loading } = FetchPro(email);
    const [msg, setMsg] = useState("Get Access");

    const router = useRouter();

    const [amount, setAmount] = useState("1000");
    const [currency, setCurrency] = useState("INR");
    const [load, setLoad] = useState(false);
    const [coupon, setCoupon] = useState("");
    const [discountedAmount, setDiscountedAmount] = useState(amount);
    const [cmsg, setCmsg] = useState("");

    const createOrderId = async () => {
        setLoad(true);

        try {
            const response = await fetch("/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: parseFloat(discountedAmount) * 100,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setLoad(false);

            const data = await response.json();
            return data.orderId;
        } catch (error) {
            console.error("There was a problem with your fetch operation:", error);
        }
    };

    const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const orderId: string = await createOrderId();
            const options = {
                key: process.env.key_id,
                amount: parseFloat(discountedAmount) * 100,
                currency: currency,
                name: "Cnippet",
                description: "description",
                order_id: orderId,
                handler: async function (response: any) {
                    setLoad(true);

                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        email: session?.user?.email,
                    };

                    const result = await fetch("/api/verify", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: { "Content-Type": "application/json" },
                    });
                    const res = await result.json();
                    if (res.isOk) {
                        console.log("payment succeed");
                        router.push("/components");
                        setMsg("Payment Successfull");
                        setLoad(false);
                    } else {
                        console.log(res.message);
                    }
                },
                // prefill: {
                //     name: name,
                //     email: email,
                // },
                // theme: {
                //     color: '#3399cc',
                // },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.on("payment.failed", function (response: any) {
                console.log(response.error.description);
            });
            paymentObject.open();
        } catch (error) {
            console.log(error);
        }
    };

    const applyCoupon = () => {
        if (coupon === "WELCOME50") {
            setDiscountedAmount((parseFloat(amount) / 2).toString());
            setCmsg("Coupon applied successfully! You got a 50% discount.");
        } else {
            setDiscountedAmount(amount);
            setCmsg("Invalid coupon");
        }
    };

    return (
        <>
            {loading ? (
                <div className=" mx-auto mt-10 flex max-w-[90%] items-center justify-center py-20">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    {!pro && (
                        <>
                            <Script
                                id="razorpay-checkout-js"
                                src="https://checkout.razorpay.com/v1/checkout.js"
                            />
                            <section
                                id="payment"
                                className="bg-white py-24 font-swim sm:py-28"
                            >
                                <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                                    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                                        <div className="p-8 sm:p-10 lg:flex-auto">
                                            <h2 className="font-swim text-3xl text-gray-900 sm:text-4xl">
                                                Yearly membership
                                            </h2>

                                            <p className="mt-6 font-swir text-lg text-slate-600">
                                                Start using our exceptional and reliable services today
                                                and take your business to the next level of success and
                                                growth.
                                            </p>
                                            <div className="mt-10 flex items-center gap-x-4">
                                                <h3 className="flex-none text-md text-blue-700">
                                                    What&apos;s included
                                                </h3>
                                                <div className="h-px flex-auto bg-gray-100"></div>
                                            </div>
                                            <ul
                                                role="list"
                                                className="mt-8 grid grid-cols-1 gap-4 font-swir text-md text-gray-600 sm:grid-cols-2 sm:gap-6"
                                            >
                                                <li className="flex gap-x-3">
                                                    <svg
                                                        className="h-6 w-5 flex-none text-blue-700"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    All Pro Components
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg
                                                        className="h-6 w-5 flex-none text-blue-700"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    All Pro Templates
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg
                                                        className="h-6 w-5 flex-none text-blue-700"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Entry to annual conference
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg
                                                        className="h-6 w-5 flex-none text-blue-700"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Official member t-shirt
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                            <div className="rounded-2xl bg-gray-50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                                                <form
                                                    onSubmit={processPayment}
                                                    className="mx-auto max-w-full px-10"
                                                >
                                                    <p className="text-lg text-black">
                                                        Pay once, and it&apos;s yours for a whole year.
                                                    </p>
                                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                        {/* <span className="text-3xl text-gray-600 ">
                                                            <del>&nbsp;₹999&nbsp;</del>
                                                        </span> */}
                                                        <span className="ml-3 text-5xl text-gray-900 ">
                                                            ₹{discountedAmount}
                                                        </span>
                                                        <span className="text-md  tracking-wide text-slate-800 ">
                                                            Rupee
                                                        </span>
                                                    </p>

                                                    <div className="mt-10 flex max-w-md justify-center mx-auto flex-col gap-2 md:flex-row">
                                                        <input
                                                            type="text"
                                                            value={coupon}
                                                            onChange={(e) => setCoupon(e.target.value)}
                                                            placeholder="Enter Coupon Code"
                                                            className=" max-w-xl rounded-full px-3 py-2 text-center text-md text-gray-900 shadow-sm outline-none placeholder:text-sm"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={applyCoupon}
                                                            className="w-full max-w-full rounded-full border px-1 py-2 text-center text-sm text-black shadow-sm hover:bg-black hover:text-white"
                                                        >
                                                            Apply Coupon
                                                        </button>
                                                    </div>
                                                    <div className="mt-4 font-swir text-sm">{cmsg}</div>

                                                    {email ? (
                                                        <button
                                                            type="submit"
                                                            className="mx-auto mt-6 flex w-fit items-center justify-center rounded-full bg-black px-20 py-2 text-center text-md text-white shadow-sm hover:bg-black/85"
                                                        >
                                                            {load && (
                                                                <svg
                                                                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <circle
                                                                        className="opacity-25"
                                                                        cx="12"
                                                                        cy="12"
                                                                        r="10"
                                                                        stroke="currentColor"
                                                                        strokeWidth="4"
                                                                    ></circle>
                                                                    <path
                                                                        className="opacity-75"
                                                                        fill="currentColor"
                                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                    ></path>
                                                                </svg>
                                                            )}
                                                            {msg}
                                                        </button>
                                                    ) : (
                                                        <a
                                                            href="/login"
                                                            className="mx-auto mt-10 flex w-fit items-center justify-center rounded-full bg-black px-20 py-2 text-center text-md text-white shadow-sm hover:bg-black/85"
                                                        >
                                                            {load && (
                                                                <svg
                                                                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <circle
                                                                        className="opacity-25"
                                                                        cx="12"
                                                                        cy="12"
                                                                        r="10"
                                                                        stroke="currentColor"
                                                                        strokeWidth="4"
                                                                    ></circle>
                                                                    <path
                                                                        className="opacity-75"
                                                                        fill="currentColor"
                                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                    ></path>
                                                                </svg>
                                                            )}
                                                            Log In
                                                        </a>
                                                    )}

                                                    <p className="mt-6 text-sm leading-5 text-slate-600 ">
                                                        {email
                                                            ? "Invoices and receipts available for easy company reimbursement"
                                                            : "In order to complete your order, please log in first."}
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Pricing;
