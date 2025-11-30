import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../db";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCounter();
  }, []);

  async function fetchCounter() {
    try {
      const docRef = doc(db, "counter", "count");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setCount(docSnap.data().value || 0);
      } else {
        // Initialize the counter if it doesn't exist
        console.log("No document found, creating one...");
        await setDoc(docRef, { value: 0 });
        setCount(0);
      }
    } catch (error) {
      console.error("Error fetching counter:", error);
    } finally {
      setLoading(false);
    }
  }

  async function increase() {
    try {
      const docRef = doc(db, "counter", "count");

      // Update Firestore
      await updateDoc(docRef, {
        value: increment(1),
      });

      // Update local state
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error updating counter:", error);
    }
  }

  if (loading) {
    return <button disabled>Loading...</button>;
  }

  return <button onClick={increase}>count is {count}</button>;
}
