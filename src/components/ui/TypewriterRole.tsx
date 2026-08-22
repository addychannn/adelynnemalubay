"use client";

import React, { useState, useEffect } from "react";
import { appConfig } from "@/config/app";

export const TypewriterRole: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = appConfig.roles;
    if (!roles || roles.length === 0) return;

    const targetRole = roles[roleIndex % roles.length];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === targetRole) {
      typingSpeed = 2200; // Pause when word is completely typed
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== targetRole) {
          setCurrentText(targetRole.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        setCurrentText(targetRole.slice(0, currentText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center text-xl sm:text-2xl font-bold text-gray-900 font-sans tracking-wide min-h-[32px]">
      <span>{currentText}</span>
      <span className="inline-block w-[2.5px] h-6 bg-[#3B82F6] ml-1 animate-pulse shrink-0" />
    </span>
  );
};
