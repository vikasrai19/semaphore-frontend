// ScorePage.js
import React from 'react';

export default function UpdateScores() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center font-dosisRegular">
            <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">

                {/* Select Round */}
                <div className="mb-8">
                    <label className="text-black text-lg font-dosisMedium mb-2 block">Select Round</label>
                    <div className="flex w-56 items-center border border-black rounded-lg overflow-hidden px-4 py-2">
                        <span className="text-gray-500">
                        <img src="/icons/round.png" className='size-8' alt="Score Icon" />
                        </span>
                        <select className="ml-3 w-40 outline-none font-dosisLight">
                            <option>Round 1</option>
                            <option>Round 2</option>
                            <option>Round 3</option>
                        </select>
                    </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-4 gap-8 text-center font-dosisBold text-black mb-4">
                    <div>S.I No</div>
                    <div>Team Name</div>
                    <div>College Name</div>
                    <div>Score</div>
                </div>

                {/* Table Rows */}
                {Array(4).fill("").map((_, index) => (
                    <div key={index} className="grid grid-cols-4 gap-8 items-center text-center mb-4">
                        <div className="font-dosisMedium">S.I No</div>
                        <div className="font-dosisMedium">Team Name</div>
                        <div className="font-dosisMedium">College Name</div>
                        <div className="flex items-center border border-black rounded-md overflow-hidden w-40">
                            <span className="text-gray-600   p-4">
                                <img className='size-6 w-10' src="/icons/score.png" alt="Score Icon" />
                            </span>
                            <input type='number'
                                placeholder='Enter Score'
                                className="flex w-full outline-none items-center justify-center rounded-md px-1 py-1 font-dosisMedium" />
                        </div>
                    </div>
                ))}

                {/* Update Button */}
                <div className="flex justify-start mt-8">
                    <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-dosisBold hover:bg-blue-700 transition duration-300">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
