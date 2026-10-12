import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export function verifySource(actual, baseline) {
  assert.deepStrictEqual(actual, baseline, 'Map content or hierarchy differs from the reviewed source image.')
  const tiles = [...actual.stages.flatMap(stage => stage.tiles), ...actual.foundations.tiles]
  assert.equal(new Set(tiles.map(tile => tile.id)).size, tiles.length, 'Tile IDs must be unique.')
  return {
    stages: actual.stages.length,
    tiles: tiles.length,
    bullets: tiles.reduce((sum, tile) => sum + tile.bullets.length, 0),
    descriptions: tiles.filter(tile => tile.description !== undefined).length,
  }
}

export async function loadBaseline() {
  return JSON.parse(await readFile(new URL('../references/source-map.json', import.meta.url), 'utf8'))
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const { mapContent } = await import(new URL('../../../../src/mapContent.js', import.meta.url))
    const result = verifySource(mapContent, await loadBaseline())
    console.log(JSON.stringify({ status: 'pass', ...result }, null, 2))
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}