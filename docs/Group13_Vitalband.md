# VitalBand: Product Management Report- Group 13

# Introduction

India’s population is ageing faster than ever before. By 2030, more than 194 million Indians will be over the age of sixty, yet most will continue to live in their own homes \- often in cities far from their adult children. Families want constant reassurance that their loved ones are safe, but seniors value independence and simplicity over complicated gadgets.

**VitalBand** was born at this intersection of need and possibility. It is not just another wearable; it is a wellness-and-safety companion designed specifically for Indian seniors and the families who care for them. Combining a discreet, screen-free band with a caregiver-friendly mobile app and optional phone-free “Care Hub,” VitalBand delivers real-time health signals and instant emergency alerts in the languages families use, from English and Hindi at launch to regional tongues over time.

# Assumptions

1. Market: India only (first 24 months), focus on Tier 1 and strong Tier 2 cities.  
2. Positioning: wellness/safety device (no diagnostic claims).  
3. Hardware v1: screenless fabric band, PPG HR \+ SpO2, 3-axis accelerometer \+ gyro, skin temperature, haptics, single SOS button, BLE; optional BLE-to-cellular Care Hub so seniors don’t need a smartphone.  
4. App: iOS \+ Android; two roles: Senior (optional/light) and Caregiver (full dashboard). WhatsApp alerts (opt-in).  
5. Languages at launch: English, Hindi; add Tamil, Telugu, Bengali, Marathi in phases.  
6. Compliance: DPDP Act 2023 consent-by-design; BIS, WPC (Bluetooth), e‑waste EPR; TRAI DLT for SMS templates.  
   

# Website Development \- [https://vitalband.netlify.app/](https://vitalband.netlify.app/)

1. ## Process

# The Vitalband website was developed using Next.js 14, TypeScript, and Tailwind CSS for fast, maintainable, and responsive design. We structured the project with reusable components and optimised performance using lazy loading and efficient animations. Git/GitHub was used for version control, and Netlify handled deployment with continuous integration and preview builds.

2. ## Content

# The site content clearly presents Vitalband’s health monitoring and emergency response features through engaging sections like Hero, Benefits, and Product Showcase. Trust elements such as testimonials and security indicators build credibility. A consistent design system with Indigo and Slate colours and Geist fonts ensures readability and accessibility. SEO tags like OpenGraph and structured data improve visibility.

3. ## Linking to Analytics

# Integration with Google Analytics is a work in progress. Once completed, it will track user interactions, monitor performance, and measure conversions to enhance navigation and content effectiveness. Tools like event tracking, Core Web Vitals, and error monitoring will support future improvements.

4. ## Key Learnings

1. Using the right tools from the start made development faster and the site easier to manage.  
2. Simple design choices helped us create a visually appealing and user-friendly experience.  
3. Prioritizing mobile users ensured the site works well on all devices.  
4. Automating deployment saved time and reduced errors.  
5. Including SEO best practices will help users find the site more easily.  
6. Collecting user data through analytics will help us improve the site based on how people use it.

# Existing Marketplace

1. ## Environmental Analysis – PESTEL

* **Political / Policy**  
  * Strong government push for local electronics manufacturing (Make-in-India, PLI,.  
  * ABDM digital health IDs/records – scope for future-proof integrations.  
  * TRAI rules (DLT SMS registration) critical for alert delivery.  
  * Policy focuses on seniors’ NCDs and home care – prevention-oriented messaging fits well.  
* **Economic**  
  * Highly price-sensitive market; smartwatches dominated by sub-₹5,000 segment.  
  * UPI nearly universal; COD & EMI still relevant.  
  * High out-of-pocket health spending; D2C viable, insurer tie-ups later.  
  * Social  
  * Rapidly ageing population (\~150M seniors, rising fast).  
  * Urban migration leaves seniors alone; children rely on WhatsApp for updates.  
  * Digital comfort gap – seniors prefer screenless, simple, local language devices.  
* **Technological**  
  * 4G widespread, 5G rising; NB-IoT limited.  
  * Android dominates; WhatsApp API widely used.  
  * DPDP Act demands consent, privacy by design, and easy data deletion.  
* **Environmental**  
  * E-waste compliance mandatory (EPR, battery handling, packaging).  
  * Seniors/families value durability, long battery, and repair-friendly products.  
* **Legal / Regulatory**  
  * DPDP Act regulates data use; consent & breach reporting mandatory.  
  * BIS/WPC approvals needed for hardware/BLE radios.  
  * Avoid medical claims unless certified; wellness/safety positioning safer.  
  * Telemedicine guidelines allow future doctor/coach tie-ins.

2. ## Competitor Analysis (Exhibit-1)

* Premium smartwatches (Apple, Samsung) excel in sensors but require frequent charging and have complex UIs.  
* Budget Indian brands (Noise, boAt, Fire-Boltt) offer low prices but lack caregiver workflows.  
* No player offers a senior-first, screenless, long-battery band with multi-caregiver escalation.

3. ## Market Gap Identification

* **Senior-first Form Factor:** Screenless, comfortable 24/7 wear.  
* **Caregiver Workflows:** Multi-caregiver “Care Circle” with WhatsApp/SMS/IVR.  
* **Low False Alarms:** Haptic check-ins before alerts.  
* **Phone-free Mode:** Optional Care Hub for seniors without smartphones.  
* **Language Support:** Hindi and regional IVR/WhatsApp alerts.

4. ## Market Sizing (Exhibit-2)

   .

# User Study

1. ## User Persona: Busy Adult Caregiver (Exhibit-3)

* Name: Aarav Sharma, 35, IT Project Manager, Bengaluru.  
* Tech-savvy but time-constrained; parents in Tier-2 city with chronic conditions.  
* Goals: Monitor parents remotely, receive emergency alerts, and ensure medication adherence.  
* Pain Points: Complex devices, fear of missed emergencies, and medication compliance.

2. ## Customer Journey Map

* **Awareness**: Discovering Vital-Band through Social media ads, blogs about senior health, and referrals from peers.  
* **Consideration**: Website visits, exploring features, reading reviews, and comparing with competitors.  
* **Purchase**: Deciding to purchase based on ease of use and affordability through the Online checkout process, payment options (UPI, COD, EMI).  
* **Onboarding**: Setting up the band for parents by pairing with the app, ensuring understanding, and configuring alerts.  
* **Daily Use**: Receiving health updates, alerts, and checking parents’ status via the app.  
* **Support**: Customer service interactions (chat, email) for troubleshooting.

3. ## Value Proposition

   **For** busy adult children in India living apart from non-tech-savvy senior parents (60–80) **who** worry about emergencies and missed health signals, our product **VitalBand** is a simple screenless wellness wristband with caregiver app **that provides** real-time alerts, SOS, reminders, early wellness insights, and long battery life, **unlike** smartwatches or SOS pendants that are complex, stigmatizing, or short-lived, our **solution delivers** a senior-first comfortable band, multi-caregiver Care Circle, low-false-alarm checks, phone-free operation, Indian language support, and accessible pricing.

   

   

   

# Product Design

1. ## Product Ideation & Conceptual Design

* **Form Factor:** Lightweight, hypoallergenic, screenless band.  
* **Hardware Specs:** PPG HR \+ SpO2, 3-axis accelerometer/gyro, skin temp sensor, haptics, SOS button, BLE.  
* **Battery:** 7–10 days.   
* **Durability:** IP67 water resistance.

2. ## POPs (Parity)

* Health monitoring, user notifications, emergency SOS.

3. ## PODs (Differentiation)

* Screenless senior-friendly design.  
* Multi-caregiver escalation via WhatsApp/SMS/IVR.  
* Optional Care Hub for phone-free use.  
* Multilingual alerts (Hindi \+ regional languages).

4. ## Mobile App

* **Dashboard**: Quick health metrics and wellness status.  
* **Alerts**: Recent alerts and acknowledgement options.  
* **Care Circle**: Manage caregiver roles and preferences.  
* **Settings**: Configure alerts and privacy settings.  
* **Support**: FAQs and chat support.

5. ## Content Design & Visuals

* Calming colour palette, large typography, culturally inclusive imagery of seniors and families.

# Pricing

1. ## Hardware 

   * VitalBand Essential (BLE only): ₹5,499 MRP.  
   * VitalBand \+ Care Hub bundle: ₹7,999 MRP (Hub standalone ₹2,999).  
   * Accessories: clip-on Power Booster ₹999; extra straps ₹499–₹699.

2. ## Subscription 

   * Basic: ₹149/month (alerts, Care Circle up to 3, medication reminders, WhatsApp/SMS up to fair-use).  
   * Plus: ₹199/month (up to 8 caregivers, IVR call escalation, Hindi+one regional language IVR).  
   * Pro (optional monitored partner in future): ₹299–₹399/month.  
   * Annual: 2 months free (e.g., Basic ₹1,490).

   

   

# Product Analytics

### Tool 

Installed GA4 tag via Google Tag Manager on the website. Configured event tracking (page views, button clicks, form submits, add-to-cart, purchase).

### Key Events to Track

1. view\_product (landing on product page)  
2. add\_to\_cart  
3. begin\_checkout  
4. purchase (with revenue)  
5. sign\_up (for subscription/caregiver app interest)  
6. click\_contact (WhatsApp/phone/email links)

### Funnels & Conversions

1. Website Funnel: Landing → Product → Add-to-cart → Checkout → Purchase.  
2. Subscription Funnel: Sign-up → Activate → First Payment.  
3. Caregiver Engagement Funnel (in-app, via Firebase/GA integration): Install → Accept invite → Respond to first alert → Active weekly use.

### Dashboards & Reports

1. Source/medium dashboard (which channels drive sales).  
2. Conversion funnel dashboard (where drop-offs happen).  
3. Retention dashboard (new vs returning users).  
4. Revenue dashboard (average order value, LTV).

# Engagement Model

1. ## Community Creation

1. **Caregiver Community:** Social media groups, webinars on senior wellness.  
2. **Senior Community:** Phone-based IVR info lines and regional-language WhatsApp tips.

2. ## Growth Campaigns

   ### Channels: 

1. Meta \+ YouTube creators (Hindi first),   
2. Google Search (intent: “monitor parents remotely”),   
3. WhatsApp leads,   
4. partnerships (Senior living, home-health, pharmacies).

# Product launch & Go-to-market Strategy

## Product Vision (India)

## Translating engagement to transaction Funnel**\-\>** Community → Preorder → Purchase → Subscription → Upsells (Care Hub, additional bands, Pro plan). Go-to-market

* Alpha (0–3 months): 150 families across 3 cities (BLR, MUM, DEL); tune alerts and Hindi IVR.  
* Beta (4–6 months): 1,000 families across top 8 cities; launch Care Hub; enable EMI.  
* Launch (7–12 months): D2C \+ Amazon India; offline kiosks at senior centers and corporate campuses; limited pharmacy retail pilots.  
* Compliance and operations   
  * BIS/WPC approvals; TRAI DLT registration for headers/templates; DPDP consent/logs; EPR for e-waste; reverse logistics via Delhivery/BlueDart.

# Conclusion 

India-first VitalBand differentiates through a screenless band seniors actually wear, and a caregiver-first, WhatsApp-native alert system with low false alarms and phone-free operation via an affordable Care Hub. Pricing is tuned to Indian sensitivity without compromising service quality.

## Key Learnings:

1. Conduct PESTEL and market sizing to understand external drivers (policy, demographics, economics).  
2. Learn top-down vs bottom-up market sizing methods and how assumptions impact TAM, SAM, and SOM.  
3. Recognise customer pain points (adult children → peace of mind, seniors → simplicity).  
4. Apply tools like personas and jobs-to-be-done (“I want to ensure my parents are safe even if I’m not around”).  
5. Use Moore’s positioning template to clearly articulate: *For…Who…Our product is…That provides…Unlike…Our solution…*  
6. Define a Minimum Viable Product (MVP) (screenless band, alerts, SOS).  
7. Craft messaging that resonates with seniors (independence) and caregivers   
8. Design Google Analytics funnels and cohorts for tracking engagement.  
9. Experience the holistic PM mindset: not just building features, but aligning product with market, compliance, operations, and customer trust.

   ## 

# Exhibit 1: Competitor Analysis

| Brand/Product | Segment | Senior/Caregiver-Relevant Features | Battery (typical) | India Price (approx) | Strengths | Weaknesses vs Vital-Band |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Apple Watch (SE/Series) | Premium smartwatch | Fall detection, SOS via paired iPhone, ECG  | \~18–36 hrs | ₹29,900–₹55,000+ | Rich sensors, polished UX, strong brand | Frequent charging; complex UI; caregiver workflows limited; costly |
| Samsung Galaxy Watch | Premium smartwatch | Fall detection, SOS; health suite | \~1–2 days | ₹19,999–₹40,000+ | Android synergy, good build | Charging burden; not senior-first; limited multi-caregiver model |
| Fitbit (Charge/Versa) | Fitness tracker | HR, SpO2, sleep, limited safety prompts | \~5–7 days | ₹9,999–₹17,000 | Simple app, decent battery | No caregiver escalation; no SOS button |
| GOQii Smart Vital/Watch | Budget smartwatch \+ coaching | HR/SpO2; app coaching; some “family” visibility via app | \~5–7 days | ₹1,999–₹3,999 (+ coaching) | Low price; India-first brand; services | Not senior-first; no robust Care Circle/SOS escalation |
| Noise (Color-Fit series) | Budget smartwatch | HR/SpO2, basic alerts | \~7–10 days | ₹1,999–₹4,999 | Massive distribution, value | Fitness-first; no caregiver model; quality variance |
| boAt (Xtend, Ultima) | Budget smartwatch | HR/SpO2, basic alerts | \~7–10 days | ₹1,799–₹4,999 | Aggressive pricing, retail presence | No caregiver/SOS; reliability inconsistency |
| Fire-Boltt (various) | Budget smartwatch | HR/SpO2, claimed fall/SOS on select SKUs | \~5–8 days | ₹1,999–₹5,999 | Feature marketing, choice | SOS/fall features not caregiver-centric; false-alarm risk |
| Ultrahuman Ring Air | Smart ring | HRV, sleep, temp trends (metabolic focus) | \~4–6 days | ₹17,499–₹24,999 | Minimal form-factor; insights | No SOS; no caregiver workflows; not senior-focused |
| Dozee (contactless) | Bed sensor (RPM/home) | Continuous vitals in bed; alerts; used in hospitals/home | N/A (mains) | Consumer kits vary; B2B dominant | Proven in recovery/RPM | Not mobile; no on-wrist SOS; B2B leaning |
| Qubo Go GPS/SOS tracker | Personal GPS tracker | SOS button; live location; geofencing | Days (usage-dependent) | ₹3,999–₹5,999 \+ plan | Simple SOS/location; India channel | No vitals; caregiver UX basic; device stigma (pendant/fob) |
| Life360 (app) | Family safety app | Location sharing, crash detection, and SOS | Phone battery | ₹299–₹499/month | No hardware needed; network effects | No vitals; senior must carry/charge phone |

# Exhibit 2: Market Sizing for Senior Care Device in India

| Step | Calculation Basis | Result (Households / Value) |
| :---- | :---- | :---- |
| **1\. Total Seniors (60+)** | UN WPP 2022 | 149M individuals |
| **2\. Senior-only Households** | 5% living alone \+ 19% spouse-only | 7.45M (alone) \+ 14.16M (spouse-only) \= 21.61M HH |
| **3\. Urban Focus** | 36% of senior-only HH | 7.78M HH |
| **4\. Caregiver-likely HH** | 70% with adult children are separate | India: 15.13M HH Urban (phase 1): 5.44M HH |
| **5\. Serviceable Available Market (SAM)** | Top 8–10 cities (40% of urban senior-only HH) | 3.11M HH |
| **6\. Pricing (Illustrative)** | Hardware: ₹5,499 (one-time) Subscription: ₹149/month | – |
| **7\.** Total Addressable Market (TAM) | All senior-only HH (21.61M) | Hardware: **₹11,988 Cr** Subscription ARR: **₹3,898 Cr** |
| **8\.** Serviceable Available Market (SAM) | Top metros (\~3.11M HH) | Hardware: **₹1,710 Cr** Subscription ARR: **₹555 Cr** |
| **9\.** Serviceable Obtainable Market (SOM, 3-year goal) | 2% of SAM ≈ 62k HH | Hardware: **₹34.1 Cr** Subscription ARR: **₹11.1 Cr** |

# 

# 

# 

# 

# 

# Exhibit 3: Value Proposition Canvas

| Value Proposition | Customer Profile |
| :---- | :---- |
| **Products & Services** | **Customer Jobs** |
| \- Vital-Band Wearable Device | \- Monitor parents' health remotely |
| \- Mobile Application | \- Ensure medication adherence |
| \- Care Hub (Optional) | \- Receive timely alerts in emergencies |
|   | \- Maintain independence and comfort at home |
|   | \- Access help in emergencies |
| **Pain Relievers** | **Pains** |
| \- Ease of Use: Simple, screenless design | \- Anxiety about parents' health when not present |
| \- Real-time Monitoring: Alerts for health anomalies | \- Complexity of current devices for seniors |
| \- Multilingual Support: Hindi and regional languages | \- Difficulty managing medication schedules |
|   | \- Fear of technology and complex devices |
|   | \- Feelings of isolation due to poor communication |
| **Gain Creators** | **Gains** |
| \- Peace of Mind: Remote monitoring for caregivers | \- Confidence knowing parents are monitored and safe |
| \- Improved Health Outcomes: Encourages adherence | \- Simplified health management |
| \- Independence for Seniors: Maintains autonomy | \- Reduced stress from alerts and reminders |
|   | \- Feeling secure and cared for with minimal tech |
|   | \- Ability to manage health without constant assistance |

# Sources and Links 

* UN DESA, World Population Prospects 2022 (India age structure; 60+): [https://population.un.org/wpp/](https://population.un.org/wpp/)  
* NSO (MOSPI), “Elderly in India 2021” (NSS 75th round living arrangement tables): [https://www.mospi.gov.in/](https://www.mospi.gov.in/) (search: Elderly in India 2021 PDF)  
* World Bank, Urban population (% of total) – India: [https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IN](https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IN)  
  Digital adoption and payments (PESTEL context)  
* TRAI, Performance Indicators (telecom subscribers, broadband): [https://trai.gov.in/release-publication/reports/performance-indicators](https://trai.gov.in/release-publication/reports/performance-indicators)  
* IAMAI-Kantar ICUBE 2023 (Internet in India): [https://www.iamai.in/](https://www.iamai.in/) (Reports/press releases)  
* NPCI, UPI Product Statistics: [https://www.npci.org.in/what-we-do/upi/product-statistics](https://www.npci.org.in/what-we-do/upi/product-statistics)  
* Statista, WhatsApp users in India (scale reference): [https://www.statista.com/statistics/255146/number-of-monthly-active-whatsapp-users-in-india/](https://www.statista.com/statistics/255146/number-of-monthly-active-whatsapp-users-in-india/)  
  Policy, legal, and compliance  
* Digital Personal Data Protection Act, 2023 (MeitY): [https://www.meity.gov.in/data-protection-framework](https://www.meity.gov.in/data-protection-framework)  
* BIS (Electronics safety): [https://www.bis.gov.in/](https://www.bis.gov.in/)  
* WPC ETA (unlicensed wireless devices): [https://wpc.dot.gov.in/](https://wpc.dot.gov.in/) (Equipment Type Approval)  
* TRAI, TCCCPR 2018 (DLT for SMS): [https://trai.gov.in/notifications/regulations/telecom-commercial-communications-customer-preference-regulations-2018](https://trai.gov.in/notifications/regulations/telecom-commercial-communications-customer-preference-regulations-2018)  
* E-Waste (Management) Rules, 2022 – CPCB: [https://cpcb.nic.in/e-waste/](https://cpcb.nic.in/e-waste/)  
* Ayushman Bharat Digital Mission (ABDM): [https://abdm.gov.in/](https://abdm.gov.in/)  
* Telemedicine Practice Guidelines (MoHFW): [https://www.mohfw.gov.in/pdf/Telemedicine.pdf](https://www.mohfw.gov.in/pdf/Telemedicine.pdf)  
* CDSCO, Medical Device Rules 2017 (if pursuing regulated claims): [https://cdsco.gov.in/](https://cdsco.gov.in/)  
  Competitor/product references (feature/pricing context)  
* Apple Watch (fall detection): [https://support.apple.com/en-in/HT208944](https://support.apple.com/en-in/HT208944)  
* Samsung Galaxy Watch (fall detection help): [https://www.samsung.com/in/support/](https://www.samsung.com/in/support/)  
* Fitbit Charge/Versa: [https://www.fitbit.com/global/in/home](https://www.fitbit.com/global/in/home)  
* GOQii: [https://goqii.com/in](https://goqii.com/in)  
* Noise: [https://www.gonoise.com/](https://www.gonoise.com/)  
* boAt: [https://www.boat-lifestyle.com/](https://www.boat-lifestyle.com/)  
* Fire-Boltt: [https://www.fireboltt.com/](https://www.fireboltt.com/)  
* Ultrahuman Ring: [https://ultrahuman.com/ring](https://ultrahuman.com/ring)  
* Dozee: [https://www.dozee.health/](https://www.dozee.health/)  
* Qubo (Hero Electronix): [https://www.quboworld.com/](https://www.quboworld.com/)  
* Life360: [https://www.life360.com/](https://www.life360.com/)


    
    
  


