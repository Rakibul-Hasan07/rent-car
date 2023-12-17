"use client"

import Image from "next/image";
import FaqsCard from "./Accordion";
import Accordion from "./Accordion";

const FaqSection = () => {
    const faqsList = [
        {
            question: "How old do I need to be to rent a car?",
            answer: "The minimum age requirement for renting a car varies by rental company and location, but it is typically between 21 and 25 years old. Drivers under the age of 25 may be subject to a young driver surcharge.",
        },
        {
            question: "What documents do I need to rent a car?",
            answer: "To rent a car, you generally need a valid driver's license, a credit card in the renter's name, and, in some cases, proof of insurance. International renters may also need to provide a passport and an international driving permit.",
        },
        {
            question: "Can I rent a car with a debit card?",
            answer: "Many car rental companies accept debit cards, but policies vary. Some may require a credit check, additional identification, or place a hold on funds in your account. It's advisable to check with the specific rental company for their debit card policy.",
        },
        {
            question: "What is included in the rental price?",
            answer: "The rental price typically includes the base rental fee and mileage. Additional charges may apply for extras such as insurance, fuel, GPS, and car seats. It's essential to review the rental agreement to understand all associated costs.",
        },
        {
            question: "Can I return the car to a different location?",
            answer: "Yes, many rental companies offer the option of one-way rentals, allowing you to pick up the car at one location and return it to another. Keep in mind that one-way rentals may incur additional fees, and availability depends on the rental company and locations involved.",
        }

    ];

    return (
        <section className="leading-relaxed my-16 px-4 md:px-8 mx-10 bg-white">
            <div className="space-y-3 text-center">
                <h1 className="lg:text-2xl text-xl text-gray-800 font-semibold dark:text-gray-200">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 text-base dark:text-gray-300">
                    Answered all frequently asked questions, Still confused? feel free to
                    contact us.
                </p>
            </div>
            <div className="lg:flex items-center">
                <div className="flex-1">
                    <Image src='/faq.jpg'  height={560} width={560} alt="faq" />
                </div>
                <div className="mt-14 max-w-7xl flex-1">
                    {faqsList.map((item, index) => (
                        <Accordion key={index} faqsList={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqSection;