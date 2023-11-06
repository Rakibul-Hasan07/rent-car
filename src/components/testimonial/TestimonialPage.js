import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialPage = () => {
    return (
        <div>
            {
                [...Array(4)].map((item, idx) => <div key={idx}>
                    <TestimonialCard />
                </div>)
            }
        </div>
    );
};

export default TestimonialPage;