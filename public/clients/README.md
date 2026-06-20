# Client logos

The clients section (`components/home/Clients.tsx`) renders styled wordmarks by
default. To use real brand logos instead, drop image files here and set the
`logo` field on the matching client, e.g.:

```ts
{ name: "AT&T", logo: "/clients/att.svg" },
```

Prefer SVG (or transparent PNG). The grid auto-applies a grayscale + fade
treatment that lifts to full color on hover, so plain full-color logos look
consistent without editing.
