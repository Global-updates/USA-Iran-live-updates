# officialjmexe-ai.github.io

A simple GitHub Pages landing site with optional live Firebase / Firestore content.

## Firebase setup

### 1) Web app config
Paste your Firebase web config into [`firebase-config.js`](./firebase-config.js).

### 2) Firestore document
Create this document in Firestore:

- **Collection:** `siteContent`
- **Document:** `homepage`

Use fields like these:

```json
{
  "heroTitle": "Official JMEXE AI",
  "heroText": "This hero text is updating live from Firebase."
}
```

The homepage listens to that document and updates the hero section automatically.

### 3) Firestore rules
A starter rules file is included in [`firestore.rules`](./firestore.rules).
For a public landing page, public read access is usually needed for `siteContent/*`.

### 4) Publish on GitHub Pages
Deploy from:

- **Branch:** `main`
- **Folder:** `/ (root)`

Your site URL will be:

```text
https://officialjmexe-ai.github.io/
```