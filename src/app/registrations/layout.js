"use client"
import { MainLayout } from '@/components/main_layout'
import { registrationMenu } from '@/config/route.config'
import React from 'react'

export default function registration({children}) {
  return (
    
      <MainLayout 
      menuItems={registrationMenu}
      routeType={8} >
        {children}
      </MainLayout>
    
  )
}
