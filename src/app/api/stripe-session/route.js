import { NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2023-10-16"
})

export async function POST(request, content) {
    const data = await request.json()
    console.log(data)
    let id;
    try {
        const session = await stripe.checkout.sessions.create({
            submit_type: 'pay',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [{ shipping_rate: "shr_1OLMkgGvvGbckSIaJWF0x6kd" }, { shipping_rate: "shr_1OLMGeGvvGbckSIaueCrTFdE" }],
            line_items: data.map((item) => {
                 id = item._id;
                return {
                    price_data: {
                        currency: 'bdt',
                        product_data: {
                            name: item.brandName
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                        maximum: 10,
                    },
                    quantity: 1
                }
            }),
            phone_number_collection: {
                enabled: true,
            },
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/stripe/success/${id}`,
            cancel_url: `${request.headers.get('origin')}/stripe/canceled`,
        });
        return NextResponse.json(session)
    } catch (err) {
        return NextResponse.json(err.message)
    }
}