# AI---CABLE---DESIGN---VALIDATOR

AI-assisted validation system for low-voltage cable designs using engineering judgment.

## Tech Stack
- Backend: NestJS
- Frontend: Next.js (App Router)
- AI Gateway: Mocked (LLM-ready)

## Features
- Free-text cable design validation
- PASS / WARN / FAIL decisions
- Engineering reasoning
- Confidence scoring

## Running Locally

### Backend

cd design-validator-backend
npm install
npm run start:dev


### Frontend
cd design-validator-frontend
npm install
npm run dev

Backend runs at: http://localhost:3001

### Sample Input :
IEC 60502-1, 0.6/1 kV, Cu, Class 2, 10 mm², PVC, insulation 1.0 mm

### Sample Output :
conductor material - PASS
Copper Class 2 conductors are standard for LV power cables.

csa - PASS
Cross-sectional area is appropriate for typical LV applications.

insulation thickness - PASS
Insulation thickness aligns with typical IEC nominal expectations.

Confidence - High

