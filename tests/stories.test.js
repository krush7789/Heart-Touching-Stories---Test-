// Unit tests for story translations. Run: node --test tests/
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), path = require('path'), vm = require('vm');

const dir = path.join(__dirname, '..', 'assets');
const ctx = vm.createContext({});
vm.runInContext(['data.js', 'motivational.js'].map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n') + '\nthis.STORIES = STORIES; this.CATS = CATS;', ctx);
const { STORIES, CATS } = ctx;

const DEV = /[ऀ-ॿ]/g, LATIN = /[A-Za-z]/g;
const count = (s, re) => (s.match(re) || []).length;
// Hindi text: mostly Devanagari letters (allows a brand name or two in Latin)
const isHindi = s => { const d = count(s, DEV), l = count(s, LATIN); return d > 0 && d / (d + l) >= 0.8; };
const isEnglish = s => count(s, LATIN) > 0 && count(s, DEV) === 0;
const pairs = s => [['title', s.title], ['sub', s.sub], ['lesson', s.lesson], ...(s.pull ? [['pull', s.pull]] : [])];

test('story ids are unique', () => {
  assert.strictEqual(new Set(STORIES.map(s => s.id)).size, STORIES.length);
});

for (const s of STORIES) {
  test(`story ${s.id}`, async t => {
    await t.test('has a known category', () => assert.ok(CATS[s.cat], `unknown cat ${s.cat}`));
    for (const [k, v] of pairs(s)) {
      await t.test(`${k} is bilingual`, () => {
        assert.ok(v?.en && v?.hi, `${k} missing en or hi`);
        assert.ok(isEnglish(v.en), `${k}.en not English: ${v.en}`);
        assert.ok(isHindi(v.hi), `${k}.hi not Hindi: ${v.hi}`);
        assert.notStrictEqual(v.en, v.hi);
      });
    }
    await t.test('body has matching en/hi paragraphs', () => {
      assert.ok(s.body?.en?.length && s.body?.hi?.length, 'body missing en or hi');
      assert.strictEqual(s.body.hi.length, s.body.en.length, 'paragraph count differs');
      s.body.en.forEach((p, i) => assert.ok(isEnglish(p), `body.en[${i}] not English: ${p.slice(0, 60)}`));
      s.body.hi.forEach((p, i) => {
        assert.ok(isHindi(p), `body.hi[${i}] not Hindi: ${p.slice(0, 60)}`);
        // a translation is neither empty nor wildly shorter/longer than its source
        const r = p.length / s.body.en[i].length;
        assert.ok(r > 0.4 && r < 2.5, `body.hi[${i}] length ratio ${r.toFixed(2)} looks off`);
      });
    });
    if (s.pull) await t.test('pull quote sits inside the body', () => assert.ok(s.pullAfter < s.body.en.length));
  });
}
