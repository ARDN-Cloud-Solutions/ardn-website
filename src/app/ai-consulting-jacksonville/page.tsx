import { CityPage, cityMetadata } from "@/components/ai-consulting/cities";

// AI consulting landing page for Jacksonville, FL. Content lives in
// src/components/ai-consulting/cities.tsx.
export const metadata = cityMetadata("jacksonville");

export default function Page() {
  return <CityPage city="jacksonville" />;
}
