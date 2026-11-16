# Gift & Nnanna Wedding Invitation Website

Design: airy white paper with botanical (emerald, gold and navy) edges, emerald pill labels and calligraphy names, with a deep emerald envelope for the opening.

Sunday, 3rd January 2027, 10:00 AM, Arochukwu, Abia State. Hashtag #GN2027.

This is a plain website (HTML, CSS, JavaScript). No installation, no build step.

## 1. What is in this folder

| File | What it does |
|---|---|
| `index.html` | The page structure and the link-preview tags (WhatsApp, Facebook, Twitter). |
| `styles.css` | Colours (at the top) and all the design. |
| `script.js` | **All the words and settings live here, in the CONFIG block at the top.** |
| `google-apps-script.gs` | The small script that saves RSVPs into a Google Sheet. |
| `assets/` | Photos, music, icons and the link-preview picture. |

## 2. Editing names, dates, venues, etc.

Open `script.js` in any text editor (Notepad is fine). The first part is the **CONFIG** block. Change the words between the quotation marks, save, and refresh the page. Do not touch anything below the line that says "APP CODE".

Colours are at the very top of `styles.css` (`--emerald`, `--navy`, `--champagne`, and so on).

## 3. Things still to confirm or fill in

These were assumed or left as placeholders. Search for them in `script.js`:

1. **Your website address** (`site.url`, and 4 places in `index.html`). See section 6.
2. **Photos**: your 7 photos are installed (hero, envelope, story, gallery, footer). One of them (the green outfit with the fan, used in the footer and gallery) has a tiny photographer mark near the man's leg. If a photographer needs credit, tell me the text and I will add it.
3. **Bride's names**: shown as "Miss Gift Matthew **Anosike**". Her parents are "Ikegwu A. Matthew" and the bank account name is "Gift Anosike Matthew". Please confirm her surname and the order of her names (`couple.bride`).
4. **Bride's title** (`Miss`) was assumed.
5. **Reception venue**: you wrote "Reception confirm". It currently shows "Ebem Umuye, Ihechiowa, Arochukwu L.G.A, Abia State". Update `venues[1]` once confirmed.
6. **Google Maps pins**: open each venue in Google Maps, copy the address text exactly as Google shows it into `mapQuery`, or paste the Maps link into `mapsUrl`. Check that the pin lands correctly.
7. **Father of the Day**: shown as "Mrs Felix Ogbonna" exactly as you wrote it. Check the title and add a role if you like (`fatherOfDay.role`).
8. **Contact person** name for the FAQ is "Our wedding coordinator" (`contact.personName`).
9. **Calendar length**: assumed 4 hours (`event.durationHours`).
10. **Colour of "Gold"**: you gave champagne gold `#F7E7CE`. The shiny gold effect is built from it.
11. **Story wording**: tidied slightly for spelling. The last line is split in two so it reads well: "The friendship became love, and the love brought us here." Edit in `story`.
12. **Toast**: your two lines are lines 1 and 2. Lines 3 to 6 were written to complete the toast. Change freely in `toast`.
13. **Music**: see section 7.
14. **Gallery photos**: add as many as you like (see section 4).

## 4. Photos: names and replacing

The photos you sent are already cropped and converted. To change one later, replace the file with the same name:


| File | Use | Best size |
|---|---|---|
| `assets/hero.webp` | Top of the page | about 960 x 1200 (portrait, no watermark) |
| `assets/envelope-card.webp` | The photo that slides out of the envelope | about 900 x 1050 (ratio 6:7). Use a crop of the hero photo. |
| `assets/story-1.webp` to `story-3.webp` | Our Story | 600 x 750 |
| `assets/footer.webp` | Arched photo at the bottom | 600 x 800 |
| `assets/gallery-01.webp` ... | Gallery, full size | 900 to 1400 px wide |
| `assets/gallery-01-sm.webp` ... | Gallery thumbnails | 480 to 640 px wide |

For each gallery photo, edit its line in `gallery` (file names, `w`, `h`, and the description `alt`). Alternate portrait and landscape photos. Free tools such as squoosh.app convert and shrink photos to WebP.

## 5. RSVP into a Google Sheet (step by step)

1. Go to sheets.google.com and create a new, empty spreadsheet. Name it "Wedding RSVPs".
2. Click **Extensions, then Apps Script**.
3. Delete the sample code and paste in everything from `google-apps-script.gs`. Click Save.
4. Click **Deploy, then New deployment**. Click the gear icon and choose **Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone**. Click Deploy and allow the permissions Google asks for.
6. Copy the **Web app URL** (it ends in `/exec`).
7. In `script.js`, paste it inside the quotes of `rsvp: { endpoint: "..." }`.
8. Open your live site, send a real test RSVP, and check that a row appears in the sheet (tab "RSVPs").
9. If you ever change the script, use **Deploy, Manage deployments, Edit, New version** so the change goes live.

Until the endpoint is set, the form politely points guests to the WhatsApp and Call buttons.

## 6. Link preview (WhatsApp, Facebook, Twitter)

When someone shares your link, the preview shows the sealed envelope picture and the words "You are invited to celebrate our union in marriage."

Once you know your final website address, replace `https://YOUR-SITE-ADDRESS/` in **these 4 places** in `index.html` (and in `site.url` in `script.js`):

1. `<link rel="canonical" ...>`
2. `og:url`
3. `og:image` (ends with `assets/og-image-2.jpg`)
4. `twitter:image`

Use the full address with `https://` and a trailing slash, for example `https://yourname.github.io/wedding/`.

**If WhatsApp shows an old picture later:** rename `og-image-2.jpg` (for example to `og-image-3.jpg`, and change the 2 image lines), or share the link with `?v=2` on the end. For Facebook, use the Sharing Debugger (developers.facebook.com/tools/debug), paste your link and click **Scrape Again**.

## 7. Music

`assets/music.mp3` is only a short **placeholder tone**. Replace it with your own licensed song or instrumental (keep the name `music.mp3`). Do not use a copyrighted song unless you have the right to. To shrink an MP3 under about 1.5 MB:

```
ffmpeg -i mysong.mp3 -ac 2 -b:a 96k -t 150 music.mp3
```

Music starts when the guest taps the seal (phones require a tap). The speaker button at the top right turns it off, and the choice is remembered.

## 8. Putting the site online (free)

**GitHub Pages:** create a repository, upload all files in this folder (the files, not the folder), then Settings, Pages, Branch `main`, folder `/ (root)`, Save. Your address will be `https://USERNAME.github.io/REPO/`.

**Netlify:** go to app.netlify.com/drop and drag this whole folder onto the page.

**Vercel:** import the folder or repository at vercel.com. No settings are needed.

### Using your own domain
In your domain provider's DNS settings, add the records your host tells you to (usually `A` records for the main domain and a `CNAME` for `www`). Then update the 4 addresses in section 6 and `site.url` to your domain.

## 9. Personal guest links

Add `?guest=Name` to the link. The envelope and invitation say "Dear Name" and the RSVP name is pre-filled.

- `https://yoursite/?guest=Chidi%20Eze` (a space is `%20`)
- `https://yoursite/?guest=Mr%20%26%20Mrs%20Okafor` (`&` is `%26`)

Add `?nointro` to skip the envelope (useful for testing).

## 10. Before you send the link to guests

1. All placeholders replaced (photos, contact person, reception, story).
2. RSVP endpoint pasted and a real test RSVP appears in the Google Sheet.
3. Music replaced with your licensed MP3.
4. The 4 web addresses match your live site, and the preview image opens in a browser.
5. Facebook Sharing Debugger shows the envelope picture; test the link in a fresh WhatsApp chat.
6. Open it on a real iPhone (Safari), an Android phone (Chrome) and a laptop.
