
export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white pt-[72px] md:pt-[80px] lg:pt-[90px]">
      {children}
    </div>
  );
}
