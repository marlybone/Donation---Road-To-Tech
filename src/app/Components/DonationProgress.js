"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const DonationProgress = () => {
  const [totalDonationsCount, setTotalDonationsCount] = useState(0);
  const [greyscaleValue, setGreyscaleValue] = useState(100); // State for greyscale
  const [zoomed, setZoomed] = useState(false); // State for zoom
  const donationGoal = 100; // Set your donation goal
  const [zoomStyle, setZoomStyle] = useState({});
  const [error, setError] = useState(null); // State for error handling

  const fetchTotalDonationsCount = async () => {
    const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://codeincareer.com";
    try {
      const response = await fetch(`${API_URL}/api/donation-stats`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTotalDonationsCount(data.total_donations); // Corrected property name
  
      console.log(data); // Log the data for debugging
    } catch (error) {
      console.error("Error fetching total donations count:", error);
      setError("Failed to load donations count."); // Set error message
    }
  };

  useEffect(() => {
    fetchTotalDonationsCount(); // Fetch total donations count when the component mounts
  }, []);

  useEffect(() => {
    const progressPercentage = Math.min(
      (totalDonationsCount / donationGoal) * 100,
      100
    );
    const newGreyscaleValue = Math.max(0, 100 - progressPercentage); // Calculate new greyscale value
    setGreyscaleValue(newGreyscaleValue);
  }, [totalDonationsCount]);

  const progressPercentage = Math.min(
    (totalDonationsCount / donationGoal) * 100,
    100
  );

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
    const img = e.target;
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
        {zoomed && <div style={zoomStyle} />} {/* Show zoom effect only when zoomed */}
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
            <p className="dark:text-white justify-center flex font-sans text-3xl mt-6">
              {progressPercentage.toFixed(2)}%
            </p>
      </div>
    </div>
  );
};

export default DonationProgress;
