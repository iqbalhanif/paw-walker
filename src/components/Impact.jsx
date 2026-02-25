import React from 'react';
import './Impact.css';

const Impact = () => {
    return (
        <section id="impact" className="impact section">
            <div className="container">
                <div className="impact-container">
                    <div className="impact-content animate-fade-in-up">
                        <h2 className="section-title text-white">The <span className="text-secondary">Social Impact</span></h2>
                        <p className="impact-description">
                            By choosing Paw Walker, you're not just getting a premium service—you're directly contributing to the economic empowerment of hardworking individuals.
                        </p>

                        <div className="impact-stats text-white">
                            <div className="stat-box">
                                <div className="stat-number text-secondary">Rp 2-4M</div>
                                <div className="stat-label">Extra Monthly Income <br />per Cleaner</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number text-secondary">100+</div>
                                <div className="stat-label">Cleaners Empowered <br />This Year</div>
                            </div>
                        </div>

                        <button className="btn btn-secondary mt-6">See Financial Transparency</button>
                    </div>

                    <div className="impact-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Split layout showing a clear income breakdown */}
                        <div className="income-breakdown glass-dark">
                            <h3 className="breakdown-title text-center mb-4">Where Your Money Goes</h3>

                            <div className="breakdown-chart">
                                <div className="chart-bar cleaner-share">
                                    <span className="share-percent">80%</span>
                                    <span className="share-label">To The Walker</span>
                                </div>
                                <div className="chart-bar platform-share">
                                    <span className="share-percent">20%</span>
                                    <span className="share-label">Platform & Insurance</span>
                                </div>
                            </div>

                            <div className="breakdown-details text-sm mt-4">
                                <p>For a standard Rp 50,000 session:</p>
                                <ul className="details-list">
                                    <li><strong>Rp 40,000</strong> goes directly to the cleaner</li>
                                    <li><strong>Rp 10,000</strong> covers app maintenance, GPS tracking, and safety insurance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
