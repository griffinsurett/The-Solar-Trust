import React from "react";
import HamburgerIcon from "./HamburgerIcon.jsx";
import HamburgerMenuItem from "./HamburgerMenuItem.jsx";

export default function HamburgerNavMenu({
  items,
  hamburgerTransform = true,
  menuItem,
  submenuItem,
  isHierarchical,
  listClass = "",
  hamburgerMenu = {},
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(o => !o);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="inline-block">
      {/* Icon */}
      <HamburgerIcon
        isOpen={menuOpen}
        onChange={toggleMenu}
        hamburgerTransform={hamburgerMenu.hamburgerIconTransform ?? hamburgerTransform}
        className={hamburgerMenu.hamburgerIconClass}
      />

      {/* Full‑width dropdown */}
      <ul
        onClick={closeMenu}
        className={`
          absolute inset-x-0 top-full w-screen
          bg-bg shadow-lg
          origin-top
          transform-gpu
          transition-all duration-300 ease-in-out
          overflow-hidden
          ${listClass}
          ${menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0  opacity-0 pointer-events-none"
          }
        `}
      >
        {items.map(item => (
          <HamburgerMenuItem
            key={item.id}
            item={item}
            depth={0}
            onClose={closeMenu}
            menuItem={menuItem}
            submenuItem={submenuItem}
            isHierarchical={isHierarchical}
          />
        ))}
      </ul>
    </div>
  );
}
