"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
            <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
                    />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Oops! Something went wrong.
                </h2>
                <p className="text-gray-600 mb-6">
                    We encountered an unexpected error.
                    Please try again.
                </p>
                <button
                    onClick={() => reset()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
