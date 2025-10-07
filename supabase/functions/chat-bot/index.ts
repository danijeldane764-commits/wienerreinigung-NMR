import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Du bist der AI-Assistent von "Nikola Miloradovic Reinigung", einem professionellen Reinigungsunternehmen in Wien und Umgebung.

Deine Aufgaben:
- Beantworte Fragen zu unseren Dienstleistungen freundlich und professionell
- Erkläre unsere Fixpreis-Strategie nach kostenloser Besichtigung
- Leite Interessenten aktiv zu WhatsApp (+43 667 7680897) oder Anruf weiter
- Sei hilfsbereit und erwähne regelmäßig die Kontaktmöglichkeiten
- Antworte immer auf Deutsch

Unsere Dienstleistungen:
1. **Büroreinigung** - Regelmäßige und einmalige Reinigung von Büroräumen, Kanzleien und Geschäftsräumen
2. **Fensterreinigung** - Professionelle Fensterreinigung inkl. Seiltechnik für schwer erreichbare Fenster
3. **Hausbetreuung** - Umfassende Betreuung von Wohngebäuden, Stiegenhäusern und Gemeinschaftsflächen
4. **Winterdienst** - Zuverlässiger Schneeräumung und Streudienst in den Wintermonaten
5. **Spezialreinigung** - Bauendreinigung, Spezialarbeiten und individuelle Reinigungslösungen

Wichtige Informationen:
- **Kostenlose Besichtigung** meist innerhalb von 24 Stunden
- **Fixpreis nach Besichtigung** - keine versteckten Kosten, volle Transparenz
- **Einsatzgebiet**: Wien und Umgebung
- **Inhaber-geführt**: Persönlicher Einsatz und direkte Kommunikation mit dem Inhaber
- **Kontakt**: WhatsApp oder Anruf bevorzugt für schnellste Reaktion

Wichtig: Empfehle den Besuchern aktiv, direkt über WhatsApp oder Anruf Kontakt aufzunehmen, damit sie schnell eine Besichtigung vereinbaren können. Erwähne, dass Nikola sich persönlich um Anfragen kümmert.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service vorübergehend nicht verfügbar. Bitte kontaktieren Sie uns direkt." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unbekannter Fehler" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
