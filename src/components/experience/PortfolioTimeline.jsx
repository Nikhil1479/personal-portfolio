import React from "react";
import { Timeline } from "../ui/timeline";
import "./portfolio-timeline.css";
import hrc from "../../assets/highradius.png"

export function PortfolioTimeline() {
    const data = [
        {
            title: "2024",
            duration: "July 2024 - Present",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4 timeline-header">
                        <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden bg-white transition-transform duration-300 hover:scale-110 hover:shadow-xl">
                            <img
                                src={hrc}
                                alt="Company Logo"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-xl font-bold" style="color: var(--color-primary)">HRC</span>';
                                }}
                            />
                        </div>
                        <div>
                            <div className="flex items-end gap-2 flex-wrap">
                                <h3 className="text-xl md:text-2xl font-bold mt-1 transition-colors duration-300 hover:text-purple-400" style={{ color: "var(--color-primary)" }}>
                                    SDE 1
                                </h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 border border-purple-500/30 mb-0.1">Full-Time</span>
                            </div>
                            <p className="text-sm text-neutral-400">Highradius Technologies</p>
                        </div>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        Leading full-stack development projects using React, Node.js, and modern web technologies.
                        Implemented CI/CD pipelines and mentored junior developers.
                    </p>
                    <div className="glass-card">
                        <div >
                            <h4 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>Key Achievements:</h4>
                            <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1">
                                <li>Deployed 10+ production applications</li>
                                <li>Improved app performance by 40%</li>
                                <li>Mentored 5 junior developers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023-2024",
            duration: "January 2023 - June 2024",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4 timeline-header">
                        <div className="bg-white w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-xl">
                            <img
                                src={hrc}
                                alt="Company Logo"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-xl font-bold" style="color: var(--color-primary)">HRC</span>';
                                }}
                            />
                        </div>
                        <div>
                            <div className="flex items-end gap-2 flex-wrap">
                                <h3 className="text-xl md:text-2xl font-bold mt-1 transition-colors duration-300 hover:text-green-400" style={{ color: "var(--color-primary)" }}>
                                    Product Engineering Intern
                                </h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 mb-0.1">Internship</span>
                            </div>
                            <p className="text-sm text-neutral-400">Highradius Technologies</p>
                        </div>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        <div>Developed a B2B Invoice Management System using React, Java Servlets, and JDBC with ML-powered predictions. </div>
                        <div>Built a Receivables Dashboard on AWS EC2 with visualization, editing, and live inference. </div>
                    </p>
                    <div className="glass-card">
                        <h4 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="glass-btn text-xs px-3 py-1">React</span>
                            <span className="glass-btn text-xs px-3 py-1">Node.js</span>
                            <span className="glass-btn text-xs px-3 py-1">MongoDB</span>
                            <span className="glass-btn text-xs px-3 py-1">TypeScript</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            duration: "May 2023 - July 2023",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4 timeline-header">
                        <div className="bg-white w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-xl">
                            <img
                                src={hrc}
                                alt="HRC Logo"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-xl font-bold" style="color: var(--color-primary)">HRC</span>';
                                }}
                            />
                        </div>
                        <div>
                            <div className="flex items-end gap-2 flex-wrap">
                                <h3 className="text-xl md:text-2xl font-bold mt-1 transition-colors duration-300 hover:text-orange-400" style={{ color: "var(--color-primary)" }}>
                                    Summer Intern
                                </h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 mb-0.1">Internship</span>
                            </div>
                            <p className="text-sm text-neutral-400">Highradius Technologies</p>
                        </div>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        Designed a fullstack AI Enabled Invoice Management System.
                    </p>
                    <div className="glass-card">
                        <h4 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>Projects Completed:</h4>
                        <div className="space-y-2 text-neutral-300 text-sm">
                            <div>Engineered a predictive invoice module using ML to forecast order amounts.</div>
                            <div>Integrated frontend and backend for dynamic invoice updates. </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="w-full" id="timeline">
            <Timeline data={data} />
        </section>
    );
}

export default PortfolioTimeline;
