"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
const DonationContext = createContext();

// Create a provider component
export const DonationProvider = ({ children }) => {
  const [totalDonations, setTotalDonations] = useState(0);
  const [donationCount, setDonationCount] = useState(0); // Track number of donations

  const addDonation = (amount) => {
    setTotalDonations((prevTotal) => prevTotal + amount);
    setDonationCount((prevCount) => prevCount + 1); // Increment donation count
  };

  return (
    <DonationContext.Provider
      value={{ totalDonations, donationCount, addDonation }}
    >
      {children}
    </DonationContext.Provider>
  );
};

// Custom hook to use the DonationContext
export const useDonation = () => {
  return useContext(DonationContext);
};
