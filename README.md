# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Quick Start

Run with

```
bun run dev
```

## Development

We use an unconventional method for developing purposes.

Our main branch is called `devel` and this is the endpoint where all pull requests should be made.

After successful build `bun run build`, an admin will create a pull request to the `master` branch which is also the production branch. This branch is used for the [Vercel](https://vercel.com/barefootstaches-projects/myruckclub) endpoint.

Additionally one should `bun run preview` to make sure that the build creates the correct view.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Duplicate SQL events row

```
INSERT INTO
  "events" (
    "clubid",
    "coordinates",
    "startsAt",
    "duration",
    "inSummer",
    "location",
    "name",
    "type",
    "url"
  )
SELECT
  "clubid",
  "coordinates",
  '2024-09-24 19:00',
  "duration",
  "inSummer",
  "location",
  "name",
  "type",
  "url"
FROM
  "events"
WHERE
  "id" = 82;
```

## Add club

```
INSERT INTO
  "clubs" (id, associations, contact, coordinates, country, name, socialMediaContent, createdAt, updatedAt) 
  VALUES (
    "club_id",
    '["goruck"]',
    '{"preferred":"instagram","instagram":"https://www.instagram.com/club_id/"}',
    '[39.10848, -84.51744]',
    "USA",
    "name",
    '{"source":"instagram","lastPost":"2020-10-29","updatedAt":"2024-10-15"}',
    "2024-10-15 02:00",
    "2024-10-15 02:00"
    );
```

## Resources

- https://github.com/logue/vite-vuetify-ts-starter/tree/master
- https://pinia.vuejs.org/
- https://vuetifyjs.com/en/components/all/#selection
- https://vite-pwa-org.netlify.app/
- https://zod.dev/
- https://github.com/TanStack/query