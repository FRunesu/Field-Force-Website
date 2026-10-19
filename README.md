# FieldForce Agro Services — Website

The official website for **FieldForce Agro Services**. It's a simple static site (no installs and no build step), so any basic web host can serve it: GitHub Pages, Netlify, cPanel and so on.

---

## Folder structure

```
Field-Force-Website/
├── index.html        ← The page itself: all headings, paragraphs, contact details
├── css/
│   └── style.css     ← Colours, fonts, spacing (the "look")
├── js/
│   ├── data.js       ← ★ PRODUCTS, CROP GUIDES & SOIL PARAMETERS — edit this most often
│   └── main.js       ← How the site behaves (slider, pop-up panel, form). Usually no need to touch
├── images/           ← Every photo and the logo
└── README.md         ← This guide
```

**Rule of thumb:**

| I want to change…                               | Open this file  |
|-------------------------------------------------|-----------------|
| Products, product categories, prices            | `js/data.js`    |
| Crop guides (fertiliser, pest, weed tables)     | `js/data.js`    |
| Soil test parameters                            | `js/data.js`    |
| Any text on the page, phone numbers, address    | `index.html`    |
| A photo                                         | `images/`       |
| A colour or font size                           | `css/style.css` |

---

## How to edit a file

1. Open the file in a plain-text editor, e.g. **Notepad** (Windows), **TextEdit** (Mac, set to *Format → Make Plain Text*) or the free **[VS Code](https://code.visualstudio.com/)**. *Don't use Word.*
   On GitHub you can also click the file, then the ✏️ pencil icon, edit it, and press **Commit changes**.
2. Make your change and save.
3. Open `index.html` in your browser (double-click it) and refresh to check your change. You need an internet connection, because the page's styling library loads online.
4. Upload the changed file(s) to your web host, or commit them on GitHub.

> 💡 Keep a copy of a file before you edit it. If something breaks, put the copy back.

---

## Updating products — `js/data.js`

Products are grouped into categories. Each category looks like this:

```js
{
    id: "fungicides",          // internal name: lowercase, no spaces, don't change it
    name: "Fungicides",        // heading shown on the website
    columns: 3,                // how many products appear side by side (1, 2 or 3)
    items: [
        "Acephate",   "Aliette",   "Alvarion",
        "Amistar Top", "Antracol", "Bravo",
    ]
},
```

- **Add a product:** type its name in quotes, followed by a comma, inside `items: [ ... ]`, e.g. `"New Product 50EC",`
- **Remove a product:** delete its `"Name",` entry.
- **Rename a product:** change the text between the quotes.
- **Add a category:** copy a whole `{ ... },` block, paste it below, and change `id`, `name` and `items`.

### Adding prices

Right now the site shows product **names only**. The easiest way to show a price is to put it in the product text:

```js
"Bravo — US$25 / 1 L",
"Dithane M45 (Mancozeb 80%) — US$18 / 1 kg",
```

To change a price, edit the number between the quotes.

### Rules that keep the site working

- Every piece of text needs **"double quotes"** around it.
- Put a **comma** after each item. The website doesn't mind a comma after the last one.
- If your text itself contains a double quote, use single quotes inside instead, e.g. `"12' spray boom"`.
- Leave these names exactly as they are: `FF_PRODUCTS`, `FF_CROP_GUIDES`, `FF_SOIL_PARAMETERS`.
- **Are all the products or guides suddenly missing?** That's almost always a missing quote, comma or bracket from your last edit. Undo it, or put your backup copy back.

---

## Updating crop guides & soil parameters — `js/data.js`

- **Crop guides** are further down the file, under `FF_CROP_GUIDES`. Each guide has an `overview` (bullet points) and `sections` (tables). To add a table row, copy an existing row inside `rows: [ ... ]` and change the text. Put `\n` inside a cell to start a new line.
- **Soil parameters** are at the bottom, under `FF_SOIL_PARAMETERS`. Each row has a `name` and an `explanation`.

The top of `data.js` also has short instructions for each section.

---

## Updating text & contact details — `index.html`

Open `index.html` and search (Ctrl + F / Cmd + F) for the words you want to change, then type over them. Only change the words **between** the tags (`<p>` … `</p>`). Leave the parts inside `< >` alone.

The page is split into clearly labelled sections, e.g. `<!-- ═══ ABOUT ═══ -->`, `<!-- ═══ SERVICES ═══ -->`, `<!-- ═══ FOOTER / CONTACT ═══ -->`.

**If the phone number or email address changes,** update it in all of these places:

| What                         | Where                                                                    |
|------------------------------|--------------------------------------------------------------------------|
| Phone, address, email shown  | `index.html` → `FOOTER / CONTACT` section                                |
| WhatsApp button number       | `index.html` → `WHATSAPP BUTTON` (`wa.me/263718814555`, no `+` or spaces) |
| "Call us" number on the form | `index.html` → search for `Something went wrong`                         |
| Email the request form goes to | `js/main.js` → `ADVISORY_EMAIL` near the top                           |
| Facebook link                | `index.html` → search for `facebook.com`                                 |

---

## Changing photos — `images/`

- **Easiest way to swap a photo:** give the new photo **exactly the same file name** as the old one (e.g. `fertilizer.jpg`) and replace the old file in `images/`. No code changes needed.
- **Hero slider photos** (the big rotating images at the top) are linked at the bottom of `css/style.css` under "Hero slide images".
- **Add a gallery photo:** put the file in `images/`, then copy one gallery line in `index.html` (under `GALLERY`) and change the file name and caption:
  ```html
  <figure class="gallery-item"><img src="images/my-new-photo.jpg" alt="Short description" loading="lazy"><figcaption class="gallery-caption">My Caption</figcaption></figure>
  ```
- **Keep photos small.** Aim for under 500 KB each, about 1600 px wide. Large photos make the site slow on mobile data. Free tools like [Squoosh](https://squoosh.app/) can shrink them.
- File names: lowercase, with dashes instead of spaces (`new-sprayer.jpg`, not `New Sprayer.JPG`).

---

## For developers

- Plain HTML, CSS and JavaScript. Styling is [Tailwind CSS](https://tailwindcss.com/) utility classes (loaded from CDN in `index.html`) plus the custom components in `css/style.css`.
- There are no inline styles or inline event handlers. Interactions are wired up in `js/main.js` via `data-*` attributes (`data-service`, `data-open-panel`, `data-tab`).
- Products, guides and soil content are rendered from `js/data.js`.
- To preview locally, run `python3 -m http.server` in this folder and open http://localhost:8000.
