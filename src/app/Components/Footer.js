import React from "react";

const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm">
                &copy; {new Date().getFullYear()} Movie Search App. All rights reserved.
            </span>
            <div className="flex space-x-4 mt-2 md:mt-0 text-xs">
                <a
                    href="https://github.com/john-papani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    GitHub
                </a>
                <a
                    href="https://www.omdbapi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    OMDb API
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;