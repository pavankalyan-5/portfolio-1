# pavan kalyan — portfolio

Personal site for Guntuboina Pavan Kalyan, Lead Software Engineer at Prezent.

The homepage is an interactive architecture diagram: nine nodes representing work
actually owned in production, wired into a request path. Hovering a node lights its
edges and fills a readout panel; activating one scrolls to the section that documents
it. The diagram doubles as navigation, which is what lets the top bar stay short.

## Design rules

Two functional colours, and they never swap roles:

| Token      | Value     | Means                                            |
| ---------- | --------- | ------------------------------------------------ |
| `--signal` | `#5bf2b8` | the active path, links, status flags             |
| `--meter`  | `#ffb861` | measured values only — never a status or a label |

So an amber number always means a result that can be defended, and a mint highlight
always means "this is where you are". Status flags like *lead engineer* are mint, not
amber, because they are not measurements.

Sections are labelled by the diagram node they document — `[api-gateway]`,
`[cache-layer]` — rather than numbered. The page is not a sequence, so numbering it
would be decoration pretending to be information.

The design commits to a single dark world; there is no light theme and no toggle.
Every colour is painted explicitly so nothing inherits from the host.

Type is IBM Plex Mono for all structure and IBM Plex Sans for prose, via `next/font`.

## Editing content

Every word, link, statistic and diagram coordinate lives in **`lib/content.ts`**.
No component hardcodes copy. To change the site, change that file.

Notable exports:

- `systemNodes` / `systemEdges` — the diagram. Coordinates are in the SVG viewBox
  declared by `systemViewBox`; edges join box edges, so moving a node means updating
  the paths that touch it.
- `impact` — the three measured results.
- `projects` — case studies, rendered at `/work/[slug]`.
- `blogs` — full article content, rendered at `/blog/[slug]`, each linking out to the
  original on GeeksforGeeks.
- `codingProfiles` — LeetCode, Codeforces, GeeksforGeeks, ACM ICPC. Figures were taken
  from the LeetCode and Codeforces APIs; re-check them before they go stale.
- `awards` — the three Prezent awards and their images.

## Routes

```
/                                    homepage
/work/tomato, /work/natours          case studies
/blog/[slug]                         one page per published article
/pavan-kalyan-resume.pdf             résumé download
```

All routes are statically prerendered.

## Accessibility

Diagram nodes are focusable and operable by keyboard; below `md` the diagram is
replaced by a list carrying the same content. The Index panel provides full navigation
below `lg`, where the inline nav is hidden. All motion — crawling edges, packets, the
morphing hero portrait — is disabled under `prefers-reduced-motion`; the SMIL packets
are not mounted at all in that case, since CSS cannot pause them.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Runtime dependencies are `next`, `react` and `react-dom`. Nothing else.
