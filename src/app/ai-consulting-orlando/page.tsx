import { CityPage, cityMetadata } from "@/components/ai-consulting/cities";

// AI consulting landing page for Orlando, FL. Content lives in
// src/components/ai-consulting/cities.tsx.
export const metadata = cityMetadata("orlando");

export default function Page() {
  return <CityPage city="orlando" />;
}
