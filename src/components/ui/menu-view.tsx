"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { Close, MoreVert } from "@mui/icons-material";

const MenuView = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <a href="/" className="navbar-brand m-0 p-0" title="Home">
        <div className="flex items-center space-x-2">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={66}
            height={22}
            priority
            unoptimized
          />
          <div className="flex flex-col items-center ">
            <div className=" pr-5 ">
              <p className="font-extrabold text-xl m-0 capitalize">
                NIVA ECOTECH PVT. LTD.
              </p>
              <p className="m-0 text-sm">Committed to ecological revolution</p>
            </div>
          </div>
        </div>
      </a>

      <div className="flex items-center">
        <div className="flex items-center space-x-4 pr-40 mr-24">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm px-10">
              <HoveredLink href="/services/solar-park-development">
                Solar Park Development
              </HoveredLink>
              <HoveredLink href="/services/rooftop-solar-epc">
                Rooftop Solar EPC
              </HoveredLink>
              <HoveredLink href="/services/operations-and-maintenance">
                Operations and Maintenance
              </HoveredLink>
              <HoveredLink href="/services/fund-raising">
                Fund Raising
              </HoveredLink>
              <HoveredLink href="/services/project-consulting">
                Project Consulting
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <div className="text-sm p-4">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <ProductItem
                    title="Solar Parks"
                    href="/portfolio/solar-parks/"
                    src="/solarpark/Solarpark.avif"
                    description="transforming sunlight into sustainable power."
                  />
                </div>
                <div className="col">
                  <ProductItem
                    title="Rooftop"
                    href="/portfolio/rooftops/"
                    src="/rooftop/Rooftop.jpg"
                    description="converting sunlight into clean energy."
                  />
                </div>
              </div>
            </div>
          </MenuItem>
        </div>
      </div>
      <div className="flex items-center space-x-2 font-bold">
        <HoveredLink href="/contact">Contact</HoveredLink>
      </div>
    </Menu>
  );
};

const MobileNavigation: React.FC = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <>
      <div className="container-fluid lg:hidden bg-light">
        <nav className="navbar  bg-white ">
          <div className="navbar-brand flex justify-between items-center w-full d-lg-none">
            <a href="/" className="navbar-brand ">
              <div className="flex items-center space-x-2">
                <Image
                  src="/Logo.svg"
                  alt="logo"
                  width={54}
                  height={18}
                  priority
                  unoptimized
                />
                <div className="flex flex-col items-center ">
                  <div className=" pr-5 ">
                    <p className="font-extrabold text-lg m-0 capitalize">
                      NIVA ECOTECH PVT. LTD.
                    </p>
                    <p className="m-0 text-xs">
                      Committed to ecological revolution
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {state ? (
              <Close
                fontSize="medium"
                className="z-[1000] mr-0 p-0"
                onClick={toggleDrawer}
              />
            ) : (
              <MoreVert fontSize="medium" onClick={toggleDrawer} />
            )}
          </div>
        </nav>
        <div
          className={`fixed top-0 right-0 bg-theme-dark w-[68%] h-screen z-[999] text-white transition-all duration-300 ${
            state
              ? "opacity-100 translate-x-0"
              : "opacity-0 pointer-events-none translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow mt-20">{MobileMenuView()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
const MobileMenuView = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-l-xl border border-transparent dark:bg-black dark:border-white/[0.2] bg-gray-200 shadow-input flex flex-col justify-end space-y-2 px-8 py-6 "
    >
      <div className="flex items-center space-x-2">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm px-10">
            <HoveredLink href="/services/solar-park-development">
              Solar Park Development
            </HoveredLink>
            <HoveredLink href="/services/rooftop-solar-epc">
              Rooftop Solar EPC
            </HoveredLink>
            <HoveredLink href="/services/operations-and-maintenance">
              Operations and Maintenance
            </HoveredLink>
            <HoveredLink href="/services/fund-raising">
              Fund Raising
            </HoveredLink>
            <HoveredLink href="/services/project-consulting">
              Project Consulting
            </HoveredLink>
          </div>
        </MenuItem>
      </div>
      <div className="flex items-center space-x-2">
        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="text-sm p-4">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <ProductItem
                  title="Solar Parks"
                  href="/portfolio/solar-parks/"
                  src="/solarpark/Solarpark.avif"
                  description="transforming sunlight into sustainable power."
                />
              </div>
              <div className="col">
                <ProductItem
                  title="Rooftop"
                  href="/portfolio/rooftops/"
                  src="/rooftop/Rooftop.jpg"
                  description="converting sunlight into clean energy."
                />
              </div>
            </div>
          </div>
        </MenuItem>
      </div>
      <div className="flex items-center font-bold space-x-2">
        <HoveredLink href="/contact">Contact</HoveredLink>
      </div>
    </nav>
  );
};

export { MenuView, MobileNavigation };
