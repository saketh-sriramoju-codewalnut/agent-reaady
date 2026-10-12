import assert from 'node:assert/strict'
import test from 'node:test'
import { loadBaseline, verifySource } from './check-source.mjs'

const baseline = await loadBaseline()

test('accepts the reviewed source transcription', () => {
  assert.deepEqual(verifySource(structuredClone(baseline), baseline), {
    stages: 4, tiles: 10, bullets: 33, descriptions: 8,
  })
})

test('rejects altered source wording', () => {
  const changed = structuredClone(baseline)
  changed.stages[0].tiles[0].bullets[0] = 'Install dependencies'
  assert.throws(() => verifySource(changed, baseline))
})

test('rejects swapped stage membership even when counts match', () => {
  const changed = structuredClone(baseline)
  const tile = changed.stages[0].tiles[1]
  changed.stages[0].tiles[1] = changed.stages[1].tiles[0]
  changed.stages[1].tiles[0] = tile
  assert.throws(() => verifySource(changed, baseline))
})

test('rejects a reversed stage sequence', () => {
  const changed = structuredClone(baseline)
  changed.stages.reverse()
  assert.throws(() => verifySource(changed, baseline))
})

test('rejects an invented foundation description', () => {
  const changed = structuredClone(baseline)
  changed.foundations.tiles[0].description = 'An invented summary'
  assert.throws(() => verifySource(changed, baseline))
})