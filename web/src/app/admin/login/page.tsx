// ADMIN LOGIN page (basic form only).
// TODO Dev 2: on submit call  POST /api/admin/auth/login  (add src/services/auth.service.ts), then go to /admin
export default function AdminLoginPage() {
  return (
    <div className="login-box">
      <h2>Admin Login</h2>
      <p className="muted">UI only. Login API is not built yet.</p>
      <form>
        <label>Email</label>
        <input type="email" placeholder="admin@handloom.com" />
        <label>Password</label>
        <input type="password" />
        <button className="btn" type="button">Login</button>
      </form>
    </div>
  );
}
