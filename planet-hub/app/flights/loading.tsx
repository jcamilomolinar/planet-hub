import React from 'react';

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center ">
            <div className="relative w-64 h-64">
                {/* Portal exterior */}
                <div className="absolute inset-0 bg-purple-600 rounded-full opacity-50 animate-pulse"></div>

                {/* Portal interior */}
                <div className="absolute inset-4 bg-blue-500 rounded-full opacity-75 animate-spin-slow"></div>

                {/* Estrellas */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 1.5}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Texto de carga */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-2xl font-bold animate-pulse">Loading...</p>
                </div>
            </div>
        </div>
    );
}