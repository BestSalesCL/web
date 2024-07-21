"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ThankYouPage = () => {
  const searchParams = useSearchParams();

  // Verificar que searchParams no sea null antes de usarlo
  const sessionId = searchParams ? searchParams.get("session_id") : null;
  const priceId = searchParams ? searchParams.get("price_id") : null;

  useEffect(() => {
    if (sessionId) {
      // Lógica para manejar el sessionId
      console.log("Session ID:", sessionId);
    }
    if (priceId) {
      // Lógica para manejar el priceId
      console.log("Price ID:", priceId);
    }
  }, [sessionId, priceId]);

  return (
    <section>
      <h1>Thank You Page</h1>
      {sessionId && <p>Session ID: {sessionId}</p>}
      {priceId && <p>Price ID: {priceId}</p>}
    </section>
  );
};

export default ThankYouPage;
