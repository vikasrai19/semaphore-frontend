"use client"
import { Loading } from '@/components/loading'
import { MainLayout } from '@/components/main_layout'
import { registrationMenu } from '@/config/route.config'
import { useQueryConfig } from '@/config/useQuery.config'
import { useCached } from '@/hooks/useCached'
import { useGetData } from '@/hooks/useGetData'
import React, { useState } from 'react'

export default function registration({children}) {

    const [showDialog, setShowDialog] = useState(false);

    const handleButtonClick = () => {
        setShowDialog(true);
    };

    const handleDialogClose = () => {
        setShowDialog(false);
    };

    const handleOkClick = () => {
        setShowDialog(false);
    };

    const {cached} = useCached('isAuthenticated');
    const {data:regCollegeNames , isLoading : isEventLoading} = useGetData(
        'regCollegeNames',
        `${process.env.NEXT_PUBLIC_URL}/web/api/registration/v1/GetRegisteredCollegeList`,
        useQueryConfig,
    )
    if(isEventLoading) return <Loading />
    console.log("College reg",regCollegeNames);

    return (
      <MainLayout menuItems={registrationMenu} routeType={8}>
          <div className="p-8 bg-gray-50 rounded-lg">
              <h2 className="font-dosisBold text-2xl font-bold mb-6">Registrations List</h2>
              {regCollegeNames?.map((names, index) => (
                  <div key={index} className="flex justify-between px-5 py-3 bg-gray-100 rounded-lg">
                      <div>
                          <span className="flex font-dosisRegular">Team Name</span>
                          <span className="flex font-dosisMedium">{names.teamName}</span>
                      </div>
                      <div>
                          <span className="flex font-dosisRegular">College Name</span>
                          <span className="flex font-dosisMedium">{names.college.collegeName}</span>
                      </div>
                      <div>
                          <span className="flex font-dosisMedium">Fees</span>
                          <span className="flex font-dosisMedium">{names.isPaid ? "Paid" : "Pending"}</span>
                      </div>
                      <div className="flex justify-between p-5">
                          <span className="font-dosisMedium p-2">Status of arrival</span>
                          <button 
                              onClick={handleButtonClick}
                              className="bg-blue-950 text-white py-1 px-2 rounded-md text-lg font-dosisMedium hover:bg-blue-700 transition duration-300 cursor-pointer"
                          >
                              Mark as reported
                          </button>
                      </div>
                  </div>
              ))}
          </div>

          {showDialog && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                      <h3 className="font-dosisBold text-lg mb-4">Confirm Action</h3>
                      <p className="mb-4">Are you sure you want to mark this as reported?</p>
                      <div className="flex justify-end space-x-4">
                          <button 
                              onClick={handleDialogClose}
                              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-lg"
                          >
                              Cancel
                          </button>
                          <button 
                              onClick={handleOkClick}
                              className="bg-blue-950 text-white hover:bg-blue-700 py-2 px-4 rounded-lg"
                          >
                              OK
                          </button>
                      </div>
                  </div>
              </div>
          )}
      </MainLayout>
  );
}

