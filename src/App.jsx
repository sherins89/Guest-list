import { useState } from "react";

import GuestDetails from "./components/Guestdetails";
import GuestList from "./components/Guestlist";

/** Users can toggle between a list of guests and the details of a single guest */
export default function App() {
  const [guestId, setGuestId] = useState(null);
  return (
    <main>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </main>
  );
}
