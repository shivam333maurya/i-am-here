"use client";
import axios from "axios";

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
const zoomTokenUrl = "https://zoom.us/oauth/token";
const zoomApiUrl = "https://api.zoom.us/v2";

const getToken = async () => {
  try {
    const response = await axios.post(
      zoomTokenUrl,
      {},
      {
        params: {
          grant_type: "client_credentials",
        },
        auth: {
          username: process.env.CLIENT_ID || "",
          password: process.env.CLEINT_SECRET_KEY || "",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting Zoom access token:", error);
  }
};

const generateZoomlink = async () => {
  try {
    const accessToken = await getToken();

    const response = await axios.post(
      `${zoomApiUrl}/users/me/meetings`,
      meetingDetails,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const { join_url, start_url } = response.data;
    return { zoomLink: join_url, startLink: start_url };
  } catch (error) {
    console.error("Error creating Zoom meeting:", error);
  }
};

export { generateZoomlink };
