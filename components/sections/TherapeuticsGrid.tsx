import { therapeuticsData } from '@/data/company-overview';
import { sortTherapeuticAreas } from '@/lib/getSortedTherapeuticAreas';
import {  getTherapeuticAreas } from '@/lib/strapi';
import React from 'react'
import TherapeuticsGridClient from './TherapeuticsGridClient';



const TherapeuticsGrid = async () => {
      const { data: therapeuticsDataStrapi } = await getTherapeuticAreas();
      // use fallback data incase of no data from backend
      const sortedAreas = therapeuticsDataStrapi.length > 0 ? sortTherapeuticAreas(therapeuticsDataStrapi) : therapeuticsData
  return (
      <>
        {
            therapeuticsDataStrapi ? (
                  <TherapeuticsGridClient items={sortedAreas} />
            ):(
                  <div className='text-muted-foreground'>Loading theraputic areas...</div>
            )
        }
        </>
  )
}

export default TherapeuticsGrid
