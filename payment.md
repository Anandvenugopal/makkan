# BrainTest: Doctor Referral, Commission and Payment Plan

## Recommended model

Give each doctor a **referral link and code**, and let the patient pay online. The platform splits the payment automatically. The doctor never handles the money.

### How the doctor gives it to patients
1. The doctor signs up as a partner and gets a unique code and link, for example `braintest.in/?ref=DRMAYA`, plus a QR code for the clinic desk.
2. The patient opens the link, and the site stores the code (cookie plus a field on the order). They pick a test or package and pay.
3. The patient takes the test and the report is unlocked. If the doctor reviews it, the report is shared with that doctor.
4. The doctor has a small dashboard showing referrals, paid orders, commission earned and payouts.

### How you get the money
- **Payment gateway:** use **Razorpay** (prices are in ₹). Every payment goes to your account first.
- **Doctor payouts:** either pay doctors monthly by bank transfer or UPI from your own records, or use **Razorpay Route** to split each payment automatically (for example 80% to you and 20% to the doctor's linked account).
  - Monthly payouts are simpler to start with.
  - Route needs KYC for each doctor.
- **Commission rule:** a percentage of the net amount after gateway fees and GST, for example 15–25%. Record it per order so refunds can reverse the commission.
- **Invoicing:** you issue the GST invoice to the patient. You also send the doctor a commission statement and deduct TDS where it applies.

## What you need to build

The app is front-end only and stores results in the browser, so it can't do this yet. You need:
- **Backend and database:** InsForge, Supabase or Firebase. Tables: users, doctors, orders, payments, results, commissions, payouts.
- **Accounts:** patient login (OTP by phone or email), a doctor login and an admin login. Results should be saved on the server so they follow the account and not the browser.
- **Checkout:** create the Razorpay order on the server, verify the payment webhook, and only then unlock the test.
- **Referral tracking:** record the `ref` code at checkout and attach it to the order.
- **Doctor dashboard:** referrals, earnings and payout history.
- **Admin panel:** approve doctors, set commission rates, mark payouts, handle refunds.

### Suggested build order
1. Backend and accounts
2. Razorpay checkout
3. Referral codes
4. Doctor dashboard
5. Payouts

## Legal points to check before launch
- **Doctors and commission:** in India, the NMC code of conduct bars doctors from taking fees or commissions for referring patients. A "commission per patient sent" could put the doctor in breach.
  - A safer structure is to pay the doctor a **professional fee for reviewing the report**, or a **licensed-partner or reseller fee** for running the program. Another option is to give patients a discount code and pay the doctor nothing.
  - Get a lawyer to confirm which structure fits before building the payout side.
- **Test licences:** some tests, such as the full ASRS-18, need a paid commercial licence. Sort that out before charging for them.
- **Privacy:** this is sensitive health data, so the DPDP Act 2023 applies. You need consent, secure storage and a clear policy. Students under 18 also need parental consent.
- **Screening, not diagnosis:** label results as screening tools, and keep the support message for risky answers.
