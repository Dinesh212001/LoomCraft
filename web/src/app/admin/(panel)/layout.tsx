import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminTopbar from '@/components/admin/AdminTopbar';
import AdminFooter from '@/components/admin/AdminFooter';

// Layout of every admin page EXCEPT /admin/login (that is why (panel) is a separate group).
// TODO Dev 2: protect this layout - if not logged in as ADMIN, redirect to /admin/login
export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopbar />
        <div className="admin-content">{children}</div>
        <AdminFooter />
      </div>
    </div>
  );
}
