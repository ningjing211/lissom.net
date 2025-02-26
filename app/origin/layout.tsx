import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/origin/header';
import Footer from '@/app/origin/footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      
      <Header />


      <div className="w-full md:overflow-y-auto">{children}</div>

      <Footer />

    </div>
  );
}