import { Home, Plus, Settings, Users } from "lucide-react";
import NavItem from "./nav-item";

function SidebarNav() {
  return (
    <nav className="flex-1 space-y-2 p-4">
      <NavItem href="/" icon={<Home size={18} />} label="Dashboard" />
      <NavItem href="/contacts" icon={<Users size={18} />} label="Contacts" />
      <NavItem
        href="/contacts/new"
        icon={<Plus size={18} />}
        label="Add Contact"
      />
      <NavItem
        href="/settings"
        icon={<Settings size={18} />}
        label="Settings"
      />
    </nav>
  );
}

export default SidebarNav;
