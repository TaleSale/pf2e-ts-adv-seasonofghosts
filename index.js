var F = Object.defineProperty;
var u = (o, a) => F(o, "name", { value: a, configurable: !0 });
var G = (o, a, t) => {
  if (!a.has(o))
    throw TypeError("Cannot " + t);
};
var y = (o, a, t) => {
  if (a.has(o))
    throw TypeError("Cannot add the same private member more than once");
  a instanceof WeakSet ? a.add(o) : a.set(o, t);
};
var g = (o, a, t) => (G(o, a, "access private method"), t);
const h = { id: "pf2e-ap196-199-season-of-ghosts", title: "Season of Ghosts - Basis Pack", description: "Contains the Player's guide and common dependencies for the Season of Ghosts Adventure Path modules.", manifest: "https://downloads.paizo.com/foundry-public/modules/pf2e-ap196-199-season-of-ghosts/module.json", download: "https://downloads.paizo.com/foundry-public/modules/pf2e-ap196-199-season-of-ghosts/module-v11.zip", url: "https://paizo.com/store/pathfinder/adventures/adventurePath/seasonOfGhosts", version: "1.2.3", media: [{ type: "cover", url: "https://cdn.paizo.com/e7fd0eeb-9d7d-006b-7558-1a3e2f7bd8df/68e18c2e-7fd5-4f8f-bbc3-bcb96ec1e554/PZO90196-90169_KeyArt.webp", loop: !1, flags: {} }, { type: "icon", url: "https://cdn.paizo.com/image/navigation/Nav-Logo-Global.png", loop: !1, flags: {} }], packs: [{ name: "adventures", label: "Season of Ghosts - Player's Guide", path: "packs/adventures", system: "pf2e", ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" }, type: "Adventure", flags: {} }], scripts: [], esmodules: ["./index.js"], styles: ["./style.css"], authors: [{ name: "Paizo", url: "https://paizo.com/", flags: {} }], compatibility: { minimum: "11.306", verified: "11" }, relationships: { recommends: [{ id: "quick-insert", type: "module", manifest: "https://gitlab.com/fvtt-modules-lab/quick-insert/-/jobs/artifacts/master/raw/module.json?job=build-module", flags: { sigil: { devOnly: !0 } } }], systems: [{ id: "pf2e", manifest: "https://github.com/foundryvtt/pf2e/releases/latest/download/system.json", flags: { sigil: { localDevVersion: { distPath: "dist" } } }, type: "system", compatibility: { minimum: "5.7.2", verified: "5.7.2" } }] }, flags: { "pf2e-ap196-199-season-of-ghosts": { adventureImporter: { "Compendium.pf2e-ap196-199-season-of-ghosts.adventures.Adventure.pf2soghoadv00001": { initialJournalEntryId: "pf2sogho01player", initialJournalPageId: "01playersguide00", partyToken: "modules/pf2e-ap196-199-season-of-ghosts/assets/token/SoG_Party_Token.webp" } } }, sigil: { sheetClass: "SeasonOfGhostsJournalSheet", parent: "pf2e-ap196-199-season-of-ghosts", cssClass: "seasonofghosts", productTitle: "Season of Ghosts", productSlug: "SeasonOfGhosts", featureConfigurations: { "distraction-free-mode": !1, "safe-journal-mode": !0, "global-macro-helpers": !0, adventures: !0 }, adventureExports: [{ _id: "pf2soghoadv00001", name: "Season of Ghosts - Player's Guide", img: "modules/pf2e-ap196-199-season-of-ghosts/assets/art/PZO90196 Cover Scene.webp", caption: "", description: "Contains the Player's guide and common dependencies for the Season of Ghosts Adventure Path modules.", sort: 0, _include: { folders: ["pf2sogho01season", "4wyvYkzIawmxHkie"] }, _exclude: {}, flags: { core: { sheetClass: "pf2e-ap196-199-season-of-ghosts.SigilPF2EAdventureImporter" } } }] } }, packFolders: [{ name: "Season of Ghosts", sorting: "m", color: "#011e4b", packs: ["adventures"], folders: [] }], protected: !1 }, d = h.id, U = h.version, v = h.flags?.sigil?.productTitle, L = h.flags?.sigil?.productSlug, m = h.flags?.sigil?.cssClass, I = h.flags?.sigil?.featureConfigurations, _ = h.flags?.sigil?.sheetClass, q = { packageId: "pf2e-ap196-199-season-of-ghosts", productSlug: "SeasonOfGhosts" };
Hooks.once("init", () => {
  const o = [["@sigil.pf2e-ap196-199-season-of-ghosts.dialog-show", '<form class="journal-show-dialog"> <div class="form-group-stacked"> <div class="checkbox-label"> <span>{{localize "JOURNAL.ShowTo"}}</span> <label class="checkbox"> {{localize "OWNERSHIP.AllPlayers"}} <input type="checkbox" name="allPlayers" checked> </label> </div> <div class="form-fields"> {{#each users}} <label class="checkbox"> {{name}} <input type="checkbox" name="players" value="{{id}}" checked disabled> </label> {{/each}} </div> </div> </form> '], ["@sigil.pf2e-ap196-199-season-of-ghosts.importer", "<form class='flexrow' autocomplete='off' data-pack='{{adventure.pack}}' data-adventure-id='{{adventure.id}}' > <header class='adventure-head'> <img class='chapter-image' src='{{adventure.img}}' title='{{adventure.name}}' /> <h1 class='chapter-heading'>{{adventure.name}}</h1> </header> <section class='adventure-overview'> <h2>{{localize 'ADVENTURE.ImportHeaderOverview'}}</h2> {{{adventure.description}}} <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='dontShowAgain' {{checked this.dontShowAgain}} /> Don't show this dialog again </label> </div> </section> <section class='import-controls'> <h2>{{localize 'ADVENTURE.ImportHeaderContents'}}</h2> <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='importFields' value='all' title='Import All' checked /> Import All </label> </div> {{#each contents}} <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='importFields' value='{{this.field}}' title='Import {{this.label}}' checked disabled /> <i class='{{this.icon}}'></i> {{this.count}} {{this.label}} </label> </div> {{/each}} </section> {{#if hasImportOptions}} <section class='import-options'> <h2>Import Options</h2> {{#each importOptions as |option name|}} <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='{{name}}' title='{{option.label}}' {{checked option.default}} /> {{option.label}} </label> </div> {{/each}} </section> {{/if}} <footer class='adventure-footer'> <button type='submit'> <i class='fas fa-download'></i> {{localize 'ADVENTURE.ImportSubmit'}} </button> </footer> </form>"], ["@sigil.pf2e-ap196-199-season-of-ghosts.journal", `<div class="journal-sheet-container"> <div class="decoration corner-ul"></div> <div class="decoration corner-ur"></div> <div class="decoration corner-bl"></div> <div class="decoration corner-br"></div> <div class="decoration leaves"></div> <div class="decoration branches"></div> {{! Sidebar Container }} <aside class="sidebar directory flexcol journal-sidebar {{sidebarClass}}"> {{! Sidebar Search }} <header class="directory-header"> <div class="header-search flexrow"> <a class="action-button view-mode" data-action="toggleView" data-tooltip="{{localize viewMode.label}}"><i class="{{viewMode.icon}}"></i></a> <input type="search" name="search" value="" autocomplete="off" placeholder="{{localize "SIDEBAR.Search" types=(localize "DOCUMENT.JournalEntryPages")}}"> <a class="action-button collapse-toggle" data-action="toggleCollapse" data-tooltip="{{localize collapseMode.label}}"><i class="{{collapseMode.icon}}"></i></a> </div> </header> {{! Sidebar Pages Navigation }} <nav class="pages-list" aria-label="{{localize 'JOURNAL.NavLabel'}}" data-tooltip-direction="RIGHT"> <ol class="directory-list scrollable"> {{#each toc as |page|}} <li class="directory-item {{page.cssClass}}" data-page-id="{{page._id}}"> <div class="page-heading"> <span class="page-number{{#if page.pageNumberClass}} {{page.pageNumberClass}}{{/if}}" data-tooltip="{{page.name}}">{{page.number}}.</span> <span class="page-title">{{page.name}}</span> {{#if page.icon}} <span class="page-ownership {{page.ownershipCls}}"><i class="{{page.icon}}"></i></span> {{/if}} </div> </li> {{/each}} </ol> </nav> {{! Sidebar Control Buttons }} <div class="action-buttons flexrow"> <button class="previous" type="button" data-action="previous" data-tooltip="{{localize 'JOURNAL.PrevPage'}}"> <i class="fa-solid fa-chevron-left"></i> </button> {{#if editable}} <button class="create" type="button" data-action="createPage"> <i class="fa-solid fa-file-circle-plus"></i> {{localize "JOURNAL.AddPage"}} </button> {{/if}} <button class="next" type="button" data-action="next" data-tooltip="{{localize 'JOURNAL.NextPage'}}"> <i class="fa-solid fa-chevron-right"></i> </button> </div> </aside> {{! Main Content }} <section class="journal-entry-content flexcol"> <form class="journal-header"> <input class="title" name="name" type="text" value="{{document.name}}" placeholder="{{localize "JOURNAL.EntryTitle"}}"/> </form> <div class="journal-entry-pages {{cssClass}} {{viewMode.cls}}"> <div class="scrollable"> {{#each pages as |page|}} <article class="journal-entry-page {{page.type}}{{#if (eq page.type "text")}} {{cssClass}}{{/if}}" data-page-id="{{page._id}}"> {{#if page.editable}} <div class="edit-container"> <a class="editor-edit"><i class="fas fa-edit"></i></a> </div> {{/if}} </article> {{/each}} </div> </div> </section> </div> `], ["@sigil.pf2e-ap196-199-season-of-ghosts.page-edit", '<form class="{{cssClass}} flexcol" autocomplete="off"> {{> journalEntryPageHeader}} {{editor editor.content target="text.content" class="journal-page-content" button=false editable=true engine=editor.engine collaborate=editor.collaborate}} </form> '], ["@sigil.pf2e-ap196-199-season-of-ghosts.page-view", '{{#if data.title.show}} <header class="journal-page-header"> <h{{data.title.level}}{{#if data.subtitle}} class="split"{{/if}}> <span>{{data.name}}</span> {{#if data.subtitle}} <span class="subtitle">{{data.subtitle}}</span> {{/if}} </h{{data.title.level}}> </header> {{/if}} <section class="journal-page-content"> {{{editor.content}}} </section> ']];
  _templateCache = _templateCache || {};
  for (const [a, t] of o) {
    const e = Handlebars.compile(t);
    Handlebars.registerPartial(a, e), _templateCache[a] = e;
  }
});
function B() {
  Hooks.once("init", async () => {
    const o = game.modules.filter(
      (a) => a.active && a.flags[d]?.adventureImporter
    );
    for (const a of o)
      game.settings.register(a.id, "firstStartup", {
        name: "One-Time Startup Prompt",
        scope: "world",
        config: !1,
        type: Boolean,
        default: !0
      });
    Hooks.on("updateSetting", (a) => {
      if (a.key === "core.moduleConfiguration")
        for (const t of o)
          game.settings.set(t.id, "firstStartup", !a.value[t.id]);
    });
  }), Hooks.on("ready", async () => {
    const o = game.modules.filter(
      (a) => a.active && a.flags[d]?.adventureImporter
    );
    for (const a of o)
      if (game.settings.get(a.id, "firstStartup") && game.user.isGM)
        for (const e of a.packs.filter((s) => s.type === "Adventure")) {
          const i = await game.packs.get(`${a.id}.${e.name}`).getDocuments();
          for (const n of i)
            n.sheet.render(!0);
        }
  }), Hooks.on("activateNote", function(o, a) {
    if (!o.entry)
      return;
    const e = o.document.flags.sigil?.scroll;
    e && (a.scrollTag = e);
  });
}
u(B, "adventures");
function V() {
  Hooks.once("init", () => {
    game.settings.register(d, "distraction-free", {
      name: "Distraction Free Mode",
      hint: "Replaces Journal borders with a less visually distracting style.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (o) => {
        o ? document.querySelectorAll(`.journal-sheet.${m}-wrapper`).forEach((a) => a.classList.add("distraction-free")) : document.querySelectorAll(`.journal-sheet.${m}-wrapper`).forEach((a) => a.classList.remove("distraction-free"));
      }
    });
  });
}
u(V, "distractionFreeMode");
function Y() {
  window.sigilMacros = window.sigilMacros ?? {}, window.sigilMacros[`${L.toLowerCase()}Macros`] = {
    async toggleTokens(o, a) {
      let t = !1, e;
      o.sceneId && ({ sceneId: o, ids: a, force: t, state: e } = o), await this.toggleDocumentHiddenState({
        sceneId: o,
        ids: a,
        type: "Token",
        force: t,
        state: e
      });
    },
    async toggleTiles(o, a) {
      let t = !1, e;
      o.sceneId && ({ sceneId: o, ids: a, force: t, state: e } = o), await this.toggleDocumentHiddenState({
        sceneId: o,
        ids: a,
        type: "Tile",
        force: t,
        state: e
      });
    },
    async toggleDoors(o, a) {
      let t = !1, e;
      o.sceneId && ({ sceneId: o, ids: a, force: t, state: e } = o), await this.toggleDocumentHiddenState({
        sceneId: o,
        ids: a,
        type: "Wall",
        force: t,
        state: e
      });
    },
    async toggleSounds(o, a) {
      let t = !1, e;
      o.sceneId && ({ sceneId: o, ids: a, force: t, state: e } = o), await this.toggleDocumentHiddenState({
        sceneId: o,
        ids: a,
        type: "AmbientSound",
        force: t,
        state: e
      });
    },
    async toggleLights(o, a) {
      let t = !1, e;
      o.sceneId && ({ sceneId: o, ids: a, force: t, state: e } = o), await this.toggleDocumentHiddenState({
        sceneId: o,
        ids: a,
        type: "AmbientLight",
        force: t,
        state: e
      });
    },
    async playSound(o) {
      let a, t = !1;
      if (typeof o == "object" && ({ soundUuid: o = "", playing: a, stopAll: t } = o), t)
        for (const s of game.playlists.playing)
          await s.stopAll();
      const e = await fromUuid(o);
      e && (a ??= !e.playing, e.documentName === "PlaylistSound" && (a ? await e.parent.playSound(e) : await e.parent.stopSound(e)), e.documentName === "Playlist" && (a ? await e.playAll() : await e.stopAll()));
    },
    async changeScene({ sceneId: o, ambience: a, weather: t, darkness: e, force: s }) {
      if (canvas.scene.id === o || s) {
        const i = game.scenes.get(o);
        if (!i)
          return;
        const n = {};
        a && (n.playlistSound = i.playlistSound.id === a.ambienceId1 ? a.ambienceId2 : a.ambienceId1), t && (n.weather = i.weather === t.weatherId1 ? t.weatherId2 : t.weatherId1), e && (n.darkness = i.darkness === e.darknessValue1 ? e.darknessValue2 : e.darknessValue1), await i.update(n);
      }
    },
    // legacy call for changeScene
    async changeAmbience(o, a, t) {
      const e = {};
      o.sceneId ? e = o : e.sceneId = o, e.ambience ??= {}, e.ambience.ambienceId1 ??= a, e.ambience.ambienceId2 ??= t, await this.changeScene(e);
    },
    // legacy call for changeScene
    async changeWeather(o, a, t) {
      const e = {};
      o.sceneId ? e = o : e.sceneId = o, e.weather ??= {}, e.weather.weatherId1 ??= a, e.weather.weatherId2 ??= t, await this.changeScene(e);
    },
    async pickTileImage(o, a, t, e, s) {
      o.sceneId && ({ sceneId: o, tileId: a, title: t, prompt: e, tileOptions: s } = o);
      const i = `async function changeTileImage(img, sceneId, tileId) {
        await game.scenes.get(sceneId)?.tiles.get(tileId)?.update({ "texture.src": img });
      }`;
      async function n() {
        await new Promise(async (c) => {
          setTimeout(c, 200), await new Dialog(
            {
              title: t,
              content: r,
              buttons: { Close: { label: "Close" } }
            },
            { width: 300 }
          ).render(!0);
        });
      }
      u(n, "callTileMenu");
      let r = `<style>
      .mhmenumain {
          margin: 1px auto;
          background: url(systems/pf2e/assets/sheet/parchment.webp);
      }
      .mhmenu {
          margin: 1px auto;
          column-count: 1;
          column-width: auto;
      }
      .mhbutton {
          width: 100%;
          height: fit-content;
      }
      </style><script>${i}<\/script><div class="mhmenumain">`;
      r += `<p style="text-align:center;">${e}</p>`, s.forEach((c, l) => {
        r += `<button name="button${l}" class="mhbutton" type="button" onclick="changeTileImage('${c.img}','${o}','${a}')">${c.name}</button>`;
      }), r += "</div><br></div>", n();
    },
    async pickMacro({ title: o, prompt: a, macroOptions: t }) {
      const e = `async function callMacro(macro) {
        let pickedMacro = game.macros.find((m) => m.id === macro.id || (m.name === macro.macroName && m.folder?.id === macro.macroFolder));
        if (pickedMacro) {
          await pickedMacro.execute()
        }
      }`;
      async function s() {
        await new Promise(async (n) => {
          setTimeout(n, 200), await new Dialog(
            {
              title: o,
              content: i,
              buttons: { Close: { label: "Close" } }
            },
            { width: 300 }
          ).render(!0);
        });
      }
      u(s, "callMacroMenu");
      let i = `<style>
      .mhmenumain {
          margin: 1px auto;
          background: url(systems/pf2e/assets/sheet/parchment.webp);
      }
      .mhmenu {
          margin: 1px auto;
          column-count: 1;
          column-width: auto;
      }
      .mhbutton {
          width: 100%;
          height: fit-content;
      }
      </style><script>${e}<\/script><div class="mhmenumain">`;
      i += `<p style="text-align:center;">${a}</p>`, t.forEach((n, r) => {
        i += `<button name="button${r}" class="mhbutton" type="button" onclick="callMacro({macroName: '${n.macroName}', macroFolder: '${n.macroFolder}', id: '${n.id}'})">${n.name}</button>`;
      }), i += "</div><br></div>", s();
    },
    async moveTile(o, a, t) {
      let e;
      if (o.sceneId && ({ sceneId: o, tileId: a, states: t, force: e } = o), canvas.scene.id === o || e) {
        const s = game.scenes.get(o).tiles.get(a);
        let i = !0;
        Object.keys(t[0]).forEach((n) => {
          Object.keys(diffObject(s, t[0])).length > 0 && (i = !1);
        }), s.update(t[i ? 1 : 0]);
      }
    },
    async updateSceneChildDocuments({ sceneId: o, documentName: a, data: t, animate: e = !1 }) {
      let s;
      const i = game.scenes.get(o);
      switch (a) {
        case "Token":
          s = i.tokens;
          break;
        case "Wall":
          s = i.walls;
          break;
        case "AmbientLight":
          s = i.lights;
          break;
        case "Note":
          s = i.notes;
          break;
        case "Tile":
          s = i.tiles;
          break;
        case "AmbientSound":
          s = i.sounds;
          break;
        default:
          return;
      }
      const n = Object.entries(t).reduce((r, [c, l]) => (s.has(c) && r.push({ _id: c, ...l }), r), []);
      return canvas.scene.updateEmbeddedDocuments(a, n, { animate: e });
    },
    async changeToken(o, a, t) {
      let e, s;
      if (o.sceneId && ({ sceneId: o, tokenId: a, states: t, force: e, checkAlive: s } = o), canvas.scene.id === o || e) {
        const i = game.scenes.get(o), n = i.tokens.get(a) || i.tokens.getName(a);
        if (!n)
          return;
        if (s) {
          let c = !1;
          if (Array.isArray(s))
            for (const l of s)
              c = c || (await fromUuid(l))?.actor?.isDead;
          if (c = c || n.actor.isDead, c) {
            n.actor.update({ "system.attributes.hp.value": 0 });
            return;
          }
        }
        let r = !0;
        Object.keys(t[0]).forEach((c) => {
          Object.keys(diffObject(n, t[0])).length > 0 && (r = !1);
        }), n.update(t[r ? 1 : 0], { animate: !1 });
      }
    },
    async toggleDocumentHiddenState({ sceneId: o, ids: a, type: t, force: e, state: s }) {
      if (canvas.scene.id === o || e) {
        typeof a == "string" && (a = [a]);
        const { SECRET: i } = CONST.WALL_DOOR_TYPES, n = game.scenes.get(o);
        let r = [], c = [];
        switch (t) {
          case "Tile":
            r = n.tiles.filter((l) => a.includes(l.id)), c = r.map((l) => ({ _id: l.id, hidden: s === void 0 ? !l.hidden : s }));
            break;
          case "Token":
            r = n.tokens.filter((l) => a.includes(l.id)), c = r.map((l) => ({ _id: l.id, hidden: s === void 0 ? !l.hidden : s }));
            break;
          case "Wall":
            a[0] === "all" ? r = n.walls.filter((l) => l.door === i) : r = n.walls.filter((l) => a.includes(l.id)), c = r.map((l) => ({ _id: l.id, ds: s === void 0 ? l.ds === 1 ? 0 : 1 : s }));
            break;
          case "AmbientLight":
            r = n.lights.filter((l) => a.includes(l.id)), c = r.map((l) => ({ _id: l.id, hidden: s === void 0 ? !l.hidden : s }));
            break;
          case "AmbientSound":
            r = n.sounds.filter((l) => a.includes(l.id)), c = r.map((l) => ({ _id: l.id, hidden: s === void 0 ? !l.hidden : s }));
            break;
          default:
            ui.notifications.warn("Attempting to change unknown Document Type");
        }
        c.length > 0 && await n.updateEmbeddedDocuments(t, c);
      }
    }
  }, window.sigilMacros[`${q.productSlug.toLowerCase()}Macros`] = window.sigilMacros[`${L.toLowerCase()}Macros`];
}
u(Y, "globalMacroHelpers");
function Z() {
  Hooks.once("init", () => {
    game.settings.register(d, "safe-journal", {
      name: "Journal Freeze Workaround",
      hint: "Workaround for a Chrome issue that can cause all journals to freeze under certain circumstances.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (o) => {
        o ? document.querySelectorAll(`.journal-sheet.${m}-wrapper`).forEach((a) => a.classList.add("safe-journal")) : document.querySelectorAll(`.journal-sheet.${m}-wrapper`).forEach((a) => a.classList.remove("safe-journal"));
      }
    });
  });
}
u(Z, "safeJournalMode");
const K = {
  adventures: B,
  "distraction-free-mode": V,
  "global-macro-helpers": Y,
  "safe-journal-mode": Z
};
for (const [o, a] of Object.entries(K))
  I?.[o] && a();
var C, R, O, H;
const P = class P extends AdventureImporter {
  /**
   *  Add adventure stuff
   *
   * @param {Adventure} adventure
   * @param {object} options
   */
  constructor(t, e) {
    super(t, e);
    /* -------------------------------------------- */
    /**
     * Handle toggling the import all checkbox.
     *
     * @param {Event} event  The change event.
     */
    y(this, C);
    /**
     * Handle toggling the don't show again checkbox.
     *
     * @param {Event} event  The change event.
     */
    y(this, O);
    this.options.classes.push(m);
    const s = game.modules.get(this.adventure.compendium.metadata.packageName), {
      initialSceneId: i,
      initialJournalEntryId: n,
      initialJournalPageId: r,
      initialLoginScreenBackground: c,
      chatMessage: l
    } = s.flags?.[d]?.adventureImporter?.[this.adventure.uuid] || {};
    this.importOptions = {}, i && (this.importOptions.activateScene = {
      label: "Activate Initial Scene",
      default: !0,
      handler: () => game.scenes.get(i)?.activate()
    }), n && r && (this.importOptions.displayJournal = {
      label: "Display Introduction Journal Entry",
      default: !0,
      handler: () => {
        game.journal.get(n).sheet.render(!0, { pageId: r });
      }
    }), c && (this.importOptions.customizeJoin = {
      label: "Style Login Screen",
      default: !1,
      handler: async () => {
        const p = {
          id: game.world.id,
          action: "editWorld",
          description: s.description,
          background: `modules/${s.id}/${c}`
        }, f = await foundry.utils.fetchJsonWithTimeout(
          foundry.utils.getRoute("setup"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(p)
          }
        );
        game.world.updateSource(f);
      }
    }), l?.label && l?.content && (this.importOptions.chatMessage = {
      label: l.label,
      default: !0,
      handler: () => {
        ChatMessage.create({
          content: l.content,
          whisper: ChatMessage.getWhisperRecipients("GM")
        });
      }
    });
  }
  get template() {
    return `@sigil.${d}.importer`;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async getData(t = {}) {
    const e = await super.getData(), s = game.modules.get(this.adventure.compendium.metadata.packageName);
    return e.importOptions = this.importOptions || {}, e.hasImportOptions = Object.keys(e.importOptions).length > 0, e.dontShowAgain = !game.settings.get(s.id, "firstStartup"), e;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  activateListeners(t) {
    super.activateListeners(t), t.find('input[value="all"]')[0].addEventListener("change", (e) => {
      g(this, C, R).call(this, e);
    }), t.find('input[name="dontShowAgain"]')[0].addEventListener("change", (e) => {
      g(this, O, H).call(this, e);
    });
  }
  /* -------------------------------------------- */
  /**
   * Prepare a list of content types provided by this adventure.
   *
   * @returns {{icon: string, label: string, count: number}[]}
   * @protected
   */
  _getContentList() {
    return Object.entries(Adventure.contentFields).reduce((t, [e, s]) => {
      const i = this.adventure[e].size;
      return i && t.push({
        field: e,
        icon: CONFIG[s.documentName].sidebarIcon,
        label: game.i18n.localize(i > 1 ? s.metadata.labelPlural : s.metadata.label),
        count: i
      }), t;
    }, []);
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _prepareImportData(t) {
    this.submitOptions = t;
    const { toCreate: e, toUpdate: s, documentCount: i } = await super._prepareImportData(t);
    return this.applyImportControls(t, e, s), "Scene" in e && await this.mergeCompendiumScenes(e.Scene), "Scene" in s && await this.mergeCompendiumScenes(s.Scene), { toCreate: e, toUpdate: s, documentCount: i };
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _importContent(t, e, s) {
    const i = await super._importContent(t, e, s);
    for (const [r, c] of Object.entries(this.importOptions ?? {}))
      !c.handler || !this.submitOptions[r] || await c.handler();
    const n = game.modules.get(this.adventure.compendium.metadata.packageName);
    return game.settings.set(n.id, "firstStartup", !1), i;
  }
  /* -------------------------------------------- */
  async mergeCompendiumScenes(t) {
    const e = game.settings.get("core", "defaultToken");
    for (const s of t)
      for (let i of s.tokens)
        i = Object.assign(i, foundry.utils.mergeObject(i, e));
  }
  /* -------------------------------------------- */
  /**
   * Remove adventure content that the user indicated they did not want to import.
   *
   * @param {object} formData  The submitted adventure form data.
   * @param {object} toCreate  An object of document data to create.
   * @param {object} toUpdate  An object of document data to update.
   */
  applyImportControls(t, e, s) {
    const i = t.importFields.filter((r) => r);
    if (i.push("folders"), !i || !Array.isArray(i) || i.some((r) => r === "all"))
      return;
    const n = new Set(i.map((r) => Adventure.contentFields[r].documentName));
    [e, s].forEach((r) => {
      for (const c of Object.keys(r))
        n.has(c) || delete r[c];
      r.Folder && (r.Folder = r.Folder.filter((c) => n.has(c.type)));
    });
  }
};
C = new WeakSet(), R = /* @__PURE__ */ u(function(t) {
  const e = t.currentTarget, s = e.closest(".import-controls"), i = e.checked;
  s.querySelectorAll("input").forEach((n) => {
    n.value !== "folders" && (n.disabled = i), i && (n.checked = !0);
  }), e.disabled = !1;
}, "#onToggleImportAll"), O = new WeakSet(), H = /* @__PURE__ */ u(function(t) {
  const s = t.currentTarget.checked, i = game.modules.get(this.adventure.compendium.metadata.packageName);
  game.settings.set(i.id, "firstStartup", !s);
}, "#onToggleDontShowAgain"), u(P, "SigilAdventureImporter");
let D = P;
var b, z, T, J, A, W;
const E = class E extends D {
  /**
   *  Add adventure stuff
   *
   * @param {Adventure} adventure
   * @param {object} options
   */
  constructor(t, e) {
    super(t, e);
    /* -------------------------------------------- */
    /**
     * Merge Actor data with authoritative source data from system compendium packs
     *
     * @param {Actor[]} actors        Actor documents intended to be imported
     * @param {object} importOptions  Form submission import options
     * @returns {Promise<void>}
     */
    y(this, b);
    y(this, T);
    y(this, A);
    this.options.classes.push(m);
    const s = game.modules.get(this.adventure.compendium.metadata.packageName), { additionalItems: i, removeItems: n, partyToken: r } = s.flags?.[d]?.adventureImporter?.[this.adventure.uuid] || {};
    this.additionalItems = i ?? {}, this.removeItems = n ?? {}, r && (this.importOptions.partyToken = {
      label: "Use Adventure Party Token",
      default: !1,
      handler: () => game.actors.party?.update({ img: r })
    });
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _prepareImportData(t) {
    this.submitOptions = t;
    const { toCreate: e, toUpdate: s, documentCount: i } = await super._prepareImportData(t);
    return this.applyImportControls(t, e, s), "Actor" in e && await g(this, b, z).call(this, e.Actor), "Actor" in s && await g(this, b, z).call(this, s.Actor), "Scene" in e && await this.mergeCompendiumScenes(e.Scene), "Scene" in s && await this.mergeCompendiumScenes(s.Scene), { toCreate: e, toUpdate: s, documentCount: i };
  }
};
b = new WeakSet(), z = /* @__PURE__ */ u(async function(t) {
  for (let e of t) {
    const [, s, i, n, r] = e.flags?.core?.sourceId?.split?.(".") ?? [], c = game.packs.get(`${s}.${i}`);
    if (!c?.index?.has?.(r || n)) {
      c && console.warn(
        `[${s}] Compendium source data for "${e.name}" [${e._id}] not found in pack ${c?.collection}`
      );
      continue;
    }
    const l = await c.getDocument(r), p = l.toObject(), f = (p.items ?? []).filter(g(this, T, J).bind(this, e._id));
    await g(this, A, W).call(this, e._id, f), l.type === "npc" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(p, {
        folder: e.folder,
        img: e.img,
        items: f,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.randomImg": e.prototypeToken?.randomImg,
        "prototypeToken.flags.pf2e": e.prototypeToken?.flags?.pf2e,
        "system.attributes.adjustment": e.system.attributes?.adjustment,
        "system.details.alignment": e.system.details?.alignment,
        "system.details.blurb": e.system.details?.blurb,
        "system.attributes.hp.value": e.system.attributes?.hp?.value,
        "system.details.languages.value": e.system.details?.languages?.value,
        "system.traits.value": e.system.traits?.value,
        "system.traits.size": e.system.traits?.size,
        _id: e._id
      })
    )), l.type === "hazard" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(p, {
        folder: e.folder,
        img: e.img,
        items: f,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.width": e.prototypeToken?.width,
        "prototypeToken.height": e.prototypeToken?.height,
        "system.traits.value": e.system.traits?.value,
        _id: e._id
      })
    )), l.type === "vehicle" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(p, {
        folder: e.folder,
        img: e.img,
        items: f,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.width": e.prototypeToken?.width,
        "prototypeToken.height": e.prototypeToken?.height,
        _id: e._id
      })
    ));
  }
}, "#mergeCompendiumActors"), T = new WeakSet(), J = /* @__PURE__ */ u(function(t, e) {
  return !this.removeItems[t]?.some((s) => s.id === e._id) || !this.removeItems[t]?.some((s) => s.name === e.name);
}, "#filterItems"), A = new WeakSet(), W = /* @__PURE__ */ u(async function(t, e) {
  const s = this.additionalItems[t] ?? [], i = e.map((n) => n._id);
  for (const n of s) {
    const r = (await fromUuid(n)).toObject();
    for (; i.includes(r._id); )
      r._id = randomID();
    i.push(r._id), e.push(r);
  }
}, "#addItems"), u(E, "SigilPF2EAdventureImporter");
let x = E;
Hooks.once("init", () => {
  DocumentSheetConfig.registerSheet(Adventure, d, x, {
    label: `${v} Importer`,
    makeDefault: !1
  });
});
const N = class N extends JournalSheet {
  static get defaultOptions() {
    const a = {
      classes: ["sheet", "journal-sheet", "journal-entry", `${m}-wrapper`],
      width: window.innerWidth < 800 ? 720 : 960,
      height: window.innerHeight < 1e3 ? 700 : 800
    };
    return I?.["distraction-free-mode"] && game.settings.get(d, "distraction-free") && a.classes.push("distraction-free"), I?.["safe-journal-mode"] && game.settings.get(d, "safe-journal") && a.classes.push("safe-journal"), foundry.utils.mergeObject(super.defaultOptions, a);
  }
  get template() {
    return `@sigil.${d}.journal`;
  }
  getData(a) {
    const t = super.getData(a);
    t.cssClass = m;
    let e = this?.document?.flags?.sigil?.additionalCssClass;
    return typeof e == "string" && (e = e.split(" ")), Array.isArray(e) && e && (t.cssClass = [m, ...e].join(" ")), t;
  }
  _getPageData() {
    let a = 1;
    return super._getPageData().map((t) => (t?.flags[d]?.pageNumber ? (t.number = t.flags[d].pageNumber, typeof t?.flags[d]?.pageNumber == "number" && (a = t.number + 1)) : t.number = a++, t?.flags[d]?.pageNumberClass && (t.pageNumberClass = t.flags[d].pageNumberClass), t.editable = t.editable && t?.flags[d]?.editable, t));
  }
  async _renderHeadings(a, t) {
    return Object.entries(t || {}).forEach(([e, s]) => {
      s.element.classList.contains("no-toc") && delete t[e];
      const i = s.element?.querySelectorAll("span");
      i.length > 0 && (s.text = i[0].textContent);
    }), await super._renderHeadings(a, t);
  }
  _onResizeMouseDown(a) {
    this._chromeShapeOutsideFreezeWorkaround(!0);
  }
  _onResize(a) {
    this._onResizeMouseUp(a);
  }
  _onResizeMouseUp(a) {
    this._chromeShapeOutsideFreezeWorkaround(!1);
  }
  _chromeShapeOutsideFreezeWorkaround(a) {
    this.element[0].classList[a ? "add" : "remove"]("resizing");
  }
  async minimize() {
    !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.minimize());
  }
  async maximize() {
    !this.popOut || [!1, null].includes(this._minimized) || (await super.maximize(), this._chromeShapeOutsideFreezeWorkaround(!1));
  }
  async close() {
    !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.close());
  }
  async _renderOuter() {
    const a = await super._renderOuter();
    return a.find("div.window-resizable-handle")[0].addEventListener("pointerdown", this._onResizeMouseDown.bind(this)), a;
  }
  /** @override */
  async _render(a = !1, t = {}) {
    let e = this?.document?.flags?.sigil?.additionalCssClass;
    if (typeof e == "string" && (e = e.split(" ")), t.classes = t.classes || this.constructor.defaultOptions.classes, Array.isArray(e))
      for (const s of e)
        t.classes.includes(s + "-wrapper") || t.classes.push(s + "-wrapper");
    if (t.action === "update" && this._state !== Application.RENDER_STATES.NONE && JSON.stringify(this.options.classes) !== JSON.stringify(t.classes))
      return this.close();
    if (await super._render(a, t), "scrollTag" in t) {
      this._scrollPositions ??= {};
      const s = this._scrollPositions[".scrollable"] ??= [], i = this.element[0].querySelector(`[data-scroll='${t.scrollTag}']`)?.offsetTop;
      if (!i)
        return;
      s.length ? s[1] = i : s.push(0, i), this._restoreScrollPositions(this.element);
    }
  }
};
u(N, "SigilJournalSheet");
let k = N;
const M = class M extends JournalTextPageSheet {
  get template() {
    return `@sigil.${d}.page-${this.isEditable ? "edit" : "view"}`;
  }
  async showWhisperDialog(a, t) {
    if (!(a instanceof JournalEntry || a instanceof JournalEntryPage))
      return;
    if (!a.isOwner)
      return ui.notifications.error("JOURNAL.ShowBadPermissions", {
        localize: !0
      });
    if (game.users.size < 2)
      return ui.notifications.warn("JOURNAL.ShowNoPlayers", {
        localize: !0
      });
    const e = game.users.filter((i) => i.id !== game.userId), s = await renderTemplate(`@sigil.${d}.dialog-show`, { users: e });
    return Dialog.prompt({
      // title: game.i18n.format("JOURNAL.ShowEntry", {name: doc.name}),
      // label: game.i18n.localize("JOURNAL.ActionShow"),
      title: "Whisper Selected Content to...",
      label: "Whisper to Selected Players",
      content: s,
      render: (i) => {
        const n = i.querySelector("form");
        n.elements.allPlayers.addEventListener("change", (r) => {
          const c = r.currentTarget.checked;
          n.querySelectorAll('[name="players"]').forEach((l) => {
            l.checked = c, l.disabled = c;
          });
        });
      },
      callback: async (i) => {
        const n = i.querySelector("form"), r = new FormDataExtended(n).object, c = r.allPlayers ? game.users.filter((p) => !p.isSelf) : r.players.reduce((p, f) => {
          const j = game.users.get(f);
          return j && !j.isSelf && p.push(j), p;
        }, []);
        if (!c.length)
          return;
        const l = c.map((p) => p.id);
        return ChatMessage.create({
          whisper: l,
          content: t
        });
      },
      rejectClose: !1,
      options: { jQuery: !1 }
    });
  }
  async _onClickReadAloud(a) {
    if (a.preventDefault(), ["IMG", "A"].includes(a.target.tagName))
      return;
    const e = `<div data-sigil-chatable>${a.currentTarget.innerHTML}</div>`;
    this.showWhisperDialog(this.object.parent, e);
  }
  activateListeners(a) {
    super.activateListeners(a), a.find(".read-aloud").click(this._onClickReadAloud.bind(this)), this?.document?.parent?.flags?.sigil?.variations && a[0].querySelectorAll("[data-option][data-variation]").forEach((t) => {
      const e = t.dataset.variation, s = t.dataset.option, i = this.document.parent.flags.sigil.variations.find(
        (n) => n.name === e
      )?.option;
      i && s !== i && (t.style.display = "none");
    });
  }
};
u(M, "SigilJournalSheetPage");
let w = M;
const $ = class $ extends JournalImagePageSheet {
};
u($, "SigilJournalSheetImagePage");
let S = $;
Hooks.once("init", () => {
  Object.defineProperty(k, "name", {
    value: `${_}`
  }), Object.defineProperty(w, "name", {
    value: `${_}Page`
  }), Object.defineProperty(S, "name", {
    value: `${_}ImagePage`
  }), DocumentSheetConfig.registerSheet(JournalEntry, d, k, {
    type: "base",
    makeDefault: !1,
    canBeDefault: !1,
    label: `${v}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, d, w, {
    type: "text",
    makeDefault: !1,
    canBeDefault: !1,
    label: `${v}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, d, S, {
    type: "image",
    makeDefault: !1,
    canBeDefault: !1,
    label: `${v}`
  });
});
console.log(`[${d}@${U}...] successfully loaded!`);
