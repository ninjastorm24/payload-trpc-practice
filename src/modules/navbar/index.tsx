import SidebarNav from "./sidebar-nav";

const Navbar = () => {
  return (
    <aside className="hidden md:flex w-64 bg-white shadow-lg flex-col">
      <div className="p-6 text-2xl font-bold">Contact Manager</div>
      <SidebarNav />
    </aside>
  );
};

export default Navbar;
