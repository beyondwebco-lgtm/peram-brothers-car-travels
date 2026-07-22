# History of Changes

This file records all modifications made to the Peram Brothers Car Travels codebase.

## 2026-07-22

### 1. Hero Section Tagline & Route Offer Update
* **File Modified**: `src/components/Hero.tsx`
* **Changes**:
  * Completely removed the original `"Luxury Transportation Service"` tagline text and badge.
  * Added a new prominent route & price offer block for **Vijayawada 🔁 Hyderabad** (Starting at **₹5,999**).
  * Relocated this route/price offer block to be directly **below** the main brand heading (`PERAM BROTHER'S Car Travels`) and **above** the description.
  * Styled the offer block as a premium glassmorphic card (`bg-white/5 backdrop-blur border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`) with the route name in bold uppercase (`VIJAYAWADA 🔁 HYDERABAD`) and the price label in uppercase (`PRICES STARTING FROM JUST`).
  * Decreased route text size specifically for mobile screen dimensions from `text-2xl` to `text-lg` to prevent wrapping issues, while preserving the larger desktop scaling (`text-lg sm:text-3xl lg:text-4xl`).
  * Highlighted the price ₹5,999 in a larger primary blue badge (`bg-primary text-white text-base sm:text-lg lg:text-xl`).

### 2. Fleet Cards Route & Fare Info Update
* **File Modified**: `src/components/Fleet.tsx`
* **Changes**:
  * Added a clean, capitalized **VIJAYAWADA 🔁 HYDERABAD** route badge (styled in light-blue `bg-blue-50/70 border border-blue-100/50`) directly below the vehicle name on all catalog cards, setting the text size to match the vehicle name (using responsive `text-lg sm:text-xl` font sizing with balanced padding).
  * Repositioned the **Comfort Rating** (e.g., `4.5 ⭐`) to the right of the route badge on the same row, enabling flex-wrapping for smaller screen responsiveness.
  * Moved the **Starting Fare** display (price and label) to its own row below the route/rating row and centered it horizontally (`justify-center`).
  * Renamed and reformatted all vehicles inside the dataset to include seat capacity and AC specifications (in brackets):
    * `"New Swift Dzire"` → `"NEW DZIRE (4+1 AC)"`
    * `"Toyota Etios"` → `"TOYOTA ETIOS (4+1 AC)"`
    * `"New Ertiga"` → `"NEW ERTIGA (6+1 AC)"`
    * `"Kia Carens"` → `"KIA CARENS (6+1 AC)"`
    * `"Toyota Innova"` → `"TOYOTA INNOVA (7+1 AC)"`
    * `"Toyota Innova Crysta"` → `"TOYOTA CRYSTA (7+1 AC)"`
  * Copied `toyota innova.jpeg` from the root workspace directory to `public/toyota-innova.jpg` and updated the image path reference for the `"TOYOTA INNOVA (7+1 AC)"` card in the dataset.
  * Copied `innova crysta.webp` from the root workspace directory to `public/innova-crysta.webp` to update the asset for the `"TOYOTA CRYSTA (7+1 AC)"` card and Hero poster fallback.
  * Updated the `getWhatsAppLink()` function to generate a route-specific WhatsApp booking message:
    ```typescript
    const text = `Hello Peram Brother's Car Travels, I am interested in booking the ${vehicleName} for the Vijayawada 🔁 Hyderabad route (Starting Fare: ${price}). Please check availability and confirm the travel details.`;
    ```

### 3. Global Brand Name Apostrophe Correction
* **Files Modified**: `src/app/layout.tsx`, `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/Fleet.tsx`, `src/components/WhyChooseUs.tsx`, `src/components/Contact.tsx`, `src/components/Footer.tsx`
* **Changes**:
  * Replaced all occurrences of `"Peram Brothers"` with `"Peram Brother's"` (or `"PERAM BROTHER'S"` where in uppercase) globally.
  * Corrected brand names in metadata title tags, OpenGraph attributes, structural JSON-LD datasets, alt attributes, labels, heading components, footer text, and WhatsApp request message strings.
