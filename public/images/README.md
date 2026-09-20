# Images folder – build ke baad yahi se images load hongi

## Team / Officers (`team/`)

Is folder mein ye 3 files rakhein (names exact same hon):

| File             | Person              |
|------------------|---------------------|
| `ahmed.webp`     | Ahmed Hassan        |
| `farooq-image.webp` | Muhammad Farooq  |
| `waqas.webp`     | Hafiz Muhammad Waqas |

Path: **`public/images/team/`**

`npm run build` ke baad ye files **`dist/images/team/`** mein copy ho jayengi aur site par dikhengi.

## Gallery (optional)

Agar gallery ki images bhi local rakhni hon to **`public/images/gallery/`** use kar sakte hain aur `src/data/siteData.ts` mein `galleryItems` ki `image` values ko `/images/gallery/filename.jpg` jaisa path dein.
