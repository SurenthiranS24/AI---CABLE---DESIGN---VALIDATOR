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

<img width="1815" height="887" alt="image" src="https://github.com/user-attachments/assets/779b4162-ce64-4fe8-abac-4a59742f7c85" />

<img width="1190" height="875" alt="image" src="https://github.com/user-attachments/assets/f1a3650f-1a31-4601-8677-4fd1a0659406" />

<img width="968" height="876" alt="image" src="https://github.com/user-attachments/assets/758918be-0d08-4c05-ae2d-353095888174" />

<img width="911" height="788" alt="image" src="https://github.com/user-attachments/assets/f67f1c11-3d68-47c8-b1d1-34a65b1c1513" />

<img width="928" height="873" alt="image" src="https://github.com/user-attachments/assets/cb66127e-2911-4ef0-bd1b-6c9a3ea7a988" />






