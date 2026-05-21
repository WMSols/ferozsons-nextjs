"use client";

import { therapeuticsData } from '@/data/company-overview';
import { sortTherapeuticAreas } from '@/lib/getSortedTherapeuticAreas';
import { useTherapeuticAreas } from '@/app/products/hooks/useTherapeuticAreas';
import TherapeuticsGridClient from './TherapeuticsGridClient';

export default function TherapeuticsGrid() {
  const { therapeuticAreas, isLoading } = useTherapeuticAreas();
  const sortedAreas =
    therapeuticAreas.length > 0
      ? sortTherapeuticAreas(therapeuticAreas)
      : therapeuticsData;


  return <TherapeuticsGridClient loading={isLoading} items={sortedAreas} />;
}
