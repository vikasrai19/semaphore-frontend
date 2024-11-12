"use client"; // Add this line at the top of the file

import React from "react";
import Widgetsv from "@/components/widgets";
import { useCached } from "@/hooks/useCached";
import { useGetData } from "@/hooks/useGetData";
import { useQueryConfig } from "@/config/useQuery.config";

function EventHeadsPage() {
  const { cached } = useCached("isAuthenticated");

  // Fetch data for dashboard using useGetData
  const { data, isLoading, error } = useGetData(
    `${cached?.userId}EventHeadDashboard`,
    `${process.env.NEXT_PUBLIC_URL}/web/api/mainEvent/v1/GetTeamRanking`,
    useQueryConfig
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Destructure cardList and topRankings from fetched data
  const { cardList = [], topRankings = [] } = data || {};

  return (
    <div className="p-4 font-mono">
      {/* Container for widgets */}
      <h5 className="border-b border-gray-300 mb-4"></h5>
      <h2 className="text-2xl font-semibold mb-4">Top Rankings</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2 border-b">Rank</th>
            <th className="text-left p-2 border-b">Team Name</th>
            <th className="text-left p-2 border-b">Score</th>
          </tr>
        </thead>
        <tbody>
          {topRankings.map((team, index) => (
            <tr key={team.teamName} className="border-b">
              <td className="p-2">{index + 1}.</td>
              <td className="p-2">{team.teamName}</td>
              <td className="p-2">{team.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventHeadsPage;
