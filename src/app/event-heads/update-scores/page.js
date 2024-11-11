// ScorePage.js
"use client"
import { DropDown } from '@/components/dropdown';
import { useQueryConfig } from '@/config/useQuery.config';
import { useCached } from '@/hooks/useCached';
import { useGetData } from '@/hooks/useGetData';
import React, { useEffect, useState } from 'react';

export default function UpdateScores() {

    const [teamData, setTeamData] = useState([])
    const { cached } = useCached('isAuthenticated')

    const { data: totalRounds, isLoading: isTotalRoundsLoading } = useGetData(
        `totalRounds`,
        `${process.env.NEXT_PUBLIC_URL}/web/api/events/v1/GetEventMaxRounds?${cached?.userId}`,
        useQueryConfig
    )

    
    

    useEffect(() => {
        async function fetchData() {
            setTeamData(
                [
                    {
                        si: '001',
                        name: 'Strangers',
                        college: 'Nitte',
                        score: 10
                    },
                    {
                        si: '001',
                        name: 'Strangers',
                        college: 'NMAMIT Nitte karkala',
                        score: 0
                    },
                    {
                        si: '001',
                        name: 'Strangers',
                        college: 'Nitte',
                        score: 0
                    }
                ]
            )
        }
        fetchData();    
            console.log(cached?.userId);

    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setformData({ score: value })   
    }


    return (
        <div className="bg-gray-100 flex items-center justify-center font-dosisRegular">
            <div className="bg-white w-full p-8 rounded-lg shadow-md">

                {/* Select Round */}

                <div className="mb-8 w-48">
                    <DropDown
                        name={'round'}
                        label="Select Round"
                        DropDownItems={Array(totalRounds).fill('')?.map((ele, index) => {
                            return {
                                label: 'Round ' + (index+1),
                                value: 'Round ' + (index+1),
                            }
                        })}
                        placeholder={'Select Round'}
                    />
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-4 gap-8 text-center font-dosisBold text-black mb-4">
                    <div>S.I No</div>
                    <div>Team Name</div>
                    <div>College Name</div>
                    <div>Score</div>
                </div>



                {/* Table Rows */}
                {teamData.map((team, index) => (
                    <div key={index} className="grid grid-cols-4 gap-8 items-center text-center mb-4">
                        <div className="font-dosisMedium">{team.si}</div>
                        <div className="font-dosisMedium">{team.name}</div>
                        <div className="font-dosisMedium">{team.college}</div>
                        <div className="flex items-center border border-black rounded-md overflow-hidden w-40">
                            <span className="text-gray-600   p-4">
                                <img className='size-6 w-10' src="/icons/score.png" alt="Score Icon" />
                            </span>
                            <input type='number'
                                name = 'score'
                                value = {team.score}
                                onChange={handleInputChange}
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
