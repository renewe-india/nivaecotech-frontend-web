"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsTechnicians() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await axios.get(`https://app.nivaecotech.com/api/core-team
`);
        setTeamMembers(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="text-center">
        <h6 className="text-[#f38f43] text-uppercase">Our Technicians</h6>
        <h1 className="">Our Expert Technicians</h1>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={teamMembers}
          direction="right"
          speed="fast"
        />
      </div>
    </>
  );
}
