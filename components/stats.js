"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
    {
        num: 3,
        text: "Years Of Experience",
    },
    {
        num: 17,
        text: "Core Skills",
    },
    {
        num: 6,
        text: "Programming IDE's Worked On",
    },
    {
        text: "Deans List Student", // No number for this item
    },
    {
        text: "GPA 3.5", // No number for this item
    },
    {
        text: "Graduation | Spring 2026", // No number for this item
    },
];

const Stats = () => {
    return (
        <section className="flex flex-col items-center justify-center py-12 bg-transparent">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">My Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Render stats with numbers */}
                    {stats
                        .filter((itm) => itm.num !== undefined)
                        .map((itm, index) => (
                            <div key={index} className="text-center">
                                <div className="flex flex-col items-center">
                                    <p className="text-lg xl:text-xl font-semibold mb-1">{itm.text}</p>
                                    <CountUp
                                        end={itm.num}
                                        duration={5}
                                        delay={2}
                                        className="text-4xl xl:text-6xl font-extrabold text-accent"
                                    />
                                </div>
                            </div>
                        ))}
                </div>

                {/* Render bullet points for stats without numbers */}
                <div className="mt-12"> {/* Increased margin-top here */}
                    <ul className="list-disc list-inside pl-4 md:pl-0">
                        {stats
                            .filter((itm) => itm.num === undefined)
                            .map((itm, index) => (
                                <li key={index} className="text-lg xl:text-xl font-medium mb-2">
                                    {itm.text}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Stats;
