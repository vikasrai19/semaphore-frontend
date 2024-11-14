"use client"

import { DropDown } from '@/components/dropdown';
import { Loading } from '@/components/loading';
import { useQueryConfig } from '@/config/useQuery.config';
import { useCached } from '@/hooks/useCached'
import { useGetData } from '@/hooks/useGetData';
import { useSubmit } from '@/hooks/useSubmit';
import React, { useState } from 'react'

export default function accolades() {
    const {submitData, isLoading} = useSubmit(null);
    const [teamRankingData, setTeamRankingData] = useState()
    const {cached} = useCached('isAuthenticated');
    const { data: eventsData, isLoading: isEventsLoading } = useGetData(
        'eventsList',
        `${process.env.NEXT_PUBLIC_URL}/web/api/events/v1/FindAll`,
        useQueryConfig,
      );
    if(isEventsLoading) return <Loading />

    console.log(eventsData);

    const handleEventChange = async (eventId) => {
      console.log("Calling hook")
      const {data} = await submitData(
        `${process.env.NEXT_PUBLIC_URL}/web/api/mainEvent/v1/GetEventRankings`,
        {
          eventId : eventId
        }
      )
      console.log("Team Ranking data",data);
      if(data){
        setTeamRankingData(data);
      }
      };
      

    return (
        <div className="p-8 bg-white shadow rounded-lg w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-dosisBold text-gray-800">Top 3 Rankings</h2>
      </div>

      <div className="mb-4">
        <label htmlFor="event" className="block text-sm font-dosisMedium text-gray-700 mb-1">
          Event
        </label>

        <DropDown 
          name={'event'}
          label='Select Event'
          placeholder={'Select An Event'}
          DropDownItems={eventsData?.map((ele) => {
            return {
              label: ele?.eventName,
              value: ele?.eventId
            }
          })}
          onChangeFunction={handleEventChange}
        />
      </div>

      {/* Rankings Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Team Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">College Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Score</th>
            </tr>
          </thead>
          <tbody>
            {teamRankingData && teamRankingData.length > 0 ? (
              teamRankingData.map((ranking, index) => (
                <tr key={ranking.id} className="border-b border-gray-200">
                  <td className="font-dosisMedium px-6 py-4 whitespace-nowrap text-sm text-gray-700">{index + 1}</td>
                  <td className="font-dosisMedium px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ranking.teamName}</td>
                  <td className="font-dosisMedium px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ranking.collegeName}</td>
                  <td className="font-dosisMedium px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ranking.totalScore}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                  No rankings available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const body = Object.fromEntries(formData);
//     try {
//         const { data } = await loginUser(
//             `${process.env.NEXT_PUBLIC_URL}/web/api/auth/v1/Login`,
//             body,
//         )
//         if (data) {
//             toast.success("Login Success")
//             await setLoginToken(data)
//             handleRouting(data)
//         }
//     } catch (error) {
//         toast.error(error?.response?.data?.message ?? error?.message ?? 'Login failed')
//     }
// }