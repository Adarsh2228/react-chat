import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Hamburger, XMark } from "assets/svg";
import useClickOutside from "hooks/useClickOutside";
import useLogout from "hooks/useLogout";
import useAuthStore from "stores/AuthStore";
import ToggleTheme from "components/ToggleTheme";

const variants = {
  open: { opacity: 1, zIndex: 1 },
  closed: { opacity: 0, zIndex: -1 },
};

const Dropmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [font, setFont] = useState("sans-serif");
  const logout = useLogout();
  const ref = useRef();
  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  const user = useAuthStore((state) => state.user);

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    setFont(selectedFont);
    document.body.style.fontFamily = selectedFont;
  };

  return (
    <div ref={ref} style={{ fontFamily: font }}>
      <div
        type="button"
        className={`relative btn btn-circle bg-base-300 hover:bg-base-100 border-transparent ${
          isOpen
            ? "[&>span:nth-child(1)]:opacity-0"
            : "[&>span:nth-child(2)]:opacity-0"
        } `}
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-150">
          <Hamburger />
        </span>
        <span className="absolute duration-150">
          <XMark />
        </span>
      </div>

      <motion.div
        className="bg-base-100 origin-top-left absolute mt-2 w-56 rounded-xl shadow-2xl border border-slate-600"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="py-1">
          <label
            className="block rounded-xl px-4 py-2 text-sm hover:bg-base-200 cursor-pointer"
            role="menuitem"
          >
            <div className="flex flex-col text-center">
              <img
                src={user.profilePic}
                alt="Profile Picture"
                className="w-24 h-24 rounded-xl mx-auto"
              />
              <span className="text-xl">{user.fullName}</span>
              <span>@{user.username}</span>
            </div>
          </label>
          <div className="divider my-0"></div>

          <div className="block text-center rounded-xl px-4 py-2 text-sm hover:bg-base-200 cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">Select Font</h3>
            <select
              className="bg-base-100 border border-slate-600 rounded-xl py-1 px-2"
              onChange={handleFontChange}
              value={font}
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="Arial, sans-serif">Arial</option>
              <option value="'Courier New', Courier, monospace">Courier New</option>
              <option value="Georgia, serif">Georgia</option>
              <option value="'Times New Roman', Times, serif">Times New Roman</option>
              <option value="Verdana, sans-serif">Verdana</option>
            </select>
          </div>
          <div className="divider my-0"></div>

          <label
            className="block text-center rounded-xl px-4 py-2 text-sm hover:bg-base-200 cursor-pointer"
            role="menuitem"
          >
            <ToggleTheme />
          </label>
          <div className="divider my-0"></div>

          <label
            className="block rounded-xl px-4 py-2 text-sm text-red-500 hover:bg-base-200 cursor-pointer"
            role="menuitem"
            onClick={logout}
          >
            Logout
          </label>
        </div>
      </motion.div>
    </div>
  );
};

export default Dropmenu;
