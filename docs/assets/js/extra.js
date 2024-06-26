function parseURL(e, t) {
    let r = "",
        n = "";
    return 0 === t ? (r = e.href, n = e.title) : 1 === t && (r = e.src, n = e.alt), (r = (r = r.match(/index$/) ? r.replace(/index$/, "") : r).includes("%5C") ? r.replace(/%5C/g, "/") : r).match(/\.md\/$/) && (r = r.replace(/\.md\/$/, "/")), r = decodeURI(r), 0 === t ? (e.href = r, 0 === (e.title = n).length && (n = e.innerText, e.title = n)) : 1 === t && (e.src = r, e.alt = n), {
        title: n,
        ref: r,
        url: e
    }
}

function checkIfInternalLinksExists(t, r, n, o) {
    let l = n.href.replace(n.host, "").replace(/http(s)?:(\/){1,3}/gi, "").replace(/^\//, "");
    l = 0 === l.trim().length ? "./" : decodeURI(l).toLowerCase();
    var e = document.querySelector('meta[name="site_url"]').content,
        c = (e.split("/").filter(e => 0 < e.length).pop() + "/").toLowerCase();
    return 0 === (l = l.replace(c.replace(/^\//i, ""), "").toLowerCase().replace(/\/$/, "")).length && (l = "./"), o.includes(l.replace(/\/$/, "")) || "./" === l || fetch(e + "/search/all_files.json").then(e => e.json()).then(e => {
        if (e.forEach(e => {
                decodeURI(e.url).toLowerCase().replace(/\/$/, "") === l.replace(".md", "") && o.push(l.replace(/\/$/, ""))
            }), !(o = [...new Set(o)]).includes(l.replace(/\/$/, "")) && "./" !== l) {
            e = document.createElement("div");
            e.innerHTML = r, e.classList.add("not_found"), e.setAttribute("href", t), console.warn("Link not found:", {
                ref: t,
                title: r,
                url: n
            });
            try {
                n.parentNode.replaceChild(e, n)
            } catch (e) {
                console.error(e)
            }
        }
    }).catch(e => {
        console.error(e)
    }), o
}
window.MathJax = {
    tex: {
        inlineMath: [
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["\\[", "\\]"]
        ],
        processEscapes: !0,
        processEnvironments: !0
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    }
}, document$.subscribe(() => {
    MathJax.typesetPromise()
});
let history = [];
const ht = document.querySelectorAll("article:not(.md-post) a:not(img, .headerlink)");
for (const u of ht)
    if (0 < !u.getElementsByTagName("img").length && 0 < !u.getElementsByTagName("svg").length && !u.href.includes("#") && u.hostname === window.location.hostname) {
        const v = parseURL(u, 0);
        history = checkIfInternalLinksExists(v.ref, v.title, u, history)
    } for (const w of document.querySelectorAll("img"))
    if (w.hostname === window.location.hostname) {
        const x = parseURL(w, 1);
        history = checkIfInternalLinksExists(x.ref, x.title, w, history)
    } const mkDocsChirpyTranslator = {
        default: "light",
        slate: "dark"
    },
    mkDocs = document.querySelector("[data-md-color-scheme]"),
    chirpy = document.querySelector("[data-chirpy-theme]");
if (chirpy) {
    "default" === mkDocs.getAttribute("data-md-color-scheme") && chirpy.setAttribute("data-chirpy-theme", "light");
    const y = new MutationObserver(e => {
        e.forEach(e => {
            "attributes" === e.type && chirpy.setAttribute("data-chirpy-theme", mkDocsChirpyTranslator[mkDocs.dataset.mdColorScheme])
        })
    });
    y.observe(mkDocs, {
        attributes: !0,
        attributeFilter: ["data-md-color-scheme"]
    })
}
const header_links = document.querySelectorAll('a[href*="#"]');
if (header_links)
    for (var i = 0; i < header_links.length; i++) {
        const B = header_links[i].getAttribute("href").replace("^.*#", "");
        let e = B.replace(/\s/g, "-");
        e = B.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), header_links[i].setAttribute("href", header_links[i].getAttribute("href").replace(B, e))
    }
for (const i of document.querySelectorAll("img")) {
    const D = /^(?<alt>(?!^\d*x?\d*$).*?)?(\|?\s*?(?<width>\d+)(x(?<height>\d+))?)?$/gi;
    if (i.alt.match(D)) {
        const E = D.exec(i.alt ?? "");

		width = E.groups.width;
		if(width)
			i.width = width;
		
		height = E.groups.height;
		if(height)
			i.height = height;
		
		alt = E.groups.alt;
		if(alt)
			i.alt = alt;
    }
}
const article = document.querySelectorAll("article.md-content__inner.md-typeset > *:not(.highlight)"),
    embed_id_regex = /\^\w+\s*$/gi;
for (const F of article) {
    const G = F.innerText.match(embed_id_regex);
    G && (F.innerHTML = F.innerText.replace(G, ""))
}
document.innerText = article;
const cite = document.querySelectorAll(".citation");
if (cite)
    for (const H of cite) {
        const I = H.innerHTML.match(/!?(\[{2}|\[).*(\]{2}|\))/gi);
        if (I) {
            for (const J of I) H.innerHTML = H.innerHTML.replace(J, "");
            H.innerText.trim().length < 2 && (H.style.display = "none")
        }
    }

const paletteSwitcher1 = document.getElementById("__palette_1"),
    paletteSwitcher2 = document.getElementById("__palette_2"),
    isMermaidPage = document.querySelector(".mermaid"),
    blogURL = (isMermaidPage && (paletteSwitcher1.addEventListener("change", () => {
        location.reload()
    }), paletteSwitcher2.addEventListener("change", () => {
        location.reload()
    })), document.querySelector('meta[name="site_url"]') ? document.querySelector('meta[name="site_url"]').content : location.origin),
    position = ["top", "right", "bottom", "left"];