import React from 'react';

const EventDetails = () => {
    return (
        <div className="bg-white rounded-lg p-5 shadow-md mx-0.5my-1">
            <div className="border-b pb-2 mb-4">
                <h2 className="text-2xl font-dosisBold font-semibold text-gray-800">Event Details</h2>
            </div>
            <div className="mb-4">
                <p className="text-lg font-dosisMedium text-gray-700"><strong>Title:</strong> Stratagem</p>
                <p className="text-lg font-dosisMedium text-gray-700"><strong>Event:</strong> IT Manager</p>
            </div>
            <div>
                <h3 className="text-xl font-dosisBold font-medium text-gray-800 mb-2">Rules</h3>
                <ul className="list-none font-dosisRegular space-y-2 text-gray-700 text-base">
                    <li>1. This is some random rule 1 for design</li>
                    <li>2. This is some random rule 2 for design</li>
                    <li>3. This is some random rule 3 for design</li>
                    <li>4. This is some random rule 4 for design</li>
                </ul>
            </div>
        </div>
    );
};

export default EventDetails;
