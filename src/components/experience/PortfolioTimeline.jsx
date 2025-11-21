import React from "react";
import { Timeline } from "../ui/timeline";
import "./portfolio-timeline.css";
import hrc from "../../assets/highradius.png"

export function PortfolioTimeline() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden bg-white">
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
                            <h3 className="text-xl md:text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
                                Software Developer Engineer 1
                            </h3>
                            <p className="text-sm text-neutral-400">Highradius Technologies</p>
                        </div>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        Leading full-stack development projects using React, Node.js, and modern web technologies.
                        Implemented CI/CD pipelines and mentored junior developers.
                    </p>
                    <div className="description__container">
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
            title: "2023",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden">
                            <img
                                src="/path/to/company2-logo.png"
                                alt="Company Logo"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-xl font-bold" style="color: var(--color-primary)">SD</span>';
                                }}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
                                Full Stack Developer
                            </h3>
                            <p className="text-sm text-neutral-400">Startup Digital</p>
                        </div>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        Developed responsive web applications with focus on user experience and performance optimization.
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
            title: "2022",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden">
                            <img
                                src="/path/to/company3-logo.png"
                                alt="Company Logo"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-xl font-bold" style="color: var(--color-primary)">WS</span>';
                                }}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
                                Frontend Developer
                            </h3>
                            <p className="text-sm text-neutral-400">Web Solutions Ltd.</p>
                        </div>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        Started my journey in web development, building beautiful and functional user interfaces.
                    </p>
                    <div className="glass-card">
                        <h4 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>Projects Completed:</h4>
                        <div className="space-y-2 text-neutral-300 text-sm">
                            <div>✅ E-commerce Platform</div>
                            <div>✅ Portfolio Website</div>
                            <div>✅ Task Management App</div>
                            <div>✅ Weather Dashboard</div>
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
