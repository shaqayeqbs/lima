"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Plus, ArrowUpRight } from "react-bootstrap-icons";
import { useState } from "react";

const Navbar = () => {
  const links = [
    { text: "گرین هوس", url: "/#contact" },
    { text: "ویژگی ها", url: "/#features" },
    { text: "درباره ما", url: "/#about" },
    { text: "آمارها", url: "/contact" },
    { text: "پروژه ها", url: "/#projects" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex relative bg-black !z-30 w-full items-center border-b-4 border-borderColor pad justify-between p-4 ">
      <div className="flex   items-center">
        <Link href="/" passHref>
          <div className="text-nowrap flex items-center space-x-3">
            <h3>Green House</h3>
            <ArrowUpRight color="white" />
          </div>
        </Link>
      </div>
      <div className="flex items-center lg:hidden">
        <Link href="/contact" passHref>
          <Image
            src="assets/logo.svg"
            width={100}
            height={100}
            alt="Logo"
            className=" w-[86px] ml-10"
          />
        </Link>
      </div>
      <div
        className={`hidden lg:flex items-center space-x-5 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.url} passHref>
            <div className="text-nowrap  flex items-center space-x- mx-2">
              <h3>{link.text}</h3>
              <Plus size={24} color="white" />
            </div>
          </Link>
        ))}

        <Link href="/contact" passHref>
          <Image
            src="assets/logo.svg"
            width={100}
            height={100}
            alt="Logo"
            className=" w-[86px] ml-10"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
