var q = Object.defineProperty;
var d = (n, e) => q(n, "name", { value: e, configurable: !0 });
var B = (n, e, a) => {
  if (!e.has(n))
    throw TypeError("Cannot " + a);
};
var g = (n, e, a) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, a);
};
var f = (n, e, a) => (B(n, e, "access private method"), a);
const b = { id: "pf2e-ap196-199-season-of-ghosts", title: "Season of Ghosts - Basis Pack", description: "Contains the Player's guide and common dependencies for the Season of Ghosts Adventure Path modules.", manifest: "https://downloads.paizo.com/foundry-public/modules/pf2e-ts-adv-seasonofghosts/module.json", download: "https://downloads.paizo.com/foundry-public/modules/pf2e-ts-adv-seasonofghosts/module-v11.zip", url: "https://paizo.com/store/pathfinder/adventures/adventurePath/seasonOfGhosts", version: "1.1.0", media: [{ type: "cover", url: "https://cdn.paizo.com/e7fd0eeb-9d7d-006b-7558-1a3e2f7bd8df/68e18c2e-7fd5-4f8f-bbc3-bcb96ec1e554/PZO90196-90169_KeyArt.webp", loop: !1, flags: {} }, { type: "icon", url: "https://cdn.paizo.com/image/navigation/Nav-Logo-Global.png", loop: !1, flags: {} }], packs: [{ name: "adventures", label: "Season of Ghosts - Player's Guide", path: "packs/adventures", system: "pf2e", ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" }, type: "Adventure", flags: {} }], scripts: [], esmodules: ["./index.js"], styles: ["./style.css"], authors: [{ name: "Paizo", url: "https://paizo.com/", flags: {} }], compatibility: { minimum: "11.306", verified: "11" }, relationships: { recommends: [{ id: "quick-insert", type: "module", manifest: "https://gitlab.com/fvtt-modules-lab/quick-insert/-/jobs/artifacts/master/raw/module.json?job=build-module", flags: { sigil: { devOnly: !0 } } }], systems: [{ id: "pf2e", manifest: "https://github.com/foundryvtt/pf2e/releases/latest/download/system.json", flags: { sigil: { localDevVersion: { distPath: "dist" } } }, type: "system", compatibility: { minimum: "5.7.2", verified: "5.7.2" } }] }, flags: { "pf2e-ap196-199-season-of-ghosts": { adventureImporter: { "Compendium.pf2e-ap196-199-season-of-ghosts.adventures.Adventure.pf2soghoadv00001": { initialJournalEntryId: "pf2sogho01player", initialJournalPageId: "01playersguide00" } } }, sigil: { sheetClass: "SeasonOfGhostsJournalSheet", parent: "pf2e-ap196-199-season-of-ghosts", cssClass: "seasonofghosts", productTitle: "Season of Ghosts", productSlug: "SeasonOfGhosts", featureConfigurations: { "distraction-free-mode": !1, "safe-journal-mode": !0, "global-macro-helpers": !0, adventures: !0 }, adventureExports: [{ _id: "pf2soghoadv00001", name: "Season of Ghosts - Player's Guide", img: "modules/pf2e-ts-adv-seasonofghosts/assets/art/PZO90196 Cover Scene.webp", caption: "", description: "Contains the Player's guide and common dependencies for the Season of Ghosts Adventure Path modules.", sort: 0, _include: { folders: ["pf2sogho01season"] }, _exclude: {}, flags: { core: { sheetClass: "pf2e-ap196-199-season-of-ghosts.SigilPF2EAdventureImporter" } } }] } }, packFolders: [{ name: "Season of Ghosts", sorting: "m", color: "#011e4b", packs: ["adventures"], folders: [] }], protected: !1 }, c = b.id, V = b.version, k = b.flags?.sigil?.productTitle, R = b.flags?.sigil?.productSlug, h = b.flags?.sigil?.cssClass, _ = b.flags?.sigil?.featureConfigurations, D = b.flags?.sigil?.sheetClass, Y = { packageId: "pf2e-ap196-199-season-of-ghosts", productSlug: "SeasonOfGhosts" };
Hooks.once("init", () => {
  const n = [["@sigil.pf2e-ap196-199-season-of-ghosts.dialog-show", '<form class="journal-show-dialog"> <div class="form-group-stacked"> <div class="checkbox-label"> <span>{{localize "JOURNAL.ShowTo"}}</span> <label class="checkbox"> {{localize "OWNERSHIP.AllPlayers"}} <input type="checkbox" name="allPlayers" checked> </label> </div> <div class="form-fields"> {{#each users}} <label class="checkbox"> {{name}} <input type="checkbox" name="players" value="{{id}}" checked disabled> </label> {{/each}} </div> </div> </form> '], ["@sigil.pf2e-ap196-199-season-of-ghosts.importer", "<form class='flexrow' autocomplete='off' data-pack='{{adventure.pack}}' data-adventure-id='{{adventure.id}}' > <header class='adventure-head'> <img class='chapter-image' src='{{adventure.img}}' title='{{adventure.name}}' /> <h1 class='chapter-heading'>{{adventure.name}}</h1> </header> <section class='adventure-overview'> <h2>{{localize 'ADVENTURE.ImportHeaderOverview'}}</h2> {{{adventure.description}}} <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='dontShowAgain' {{checked this.dontShowAgain}} /> Don't show this dialog again </label> </div> </section> <section class='import-controls'> <h2>{{localize 'ADVENTURE.ImportHeaderContents'}}</h2> <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='importFields' value='all' title='Import All' checked /> Import All </label> </div> {{#each contents}} <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='importFields' value='{{this.field}}' title='Import {{this.label}}' checked disabled /> <i class='{{this.icon}}'></i> {{this.count}} {{this.label}} </label> </div> {{/each}} </section> {{#if hasImportOptions}} <section class='import-options'> <h2>Import Options</h2> {{#each importOptions as |option name|}} <div class='form-group'> <label class='checkbox'> <input type='checkbox' name='{{name}}' title='{{option.label}}' {{checked option.default}} /> {{option.label}} </label> </div> {{/each}} </section> {{/if}} <footer class='adventure-footer'> <button type='submit'> <i class='fas fa-download'></i> {{localize 'ADVENTURE.ImportSubmit'}} </button> </footer> </form>"], ["@sigil.pf2e-ap196-199-season-of-ghosts.journal", `<div class="journal-sheet-container"> <div class="decoration corner-ul"></div> <div class="decoration corner-ur"></div> <div class="decoration corner-bl"></div> <div class="decoration corner-br"></div> <div class="decoration leaves"></div> <div class="decoration branches"></div> {{! Sidebar Container }} <aside class="sidebar directory flexcol journal-sidebar {{sidebarClass}}"> {{! Sidebar Search }} <header class="directory-header"> <div class="header-search flexrow"> <a class="action-button view-mode" data-action="toggleView" data-tooltip="{{localize viewMode.label}}"><i class="{{viewMode.icon}}"></i></a> <input type="search" name="search" value="" autocomplete="off" placeholder="{{localize "SIDEBAR.Search" types=(localize "DOCUMENT.JournalEntryPages")}}"> <a class="action-button collapse-toggle" data-action="toggleCollapse" data-tooltip="{{localize collapseMode.label}}"><i class="{{collapseMode.icon}}"></i></a> </div> </header> {{! Sidebar Pages Navigation }} <nav class="pages-list" aria-label="{{localize 'JOURNAL.NavLabel'}}" data-tooltip-direction="RIGHT"> <ol class="directory-list scrollable"> {{#each toc as |page|}} <li class="directory-item {{page.cssClass}}" data-page-id="{{page._id}}"> <div class="page-heading"> <span class="page-number{{#if page.pageNumberClass}} {{page.pageNumberClass}}{{/if}}" data-tooltip="{{page.name}}">{{page.number}}.</span> <span class="page-title">{{page.name}}</span> {{#if page.icon}} <span class="page-ownership {{page.ownershipCls}}"><i class="{{page.icon}}"></i></span> {{/if}} </div> </li> {{/each}} </ol> </nav> {{! Sidebar Control Buttons }} <div class="action-buttons flexrow"> <button class="previous" type="button" data-action="previous" data-tooltip="{{localize 'JOURNAL.PrevPage'}}"> <i class="fa-solid fa-chevron-left"></i> </button> {{#if editable}} <button class="create" type="button" data-action="createPage"> <i class="fa-solid fa-file-circle-plus"></i> {{localize "JOURNAL.AddPage"}} </button> {{/if}} <button class="next" type="button" data-action="next" data-tooltip="{{localize 'JOURNAL.NextPage'}}"> <i class="fa-solid fa-chevron-right"></i> </button> </div> </aside> {{! Main Content }} <section class="journal-entry-content flexcol"> <form class="journal-header"> <input class="title" name="name" type="text" value="{{document.name}}" placeholder="{{localize "JOURNAL.EntryTitle"}}"/> </form> <div class="journal-entry-pages {{cssClass}} {{viewMode.cls}}"> <div class="scrollable"> {{#each pages as |page|}} <article class="journal-entry-page {{page.type}}{{#if (eq page.type "text")}} {{cssClass}}{{/if}}" data-page-id="{{page._id}}"> {{#if page.editable}} <div class="edit-container"> <a class="editor-edit"><i class="fas fa-edit"></i></a> </div> {{/if}} </article> {{/each}} </div> </div> </section> </div> `], ["@sigil.pf2e-ap196-199-season-of-ghosts.page-edit", '<form class="{{cssClass}} flexcol" autocomplete="off"> {{> journalEntryPageHeader}} {{editor editor.content target="text.content" class="journal-page-content" button=false editable=true engine=editor.engine collaborate=editor.collaborate}} </form> '], ["@sigil.pf2e-ap196-199-season-of-ghosts.page-view", '{{#if data.title.show}} <header class="journal-page-header"> <h{{data.title.level}}{{#if data.subtitle}} class="split"{{/if}}> <span>{{data.name}}</span> {{#if data.subtitle}} <span class="subtitle">{{data.subtitle}}</span> {{/if}} </h{{data.title.level}}> </header> {{/if}} <section class="journal-page-content"> {{{editor.content}}} </section> ']];
  _templateCache = _templateCache || {};
  for (const [e, a] of n) {
    const t = Handlebars.compile(a);
    Handlebars.registerPartial(e, t), _templateCache[e] = t;
  }
});
function Z() {
  Hooks.once("init", async () => {
    const n = game.modules.filter(
      (e) => e.active && e.flags[c]?.adventureImporter
    );
    for (const e of n)
      game.settings.register(e.id, "firstStartup", {
        name: "One-Time Startup Prompt",
        scope: "world",
        config: !1,
        type: Boolean,
        default: !0
      });
    Hooks.on("updateSetting", (e) => {
      if (e.key === "core.moduleConfiguration")
        for (const a of n)
          game.settings.set(a.id, "firstStartup", !e.value[a.id]);
    });
  }), Hooks.on("ready", async () => {
    const n = game.modules.filter(
      (e) => e.active && e.flags[c]?.adventureImporter
    );
    for (const e of n)
      if (game.settings.get(e.id, "firstStartup") && game.user.isGM)
        for (const t of e.packs.filter((s) => s.type === "Adventure")) {
          const i = await game.packs.get(`${e.id}.${t.name}`).getDocuments();
          for (const o of i)
            o.sheet.render(!0);
        }
  });
}
d(Z, "adventures");
function K() {
  Hooks.once("init", () => {
    game.settings.register(c, "distraction-free", {
      name: "Distraction Free Mode",
      hint: "Replaces Journal borders with a less visually distracting style.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (n) => {
        n ? document.querySelectorAll(`.journal-sheet.${h}-wrapper`).forEach((e) => e.classList.add("distraction-free")) : document.querySelectorAll(`.journal-sheet.${h}-wrapper`).forEach((e) => e.classList.remove("distraction-free"));
      }
    });
  });
}
d(K, "distractionFreeMode");
function Q() {
  window.sigilMacros = window.sigilMacros ?? {}, window.sigilMacros[`${R.toLowerCase()}Macros`] = {
    async toggleTokens(n, e) {
      await this.toggleDocumentHiddenState(n, e, "Token");
    },
    async toggleTiles(n, e) {
      await this.toggleDocumentHiddenState(n, e, "Tile");
    },
    async toggleDoors(n, e) {
      await this.toggleDocumentHiddenState(n, e, "Wall");
    },
    async toggleSounds(n, e) {
      await this.toggleDocumentHiddenState(n, e, "AmbientSound");
    },
    async toggleLights(n, e) {
      await this.toggleDocumentHiddenState(n, e, "AmbientLight");
    },
    async playSound(n) {
      const e = await fromUuid(n);
      e.documentName === "PlaylistSound" && (e.parent.playing ? await e.parent.stopAll() : await e.parent.playSound(e)), e.documentName === "Playlist" && (e.playing ? await e.stopAll() : await e.playAll());
    },
    async changeAmbience(n, e, a) {
      canvas.scene.id === n && (canvas.scene.playlistSound.id === e ? await canvas.scene.update({ playlistSound: a }) : await canvas.scene.update({ playlistSound: e }));
    },
    async changeWeather(n, e, a) {
      canvas.scene.id === n && (canvas.scene.weather === e ? await canvas.scene.update({ weather: a }) : await canvas.scene.update({ weather: e }));
    },
    async pickTileImage(n, e, a, t, s) {
      const i = `async function changeTileImage(img, sceneId, tileId) {
        await game.scenes.get(sceneId)?.tiles.get(tileId)?.update({ "texture.src": img });
      }`;
      async function o() {
        await new Promise(async (l) => {
          setTimeout(l, 200), await new Dialog(
            {
              title: a,
              content: r,
              buttons: { Close: { label: "Close" } }
            },
            { width: 300 }
          ).render(!0);
        });
      }
      d(o, "callTileMenu");
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
      r += `<p style="text-align:center;">${t}</p>`, s.forEach((l, u) => {
        r += `<button name="button${u}" class="mhbutton" type="button" onclick="changeTileImage('${l.img}','${n}','${e}')">${l.name}</button>`;
      }), r += "</div><br></div>", o();
    },
    async moveTile(n, e, a) {
      if (canvas.scene.id === n) {
        const t = canvas.scene.tiles.get(e);
        let s = !0;
        Object.keys(a[0]).forEach((i) => {
          Object.keys(diffObject(t, a[0])).length > 0 && (s = !1);
        }), t.update(a[s ? 1 : 0]);
      }
    },
    async changeToken(n, e, a) {
      if (canvas.scene.id === n) {
        const t = canvas.scene.tokens.get(e) || canvas.scene.tokens.getName(e);
        let s = !0;
        Object.keys(a[0]).forEach((i) => {
          Object.keys(diffObject(t, a[0])).length > 0 && (s = !1);
        }), t.update(a[s ? 1 : 0]);
      }
    },
    async toggleDocumentHiddenState(n, e, a) {
      if (canvas.scene.id === n) {
        typeof e == "string" && (e = [e]);
        const { SECRET: t } = CONST.WALL_DOOR_TYPES;
        let s = [], i = [];
        switch (a) {
          case "Tile":
            s = canvas.scene.tiles.filter((o) => e.includes(o.id)), i = s.map((o) => ({ _id: o.id, hidden: !o.hidden }));
            break;
          case "Token":
            s = canvas.scene.tokens.filter((o) => e.includes(o.id)), i = s.map((o) => ({ _id: o.id, hidden: !o.hidden }));
            break;
          case "Wall":
            e[0] === "all" ? s = canvas.scene.walls.filter((o) => o.door === t) : s = canvas.scene.walls.filter((o) => e.includes(o.id)), i = s.map((o) => ({ _id: o.id, ds: o.ds === 1 ? 0 : 1 }));
            break;
          case "AmbientLight":
            s = canvas.scene.lights.filter((o) => e.includes(o.id)), i = s.map((o) => ({ _id: o.id, hidden: !o.hidden }));
            break;
          case "AmbientSound":
            s = canvas.scene.sounds.filter((o) => e.includes(o.id)), i = s.map((o) => ({ _id: o.id, hidden: !o.hidden }));
            break;
          default:
            ui.notifications.warn("Attempting to change unknown Document Type");
        }
        i.length > 0 && await canvas.scene.updateEmbeddedDocuments(a, i);
      }
    }
  }, window.sigilMacros[`${Y.productSlug.toLowerCase()}Macros`] = window.sigilMacros[`${R.toLowerCase()}Macros`];
}
d(Q, "globalMacroHelpers");
function X() {
  Hooks.once("init", () => {
    game.settings.register(c, "safe-journal", {
      name: "Journal Freeze Workaround",
      hint: "Workaround for a Chrome issue that can cause all journals to freeze under certain circumstances.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (n) => {
        n ? document.querySelectorAll(`.journal-sheet.${h}-wrapper`).forEach((e) => e.classList.add("safe-journal")) : document.querySelectorAll(`.journal-sheet.${h}-wrapper`).forEach((e) => e.classList.remove("safe-journal"));
      }
    });
  });
}
d(X, "safeJournalMode");
const ee = {
  adventures: Z,
  "distraction-free-mode": K,
  "global-macro-helpers": Q,
  "safe-journal-mode": X
};
for (const [n, e] of Object.entries(ee))
  _?.[n] && e();
var v, P, w, E, j, H, A, J, I, W, T, F, z, G;
const $ = class $ extends AdventureImporter {
  /**
   *  Add adventure stuff
   *
   * @param {Adventure} adventure
   * @param {object} options
   */
  constructor(a, t) {
    super(a, t);
    /* -------------------------------------------- */
    /**
     * Merge Actor data with authoritative source data from system compendium packs
     *
     * @param {Actor[]} actors        Actor documents intended to be imported
     * @param {object} importOptions  Form submission import options
     * @returns {Promise<void>}
     */
    g(this, v);
    g(this, w);
    g(this, j);
    g(this, A);
    /* -------------------------------------------- */
    /**
     * Handle toggling the import all checkbox.
     *
     * @param {Event} event  The change event.
     */
    g(this, I);
    /**
     * Handle toggling the don't show again checkbox.
     *
     * @param {Event} event  The change event.
     */
    g(this, T);
    /* -------------------------------------------- */
    /**
     * Remove adventure content that the user indicated they did not want to import.
     *
     * @param {object} formData  The submitted adventure form data.
     * @param {object} toCreate  An object of document data to create.
     * @param {object} toUpdate  An object of document data to update.
     */
    g(this, z);
    this.options.classes.push(h);
    const s = game.modules.get(this.adventure.compendium.metadata.packageName), {
      initialSceneId: i,
      initialJournalEntryId: o,
      initialJournalPageId: r,
      initialLoginScreenBackground: l,
      additionalItems: u,
      removeItems: p,
      chatMessage: m
    } = s.flags?.[c]?.adventureImporter?.[this.adventure.uuid] || {};
    this.additionalItems = u ?? {}, this.removeItems = p ?? {}, this.importOptions = {}, i && (this.importOptions.activateScene = {
      label: "Activate Initial Scene",
      default: !0,
      handler: () => game.scenes.get(i)?.activate()
    }), o && r && (this.importOptions.displayJournal = {
      label: "Display Introduction Journal Entry",
      default: !0,
      handler: () => {
        game.journal.get(o).sheet.render(!0, { pageId: r });
      }
    }), l && (this.importOptions.customizeJoin = {
      label: "Style Login Screen",
      default: !1,
      handler: async () => {
        const y = {
          id: game.world.id,
          action: "editWorld",
          description: s.description,
          background: `modules/${s.id}/${l}`
        }, U = await foundry.utils.fetchJsonWithTimeout(
          foundry.utils.getRoute("setup"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(y)
          }
        );
        game.world.updateSource(U);
      }
    }), m?.label && m?.content && (this.importOptions.chatMessage = {
      label: m.label,
      default: !0,
      handler: () => {
        ChatMessage.create({
          content: m.content,
          whisper: ChatMessage.getWhisperRecipients("GM")
        });
      }
    });
  }
  get template() {
    return `@sigil.${c}.importer`;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async getData(a = {}) {
    const t = await super.getData(), s = game.modules.get(this.adventure.compendium.metadata.packageName);
    return t.importOptions = this.importOptions || {}, t.hasImportOptions = Object.keys(t.importOptions).length > 0, t.dontShowAgain = !game.settings.get(s.id, "firstStartup"), t;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  activateListeners(a) {
    super.activateListeners(a), a.find('input[value="all"]')[0].addEventListener("change", (t) => {
      f(this, I, W).call(this, t);
    }), a.find('input[name="dontShowAgain"]')[0].addEventListener("change", (t) => {
      f(this, T, F).call(this, t);
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
    return Object.entries(Adventure.contentFields).reduce((a, [t, s]) => {
      const i = this.adventure[t].size;
      return i && a.push({
        field: t,
        icon: CONFIG[s.documentName].sidebarIcon,
        label: game.i18n.localize(i > 1 ? s.metadata.labelPlural : s.metadata.label),
        count: i
      }), a;
    }, []);
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _prepareImportData(a) {
    this.submitOptions = a;
    const { toCreate: t, toUpdate: s, documentCount: i } = await super._prepareImportData(a);
    return f(this, z, G).call(this, a, t, s), "Actor" in t && await f(this, v, P).call(this, t.Actor), "Actor" in s && await f(this, v, P).call(this, s.Actor), "Scene" in t && await f(this, w, E).call(this, t.Scene), "Scene" in s && await f(this, w, E).call(this, s.Scene), { toCreate: t, toUpdate: s, documentCount: i };
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _importContent(a, t, s) {
    const i = await super._importContent(a, t, s);
    for (const [r, l] of Object.entries(this.importOptions ?? {}))
      !l.handler || !this.submitOptions[r] || await l.handler();
    const o = game.modules.get(this.adventure.compendium.metadata.packageName);
    return game.settings.set(o.id, "firstStartup", !1), i;
  }
};
v = new WeakSet(), P = /* @__PURE__ */ d(async function(a) {
  for (let t of a) {
    const [, s, i, o, r] = t.flags?.core?.sourceId?.split?.(".") ?? [], l = game.packs.get(`${s}.${i}`);
    if (!l?.index?.has?.(r || o)) {
      l && console.warn(
        `[${s}] Compendium source data for "${t.name}" [${t._id}] not found in pack ${l?.collection}`
      );
      continue;
    }
    const u = await l.getDocument(r), p = u.toObject(), m = (p.items ?? []).filter(f(this, j, H).bind(this, t._id));
    await f(this, A, J).call(this, t._id, m), u.type === "npc" && (t = Object.assign(
      t,
      foundry.utils.mergeObject(p, {
        folder: t.folder,
        img: t.img,
        items: m,
        name: t.name,
        "prototypeToken.name": t.prototypeToken.name,
        "prototypeToken.texture": t.prototypeToken.texture,
        "prototypeToken.randomImg": t.prototypeToken.randomImg,
        "prototypeToken.flags.pf2e": t.prototypeToken.flags?.pf2e,
        "system.attributes.adjustment": t.system.attributes.adjustment,
        "system.details.alignment": t.system.details.alignment,
        "system.details.blurb": t.system.details.blurb,
        "system.attributes.hp.value": t.system.attributes.hp.value,
        "system.traits.languages.value": t.system.traits.languages.value,
        "system.traits.value": t.system.traits.value,
        "system.traits.size": t.system.traits.size,
        _id: t._id
      })
    )), u.type === "hazard" && (t = Object.assign(
      t,
      foundry.utils.mergeObject(p, {
        folder: t.folder,
        img: t.img,
        items: m,
        name: t.name,
        "prototypeToken.name": t.prototypeToken.name,
        "prototypeToken.texture": t.prototypeToken.texture,
        "prototypeToken.width": t.prototypeToken.width,
        "prototypeToken.height": t.prototypeToken.height,
        "system.traits.value": t.system.traits.value,
        _id: t._id
      })
    ));
  }
}, "#mergeCompendiumActors"), w = new WeakSet(), E = /* @__PURE__ */ d(async function(a) {
}, "#mergeCompendiumScenes"), j = new WeakSet(), H = /* @__PURE__ */ d(function(a, t) {
  return !this.removeItems[a]?.some((s) => s.id === t._id) || !this.removeItems[a]?.some((s) => s.name === t.name);
}, "#filterItems"), A = new WeakSet(), J = /* @__PURE__ */ d(async function(a, t) {
  const s = this.additionalItems[a] ?? [], i = t.map((o) => o._id);
  for (const o of s) {
    const r = (await fromUuid(o)).toObject();
    for (; i.includes(r._id); )
      r._id = randomID();
    i.push(r._id), t.push(r);
  }
}, "#addItems"), I = new WeakSet(), W = /* @__PURE__ */ d(function(a) {
  const t = a.currentTarget, s = t.closest(".import-controls"), i = t.checked;
  s.querySelectorAll("input").forEach((o) => {
    o.value !== "folders" && (o.disabled = i), i && (o.checked = !0);
  }), t.disabled = !1;
}, "#onToggleImportAll"), T = new WeakSet(), F = /* @__PURE__ */ d(function(a) {
  const s = a.currentTarget.checked, i = game.modules.get(this.adventure.compendium.metadata.packageName);
  game.settings.set(i.id, "firstStartup", !s);
}, "#onToggleDontShowAgain"), z = new WeakSet(), G = /* @__PURE__ */ d(function(a, t, s) {
  const i = a.importFields.filter((r) => r);
  if (i.push("folders"), !i || !Array.isArray(i) || i.some((r) => r === "all"))
    return;
  const o = new Set(i.map((r) => Adventure.contentFields[r].documentName));
  [t, s].forEach((r) => {
    for (const l of Object.keys(r))
      o.has(l) || delete r[l];
    r.Folder && (r.Folder = r.Folder.filter((l) => o.has(l.type)));
  });
}, "#applyImportControls"), d($, "SigilPF2EAdventureImporter");
let x = $;
Hooks.once("init", () => {
  DocumentSheetConfig.registerSheet(Adventure, c, x, {
    label: `${k} Importer`,
    makeDefault: !1
  });
});
const M = class M extends JournalSheet {
  static get defaultOptions() {
    const e = {
      classes: ["sheet", "journal-sheet", "journal-entry", `${h}-wrapper`],
      width: window.innerWidth < 800 ? 720 : 960,
      height: window.innerHeight < 1e3 ? 700 : 800
    };
    return _?.["distraction-free-mode"] && game.settings.get(c, "distraction-free") && e.classes.push("distraction-free"), _?.["safe-journal-mode"] && game.settings.get(c, "safe-journal") && e.classes.push("safe-journal"), foundry.utils.mergeObject(super.defaultOptions, e);
  }
  get template() {
    return `@sigil.${c}.journal`;
  }
  getData(e) {
    const a = super.getData(e);
    return a.cssClass = h, this?.document?.flags?.sigil?.additionalCssClass && (a.cssClass += ` ${this.document.flags.sigil.additionalCssClass}`), a;
  }
  _getPageData() {
    let e = 1;
    return super._getPageData().map((a) => (a?.flags[c]?.pageNumber ? (a.number = a.flags[c].pageNumber, typeof a?.flags[c]?.pageNumber == "number" && (e = a.number + 1)) : a.number = e++, a?.flags[c]?.pageNumberClass && (a.pageNumberClass = a.flags[c].pageNumberClass), a.editable = a.editable && a?.flags[c]?.editable, a));
  }
  async _renderHeadings(e, a) {
    return Object.entries(a || {}).forEach(([t, s]) => {
      s.element.classList.contains("no-toc") && delete a[t];
      const i = s.element?.querySelectorAll("span");
      i.length > 0 && (s.text = i[0].textContent);
    }), await super._renderHeadings(e, a);
  }
  _onResizeMouseDown(e) {
    this._chromeShapeOutsideFreezeWorkaround(!0);
  }
  _onResize(e) {
    this._onResizeMouseUp(e);
  }
  _onResizeMouseUp(e) {
    this._chromeShapeOutsideFreezeWorkaround(!1);
  }
  _chromeShapeOutsideFreezeWorkaround(e) {
    this.element[0].classList[e ? "add" : "remove"]("resizing");
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
    const e = await super._renderOuter();
    return e.find("div.window-resizable-handle")[0].addEventListener("pointerdown", this._onResizeMouseDown.bind(this)), e;
  }
};
d(M, "SigilJournalSheet");
let S = M;
const N = class N extends JournalTextPageSheet {
  get template() {
    return `@sigil.${c}.page-${this.isEditable ? "edit" : "view"}`;
  }
  async showWhisperDialog(e, a) {
    if (!(e instanceof JournalEntry || e instanceof JournalEntryPage))
      return;
    if (!e.isOwner)
      return ui.notifications.error("JOURNAL.ShowBadPermissions", {
        localize: !0
      });
    if (game.users.size < 2)
      return ui.notifications.warn("JOURNAL.ShowNoPlayers", {
        localize: !0
      });
    const t = game.users.filter((i) => i.id !== game.userId), s = await renderTemplate(`@sigil.${c}.dialog-show`, { users: t });
    return Dialog.prompt({
      // title: game.i18n.format("JOURNAL.ShowEntry", {name: doc.name}),
      // label: game.i18n.localize("JOURNAL.ActionShow"),
      title: "Whisper Selected Content to...",
      label: "Whisper to Selected Players",
      content: s,
      render: (i) => {
        const o = i.querySelector("form");
        o.elements.allPlayers.addEventListener("change", (r) => {
          const l = r.currentTarget.checked;
          o.querySelectorAll('[name="players"]').forEach((u) => {
            u.checked = l, u.disabled = l;
          });
        });
      },
      callback: async (i) => {
        const o = i.querySelector("form"), r = new FormDataExtended(o).object, l = r.allPlayers ? game.users.filter((p) => !p.isSelf) : r.players.reduce((p, m) => {
          const y = game.users.get(m);
          return y && !y.isSelf && p.push(y), p;
        }, []);
        if (!l.length)
          return;
        const u = l.map((p) => p.id);
        return ChatMessage.create({
          whisper: u,
          content: a
        });
      },
      rejectClose: !1,
      options: { jQuery: !1 }
    });
  }
  async _onClickReadAloud(e) {
    if (e.preventDefault(), ["IMG", "A"].includes(e.target.tagName))
      return;
    const t = `<div data-sigil-chatable>${e.currentTarget.innerHTML}</div>`;
    this.showWhisperDialog(this.object.parent, t);
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".read-aloud").click(this._onClickReadAloud.bind(this));
  }
};
d(N, "SigilJournalSheetPage");
let O = N;
const L = class L extends JournalImagePageSheet {
};
d(L, "SigilJournalSheetImagePage");
let C = L;
Hooks.once("init", () => {
  Object.defineProperty(S, "name", {
    value: `${D}`
  }), Object.defineProperty(O, "name", {
    value: `${D}Page`
  }), Object.defineProperty(C, "name", {
    value: `${D}ImagePage`
  }), DocumentSheetConfig.registerSheet(JournalEntry, c, S, {
    type: "base",
    makeDefault: !1,
    canBeDefault: !1,
    label: `${k}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, c, O, {
    type: "text",
    makeDefault: !1,
    canBeDefault: !1,
    label: `${k}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, c, C, {
    type: "image",
    makeDefault: !1,
    canBeDefault: !1,
    label: `${k}`
  });
});
console.log(`[${c}@${V}...] successfully loaded!`);
