import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-48 h-48 mb-8">
                {/* Planeta */}
                <div className="absolute inset-0 bg-textTitle rounded-full"></div>
                {/* Crateres */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-textAll rounded-full"></div>
                <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-textAll rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-textAll rounded-full"></div>
                {/* Signo de interrogación */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-palleteOrange">?</span>
                </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-textTitle">Planet Not Found</h1>
            <p className="text-xl mb-8 text-center text-textAll">Oops! It seems this cosmic destination doesn't exist.</p>
            <Link href="/" className="px-6 py-3 bg-palleteOrange rounded-full hover:bg-palleteOrangeVariant transition-colors">
                Return to Home Galaxy
            </Link>
        </div>
    );
}