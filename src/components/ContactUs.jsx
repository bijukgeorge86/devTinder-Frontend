import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ContactUs = () => {
    return (
        <div>
            <NavBar />
            <div className="w-[75%] mx-auto py-3 dark:text-white">
                <b className="flex justify-center text-3xl">
                    <h1>CONTACT US</h1>
                </b>
                <br />
                <div className=" ">
                    <div className="flex flex-col gap-y-3 text-xl">
                        <li>If any query, feel free to contact us!</li>
                        <li>
                            For any assistance and queries, mail us at{" "}
                            <span>
                                <a
                                    href="mailto:support@mydevtinder.live"
                                    target="_blank"
                                    className="text-blue-400"
                                >
                                    support@mydevtinder.live
                                </a>
                            </span>
                        </li>
                        <li>Our Operational Address is: Kerala, Kochi</li>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
