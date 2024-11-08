"use client"; // Add this line at the top of the file

import React, { useEffect, useState } from "react";
import Widgetsv from "@/components/widgets";
import { useCached } from "@/hooks/useCached";
import { useGetData } from "@/hooks/useGetData";
import { useQueryConfig } from "@/config/useQuery.config";

function TopRankings() {
  const { cached } = useCached("isAuthenticated");
  console.log("cached ", cached);
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data: teamRankingList, isLoading: isTeamRankingListLoading } =
    useGetData(
      `${cached?.userId}TeamRankingList`,
      `${process.env.NEXT_PUBLIC_URL}/web/api/mainEvent/v1/GetTeamRanking?userId=${cached?.userId}`,
      useQueryConfig
    );

  console.log("ranking list ", teamRankingList);

  // Fetch rankings data from the API when the component mounts
  // useEffect(() => {
  //   const fetchRankings = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_URL}/web/api/mainEvent/v1/GetTeamRanking?userId=${cached?.userId}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch rankings");
  //       }
  //       const data = await response.json();
  //       setRankings(data); // Assuming the response is an array of rankings
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchRankings();
  // }, []);

  if (isTeamRankingListLoading) {
    return <div>Loading...</div>;
  }

  console.log("ranking list ", teamRankingList);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 font-mono">
      {/* Container for widgets */}
      <div className="flex space-x-4 mb-8">
        <Widgetsv type="user" />
        <Widgetsv type="round" />
        <Widgetsv type="team" />
      </div>

      <h5 className="border-b border-gray-300 mb-4"></h5>
      <h2 className="text-2xl font-semibold mb-4">Top Rankings</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2 border-b">Rank</th>
            <th className="text-left p-2 border-b">Team Name</th>
            <th className="text-left p-2 border-b">College Name</th>
            <th className="text-left p-2 border-b">Score</th>
          </tr>
        </thead>
        <tbody>
          {teamRankingList.map((row) => (
            <tr key={row.rank} className="border-b">
              <td className="p-2">{row.rank}.</td>
              <td className="p-2">{row.teamName}</td>
              <td className="p-2">{row.college}</td>
              <td className="p-2">{row.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopRankings;
