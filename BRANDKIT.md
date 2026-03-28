# iCMMS Brand Kit

## Brand Overview
iCMMS is an AI-native CMMS (Computerized Maintenance Management System) for mission-critical data centers. The brand conveys trust, intelligence, reliability, and modern technology.

## Color Palette

### Primary Colors
- **Navy Dark**: `#0A1628` - Main dark background for hero sections
- **Navy Deep**: `#0F1F3D` - Secondary dark background
- **Blue Primary**: `#4F87FF` - Primary brand color, used for logo and CTAs
- **Blue Accent**: `#5B8CFF` - Lighter blue for hover states

### Secondary Colors
- **Light Gray**: `#F5F7FA` - Light background sections
- **White**: `#FFFFFF` - Card backgrounds and light sections
- **Gray Light**: `#E5E7EB` - Borders and dividers
- **Gray Medium**: `#6B7280` - Secondary text
- **Gray Dark**: `#374151` - Primary text on light backgrounds

### Accent Colors
- **Purple Accent**: `#9F7AEA` - Used in gradients
- **Pink Accent**: `#F687B3` - Used in gradients
- **Blue Info**: `#3B82F6` - Information badges
- **Green Success**: `#10B981` - Success states
- **Red Status**: `#EF4444` - Status indicators

### Gradients
- **Button Gradient**: `linear-gradient(135deg, #4F87FF 0%, #9F7AEA 50%, #F687B3 100%)`
- **Accent Gradient**: `linear-gradient(90deg, #4F87FF 0%, #9F7AEA 100%)`

## Typography

### Font Families
- **Primary Font**: System UI stack
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  ```

### Font Sizes
- **Hero Title**: `3.5rem` (56px) - Weight: 700
- **H1**: `3rem` (48px) - Weight: 700
- **H2**: `2.25rem` (36px) - Weight: 700
- **H3**: `1.875rem` (30px) - Weight: 600
- **H4**: `1.5rem` (24px) - Weight: 600
- **Body Large**: `1.125rem` (18px) - Weight: 400
- **Body**: `1rem` (16px) - Weight: 400
- **Small**: `0.875rem` (14px) - Weight: 400
- **Tiny**: `0.75rem` (12px) - Weight: 400

### Line Heights
- **Headings**: 1.2
- **Body**: 1.6
- **Tight**: 1.4

## Spacing System
Based on 8px base unit:
- **xs**: `0.5rem` (8px)
- **sm**: `1rem` (16px)
- **md**: `1.5rem` (24px)
- **lg**: `2rem` (32px)
- **xl**: `3rem` (48px)
- **2xl**: `4rem` (64px)
- **3xl**: `6rem` (96px)

## Components

### Buttons

#### Primary Button
- Background: Gradient (`#4F87FF` to `#9F7AEA` to `#F687B3`)
- Text Color: White
- Padding: `0.75rem 2rem` (12px 32px)
- Border Radius: `0.5rem` (8px)
- Font Weight: 600
- Transition: All 0.3s ease

#### Secondary Button (Outline)
- Background: Transparent
- Border: 2px solid `#4F87FF`
- Text Color: `#4F87FF` (light mode) / `#FFFFFF` (dark mode)
- Padding: `0.75rem 2rem`
- Border Radius: `0.5rem`
- Font Weight: 600

### Cards
- Background: White (`#FFFFFF`) on light backgrounds
- Background: `#0F1F3D` on dark backgrounds
- Border Radius: `1rem` (16px)
- Padding: `2rem` (32px)
- Box Shadow: `0 4px 6px rgba(0, 0, 0, 0.1)`

### Badges
- Background: `#E0E7FF` (light blue)
- Text Color: `#4F87FF`
- Padding: `0.25rem 0.75rem` (4px 12px)
- Border Radius: `9999px` (full)
- Font Size: `0.875rem` (14px)
- Font Weight: 500

### Navigation
- Background: `#0A1628` / Semi-transparent dark
- Height: `4rem` (64px)
- Text Color: White
- Hover: `#4F87FF`
- Active: `#4F87FF` with underline

## Logo

### Logo Specifications
- Icon: Blue hexagonal shape with rounded corners
- Text: "iCMMS" in bold sans-serif
- Color: `#4F87FF` (blue) or white on dark backgrounds
- Minimum Size: 120px width
- Clear Space: 16px on all sides

### Logo Usage
- Dark backgrounds: White or blue logo
- Light backgrounds: Blue or dark logo
- Never distort or rotate
- Maintain aspect ratio

## Iconography
- Style: Outline/stroke icons
- Library: Lucide React
- Stroke Width: 2px
- Size: 24px default, 20px for small, 32px for large
- Color: Inherit from parent or `#4F87FF` for accents

## Layout

### Container
- Max Width: `1280px`
- Padding: `2rem` (mobile), `4rem` (desktop)
- Centered

### Grid
- Columns: 12-column grid
- Gap: `2rem` (32px)

### Sections
- Padding: `4rem 0` (mobile), `6rem 0` (desktop)
- Alternating backgrounds (white/light gray)

## Design Principles

1. **Clarity**: Information is structured and easy to digest
2. **Trust**: Professional appearance with attention to detail
3. **Modern**: Clean, contemporary design without unnecessary decoration
4. **Consistent**: Uniform spacing, colors, and typography throughout
5. **Accessible**: High contrast ratios, readable fonts, clear hierarchy

## Content Tone

### Voice Characteristics
- Professional yet approachable
- Technical but not overly complex
- Confident and authoritative
- Solution-focused

### Messaging Themes
- AI-native technology
- Mission-critical reliability
- Operational excellence
- Data-driven insights
- Enterprise-grade security

## Responsive Breakpoints

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`
- **Large Desktop**: `> 1280px`

## Animation & Transitions

### Timing
- **Fast**: 150ms - Hover states, small interactions
- **Normal**: 300ms - Default transitions
- **Slow**: 500ms - Page transitions, modals

### Easing
- **Standard**: `ease-in-out`
- **Enter**: `ease-out`
- **Exit**: `ease-in`

### Effects
- Fade in on scroll
- Smooth color transitions
- Gentle scale on hover (1.02x)
- Slide up for cards and content blocks

## Accessibility

- WCAG 2.1 AA compliance minimum
- Color contrast ratios: 4.5:1 for normal text, 3:1 for large text
- Focus indicators visible on all interactive elements
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support

## Usage Guidelines

### Do's
- Use the brand colors consistently
- Maintain proper spacing and alignment
- Use high-quality images
- Keep typography hierarchy clear
- Ensure mobile responsiveness

### Don'ts
- Don't use unapproved colors
- Don't overcrowd the layout
- Don't use low-resolution images
- Don't mix multiple font families
- Don't ignore mobile experience

## File Structure
```
src/
├── components/
│   ├── Layout.tsx
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   ├── AINavtive.tsx
│   ├── Platform.tsx
│   ├── Security.tsx
│   ├── Sustainability.tsx
│   └── Theme.tsx
└── assets/
    └── [image files]
```

## Version History
- v1.0 - Initial brand kit (2026-03-28)
