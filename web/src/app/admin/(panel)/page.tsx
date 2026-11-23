// ADMIN DASHBOARD (basic). TODO Dev 4: call GET /api/admin/dashboard and show real numbers,
// recent orders and low-stock alerts.
export default function AdminDashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="stat-grid">
        <div className="stat">Total Products<b>-</b></div>
        <div className="stat">Total Customers<b>-</b></div>
        <div className="stat">Total Orders<b>-</b></div>
        <div className="stat">Total Sales<b>-</b></div>
      </div>
    </>
  );
}
