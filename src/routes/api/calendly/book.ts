import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/calendly/book")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env["LOVABLE_API_KEY"];
        const CALENDLY_API_KEY = process.env["CALENDLY_API_KEY"];

        if (!LOVABLE_API_KEY || !CALENDLY_API_KEY) {
          return Response.json(
            { error: "Calendly är inte anslutet än" },
            { status: 503 },
          );
        }

        try {
          const body = (await request.json()) as {
            eventTypeUri: string;
            startTime: string;
            name: string;
            email: string;
          };

          const { eventTypeUri, startTime, name, email } = body;

          if (!eventTypeUri || !startTime || !name || !email) {
            return Response.json(
              { error: "eventTypeUri, startTime, name och email krävs" },
              { status: 400 },
            );
          }

          const response = await fetch(
            "https://connector-gateway.lovable.dev/calendly/invites",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${LOVABLE_API_KEY}`,
                "X-Connection-Api-Key": CALENDLY_API_KEY,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                event_type: eventTypeUri,
                start_time: startTime,
                invitee: {
                  name,
                  email,
                },
              }),
            },
          );

          if (!response.ok) {
            const errorText = await response.text();
            console.error("Calendly booking failed:", response.status, errorText);
            return Response.json(
              { error: "Bokningen misslyckades", details: errorText },
              { status: response.status },
            );
          }

          const data = await response.json();
          return Response.json({ success: true, booking: data });
        } catch (error) {
          console.error("Calendly booking error:", error);
          return Response.json(
            { error: "Ett fel inträffade vid bokning" },
            { status: 500 },
          );
        }
      },
    },
  },
});
