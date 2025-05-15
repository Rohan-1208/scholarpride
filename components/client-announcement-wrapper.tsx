"use client";

import React from "react";

export default function ClientAnnouncementBar() {
  return (
    <div className="relative w-full overflow-hidden bg-green-100 py-2">
      <div className="flex animate-marqueeLoop whitespace-nowrap">
        <span className="text-green-800 text-sm font-medium mr-12">
          🎉 Welcome to Scholars Pride School! &nbsp;&nbsp;&nbsp;
          🎓 Admissions Open NOW! &nbsp;&nbsp;&nbsp;
          📞 Call Now to Know More!
        </span>
        <span className="text-green-800 text-sm font-medium mr-12">
          🎉 Welcome to Scholars Pride School! &nbsp;&nbsp;&nbsp;
          🎓 Admissions Open NOW! &nbsp;&nbsp;&nbsp;
          📞 Call Now to Know More!
        </span>
      </div>
    </div>
  );
}
