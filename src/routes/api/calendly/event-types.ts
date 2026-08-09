import { createFileRoute } from "@tanstack/react-router";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/calendly";

interface CalendlyEventType {
  name: string;
  duration: number;
  description_plain: string | null;
  scheduling_url: string;
}

export const Route = createFileRoute("/api/calendly/event-types")({
  server: {
    handlers: {
      GET: async () => {
        const LOVABLE_API_KEY = process.env["LOVABLE_API_KEY"];
        const CALENDLY_API_KEY = process.env["CALENDLY_API_KEY"];

        if (!LOVABLE_API_KEY || !CALENDLY_API_KEY) {
          return Response.json(
            { error: "Calendly är inte anslutet än" },
            { status: 503 },
          );
        }

        try {
          const meResponse = await fetch(`${GATEWAY_URL}/users/me`, {
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": CALENDLY_API_KEY,
            },
          });

          if (!meResponse.ok) {
            const errorText = await meResponse.text();
            console.error("Calendly /users/me failed:", meResponse.status, errorText);
            return Response.json(
              { error: "Kunde inte hämta Calendly-användaren" },
              { status: 500 },
            );
          }

          const meData = (await meResponse.json()) as {
            resource: { uri: string; current_organization: string };
          };
          const userUri = meData.resource.uri;
          const organizationUri = meData.resource.current_organization;

          const url = new URL(`${GATEWAY_URL}/event_types`);
          url.searchParams.set("user", userUri);
          if (organizationUri) {
            url.searchParams.set("organization", organizationUri);
          }
          url.searchParams.set("active", "true");
          url.searchParams.set("count", "100");

          const eventTypesResponse = await fetch(url.toString(), {
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": CALENDLY_API_KEY,
            },
          });

          if (!eventTypesResponse.ok) {
            const errorText = await eventTypesResponse.text();
            console.error("Calendly /event_types failed:", eventTypesResponse.status, errorText);
            return Response.json(
              { error: "Kunde inte hämta bokningstyper" },
              { status: 500 },
            );
          }

          const eventTypesData = (await eventTypesResponse.json()) as {
            collection: CalendlyEventType[];
          };

          const eventTypes = eventTypesData.collection.map((eventType) => ({
            name: eventType.name,
            duration: eventType.duration,
            description: eventType.description_plain ?? "",
            bookingUrl: eventType.scheduling_url,
          }));

          return Response.json({ eventTypes });
        } catch (error) {
          console.error("Calendly event types error:", error);
          return Response.json(
            { error: "Ett fel inträffade vid hämtning av bokningstyper" },
            { status: 500 },
          );
        }
      },
    },
  },
});
