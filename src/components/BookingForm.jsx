import React, { useState } from 'react';

const BookingForm = ({ onClose }) => {
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
                    ✓
                </div>
                <h4 className="text-xl font-bold mb-2">Booking Confirmed!</h4>
                <p className="text-gray-600 mb-6">We've found a great walker for your furry friend. Check your email for details.</p>
                <button className="btn btn-primary full-width" onClick={onClose}>Done</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label">Pet Name</label>
                <input type="text" className="form-input" required placeholder="e.g. Max (Dog), Luna (Cat)" />
            </div>

            <div className="form-group">
                <label className="form-label">Breed & Size</label>
                <input type="text" className="form-input" required placeholder="e.g. Golden Retriever, Persian Cat" />
            </div>

            <div className="form-group">
                <label className="form-label">Date & Time</label>
                <input type="datetime-local" className="form-input" required />
            </div>

            <div className="form-group">
                <label className="form-label">Location (Apartment/Area)</label>
                <select className="form-select" required>
                    <option value="">Select an area...</option>
                    <option value="scbd">SCBD, Sudirman</option>
                    <option value="kuningan">Kuningan</option>
                    <option value="kemang">Kemang</option>
                    <option value="pik">PIK</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Special Instructions (Optional)</label>
                <textarea className="form-textarea" placeholder="e.g. Needs slow walking, reactive to other pets, indoor playtime only..."></textarea>
            </div>

            <div className="form-actions">
                <button type="button" className="btn btn-secondary-outline" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Booking...' : 'Confirm Book • Rp 50.000'}
                </button>
            </div>
        </form>
    );
};

export default BookingForm;
