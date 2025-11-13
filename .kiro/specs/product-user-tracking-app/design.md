# Design Document

## Overview

This design document outlines the architecture and implementation approach for a static Next.js application featuring two sortable data tables: Product Updates and User Interactions. The application will use Next.js 16 with React 19, TypeScript, and Tailwind CSS for styling. We'll leverage shadcn/ui components for a modern, clean white-themed interface.

## Architecture

### Application Structure

The application follows a simple client-side architecture:

```
src/
├── app/
│   ├── layout.tsx (root layout with navigation)
│   ├── page.tsx (Product Updates - default route)
│   ├── user-interactions/
│   │   └── page.tsx (User Interactions page)
│   └── globals.css
├── components/
│   ├── ui/ (shadcn components)
│   │   ├── table.tsx
│   │   └── button.tsx
│   ├── product-updates-table.tsx
│   └── user-interactions-table.tsx
├── lib/
│   ├── utils.ts (shadcn utility functions)
│   └── data.ts (dummy data)
└── types/
    └── index.ts (TypeScript type definitions)
```

### Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Component Library**: shadcn/ui (for Table components)
- **Language**: TypeScript
- **Deployment**: Static export (next export)

## Components and Interfaces

### Data Types

```typescript
// Product Update
interface ProductUpdate {
  id: string;
  feature: string;
  status: 'Done' | 'Pending';
  priority: 'High' | 'Medium' | 'Low';
  date: string; // ISO date format
}

// User Interaction
interface UserInteraction {
  id: string;
  question: string;
  answer: string;
  feature: string;
  priority: 'High' | 'Medium' | 'Low';
  featureStatus: 'Done' | 'Pending';
}

// Sort configuration
type SortDirection = 'asc' | 'desc' | null;
interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}
```

### Component Hierarchy

1. **Root Layout** (`app/layout.tsx`)
   - Contains navigation links
   - Provides consistent white theme styling
   - Wraps all pages

2. **Product Updates Page** (`app/page.tsx`)
   - Default route
   - Renders ProductUpdatesTable component

3. **User Interactions Page** (`app/user-interactions/page.tsx`)
   - Secondary route
   - Renders UserInteractionsTable component

4. **ProductUpdatesTable Component**
   - Displays sortable table of product updates
   - Manages sort state locally
   - Uses shadcn Table components

5. **UserInteractionsTable Component**
   - Displays sortable table of user interactions
   - Manages sort state locally
   - Uses shadcn Table components

### Sorting Logic

Each table component will implement client-side sorting:

```typescript
const handleSort = (key: keyof DataType) => {
  let direction: SortDirection = 'asc';
  
  if (sortConfig.key === key) {
    if (sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.direction === 'desc') {
      direction = null;
    }
  }
  
  setSortConfig({ key, direction });
};

const sortedData = useMemo(() => {
  if (!sortConfig.direction) return data;
  
  return [...data].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    // Handle different data types (string, date, enum)
    // Return comparison based on direction
  });
}, [data, sortConfig]);
```

## Data Models

### Dummy Data

The application will include hardcoded dummy data in `lib/data.ts`:

**Product Updates** (minimum 5 entries):
- Mix of Done/Pending statuses
- Various priority levels
- Dates spanning recent months
- Realistic feature names

**User Interactions** (minimum 5 entries):
- Questions with corresponding answers
- Associated feature names
- Mix of priority levels
- Mix of Done/Pending feature statuses

### Data Storage

Since this is a static application, all data will be:
- Hardcoded in TypeScript files
- No backend or database required
- No API calls needed
- Data imported directly into components

## UI Design

### Theme Specifications

**Color Palette** (White Theme):
- Background: White (#FFFFFF)
- Text Primary: Dark Gray (#1F2937)
- Text Secondary: Medium Gray (#6B7280)
- Borders: Light Gray (#E5E7EB)
- Hover States: Very Light Gray (#F9FAFB)
- Accent: Subtle Blue for interactive elements (#3B82F6)

**Typography**:
- Font Family: System font stack (default Next.js)
- Headings: Bold, larger sizes
- Body: Regular weight, readable size (14-16px)
- Table Headers: Semi-bold

**Spacing**:
- Consistent padding using Tailwind spacing scale
- Table cells: px-4 py-3
- Page margins: Container with max-width
- Navigation spacing: Adequate touch targets

### Navigation Design

- Horizontal navigation bar at the top
- Two links: "Product updates" | "User Interactions"
- Active link indication (underline or bold)
- Clean, minimal design

### Table Design

**Visual Features**:
- Bordered table with subtle borders
- Alternating row colors (optional, very subtle)
- Hover effect on rows
- Clickable column headers with sort indicators
- Sort indicators: ↑ (asc), ↓ (desc), or neutral state

**Status Badges**:
- "Done": Green badge
- "Pending": Yellow/Orange badge

**Priority Indicators**:
- "High": Red text or badge
- "Medium": Orange text or badge
- "Low": Gray text or badge

## Error Handling

Since this is a static application with hardcoded data:
- No network error handling required
- Type safety through TypeScript prevents data errors
- Graceful handling of empty states (though not expected with dummy data)

## Testing Strategy

Per user requirements, testing will be skipped for this implementation.

## Implementation Notes

### shadcn/ui Setup

1. Initialize shadcn/ui in the project
2. Install required components: Table, Button
3. Configure components.json for Tailwind v4 compatibility
4. Use shadcn Table component as base for both tables

### Static Export Configuration

Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  // Other configurations
};
```

### Performance Considerations

- Client-side sorting is acceptable for small datasets (5-20 items)
- No optimization needed for initial implementation
- React.useMemo for sorted data prevents unnecessary re-renders

## Design Decisions

1. **Client-side routing**: Using Next.js App Router for simple navigation between two pages
2. **Component reusability**: Separate table components for each view rather than a generic table component (simpler for this use case)
3. **State management**: Local component state using useState (no need for global state)
4. **Styling approach**: Tailwind CSS with shadcn/ui for rapid development and modern aesthetics
5. **Data structure**: Simple TypeScript interfaces with hardcoded data (no complex data layer needed)
6. **Sort implementation**: Client-side sorting with visual feedback (adequate for static data)

## Accessibility Considerations

- Semantic HTML table elements
- Proper heading hierarchy
- Keyboard navigation support (native with links and buttons)
- Sufficient color contrast for text readability
- Clear focus indicators for interactive elements
