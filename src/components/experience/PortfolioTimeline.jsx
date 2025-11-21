import React from "react";
import { Timeline } from "../ui/timeline";
import "./portfolio-timeline.css";
import hrc from "../../assets/highradius.png"

export function PortfolioTimeline() {
    const data = [
        {
            title: "2025",
            duration: "Feb 2025 - Present",
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
                        Built a cloud-agnostic inference framework using Kubernetes, FastAPI, Docker, MySQL, and AES-256 encryption,
                        supporting multiple AI/ML use cases.
                        Developed the testing framework using pyTest and integrated wiht  CI-CD Pipeline for AI Product testing inorder to enhance the code quality.
                    </p>
                    <div className="glass-card">
                        <div >
                            <h4 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>Key Achievements:</h4>
                            <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1">
                                <li>Migrated infra from ECS (AWS) and Docker Swarm to Kubernetes + ArgoCD, reducing cloud costs by $200/month and
                                    speeding deployments by 40%.</li>
                                <li>Implemented Database-as-Config architecture for dynamic GenAI use case onboarding.</li>
                                <li>Developed a Dependency Injection Framework using `aglyph` for isolated testing.</li>
                                <li> Created a YAML-config offline API Testing Suite (CLI + UI + WebSocket) with regression alerts.</li>
                                <li>Wrote unit/integration tests for GenAI pipelines, ensuring production reliability.</li>
                                <li>Practiced full-cycle cloud-native engineering with CI/CD pipelines using Jenkins, Gitlab CI.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            duration: "July 2024 - Jan 2025",
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
                                    ASE 1
                                </h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 border border-purple-500/30 mb-0.1">Full-Time</span>
                            </div>
                            <p className="text-sm text-neutral-400">Highradius Technologies</p>
                        </div>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base mb-4">
                        Developed multiple Generative AI use cases that automated finance collection, reducing manual collector effort.
                    </p>
                    <div className="glass-card">
                        <div >
                            <h4 className="font-semibold mb-2" style={{ color: "var(--color-primary)" }}>Key Achievements:</h4>
                            <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1">
                                <li>Delivered Smart Email Composer with RAG to generate contextual replies, reducing drafting time by ~60%.</li>
                                <li>Built and deployed Email Intent Classifier & Entity Extractor using DistilBERT & spaCy, auto-triaging 1000+ emails/day.</li>
                                <li>Engineered Call Summary & Action Generator automating post-call notes, reducing effort by ~80%.</li>
                                <li>Designed Best Time to Call/Email engine using feature scoring to optimize customer communication.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023-2024",
            duration: "June 2023 - June 2024",
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
