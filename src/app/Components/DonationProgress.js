"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const DonationProgress = () => {
  const [stats, setStats] = useState({ total_donations: 0, total_amount: 0 });
  const [loading, setLoading] = useState(true);
  const [greyscaleValue, setGreyscaleValue] = useState(100); // State for greyscale
  const [zoomed, setZoomed] = useState(false); // State for zoom
  const donationGoal = 100; // Set your donation goal
  const [zoomStyle, setZoomStyle] = useState({});
  const [error, setError] = useState(null); // State for error handling

  const fetchDonationStats = async () => {
    const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      return data; // Returns the donation stats
    } catch (error) {
      console.error(error);
      setError("Failed to load donation stats."); // Set error message
      return null;
    }
  };

  useEffect(() => {
    const getDonationStats = async () => {
      const data = await fetchDonationStats();
      if (data) setStats(data);
      setLoading(false);
    };

    getDonationStats();
  }, []);

  const progressPercentage = useMemo(() => {
    return Math.min((stats.total_donations / donationGoal) * 100, 100);
  }, [stats.total_donations]);

  useEffect(() => {
    const newGreyscaleValue = Math.max(0, 100 - progressPercentage);
    setGreyscaleValue(newGreyscaleValue);
  }, [progressPercentage]);

  const handleMouseMove = (e) => {
    const img = e.currentTarget; // Use currentTarget to get the correct element
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setZoomStyle({
      backgroundImage: `url('/mosaic.png')`,
      backgroundSize: `${img.width * 5.5}px ${img.height * 5.5}px`,
      backgroundPosition: `-${x * 2}px -${y * 2}px`,
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      position: "absolute",
      pointerEvents: "none",
      border: "2px solid black",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      display: "block",
      zIndex: 10,
      top: `${y - 125}px`,
      left: `${x - 125}px`,
      transition: "background-size 0.2s ease",
    });
  };

  const handleTouchMove = (e) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const touch = e.touches[0]; // Get the first touch point
    const x = touch.clientX - rect.left; // x position within the image
    const y = touch.clientY - rect.top; // y position within the image
    setZoomStyle({
      backgroundImage: `url('/mosaic.png')`,
      backgroundSize: `${img.width * 5.5}px ${img.height * 5.5}px`, //
      backgroundPosition: `-${x * 2}px -${y * 2}px`,
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      position: "absolute",
      pointerEvents: "none",
      border: "2px solid black",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      display: "block",
      zIndex: 10,
      top: `${y - 125}px`,
      left: `${x - 125}px`,
      transition: "background-size 0.2s ease",
    });
  };

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  return (
    <div className="font-[Inter]" style={{ position: "relative" }}>
      <div
        className="mosaic-container"
        style={{
          filter: `grayscale(${greyscaleValue}%)`,
          transition: "filter 0.5s ease",
          position: "relative",
        }} // Ensure relative positioning
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove} // Handle touch move for mobile
        onTouchStart={() => setZoomed(true)}
        onTouchEnd={() => setZoomed(false)}
      >
        <Image
          src="/mosaic.png"
          alt="photomosaic"
          width={1500}
          height={1500}
          className="mosaic-image mb-20"
          priority={true}
        />
        {zoomed && <div style={zoomStyle} />}{" "}
        {/* Show zoom effect only when zoomed */}
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className="dark:text-white text-xl flex justify-center mb-10">
          Donation Progress
        </h1>
        <div className="bar progress blue">
          <div
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: "blue",
              height: "20px",
            }}
          />
        </div>
        <p className="dark:text-white justify-center flex font-sans text-3xl mt-6 mb-16">
          {progressPercentage.toFixed(2)}%
        </p>
      </div>
      <div className="total-counter">
        <h2>£{stats.total_amount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default DonationProgress;
