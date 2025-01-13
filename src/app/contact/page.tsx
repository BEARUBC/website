"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    // Define state for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccess(false);
        setError('');

        emailjs.send(
            'service_lnzgalg', 
            'template_exboetd', 
            {
                from_name: name,
                user_email: email,
                message: message,
            }, 
            'pspAjmXYiG5FH5XFz'
        )
            .then(() => {
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                setError('Failed to send message. Please try again later.');
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <main className="relative flex flex-col items-center justify-center">
            <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
                <p className="text-xs text-secondary tracking-widest">CONTACT US</p>
                <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Any Questions?</h2>
                <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
                    Don&apos;t hesitate to reach out to us directly! Our team will get back to you as soon as possible. Please email us at ubcbionicsteam@gmail.com for urgent inquiries, or if you don't hear back within a few days.
                </p>
            </section>

            <section className="w-full flex flex-col items-start px-8 w-full md:w-5/6">
                <form onSubmit={handleSubmit} className="w-full">
                    <p className="text-sm">Your name</p>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="w-full p-2 mb-4 border border-primary rounded-md bg-neutral-100" 
                        required 
                    />
                    <p className="text-sm">Your email address <span className="text-xs font-light">(We need this so we can get back to you!)</span></p>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full p-2 mb-4 border border-primary rounded-md bg-neutral-100" 
                        required 
                    />
                    <p className="text-sm">Your message</p>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        className="w-full p-2 mb-4 border border-primary rounded-md bg-neutral-100" 
                        required 
                    />
                    <button 
                        type="submit" 
                        className="bg-secondary hover:bg-ternary text-white p-2 px-16 rounded-md"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send!'}
                    </button>
                </form>
                {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </section>
        </main>
    );
}

export default Contact;