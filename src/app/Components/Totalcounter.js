"use client";
import React, { useEffect, useState } from "react";
import { useDonation } from "./donatecontext";

export const Totalcount = () => {
  const { totalDonations } = useDonation(); // Use the context to get total donations
  const [fetchedTotal, setFetchedTotal] = useState(0);
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

  // Fetch total donations when the component mounts
  useEffect(() => {
    const fetchTotalDonations = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/donation-stats`,
        ); // Adjust the URL if needed
        const data = await response.json();
        setFetchedTotal(data.totalAmount); // Set the fetched total
      } catch (error) {
      }
    };

    fetchTotalDonations();
  }, []); // Run once on component mount

  // Ensure both fetchedTotal and totalDonations are numbers
  const totalAmount =
    (Number(fetchedTotal) || 0) + (Number(totalDonations) || 0);

  return (
    <div className="total-counter">
      {" "}
      {/* Apply the new CSS class */}
      <h2>
        £{totalAmount.toFixed(2)}{" "}
        {/* Combine fetched total with in-memory total */}
      </h2>
    </div>
  );
};
