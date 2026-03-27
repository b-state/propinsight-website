# propinsight Website Launch Checklist

## Critical (Must Fix)

- [ ] **Placeholder client logos** - Remove fake logos (GitHub, Google, PayPal, Vimeo) from "Diese Immobilienverwalter setzen auf uns" section. Either add real clients or remove section.
  - File: `index.html` (lines ~87-101)

- [ ] **Broken footer links** - Fix or remove dead links:
  - [ ] Dokumentation (`#`)
  - [ ] Feedback (`#`)
  - [ ] AGB (`#`)
  - [ ] AVV (`#`)

- [ ] **Wrong meta description** - Fix placeholder text in `datenschutz.html`
  - Current: "Create SAAS & AI Subscription Websites with Canvas Template..."
  - Should describe: Privacy policy for propinsight

- [ ] **Add favicon** - No favicon defined, browsers show default icon
  - Add to `<head>` in all HTML files

- [ ] **Inconsistent email addresses** - Pick one and use everywhere:
  - Impressum: `hallo@propinsight.de` + `propinsight@outlook.de`
  - Datenschutz: `hallo@propinsight.de`
  - Footer: `hallo@propinsight.de`

## Important (Should Fix)

- [ ] **Demo video missing** - Section promises video but shows static image
  - File: `index.html` - "Schauen Sie sich unsere Demo an!" section
  - Either add video or change text to match static screenshot

- [ ] **Add Open Graph tags** - For better social media sharing
  ```html
  <meta property="og:title" content="propinsight">
  <meta property="og:description" content="Sondervergütungen für Immobilienverwalter...">
  <meta property="og:image" content="URL_TO_PREVIEW_IMAGE">
  <meta property="og:url" content="https://propinsight.de">
  <meta name="twitter:card" content="summary_large_image">
  ```

- [ ] **Cookie consent banner** - Required by GDPR since you use cookies/Analytics
  - Datenschutz mentions cookies but no consent mechanism exists

- [ ] **Fix alt texts** - Hero image has `alt=".."`
  - Should be descriptive, e.g., `alt="propinsight Dashboard Screenshot"`

## Minor

- [ ] **Create legal pages** - Or remove links if not needed yet:
  - [ ] AGB (Allgemeine Geschäftsbedingungen)
  - [ ] AVV (Auftragsverarbeitungsvertrag)

---

## Done

- [x] Hero section content
- [x] Features section
- [x] Pricing section
- [x] FAQ section
- [x] Impressum page
- [x] Datenschutz page (content)
