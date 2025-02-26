// import SideNav from '@/app/ui/dashboard/sidenav';
// import Header from '@/app/home/header';
// import Footer from '@/app/home/footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="w-full md:overflow-y-auto">{children}</div>
    </div>
  );
}