"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Mosaic = ({ goal }) => {
  const [grayscale, setGrayscale] = useState(100);
  const [totalDonations, setTotalDonations] = useState(0);

  // Fetch total donations from the API
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch("/api/total-donations");
        const data = await response.json();
        setTotalDonations(data.totalDonations || 0); // Ensure it handles null/undefined
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };
    fetchDonations();
  }, []);

  // Update the grayscale filter based on the total donations
  useEffect(() => {
    const percentage = 100 - (totalDonations / goal) * 100;
    setGrayscale(Math.max(0, percentage)); // Ensure it doesn't go below 0
  }, [totalDonations, goal]);

  return <></>;
};

export default Mosaic;
