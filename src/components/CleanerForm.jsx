import React, { useState } from 'react';

const CleanerForm = ({ onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    🎉
                </div>
                <h4 className="text-xl font-bold mb-2">Application Received!</h4>
                <p className="text-gray-600 mb-6">Our team will review your application and contact you for the next training batch.</p>
                <button className="btn btn-primary full-width" onClick={onClose}>Done</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" required placeholder="Sesuai KTP" />
            </div>

            <div className="form-group">
                <label className="form-label">Phone Number (WhatsApp)</label>
                <input type="tel" className="form-input" required placeholder="08..." />
            </div>

            <div className="form-group">
                <label className="form-label">Current Job / Location</label>
                <input type="text" className="form-input" required placeholder="e.g. Office Boy at Menara XYZ" />
            </div>

            <div className="form-group">
                <label className="form-label">Do you have experience with dogs or cats?</label>
                <select className="form-select" required>
                    <option value="">Select option...</option>
                    <option value="yes_own">Yes, I own/have owned a pet</option>
                    <option value="yes_other">Yes, I've handled other people's pets</option>
                    <option value="no">No, but I love animals and want to learn</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Available Working Hours</label>
                <input type="text" className="form-input" required placeholder="e.g. After 5 PM, Weekends" />
            </div>

            <div className="form-actions">
                <button type="button" className="btn btn-secondary-outline" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
            </div>
        </form>
    );
};

export default CleanerForm;
