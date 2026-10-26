"use client";

import { useEffect } from "react";

/** Temporary debug probe — remove after font investigation. */
export default function FontDebugProbe() {
  useEffect(() => {
    // #region agent log
    const probe = async () => {
      try {
        await document.fonts.ready;
        const h2 = document.querySelector("h2");
        const p = document.querySelector("section p, .text-center p, p");
        const body = document.body;
        const cs = (el: Element | null) =>
          el ? getComputedStyle(el).fontFamily : null;
        const root = getComputedStyle(document.documentElement);
        const bodyCs = getComputedStyle(body);
        const fontChecks = [
          "Kaisei Opti",
          "Open Sans",
          "Inter",
          "Merriweather",
          "Georgia",
          "Times New Roman",
        ].map((family) => ({
          family,
          // 16px regular sample is enough to detect face availability
          check: document.fonts.check(`16px "${family}"`),
        }));
        const loaded = [...document.fonts].map((f) => ({
          family: f.family,
          status: f.status,
          weight: f.weight,
        }));
        const uniqueFamilies = [...new Set(loaded.map((f) => f.family))];
        const payload = {
          sessionId: "31ec40",
          runId: "font-probe-post-fix",
          hypothesisId: "A",
          location: "FontDebugProbe.tsx",
          message: "Purpose page computed fonts",
          data: {
            href: window.location.href,
            h2Font: cs(h2),
            pFont: cs(p),
            bodyFont: cs(body),
            cssVarFontSans: bodyCs.getPropertyValue("--font-sans").trim(),
            cssVarFontSerif: bodyCs.getPropertyValue("--font-serif").trim(),
            cssVarFontKaiseiOpti: bodyCs
              .getPropertyValue("--font-kaisei-opti")
              .trim(),
            cssVarFontOpenSansFace: bodyCs
              .getPropertyValue("--font-open-sans-face")
              .trim(),
            cssVarFontKaisei: root.getPropertyValue("--font-kaisei").trim() ||
              bodyCs.getPropertyValue("--font-kaisei").trim(),
            cssVarFontOpenSans:
              root.getPropertyValue("--font-open-sans").trim() ||
              bodyCs.getPropertyValue("--font-open-sans").trim(),
            fontChecks,
            uniqueFamilies,
            hasKaiseiLoaded: uniqueFamilies.some((f) =>
              f.toLowerCase().includes("kaisei"),
            ),
            hasOpenSansLoaded: uniqueFamilies.some((f) =>
              f.toLowerCase().includes("open sans"),
            ),
            loadedFontsSample: loaded.slice(0, 40),
            stylesheets: [...document.styleSheets].map((s) => {
              try {
                return { href: s.href, rules: s.cssRules?.length ?? null };
              } catch {
                return { href: s.href, rules: "blocked" };
              }
            }),
          },
          timestamp: Date.now(),
        };
        fetch(
          "http://127.0.0.1:7243/ingest/c88787b6-803a-4638-98e1-6ab444f29bd8",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Debug-Session-Id": "31ec40",
            },
            body: JSON.stringify(payload),
          },
        ).catch(() => {});
        console.info("[FontDebugProbe]", payload.data);
      } catch (err) {
        fetch(
          "http://127.0.0.1:7243/ingest/c88787b6-803a-4638-98e1-6ab444f29bd8",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Debug-Session-Id": "31ec40",
            },
            body: JSON.stringify({
              sessionId: "31ec40",
              runId: "font-probe-1",
              hypothesisId: "A-B-C",
              location: "FontDebugProbe.tsx",
              message: "Font probe failed",
              data: { error: String(err) },
              timestamp: Date.now(),
            }),
          },
        ).catch(() => {});
      }
    };
    void probe();
    // #endregion
  }, []);

  return null;
}
