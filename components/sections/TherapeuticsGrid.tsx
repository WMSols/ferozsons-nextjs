import { therapeuticsData } from '@/data/company-overview';
import { sortTherapeuticAreas } from '@/lib/getSortedTherapeuticAreas';
import {  getTherapeuticAreas } from '@/lib/strapi';
import React from 'react'
import TherapeuticsGridClient from './TherapeuticsGridClient';



const TherapeuticsGrid = async () => {
      const therapeuticsDataStrapi = await getTherapeuticAreas();
      // use fallback data incase of no data from backend
      const sortedAreas = therapeuticsDataStrapi.length > 0 ? sortTherapeuticAreas(therapeuticsDataStrapi) : therapeuticsData
  return (
        <TherapeuticsGridClient items={sortedAreas} />
  )
}

export default TherapeuticsGrid
