

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page flex flex-col ">
      <div className="animate-page">{children}</div>
    </div>
  );
}