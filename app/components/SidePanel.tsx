"use client";

import Image from "next/image";
import ChevronLeft from "../assets/icons/chevron_left_icon.svg";
import { useEffect, useRef } from "react";

type SidePanelProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function SidePanel({
  title,
  open,
  onClose,
  children,
}: SidePanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [open]);

  return (
    <div
      className={`fixed top-0 right-0 flex flex-col bg-[#08080C] transform transition-transform duration-300 z-10
        h-full
        w-full lg:w-[calc(100vw-24rem)]
        ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="h-48 flex flex-row gap-12 px-16 xl:px-32 items-start pt-24 bg-[#0d0d11] transition-all duration-300 ease-in-out">
        <button
          onClick={onClose}
          className="hover:cursor-pointer hover:bg-[#E05D5D]"
          title="Close"
          aria-label="Close"
        >
          <Image src={ChevronLeft} alt="Close" width={48} height={48} />
        </button>
        <h1 className="text-5xl">{title}</h1>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 flex flex-col items-start gap-12 px-16 xl:px-32 py-24 overflow-y-auto scrollbar-custom overflow-x-hidden wrap-break-word transition-all duration-300 ease-in-out"
      >
        {children}
      </div>
      <div
        className="h-32 flex flex-col justify-center bg-[#0d0d11] px-16 
             lg:hidden transition-all duration-300 ease-in-out"
      >
        <p className="text-2xl">© 2026 Neil Dinglasa</p>
      </div>
    </div>
  );
}
