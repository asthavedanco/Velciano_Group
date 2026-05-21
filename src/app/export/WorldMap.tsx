"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    am5: any;
    am5map: any;
    am5geodata_worldLow: any;
    am5themes_Animated: any;
  }
}

export default function WorldMap() {
  const [allScriptsLoaded, setAllScriptsLoaded] = useState(false);

  useEffect(() => {
    // 1. If already loaded in window, resolve immediately
    if (
      window.am5 &&
      window.am5map &&
      window.am5geodata_worldLow &&
      window.am5themes_Animated
    ) {
      setAllScriptsLoaded(true);
      return;
    }

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script tag is already injected in DOM
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          // If script tag is in DOM, it might still be loading or already loaded
          if (
            (src.includes("index.js") && window.am5) ||
            (src.includes("map.js") && window.am5map) ||
            (src.includes("worldLow.js") && window.am5geodata_worldLow) ||
            (src.includes("Animated.js") && window.am5themes_Animated)
          ) {
            resolve();
            return;
          }
          
          // Wait for load if it's already there
          const handleLoad = () => {
            script.removeEventListener("load", handleLoad);
            resolve();
          };
          const script = existing as HTMLScriptElement;
          script.addEventListener("load", handleLoad);
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
      });
    };

    // 2. Sequential Loading: index.js MUST be loaded first
    loadScript("https://cdn.amcharts.com/lib/5/index.js")
      .then(() => {
        // Once index.js is loaded, load map, geodata, and themes in parallel
        return Promise.all([
          loadScript("https://cdn.amcharts.com/lib/5/map.js"),
          loadScript("https://cdn.amcharts.com/lib/5/geodata/worldLow.js"),
          loadScript("https://cdn.amcharts.com/lib/5/themes/Animated.js"),
        ]);
      })
      .then(() => {
        setAllScriptsLoaded(true);
      })
      .catch((err) => {
        console.error("Error loading amCharts scripts programmatically:", err);
      });
  }, []);

  useEffect(() => {
    if (!allScriptsLoaded) return;

    const am5 = window.am5;
    const am5map = window.am5map;
    const am5geodata_worldLow = window.am5geodata_worldLow;
    const am5themes_Animated = window.am5themes_Animated;

    if (!am5 || !am5map || !am5geodata_worldLow || !am5themes_Animated) {
      console.warn("amCharts globals not fully available on window yet.");
      return;
    }

    // 3. Prevent duplicate Root container error (React Strict Mode double mount)
    am5.registry.rootElements.forEach((rootEl: any) => {
      if (rootEl.dom && rootEl.dom.id === "chartdiv") {
        rootEl.dispose();
      }
    });

    // Create root and chart
    const root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoNaturalEarth1(),
        wheelY: "none",
      })
    );

    // Disable zooming/wheel to keep it clean and inline
    chart.chartContainer.wheelable = false;

    // Create polygon series
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"], // Exclude Antarctica
      })
    );

    // Configure series
    polygonSeries.mapPolygons.template.setAll({
      tooltipHTML: `<div style="text-align: center; background: #050505; border: 1px solid var(--primary); padding: 8px 16px; border-radius: 8px; color: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.3)">
        <div style="font-size: 14px; font-weight: 700; color: var(--primary); margin-bottom: 2px;">{name}</div>
        <div style="font-size: 12px; opacity: 0.8;">Premium Partner Country</div>
      </div>`,
      templateField: "polygonSettings",
      fill: am5.color(0x1a1a1a), // Default background for non-exported countries (premium dark theme)
      stroke: am5.color(0x333333), // Subtle border
      strokeWidth: 0.5,
    });

    // Create hover state
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xB17D26), // Hover fill color - Luxury Gold brand color
    });

    // Set specific data settings for our exported countries
    const exportedCountries = [
      { id: "US", name: "United States", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "DE", name: "Germany", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "CA", name: "Canada", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "GB", name: "United Kingdom", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "FR", name: "France", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "NL", name: "Netherlands", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "PH", name: "Philippines", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "MX", name: "Mexico", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "BE", name: "Belgium", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "IT", name: "Italy", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "JP", name: "Japan", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "AU", name: "Australia", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "PL", name: "Poland", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "GR", name: "Greece", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "AT", name: "Austria", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "CZ", name: "Czech Republic", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "CN", name: "China", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "SE", name: "Sweden", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "CH", name: "Switzerland", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "IE", name: "Ireland", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "ES", name: "Spain", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "RU", name: "Russia", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "FI", name: "Finland", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "DK", name: "Denmark", polygonSettings: { fill: am5.color(0xB17D26) } },
      { id: "IN", name: "India", polygonSettings: { fill: am5.color(0xB17D26) } }, // Origin
    ];

    polygonSeries.data.setAll(exportedCountries);

    return () => {
      root.dispose();
    };
  }, [allScriptsLoaded]);

  return (
    <div style={{ width: "100%", overflow: "hidden", display: "flex", justifyContent: "center", position: "relative" }}>
      <div
        id="chartdiv"
        style={{
          width: "100%",
          height: "550px",
          maxWidth: "1200px",
          background: "transparent",
          position: "relative",
          zIndex: 10,
        }}
      />
    </div>
  );
}
