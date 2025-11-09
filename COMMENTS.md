# Comments

## Assumptions Made
- Category colors are mapped from product category names
- Delete is client-side only

## Architecture Decisions
- Extracted business logic into composables for reusability
- Created utilities for filtering, sorting, deleting and color mapping
- Constants centralized for maintainability
- Added Tailwind for professional styling without extra complexity

## Testing
- Mock data reused across tests
- Tests covers: filtering, sorting, and deletion