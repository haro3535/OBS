import SideNav from '@/app/ui/dashboard/sidenav';
import Topbar from '@/app/ui/dashboard/topbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full hidden flex-none md:w-64 md:block">
        <SideNav />
      </div>
      <div className='w-full'>
        <Topbar />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
  );
}