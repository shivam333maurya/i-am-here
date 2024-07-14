"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { CONSTANTS } from "@/utils/constant";

const meetingDetails = {
  topic: "Interview",
  type: 3, // For Scheduled meeting set 2
  start_time: "2024-07-11T10:00:00Z",
  duration: 60,
  timezone: "UTC",
  settings: {
    host_video: true,
    participant_video: true,
    join_before_host: true, // Allow participants to join before the host
    audio: "both", // Allow both telephony and VoIP
    waiting_room: false, // Disable the waiting room
    meeting_authentication: false, // No authentication require
  },
};

const HomeNavigation = () => {
  const router = useRouter();

  const handleRedirection = (link: any) => {
    router.push(link);
  };

  console.log(process.env.CLIENT_ID);
  return (
    <motion.div className="flex gap-4 flex-wrap justify-center space-x-4 space-y-4 p-4 cursor-default">
      {CONSTANTS.HOME_CARD_DATA.map((card, index) => (
        <Card key={index} link={card.link} onClick={handleRedirection}>
          <div
            className={`w-[180px] h-[200px] flex items-center justify-center bg-gradient-to-br from-blue-400 to-red-400 rounded opacity-70`}
          >
            <h3 className="px-6 py-4 font-bold text-[20px] text-gray-100 shadow-sm">
              {card?.title}
            </h3>
          </div>
        </Card>
      ))}
    </motion.div>
  );
};

export { HomeNavigation };
