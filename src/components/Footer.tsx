"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-3 items-center py-4 h-24 font-bold text-xl md:flex-row md:justify-around">
      <p className="text-sm text-dark">
        ©Copyright 2024 Todos los derechos reservados
      </p>
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <div className="flex gap-1 justify-center">
          <Link href="https://web.whatsapp.com/" target="_blanck">
            <FaWhatsapp size={32} className="text-brown" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blanck">
            <FaInstagram size={32} className="text-brown" />
          </Link>
        </div>
        <p className="text-3xl">
          Dani<span className="text-brown">Dev</span>&gt;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
