import Link from "next/link";
import React from "react";
import { CONSTANTS } from "../../../utils/constant";

const LayoutMusic: React.FC = () => {
  const { LAYOUT_CONFIG_PUBLIC } = CONSTANTS;
  return (
    <div>
      <header>
        <nav className="py-3 px-4">
          <ul className="flex gap-4 justify-end">
            {LAYOUT_CONFIG_PUBLIC.map((key) => (
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

export { LayoutMusic };
