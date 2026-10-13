import { CityPage, cityMetadata } from "@/components/ai-consulting/cities";

// AI consulting landing page for Tampa, FL. Content lives in
// src/components/ai-consulting/cities.tsx.
export const metadata = cityMetadata("tampa");

export default function Page() {
  return <CityPage city="tampa" />;
}
