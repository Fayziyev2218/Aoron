import email from '../../assets/img/email.svg';
import phoneIcon from '../../assets/img/phone.svg';
import address from '../../assets/img/adress.svg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import axios from 'axios';


export default function Contact() {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = (event) => {
        event.preventDefault();
        setLoading(true)
        
        const token = "7801450411:AAG3jLP4DiATGm2t_gCqt3FqV5Bw50mhmP8";
        const chat_id = 6135129095;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comments = document.getElementById("comments").value;
        const message = `Ismi: ${name} \nEmail: ${email} \nPhone: ${phone} \nComment: ${comments}`;

        axios({
            url: url,
            method: "POST",
            data: {
                "chat_id": chat_id,
                "text": message,
            }
        }).then((res) => {
            document.getElementById("myForm").reset();
            alert("Muvaffaqiyatli yuborildi");
        }).catch((error) => {
            console.log("Yuborishda xato", error);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <section>
            {/* Title */}
            <div className="py-10 mt-3 md:py-16 bg-[rgb(244,244,245)]">
                <div className="font-inter container mx-auto px-4 text-center">
                    <h1 className="text-4xl mb-4">
                        Contact Us
                    </h1>
                    <p className="max-w-lg mx-auto text-gray-600 text-[17px]">
                        Get in touch with us for any questions about our products or services.
                    </p>
                </div>
            </div>

            {/* Input Information */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="md:col-span-1 font-inter">
                            <h2 className="text-xl font-bold mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    {/* icon */}
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                                        <img src={email} alt="email icon" />
                                    </div>
                                    {/* info */}
                                    <div>
                                        <h3 className='font-bold text-sm'>Email</h3>
                                        <p className='text-gray-600 temr-1'>msmukhlisss@gmail.com</p>
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    {/* icon */}
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                                        <img src={phoneIcon} alt="Phone icon" />
                                    </div>
                                    {/* info */}
                                    <div>
                                        <h3 className='font-bold text-sm'>Phone</h3>
                                        <p className='text-gray-600 temr-1'>+998887666051</p>
                                        <p className='text-gray-600 temr-1'>Mon-Fri, 9am-6pm</p>
                                    </div>
                                </div>
                                {/* Adress */}
                                <div className="flex items-start space-x-4">
                                    {/* icon */}
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                                        <img src={address} alt="Adress icon" />
                                    </div>
                                    {/* info */}
                                    <div>
                                        <h3 className='font-bold text-sm'>Address</h3>
                                        <p className='text-gray-600 temr-1'>Toshkent,Yunusobod</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="md:col-span-2 font-inter">
                            <h2 className='text-xl font-bold mb-6'>
                                Contact Form
                            </h2>
                            <form className='space-y-6' onSubmit={sendMessage} id="myForm">
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    <div>
                                        <label htmlFor="name"
                                            className='block text-sm font-bold mb-2'>
                                            Name
                                        </label>
                                        <input type="text" id='name' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1' />
                                    </div>
                                    <div>
                                        <label htmlFor="name"
                                            className='block text-sm font-bold mb-2'>
                                            Email
                                        </label>
                                        <input type="text" id='email' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone"
                                        className='block text-sm font-bold mb-2'>
                                        Phone
                                    </label>
                                    <PhoneInput
                                        country={'uz'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                        enableSearch={true}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="comments"
                                        className='block text-sm font-bold mb-2'>
                                        Message
                                    </label>
                                    <textarea name="comments" id="comments" rows={5}
                                        className='w-full px-3 py-2 border border-input border-gray-300 rounded-md focus:outline-none focus:ring-1 ' required></textarea>
                                </div>
                                <button
                                    disabled={loading}
                                    type='submit'
                                    className='bg-black text-white py-2 rounded-lg flex items-center justify-center min-w-[150px]'>
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="py-16 bg-[rgb(244,244,245)]">
                <div className="container mx-auto px-4">
                    <h2 className="text-[32px] font-inter mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg">
                            <h3 className="font-medium text-lg mb-3">
                                How do I find my size?
                            </h3>
                            <p className="text-gray-600">
                                You can refer to our size guide which is available on each product page. If you're still unsure, feel free to contact our customer support team for assistance.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg">
                            <h3 className="font-medium text-lg mb-3">
                                What is your return policy?
                            </h3>
                            <p className="text-gray-600">
                                We offer a 30-day return policy for unworn items in their original packaging. Please visit our Returns & Exchanges page for more details.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}