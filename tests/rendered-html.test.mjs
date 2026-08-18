import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Relix agency site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Relix — AI Video Production Studio<\/title>/i);
  assert.match(html, /Impossible stories\./);
  assert.match(html, /Made visible\./);
  assert.match(html, /Selected work/);
  assert.match(html, /What we make/);
  assert.match(html, /hello@relix\.ai/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("renders every agency route", async () => {
  const routes = ["/work", "/work/eclipse", "/work/new-orbit", "/work/afterimage", "/services", "/process", "/studio", "/insights", "/contact"];
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
  }
});

test("project metadata is specific and does not inherit the site card", async () => {
  const orbit = await (await render("/work/new-orbit")).text();
  assert.match(orbit, /<title>New Orbit — Relix<\/title>/);
  assert.match(orbit, /property="og:title" content="New Orbit — Relix"/);
  assert.doesNotMatch(orbit, /og\.png/);

  const eclipse = await (await render("/work/eclipse")).text();
  assert.match(eclipse, /property="og:image" content="https:\/\/relix-ai-video-studio\.xalebf\.chatgpt\.site\/relix-hero\.png"/);
  assert.doesNotMatch(eclipse, /og\.png/);
});
