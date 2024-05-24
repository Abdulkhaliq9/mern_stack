import React from "react";
import { ArrowRight, ArrowDown, Plus } from "lucide-react";

export default function DropDown() {
  return (
    <div className="filters p-4">
      <div className="sec-center">
        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
        <label className="for-dropdown" for="dropdown">
          Category <ArrowDown />
        </label>
        <div className="section-dropdown">
          <input
            className="dropdown-sub"
            type="checkbox"
            id="dropdown-sub"
            name="dropdown-sub"
          />
          <label className="for-dropdown-sub" for="dropdown-sub">
            Dropdown Sub <Plus />
          </label>
          <div className="section-dropdown-sub">
            <a href="#" className="drop-bars">
              Dropdown Link <ArrowRight />
            </a>
            <a href="#" className="drop-bars">
              Dropdown Link <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    
    </div>
  );
}
