# AI---CABLE---DESIGN---VALIDATOR

AI-assisted system for validating low-voltage electrical cable designs using engineering judgment, not rigid rule engines.

This project simulates how a senior design engineer reviews incomplete, borderline, or clearly invalid cable designs and produces PASS / WARN / FAIL decisions with reasoning and confidence scoring.

🔍 Problem Statement

Traditional cable validation tools rely on deterministic rule checks, which fail when:

inputs are incomplete,

assumptions are required,

designs are borderline but not clearly wrong.

This project addresses that gap by using AI-style reasoning logic to evaluate free-text cable design descriptions.

✅ Key Features

- Free-text cable design input

- PASS / WARN / FAIL validation per design attribute

- Clear engineering explanations for WARN / FAIL cases

- Confidence scoring (High / Medium / Low)

- Handles ambiguous inputs gracefully with stated assumptions

- Clean, modern UI inspired by industry websites

🧠 Validation Philosophy

The system intentionally avoids clause-by-clause rule enforcement.

Design principles:

- PASS → Clearly compliant design

- WARN → Borderline or assumed conditions

- FAIL → Clearly unsafe or non-compliant designs

- Confidence reflects certainty, not permissiveness

- Decisions are always enforced (no “undecided” outputs)

This mirrors real-world engineering review behavior.


🛠 Tech Stack
Backend
- NestJS
- TypeScript
- Modular service-based architecture
- AI Gateway abstraction (LLM-ready)
Frontend
- Next.js (App Router)
- Material UI (MUI)
- Responsive, card-based UI
- Status badges and confidence indicators



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

# Summary

“This project validates cable designs using AI-assisted engineering judgment instead of deterministic rule engines, producing explainable PASS/WARN/FAIL decisions with confidence scoring.”

<img width="1815" height="887" alt="image" src="https://github.com/user-attachments/assets/779b4162-ce64-4fe8-abac-4a59742f7c85" />

<img width="1190" height="875" alt="image" src="https://github.com/user-attachments/assets/f1a3650f-1a31-4601-8677-4fd1a0659406" />

<img width="968" height="876" alt="image" src="https://github.com/user-attachments/assets/758918be-0d08-4c05-ae2d-353095888174" />

<img width="911" height="788" alt="image" src="https://github.com/user-attachments/assets/f67f1c11-3d68-47c8-b1d1-34a65b1c1513" />

<img width="928" height="873" alt="image" src="https://github.com/user-attachments/assets/cb66127e-2911-4ef0-bd1b-6c9a3ea7a988" />

👤 Author
Surenthiran S
Mechanical Engineer → AI & Data Science Enthusiast
Focused on practical, production-oriented AI systems.






