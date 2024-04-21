"use client";

import Image from "next/image";
import { Tabs } from "../Components/uicomponents/Pro";

export function TabsDemo() {
  const tabs = [
    {
      title: "1",
      value: "Women Security",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-[#050505] bg-white">
          <p>Saftey Arc Website</p>
        </div>
      ),
    },
    {
      title: "2",
      value: "Task Manager",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-[#050505] bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Task Boost</p>
        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
;
