// "use client";
// import React, { useEffect, useState } from "react";

// export const TotalCount = () => {
//   const [stats, setStats] = useState({ total_donations: 0, total_amount: 0 });
//   const [loading, setLoading] = useState(true);

//   const fetchDonationStats = async () => {
//     const API_URL =
//     process.env.NEXT_PUBLIC_BASE_URL || "";
//     try {
//       const response = await fetch(`${API_URL}`);

//       if (!response.ok) {
//         throw new Error("Failed to fetch donation stats");
//       }

//       const data = await response.json();
//       return data; // Returns the donation stats
//     } catch (error) {
//       console.error("Error fetching donation stats:", error);
//       return null; // Return null on error
//     }
//   };

//   useEffect(() => {
//     const getDonationStats = async () => {
//       const data = await fetchDonationStats();
//       if (data) {
//         setStats(data); // Update state with fetched stats
//       }
//       setLoading(false); // Set loading to false once data is fetched
//     };

//     getDonationStats(); // Fetch donation stats on mount
//   }, []);

//   if (loading) {
//     return <div>Loading donation stats...</div>; // Optional loading state
//   }

//   return (
//     <div className="total-counter">
//       <h2>£{stats.total_amount.toFixed(2)}</h2> {/* Use stats.total_amount */}
//     </div>
//   );
// };
