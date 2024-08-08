"use client";
import Link from "next/link";
import React from "react";
import { CONSTANTS } from "../../../utils/constant";
import { usePathname } from "next/navigation";

const LayoutLifeStyle: React.FC = () => {
  const { LAYOUT_CONFIG } = CONSTANTS;
  console.log(usePathname());
  return (
    <div>
      <header>
        <nav className="py-3 px-4">
          <ul className="flex gap-4 justify-end">
            {LAYOUT_CONFIG.LIFE_STYLE.map((key) => (
              <li key={`${key.title}}`} className="text-gray-300 ">
                <Link href={key.path}>{key.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export { LayoutLifeStyle };
