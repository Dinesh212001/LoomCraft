import Link from 'next/link';

// 9 core admin modules (client document). Pages other than Dashboard are built by the team.
const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/categories', label: 'Categories' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/inventory', label: 'Inventory' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/customers', label: 'Customers' },
  { href: '/admin/coupons', label: 'Coupons & Offers' },
  { href: '/admin/reviews', label: 'Reviews' },
  { href: '/admin/reports', label: 'Reports' },
];

export default function AdminSidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">Handloom Admin</div>
      {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
    </aside>
  );
}
