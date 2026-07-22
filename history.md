# History of Changes

This file records all modifications made to the Peram Brothers Car Travels codebase.

## 2026-07-22

### 1. Hero Section Tagline & Route Offer Update
* **File Modified**: `src/components/Hero.tsx`
* **Changes**:
  * Completely removed the original `"Luxury Transportation Service"` tagline text and badge.
  * Added a new prominent route & price offer block for **Vijayawada ↔ Hyderabad** (Starting at **₹5,999**).
  * Relocated this route/price offer block to be directly **below** the main brand heading (`PERAM BROTHER'S Car Travels`) and **above** the description.
  * Styled the offer block as a premium glassmorphic card (`bg-white/5 backdrop-blur border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`) with the route name highlighted in bold text and the price ₹5,999 in a primary blue badge (`bg-primary text-white`).

### 2. Fleet Cards Route & Fare Info Update
* **File Modified**: `src/components/Fleet.tsx`
* **Changes**:
  * Imported the `ArrowLeftRight` icon from `lucide-react`.
  * Added a **Vijayawada ↔ Hyderabad** route badge (styled in light-blue `bg-blue-50/70 border border-blue-100/50`) directly below the vehicle name on all catalog cards.
  * Repositioned the **Comfort Rating** (e.g., `4.5 ⭐`) to the right of the route badge on the same row.
  * Moved the **Starting Fare** display (price and label) to its own row below the route/rating row and centered it horizontally (`justify-center`).
  * Updated the `getWhatsAppLink()` function to generate a route-specific WhatsApp booking message:
    ```typescript
    const text = `Hello Peram Brothers Car Travels, I am interested in booking the ${vehicleName} for the Vijayawada ↔ Hyderabad route (Starting Fare: ${price}). Please check availability and confirm the travel details.`;
    ```
