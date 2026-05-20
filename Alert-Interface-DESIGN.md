---
version: "alpha"
name: "Alert Interface"
description: "Alert Interface Background Effect is designed for delivering a visual treatment or immersive background effect. Key features include atmospheric visuals, motion depth, and flexible presentation layering. It is suitable for visual-first pages, motion studies, and atmospheric hero treatments."
colors:
  primary: "#FF3A1A"
  secondary: "#000000"
  tertiary: "#FFDC24"
  neutral: "#000000"
  background: "#FF3A1A"
  surface: "#D9D9D6"
  text-primary: "#000000"
  text-secondary: "#949494"
  border: "#27272A"
  accent: "#FF3A1A"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "96px"
    fontWeight: 300
    lineHeight: "96px"
    letterSpacing: "-0.01em"
  body-md:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
spacing:
  base: "4px"
  sm: "4px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  gap: "4px"
  card-padding: "20px"
  section-padding: "48px"
components:
  card:
    backgroundColor: "#141414"
    rounded: "9999px"
    padding: "10px"
---

## Overview

- **Composition cues:**
  - Layout: Flex
  - Content Width: Bounded
  - Framing: Open
  - Grid: Minimal

## Colors

The color system uses light mode with #FF3A1A as the main accent and #000000 as the neutral foundation.

- **Primary (#FF3A1A):** Main accent and emphasis color.
- **Secondary (#000000):** Supporting accent for secondary emphasis.
- **Tertiary (#FFDC24):** Reserved accent for supporting contrast moments.
- **Neutral (#000000):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #FF3A1A; Surface: #D9D9D6; Text Primary: #000000; Text Secondary: #949494; Border: #27272A; Accent: #FF3A1A

## Typography

Typography relies on Inter across display, body, and utility text.

- **Display (`display-lg`):** Inter, 96px, weight 300, line-height 96px, letter-spacing -0.01em.
- **Body (`body-md`):** Inter, 12px, weight 500, line-height 16px.

## Layout

Layout follows a flex composition with reusable spacing tokens. Preserve the flex, bounded structural frame before changing ornament or component styling. Use 4px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a flex / bounded composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Flex
- **Content width:** Bounded
- **Base unit:** 4px
- **Scale:** 4px, 8px, 10px, 12px, 16px, 20px, 24px, 28px
- **Section padding:** 48px
- **Card padding:** 20px
- **Gaps:** 4px, 6px, 12px

## Elevation & Depth

Depth is communicated through elevated, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as elevated first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Elevated
- **Borders:** 8px #27272A
- **Shadows:** rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset; rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 58, 26, 0.6) 0px 0px 10px 0px

## Shapes

Shapes rely on a tight radius system anchored by 16px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 16px, 24px, 56px, 9999px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Reuse the existing card surface recipe for content blocks.

### Cards and Surfaces
- **Card surface:** background #141414, border 0px solid rgb(229, 231, 235), radius 9999px, padding 10px, shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px.

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4px rhythm.
- Do reuse the Elevated surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 16px, 24px, 56px, 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected moderate motion intensity without a deliberate reason.

## Motion

Motion feels controlled and interface-led across text, layout, and section transitions. Timing clusters around 300ms and 150ms. Easing favors ease and cubic-bezier(0.4. Hover behavior focuses on text changes.

**Motion Level:** moderate

**Durations:** 300ms, 150ms, 500ms

**Easings:** ease, cubic-bezier(0.4, 0, 0.2, 1)

**Hover Patterns:** text

## WebGL

Reconstruct the graphics as a inset canvas accent using custom shaders. The effect should read as technical, meditative, and atmospheric: dot-matrix particle field with gray monochrome and sparse spacing. Build it from dot particles + soft depth fade so the effect reads clearly. Animate it as slow breathing pulse. Interaction can react to the pointer, but only as a subtle drift. Preserve dom fallback.

**Id:** webgl

**Label:** WebGL

**Stack:** WebGL

**Insights:**
  - **Scene:**
    - **Value:** Inset canvas accent
  - **Effect:**
    - **Value:** Dot-matrix particle field
  - **Primitives:**
    - **Value:** Dot particles + soft depth fade
  - **Motion:**
    - **Value:** Slow breathing pulse
  - **Interaction:**
    - **Value:** Pointer-reactive drift
  - **Render:**
    - **Value:** custom shaders

**Techniques:** Dot matrix, Breathing pulse, Pointer parallax, Shader gradients, DOM fallback

**Code Evidence:**
  - **HTML reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <!-- Scrolling Ruler Canvas -->
      <div class="flex-1 h-full mx-2 relative overflow-hidden flex flex-col justify-end pb-3">
          <canvas id="ruler-canvas" class="absolute inset-0 w-full h-full"></canvas>
          <!-- Central Indicator overlay -->
          <div class="absolute inset-0 flex flex-col items-center justify-between pt-2 pb-[10px] pointer-events-none">
      ```
