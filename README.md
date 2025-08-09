# LiDAR App

This is a Next.js application based on the detailed wireframe and flow provided. It serves as the foundational codebase for the LiDAR App.

## High-Level Flow

This diagram illustrates the user flow through the application, from authentication to project export.

```mermaid
flowchart TD
  A[Auth\nCreate account / Continue with Google] --> B[New Project\nScan or Upload + Address]
  B --> C{LiDAR or Upload}
  C -->|Scan with LiDAR| D[Capture\nRoom-by-room]
  C -->|Upload a scan| U[Upload\nValidate → Process]
  D --> E[Processing\nAlign → 2D → Snap → Dimension → Label]
  U --> E
  E --> F[Plan Review\nFix small issues]
  F --> G[Job Type Selection\nKitchen/Bath/Egress/etc]
  G --> H[Compliance Overlay\nPins + Pass/Fail/Pending]
  H --> I[Resolve & Notes\nAssign / Add Photo]
  I --> J[Export\nLender / GC / Owner]
  J --> K[Project Home\nTimeline + Versions]
```

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
