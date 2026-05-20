# Ghamer — Local Gaming Community App

React Native 0.85 + TypeScript mobile app connecting gamers with local communities, events, and tournaments.

---

## Quick Start

### Prerequisites
- Node.js ≥ 22
- Java 17 (Android)
- Xcode 15+ (iOS / macOS only)
- Android Studio + emulator

### Run on Android

```bash
cd C:\Users\PC\Desktop\ghamer
npm install
npx react-native run-android
```

### Run on iOS (macOS only)

```bash
cd ios && bundle install && bundle exec pod install && cd ..
npx react-native run-ios
```

---

## Adding Inter Font

1. Download [Inter](https://fonts.google.com/specimen/Inter) — download all weights
2. Place `.ttf` files in `android/app/src/main/assets/fonts/`
3. Required files:
   - `Inter-Regular.ttf`
   - `Inter-Medium.ttf`
   - `Inter-SemiBold.ttf`
   - `Inter-Bold.ttf`
   - `Inter-ExtraBold.ttf`
4. For iOS, add fonts to Xcode project and `Info.plist`
5. Run: `npx react-native-asset` (install with `npm install -g react-native-asset`)

Until fonts are installed, React Native will fall back to the system font.

---

## Project Structure

```
ghamer/
├── App.tsx                    ← Entry point
├── global.css                 ← NativeWind CSS
├── tailwind.config.js         ← Design tokens
├── babel.config.js            ← NativeWind babel plugin
├── metro.config.js            ← Metro + NativeWind bundler
│
└── src/
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx     ← primary | secondary | outline | ghost
    │   │   ├── Card.tsx       ← default | elevated | outlined | filled | dark | gradient
    │   │   ├── Input.tsx      ← animated border focus, dark mode, password toggle
    │   │   └── Badge.tsx      ← 8 color variants, dot indicator
    │   └── common/
    │       ├── Header.tsx     ← left/right actions, transparent mode
    │       ├── Loading.tsx    ← pulsing animation, fullscreen
    │       └── EmptyState.tsx ← icon, description, CTA
    │
    ├── screens/
    │   ├── Onboarding/
    │   │   ├── OnboardingOne.tsx    ← Hero card + animated entrance
    │   │   ├── OnboardingTwo.tsx    ← Feature cards with stagger animation
    │   │   └── OnboardingThree.tsx ← CTA with mascot + glow button
    │   ├── Auth/
    │   │   ├── Login.tsx            ← Email/password with validation
    │   │   └── Signup.tsx           ← Username/email/password with hints
    │   ├── Home/index.tsx           ← Feed with hero banner, communities, events
    │   ├── Explore/index.tsx        ← Search + category filter
    │   ├── Map/index.tsx            ← Nearby events map (map placeholder)
    │   ├── Community/index.tsx      ← Social feed with likes
    │   └── Profile/index.tsx        ← Stats, achievements, menu
    │
    ├── navigation/
    │   ├── AppNavigator.tsx         ← Root navigator (state machine)
    │   ├── OnboardingNavigator.tsx  ← Step controller + dot indicator
    │   ├── AuthNavigator.tsx        ← Stack: Login ↔ Signup
    │   ├── MainTabNavigator.tsx     ← Bottom tabs (dark theme)
    │   └── types.ts                 ← All navigation type definitions
    │
    ├── theme/
    │   ├── colors.ts     ← Full color palette
    │   ├── spacing.ts    ← Spacing scale + borderRadius + shadows
    │   ├── typography.ts ← displayLg, displayMd, h1–h4, bodyMd, label, caption
    │   └── index.ts      ← Unified export
    │
    └── utils/index.ts    ← Screen dimensions, normalize(), formatNumber()
```

---

## Design System

### Colors

| Token         | Value     | Role                       |
|---------------|-----------|----------------------------|
| `primary`     | `#FF3A1A` | CTAs, active states, glow  |
| `secondary`   | `#000000` | Dark surfaces              |
| `tertiary`    | `#FFDC24` | Accents, highlights        |
| `surface`     | `#D9D9D6` | Inactive states            |
| `textPrimary` | `#000000` | Body text                  |
| `textSecondary`| `#949494`| Muted text, placeholders   |
| `border`      | `#27272A` | Card borders               |

### Typography

| Token        | Size | Weight    | Usage              |
|-------------|------|-----------|---------------------|
| `displayLg` | 40px | ExtraBold | Onboarding hero     |
| `displayMd` | 32px | Bold      | Screen titles       |
| `h1`–`h4`   | 28→18px | Bold/SemiBold | Headers       |
| `bodyMd`    | 15px | Regular   | Body copy           |
| `label`     | 13px | Medium    | Form labels, tags   |
| `caption`   | 11px | Regular   | Metadata, hints     |

### Spacing Scale
`4 · 8 · 10 · 12 · 16 · 20 · 24 · 28 · 40 · 48`

### Border Radius
`sm: 8` · `DEFAULT: 16` · `lg: 24` · `pill: 56` · `full: 9999`

### Shadows
- `sm` — Subtle lift (cards)
- `md` — Depth (modals, floating)
- `glow` — Primary red glow (CTA buttons, avatar)

---

## Adding react-native-maps (Map screen)

```bash
npm install react-native-maps
cd ios && pod install
```

Then replace the placeholder in `src/screens/Map/index.tsx` with `<MapView>`.

---

## Tech Stack

| Layer         | Technology                       |
|---------------|----------------------------------|
| Framework     | React Native 0.85                |
| Language      | TypeScript                       |
| Navigation    | React Navigation 7 (Stack + Tabs)|
| Styling       | NativeWind v4 + StyleSheet       |
| Animations    | React Native Animated API        |
| Gradients     | react-native-linear-gradient     |
| Safe Areas    | react-native-safe-area-context   |
| Gestures      | react-native-gesture-handler     |
