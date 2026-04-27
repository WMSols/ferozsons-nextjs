"use client";

import { FadeInSection } from "./helpers/FadeInSection";
import type {
  InjectableCapacityRow,
  ProductionCapacityRow,
} from "../data/types";

export interface ProductionCapacitiesSectionProps {
  productionRows: ProductionCapacityRow[];
  injectableRows: InjectableCapacityRow[];
}

export function ProductionCapacitiesSection({
  productionRows,
  injectableRows,
}: ProductionCapacitiesSectionProps) {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "#03080f",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: -120,
          left: -80,
          width: 480,
          height: 380,
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.13) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16">
        <FadeInSection>
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "#60a5fa" }}
          >
            Output Metrics
          </p>
          <h2
            className="font-display mb-2"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Production Capacities
          </h2>
          <p
            className="font-body mb-10 text-sm"
            style={{ color: "#64748b", fontWeight: 300 }}
          >
            Per single shift / 5 days working
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
              }}
            >
              <thead>
                <tr style={{ background: "rgba(59,130,246,0.15)" }}>
                  <th
                    className="font-display"
                    style={{
                      padding: "14px 24px",
                      textAlign: "left",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#60a5fa",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Dosage Form
                  </th>
                  <th
                    className="font-display"
                    style={{
                      padding: "14px 24px",
                      textAlign: "right",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#60a5fa",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Annual Capacity
                  </th>
                </tr>
              </thead>
              <tbody>
                {productionRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <td
                      className="font-body"
                      style={{ padding: "15px 24px", color: "#e2e8f0" }}
                    >
                      {row.form}
                    </td>
                    <td style={{ padding: "15px 24px", textAlign: "right" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: "rgba(59,130,246,0.12)",
                          border: "1px solid rgba(59,130,246,0.25)",
                          color: "#60a5fa",
                          fontWeight: 500,
                          fontSize: 13,
                          padding: "4px 12px",
                          borderRadius: 999,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#60a5fa",
                            flexShrink: 0,
                            display: "inline-block",
                          }}
                        />
                        {row.capacity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mt-14 mb-2"
            style={{ color: "#fbbf24" }}
          >
            Injectables
          </p>
          <h3
            className="font-display mb-6"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Daily Production Capacity
          </h3>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
              }}
            >
              <thead>
                <tr style={{ background: "rgba(245,158,11,0.1)" }}>
                  {["Form", "Packing Type", "Filling", "Daily Capacity"].map(
                    (h) => (
                      <th
                        key={h}
                        className="font-display"
                        style={{
                          padding: "14px 20px",
                          textAlign: "left",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fbbf24",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {injectableRows.map((row, i) => {
                  const isLyo = row.form === "Lyophilized";
                  const pct = Math.round((row.dailyCapacity / 410000) * 100);
                  return (
                    <tr
                      key={i}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,255,255,0.03)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <td style={{ padding: "13px 20px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "3px 10px",
                            borderRadius: 6,
                            fontSize: 12,
                            fontWeight: 500,
                            background: isLyo
                              ? "rgba(20,184,166,0.15)"
                              : "rgba(59,130,246,0.15)",
                            color: isLyo ? "#5eead4" : "#93c5fd",
                            border: isLyo
                              ? "1px solid rgba(20,184,166,0.2)"
                              : "1px solid rgba(59,130,246,0.2)",
                          }}
                        >
                          {row.form}
                        </span>
                      </td>
                      <td
                        className="font-body"
                        style={{ padding: "13px 20px", color: "#94a3b8" }}
                      >
                        {row.packingType}
                      </td>
                      <td
                        className="font-body"
                        style={{ padding: "13px 20px", color: "#94a3b8" }}
                      >
                        {row.filling}
                      </td>
                      <td style={{ padding: "13px 20px" }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            color: "#fbbf24",
                            fontWeight: 500,
                          }}
                        >
                          {row.dailyCapacity.toLocaleString()}
                          <span
                            style={{
                              display: "inline-block",
                              height: 4,
                              width: 40,
                              background: "rgba(245,158,11,0.25)",
                              borderRadius: 999,
                              position: "relative",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: `${pct}%`,
                                background: "#f59e0b",
                                borderRadius: 999,
                              }}
                            />
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
