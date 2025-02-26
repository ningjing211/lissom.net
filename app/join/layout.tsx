export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="w-full md:overflow-y-auto">{children}</div>
    </div>
  );
}