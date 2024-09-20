var ob = Object.create;
var Cc = Object.defineProperty,
  ib = Object.defineProperties,
  sb = Object.getOwnPropertyDescriptor,
  ab = Object.getOwnPropertyDescriptors,
  cb = Object.getOwnPropertyNames,
  Gf = Object.getOwnPropertySymbols,
  lb = Object.getPrototypeOf,
  Wf = Object.prototype.hasOwnProperty,
  ub = Object.prototype.propertyIsEnumerable;
var qf = (t, e, r) =>
    e in t
      ? Cc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  b = (t, e) => {
    for (var r in (e ||= {})) Wf.call(e, r) && qf(t, r, e[r]);
    if (Gf) for (var r of Gf(e)) ub.call(e, r) && qf(t, r, e[r]);
    return t;
  },
  $ = (t, e) => ib(t, ab(e));
var db = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var fb = (t, e, r, n) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let o of cb(e))
      !Wf.call(t, o) &&
        o !== r &&
        Cc(t, o, {
          get: () => e[o],
          enumerable: !(n = sb(e, o)) || n.enumerable,
        });
  return t;
};
var Zf = (t, e, r) => (
  (r = t != null ? ob(lb(t)) : {}),
  fb(
    e || !t || !t.__esModule
      ? Cc(r, "default", { value: t, enumerable: !0 })
      : r,
    t
  )
);
var Ai = (t, e, r) =>
  new Promise((n, o) => {
    var i = (u) => {
        try {
          c(r.next(u));
        } catch (f) {
          o(f);
        }
      },
      s = (u) => {
        try {
          c(r.throw(u));
        } catch (f) {
          o(f);
        }
      },
      c = (u) => (u.done ? n(u.value) : Promise.resolve(u.value).then(i, s));
    c((r = r.apply(t, e)).next());
  });
var Zd = db((Et, Wd) => {
  "use strict";
  (function (t, e) {
    typeof Et == "object" && typeof Wd < "u"
      ? (Wd.exports = e())
      : typeof define == "function" && define.amd
      ? define(e)
      : ((t = typeof globalThis < "u" ? globalThis : t || self),
        (t.Sweetalert2 = e()));
  })(Et, function () {
    "use strict";
    function t(a, l, d) {
      if (typeof a == "function" ? a === l : a.has(l))
        return arguments.length < 3 ? l : d;
      throw new TypeError("Private element is not present on this object");
    }
    function e(a, l) {
      if (l.has(a))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    }
    function r(a, l) {
      return a.get(t(a, l));
    }
    function n(a, l, d) {
      e(a, l), l.set(a, d);
    }
    function o(a, l, d) {
      return a.set(t(a, l), d), d;
    }
    let i = 100,
      s = {},
      c = () => {
        s.previousActiveElement instanceof HTMLElement
          ? (s.previousActiveElement.focus(), (s.previousActiveElement = null))
          : document.body && document.body.focus();
      },
      u = (a) =>
        new Promise((l) => {
          if (!a) return l();
          let d = window.scrollX,
            p = window.scrollY;
          (s.restoreFocusTimeout = setTimeout(() => {
            c(), l();
          }, i)),
            window.scrollTo(d, p);
        }),
      f = "swal2-",
      h = [
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error",
      ].reduce((a, l) => ((a[l] = f + l), a), {}),
      v = ["success", "warning", "info", "question", "error"].reduce(
        (a, l) => ((a[l] = f + l), a),
        {}
      ),
      D = "SweetAlert2:",
      A = (a) => a.charAt(0).toUpperCase() + a.slice(1),
      C = (a) => {
        console.warn(`${D} ${typeof a == "object" ? a.join(" ") : a}`);
      },
      I = (a) => {
        console.error(`${D} ${a}`);
      },
      J = [],
      ie = (a) => {
        J.includes(a) || (J.push(a), C(a));
      },
      q = function (a) {
        let l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        ie(
          `"${a}" is deprecated and will be removed in the next major release.${
            l ? ` Use "${l}" instead.` : ""
          }`
        );
      },
      be = (a) => (typeof a == "function" ? a() : a),
      te = (a) => a && typeof a.toPromise == "function",
      me = (a) => (te(a) ? a.toPromise() : Promise.resolve(a)),
      ct = (a) => a && Promise.resolve(a) === a,
      Ie = () => document.body.querySelector(`.${h.container}`),
      to = (a) => {
        let l = Ie();
        return l ? l.querySelector(a) : null;
      },
      je = (a) => to(`.${a}`),
      Q = () => je(h.popup),
      no = () => je(h.icon),
      xy = () => je(h["icon-content"]),
      Yd = () => je(h.title),
      sc = () => je(h["html-container"]),
      Qd = () => je(h.image),
      ac = () => je(h["progress-steps"]),
      Di = () => je(h["validation-message"]),
      lt = () => to(`.${h.actions} .${h.confirm}`),
      Qn = () => to(`.${h.actions} .${h.cancel}`),
      Dn = () => to(`.${h.actions} .${h.deny}`),
      Ay = () => je(h["input-label"]),
      Kn = () => to(`.${h.loader}`),
      ro = () => je(h.actions),
      Kd = () => je(h.footer),
      bi = () => je(h["timer-progress-bar"]),
      cc = () => je(h.close),
      Ny = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
      lc = () => {
        let a = Q();
        if (!a) return [];
        let l = a.querySelectorAll(
            '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
          ),
          d = Array.from(l).sort((E, L) => {
            let Z = parseInt(E.getAttribute("tabindex") || "0"),
              se = parseInt(L.getAttribute("tabindex") || "0");
            return Z > se ? 1 : Z < se ? -1 : 0;
          }),
          p = a.querySelectorAll(Ny),
          m = Array.from(p).filter((E) => E.getAttribute("tabindex") !== "-1");
        return [...new Set(d.concat(m))].filter((E) => Re(E));
      },
      uc = () =>
        It(document.body, h.shown) &&
        !It(document.body, h["toast-shown"]) &&
        !It(document.body, h["no-backdrop"]),
      Ci = () => {
        let a = Q();
        return a ? It(a, h.toast) : !1;
      },
      Ry = () => {
        let a = Q();
        return a ? a.hasAttribute("data-loading") : !1;
      },
      Be = (a, l) => {
        if (((a.textContent = ""), l)) {
          let p = new DOMParser().parseFromString(l, "text/html"),
            m = p.querySelector("head");
          m &&
            Array.from(m.childNodes).forEach((L) => {
              a.appendChild(L);
            });
          let E = p.querySelector("body");
          E &&
            Array.from(E.childNodes).forEach((L) => {
              L instanceof HTMLVideoElement || L instanceof HTMLAudioElement
                ? a.appendChild(L.cloneNode(!0))
                : a.appendChild(L);
            });
        }
      },
      It = (a, l) => {
        if (!l) return !1;
        let d = l.split(/\s+/);
        for (let p = 0; p < d.length; p++)
          if (!a.classList.contains(d[p])) return !1;
        return !0;
      },
      Oy = (a, l) => {
        Array.from(a.classList).forEach((d) => {
          !Object.values(h).includes(d) &&
            !Object.values(v).includes(d) &&
            !Object.values(l.showClass || {}).includes(d) &&
            a.classList.remove(d);
        });
      },
      $e = (a, l, d) => {
        if ((Oy(a, l), !l.customClass)) return;
        let p = l.customClass[d];
        if (p) {
          if (typeof p != "string" && !p.forEach) {
            C(
              `Invalid type of customClass.${d}! Expected string or iterable object, got "${typeof p}"`
            );
            return;
          }
          W(a, p);
        }
      },
      Ei = (a, l) => {
        if (!l) return null;
        switch (l) {
          case "select":
          case "textarea":
          case "file":
            return a.querySelector(`.${h.popup} > .${h[l]}`);
          case "checkbox":
            return a.querySelector(`.${h.popup} > .${h.checkbox} input`);
          case "radio":
            return (
              a.querySelector(`.${h.popup} > .${h.radio} input:checked`) ||
              a.querySelector(`.${h.popup} > .${h.radio} input:first-child`)
            );
          case "range":
            return a.querySelector(`.${h.popup} > .${h.range} input`);
          default:
            return a.querySelector(`.${h.popup} > .${h.input}`);
        }
      },
      Jd = (a) => {
        if ((a.focus(), a.type !== "file")) {
          let l = a.value;
          (a.value = ""), (a.value = l);
        }
      },
      Xd = (a, l, d) => {
        !a ||
          !l ||
          (typeof l == "string" && (l = l.split(/\s+/).filter(Boolean)),
          l.forEach((p) => {
            Array.isArray(a)
              ? a.forEach((m) => {
                  d ? m.classList.add(p) : m.classList.remove(p);
                })
              : d
              ? a.classList.add(p)
              : a.classList.remove(p);
          }));
      },
      W = (a, l) => {
        Xd(a, l, !0);
      },
      ut = (a, l) => {
        Xd(a, l, !1);
      },
      Gt = (a, l) => {
        let d = Array.from(a.children);
        for (let p = 0; p < d.length; p++) {
          let m = d[p];
          if (m instanceof HTMLElement && It(m, l)) return m;
        }
      },
      bn = (a, l, d) => {
        d === `${parseInt(d)}` && (d = parseInt(d)),
          d || parseInt(d) === 0
            ? a.style.setProperty(l, typeof d == "number" ? `${d}px` : d)
            : a.style.removeProperty(l);
      },
      ve = function (a) {
        let l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : "flex";
        a && (a.style.display = l);
      },
      Me = (a) => {
        a && (a.style.display = "none");
      },
      dc = function (a) {
        let l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : "block";
        a &&
          new MutationObserver(() => {
            oo(a, a.innerHTML, l);
          }).observe(a, { childList: !0, subtree: !0 });
      },
      ef = (a, l, d, p) => {
        let m = a.querySelector(l);
        m && m.style.setProperty(d, p);
      },
      oo = function (a, l) {
        let d =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : "flex";
        l ? ve(a, d) : Me(a);
      },
      Re = (a) =>
        !!(a && (a.offsetWidth || a.offsetHeight || a.getClientRects().length)),
      Py = () => !Re(lt()) && !Re(Dn()) && !Re(Qn()),
      tf = (a) => a.scrollHeight > a.clientHeight,
      nf = (a) => {
        let l = window.getComputedStyle(a),
          d = parseFloat(l.getPropertyValue("animation-duration") || "0"),
          p = parseFloat(l.getPropertyValue("transition-duration") || "0");
        return d > 0 || p > 0;
      },
      fc = function (a) {
        let l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          d = bi();
        d &&
          Re(d) &&
          (l && ((d.style.transition = "none"), (d.style.width = "100%")),
          setTimeout(() => {
            (d.style.transition = `width ${a / 1e3}s linear`),
              (d.style.width = "0%");
          }, 10));
      },
      ky = () => {
        let a = bi();
        if (!a) return;
        let l = parseInt(window.getComputedStyle(a).width);
        a.style.removeProperty("transition"), (a.style.width = "100%");
        let d = parseInt(window.getComputedStyle(a).width),
          p = (l / d) * 100;
        a.style.width = `${p}%`;
      },
      rf = () => typeof window > "u" || typeof document > "u",
      Fy = `
 <div aria-labelledby="${h.title}" aria-describedby="${h["html-container"]}" class="${h.popup}" tabindex="-1">
   <button type="button" class="${h.close}"></button>
   <ul class="${h["progress-steps"]}"></ul>
   <div class="${h.icon}"></div>
   <img class="${h.image}" />
   <h2 class="${h.title}" id="${h.title}"></h2>
   <div class="${h["html-container"]}" id="${h["html-container"]}"></div>
   <input class="${h.input}" id="${h.input}" />
   <input type="file" class="${h.file}" />
   <div class="${h.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${h.select}" id="${h.select}"></select>
   <div class="${h.radio}"></div>
   <label class="${h.checkbox}">
     <input type="checkbox" id="${h.checkbox}" />
     <span class="${h.label}"></span>
   </label>
   <textarea class="${h.textarea}" id="${h.textarea}"></textarea>
   <div class="${h["validation-message"]}" id="${h["validation-message"]}"></div>
   <div class="${h.actions}">
     <div class="${h.loader}"></div>
     <button type="button" class="${h.confirm}"></button>
     <button type="button" class="${h.deny}"></button>
     <button type="button" class="${h.cancel}"></button>
   </div>
   <div class="${h.footer}"></div>
   <div class="${h["timer-progress-bar-container"]}">
     <div class="${h["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
      Ly = () => {
        let a = Ie();
        return a
          ? (a.remove(),
            ut(
              [document.documentElement, document.body],
              [h["no-backdrop"], h["toast-shown"], h["has-column"]]
            ),
            !0)
          : !1;
      },
      Cn = () => {
        s.currentInstance.resetValidationMessage();
      },
      Vy = () => {
        let a = Q(),
          l = Gt(a, h.input),
          d = Gt(a, h.file),
          p = a.querySelector(`.${h.range} input`),
          m = a.querySelector(`.${h.range} output`),
          E = Gt(a, h.select),
          L = a.querySelector(`.${h.checkbox} input`),
          Z = Gt(a, h.textarea);
        (l.oninput = Cn),
          (d.onchange = Cn),
          (E.onchange = Cn),
          (L.onchange = Cn),
          (Z.oninput = Cn),
          (p.oninput = () => {
            Cn(), (m.value = p.value);
          }),
          (p.onchange = () => {
            Cn(), (m.value = p.value);
          });
      },
      jy = (a) => (typeof a == "string" ? document.querySelector(a) : a),
      By = (a) => {
        let l = Q();
        l.setAttribute("role", a.toast ? "alert" : "dialog"),
          l.setAttribute("aria-live", a.toast ? "polite" : "assertive"),
          a.toast || l.setAttribute("aria-modal", "true");
      },
      $y = (a) => {
        window.getComputedStyle(a).direction === "rtl" && W(Ie(), h.rtl);
      },
      Uy = (a) => {
        let l = Ly();
        if (rf()) {
          I("SweetAlert2 requires document to initialize");
          return;
        }
        let d = document.createElement("div");
        (d.className = h.container), l && W(d, h["no-transition"]), Be(d, Fy);
        let p = jy(a.target);
        p.appendChild(d), By(a), $y(p), Vy();
      },
      hc = (a, l) => {
        a instanceof HTMLElement
          ? l.appendChild(a)
          : typeof a == "object"
          ? Hy(a, l)
          : a && Be(l, a);
      },
      Hy = (a, l) => {
        a.jquery ? zy(l, a) : Be(l, a.toString());
      },
      zy = (a, l) => {
        if (((a.textContent = ""), 0 in l))
          for (let d = 0; d in l; d++) a.appendChild(l[d].cloneNode(!0));
        else a.appendChild(l.cloneNode(!0));
      },
      En = (() => {
        if (rf()) return !1;
        let a = document.createElement("div");
        return typeof a.style.webkitAnimation < "u"
          ? "webkitAnimationEnd"
          : typeof a.style.animation < "u"
          ? "animationend"
          : !1;
      })(),
      Gy = (a, l) => {
        let d = ro(),
          p = Kn();
        !d ||
          !p ||
          (!l.showConfirmButton && !l.showDenyButton && !l.showCancelButton
            ? Me(d)
            : ve(d),
          $e(d, l, "actions"),
          qy(d, p, l),
          Be(p, l.loaderHtml || ""),
          $e(p, l, "loader"));
      };
    function qy(a, l, d) {
      let p = lt(),
        m = Dn(),
        E = Qn();
      !p ||
        !m ||
        !E ||
        (pc(p, "confirm", d),
        pc(m, "deny", d),
        pc(E, "cancel", d),
        Wy(p, m, E, d),
        d.reverseButtons &&
          (d.toast
            ? (a.insertBefore(E, p), a.insertBefore(m, p))
            : (a.insertBefore(E, l),
              a.insertBefore(m, l),
              a.insertBefore(p, l))));
    }
    function Wy(a, l, d, p) {
      if (!p.buttonsStyling) {
        ut([a, l, d], h.styled);
        return;
      }
      W([a, l, d], h.styled),
        p.confirmButtonColor &&
          ((a.style.backgroundColor = p.confirmButtonColor),
          W(a, h["default-outline"])),
        p.denyButtonColor &&
          ((l.style.backgroundColor = p.denyButtonColor),
          W(l, h["default-outline"])),
        p.cancelButtonColor &&
          ((d.style.backgroundColor = p.cancelButtonColor),
          W(d, h["default-outline"]));
    }
    function pc(a, l, d) {
      let p = A(l);
      oo(a, d[`show${p}Button`], "inline-block"),
        Be(a, d[`${l}ButtonText`] || ""),
        a.setAttribute("aria-label", d[`${l}ButtonAriaLabel`] || ""),
        (a.className = h[l]),
        $e(a, d, `${l}Button`);
    }
    let Zy = (a, l) => {
        let d = cc();
        d &&
          (Be(d, l.closeButtonHtml || ""),
          $e(d, l, "closeButton"),
          oo(d, l.showCloseButton),
          d.setAttribute("aria-label", l.closeButtonAriaLabel || ""));
      },
      Yy = (a, l) => {
        let d = Ie();
        d &&
          (Qy(d, l.backdrop),
          Ky(d, l.position),
          Jy(d, l.grow),
          $e(d, l, "container"));
      };
    function Qy(a, l) {
      typeof l == "string"
        ? (a.style.background = l)
        : l || W([document.documentElement, document.body], h["no-backdrop"]);
    }
    function Ky(a, l) {
      l &&
        (l in h
          ? W(a, h[l])
          : (C('The "position" parameter is not valid, defaulting to "center"'),
            W(a, h.center)));
    }
    function Jy(a, l) {
      l && W(a, h[`grow-${l}`]);
    }
    var ee = { innerParams: new WeakMap(), domCache: new WeakMap() };
    let Xy = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea",
      ],
      ew = (a, l) => {
        let d = Q();
        if (!d) return;
        let p = ee.innerParams.get(a),
          m = !p || l.input !== p.input;
        Xy.forEach((E) => {
          let L = Gt(d, h[E]);
          L && (rw(E, l.inputAttributes), (L.className = h[E]), m && Me(L));
        }),
          l.input && (m && tw(l), ow(l));
      },
      tw = (a) => {
        if (!a.input) return;
        if (!ce[a.input]) {
          I(
            `Unexpected type of input! Expected ${Object.keys(ce).join(
              " | "
            )}, got "${a.input}"`
          );
          return;
        }
        let l = of(a.input);
        if (!l) return;
        let d = ce[a.input](l, a);
        ve(l),
          a.inputAutoFocus &&
            setTimeout(() => {
              Jd(d);
            });
      },
      nw = (a) => {
        for (let l = 0; l < a.attributes.length; l++) {
          let d = a.attributes[l].name;
          ["id", "type", "value", "style"].includes(d) || a.removeAttribute(d);
        }
      },
      rw = (a, l) => {
        let d = Q();
        if (!d) return;
        let p = Ei(d, a);
        if (p) {
          nw(p);
          for (let m in l) p.setAttribute(m, l[m]);
        }
      },
      ow = (a) => {
        if (!a.input) return;
        let l = of(a.input);
        l && $e(l, a, "input");
      },
      gc = (a, l) => {
        !a.placeholder &&
          l.inputPlaceholder &&
          (a.placeholder = l.inputPlaceholder);
      },
      io = (a, l, d) => {
        if (d.inputLabel) {
          let p = document.createElement("label"),
            m = h["input-label"];
          p.setAttribute("for", a.id),
            (p.className = m),
            typeof d.customClass == "object" && W(p, d.customClass.inputLabel),
            (p.innerText = d.inputLabel),
            l.insertAdjacentElement("beforebegin", p);
        }
      },
      of = (a) => {
        let l = Q();
        if (l) return Gt(l, h[a] || h.input);
      },
      Ii = (a, l) => {
        ["string", "number"].includes(typeof l)
          ? (a.value = `${l}`)
          : ct(l) ||
            C(
              `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof l}"`
            );
      },
      ce = {};
    (ce.text =
      ce.email =
      ce.password =
      ce.number =
      ce.tel =
      ce.url =
      ce.search =
      ce.date =
      ce["datetime-local"] =
      ce.time =
      ce.week =
      ce.month =
        (a, l) => (
          Ii(a, l.inputValue), io(a, a, l), gc(a, l), (a.type = l.input), a
        )),
      (ce.file = (a, l) => (io(a, a, l), gc(a, l), a)),
      (ce.range = (a, l) => {
        let d = a.querySelector("input"),
          p = a.querySelector("output");
        return (
          Ii(d, l.inputValue),
          (d.type = l.input),
          Ii(p, l.inputValue),
          io(d, a, l),
          a
        );
      }),
      (ce.select = (a, l) => {
        if (((a.textContent = ""), l.inputPlaceholder)) {
          let d = document.createElement("option");
          Be(d, l.inputPlaceholder),
            (d.value = ""),
            (d.disabled = !0),
            (d.selected = !0),
            a.appendChild(d);
        }
        return io(a, a, l), a;
      }),
      (ce.radio = (a) => ((a.textContent = ""), a)),
      (ce.checkbox = (a, l) => {
        let d = Ei(Q(), "checkbox");
        (d.value = "1"), (d.checked = !!l.inputValue);
        let p = a.querySelector("span");
        return Be(p, l.inputPlaceholder || l.inputLabel), d;
      }),
      (ce.textarea = (a, l) => {
        Ii(a, l.inputValue), gc(a, l), io(a, a, l);
        let d = (p) =>
          parseInt(window.getComputedStyle(p).marginLeft) +
          parseInt(window.getComputedStyle(p).marginRight);
        return (
          setTimeout(() => {
            if ("MutationObserver" in window) {
              let p = parseInt(window.getComputedStyle(Q()).width),
                m = () => {
                  if (!document.body.contains(a)) return;
                  let E = a.offsetWidth + d(a);
                  E > p
                    ? (Q().style.width = `${E}px`)
                    : bn(Q(), "width", l.width);
                };
              new MutationObserver(m).observe(a, {
                attributes: !0,
                attributeFilter: ["style"],
              });
            }
          }),
          a
        );
      });
    let iw = (a, l) => {
        let d = sc();
        d &&
          (dc(d),
          $e(d, l, "htmlContainer"),
          l.html
            ? (hc(l.html, d), ve(d, "block"))
            : l.text
            ? ((d.textContent = l.text), ve(d, "block"))
            : Me(d),
          ew(a, l));
      },
      sw = (a, l) => {
        let d = Kd();
        d &&
          (dc(d),
          oo(d, l.footer, "block"),
          l.footer && hc(l.footer, d),
          $e(d, l, "footer"));
      },
      aw = (a, l) => {
        let d = ee.innerParams.get(a),
          p = no();
        if (p) {
          if (d && l.icon === d.icon) {
            af(p, l), sf(p, l);
            return;
          }
          if (!l.icon && !l.iconHtml) {
            Me(p);
            return;
          }
          if (l.icon && Object.keys(v).indexOf(l.icon) === -1) {
            I(
              `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${l.icon}"`
            ),
              Me(p);
            return;
          }
          ve(p), af(p, l), sf(p, l), W(p, l.showClass && l.showClass.icon);
        }
      },
      sf = (a, l) => {
        for (let [d, p] of Object.entries(v)) l.icon !== d && ut(a, p);
        W(a, l.icon && v[l.icon]), dw(a, l), cw(), $e(a, l, "icon");
      },
      cw = () => {
        let a = Q();
        if (!a) return;
        let l = window.getComputedStyle(a).getPropertyValue("background-color"),
          d = a.querySelectorAll(
            "[class^=swal2-success-circular-line], .swal2-success-fix"
          );
        for (let p = 0; p < d.length; p++) d[p].style.backgroundColor = l;
      },
      lw = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
      uw = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
      af = (a, l) => {
        if (!l.icon && !l.iconHtml) return;
        let d = a.innerHTML,
          p = "";
        l.iconHtml
          ? (p = cf(l.iconHtml))
          : l.icon === "success"
          ? ((p = lw), (d = d.replace(/ style=".*?"/g, "")))
          : l.icon === "error"
          ? (p = uw)
          : l.icon &&
            (p = cf({ question: "?", warning: "!", info: "i" }[l.icon])),
          d.trim() !== p.trim() && Be(a, p);
      },
      dw = (a, l) => {
        if (l.iconColor) {
          (a.style.color = l.iconColor), (a.style.borderColor = l.iconColor);
          for (let d of [
            ".swal2-success-line-tip",
            ".swal2-success-line-long",
            ".swal2-x-mark-line-left",
            ".swal2-x-mark-line-right",
          ])
            ef(a, d, "background-color", l.iconColor);
          ef(a, ".swal2-success-ring", "border-color", l.iconColor);
        }
      },
      cf = (a) => `<div class="${h["icon-content"]}">${a}</div>`,
      fw = (a, l) => {
        let d = Qd();
        if (d) {
          if (!l.imageUrl) {
            Me(d);
            return;
          }
          ve(d, ""),
            d.setAttribute("src", l.imageUrl),
            d.setAttribute("alt", l.imageAlt || ""),
            bn(d, "width", l.imageWidth),
            bn(d, "height", l.imageHeight),
            (d.className = h.image),
            $e(d, l, "image");
        }
      },
      hw = (a, l) => {
        let d = Ie(),
          p = Q();
        if (!(!d || !p)) {
          if (l.toast) {
            bn(d, "width", l.width), (p.style.width = "100%");
            let m = Kn();
            m && p.insertBefore(m, no());
          } else bn(p, "width", l.width);
          bn(p, "padding", l.padding),
            l.color && (p.style.color = l.color),
            l.background && (p.style.background = l.background),
            Me(Di()),
            pw(p, l);
        }
      },
      pw = (a, l) => {
        let d = l.showClass || {};
        (a.className = `${h.popup} ${Re(a) ? d.popup : ""}`),
          l.toast
            ? (W([document.documentElement, document.body], h["toast-shown"]),
              W(a, h.toast))
            : W(a, h.modal),
          $e(a, l, "popup"),
          typeof l.customClass == "string" && W(a, l.customClass),
          l.icon && W(a, h[`icon-${l.icon}`]);
      },
      gw = (a, l) => {
        let d = ac();
        if (!d) return;
        let { progressSteps: p, currentProgressStep: m } = l;
        if (!p || p.length === 0 || m === void 0) {
          Me(d);
          return;
        }
        ve(d),
          (d.textContent = ""),
          m >= p.length &&
            C(
              "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
            ),
          p.forEach((E, L) => {
            let Z = mw(E);
            if (
              (d.appendChild(Z),
              L === m && W(Z, h["active-progress-step"]),
              L !== p.length - 1)
            ) {
              let se = vw(l);
              d.appendChild(se);
            }
          });
      },
      mw = (a) => {
        let l = document.createElement("li");
        return W(l, h["progress-step"]), Be(l, a), l;
      },
      vw = (a) => {
        let l = document.createElement("li");
        return (
          W(l, h["progress-step-line"]),
          a.progressStepsDistance && bn(l, "width", a.progressStepsDistance),
          l
        );
      },
      yw = (a, l) => {
        let d = Yd();
        d &&
          (dc(d),
          oo(d, l.title || l.titleText, "block"),
          l.title && hc(l.title, d),
          l.titleText && (d.innerText = l.titleText),
          $e(d, l, "title"));
      },
      lf = (a, l) => {
        hw(a, l),
          Yy(a, l),
          gw(a, l),
          aw(a, l),
          fw(a, l),
          yw(a, l),
          Zy(a, l),
          iw(a, l),
          Gy(a, l),
          sw(a, l);
        let d = Q();
        typeof l.didRender == "function" && d && l.didRender(d),
          s.eventEmitter.emit("didRender", d);
      },
      ww = () => Re(Q()),
      uf = () => {
        var a;
        return (a = lt()) === null || a === void 0 ? void 0 : a.click();
      },
      Dw = () => {
        var a;
        return (a = Dn()) === null || a === void 0 ? void 0 : a.click();
      },
      bw = () => {
        var a;
        return (a = Qn()) === null || a === void 0 ? void 0 : a.click();
      },
      Jn = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer",
      }),
      df = (a) => {
        a.keydownTarget &&
          a.keydownHandlerAdded &&
          (a.keydownTarget.removeEventListener("keydown", a.keydownHandler, {
            capture: a.keydownListenerCapture,
          }),
          (a.keydownHandlerAdded = !1));
      },
      Cw = (a, l, d) => {
        df(a),
          l.toast ||
            ((a.keydownHandler = (p) => Iw(l, p, d)),
            (a.keydownTarget = l.keydownListenerCapture ? window : Q()),
            (a.keydownListenerCapture = l.keydownListenerCapture),
            a.keydownTarget.addEventListener("keydown", a.keydownHandler, {
              capture: a.keydownListenerCapture,
            }),
            (a.keydownHandlerAdded = !0));
      },
      mc = (a, l) => {
        var d;
        let p = lc();
        if (p.length) {
          (a = a + l),
            a === p.length ? (a = 0) : a === -1 && (a = p.length - 1),
            p[a].focus();
          return;
        }
        (d = Q()) === null || d === void 0 || d.focus();
      },
      ff = ["ArrowRight", "ArrowDown"],
      Ew = ["ArrowLeft", "ArrowUp"],
      Iw = (a, l, d) => {
        a &&
          (l.isComposing ||
            l.keyCode === 229 ||
            (a.stopKeydownPropagation && l.stopPropagation(),
            l.key === "Enter"
              ? Mw(l, a)
              : l.key === "Tab"
              ? _w(l)
              : [...ff, ...Ew].includes(l.key)
              ? Sw(l.key)
              : l.key === "Escape" && Tw(l, a, d)));
      },
      Mw = (a, l) => {
        if (!be(l.allowEnterKey)) return;
        let d = Ei(Q(), l.input);
        if (
          a.target &&
          d &&
          a.target instanceof HTMLElement &&
          a.target.outerHTML === d.outerHTML
        ) {
          if (["textarea", "file"].includes(l.input)) return;
          uf(), a.preventDefault();
        }
      },
      _w = (a) => {
        let l = a.target,
          d = lc(),
          p = -1;
        for (let m = 0; m < d.length; m++)
          if (l === d[m]) {
            p = m;
            break;
          }
        a.shiftKey ? mc(p, -1) : mc(p, 1),
          a.stopPropagation(),
          a.preventDefault();
      },
      Sw = (a) => {
        let l = ro(),
          d = lt(),
          p = Dn(),
          m = Qn();
        if (!l || !d || !p || !m) return;
        let E = [d, p, m];
        if (
          document.activeElement instanceof HTMLElement &&
          !E.includes(document.activeElement)
        )
          return;
        let L = ff.includes(a)
            ? "nextElementSibling"
            : "previousElementSibling",
          Z = document.activeElement;
        if (Z) {
          for (let se = 0; se < l.children.length; se++) {
            if (((Z = Z[L]), !Z)) return;
            if (Z instanceof HTMLButtonElement && Re(Z)) break;
          }
          Z instanceof HTMLButtonElement && Z.focus();
        }
      },
      Tw = (a, l, d) => {
        be(l.allowEscapeKey) && (a.preventDefault(), d(Jn.esc));
      };
    var Xn = {
      swalPromiseResolve: new WeakMap(),
      swalPromiseReject: new WeakMap(),
    };
    let xw = () => {
        let a = Ie();
        Array.from(document.body.children).forEach((d) => {
          d.contains(a) ||
            (d.hasAttribute("aria-hidden") &&
              d.setAttribute(
                "data-previous-aria-hidden",
                d.getAttribute("aria-hidden") || ""
              ),
            d.setAttribute("aria-hidden", "true"));
        });
      },
      hf = () => {
        Array.from(document.body.children).forEach((l) => {
          l.hasAttribute("data-previous-aria-hidden")
            ? (l.setAttribute(
                "aria-hidden",
                l.getAttribute("data-previous-aria-hidden") || ""
              ),
              l.removeAttribute("data-previous-aria-hidden"))
            : l.removeAttribute("aria-hidden");
        });
      },
      pf = typeof window < "u" && !!window.GestureEvent,
      Aw = () => {
        if (pf && !It(document.body, h.iosfix)) {
          let a = document.body.scrollTop;
          (document.body.style.top = `${a * -1}px`),
            W(document.body, h.iosfix),
            Nw();
        }
      },
      Nw = () => {
        let a = Ie();
        if (!a) return;
        let l;
        (a.ontouchstart = (d) => {
          l = Rw(d);
        }),
          (a.ontouchmove = (d) => {
            l && (d.preventDefault(), d.stopPropagation());
          });
      },
      Rw = (a) => {
        let l = a.target,
          d = Ie(),
          p = sc();
        return !d || !p || Ow(a) || Pw(a)
          ? !1
          : l === d ||
              (!tf(d) &&
                l instanceof HTMLElement &&
                l.tagName !== "INPUT" &&
                l.tagName !== "TEXTAREA" &&
                !(tf(p) && p.contains(l)));
      },
      Ow = (a) =>
        a.touches && a.touches.length && a.touches[0].touchType === "stylus",
      Pw = (a) => a.touches && a.touches.length > 1,
      kw = () => {
        if (It(document.body, h.iosfix)) {
          let a = parseInt(document.body.style.top, 10);
          ut(document.body, h.iosfix),
            (document.body.style.top = ""),
            (document.body.scrollTop = a * -1);
        }
      },
      Fw = () => {
        let a = document.createElement("div");
        (a.className = h["scrollbar-measure"]), document.body.appendChild(a);
        let l = a.getBoundingClientRect().width - a.clientWidth;
        return document.body.removeChild(a), l;
      },
      er = null,
      Lw = (a) => {
        er === null &&
          (document.body.scrollHeight > window.innerHeight || a === "scroll") &&
          ((er = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue("padding-right")
          )),
          (document.body.style.paddingRight = `${er + Fw()}px`));
      },
      Vw = () => {
        er !== null &&
          ((document.body.style.paddingRight = `${er}px`), (er = null));
      };
    function gf(a, l, d, p) {
      Ci() ? vf(a, p) : (u(d).then(() => vf(a, p)), df(s)),
        pf
          ? (l.setAttribute("style", "display:none !important"),
            l.removeAttribute("class"),
            (l.innerHTML = ""))
          : l.remove(),
        uc() && (Vw(), kw(), hf()),
        jw();
    }
    function jw() {
      ut(
        [document.documentElement, document.body],
        [h.shown, h["height-auto"], h["no-backdrop"], h["toast-shown"]]
      );
    }
    function qt(a) {
      a = $w(a);
      let l = Xn.swalPromiseResolve.get(this),
        d = Bw(this);
      this.isAwaitingPromise ? a.isDismissed || (so(this), l(a)) : d && l(a);
    }
    let Bw = (a) => {
      let l = Q();
      if (!l) return !1;
      let d = ee.innerParams.get(a);
      if (!d || It(l, d.hideClass.popup)) return !1;
      ut(l, d.showClass.popup), W(l, d.hideClass.popup);
      let p = Ie();
      return (
        ut(p, d.showClass.backdrop), W(p, d.hideClass.backdrop), Uw(a, l, d), !0
      );
    };
    function mf(a) {
      let l = Xn.swalPromiseReject.get(this);
      so(this), l && l(a);
    }
    let so = (a) => {
        a.isAwaitingPromise &&
          (delete a.isAwaitingPromise, ee.innerParams.get(a) || a._destroy());
      },
      $w = (a) =>
        typeof a > "u"
          ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
          : Object.assign(
              { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
              a
            ),
      Uw = (a, l, d) => {
        let p = Ie(),
          m = En && nf(l);
        typeof d.willClose == "function" && d.willClose(l),
          s.eventEmitter.emit("willClose", l),
          m
            ? Hw(a, l, p, d.returnFocus, d.didClose)
            : gf(a, p, d.returnFocus, d.didClose);
      },
      Hw = (a, l, d, p, m) => {
        En &&
          ((s.swalCloseEventFinishedCallback = gf.bind(null, a, d, p, m)),
          l.addEventListener(En, function (E) {
            E.target === l &&
              (s.swalCloseEventFinishedCallback(),
              delete s.swalCloseEventFinishedCallback);
          }));
      },
      vf = (a, l) => {
        setTimeout(() => {
          typeof l == "function" && l.bind(a.params)(),
            s.eventEmitter.emit("didClose"),
            a._destroy && a._destroy();
        });
      },
      tr = (a) => {
        let l = Q();
        if ((l || new xi(), (l = Q()), !l)) return;
        let d = Kn();
        Ci() ? Me(no()) : zw(l, a),
          ve(d),
          l.setAttribute("data-loading", "true"),
          l.setAttribute("aria-busy", "true"),
          l.focus();
      },
      zw = (a, l) => {
        let d = ro(),
          p = Kn();
        !d ||
          !p ||
          (!l && Re(lt()) && (l = lt()),
          ve(d),
          l &&
            (Me(l),
            p.setAttribute("data-button-to-replace", l.className),
            d.insertBefore(p, l)),
          W([a, d], h.loading));
      },
      Gw = (a, l) => {
        l.input === "select" || l.input === "radio"
          ? Qw(a, l)
          : ["text", "email", "number", "tel", "textarea"].some(
              (d) => d === l.input
            ) &&
            (te(l.inputValue) || ct(l.inputValue)) &&
            (tr(lt()), Kw(a, l));
      },
      qw = (a, l) => {
        let d = a.getInput();
        if (!d) return null;
        switch (l.input) {
          case "checkbox":
            return Ww(d);
          case "radio":
            return Zw(d);
          case "file":
            return Yw(d);
          default:
            return l.inputAutoTrim ? d.value.trim() : d.value;
        }
      },
      Ww = (a) => (a.checked ? 1 : 0),
      Zw = (a) => (a.checked ? a.value : null),
      Yw = (a) =>
        a.files && a.files.length
          ? a.getAttribute("multiple") !== null
            ? a.files
            : a.files[0]
          : null,
      Qw = (a, l) => {
        let d = Q();
        if (!d) return;
        let p = (m) => {
          l.input === "select"
            ? Jw(d, Mi(m), l)
            : l.input === "radio" && Xw(d, Mi(m), l);
        };
        te(l.inputOptions) || ct(l.inputOptions)
          ? (tr(lt()),
            me(l.inputOptions).then((m) => {
              a.hideLoading(), p(m);
            }))
          : typeof l.inputOptions == "object"
          ? p(l.inputOptions)
          : I(
              `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof l.inputOptions}`
            );
      },
      Kw = (a, l) => {
        let d = a.getInput();
        d &&
          (Me(d),
          me(l.inputValue)
            .then((p) => {
              (d.value =
                l.input === "number" ? `${parseFloat(p) || 0}` : `${p}`),
                ve(d),
                d.focus(),
                a.hideLoading();
            })
            .catch((p) => {
              I(`Error in inputValue promise: ${p}`),
                (d.value = ""),
                ve(d),
                d.focus(),
                a.hideLoading();
            }));
      };
    function Jw(a, l, d) {
      let p = Gt(a, h.select);
      if (!p) return;
      let m = (E, L, Z) => {
        let se = document.createElement("option");
        (se.value = Z),
          Be(se, L),
          (se.selected = yf(Z, d.inputValue)),
          E.appendChild(se);
      };
      l.forEach((E) => {
        let L = E[0],
          Z = E[1];
        if (Array.isArray(Z)) {
          let se = document.createElement("optgroup");
          (se.label = L),
            (se.disabled = !1),
            p.appendChild(se),
            Z.forEach((rr) => m(se, rr[1], rr[0]));
        } else m(p, Z, L);
      }),
        p.focus();
    }
    function Xw(a, l, d) {
      let p = Gt(a, h.radio);
      if (!p) return;
      l.forEach((E) => {
        let L = E[0],
          Z = E[1],
          se = document.createElement("input"),
          rr = document.createElement("label");
        (se.type = "radio"),
          (se.name = h.radio),
          (se.value = L),
          yf(L, d.inputValue) && (se.checked = !0);
        let bc = document.createElement("span");
        Be(bc, Z),
          (bc.className = h.label),
          rr.appendChild(se),
          rr.appendChild(bc),
          p.appendChild(rr);
      });
      let m = p.querySelectorAll("input");
      m.length && m[0].focus();
    }
    let Mi = (a) => {
        let l = [];
        return (
          a instanceof Map
            ? a.forEach((d, p) => {
                let m = d;
                typeof m == "object" && (m = Mi(m)), l.push([p, m]);
              })
            : Object.keys(a).forEach((d) => {
                let p = a[d];
                typeof p == "object" && (p = Mi(p)), l.push([d, p]);
              }),
          l
        );
      },
      yf = (a, l) => !!l && l.toString() === a.toString(),
      eD = (a) => {
        let l = ee.innerParams.get(a);
        a.disableButtons(), l.input ? wf(a, "confirm") : yc(a, !0);
      },
      tD = (a) => {
        let l = ee.innerParams.get(a);
        a.disableButtons(),
          l.returnInputValueOnDeny ? wf(a, "deny") : vc(a, !1);
      },
      nD = (a, l) => {
        a.disableButtons(), l(Jn.cancel);
      },
      wf = (a, l) => {
        let d = ee.innerParams.get(a);
        if (!d.input) {
          I(
            `The "input" parameter is needed to be set when using returnInputValueOn${A(
              l
            )}`
          );
          return;
        }
        let p = a.getInput(),
          m = qw(a, d);
        d.inputValidator
          ? rD(a, m, l)
          : p && !p.checkValidity()
          ? (a.enableButtons(),
            a.showValidationMessage(d.validationMessage || p.validationMessage))
          : l === "deny"
          ? vc(a, m)
          : yc(a, m);
      },
      rD = (a, l, d) => {
        let p = ee.innerParams.get(a);
        a.disableInput(),
          Promise.resolve()
            .then(() => me(p.inputValidator(l, p.validationMessage)))
            .then((E) => {
              a.enableButtons(),
                a.enableInput(),
                E
                  ? a.showValidationMessage(E)
                  : d === "deny"
                  ? vc(a, l)
                  : yc(a, l);
            });
      },
      vc = (a, l) => {
        let d = ee.innerParams.get(a || void 0);
        d.showLoaderOnDeny && tr(Dn()),
          d.preDeny
            ? ((a.isAwaitingPromise = !0),
              Promise.resolve()
                .then(() => me(d.preDeny(l, d.validationMessage)))
                .then((m) => {
                  m === !1
                    ? (a.hideLoading(), so(a))
                    : a.close({ isDenied: !0, value: typeof m > "u" ? l : m });
                })
                .catch((m) => bf(a || void 0, m)))
            : a.close({ isDenied: !0, value: l });
      },
      Df = (a, l) => {
        a.close({ isConfirmed: !0, value: l });
      },
      bf = (a, l) => {
        a.rejectPromise(l);
      },
      yc = (a, l) => {
        let d = ee.innerParams.get(a || void 0);
        d.showLoaderOnConfirm && tr(),
          d.preConfirm
            ? (a.resetValidationMessage(),
              (a.isAwaitingPromise = !0),
              Promise.resolve()
                .then(() => me(d.preConfirm(l, d.validationMessage)))
                .then((m) => {
                  Re(Di()) || m === !1
                    ? (a.hideLoading(), so(a))
                    : Df(a, typeof m > "u" ? l : m);
                })
                .catch((m) => bf(a || void 0, m)))
            : Df(a, l);
      };
    function _i() {
      let a = ee.innerParams.get(this);
      if (!a) return;
      let l = ee.domCache.get(this);
      Me(l.loader),
        Ci() ? a.icon && ve(no()) : oD(l),
        ut([l.popup, l.actions], h.loading),
        l.popup.removeAttribute("aria-busy"),
        l.popup.removeAttribute("data-loading"),
        (l.confirmButton.disabled = !1),
        (l.denyButton.disabled = !1),
        (l.cancelButton.disabled = !1);
    }
    let oD = (a) => {
      let l = a.popup.getElementsByClassName(
        a.loader.getAttribute("data-button-to-replace")
      );
      l.length ? ve(l[0], "inline-block") : Py() && Me(a.actions);
    };
    function Cf() {
      let a = ee.innerParams.get(this),
        l = ee.domCache.get(this);
      return l ? Ei(l.popup, a.input) : null;
    }
    function Ef(a, l, d) {
      let p = ee.domCache.get(a);
      l.forEach((m) => {
        p[m].disabled = d;
      });
    }
    function If(a, l) {
      let d = Q();
      if (!(!d || !a))
        if (a.type === "radio") {
          let p = d.querySelectorAll(`[name="${h.radio}"]`);
          for (let m = 0; m < p.length; m++) p[m].disabled = l;
        } else a.disabled = l;
    }
    function Mf() {
      Ef(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    }
    function _f() {
      Ef(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    }
    function Sf() {
      If(this.getInput(), !1);
    }
    function Tf() {
      If(this.getInput(), !0);
    }
    function xf(a) {
      let l = ee.domCache.get(this),
        d = ee.innerParams.get(this);
      Be(l.validationMessage, a),
        (l.validationMessage.className = h["validation-message"]),
        d.customClass &&
          d.customClass.validationMessage &&
          W(l.validationMessage, d.customClass.validationMessage),
        ve(l.validationMessage);
      let p = this.getInput();
      p &&
        (p.setAttribute("aria-invalid", "true"),
        p.setAttribute("aria-describedby", h["validation-message"]),
        Jd(p),
        W(p, h.inputerror));
    }
    function Af() {
      let a = ee.domCache.get(this);
      a.validationMessage && Me(a.validationMessage);
      let l = this.getInput();
      l &&
        (l.removeAttribute("aria-invalid"),
        l.removeAttribute("aria-describedby"),
        ut(l, h.inputerror));
    }
    let nr = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        animation: !0,
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show",
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide",
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0,
      },
      iD = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose",
      ],
      sD = { allowEnterKey: void 0 },
      aD = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture",
      ],
      Nf = (a) => Object.prototype.hasOwnProperty.call(nr, a),
      Rf = (a) => iD.indexOf(a) !== -1,
      Of = (a) => sD[a],
      cD = (a) => {
        Nf(a) || C(`Unknown parameter "${a}"`);
      },
      lD = (a) => {
        aD.includes(a) && C(`The parameter "${a}" is incompatible with toasts`);
      },
      uD = (a) => {
        let l = Of(a);
        l && q(a, l);
      },
      dD = (a) => {
        a.backdrop === !1 &&
          a.allowOutsideClick &&
          C(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          );
        for (let l in a) cD(l), a.toast && lD(l), uD(l);
      };
    function Pf(a) {
      let l = Q(),
        d = ee.innerParams.get(this);
      if (!l || It(l, d.hideClass.popup)) {
        C(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
        return;
      }
      let p = fD(a),
        m = Object.assign({}, d, p);
      lf(this, m),
        ee.innerParams.set(this, m),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, a),
            writable: !1,
            enumerable: !0,
          },
        });
    }
    let fD = (a) => {
      let l = {};
      return (
        Object.keys(a).forEach((d) => {
          Rf(d) ? (l[d] = a[d]) : C(`Invalid parameter to update: ${d}`);
        }),
        l
      );
    };
    function kf() {
      let a = ee.domCache.get(this),
        l = ee.innerParams.get(this);
      if (!l) {
        Ff(this);
        return;
      }
      a.popup &&
        s.swalCloseEventFinishedCallback &&
        (s.swalCloseEventFinishedCallback(),
        delete s.swalCloseEventFinishedCallback),
        typeof l.didDestroy == "function" && l.didDestroy(),
        s.eventEmitter.emit("didDestroy"),
        hD(this);
    }
    let hD = (a) => {
        Ff(a),
          delete a.params,
          delete s.keydownHandler,
          delete s.keydownTarget,
          delete s.currentInstance;
      },
      Ff = (a) => {
        a.isAwaitingPromise
          ? (wc(ee, a), (a.isAwaitingPromise = !0))
          : (wc(Xn, a),
            wc(ee, a),
            delete a.isAwaitingPromise,
            delete a.disableButtons,
            delete a.enableButtons,
            delete a.getInput,
            delete a.disableInput,
            delete a.enableInput,
            delete a.hideLoading,
            delete a.disableLoading,
            delete a.showValidationMessage,
            delete a.resetValidationMessage,
            delete a.close,
            delete a.closePopup,
            delete a.closeModal,
            delete a.closeToast,
            delete a.rejectPromise,
            delete a.update,
            delete a._destroy);
      },
      wc = (a, l) => {
        for (let d in a) a[d].delete(l);
      };
    var pD = Object.freeze({
      __proto__: null,
      _destroy: kf,
      close: qt,
      closeModal: qt,
      closePopup: qt,
      closeToast: qt,
      disableButtons: _f,
      disableInput: Tf,
      disableLoading: _i,
      enableButtons: Mf,
      enableInput: Sf,
      getInput: Cf,
      handleAwaitingPromise: so,
      hideLoading: _i,
      rejectPromise: mf,
      resetValidationMessage: Af,
      showValidationMessage: xf,
      update: Pf,
    });
    let gD = (a, l, d) => {
        a.toast ? mD(a, l, d) : (yD(l), wD(l), DD(a, l, d));
      },
      mD = (a, l, d) => {
        l.popup.onclick = () => {
          (a && (vD(a) || a.timer || a.input)) || d(Jn.close);
        };
      },
      vD = (a) =>
        !!(
          a.showConfirmButton ||
          a.showDenyButton ||
          a.showCancelButton ||
          a.showCloseButton
        ),
      Si = !1,
      yD = (a) => {
        a.popup.onmousedown = () => {
          a.container.onmouseup = function (l) {
            (a.container.onmouseup = () => {}),
              l.target === a.container && (Si = !0);
          };
        };
      },
      wD = (a) => {
        a.container.onmousedown = (l) => {
          l.target === a.container && l.preventDefault(),
            (a.popup.onmouseup = function (d) {
              (a.popup.onmouseup = () => {}),
                (d.target === a.popup ||
                  (d.target instanceof HTMLElement &&
                    a.popup.contains(d.target))) &&
                  (Si = !0);
            });
        };
      },
      DD = (a, l, d) => {
        l.container.onclick = (p) => {
          if (Si) {
            Si = !1;
            return;
          }
          p.target === l.container && be(a.allowOutsideClick) && d(Jn.backdrop);
        };
      },
      bD = (a) => typeof a == "object" && a.jquery,
      Lf = (a) => a instanceof Element || bD(a),
      CD = (a) => {
        let l = {};
        return (
          typeof a[0] == "object" && !Lf(a[0])
            ? Object.assign(l, a[0])
            : ["title", "html", "icon"].forEach((d, p) => {
                let m = a[p];
                typeof m == "string" || Lf(m)
                  ? (l[d] = m)
                  : m !== void 0 &&
                    I(
                      `Unexpected type of ${d}! Expected "string" or "Element", got ${typeof m}`
                    );
              }),
          l
        );
      };
    function ED() {
      for (var a = arguments.length, l = new Array(a), d = 0; d < a; d++)
        l[d] = arguments[d];
      return new this(...l);
    }
    function ID(a) {
      class l extends this {
        _main(p, m) {
          return super._main(p, Object.assign({}, a, m));
        }
      }
      return l;
    }
    let MD = () => s.timeout && s.timeout.getTimerLeft(),
      Vf = () => {
        if (s.timeout) return ky(), s.timeout.stop();
      },
      jf = () => {
        if (s.timeout) {
          let a = s.timeout.start();
          return fc(a), a;
        }
      },
      _D = () => {
        let a = s.timeout;
        return a && (a.running ? Vf() : jf());
      },
      SD = (a) => {
        if (s.timeout) {
          let l = s.timeout.increase(a);
          return fc(l, !0), l;
        }
      },
      TD = () => !!(s.timeout && s.timeout.isRunning()),
      Bf = !1,
      Dc = {};
    function xD() {
      let a =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : "data-swal-template";
      (Dc[a] = this),
        Bf || (document.body.addEventListener("click", AD), (Bf = !0));
    }
    let AD = (a) => {
      for (let l = a.target; l && l !== document; l = l.parentNode)
        for (let d in Dc) {
          let p = l.getAttribute(d);
          if (p) {
            Dc[d].fire({ template: p });
            return;
          }
        }
    };
    class ND {
      constructor() {
        this.events = {};
      }
      _getHandlersByEventName(l) {
        return (
          typeof this.events[l] > "u" && (this.events[l] = []), this.events[l]
        );
      }
      on(l, d) {
        let p = this._getHandlersByEventName(l);
        p.includes(d) || p.push(d);
      }
      once(l, d) {
        var p = this;
        let m = function () {
          p.removeListener(l, m);
          for (var E = arguments.length, L = new Array(E), Z = 0; Z < E; Z++)
            L[Z] = arguments[Z];
          d.apply(p, L);
        };
        this.on(l, m);
      }
      emit(l) {
        for (
          var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), m = 1;
          m < d;
          m++
        )
          p[m - 1] = arguments[m];
        this._getHandlersByEventName(l).forEach((E) => {
          try {
            E.apply(this, p);
          } catch (L) {
            console.error(L);
          }
        });
      }
      removeListener(l, d) {
        let p = this._getHandlersByEventName(l),
          m = p.indexOf(d);
        m > -1 && p.splice(m, 1);
      }
      removeAllListeners(l) {
        this.events[l] !== void 0 && (this.events[l].length = 0);
      }
      reset() {
        this.events = {};
      }
    }
    s.eventEmitter = new ND();
    var RD = Object.freeze({
      __proto__: null,
      argsToParams: CD,
      bindClickHandler: xD,
      clickCancel: bw,
      clickConfirm: uf,
      clickDeny: Dw,
      enableLoading: tr,
      fire: ED,
      getActions: ro,
      getCancelButton: Qn,
      getCloseButton: cc,
      getConfirmButton: lt,
      getContainer: Ie,
      getDenyButton: Dn,
      getFocusableElements: lc,
      getFooter: Kd,
      getHtmlContainer: sc,
      getIcon: no,
      getIconContent: xy,
      getImage: Qd,
      getInputLabel: Ay,
      getLoader: Kn,
      getPopup: Q,
      getProgressSteps: ac,
      getTimerLeft: MD,
      getTimerProgressBar: bi,
      getTitle: Yd,
      getValidationMessage: Di,
      increaseTimer: SD,
      isDeprecatedParameter: Of,
      isLoading: Ry,
      isTimerRunning: TD,
      isUpdatableParameter: Rf,
      isValidParameter: Nf,
      isVisible: ww,
      mixin: ID,
      off: (a, l) => {
        if (!a) {
          s.eventEmitter.reset();
          return;
        }
        l
          ? s.eventEmitter.removeListener(a, l)
          : s.eventEmitter.removeAllListeners(a);
      },
      on: (a, l) => {
        s.eventEmitter.on(a, l);
      },
      once: (a, l) => {
        s.eventEmitter.once(a, l);
      },
      resumeTimer: jf,
      showLoading: tr,
      stopTimer: Vf,
      toggleTimer: _D,
    });
    class OD {
      constructor(l, d) {
        (this.callback = l),
          (this.remaining = d),
          (this.running = !1),
          this.start();
      }
      start() {
        return (
          this.running ||
            ((this.running = !0),
            (this.started = new Date()),
            (this.id = setTimeout(this.callback, this.remaining))),
          this.remaining
        );
      }
      stop() {
        return (
          this.started &&
            this.running &&
            ((this.running = !1),
            clearTimeout(this.id),
            (this.remaining -= new Date().getTime() - this.started.getTime())),
          this.remaining
        );
      }
      increase(l) {
        let d = this.running;
        return (
          d && this.stop(),
          (this.remaining += l),
          d && this.start(),
          this.remaining
        );
      }
      getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining;
      }
      isRunning() {
        return this.running;
      }
    }
    let $f = ["swal-title", "swal-html", "swal-footer"],
      PD = (a) => {
        let l =
          typeof a.template == "string"
            ? document.querySelector(a.template)
            : a.template;
        if (!l) return {};
        let d = l.content;
        return (
          UD(d),
          Object.assign(kD(d), FD(d), LD(d), VD(d), jD(d), BD(d), $D(d, $f))
        );
      },
      kD = (a) => {
        let l = {};
        return (
          Array.from(a.querySelectorAll("swal-param")).forEach((p) => {
            In(p, ["name", "value"]);
            let m = p.getAttribute("name"),
              E = p.getAttribute("value");
            !m ||
              !E ||
              (typeof nr[m] == "boolean"
                ? (l[m] = E !== "false")
                : typeof nr[m] == "object"
                ? (l[m] = JSON.parse(E))
                : (l[m] = E));
          }),
          l
        );
      },
      FD = (a) => {
        let l = {};
        return (
          Array.from(a.querySelectorAll("swal-function-param")).forEach((p) => {
            let m = p.getAttribute("name"),
              E = p.getAttribute("value");
            !m || !E || (l[m] = new Function(`return ${E}`)());
          }),
          l
        );
      },
      LD = (a) => {
        let l = {};
        return (
          Array.from(a.querySelectorAll("swal-button")).forEach((p) => {
            In(p, ["type", "color", "aria-label"]);
            let m = p.getAttribute("type");
            !m ||
              !["confirm", "cancel", "deny"].includes(m) ||
              ((l[`${m}ButtonText`] = p.innerHTML),
              (l[`show${A(m)}Button`] = !0),
              p.hasAttribute("color") &&
                (l[`${m}ButtonColor`] = p.getAttribute("color")),
              p.hasAttribute("aria-label") &&
                (l[`${m}ButtonAriaLabel`] = p.getAttribute("aria-label")));
          }),
          l
        );
      },
      VD = (a) => {
        let l = {},
          d = a.querySelector("swal-image");
        return (
          d &&
            (In(d, ["src", "width", "height", "alt"]),
            d.hasAttribute("src") &&
              (l.imageUrl = d.getAttribute("src") || void 0),
            d.hasAttribute("width") &&
              (l.imageWidth = d.getAttribute("width") || void 0),
            d.hasAttribute("height") &&
              (l.imageHeight = d.getAttribute("height") || void 0),
            d.hasAttribute("alt") &&
              (l.imageAlt = d.getAttribute("alt") || void 0)),
          l
        );
      },
      jD = (a) => {
        let l = {},
          d = a.querySelector("swal-icon");
        return (
          d &&
            (In(d, ["type", "color"]),
            d.hasAttribute("type") && (l.icon = d.getAttribute("type")),
            d.hasAttribute("color") && (l.iconColor = d.getAttribute("color")),
            (l.iconHtml = d.innerHTML)),
          l
        );
      },
      BD = (a) => {
        let l = {},
          d = a.querySelector("swal-input");
        d &&
          (In(d, ["type", "label", "placeholder", "value"]),
          (l.input = d.getAttribute("type") || "text"),
          d.hasAttribute("label") && (l.inputLabel = d.getAttribute("label")),
          d.hasAttribute("placeholder") &&
            (l.inputPlaceholder = d.getAttribute("placeholder")),
          d.hasAttribute("value") && (l.inputValue = d.getAttribute("value")));
        let p = Array.from(a.querySelectorAll("swal-input-option"));
        return (
          p.length &&
            ((l.inputOptions = {}),
            p.forEach((m) => {
              In(m, ["value"]);
              let E = m.getAttribute("value");
              if (!E) return;
              let L = m.innerHTML;
              l.inputOptions[E] = L;
            })),
          l
        );
      },
      $D = (a, l) => {
        let d = {};
        for (let p in l) {
          let m = l[p],
            E = a.querySelector(m);
          E && (In(E, []), (d[m.replace(/^swal-/, "")] = E.innerHTML.trim()));
        }
        return d;
      },
      UD = (a) => {
        let l = $f.concat([
          "swal-param",
          "swal-function-param",
          "swal-button",
          "swal-image",
          "swal-icon",
          "swal-input",
          "swal-input-option",
        ]);
        Array.from(a.children).forEach((d) => {
          let p = d.tagName.toLowerCase();
          l.includes(p) || C(`Unrecognized element <${p}>`);
        });
      },
      In = (a, l) => {
        Array.from(a.attributes).forEach((d) => {
          l.indexOf(d.name) === -1 &&
            C([
              `Unrecognized attribute "${
                d.name
              }" on <${a.tagName.toLowerCase()}>.`,
              `${
                l.length
                  ? `Allowed attributes are: ${l.join(", ")}`
                  : "To set the value, use HTML within the element."
              }`,
            ]);
        });
      },
      Uf = 10,
      HD = (a) => {
        let l = Ie(),
          d = Q();
        typeof a.willOpen == "function" && a.willOpen(d),
          s.eventEmitter.emit("willOpen", d);
        let m = window.getComputedStyle(document.body).overflowY;
        qD(l, d, a),
          setTimeout(() => {
            zD(l, d);
          }, Uf),
          uc() && (GD(l, a.scrollbarPadding, m), xw()),
          !Ci() &&
            !s.previousActiveElement &&
            (s.previousActiveElement = document.activeElement),
          typeof a.didOpen == "function" && setTimeout(() => a.didOpen(d)),
          s.eventEmitter.emit("didOpen", d),
          ut(l, h["no-transition"]);
      },
      Hf = (a) => {
        let l = Q();
        if (a.target !== l || !En) return;
        let d = Ie();
        l.removeEventListener(En, Hf), (d.style.overflowY = "auto");
      },
      zD = (a, l) => {
        En && nf(l)
          ? ((a.style.overflowY = "hidden"), l.addEventListener(En, Hf))
          : (a.style.overflowY = "auto");
      },
      GD = (a, l, d) => {
        Aw(),
          l && d !== "hidden" && Lw(d),
          setTimeout(() => {
            a.scrollTop = 0;
          });
      },
      qD = (a, l, d) => {
        W(a, d.showClass.backdrop),
          d.animation
            ? (l.style.setProperty("opacity", "0", "important"),
              ve(l, "grid"),
              setTimeout(() => {
                W(l, d.showClass.popup), l.style.removeProperty("opacity");
              }, Uf))
            : ve(l, "grid"),
          W([document.documentElement, document.body], h.shown),
          d.heightAuto &&
            d.backdrop &&
            !d.toast &&
            W([document.documentElement, document.body], h["height-auto"]);
      };
    var zf = {
      email: (a, l) =>
        /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)
          ? Promise.resolve()
          : Promise.resolve(l || "Invalid email address"),
      url: (a, l) =>
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
          a
        )
          ? Promise.resolve()
          : Promise.resolve(l || "Invalid URL"),
    };
    function WD(a) {
      a.inputValidator ||
        (a.input === "email" && (a.inputValidator = zf.email),
        a.input === "url" && (a.inputValidator = zf.url));
    }
    function ZD(a) {
      (!a.target ||
        (typeof a.target == "string" && !document.querySelector(a.target)) ||
        (typeof a.target != "string" && !a.target.appendChild)) &&
        (C('Target parameter is not valid, defaulting to "body"'),
        (a.target = "body"));
    }
    function YD(a) {
      WD(a),
        a.showLoaderOnConfirm &&
          !a.preConfirm &&
          C(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
        ZD(a),
        typeof a.title == "string" &&
          (a.title = a.title
            .split(
              `
`
            )
            .join("<br />")),
        Uy(a);
    }
    let dt;
    var Ti = new WeakMap();
    class le {
      constructor() {
        if ((n(this, Ti, void 0), typeof window > "u")) return;
        dt = this;
        for (var l = arguments.length, d = new Array(l), p = 0; p < l; p++)
          d[p] = arguments[p];
        let m = Object.freeze(this.constructor.argsToParams(d));
        (this.params = m),
          (this.isAwaitingPromise = !1),
          o(Ti, this, this._main(dt.params));
      }
      _main(l) {
        let d =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((dD(Object.assign({}, d, l)), s.currentInstance)) {
          let E = Xn.swalPromiseResolve.get(s.currentInstance),
            { isAwaitingPromise: L } = s.currentInstance;
          s.currentInstance._destroy(),
            L || E({ isDismissed: !0 }),
            uc() && hf();
        }
        s.currentInstance = dt;
        let p = KD(l, d);
        YD(p),
          Object.freeze(p),
          s.timeout && (s.timeout.stop(), delete s.timeout),
          clearTimeout(s.restoreFocusTimeout);
        let m = JD(dt);
        return lf(dt, p), ee.innerParams.set(dt, p), QD(dt, m, p);
      }
      then(l) {
        return r(Ti, this).then(l);
      }
      finally(l) {
        return r(Ti, this).finally(l);
      }
    }
    let QD = (a, l, d) =>
        new Promise((p, m) => {
          let E = (L) => {
            a.close({ isDismissed: !0, dismiss: L });
          };
          Xn.swalPromiseResolve.set(a, p),
            Xn.swalPromiseReject.set(a, m),
            (l.confirmButton.onclick = () => {
              eD(a);
            }),
            (l.denyButton.onclick = () => {
              tD(a);
            }),
            (l.cancelButton.onclick = () => {
              nD(a, E);
            }),
            (l.closeButton.onclick = () => {
              E(Jn.close);
            }),
            gD(d, l, E),
            Cw(s, d, E),
            Gw(a, d),
            HD(d),
            XD(s, d, E),
            eb(l, d),
            setTimeout(() => {
              l.container.scrollTop = 0;
            });
        }),
      KD = (a, l) => {
        let d = PD(a),
          p = Object.assign({}, nr, l, d, a);
        return (
          (p.showClass = Object.assign({}, nr.showClass, p.showClass)),
          (p.hideClass = Object.assign({}, nr.hideClass, p.hideClass)),
          p.animation === !1 &&
            ((p.showClass = { backdrop: "swal2-noanimation" }),
            (p.hideClass = {})),
          p
        );
      },
      JD = (a) => {
        let l = {
          popup: Q(),
          container: Ie(),
          actions: ro(),
          confirmButton: lt(),
          denyButton: Dn(),
          cancelButton: Qn(),
          loader: Kn(),
          closeButton: cc(),
          validationMessage: Di(),
          progressSteps: ac(),
        };
        return ee.domCache.set(a, l), l;
      },
      XD = (a, l, d) => {
        let p = bi();
        Me(p),
          l.timer &&
            ((a.timeout = new OD(() => {
              d("timer"), delete a.timeout;
            }, l.timer)),
            l.timerProgressBar &&
              (ve(p),
              $e(p, l, "timerProgressBar"),
              setTimeout(() => {
                a.timeout && a.timeout.running && fc(l.timer);
              })));
      },
      eb = (a, l) => {
        if (!l.toast) {
          if (!be(l.allowEnterKey)) {
            q("allowEnterKey"), rb();
            return;
          }
          tb(a) || nb(a, l) || mc(-1, 1);
        }
      },
      tb = (a) => {
        let l = a.popup.querySelectorAll("[autofocus]");
        for (let d of l)
          if (d instanceof HTMLElement && Re(d)) return d.focus(), !0;
        return !1;
      },
      nb = (a, l) =>
        l.focusDeny && Re(a.denyButton)
          ? (a.denyButton.focus(), !0)
          : l.focusCancel && Re(a.cancelButton)
          ? (a.cancelButton.focus(), !0)
          : l.focusConfirm && Re(a.confirmButton)
          ? (a.confirmButton.focus(), !0)
          : !1,
      rb = () => {
        document.activeElement instanceof HTMLElement &&
          typeof document.activeElement.blur == "function" &&
          document.activeElement.blur();
      };
    if (
      typeof window < "u" &&
      /^ru\b/.test(navigator.language) &&
      location.host.match(/\.(ru|su|by|xn--p1ai)$/)
    ) {
      let a = new Date(),
        l = localStorage.getItem("swal-initiation");
      l
        ? (a.getTime() - Date.parse(l)) / (1e3 * 60 * 60 * 24) > 3 &&
          setTimeout(() => {
            document.body.style.pointerEvents = "none";
            let d = document.createElement("audio");
            (d.src =
              "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
              (d.loop = !0),
              document.body.appendChild(d),
              setTimeout(() => {
                d.play().catch(() => {});
              }, 2500);
          }, 500)
        : localStorage.setItem("swal-initiation", `${a}`);
    }
    (le.prototype.disableButtons = _f),
      (le.prototype.enableButtons = Mf),
      (le.prototype.getInput = Cf),
      (le.prototype.disableInput = Tf),
      (le.prototype.enableInput = Sf),
      (le.prototype.hideLoading = _i),
      (le.prototype.disableLoading = _i),
      (le.prototype.showValidationMessage = xf),
      (le.prototype.resetValidationMessage = Af),
      (le.prototype.close = qt),
      (le.prototype.closePopup = qt),
      (le.prototype.closeModal = qt),
      (le.prototype.closeToast = qt),
      (le.prototype.rejectPromise = mf),
      (le.prototype.update = Pf),
      (le.prototype._destroy = kf),
      Object.assign(le, RD),
      Object.keys(pD).forEach((a) => {
        le[a] = function () {
          return dt && dt[a] ? dt[a](...arguments) : null;
        };
      }),
      (le.DismissReason = Jn),
      (le.version = "11.14.0");
    let xi = le;
    return (xi.default = xi), xi;
  });
  typeof Et < "u" &&
    Et.Sweetalert2 &&
    (Et.swal = Et.sweetAlert = Et.Swal = Et.SweetAlert = Et.Sweetalert2);
  typeof document < "u" &&
    (function (t, e) {
      var r = t.createElement("style");
      if ((t.getElementsByTagName("head")[0].appendChild(r), r.styleSheet))
        r.styleSheet.disabled || (r.styleSheet.cssText = e);
      else
        try {
          r.innerHTML = e;
        } catch {
          r.innerText = e;
        }
    })(
      document,
      '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
    );
});
function Yf(t, e) {
  return Object.is(t, e);
}
var pe = null,
  Ni = !1,
  Ri = 1,
  Mt = Symbol("SIGNAL");
function z(t) {
  let e = pe;
  return (pe = t), e;
}
function Qf() {
  return pe;
}
var co = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function Mc(t) {
  if (Ni) throw new Error("");
  if (pe === null) return;
  pe.consumerOnSignalRead(t);
  let e = pe.nextProducerIndex++;
  if (
    (Fi(pe), e < pe.producerNode.length && pe.producerNode[e] !== t && ao(pe))
  ) {
    let r = pe.producerNode[e];
    ki(r, pe.producerIndexOfThis[e]);
  }
  pe.producerNode[e] !== t &&
    ((pe.producerNode[e] = t),
    (pe.producerIndexOfThis[e] = ao(pe) ? eh(t, pe, e) : 0)),
    (pe.producerLastReadVersion[e] = t.version);
}
function hb() {
  Ri++;
}
function Kf(t) {
  if (!(ao(t) && !t.dirty) && !(!t.dirty && t.lastCleanEpoch === Ri)) {
    if (!t.producerMustRecompute(t) && !Sc(t)) {
      (t.dirty = !1), (t.lastCleanEpoch = Ri);
      return;
    }
    t.producerRecomputeValue(t), (t.dirty = !1), (t.lastCleanEpoch = Ri);
  }
}
function Jf(t) {
  if (t.liveConsumerNode === void 0) return;
  let e = Ni;
  Ni = !0;
  try {
    for (let r of t.liveConsumerNode) r.dirty || pb(r);
  } finally {
    Ni = e;
  }
}
function Xf() {
  return pe?.consumerAllowSignalWrites !== !1;
}
function pb(t) {
  (t.dirty = !0), Jf(t), t.consumerMarkedDirty?.(t);
}
function Pi(t) {
  return t && (t.nextProducerIndex = 0), z(t);
}
function _c(t, e) {
  if (
    (z(e),
    !(
      !t ||
      t.producerNode === void 0 ||
      t.producerIndexOfThis === void 0 ||
      t.producerLastReadVersion === void 0
    ))
  ) {
    if (ao(t))
      for (let r = t.nextProducerIndex; r < t.producerNode.length; r++)
        ki(t.producerNode[r], t.producerIndexOfThis[r]);
    for (; t.producerNode.length > t.nextProducerIndex; )
      t.producerNode.pop(),
        t.producerLastReadVersion.pop(),
        t.producerIndexOfThis.pop();
  }
}
function Sc(t) {
  Fi(t);
  for (let e = 0; e < t.producerNode.length; e++) {
    let r = t.producerNode[e],
      n = t.producerLastReadVersion[e];
    if (n !== r.version || (Kf(r), n !== r.version)) return !0;
  }
  return !1;
}
function Tc(t) {
  if ((Fi(t), ao(t)))
    for (let e = 0; e < t.producerNode.length; e++)
      ki(t.producerNode[e], t.producerIndexOfThis[e]);
  (t.producerNode.length =
    t.producerLastReadVersion.length =
    t.producerIndexOfThis.length =
      0),
    t.liveConsumerNode &&
      (t.liveConsumerNode.length = t.liveConsumerIndexOfThis.length = 0);
}
function eh(t, e, r) {
  if ((th(t), t.liveConsumerNode.length === 0 && nh(t)))
    for (let n = 0; n < t.producerNode.length; n++)
      t.producerIndexOfThis[n] = eh(t.producerNode[n], t, n);
  return t.liveConsumerIndexOfThis.push(r), t.liveConsumerNode.push(e) - 1;
}
function ki(t, e) {
  if ((th(t), t.liveConsumerNode.length === 1 && nh(t)))
    for (let n = 0; n < t.producerNode.length; n++)
      ki(t.producerNode[n], t.producerIndexOfThis[n]);
  let r = t.liveConsumerNode.length - 1;
  if (
    ((t.liveConsumerNode[e] = t.liveConsumerNode[r]),
    (t.liveConsumerIndexOfThis[e] = t.liveConsumerIndexOfThis[r]),
    t.liveConsumerNode.length--,
    t.liveConsumerIndexOfThis.length--,
    e < t.liveConsumerNode.length)
  ) {
    let n = t.liveConsumerIndexOfThis[e],
      o = t.liveConsumerNode[e];
    Fi(o), (o.producerIndexOfThis[n] = e);
  }
}
function ao(t) {
  return t.consumerIsAlwaysLive || (t?.liveConsumerNode?.length ?? 0) > 0;
}
function Fi(t) {
  (t.producerNode ??= []),
    (t.producerIndexOfThis ??= []),
    (t.producerLastReadVersion ??= []);
}
function th(t) {
  (t.liveConsumerNode ??= []), (t.liveConsumerIndexOfThis ??= []);
}
function nh(t) {
  return t.producerNode !== void 0;
}
function rh(t) {
  let e = Object.create(gb);
  e.computation = t;
  let r = () => {
    if ((Kf(e), Mc(e), e.value === Oi)) throw e.error;
    return e.value;
  };
  return (r[Mt] = e), r;
}
var Ec = Symbol("UNSET"),
  Ic = Symbol("COMPUTING"),
  Oi = Symbol("ERRORED"),
  gb = $(b({}, co), {
    value: Ec,
    dirty: !0,
    error: null,
    equal: Yf,
    producerMustRecompute(t) {
      return t.value === Ec || t.value === Ic;
    },
    producerRecomputeValue(t) {
      if (t.value === Ic) throw new Error("Detected cycle in computations.");
      let e = t.value;
      t.value = Ic;
      let r = Pi(t),
        n;
      try {
        n = t.computation();
      } catch (o) {
        (n = Oi), (t.error = o);
      } finally {
        _c(t, r);
      }
      if (e !== Ec && e !== Oi && n !== Oi && t.equal(e, n)) {
        t.value = e;
        return;
      }
      (t.value = n), t.version++;
    },
  });
function mb() {
  throw new Error();
}
var oh = mb;
function ih() {
  oh();
}
function sh(t) {
  oh = t;
}
var vb = null;
function ah(t) {
  let e = Object.create(lh);
  e.value = t;
  let r = () => (Mc(e), e.value);
  return (r[Mt] = e), r;
}
function xc(t, e) {
  Xf() || ih(), t.equal(t.value, e) || ((t.value = e), yb(t));
}
function ch(t, e) {
  Xf() || ih(), xc(t, e(t.value));
}
var lh = $(b({}, co), { equal: Yf, value: void 0 });
function yb(t) {
  t.version++, hb(), Jf(t), vb?.();
}
function R(t) {
  return typeof t == "function";
}
function or(t) {
  let r = t((n) => {
    Error.call(n), (n.stack = new Error().stack);
  });
  return (
    (r.prototype = Object.create(Error.prototype)),
    (r.prototype.constructor = r),
    r
  );
}
var Li = or(
  (t) =>
    function (r) {
      t(this),
        (this.message = r
          ? `${r.length} errors occurred during unsubscription:
${r.map((n, o) => `${o + 1}) ${n.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = r);
    }
);
function lo(t, e) {
  if (t) {
    let r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var ue = class t {
  constructor(e) {
    (this.initialTeardown = e),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let e;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: r } = this;
      if (r)
        if (((this._parentage = null), Array.isArray(r)))
          for (let i of r) i.remove(this);
        else r.remove(this);
      let { initialTeardown: n } = this;
      if (R(n))
        try {
          n();
        } catch (i) {
          e = i instanceof Li ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            uh(i);
          } catch (s) {
            (e = e ?? []),
              s instanceof Li ? (e = [...e, ...s.errors]) : e.push(s);
          }
      }
      if (e) throw new Li(e);
    }
  }
  add(e) {
    var r;
    if (e && e !== this)
      if (this.closed) uh(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this)) return;
          e._addParent(this);
        }
        (this._finalizers =
          (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }
  _hasParent(e) {
    let { _parentage: r } = this;
    return r === e || (Array.isArray(r) && r.includes(e));
  }
  _addParent(e) {
    let { _parentage: r } = this;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }
  _removeParent(e) {
    let { _parentage: r } = this;
    r === e ? (this._parentage = null) : Array.isArray(r) && lo(r, e);
  }
  remove(e) {
    let { _finalizers: r } = this;
    r && lo(r, e), e instanceof t && e._removeParent(this);
  }
};
ue.EMPTY = (() => {
  let t = new ue();
  return (t.closed = !0), t;
})();
var Ac = ue.EMPTY;
function Vi(t) {
  return (
    t instanceof ue ||
    (t && "closed" in t && R(t.remove) && R(t.add) && R(t.unsubscribe))
  );
}
function uh(t) {
  R(t) ? t() : t.unsubscribe();
}
var nt = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var ir = {
  setTimeout(t, e, ...r) {
    let { delegate: n } = ir;
    return n?.setTimeout ? n.setTimeout(t, e, ...r) : setTimeout(t, e, ...r);
  },
  clearTimeout(t) {
    let { delegate: e } = ir;
    return (e?.clearTimeout || clearTimeout)(t);
  },
  delegate: void 0,
};
function ji(t) {
  ir.setTimeout(() => {
    let { onUnhandledError: e } = nt;
    if (e) e(t);
    else throw t;
  });
}
function uo() {}
var dh = Nc("C", void 0, void 0);
function fh(t) {
  return Nc("E", void 0, t);
}
function hh(t) {
  return Nc("N", t, void 0);
}
function Nc(t, e, r) {
  return { kind: t, value: e, error: r };
}
var Mn = null;
function sr(t) {
  if (nt.useDeprecatedSynchronousErrorHandling) {
    let e = !Mn;
    if ((e && (Mn = { errorThrown: !1, error: null }), t(), e)) {
      let { errorThrown: r, error: n } = Mn;
      if (((Mn = null), r)) throw n;
    }
  } else t();
}
function ph(t) {
  nt.useDeprecatedSynchronousErrorHandling &&
    Mn &&
    ((Mn.errorThrown = !0), (Mn.error = t));
}
var _n = class extends ue {
    constructor(e) {
      super(),
        (this.isStopped = !1),
        e
          ? ((this.destination = e), Vi(e) && e.add(this))
          : (this.destination = bb);
    }
    static create(e, r, n) {
      return new ar(e, r, n);
    }
    next(e) {
      this.isStopped ? Oc(hh(e), this) : this._next(e);
    }
    error(e) {
      this.isStopped
        ? Oc(fh(e), this)
        : ((this.isStopped = !0), this._error(e));
    }
    complete() {
      this.isStopped ? Oc(dh, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(e) {
      this.destination.next(e);
    }
    _error(e) {
      try {
        this.destination.error(e);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  wb = Function.prototype.bind;
function Rc(t, e) {
  return wb.call(t, e);
}
var Pc = class {
    constructor(e) {
      this.partialObserver = e;
    }
    next(e) {
      let { partialObserver: r } = this;
      if (r.next)
        try {
          r.next(e);
        } catch (n) {
          Bi(n);
        }
    }
    error(e) {
      let { partialObserver: r } = this;
      if (r.error)
        try {
          r.error(e);
        } catch (n) {
          Bi(n);
        }
      else Bi(e);
    }
    complete() {
      let { partialObserver: e } = this;
      if (e.complete)
        try {
          e.complete();
        } catch (r) {
          Bi(r);
        }
    }
  },
  ar = class extends _n {
    constructor(e, r, n) {
      super();
      let o;
      if (R(e) || !e)
        o = { next: e ?? void 0, error: r ?? void 0, complete: n ?? void 0 };
      else {
        let i;
        this && nt.useDeprecatedNextContext
          ? ((i = Object.create(e)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: e.next && Rc(e.next, i),
              error: e.error && Rc(e.error, i),
              complete: e.complete && Rc(e.complete, i),
            }))
          : (o = e);
      }
      this.destination = new Pc(o);
    }
  };
function Bi(t) {
  nt.useDeprecatedSynchronousErrorHandling ? ph(t) : ji(t);
}
function Db(t) {
  throw t;
}
function Oc(t, e) {
  let { onStoppedNotification: r } = nt;
  r && ir.setTimeout(() => r(t, e));
}
var bb = { closed: !0, next: uo, error: Db, complete: uo };
var cr = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function Ue(t) {
  return t;
}
function kc(...t) {
  return Fc(t);
}
function Fc(t) {
  return t.length === 0
    ? Ue
    : t.length === 1
    ? t[0]
    : function (r) {
        return t.reduce((n, o) => o(n), r);
      };
}
var U = (() => {
  class t {
    constructor(r) {
      r && (this._subscribe = r);
    }
    lift(r) {
      let n = new t();
      return (n.source = this), (n.operator = r), n;
    }
    subscribe(r, n, o) {
      let i = Eb(r) ? r : new ar(r, n, o);
      return (
        sr(() => {
          let { operator: s, source: c } = this;
          i.add(
            s ? s.call(i, c) : c ? this._subscribe(i) : this._trySubscribe(i)
          );
        }),
        i
      );
    }
    _trySubscribe(r) {
      try {
        return this._subscribe(r);
      } catch (n) {
        r.error(n);
      }
    }
    forEach(r, n) {
      return (
        (n = gh(n)),
        new n((o, i) => {
          let s = new ar({
            next: (c) => {
              try {
                r(c);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(r) {
      var n;
      return (n = this.source) === null || n === void 0
        ? void 0
        : n.subscribe(r);
    }
    [cr]() {
      return this;
    }
    pipe(...r) {
      return Fc(r)(this);
    }
    toPromise(r) {
      return (
        (r = gh(r)),
        new r((n, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => n(i)
          );
        })
      );
    }
  }
  return (t.create = (e) => new t(e)), t;
})();
function gh(t) {
  var e;
  return (e = t ?? nt.Promise) !== null && e !== void 0 ? e : Promise;
}
function Cb(t) {
  return t && R(t.next) && R(t.error) && R(t.complete);
}
function Eb(t) {
  return (t && t instanceof _n) || (Cb(t) && Vi(t));
}
function Lc(t) {
  return R(t?.lift);
}
function H(t) {
  return (e) => {
    if (Lc(e))
      return e.lift(function (r) {
        try {
          return t(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function V(t, e, r, n, o) {
  return new Vc(t, e, r, n, o);
}
var Vc = class extends _n {
  constructor(e, r, n, o, i, s) {
    super(e),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = r
        ? function (c) {
            try {
              r(c);
            } catch (u) {
              e.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (c) {
            try {
              o(c);
            } catch (u) {
              e.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = n
        ? function () {
            try {
              n();
            } catch (c) {
              e.error(c);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var e;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: r } = this;
      super.unsubscribe(),
        !r && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    }
  }
};
function lr() {
  return H((t, e) => {
    let r = null;
    t._refCount++;
    let n = V(e, void 0, void 0, void 0, () => {
      if (!t || t._refCount <= 0 || 0 < --t._refCount) {
        r = null;
        return;
      }
      let o = t._connection,
        i = r;
      (r = null), o && (!i || o === i) && o.unsubscribe(), e.unsubscribe();
    });
    t.subscribe(n), n.closed || (r = t.connect());
  });
}
var ur = class extends U {
  constructor(e, r) {
    super(),
      (this.source = e),
      (this.subjectFactory = r),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Lc(e) && (this.lift = e.lift);
  }
  _subscribe(e) {
    return this.getSubject().subscribe(e);
  }
  getSubject() {
    let e = this._subject;
    return (
      (!e || e.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: e } = this;
    (this._subject = this._connection = null), e?.unsubscribe();
  }
  connect() {
    let e = this._connection;
    if (!e) {
      e = this._connection = new ue();
      let r = this.getSubject();
      e.add(
        this.source.subscribe(
          V(
            r,
            void 0,
            () => {
              this._teardown(), r.complete();
            },
            (n) => {
              this._teardown(), r.error(n);
            },
            () => this._teardown()
          )
        )
      ),
        e.closed && ((this._connection = null), (e = ue.EMPTY));
    }
    return e;
  }
  refCount() {
    return lr()(this);
  }
};
var mh = or(
  (t) =>
    function () {
      t(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    }
);
var ye = (() => {
    class t extends U {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(r) {
        let n = new $i(this, this);
        return (n.operator = r), n;
      }
      _throwIfClosed() {
        if (this.closed) throw new mh();
      }
      next(r) {
        sr(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let n of this.currentObservers) n.next(r);
          }
        });
      }
      error(r) {
        sr(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = r);
            let { observers: n } = this;
            for (; n.length; ) n.shift().error(r);
          }
        });
      }
      complete() {
        sr(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: r } = this;
            for (; r.length; ) r.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var r;
        return (
          ((r = this.observers) === null || r === void 0 ? void 0 : r.length) >
          0
        );
      }
      _trySubscribe(r) {
        return this._throwIfClosed(), super._trySubscribe(r);
      }
      _subscribe(r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }
      _innerSubscribe(r) {
        let { hasError: n, isStopped: o, observers: i } = this;
        return n || o
          ? Ac
          : ((this.currentObservers = null),
            i.push(r),
            new ue(() => {
              (this.currentObservers = null), lo(i, r);
            }));
      }
      _checkFinalizedStatuses(r) {
        let { hasError: n, thrownError: o, isStopped: i } = this;
        n ? r.error(o) : i && r.complete();
      }
      asObservable() {
        let r = new U();
        return (r.source = this), r;
      }
    }
    return (t.create = (e, r) => new $i(e, r)), t;
  })(),
  $i = class extends ye {
    constructor(e, r) {
      super(), (this.destination = e), (this.source = r);
    }
    next(e) {
      var r, n;
      (n =
        (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
        null ||
        n === void 0 ||
        n.call(r, e);
    }
    error(e) {
      var r, n;
      (n =
        (r = this.destination) === null || r === void 0 ? void 0 : r.error) ===
        null ||
        n === void 0 ||
        n.call(r, e);
    }
    complete() {
      var e, r;
      (r =
        (e = this.destination) === null || e === void 0
          ? void 0
          : e.complete) === null ||
        r === void 0 ||
        r.call(e);
    }
    _subscribe(e) {
      var r, n;
      return (n =
        (r = this.source) === null || r === void 0
          ? void 0
          : r.subscribe(e)) !== null && n !== void 0
        ? n
        : Ac;
    }
  };
var Ce = class extends ye {
  constructor(e) {
    super(), (this._value = e);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(e) {
    let r = super._subscribe(e);
    return !r.closed && e.next(this._value), r;
  }
  getValue() {
    let { hasError: e, thrownError: r, _value: n } = this;
    if (e) throw r;
    return this._throwIfClosed(), n;
  }
  next(e) {
    super.next((this._value = e));
  }
};
var He = new U((t) => t.complete());
function vh(t) {
  return t && R(t.schedule);
}
function yh(t) {
  return t[t.length - 1];
}
function Ui(t) {
  return R(yh(t)) ? t.pop() : void 0;
}
function Wt(t) {
  return vh(yh(t)) ? t.pop() : void 0;
}
function Dh(t, e, r, n) {
  function o(i) {
    return i instanceof r
      ? i
      : new r(function (s) {
          s(i);
        });
  }
  return new (r || (r = Promise))(function (i, s) {
    function c(g) {
      try {
        f(n.next(g));
      } catch (h) {
        s(h);
      }
    }
    function u(g) {
      try {
        f(n.throw(g));
      } catch (h) {
        s(h);
      }
    }
    function f(g) {
      g.done ? i(g.value) : o(g.value).then(c, u);
    }
    f((n = n.apply(t, e || [])).next());
  });
}
function wh(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Sn(t) {
  return this instanceof Sn ? ((this.v = t), this) : new Sn(t);
}
function bh(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
    )),
    c("next"),
    c("throw"),
    c("return", s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(v) {
    return function (D) {
      return Promise.resolve(D).then(v, h);
    };
  }
  function c(v, D) {
    n[v] &&
      ((o[v] = function (A) {
        return new Promise(function (C, I) {
          i.push([v, A, C, I]) > 1 || u(v, A);
        });
      }),
      D && (o[v] = D(o[v])));
  }
  function u(v, D) {
    try {
      f(n[v](D));
    } catch (A) {
      y(i[0][3], A);
    }
  }
  function f(v) {
    v.value instanceof Sn
      ? Promise.resolve(v.value.v).then(g, h)
      : y(i[0][2], v);
  }
  function g(v) {
    u("next", v);
  }
  function h(v) {
    u("throw", v);
  }
  function y(v, D) {
    v(D), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function Ch(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof wh == "function" ? wh(t) : t[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(i) {
    r[i] =
      t[i] &&
      function (s) {
        return new Promise(function (c, u) {
          (s = t[i](s)), o(c, u, s.done, s.value);
        });
      };
  }
  function o(i, s, c, u) {
    Promise.resolve(u).then(function (f) {
      i({ value: f, done: c });
    }, s);
  }
}
var Hi = (t) => t && typeof t.length == "number" && typeof t != "function";
function zi(t) {
  return R(t?.then);
}
function Gi(t) {
  return R(t[cr]);
}
function qi(t) {
  return Symbol.asyncIterator && R(t?.[Symbol.asyncIterator]);
}
function Wi(t) {
  return new TypeError(
    `You provided ${
      t !== null && typeof t == "object" ? "an invalid object" : `'${t}'`
    } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
  );
}
function Ib() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Zi = Ib();
function Yi(t) {
  return R(t?.[Zi]);
}
function Qi(t) {
  return bh(this, arguments, function* () {
    let r = t.getReader();
    try {
      for (;;) {
        let { value: n, done: o } = yield Sn(r.read());
        if (o) return yield Sn(void 0);
        yield yield Sn(n);
      }
    } finally {
      r.releaseLock();
    }
  });
}
function Ki(t) {
  return R(t?.getReader);
}
function de(t) {
  if (t instanceof U) return t;
  if (t != null) {
    if (Gi(t)) return Mb(t);
    if (Hi(t)) return _b(t);
    if (zi(t)) return Sb(t);
    if (qi(t)) return Eh(t);
    if (Yi(t)) return Tb(t);
    if (Ki(t)) return xb(t);
  }
  throw Wi(t);
}
function Mb(t) {
  return new U((e) => {
    let r = t[cr]();
    if (R(r.subscribe)) return r.subscribe(e);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function _b(t) {
  return new U((e) => {
    for (let r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
    e.complete();
  });
}
function Sb(t) {
  return new U((e) => {
    t.then(
      (r) => {
        e.closed || (e.next(r), e.complete());
      },
      (r) => e.error(r)
    ).then(null, ji);
  });
}
function Tb(t) {
  return new U((e) => {
    for (let r of t) if ((e.next(r), e.closed)) return;
    e.complete();
  });
}
function Eh(t) {
  return new U((e) => {
    Ab(t, e).catch((r) => e.error(r));
  });
}
function xb(t) {
  return Eh(Qi(t));
}
function Ab(t, e) {
  var r, n, o, i;
  return Dh(this, void 0, void 0, function* () {
    try {
      for (r = Ch(t); (n = yield r.next()), !n.done; ) {
        let s = n.value;
        if ((e.next(s), e.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        n && !n.done && (i = r.return) && (yield i.call(r));
      } finally {
        if (o) throw o.error;
      }
    }
    e.complete();
  });
}
function Oe(t, e, r, n = 0, o = !1) {
  let i = e.schedule(function () {
    r(), o ? t.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if ((t.add(i), !o)) return i;
}
function Ji(t, e = 0) {
  return H((r, n) => {
    r.subscribe(
      V(
        n,
        (o) => Oe(n, t, () => n.next(o), e),
        () => Oe(n, t, () => n.complete(), e),
        (o) => Oe(n, t, () => n.error(o), e)
      )
    );
  });
}
function Xi(t, e = 0) {
  return H((r, n) => {
    n.add(t.schedule(() => r.subscribe(n), e));
  });
}
function Ih(t, e) {
  return de(t).pipe(Xi(e), Ji(e));
}
function Mh(t, e) {
  return de(t).pipe(Xi(e), Ji(e));
}
function _h(t, e) {
  return new U((r) => {
    let n = 0;
    return e.schedule(function () {
      n === t.length
        ? r.complete()
        : (r.next(t[n++]), r.closed || this.schedule());
    });
  });
}
function Sh(t, e) {
  return new U((r) => {
    let n;
    return (
      Oe(r, e, () => {
        (n = t[Zi]()),
          Oe(
            r,
            e,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = n.next());
              } catch (s) {
                r.error(s);
                return;
              }
              i ? r.complete() : r.next(o);
            },
            0,
            !0
          );
      }),
      () => R(n?.return) && n.return()
    );
  });
}
function es(t, e) {
  if (!t) throw new Error("Iterable cannot be null");
  return new U((r) => {
    Oe(r, e, () => {
      let n = t[Symbol.asyncIterator]();
      Oe(
        r,
        e,
        () => {
          n.next().then((o) => {
            o.done ? r.complete() : r.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function Th(t, e) {
  return es(Qi(t), e);
}
function xh(t, e) {
  if (t != null) {
    if (Gi(t)) return Ih(t, e);
    if (Hi(t)) return _h(t, e);
    if (zi(t)) return Mh(t, e);
    if (qi(t)) return es(t, e);
    if (Yi(t)) return Sh(t, e);
    if (Ki(t)) return Th(t, e);
  }
  throw Wi(t);
}
function ne(t, e) {
  return e ? xh(t, e) : de(t);
}
function x(...t) {
  let e = Wt(t);
  return ne(t, e);
}
function dr(t, e) {
  let r = R(t) ? t : () => t,
    n = (o) => o.error(r());
  return new U(e ? (o) => e.schedule(n, 0, o) : n);
}
function jc(t) {
  return !!t && (t instanceof U || (R(t.lift) && R(t.subscribe)));
}
var _t = or(
  (t) =>
    function () {
      t(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    }
);
function O(t, e) {
  return H((r, n) => {
    let o = 0;
    r.subscribe(
      V(n, (i) => {
        n.next(t.call(e, i, o++));
      })
    );
  });
}
var { isArray: Nb } = Array;
function Rb(t, e) {
  return Nb(e) ? t(...e) : t(e);
}
function ts(t) {
  return O((e) => Rb(t, e));
}
var { isArray: Ob } = Array,
  { getPrototypeOf: Pb, prototype: kb, keys: Fb } = Object;
function ns(t) {
  if (t.length === 1) {
    let e = t[0];
    if (Ob(e)) return { args: e, keys: null };
    if (Lb(e)) {
      let r = Fb(e);
      return { args: r.map((n) => e[n]), keys: r };
    }
  }
  return { args: t, keys: null };
}
function Lb(t) {
  return t && typeof t == "object" && Pb(t) === kb;
}
function rs(t, e) {
  return t.reduce((r, n, o) => ((r[n] = e[o]), r), {});
}
function fo(...t) {
  let e = Wt(t),
    r = Ui(t),
    { args: n, keys: o } = ns(t);
  if (n.length === 0) return ne([], e);
  let i = new U(Vb(n, e, o ? (s) => rs(o, s) : Ue));
  return r ? i.pipe(ts(r)) : i;
}
function Vb(t, e, r = Ue) {
  return (n) => {
    Ah(
      e,
      () => {
        let { length: o } = t,
          i = new Array(o),
          s = o,
          c = o;
        for (let u = 0; u < o; u++)
          Ah(
            e,
            () => {
              let f = ne(t[u], e),
                g = !1;
              f.subscribe(
                V(
                  n,
                  (h) => {
                    (i[u] = h), g || ((g = !0), c--), c || n.next(r(i.slice()));
                  },
                  () => {
                    --s || n.complete();
                  }
                )
              );
            },
            n
          );
      },
      n
    );
  };
}
function Ah(t, e, r) {
  t ? Oe(r, t, e) : e();
}
function Nh(t, e, r, n, o, i, s, c) {
  let u = [],
    f = 0,
    g = 0,
    h = !1,
    y = () => {
      h && !u.length && !f && e.complete();
    },
    v = (A) => (f < n ? D(A) : u.push(A)),
    D = (A) => {
      i && e.next(A), f++;
      let C = !1;
      de(r(A, g++)).subscribe(
        V(
          e,
          (I) => {
            o?.(I), i ? v(I) : e.next(I);
          },
          () => {
            C = !0;
          },
          void 0,
          () => {
            if (C)
              try {
                for (f--; u.length && f < n; ) {
                  let I = u.shift();
                  s ? Oe(e, s, () => D(I)) : D(I);
                }
                y();
              } catch (I) {
                e.error(I);
              }
          }
        )
      );
    };
  return (
    t.subscribe(
      V(e, v, () => {
        (h = !0), y();
      })
    ),
    () => {
      c?.();
    }
  );
}
function fe(t, e, r = 1 / 0) {
  return R(e)
    ? fe((n, o) => O((i, s) => e(n, i, o, s))(de(t(n, o))), r)
    : (typeof e == "number" && (r = e), H((n, o) => Nh(n, o, t, r)));
}
function fr(t = 1 / 0) {
  return fe(Ue, t);
}
function Rh() {
  return fr(1);
}
function hr(...t) {
  return Rh()(ne(t, Wt(t)));
}
function os(t) {
  return new U((e) => {
    de(t()).subscribe(e);
  });
}
function Bc(...t) {
  let e = Ui(t),
    { args: r, keys: n } = ns(t),
    o = new U((i) => {
      let { length: s } = r;
      if (!s) {
        i.complete();
        return;
      }
      let c = new Array(s),
        u = s,
        f = s;
      for (let g = 0; g < s; g++) {
        let h = !1;
        de(r[g]).subscribe(
          V(
            i,
            (y) => {
              h || ((h = !0), f--), (c[g] = y);
            },
            () => u--,
            void 0,
            () => {
              (!u || !h) && (f || i.next(n ? rs(n, c) : c), i.complete());
            }
          )
        );
      }
    });
  return e ? o.pipe(ts(e)) : o;
}
function Pe(t, e) {
  return H((r, n) => {
    let o = 0;
    r.subscribe(V(n, (i) => t.call(e, i, o++) && n.next(i)));
  });
}
function Zt(t) {
  return H((e, r) => {
    let n = null,
      o = !1,
      i;
    (n = e.subscribe(
      V(r, void 0, void 0, (s) => {
        (i = de(t(s, Zt(t)(e)))),
          n ? (n.unsubscribe(), (n = null), i.subscribe(r)) : (o = !0);
      })
    )),
      o && (n.unsubscribe(), (n = null), i.subscribe(r));
  });
}
function Oh(t, e, r, n, o) {
  return (i, s) => {
    let c = r,
      u = e,
      f = 0;
    i.subscribe(
      V(
        s,
        (g) => {
          let h = f++;
          (u = c ? t(u, g, h) : ((c = !0), g)), n && s.next(u);
        },
        o &&
          (() => {
            c && s.next(u), s.complete();
          })
      )
    );
  };
}
function St(t, e) {
  return R(e) ? fe(t, e, 1) : fe(t, 1);
}
function Yt(t) {
  return H((e, r) => {
    let n = !1;
    e.subscribe(
      V(
        r,
        (o) => {
          (n = !0), r.next(o);
        },
        () => {
          n || r.next(t), r.complete();
        }
      )
    );
  });
}
function Tt(t) {
  return t <= 0
    ? () => He
    : H((e, r) => {
        let n = 0;
        e.subscribe(
          V(r, (o) => {
            ++n <= t && (r.next(o), t <= n && r.complete());
          })
        );
      });
}
function $c(t) {
  return O(() => t);
}
function is(t = jb) {
  return H((e, r) => {
    let n = !1;
    e.subscribe(
      V(
        r,
        (o) => {
          (n = !0), r.next(o);
        },
        () => (n ? r.complete() : r.error(t()))
      )
    );
  });
}
function jb() {
  return new _t();
}
function Tn(t) {
  return H((e, r) => {
    try {
      e.subscribe(r);
    } finally {
      r.add(t);
    }
  });
}
function ft(t, e) {
  let r = arguments.length >= 2;
  return (n) =>
    n.pipe(
      t ? Pe((o, i) => t(o, i, n)) : Ue,
      Tt(1),
      r ? Yt(e) : is(() => new _t())
    );
}
function pr(t) {
  return t <= 0
    ? () => He
    : H((e, r) => {
        let n = [];
        e.subscribe(
          V(
            r,
            (o) => {
              n.push(o), t < n.length && n.shift();
            },
            () => {
              for (let o of n) r.next(o);
              r.complete();
            },
            void 0,
            () => {
              n = null;
            }
          )
        );
      });
}
function Uc(t, e) {
  let r = arguments.length >= 2;
  return (n) =>
    n.pipe(
      t ? Pe((o, i) => t(o, i, n)) : Ue,
      pr(1),
      r ? Yt(e) : is(() => new _t())
    );
}
function Hc(t, e) {
  return H(Oh(t, e, arguments.length >= 2, !0));
}
function zc(...t) {
  let e = Wt(t);
  return H((r, n) => {
    (e ? hr(t, r, e) : hr(t, r)).subscribe(n);
  });
}
function ke(t, e) {
  return H((r, n) => {
    let o = null,
      i = 0,
      s = !1,
      c = () => s && !o && n.complete();
    r.subscribe(
      V(
        n,
        (u) => {
          o?.unsubscribe();
          let f = 0,
            g = i++;
          de(t(u, g)).subscribe(
            (o = V(
              n,
              (h) => n.next(e ? e(u, h, g, f++) : h),
              () => {
                (o = null), c();
              }
            ))
          );
        },
        () => {
          (s = !0), c();
        }
      )
    );
  });
}
function Gc(t) {
  return H((e, r) => {
    de(t).subscribe(V(r, () => r.complete(), uo)), !r.closed && e.subscribe(r);
  });
}
function we(t, e, r) {
  let n = R(t) || e || r ? { next: t, error: e, complete: r } : t;
  return n
    ? H((o, i) => {
        var s;
        (s = n.subscribe) === null || s === void 0 || s.call(n);
        let c = !0;
        o.subscribe(
          V(
            i,
            (u) => {
              var f;
              (f = n.next) === null || f === void 0 || f.call(n, u), i.next(u);
            },
            () => {
              var u;
              (c = !1),
                (u = n.complete) === null || u === void 0 || u.call(n),
                i.complete();
            },
            (u) => {
              var f;
              (c = !1),
                (f = n.error) === null || f === void 0 || f.call(n, u),
                i.error(u);
            },
            () => {
              var u, f;
              c && ((u = n.unsubscribe) === null || u === void 0 || u.call(n)),
                (f = n.finalize) === null || f === void 0 || f.call(n);
            }
          )
        );
      })
    : Ue;
}
var wp = "https://g.co/ng/security#xss",
  _ = class extends Error {
    constructor(e, r) {
      super(Bs(e, r)), (this.code = e);
    }
  };
function Bs(t, e) {
  return `${`NG0${Math.abs(t)}`}${e ? ": " + e : ""}`;
}
function bo(t) {
  return { toString: t }.toString();
}
var ss = "__parameters__";
function Bb(t) {
  return function (...r) {
    if (t) {
      let n = t(...r);
      for (let o in n) this[o] = n[o];
    }
  };
}
function Dp(t, e, r) {
  return bo(() => {
    let n = Bb(e);
    function o(...i) {
      if (this instanceof o) return n.apply(this, i), this;
      let s = new o(...i);
      return (c.annotation = s), c;
      function c(u, f, g) {
        let h = u.hasOwnProperty(ss)
          ? u[ss]
          : Object.defineProperty(u, ss, { value: [] })[ss];
        for (; h.length <= g; ) h.push(null);
        return (h[g] = h[g] || []).push(s), u;
      }
    }
    return (
      r && (o.prototype = Object.create(r.prototype)),
      (o.prototype.ngMetadataName = t),
      (o.annotationCls = o),
      o
    );
  });
}
var il = globalThis;
function X(t) {
  for (let e in t) if (t[e] === X) return e;
  throw Error("Could not find renamed property on target object.");
}
function $b(t, e) {
  for (let r in e) e.hasOwnProperty(r) && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function Fe(t) {
  if (typeof t == "string") return t;
  if (Array.isArray(t)) return "[" + t.map(Fe).join(", ") + "]";
  if (t == null) return "" + t;
  if (t.overriddenName) return `${t.overriddenName}`;
  if (t.name) return `${t.name}`;
  let e = t.toString();
  if (e == null) return "" + e;
  let r = e.indexOf(`
`);
  return r === -1 ? e : e.substring(0, r);
}
function Ph(t, e) {
  return t == null || t === ""
    ? e === null
      ? ""
      : e
    : e == null || e === ""
    ? t
    : t + " " + e;
}
var Ub = X({ __forward_ref__: X });
function Bn(t) {
  return (
    (t.__forward_ref__ = Bn),
    (t.toString = function () {
      return Fe(this());
    }),
    t
  );
}
function Se(t) {
  return bp(t) ? t() : t;
}
function bp(t) {
  return (
    typeof t == "function" && t.hasOwnProperty(Ub) && t.__forward_ref__ === Bn
  );
}
function M(t) {
  return {
    token: t.token,
    providedIn: t.providedIn || null,
    factory: t.factory,
    value: void 0,
  };
}
function Rt(t) {
  return { providers: t.providers || [], imports: t.imports || [] };
}
function $s(t) {
  return kh(t, Ep) || kh(t, Ip);
}
function Cp(t) {
  return $s(t) !== null;
}
function kh(t, e) {
  return t.hasOwnProperty(e) ? t[e] : null;
}
function Hb(t) {
  let e = t && (t[Ep] || t[Ip]);
  return e || null;
}
function Fh(t) {
  return t && (t.hasOwnProperty(Lh) || t.hasOwnProperty(zb)) ? t[Lh] : null;
}
var Ep = X({ ɵprov: X }),
  Lh = X({ ɵinj: X }),
  Ip = X({ ngInjectableDef: X }),
  zb = X({ ngInjectorDef: X }),
  S = class {
    constructor(e, r) {
      (this._desc = e),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof r == "number"
          ? (this.__NG_ELEMENT_ID__ = r)
          : r !== void 0 &&
            (this.ɵprov = M({
              token: this,
              providedIn: r.providedIn || "root",
              factory: r.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function Mp(t) {
  return t && !!t.ɵproviders;
}
var Gb = X({ ɵcmp: X }),
  qb = X({ ɵdir: X }),
  Wb = X({ ɵpipe: X }),
  Zb = X({ ɵmod: X }),
  ms = X({ ɵfac: X }),
  po = X({ __NG_ELEMENT_ID__: X }),
  Vh = X({ __NG_ENV_ID__: X });
function br(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function Yb(t) {
  return typeof t == "function"
    ? t.name || t.toString()
    : typeof t == "object" && t != null && typeof t.type == "function"
    ? t.type.name || t.type.toString()
    : br(t);
}
function Qb(t, e) {
  let r = e ? `. Dependency path: ${e.join(" > ")} > ${t}` : "";
  throw new _(-200, t);
}
function Yl(t, e) {
  throw new _(-201, !1);
}
var F = (function (t) {
    return (
      (t[(t.Default = 0)] = "Default"),
      (t[(t.Host = 1)] = "Host"),
      (t[(t.Self = 2)] = "Self"),
      (t[(t.SkipSelf = 4)] = "SkipSelf"),
      (t[(t.Optional = 8)] = "Optional"),
      t
    );
  })(F || {}),
  sl;
function _p() {
  return sl;
}
function We(t) {
  let e = sl;
  return (sl = t), e;
}
function Sp(t, e, r) {
  let n = $s(t);
  if (n && n.providedIn == "root")
    return n.value === void 0 ? (n.value = n.factory()) : n.value;
  if (r & F.Optional) return null;
  if (e !== void 0) return e;
  Yl(t, "Injector");
}
var Kb = {},
  go = Kb,
  al = "__NG_DI_FLAG__",
  vs = "ngTempTokenPath",
  Jb = "ngTokenPath",
  Xb = /\n/gm,
  eC = "\u0275",
  jh = "__source",
  wr;
function tC() {
  return wr;
}
function Qt(t) {
  let e = wr;
  return (wr = t), e;
}
function nC(t, e = F.Default) {
  if (wr === void 0) throw new _(-203, !1);
  return wr === null
    ? Sp(t, void 0, e)
    : wr.get(t, e & F.Optional ? null : void 0, e);
}
function T(t, e = F.Default) {
  return (_p() || nC)(Se(t), e);
}
function w(t, e = F.Default) {
  return T(t, Us(e));
}
function Us(t) {
  return typeof t > "u" || typeof t == "number"
    ? t
    : 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4);
}
function cl(t) {
  let e = [];
  for (let r = 0; r < t.length; r++) {
    let n = Se(t[r]);
    if (Array.isArray(n)) {
      if (n.length === 0) throw new _(900, !1);
      let o,
        i = F.Default;
      for (let s = 0; s < n.length; s++) {
        let c = n[s],
          u = rC(c);
        typeof u == "number" ? (u === -1 ? (o = c.token) : (i |= u)) : (o = c);
      }
      e.push(T(o, i));
    } else e.push(T(n));
  }
  return e;
}
function Tp(t, e) {
  return (t[al] = e), (t.prototype[al] = e), t;
}
function rC(t) {
  return t[al];
}
function oC(t, e, r, n) {
  let o = t[vs];
  throw (
    (e[jh] && o.unshift(e[jh]),
    (t.message = iC(
      `
` + t.message,
      o,
      r,
      n
    )),
    (t[Jb] = o),
    (t[vs] = null),
    t)
  );
}
function iC(t, e, r, n = null) {
  t =
    t &&
    t.charAt(0) ===
      `
` &&
    t.charAt(1) == eC
      ? t.slice(2)
      : t;
  let o = Fe(e);
  if (Array.isArray(e)) o = e.map(Fe).join(" -> ");
  else if (typeof e == "object") {
    let i = [];
    for (let s in e)
      if (e.hasOwnProperty(s)) {
        let c = e[s];
        i.push(s + ":" + (typeof c == "string" ? JSON.stringify(c) : Fe(c)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${r}${n ? "(" + n + ")" : ""}[${o}]: ${t.replace(
    Xb,
    `
  `
  )}`;
}
var Hs = Tp(Dp("Optional"), 8);
var Ql = Tp(Dp("SkipSelf"), 4);
function Cr(t, e) {
  let r = t.hasOwnProperty(ms);
  return r ? t[ms] : null;
}
function Kl(t, e) {
  t.forEach((r) => (Array.isArray(r) ? Kl(r, e) : e(r)));
}
function xp(t, e, r) {
  e >= t.length ? t.push(r) : t.splice(e, 0, r);
}
function ys(t, e) {
  return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
}
function sC(t, e, r, n) {
  let o = t.length;
  if (o == e) t.push(r, n);
  else if (o === 1) t.push(n, t[0]), (t[0] = r);
  else {
    for (o--, t.push(t[o - 1], t[o]); o > e; ) {
      let i = o - 2;
      (t[o] = t[i]), o--;
    }
    (t[e] = r), (t[e + 1] = n);
  }
}
function aC(t, e, r) {
  let n = Co(t, e);
  return n >= 0 ? (t[n | 1] = r) : ((n = ~n), sC(t, n, e, r)), n;
}
function qc(t, e) {
  let r = Co(t, e);
  if (r >= 0) return t[r | 1];
}
function Co(t, e) {
  return cC(t, e, 1);
}
function cC(t, e, r) {
  let n = 0,
    o = t.length >> r;
  for (; o !== n; ) {
    let i = n + ((o - n) >> 1),
      s = t[i << r];
    if (e === s) return i << r;
    s > e ? (o = i) : (n = i + 1);
  }
  return ~(o << r);
}
var Er = {},
  Ze = [],
  Ir = new S(""),
  Ap = new S("", -1),
  Np = new S(""),
  ws = class {
    get(e, r = go) {
      if (r === go) {
        let n = new Error(`NullInjectorError: No provider for ${Fe(e)}!`);
        throw ((n.name = "NullInjectorError"), n);
      }
      return r;
    }
  },
  Rp = (function (t) {
    return (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default"), t;
  })(Rp || {}),
  gt = (function (t) {
    return (
      (t[(t.Emulated = 0)] = "Emulated"),
      (t[(t.None = 2)] = "None"),
      (t[(t.ShadowDom = 3)] = "ShadowDom"),
      t
    );
  })(gt || {}),
  Xt = (function (t) {
    return (
      (t[(t.None = 0)] = "None"),
      (t[(t.SignalBased = 1)] = "SignalBased"),
      (t[(t.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      t
    );
  })(Xt || {});
function lC(t, e, r) {
  let n = t.length;
  for (;;) {
    let o = t.indexOf(e, r);
    if (o === -1) return o;
    if (o === 0 || t.charCodeAt(o - 1) <= 32) {
      let i = e.length;
      if (o + i === n || t.charCodeAt(o + i) <= 32) return o;
    }
    r = o + 1;
  }
}
function ll(t, e, r) {
  let n = 0;
  for (; n < r.length; ) {
    let o = r[n];
    if (typeof o == "number") {
      if (o !== 0) break;
      n++;
      let i = r[n++],
        s = r[n++],
        c = r[n++];
      t.setAttribute(e, s, c, i);
    } else {
      let i = o,
        s = r[++n];
      uC(i) ? t.setProperty(e, i, s) : t.setAttribute(e, i, s), n++;
    }
  }
  return n;
}
function Op(t) {
  return t === 3 || t === 4 || t === 6;
}
function uC(t) {
  return t.charCodeAt(0) === 64;
}
function mo(t, e) {
  if (!(e === null || e.length === 0))
    if (t === null || t.length === 0) t = e.slice();
    else {
      let r = -1;
      for (let n = 0; n < e.length; n++) {
        let o = e[n];
        typeof o == "number"
          ? (r = o)
          : r === 0 ||
            (r === -1 || r === 2
              ? Bh(t, r, o, null, e[++n])
              : Bh(t, r, o, null, null));
      }
    }
  return t;
}
function Bh(t, e, r, n, o) {
  let i = 0,
    s = t.length;
  if (e === -1) s = -1;
  else
    for (; i < t.length; ) {
      let c = t[i++];
      if (typeof c == "number") {
        if (c === e) {
          s = -1;
          break;
        } else if (c > e) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < t.length; ) {
    let c = t[i];
    if (typeof c == "number") break;
    if (c === r) {
      if (n === null) {
        o !== null && (t[i + 1] = o);
        return;
      } else if (n === t[i + 1]) {
        t[i + 2] = o;
        return;
      }
    }
    i++, n !== null && i++, o !== null && i++;
  }
  s !== -1 && (t.splice(s, 0, e), (i = s + 1)),
    t.splice(i++, 0, r),
    n !== null && t.splice(i++, 0, n),
    o !== null && t.splice(i++, 0, o);
}
var Pp = "ng-template";
function dC(t, e, r, n) {
  let o = 0;
  if (n) {
    for (; o < e.length && typeof e[o] == "string"; o += 2)
      if (e[o] === "class" && lC(e[o + 1].toLowerCase(), r, 0) !== -1)
        return !0;
  } else if (Jl(t)) return !1;
  if (((o = e.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < e.length && typeof (i = e[o]) == "string"; )
      if (i.toLowerCase() === r) return !0;
  }
  return !1;
}
function Jl(t) {
  return t.type === 4 && t.value !== Pp;
}
function fC(t, e, r) {
  let n = t.type === 4 && !r ? Pp : t.value;
  return e === n;
}
function hC(t, e, r) {
  let n = 4,
    o = t.attrs,
    i = o !== null ? mC(o) : 0,
    s = !1;
  for (let c = 0; c < e.length; c++) {
    let u = e[c];
    if (typeof u == "number") {
      if (!s && !rt(n) && !rt(u)) return !1;
      if (s && rt(u)) continue;
      (s = !1), (n = u | (n & 1));
      continue;
    }
    if (!s)
      if (n & 4) {
        if (
          ((n = 2 | (n & 1)),
          (u !== "" && !fC(t, u, r)) || (u === "" && e.length === 1))
        ) {
          if (rt(n)) return !1;
          s = !0;
        }
      } else if (n & 8) {
        if (o === null || !dC(t, o, u, r)) {
          if (rt(n)) return !1;
          s = !0;
        }
      } else {
        let f = e[++c],
          g = pC(u, o, Jl(t), r);
        if (g === -1) {
          if (rt(n)) return !1;
          s = !0;
          continue;
        }
        if (f !== "") {
          let h;
          if (
            (g > i ? (h = "") : (h = o[g + 1].toLowerCase()), n & 2 && f !== h)
          ) {
            if (rt(n)) return !1;
            s = !0;
          }
        }
      }
  }
  return rt(n) || s;
}
function rt(t) {
  return (t & 1) === 0;
}
function pC(t, e, r, n) {
  if (e === null) return -1;
  let o = 0;
  if (n || !r) {
    let i = !1;
    for (; o < e.length; ) {
      let s = e[o];
      if (s === t) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let c = e[++o];
        for (; typeof c == "string"; ) c = e[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return vC(e, t);
}
function gC(t, e, r = !1) {
  for (let n = 0; n < e.length; n++) if (hC(t, e[n], r)) return !0;
  return !1;
}
function mC(t) {
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    if (Op(r)) return e;
  }
  return t.length;
}
function vC(t, e) {
  let r = t.indexOf(4);
  if (r > -1)
    for (r++; r < t.length; ) {
      let n = t[r];
      if (typeof n == "number") return -1;
      if (n === e) return r;
      r++;
    }
  return -1;
}
function $h(t, e) {
  return t ? ":not(" + e.trim() + ")" : e;
}
function yC(t) {
  let e = t[0],
    r = 1,
    n = 2,
    o = "",
    i = !1;
  for (; r < t.length; ) {
    let s = t[r];
    if (typeof s == "string")
      if (n & 2) {
        let c = t[++r];
        o += "[" + s + (c.length > 0 ? '="' + c + '"' : "") + "]";
      } else n & 8 ? (o += "." + s) : n & 4 && (o += " " + s);
    else
      o !== "" && !rt(s) && ((e += $h(i, o)), (o = "")),
        (n = s),
        (i = i || !rt(n));
    r++;
  }
  return o !== "" && (e += $h(i, o)), e;
}
function wC(t) {
  return t.map(yC).join(",");
}
function DC(t) {
  let e = [],
    r = [],
    n = 1,
    o = 2;
  for (; n < t.length; ) {
    let i = t[n];
    if (typeof i == "string")
      o === 2 ? i !== "" && e.push(i, t[++n]) : o === 8 && r.push(i);
    else {
      if (!rt(o)) break;
      o = i;
    }
    n++;
  }
  return { attrs: e, classes: r };
}
function Le(t) {
  return bo(() => {
    let e = jp(t),
      r = $(b({}, e), {
        decls: t.decls,
        vars: t.vars,
        template: t.template,
        consts: t.consts || null,
        ngContentSelectors: t.ngContentSelectors,
        onPush: t.changeDetection === Rp.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (e.standalone && t.dependencies) || null,
        getStandaloneInjector: null,
        signals: t.signals ?? !1,
        data: t.data || {},
        encapsulation: t.encapsulation || gt.Emulated,
        styles: t.styles || Ze,
        _: null,
        schemas: t.schemas || null,
        tView: null,
        id: "",
      });
    Bp(r);
    let n = t.dependencies;
    return (
      (r.directiveDefs = Hh(n, !1)), (r.pipeDefs = Hh(n, !0)), (r.id = EC(r)), r
    );
  });
}
function bC(t) {
  return en(t) || kp(t);
}
function CC(t) {
  return t !== null;
}
function Ot(t) {
  return bo(() => ({
    type: t.type,
    bootstrap: t.bootstrap || Ze,
    declarations: t.declarations || Ze,
    imports: t.imports || Ze,
    exports: t.exports || Ze,
    transitiveCompileScopes: null,
    schemas: t.schemas || null,
    id: t.id || null,
  }));
}
function Uh(t, e) {
  if (t == null) return Er;
  let r = {};
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let o = t[n],
        i,
        s,
        c = Xt.None;
      Array.isArray(o)
        ? ((c = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        e ? ((r[i] = c !== Xt.None ? [n, c] : n), (e[i] = s)) : (r[i] = n);
    }
  return r;
}
function _e(t) {
  return bo(() => {
    let e = jp(t);
    return Bp(e), e;
  });
}
function en(t) {
  return t[Gb] || null;
}
function kp(t) {
  return t[qb] || null;
}
function Fp(t) {
  return t[Wb] || null;
}
function Lp(t) {
  let e = en(t) || kp(t) || Fp(t);
  return e !== null ? e.standalone : !1;
}
function Vp(t, e) {
  let r = t[Zb] || null;
  if (!r && e === !0)
    throw new Error(`Type ${Fe(t)} does not have '\u0275mod' property.`);
  return r;
}
function jp(t) {
  let e = {};
  return {
    type: t.type,
    providersResolver: null,
    factory: null,
    hostBindings: t.hostBindings || null,
    hostVars: t.hostVars || 0,
    hostAttrs: t.hostAttrs || null,
    contentQueries: t.contentQueries || null,
    declaredInputs: e,
    inputTransforms: null,
    inputConfig: t.inputs || Er,
    exportAs: t.exportAs || null,
    standalone: t.standalone === !0,
    signals: t.signals === !0,
    selectors: t.selectors || Ze,
    viewQuery: t.viewQuery || null,
    features: t.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Uh(t.inputs, e),
    outputs: Uh(t.outputs),
    debugInfo: null,
  };
}
function Bp(t) {
  t.features?.forEach((e) => e(t));
}
function Hh(t, e) {
  if (!t) return null;
  let r = e ? Fp : bC;
  return () => (typeof t == "function" ? t() : t).map((n) => r(n)).filter(CC);
}
function EC(t) {
  let e = 0,
    r = [
      t.selectors,
      t.ngContentSelectors,
      t.hostVars,
      t.hostAttrs,
      t.consts,
      t.vars,
      t.decls,
      t.encapsulation,
      t.standalone,
      t.signals,
      t.exportAs,
      JSON.stringify(t.inputs),
      JSON.stringify(t.outputs),
      Object.getOwnPropertyNames(t.type.prototype),
      !!t.contentQueries,
      !!t.viewQuery,
    ].join("|");
  for (let o of r) e = (Math.imul(31, e) + o.charCodeAt(0)) << 0;
  return (e += 2147483648), "c" + e;
}
function Eo(t) {
  return { ɵproviders: t };
}
function IC(...t) {
  return { ɵproviders: $p(!0, t), ɵfromNgModule: !0 };
}
function $p(t, ...e) {
  let r = [],
    n = new Set(),
    o,
    i = (s) => {
      r.push(s);
    };
  return (
    Kl(e, (s) => {
      let c = s;
      ul(c, i, [], n) && ((o ||= []), o.push(c));
    }),
    o !== void 0 && Up(o, i),
    r
  );
}
function Up(t, e) {
  for (let r = 0; r < t.length; r++) {
    let { ngModule: n, providers: o } = t[r];
    Xl(o, (i) => {
      e(i, n);
    });
  }
}
function ul(t, e, r, n) {
  if (((t = Se(t)), !t)) return !1;
  let o = null,
    i = Fh(t),
    s = !i && en(t);
  if (!i && !s) {
    let u = t.ngModule;
    if (((i = Fh(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = t;
  }
  let c = n.has(o);
  if (s) {
    if (c) return !1;
    if ((n.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let f of u) ul(f, e, r, n);
    }
  } else if (i) {
    if (i.imports != null && !c) {
      n.add(o);
      let f;
      try {
        Kl(i.imports, (g) => {
          ul(g, e, r, n) && ((f ||= []), f.push(g));
        });
      } finally {
      }
      f !== void 0 && Up(f, e);
    }
    if (!c) {
      let f = Cr(o) || (() => new o());
      e({ provide: o, useFactory: f, deps: Ze }, o),
        e({ provide: Np, useValue: o, multi: !0 }, o),
        e({ provide: Ir, useValue: () => T(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !c) {
      let f = t;
      Xl(u, (g) => {
        e(g, f);
      });
    }
  } else return !1;
  return o !== t && t.providers !== void 0;
}
function Xl(t, e) {
  for (let r of t)
    Mp(r) && (r = r.ɵproviders), Array.isArray(r) ? Xl(r, e) : e(r);
}
var MC = X({ provide: String, useValue: X });
function Hp(t) {
  return t !== null && typeof t == "object" && MC in t;
}
function _C(t) {
  return !!(t && t.useExisting);
}
function SC(t) {
  return !!(t && t.useFactory);
}
function Mr(t) {
  return typeof t == "function";
}
function TC(t) {
  return !!t.useClass;
}
var zs = new S(""),
  ds = {},
  xC = {},
  Wc;
function eu() {
  return Wc === void 0 && (Wc = new ws()), Wc;
}
var Te = class {},
  vo = class extends Te {
    get destroyed() {
      return this._destroyed;
    }
    constructor(e, r, n, o) {
      super(),
        (this.parent = r),
        (this.source = n),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        fl(e, (s) => this.processProvider(s)),
        this.records.set(Ap, gr(void 0, this)),
        o.has("environment") && this.records.set(Te, gr(void 0, this));
      let i = this.records.get(zs);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(Np, Ze, F.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let e = z(null);
      try {
        for (let n of this._ngOnDestroyHooks) n.ngOnDestroy();
        let r = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let n of r) n();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          z(e);
      }
    }
    onDestroy(e) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(e),
        () => this.removeOnDestroy(e)
      );
    }
    runInContext(e) {
      this.assertNotDestroyed();
      let r = Qt(this),
        n = We(void 0),
        o;
      try {
        return e();
      } finally {
        Qt(r), We(n);
      }
    }
    get(e, r = go, n = F.Default) {
      if ((this.assertNotDestroyed(), e.hasOwnProperty(Vh))) return e[Vh](this);
      n = Us(n);
      let o,
        i = Qt(this),
        s = We(void 0);
      try {
        if (!(n & F.SkipSelf)) {
          let u = this.records.get(e);
          if (u === void 0) {
            let f = PC(e) && $s(e);
            f && this.injectableDefInScope(f)
              ? (u = gr(dl(e), ds))
              : (u = null),
              this.records.set(e, u);
          }
          if (u != null) return this.hydrate(e, u);
        }
        let c = n & F.Self ? eu() : this.parent;
        return (r = n & F.Optional && r === go ? null : r), c.get(e, r);
      } catch (c) {
        if (c.name === "NullInjectorError") {
          if (((c[vs] = c[vs] || []).unshift(Fe(e)), i)) throw c;
          return oC(c, e, "R3InjectorError", this.source);
        } else throw c;
      } finally {
        We(s), Qt(i);
      }
    }
    resolveInjectorInitializers() {
      let e = z(null),
        r = Qt(this),
        n = We(void 0),
        o;
      try {
        let i = this.get(Ir, Ze, F.Self);
        for (let s of i) s();
      } finally {
        Qt(r), We(n), z(e);
      }
    }
    toString() {
      let e = [],
        r = this.records;
      for (let n of r.keys()) e.push(Fe(n));
      return `R3Injector[${e.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new _(205, !1);
    }
    processProvider(e) {
      e = Se(e);
      let r = Mr(e) ? e : Se(e && e.provide),
        n = NC(e);
      if (!Mr(e) && e.multi === !0) {
        let o = this.records.get(r);
        o ||
          ((o = gr(void 0, ds, !0)),
          (o.factory = () => cl(o.multi)),
          this.records.set(r, o)),
          (r = e),
          o.multi.push(e);
      }
      this.records.set(r, n);
    }
    hydrate(e, r) {
      let n = z(null);
      try {
        return (
          r.value === ds && ((r.value = xC), (r.value = r.factory())),
          typeof r.value == "object" &&
            r.value &&
            OC(r.value) &&
            this._ngOnDestroyHooks.add(r.value),
          r.value
        );
      } finally {
        z(n);
      }
    }
    injectableDefInScope(e) {
      if (!e.providedIn) return !1;
      let r = Se(e.providedIn);
      return typeof r == "string"
        ? r === "any" || this.scopes.has(r)
        : this.injectorDefTypes.has(r);
    }
    removeOnDestroy(e) {
      let r = this._onDestroyHooks.indexOf(e);
      r !== -1 && this._onDestroyHooks.splice(r, 1);
    }
  };
function dl(t) {
  let e = $s(t),
    r = e !== null ? e.factory : Cr(t);
  if (r !== null) return r;
  if (t instanceof S) throw new _(204, !1);
  if (t instanceof Function) return AC(t);
  throw new _(204, !1);
}
function AC(t) {
  if (t.length > 0) throw new _(204, !1);
  let r = Hb(t);
  return r !== null ? () => r.factory(t) : () => new t();
}
function NC(t) {
  if (Hp(t)) return gr(void 0, t.useValue);
  {
    let e = zp(t);
    return gr(e, ds);
  }
}
function zp(t, e, r) {
  let n;
  if (Mr(t)) {
    let o = Se(t);
    return Cr(o) || dl(o);
  } else if (Hp(t)) n = () => Se(t.useValue);
  else if (SC(t)) n = () => t.useFactory(...cl(t.deps || []));
  else if (_C(t)) n = () => T(Se(t.useExisting));
  else {
    let o = Se(t && (t.useClass || t.provide));
    if (RC(t)) n = () => new o(...cl(t.deps));
    else return Cr(o) || dl(o);
  }
  return n;
}
function gr(t, e, r = !1) {
  return { factory: t, value: e, multi: r ? [] : void 0 };
}
function RC(t) {
  return !!t.deps;
}
function OC(t) {
  return (
    t !== null && typeof t == "object" && typeof t.ngOnDestroy == "function"
  );
}
function PC(t) {
  return typeof t == "function" || (typeof t == "object" && t instanceof S);
}
function fl(t, e) {
  for (let r of t)
    Array.isArray(r) ? fl(r, e) : r && Mp(r) ? fl(r.ɵproviders, e) : e(r);
}
function Ke(t, e) {
  t instanceof vo && t.assertNotDestroyed();
  let r,
    n = Qt(t),
    o = We(void 0);
  try {
    return e();
  } finally {
    Qt(n), We(o);
  }
}
function Gp() {
  return _p() !== void 0 || tC() != null;
}
function kC(t) {
  if (!Gp()) throw new _(-203, !1);
}
function FC(t) {
  return typeof t == "function";
}
var Pt = 0,
  j = 1,
  N = 2,
  xe = 3,
  ot = 4,
  st = 5,
  Ds = 6,
  bs = 7,
  xt = 8,
  _r = 9,
  mt = 10,
  ge = 11,
  yo = 12,
  zh = 13,
  Io = 14,
  vt = 15,
  Sr = 16,
  mr = 17,
  Tr = 18,
  Gs = 19,
  qp = 20,
  Kt = 21,
  Zc = 22,
  Ye = 23,
  tn = 25,
  Wp = 1;
var Rn = 7,
  Cs = 8,
  Es = 9,
  Qe = 10,
  Is = (function (t) {
    return (
      (t[(t.None = 0)] = "None"),
      (t[(t.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      t
    );
  })(Is || {});
function Jt(t) {
  return Array.isArray(t) && typeof t[Wp] == "object";
}
function kt(t) {
  return Array.isArray(t) && t[Wp] === !0;
}
function Zp(t) {
  return (t.flags & 4) !== 0;
}
function qs(t) {
  return t.componentOffset > -1;
}
function tu(t) {
  return (t.flags & 1) === 1;
}
function nn(t) {
  return !!t.template;
}
function hl(t) {
  return (t[N] & 512) !== 0;
}
var pl = class {
  constructor(e, r, n) {
    (this.previousValue = e), (this.currentValue = r), (this.firstChange = n);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Yp(t, e, r, n) {
  e !== null ? e.applyValueToInputSignal(e, n) : (t[r] = n);
}
function on() {
  return Qp;
}
function Qp(t) {
  return t.type.prototype.ngOnChanges && (t.setInput = VC), LC;
}
on.ngInherit = !0;
function LC() {
  let t = Jp(this),
    e = t?.current;
  if (e) {
    let r = t.previous;
    if (r === Er) t.previous = e;
    else for (let n in e) r[n] = e[n];
    (t.current = null), this.ngOnChanges(e);
  }
}
function VC(t, e, r, n, o) {
  let i = this.declaredInputs[n],
    s = Jp(t) || jC(t, { previous: Er, current: null }),
    c = s.current || (s.current = {}),
    u = s.previous,
    f = u[i];
  (c[i] = new pl(f && f.currentValue, r, u === Er)), Yp(t, e, o, r);
}
var Kp = "__ngSimpleChanges__";
function Jp(t) {
  return t[Kp] || null;
}
function jC(t, e) {
  return (t[Kp] = e);
}
var Gh = null;
var ht = function (t, e, r) {
    Gh?.(t, e, r);
  },
  BC = "svg",
  $C = "math";
function yt(t) {
  for (; Array.isArray(t); ) t = t[Pt];
  return t;
}
function Xp(t, e) {
  return yt(e[t]);
}
function Je(t, e) {
  return yt(e[t.index]);
}
function eg(t, e) {
  return t.data[e];
}
function sn(t, e) {
  let r = e[t];
  return Jt(r) ? r : r[Pt];
}
function nu(t) {
  return (t[N] & 128) === 128;
}
function UC(t) {
  return kt(t[xe]);
}
function Ms(t, e) {
  return e == null ? null : t[e];
}
function tg(t) {
  t[mr] = 0;
}
function ng(t) {
  t[N] & 1024 || ((t[N] |= 1024), nu(t) && Zs(t));
}
function Ws(t) {
  return !!(t[N] & 9216 || t[Ye]?.dirty);
}
function gl(t) {
  t[mt].changeDetectionScheduler?.notify(8),
    t[N] & 64 && (t[N] |= 1024),
    Ws(t) && Zs(t);
}
function Zs(t) {
  t[mt].changeDetectionScheduler?.notify(0);
  let e = On(t);
  for (; e !== null && !(e[N] & 8192 || ((e[N] |= 8192), !nu(e))); ) e = On(e);
}
function rg(t, e) {
  if ((t[N] & 256) === 256) throw new _(911, !1);
  t[Kt] === null && (t[Kt] = []), t[Kt].push(e);
}
function HC(t, e) {
  if (t[Kt] === null) return;
  let r = t[Kt].indexOf(e);
  r !== -1 && t[Kt].splice(r, 1);
}
function On(t) {
  let e = t[xe];
  return kt(e) ? e[xe] : e;
}
var G = { lFrame: hg(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var og = !1;
function zC() {
  return G.lFrame.elementDepthCount;
}
function GC() {
  G.lFrame.elementDepthCount++;
}
function qC() {
  G.lFrame.elementDepthCount--;
}
function ig() {
  return G.bindingsEnabled;
}
function WC() {
  return G.skipHydrationRootTNode !== null;
}
function ZC(t) {
  return G.skipHydrationRootTNode === t;
}
function YC() {
  G.skipHydrationRootTNode = null;
}
function re() {
  return G.lFrame.lView;
}
function ze() {
  return G.lFrame.tView;
}
function Ae() {
  let t = sg();
  for (; t !== null && t.type === 64; ) t = t.parent;
  return t;
}
function sg() {
  return G.lFrame.currentTNode;
}
function QC() {
  let t = G.lFrame,
    e = t.currentTNode;
  return t.isParent ? e : e.parent;
}
function Mo(t, e) {
  let r = G.lFrame;
  (r.currentTNode = t), (r.isParent = e);
}
function ag() {
  return G.lFrame.isParent;
}
function KC() {
  G.lFrame.isParent = !1;
}
function cg() {
  return og;
}
function qh(t) {
  og = t;
}
function JC() {
  return G.lFrame.bindingIndex;
}
function XC(t) {
  return (G.lFrame.bindingIndex = t);
}
function Ys() {
  return G.lFrame.bindingIndex++;
}
function lg(t) {
  let e = G.lFrame,
    r = e.bindingIndex;
  return (e.bindingIndex = e.bindingIndex + t), r;
}
function eE() {
  return G.lFrame.inI18n;
}
function tE(t, e) {
  let r = G.lFrame;
  (r.bindingIndex = r.bindingRootIndex = t), ml(e);
}
function nE() {
  return G.lFrame.currentDirectiveIndex;
}
function ml(t) {
  G.lFrame.currentDirectiveIndex = t;
}
function rE(t) {
  let e = G.lFrame.currentDirectiveIndex;
  return e === -1 ? null : t[e];
}
function ug(t) {
  G.lFrame.currentQueryIndex = t;
}
function oE(t) {
  let e = t[j];
  return e.type === 2 ? e.declTNode : e.type === 1 ? t[st] : null;
}
function dg(t, e, r) {
  if (r & F.SkipSelf) {
    let o = e,
      i = t;
    for (; (o = o.parent), o === null && !(r & F.Host); )
      if (((o = oE(i)), o === null || ((i = i[Io]), o.type & 10))) break;
    if (o === null) return !1;
    (e = o), (t = i);
  }
  let n = (G.lFrame = fg());
  return (n.currentTNode = e), (n.lView = t), !0;
}
function ru(t) {
  let e = fg(),
    r = t[j];
  (G.lFrame = e),
    (e.currentTNode = r.firstChild),
    (e.lView = t),
    (e.tView = r),
    (e.contextLView = t),
    (e.bindingIndex = r.bindingStartIndex),
    (e.inI18n = !1);
}
function fg() {
  let t = G.lFrame,
    e = t === null ? null : t.child;
  return e === null ? hg(t) : e;
}
function hg(t) {
  let e = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: t,
    child: null,
    inI18n: !1,
  };
  return t !== null && (t.child = e), e;
}
function pg() {
  let t = G.lFrame;
  return (G.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t;
}
var gg = pg;
function ou() {
  let t = pg();
  (t.isParent = !0),
    (t.tView = null),
    (t.selectedIndex = -1),
    (t.contextLView = null),
    (t.elementDepthCount = 0),
    (t.currentDirectiveIndex = -1),
    (t.currentNamespace = null),
    (t.bindingRootIndex = -1),
    (t.bindingIndex = -1),
    (t.currentQueryIndex = 0);
}
function $n() {
  return G.lFrame.selectedIndex;
}
function Pn(t) {
  G.lFrame.selectedIndex = t;
}
function iu() {
  let t = G.lFrame;
  return eg(t.tView, t.selectedIndex);
}
function iE() {
  return G.lFrame.currentNamespace;
}
var mg = !0;
function su() {
  return mg;
}
function au(t) {
  mg = t;
}
function sE(t, e, r) {
  let { ngOnChanges: n, ngOnInit: o, ngDoCheck: i } = e.type.prototype;
  if (n) {
    let s = Qp(e);
    (r.preOrderHooks ??= []).push(t, s),
      (r.preOrderCheckHooks ??= []).push(t, s);
  }
  o && (r.preOrderHooks ??= []).push(0 - t, o),
    i &&
      ((r.preOrderHooks ??= []).push(t, i),
      (r.preOrderCheckHooks ??= []).push(t, i));
}
function cu(t, e) {
  for (let r = e.directiveStart, n = e.directiveEnd; r < n; r++) {
    let i = t.data[r].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: c,
        ngAfterViewInit: u,
        ngAfterViewChecked: f,
        ngOnDestroy: g,
      } = i;
    s && (t.contentHooks ??= []).push(-r, s),
      c &&
        ((t.contentHooks ??= []).push(r, c),
        (t.contentCheckHooks ??= []).push(r, c)),
      u && (t.viewHooks ??= []).push(-r, u),
      f &&
        ((t.viewHooks ??= []).push(r, f), (t.viewCheckHooks ??= []).push(r, f)),
      g != null && (t.destroyHooks ??= []).push(r, g);
  }
}
function fs(t, e, r) {
  vg(t, e, 3, r);
}
function hs(t, e, r, n) {
  (t[N] & 3) === r && vg(t, e, r, n);
}
function Yc(t, e) {
  let r = t[N];
  (r & 3) === e && ((r &= 16383), (r += 1), (t[N] = r));
}
function vg(t, e, r, n) {
  let o = n !== void 0 ? t[mr] & 65535 : 0,
    i = n ?? -1,
    s = e.length - 1,
    c = 0;
  for (let u = o; u < s; u++)
    if (typeof e[u + 1] == "number") {
      if (((c = e[u]), n != null && c >= n)) break;
    } else
      e[u] < 0 && (t[mr] += 65536),
        (c < i || i == -1) &&
          (aE(t, r, e, u), (t[mr] = (t[mr] & 4294901760) + u + 2)),
        u++;
}
function Wh(t, e) {
  ht(4, t, e);
  let r = z(null);
  try {
    e.call(t);
  } finally {
    z(r), ht(5, t, e);
  }
}
function aE(t, e, r, n) {
  let o = r[n] < 0,
    i = r[n + 1],
    s = o ? -r[n] : r[n],
    c = t[s];
  o
    ? t[N] >> 14 < t[mr] >> 16 &&
      (t[N] & 3) === e &&
      ((t[N] += 16384), Wh(c, i))
    : Wh(c, i);
}
var Dr = -1,
  kn = class {
    constructor(e, r, n) {
      (this.factory = e),
        (this.resolving = !1),
        (this.canSeeViewProviders = r),
        (this.injectImpl = n);
    }
  };
function cE(t) {
  return t instanceof kn;
}
function lE(t) {
  return (t.flags & 8) !== 0;
}
function uE(t) {
  return (t.flags & 16) !== 0;
}
var Qc = {},
  vl = class {
    constructor(e, r) {
      (this.injector = e), (this.parentInjector = r);
    }
    get(e, r, n) {
      n = Us(n);
      let o = this.injector.get(e, Qc, n);
      return o !== Qc || r === Qc ? o : this.parentInjector.get(e, r, n);
    }
  };
function yg(t) {
  return t !== Dr;
}
function _s(t) {
  return t & 32767;
}
function dE(t) {
  return t >> 16;
}
function Ss(t, e) {
  let r = dE(t),
    n = e;
  for (; r > 0; ) (n = n[Io]), r--;
  return n;
}
var yl = !0;
function Zh(t) {
  let e = yl;
  return (yl = t), e;
}
var fE = 256,
  wg = fE - 1,
  Dg = 5,
  hE = 0,
  pt = {};
function pE(t, e, r) {
  let n;
  typeof r == "string"
    ? (n = r.charCodeAt(0) || 0)
    : r.hasOwnProperty(po) && (n = r[po]),
    n == null && (n = r[po] = hE++);
  let o = n & wg,
    i = 1 << o;
  e.data[t + (o >> Dg)] |= i;
}
function Ts(t, e) {
  let r = bg(t, e);
  if (r !== -1) return r;
  let n = e[j];
  n.firstCreatePass &&
    ((t.injectorIndex = e.length),
    Kc(n.data, t),
    Kc(e, null),
    Kc(n.blueprint, null));
  let o = lu(t, e),
    i = t.injectorIndex;
  if (yg(o)) {
    let s = _s(o),
      c = Ss(o, e),
      u = c[j].data;
    for (let f = 0; f < 8; f++) e[i + f] = c[s + f] | u[s + f];
  }
  return (e[i + 8] = o), i;
}
function Kc(t, e) {
  t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
}
function bg(t, e) {
  return t.injectorIndex === -1 ||
    (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
    e[t.injectorIndex + 8] === null
    ? -1
    : t.injectorIndex;
}
function lu(t, e) {
  if (t.parent && t.parent.injectorIndex !== -1) return t.parent.injectorIndex;
  let r = 0,
    n = null,
    o = e;
  for (; o !== null; ) {
    if (((n = _g(o)), n === null)) return Dr;
    if ((r++, (o = o[Io]), n.injectorIndex !== -1))
      return n.injectorIndex | (r << 16);
  }
  return Dr;
}
function wl(t, e, r) {
  pE(t, e, r);
}
function gE(t, e) {
  if (e === "class") return t.classes;
  if (e === "style") return t.styles;
  let r = t.attrs;
  if (r) {
    let n = r.length,
      o = 0;
    for (; o < n; ) {
      let i = r[o];
      if (Op(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number")
        for (o++; o < n && typeof r[o] == "string"; ) o++;
      else {
        if (i === e) return r[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function Cg(t, e, r) {
  if (r & F.Optional || t !== void 0) return t;
  Yl(e, "NodeInjector");
}
function Eg(t, e, r, n) {
  if (
    (r & F.Optional && n === void 0 && (n = null), !(r & (F.Self | F.Host)))
  ) {
    let o = t[_r],
      i = We(void 0);
    try {
      return o ? o.get(e, n, r & F.Optional) : Sp(e, n, r & F.Optional);
    } finally {
      We(i);
    }
  }
  return Cg(n, e, r);
}
function Ig(t, e, r, n = F.Default, o) {
  if (t !== null) {
    if (e[N] & 2048 && !(n & F.Self)) {
      let s = DE(t, e, r, n, pt);
      if (s !== pt) return s;
    }
    let i = Mg(t, e, r, n, pt);
    if (i !== pt) return i;
  }
  return Eg(e, r, n, o);
}
function Mg(t, e, r, n, o) {
  let i = yE(r);
  if (typeof i == "function") {
    if (!dg(e, t, n)) return n & F.Host ? Cg(o, r, n) : Eg(e, r, n, o);
    try {
      let s;
      if (((s = i(n)), s == null && !(n & F.Optional))) Yl(r);
      else return s;
    } finally {
      gg();
    }
  } else if (typeof i == "number") {
    let s = null,
      c = bg(t, e),
      u = Dr,
      f = n & F.Host ? e[vt][st] : null;
    for (
      (c === -1 || n & F.SkipSelf) &&
      ((u = c === -1 ? lu(t, e) : e[c + 8]),
      u === Dr || !Qh(n, !1)
        ? (c = -1)
        : ((s = e[j]), (c = _s(u)), (e = Ss(u, e))));
      c !== -1;

    ) {
      let g = e[j];
      if (Yh(i, c, g.data)) {
        let h = mE(c, e, r, s, n, f);
        if (h !== pt) return h;
      }
      (u = e[c + 8]),
        u !== Dr && Qh(n, e[j].data[c + 8] === f) && Yh(i, c, e)
          ? ((s = g), (c = _s(u)), (e = Ss(u, e)))
          : (c = -1);
    }
  }
  return o;
}
function mE(t, e, r, n, o, i) {
  let s = e[j],
    c = s.data[t + 8],
    u = n == null ? qs(c) && yl : n != s && (c.type & 3) !== 0,
    f = o & F.Host && i === c,
    g = vE(c, s, r, u, f);
  return g !== null ? xr(e, s, g, c) : pt;
}
function vE(t, e, r, n, o) {
  let i = t.providerIndexes,
    s = e.data,
    c = i & 1048575,
    u = t.directiveStart,
    f = t.directiveEnd,
    g = i >> 20,
    h = n ? c : c + g,
    y = o ? c + g : f;
  for (let v = h; v < y; v++) {
    let D = s[v];
    if ((v < u && r === D) || (v >= u && D.type === r)) return v;
  }
  if (o) {
    let v = s[u];
    if (v && nn(v) && v.type === r) return u;
  }
  return null;
}
function xr(t, e, r, n) {
  let o = t[r],
    i = e.data;
  if (cE(o)) {
    let s = o;
    s.resolving && Qb(Yb(i[r]));
    let c = Zh(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      f = s.injectImpl ? We(s.injectImpl) : null,
      g = dg(t, n, F.Default);
    try {
      (o = t[r] = s.factory(void 0, i, t, n)),
        e.firstCreatePass && r >= n.directiveStart && sE(r, i[r], e);
    } finally {
      f !== null && We(f), Zh(c), (s.resolving = !1), gg();
    }
  }
  return o;
}
function yE(t) {
  if (typeof t == "string") return t.charCodeAt(0) || 0;
  let e = t.hasOwnProperty(po) ? t[po] : void 0;
  return typeof e == "number" ? (e >= 0 ? e & wg : wE) : e;
}
function Yh(t, e, r) {
  let n = 1 << t;
  return !!(r[e + (t >> Dg)] & n);
}
function Qh(t, e) {
  return !(t & F.Self) && !(t & F.Host && e);
}
var Nn = class {
  constructor(e, r) {
    (this._tNode = e), (this._lView = r);
  }
  get(e, r, n) {
    return Ig(this._tNode, this._lView, e, Us(n), r);
  }
};
function wE() {
  return new Nn(Ae(), re());
}
function kr(t) {
  return bo(() => {
    let e = t.prototype.constructor,
      r = e[ms] || Dl(e),
      n = Object.prototype,
      o = Object.getPrototypeOf(t.prototype).constructor;
    for (; o && o !== n; ) {
      let i = o[ms] || Dl(o);
      if (i && i !== r) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Dl(t) {
  return bp(t)
    ? () => {
        let e = Dl(Se(t));
        return e && e();
      }
    : Cr(t);
}
function DE(t, e, r, n, o) {
  let i = t,
    s = e;
  for (; i !== null && s !== null && s[N] & 2048 && !(s[N] & 512); ) {
    let c = Mg(i, s, r, n | F.Self, pt);
    if (c !== pt) return c;
    let u = i.parent;
    if (!u) {
      let f = s[qp];
      if (f) {
        let g = f.get(r, pt, n);
        if (g !== pt) return g;
      }
      (u = _g(s)), (s = s[Io]);
    }
    i = u;
  }
  return o;
}
function _g(t) {
  let e = t[j],
    r = e.type;
  return r === 2 ? e.declTNode : r === 1 ? t[st] : null;
}
function uu(t) {
  return gE(Ae(), t);
}
function Kh(t, e = null, r = null, n) {
  let o = Sg(t, e, r, n);
  return o.resolveInjectorInitializers(), o;
}
function Sg(t, e = null, r = null, n, o = new Set()) {
  let i = [r || Ze, IC(t)];
  return (
    (n = n || (typeof t == "object" ? void 0 : Fe(t))),
    new vo(i, e || eu(), n || null, o)
  );
}
var xn = class xn {
  static create(e, r) {
    if (Array.isArray(e)) return Kh({ name: "" }, r, e, "");
    {
      let n = e.name ?? "";
      return Kh({ name: n }, e.parent, e.providers, n);
    }
  }
};
(xn.THROW_IF_NOT_FOUND = go),
  (xn.NULL = new ws()),
  (xn.ɵprov = M({ token: xn, providedIn: "any", factory: () => T(Ap) })),
  (xn.__NG_ELEMENT_ID__ = -1);
var it = xn;
var bE = new S("");
bE.__NG_ELEMENT_ID__ = (t) => {
  let e = Ae();
  if (e === null) throw new _(204, !1);
  if (e.type & 2) return e.value;
  if (t & F.Optional) return null;
  throw new _(204, !1);
};
var CE = "ngOriginalError";
function Jc(t) {
  return t[CE];
}
var Tg = !0,
  du = (() => {
    let e = class e {};
    (e.__NG_ELEMENT_ID__ = EE), (e.__NG_ENV_ID__ = (n) => n);
    let t = e;
    return t;
  })(),
  bl = class extends du {
    constructor(e) {
      super(), (this._lView = e);
    }
    onDestroy(e) {
      return rg(this._lView, e), () => HC(this._lView, e);
    }
  };
function EE() {
  return new bl(re());
}
var an = (() => {
  let e = class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new Ce(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  e.ɵprov = M({ token: e, providedIn: "root", factory: () => new e() });
  let t = e;
  return t;
})();
var Cl = class extends ye {
    constructor(e = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = e),
        Gp() &&
          ((this.destroyRef = w(du, { optional: !0 }) ?? void 0),
          (this.pendingTasks = w(an, { optional: !0 }) ?? void 0));
    }
    emit(e) {
      let r = z(null);
      try {
        super.next(e);
      } finally {
        z(r);
      }
    }
    subscribe(e, r, n) {
      let o = e,
        i = r || (() => null),
        s = n;
      if (e && typeof e == "object") {
        let u = e;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let c = super.subscribe({ next: o, error: i, complete: s });
      return e instanceof ue && e.add(c), c;
    }
    wrapInTimeout(e) {
      return (r) => {
        let n = this.pendingTasks?.add();
        setTimeout(() => {
          e(r), n !== void 0 && this.pendingTasks?.remove(n);
        });
      };
    }
  },
  he = Cl;
function xs(...t) {}
function xg(t) {
  let e, r;
  function n() {
    t = xs;
    try {
      r !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(r),
        e !== void 0 && clearTimeout(e);
    } catch {}
  }
  return (
    (e = setTimeout(() => {
      t(), n();
    })),
    typeof requestAnimationFrame == "function" &&
      (r = requestAnimationFrame(() => {
        t(), n();
      })),
    () => n()
  );
}
function Jh(t) {
  return (
    queueMicrotask(() => t()),
    () => {
      t = xs;
    }
  );
}
var fu = "isAngularZone",
  As = fu + "_ID",
  IE = 0,
  ae = class t {
    constructor(e) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new he(!1)),
        (this.onMicrotaskEmpty = new he(!1)),
        (this.onStable = new he(!1)),
        (this.onError = new he(!1));
      let {
        enableLongStackTrace: r = !1,
        shouldCoalesceEventChangeDetection: n = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = Tg,
      } = e;
      if (typeof Zone > "u") throw new _(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        r &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && n),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        SE(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(fu) === !0;
    }
    static assertInAngularZone() {
      if (!t.isInAngularZone()) throw new _(909, !1);
    }
    static assertNotInAngularZone() {
      if (t.isInAngularZone()) throw new _(909, !1);
    }
    run(e, r, n) {
      return this._inner.run(e, r, n);
    }
    runTask(e, r, n, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, e, ME, xs, xs);
      try {
        return i.runTask(s, r, n);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(e, r, n) {
      return this._inner.runGuarded(e, r, n);
    }
    runOutsideAngular(e) {
      return this._outer.run(e);
    }
  },
  ME = {};
function hu(t) {
  if (t._nesting == 0 && !t.hasPendingMicrotasks && !t.isStable)
    try {
      t._nesting++, t.onMicrotaskEmpty.emit(null);
    } finally {
      if ((t._nesting--, !t.hasPendingMicrotasks))
        try {
          t.runOutsideAngular(() => t.onStable.emit(null));
        } finally {
          t.isStable = !0;
        }
    }
}
function _E(t) {
  if (t.isCheckStableRunning || t.callbackScheduled) return;
  t.callbackScheduled = !0;
  function e() {
    xg(() => {
      (t.callbackScheduled = !1),
        El(t),
        (t.isCheckStableRunning = !0),
        hu(t),
        (t.isCheckStableRunning = !1);
    });
  }
  t.scheduleInRootZone
    ? Zone.root.run(() => {
        e();
      })
    : t._outer.run(() => {
        e();
      }),
    El(t);
}
function SE(t) {
  let e = () => {
      _E(t);
    },
    r = IE++;
  t._inner = t._inner.fork({
    name: "angular",
    properties: { [fu]: !0, [As]: r, [As + r]: !0 },
    onInvokeTask: (n, o, i, s, c, u) => {
      if (TE(u)) return n.invokeTask(i, s, c, u);
      try {
        return Xh(t), n.invokeTask(i, s, c, u);
      } finally {
        ((t.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          t.shouldCoalesceRunChangeDetection) &&
          e(),
          ep(t);
      }
    },
    onInvoke: (n, o, i, s, c, u, f) => {
      try {
        return Xh(t), n.invoke(i, s, c, u, f);
      } finally {
        t.shouldCoalesceRunChangeDetection &&
          !t.callbackScheduled &&
          !xE(u) &&
          e(),
          ep(t);
      }
    },
    onHasTask: (n, o, i, s) => {
      n.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((t._hasPendingMicrotasks = s.microTask), El(t), hu(t))
            : s.change == "macroTask" &&
              (t.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (n, o, i, s) => (
      n.handleError(i, s), t.runOutsideAngular(() => t.onError.emit(s)), !1
    ),
  });
}
function El(t) {
  t._hasPendingMicrotasks ||
  ((t.shouldCoalesceEventChangeDetection ||
    t.shouldCoalesceRunChangeDetection) &&
    t.callbackScheduled === !0)
    ? (t.hasPendingMicrotasks = !0)
    : (t.hasPendingMicrotasks = !1);
}
function Xh(t) {
  t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
}
function ep(t) {
  t._nesting--, hu(t);
}
var Il = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new he()),
      (this.onMicrotaskEmpty = new he()),
      (this.onStable = new he()),
      (this.onError = new he());
  }
  run(e, r, n) {
    return e.apply(r, n);
  }
  runGuarded(e, r, n) {
    return e.apply(r, n);
  }
  runOutsideAngular(e) {
    return e();
  }
  runTask(e, r, n, o) {
    return e.apply(r, n);
  }
};
function TE(t) {
  return Ag(t, "__ignore_ng_zone__");
}
function xE(t) {
  return Ag(t, "__scheduler_tick__");
}
function Ag(t, e) {
  return !Array.isArray(t) || t.length !== 1 ? !1 : t[0]?.data?.[e] === !0;
}
var At = class {
    constructor() {
      this._console = console;
    }
    handleError(e) {
      let r = this._findOriginalError(e);
      this._console.error("ERROR", e),
        r && this._console.error("ORIGINAL ERROR", r);
    }
    _findOriginalError(e) {
      let r = e && Jc(e);
      for (; r && Jc(r); ) r = Jc(r);
      return r || null;
    }
  },
  AE = new S("", {
    providedIn: "root",
    factory: () => {
      let t = w(ae),
        e = w(At);
      return (r) => t.runOutsideAngular(() => e.handleError(r));
    },
  });
function NE() {
  return Qs(Ae(), re());
}
function Qs(t, e) {
  return new cn(Je(t, e));
}
var cn = (() => {
  let e = class e {
    constructor(n) {
      this.nativeElement = n;
    }
  };
  e.__NG_ELEMENT_ID__ = NE;
  let t = e;
  return t;
})();
function Ng(t) {
  return (t.flags & 128) === 128;
}
var Rg = new Map(),
  RE = 0;
function OE() {
  return RE++;
}
function PE(t) {
  Rg.set(t[Gs], t);
}
function Ml(t) {
  Rg.delete(t[Gs]);
}
var tp = "__ngContext__";
function Fn(t, e) {
  Jt(e) ? ((t[tp] = e[Gs]), PE(e)) : (t[tp] = e);
}
function Og(t) {
  return kg(t[yo]);
}
function Pg(t) {
  return kg(t[ot]);
}
function kg(t) {
  for (; t !== null && !kt(t); ) t = t[ot];
  return t;
}
var _l;
function Fg(t) {
  _l = t;
}
function kE() {
  if (_l !== void 0) return _l;
  if (typeof document < "u") return document;
  throw new _(210, !1);
}
var pu = new S("", { providedIn: "root", factory: () => FE }),
  FE = "ng",
  gu = new S(""),
  wt = new S("", { providedIn: "platform", factory: () => "unknown" });
var mu = new S("", {
  providedIn: "root",
  factory: () =>
    kE().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
    null,
});
var LE = "h",
  VE = "b";
var jE = () => null;
function vu(t, e, r = !1) {
  return jE(t, e, r);
}
var Lg = !1,
  BE = new S("", { providedIn: "root", factory: () => Lg });
var as;
function $E() {
  if (as === void 0 && ((as = null), il.trustedTypes))
    try {
      as = il.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (t) => t,
        createScript: (t) => t,
        createScriptURL: (t) => t,
      });
    } catch {}
  return as;
}
function np(t) {
  return $E()?.createScriptURL(t) || t;
}
var Ns = class {
  constructor(e) {
    this.changingThisBreaksApplicationSecurity = e;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${wp})`;
  }
};
function _o(t) {
  return t instanceof Ns ? t.changingThisBreaksApplicationSecurity : t;
}
function yu(t, e) {
  let r = UE(t);
  if (r != null && r !== e) {
    if (r === "ResourceURL" && e === "URL") return !0;
    throw new Error(`Required a safe ${e}, got a ${r} (see ${wp})`);
  }
  return r === e;
}
function UE(t) {
  return (t instanceof Ns && t.getTypeName()) || null;
}
var HE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Vg(t) {
  return (t = String(t)), t.match(HE) ? t : "unsafe:" + t;
}
var Ks = (function (t) {
  return (
    (t[(t.NONE = 0)] = "NONE"),
    (t[(t.HTML = 1)] = "HTML"),
    (t[(t.STYLE = 2)] = "STYLE"),
    (t[(t.SCRIPT = 3)] = "SCRIPT"),
    (t[(t.URL = 4)] = "URL"),
    (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    t
  );
})(Ks || {});
function wu(t) {
  let e = Bg();
  return e ? e.sanitize(Ks.URL, t) || "" : yu(t, "URL") ? _o(t) : Vg(br(t));
}
function zE(t) {
  let e = Bg();
  if (e) return np(e.sanitize(Ks.RESOURCE_URL, t) || "");
  if (yu(t, "ResourceURL")) return np(_o(t));
  throw new _(904, !1);
}
function GE(t, e) {
  return (e === "src" &&
    (t === "embed" ||
      t === "frame" ||
      t === "iframe" ||
      t === "media" ||
      t === "script")) ||
    (e === "href" && (t === "base" || t === "link"))
    ? zE
    : wu;
}
function jg(t, e, r) {
  return GE(e, r)(t);
}
function Bg() {
  let t = re();
  return t && t[mt].sanitizer;
}
function $g(t) {
  return t instanceof Function ? t() : t;
}
function qE(t) {
  return (t ?? w(it)).get(wt) === "browser";
}
var Nt = (function (t) {
    return (
      (t[(t.Important = 1)] = "Important"),
      (t[(t.DashCase = 2)] = "DashCase"),
      t
    );
  })(Nt || {}),
  WE;
function Du(t, e) {
  return WE(t, e);
}
function vr(t, e, r, n, o) {
  if (n != null) {
    let i,
      s = !1;
    kt(n) ? (i = n) : Jt(n) && ((s = !0), (n = n[Pt]));
    let c = yt(n);
    t === 0 && r !== null
      ? o == null
        ? qg(e, r, c)
        : Rs(e, r, c, o || null, !0)
      : t === 1 && r !== null
      ? Rs(e, r, c, o || null, !0)
      : t === 2
      ? c0(e, c, s)
      : t === 3 && e.destroyNode(c),
      i != null && u0(e, t, i, r, o);
  }
}
function ZE(t, e) {
  return t.createText(e);
}
function YE(t, e, r) {
  t.setValue(e, r);
}
function Ug(t, e, r) {
  return t.createElement(e, r);
}
function QE(t, e) {
  Hg(t, e), (e[Pt] = null), (e[st] = null);
}
function KE(t, e, r, n, o, i) {
  (n[Pt] = o), (n[st] = e), Js(t, n, r, 1, o, i);
}
function Hg(t, e) {
  e[mt].changeDetectionScheduler?.notify(9), Js(t, e, e[ge], 2, null, null);
}
function JE(t) {
  let e = t[yo];
  if (!e) return Xc(t[j], t);
  for (; e; ) {
    let r = null;
    if (Jt(e)) r = e[yo];
    else {
      let n = e[Qe];
      n && (r = n);
    }
    if (!r) {
      for (; e && !e[ot] && e !== t; ) Jt(e) && Xc(e[j], e), (e = e[xe]);
      e === null && (e = t), Jt(e) && Xc(e[j], e), (r = e && e[ot]);
    }
    e = r;
  }
}
function XE(t, e, r, n) {
  let o = Qe + n,
    i = r.length;
  n > 0 && (r[o - 1][ot] = e),
    n < i - Qe
      ? ((e[ot] = r[o]), xp(r, Qe + n, e))
      : (r.push(e), (e[ot] = null)),
    (e[xe] = r);
  let s = e[Sr];
  s !== null && r !== s && zg(s, e);
  let c = e[Tr];
  c !== null && c.insertView(t), gl(e), (e[N] |= 128);
}
function zg(t, e) {
  let r = t[Es],
    n = e[xe];
  if (Jt(n)) t[N] |= Is.HasTransplantedViews;
  else {
    let o = n[xe][vt];
    e[vt] !== o && (t[N] |= Is.HasTransplantedViews);
  }
  r === null ? (t[Es] = [e]) : r.push(e);
}
function bu(t, e) {
  let r = t[Es],
    n = r.indexOf(e);
  r.splice(n, 1);
}
function Sl(t, e) {
  if (t.length <= Qe) return;
  let r = Qe + e,
    n = t[r];
  if (n) {
    let o = n[Sr];
    o !== null && o !== t && bu(o, n), e > 0 && (t[r - 1][ot] = n[ot]);
    let i = ys(t, Qe + e);
    QE(n[j], n);
    let s = i[Tr];
    s !== null && s.detachView(i[j]),
      (n[xe] = null),
      (n[ot] = null),
      (n[N] &= -129);
  }
  return n;
}
function Gg(t, e) {
  if (!(e[N] & 256)) {
    let r = e[ge];
    r.destroyNode && Js(t, e, r, 3, null, null), JE(e);
  }
}
function Xc(t, e) {
  if (e[N] & 256) return;
  let r = z(null);
  try {
    (e[N] &= -129),
      (e[N] |= 256),
      e[Ye] && Tc(e[Ye]),
      t0(t, e),
      e0(t, e),
      e[j].type === 1 && e[ge].destroy();
    let n = e[Sr];
    if (n !== null && kt(e[xe])) {
      n !== e[xe] && bu(n, e);
      let o = e[Tr];
      o !== null && o.detachView(t);
    }
    Ml(e);
  } finally {
    z(r);
  }
}
function e0(t, e) {
  let r = t.cleanup,
    n = e[bs];
  if (r !== null)
    for (let i = 0; i < r.length - 1; i += 2)
      if (typeof r[i] == "string") {
        let s = r[i + 3];
        s >= 0 ? n[s]() : n[-s].unsubscribe(), (i += 2);
      } else {
        let s = n[r[i + 1]];
        r[i].call(s);
      }
  n !== null && (e[bs] = null);
  let o = e[Kt];
  if (o !== null) {
    e[Kt] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function t0(t, e) {
  let r;
  if (t != null && (r = t.destroyHooks) != null)
    for (let n = 0; n < r.length; n += 2) {
      let o = e[r[n]];
      if (!(o instanceof kn)) {
        let i = r[n + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let c = o[i[s]],
              u = i[s + 1];
            ht(4, c, u);
            try {
              u.call(c);
            } finally {
              ht(5, c, u);
            }
          }
        else {
          ht(4, o, i);
          try {
            i.call(o);
          } finally {
            ht(5, o, i);
          }
        }
      }
    }
}
function n0(t, e, r) {
  return r0(t, e.parent, r);
}
function r0(t, e, r) {
  let n = e;
  for (; n !== null && n.type & 168; ) (e = n), (n = e.parent);
  if (n === null) return r[Pt];
  {
    let { componentOffset: o } = n;
    if (o > -1) {
      let { encapsulation: i } = t.data[n.directiveStart + o];
      if (i === gt.None || i === gt.Emulated) return null;
    }
    return Je(n, r);
  }
}
function Rs(t, e, r, n, o) {
  t.insertBefore(e, r, n, o);
}
function qg(t, e, r) {
  t.appendChild(e, r);
}
function rp(t, e, r, n, o) {
  n !== null ? Rs(t, e, r, n, o) : qg(t, e, r);
}
function Wg(t, e) {
  return t.parentNode(e);
}
function o0(t, e) {
  return t.nextSibling(e);
}
function i0(t, e, r) {
  return a0(t, e, r);
}
function s0(t, e, r) {
  return t.type & 40 ? Je(t, r) : null;
}
var a0 = s0,
  op;
function Cu(t, e, r, n) {
  let o = n0(t, n, e),
    i = e[ge],
    s = n.parent || e[st],
    c = i0(s, n, e);
  if (o != null)
    if (Array.isArray(r))
      for (let u = 0; u < r.length; u++) rp(i, o, r[u], c, !1);
    else rp(i, o, r, c, !1);
  op !== void 0 && op(i, n, e, r, o);
}
function ho(t, e) {
  if (e !== null) {
    let r = e.type;
    if (r & 3) return Je(e, t);
    if (r & 4) return Tl(-1, t[e.index]);
    if (r & 8) {
      let n = e.child;
      if (n !== null) return ho(t, n);
      {
        let o = t[e.index];
        return kt(o) ? Tl(-1, o) : yt(o);
      }
    } else {
      if (r & 128) return ho(t, e.next);
      if (r & 32) return Du(e, t)() || yt(t[e.index]);
      {
        let n = Zg(t, e);
        if (n !== null) {
          if (Array.isArray(n)) return n[0];
          let o = On(t[vt]);
          return ho(o, n);
        } else return ho(t, e.next);
      }
    }
  }
  return null;
}
function Zg(t, e) {
  if (e !== null) {
    let n = t[vt][st],
      o = e.projection;
    return n.projection[o];
  }
  return null;
}
function Tl(t, e) {
  let r = Qe + t + 1;
  if (r < e.length) {
    let n = e[r],
      o = n[j].firstChild;
    if (o !== null) return ho(n, o);
  }
  return e[Rn];
}
function c0(t, e, r) {
  t.removeChild(null, e, r);
}
function Eu(t, e, r, n, o, i, s) {
  for (; r != null; ) {
    if (r.type === 128) {
      r = r.next;
      continue;
    }
    let c = n[r.index],
      u = r.type;
    if (
      (s && e === 0 && (c && Fn(yt(c), n), (r.flags |= 2)),
      (r.flags & 32) !== 32)
    )
      if (u & 8) Eu(t, e, r.child, n, o, i, !1), vr(e, t, o, c, i);
      else if (u & 32) {
        let f = Du(r, n),
          g;
        for (; (g = f()); ) vr(e, t, o, g, i);
        vr(e, t, o, c, i);
      } else u & 16 ? l0(t, e, n, r, o, i) : vr(e, t, o, c, i);
    r = s ? r.projectionNext : r.next;
  }
}
function Js(t, e, r, n, o, i) {
  Eu(r, n, t.firstChild, e, o, i, !1);
}
function l0(t, e, r, n, o, i) {
  let s = r[vt],
    u = s[st].projection[n.projection];
  if (Array.isArray(u))
    for (let f = 0; f < u.length; f++) {
      let g = u[f];
      vr(e, t, o, g, i);
    }
  else {
    let f = u,
      g = s[xe];
    Ng(n) && (f.flags |= 128), Eu(t, e, f, g, o, i, !0);
  }
}
function u0(t, e, r, n, o) {
  let i = r[Rn],
    s = yt(r);
  i !== s && vr(e, t, n, i, o);
  for (let c = Qe; c < r.length; c++) {
    let u = r[c];
    Js(u[j], u, t, e, n, i);
  }
}
function d0(t, e, r, n, o) {
  if (e) o ? t.addClass(r, n) : t.removeClass(r, n);
  else {
    let i = n.indexOf("-") === -1 ? void 0 : Nt.DashCase;
    o == null
      ? t.removeStyle(r, n, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= Nt.Important)),
        t.setStyle(r, n, o, i));
  }
}
function f0(t, e, r) {
  t.setAttribute(e, "style", r);
}
function Yg(t, e, r) {
  r === "" ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", r);
}
function Qg(t, e, r) {
  let { mergedAttrs: n, classes: o, styles: i } = r;
  n !== null && ll(t, e, n),
    o !== null && Yg(t, e, o),
    i !== null && f0(t, e, i);
}
var ln = {};
function Ve(t = 1) {
  Kg(ze(), re(), $n() + t, !1);
}
function Kg(t, e, r, n) {
  if (!n)
    if ((e[N] & 3) === 3) {
      let i = t.preOrderCheckHooks;
      i !== null && fs(e, i, r);
    } else {
      let i = t.preOrderHooks;
      i !== null && hs(e, i, 0, r);
    }
  Pn(r);
}
function k(t, e = F.Default) {
  let r = re();
  if (r === null) return T(t, e);
  let n = Ae();
  return Ig(n, r, Se(t), e);
}
function Jg() {
  let t = "invalid";
  throw new Error(t);
}
function Xg(t, e, r, n, o, i) {
  let s = z(null);
  try {
    let c = null;
    o & Xt.SignalBased && (c = e[n][Mt]),
      c !== null && c.transformFn !== void 0 && (i = c.transformFn(i)),
      o & Xt.HasDecoratorInputTransform &&
        (i = t.inputTransforms[n].call(e, i)),
      t.setInput !== null ? t.setInput(e, c, i, r, n) : Yp(e, c, n, i);
  } finally {
    z(s);
  }
}
function h0(t, e) {
  let r = t.hostBindingOpCodes;
  if (r !== null)
    try {
      for (let n = 0; n < r.length; n++) {
        let o = r[n];
        if (o < 0) Pn(~o);
        else {
          let i = o,
            s = r[++n],
            c = r[++n];
          tE(s, i);
          let u = e[i];
          c(2, u);
        }
      }
    } finally {
      Pn(-1);
    }
}
function Xs(t, e, r, n, o, i, s, c, u, f, g) {
  let h = e.blueprint.slice();
  return (
    (h[Pt] = o),
    (h[N] = n | 4 | 128 | 8 | 64),
    (f !== null || (t && t[N] & 2048)) && (h[N] |= 2048),
    tg(h),
    (h[xe] = h[Io] = t),
    (h[xt] = r),
    (h[mt] = s || (t && t[mt])),
    (h[ge] = c || (t && t[ge])),
    (h[_r] = u || (t && t[_r]) || null),
    (h[st] = i),
    (h[Gs] = OE()),
    (h[Ds] = g),
    (h[qp] = f),
    (h[vt] = e.type == 2 ? t[vt] : h),
    h
  );
}
function ea(t, e, r, n, o) {
  let i = t.data[e];
  if (i === null) (i = p0(t, e, r, n, o)), eE() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = r), (i.value = n), (i.attrs = o);
    let s = QC();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return Mo(i, !0), i;
}
function p0(t, e, r, n, o) {
  let i = sg(),
    s = ag(),
    c = s ? i : i && i.parent,
    u = (t.data[e] = w0(t, c, r, e, n, o));
  return (
    t.firstChild === null && (t.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function em(t, e, r, n) {
  if (r === 0) return -1;
  let o = e.length;
  for (let i = 0; i < r; i++) e.push(n), t.blueprint.push(n), t.data.push(null);
  return o;
}
function tm(t, e, r, n, o) {
  let i = $n(),
    s = n & 2;
  try {
    Pn(-1), s && e.length > tn && Kg(t, e, tn, !1), ht(s ? 2 : 0, o), r(n, o);
  } finally {
    Pn(i), ht(s ? 3 : 1, o);
  }
}
function nm(t, e, r) {
  if (Zp(e)) {
    let n = z(null);
    try {
      let o = e.directiveStart,
        i = e.directiveEnd;
      for (let s = o; s < i; s++) {
        let c = t.data[s];
        if (c.contentQueries) {
          let u = r[s];
          c.contentQueries(1, u, s);
        }
      }
    } finally {
      z(n);
    }
  }
}
function rm(t, e, r) {
  ig() && (M0(t, e, r, Je(r, e)), (r.flags & 64) === 64 && lm(t, e, r));
}
function om(t, e, r = Je) {
  let n = e.localNames;
  if (n !== null) {
    let o = e.index + 1;
    for (let i = 0; i < n.length; i += 2) {
      let s = n[i + 1],
        c = s === -1 ? r(e, t) : t[s];
      t[o++] = c;
    }
  }
}
function im(t) {
  let e = t.tView;
  return e === null || e.incompleteFirstPass
    ? (t.tView = Iu(
        1,
        null,
        t.template,
        t.decls,
        t.vars,
        t.directiveDefs,
        t.pipeDefs,
        t.viewQuery,
        t.schemas,
        t.consts,
        t.id
      ))
    : e;
}
function Iu(t, e, r, n, o, i, s, c, u, f, g) {
  let h = tn + n,
    y = h + o,
    v = g0(h, y),
    D = typeof f == "function" ? f() : f;
  return (v[j] = {
    type: t,
    blueprint: v,
    template: r,
    queries: null,
    viewQuery: c,
    declTNode: e,
    data: v.slice().fill(null, h),
    bindingStartIndex: h,
    expandoStartIndex: y,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: D,
    incompleteFirstPass: !1,
    ssrId: g,
  });
}
function g0(t, e) {
  let r = [];
  for (let n = 0; n < e; n++) r.push(n < t ? null : ln);
  return r;
}
function m0(t, e, r, n) {
  let i = n.get(BE, Lg) || r === gt.ShadowDom,
    s = t.selectRootElement(e, i);
  return v0(s), s;
}
function v0(t) {
  y0(t);
}
var y0 = () => null;
function w0(t, e, r, n, o, i) {
  let s = e ? e.injectorIndex : -1,
    c = 0;
  return (
    WC() && (c |= 128),
    {
      type: r,
      index: n,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: c,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: e,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function ip(t, e, r, n, o) {
  for (let i in e) {
    if (!e.hasOwnProperty(i)) continue;
    let s = e[i];
    if (s === void 0) continue;
    n ??= {};
    let c,
      u = Xt.None;
    Array.isArray(s) ? ((c = s[0]), (u = s[1])) : (c = s);
    let f = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      f = o[i];
    }
    t === 0 ? sp(n, r, f, c, u) : sp(n, r, f, c);
  }
  return n;
}
function sp(t, e, r, n, o) {
  let i;
  t.hasOwnProperty(r) ? (i = t[r]).push(e, n) : (i = t[r] = [e, n]),
    o !== void 0 && i.push(o);
}
function D0(t, e, r) {
  let n = e.directiveStart,
    o = e.directiveEnd,
    i = t.data,
    s = e.attrs,
    c = [],
    u = null,
    f = null;
  for (let g = n; g < o; g++) {
    let h = i[g],
      y = r ? r.get(h) : null,
      v = y ? y.inputs : null,
      D = y ? y.outputs : null;
    (u = ip(0, h.inputs, g, u, v)), (f = ip(1, h.outputs, g, f, D));
    let A = u !== null && s !== null && !Jl(e) ? F0(u, g, s) : null;
    c.push(A);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (e.flags |= 8),
    u.hasOwnProperty("style") && (e.flags |= 16)),
    (e.initialInputs = c),
    (e.inputs = u),
    (e.outputs = f);
}
function b0(t) {
  return t === "class"
    ? "className"
    : t === "for"
    ? "htmlFor"
    : t === "formaction"
    ? "formAction"
    : t === "innerHtml"
    ? "innerHTML"
    : t === "readonly"
    ? "readOnly"
    : t === "tabindex"
    ? "tabIndex"
    : t;
}
function sm(t, e, r, n, o, i, s, c) {
  let u = Je(e, r),
    f = e.inputs,
    g;
  !c && f != null && (g = f[n])
    ? (Mu(t, r, g, n, o), qs(e) && C0(r, e.index))
    : e.type & 3
    ? ((n = b0(n)),
      (o = s != null ? s(o, e.value || "", n) : o),
      i.setProperty(u, n, o))
    : e.type & 12;
}
function C0(t, e) {
  let r = sn(e, t);
  r[N] & 16 || (r[N] |= 64);
}
function am(t, e, r, n) {
  if (ig()) {
    let o = n === null ? null : { "": -1 },
      i = S0(t, r),
      s,
      c;
    i === null ? (s = c = null) : ([s, c] = i),
      s !== null && cm(t, e, r, s, o, c),
      o && T0(r, n, o);
  }
  r.mergedAttrs = mo(r.mergedAttrs, r.attrs);
}
function cm(t, e, r, n, o, i) {
  for (let f = 0; f < n.length; f++) wl(Ts(r, e), t, n[f].type);
  A0(r, t.data.length, n.length);
  for (let f = 0; f < n.length; f++) {
    let g = n[f];
    g.providersResolver && g.providersResolver(g);
  }
  let s = !1,
    c = !1,
    u = em(t, e, n.length, null);
  for (let f = 0; f < n.length; f++) {
    let g = n[f];
    (r.mergedAttrs = mo(r.mergedAttrs, g.hostAttrs)),
      N0(t, r, e, u, g),
      x0(u, g, o),
      g.contentQueries !== null && (r.flags |= 4),
      (g.hostBindings !== null || g.hostAttrs !== null || g.hostVars !== 0) &&
        (r.flags |= 64);
    let h = g.type.prototype;
    !s &&
      (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) &&
      ((t.preOrderHooks ??= []).push(r.index), (s = !0)),
      !c &&
        (h.ngOnChanges || h.ngDoCheck) &&
        ((t.preOrderCheckHooks ??= []).push(r.index), (c = !0)),
      u++;
  }
  D0(t, r, i);
}
function E0(t, e, r, n, o) {
  let i = o.hostBindings;
  if (i) {
    let s = t.hostBindingOpCodes;
    s === null && (s = t.hostBindingOpCodes = []);
    let c = ~e.index;
    I0(s) != c && s.push(c), s.push(r, n, i);
  }
}
function I0(t) {
  let e = t.length;
  for (; e > 0; ) {
    let r = t[--e];
    if (typeof r == "number" && r < 0) return r;
  }
  return 0;
}
function M0(t, e, r, n) {
  let o = r.directiveStart,
    i = r.directiveEnd;
  qs(r) && R0(e, r, t.data[o + r.componentOffset]),
    t.firstCreatePass || Ts(r, e),
    Fn(n, e);
  let s = r.initialInputs;
  for (let c = o; c < i; c++) {
    let u = t.data[c],
      f = xr(e, t, c, r);
    if ((Fn(f, e), s !== null && k0(e, c - o, f, u, r, s), nn(u))) {
      let g = sn(r.index, e);
      g[xt] = xr(e, t, c, r);
    }
  }
}
function lm(t, e, r) {
  let n = r.directiveStart,
    o = r.directiveEnd,
    i = r.index,
    s = nE();
  try {
    Pn(i);
    for (let c = n; c < o; c++) {
      let u = t.data[c],
        f = e[c];
      ml(c),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          _0(u, f);
    }
  } finally {
    Pn(-1), ml(s);
  }
}
function _0(t, e) {
  t.hostBindings !== null && t.hostBindings(1, e);
}
function S0(t, e) {
  let r = t.directiveRegistry,
    n = null,
    o = null;
  if (r)
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      if (gC(e, s.selectors, !1))
        if ((n || (n = []), nn(s)))
          if (s.findHostDirectiveDefs !== null) {
            let c = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, c, o),
              n.unshift(...c, s);
            let u = c.length;
            xl(t, e, u);
          } else n.unshift(s), xl(t, e, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, n, o), n.push(s);
    }
  return n === null ? null : [n, o];
}
function xl(t, e, r) {
  (e.componentOffset = r), (t.components ??= []).push(e.index);
}
function T0(t, e, r) {
  if (e) {
    let n = (t.localNames = []);
    for (let o = 0; o < e.length; o += 2) {
      let i = r[e[o + 1]];
      if (i == null) throw new _(-301, !1);
      n.push(e[o], i);
    }
  }
}
function x0(t, e, r) {
  if (r) {
    if (e.exportAs)
      for (let n = 0; n < e.exportAs.length; n++) r[e.exportAs[n]] = t;
    nn(e) && (r[""] = t);
  }
}
function A0(t, e, r) {
  (t.flags |= 1),
    (t.directiveStart = e),
    (t.directiveEnd = e + r),
    (t.providerIndexes = e);
}
function N0(t, e, r, n, o) {
  t.data[n] = o;
  let i = o.factory || (o.factory = Cr(o.type, !0)),
    s = new kn(i, nn(o), k);
  (t.blueprint[n] = s), (r[n] = s), E0(t, e, n, em(t, r, o.hostVars, ln), o);
}
function R0(t, e, r) {
  let n = Je(e, t),
    o = im(r),
    i = t[mt].rendererFactory,
    s = 16;
  r.signals ? (s = 4096) : r.onPush && (s = 64);
  let c = ta(
    t,
    Xs(t, o, null, s, n, e, null, i.createRenderer(n, r), null, null, null)
  );
  t[e.index] = c;
}
function O0(t, e, r, n, o, i) {
  let s = Je(t, e);
  P0(e[ge], s, i, t.value, r, n, o);
}
function P0(t, e, r, n, o, i, s) {
  if (i == null) t.removeAttribute(e, o, r);
  else {
    let c = s == null ? br(i) : s(i, n || "", o);
    t.setAttribute(e, o, c, r);
  }
}
function k0(t, e, r, n, o, i) {
  let s = i[e];
  if (s !== null)
    for (let c = 0; c < s.length; ) {
      let u = s[c++],
        f = s[c++],
        g = s[c++],
        h = s[c++];
      Xg(n, r, u, f, g, h);
    }
}
function F0(t, e, r) {
  let n = null,
    o = 0;
  for (; o < r.length; ) {
    let i = r[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (t.hasOwnProperty(i)) {
      n === null && (n = []);
      let s = t[i];
      for (let c = 0; c < s.length; c += 3)
        if (s[c] === e) {
          n.push(i, s[c + 1], s[c + 2], r[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return n;
}
function um(t, e, r, n) {
  return [t, !0, 0, e, null, n, null, r, null, null];
}
function dm(t, e) {
  let r = t.contentQueries;
  if (r !== null) {
    let n = z(null);
    try {
      for (let o = 0; o < r.length; o += 2) {
        let i = r[o],
          s = r[o + 1];
        if (s !== -1) {
          let c = t.data[s];
          ug(i), c.contentQueries(2, e[s], s);
        }
      }
    } finally {
      z(n);
    }
  }
}
function ta(t, e) {
  return t[yo] ? (t[zh][ot] = e) : (t[yo] = e), (t[zh] = e), e;
}
function Al(t, e, r) {
  ug(0);
  let n = z(null);
  try {
    e(t, r);
  } finally {
    z(n);
  }
}
function L0(t) {
  return (t[bs] ??= []);
}
function V0(t) {
  return (t.cleanup ??= []);
}
function fm(t, e) {
  let r = t[_r],
    n = r ? r.get(At, null) : null;
  n && n.handleError(e);
}
function Mu(t, e, r, n, o) {
  for (let i = 0; i < r.length; ) {
    let s = r[i++],
      c = r[i++],
      u = r[i++],
      f = e[s],
      g = t.data[s];
    Xg(g, f, n, c, u, o);
  }
}
function hm(t, e, r) {
  let n = Xp(e, t);
  YE(t[ge], n, r);
}
function j0(t, e) {
  let r = sn(e, t),
    n = r[j];
  B0(n, r);
  let o = r[Pt];
  o !== null && r[Ds] === null && (r[Ds] = vu(o, r[_r])), _u(n, r, r[xt]);
}
function B0(t, e) {
  for (let r = e.length; r < t.blueprint.length; r++) e.push(t.blueprint[r]);
}
function _u(t, e, r) {
  ru(e);
  try {
    let n = t.viewQuery;
    n !== null && Al(1, n, r);
    let o = t.template;
    o !== null && tm(t, e, o, 1, r),
      t.firstCreatePass && (t.firstCreatePass = !1),
      e[Tr]?.finishViewCreation(t),
      t.staticContentQueries && dm(t, e),
      t.staticViewQueries && Al(2, t.viewQuery, r);
    let i = t.components;
    i !== null && $0(e, i);
  } catch (n) {
    throw (
      (t.firstCreatePass &&
        ((t.incompleteFirstPass = !0), (t.firstCreatePass = !1)),
      n)
    );
  } finally {
    (e[N] &= -5), ou();
  }
}
function $0(t, e) {
  for (let r = 0; r < e.length; r++) j0(t, e[r]);
}
function U0(t, e, r, n) {
  let o = z(null);
  try {
    let i = e.tView,
      c = t[N] & 4096 ? 4096 : 16,
      u = Xs(
        t,
        i,
        r,
        c,
        null,
        e,
        null,
        null,
        n?.injector ?? null,
        n?.embeddedViewInjector ?? null,
        n?.dehydratedView ?? null
      ),
      f = t[e.index];
    u[Sr] = f;
    let g = t[Tr];
    return g !== null && (u[Tr] = g.createEmbeddedView(i)), _u(i, u, r), u;
  } finally {
    z(o);
  }
}
function ap(t, e) {
  return !e || e.firstChild === null || Ng(t);
}
function H0(t, e, r, n = !0) {
  let o = e[j];
  if ((XE(o, e, t, r), n)) {
    let s = Tl(r, t),
      c = e[ge],
      u = Wg(c, t[Rn]);
    u !== null && KE(o, t[st], c, e, u, s);
  }
  let i = e[Ds];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Os(t, e, r, n, o = !1) {
  for (; r !== null; ) {
    if (r.type === 128) {
      r = o ? r.projectionNext : r.next;
      continue;
    }
    let i = e[r.index];
    i !== null && n.push(yt(i)), kt(i) && z0(i, n);
    let s = r.type;
    if (s & 8) Os(t, e, r.child, n);
    else if (s & 32) {
      let c = Du(r, e),
        u;
      for (; (u = c()); ) n.push(u);
    } else if (s & 16) {
      let c = Zg(e, r);
      if (Array.isArray(c)) n.push(...c);
      else {
        let u = On(e[vt]);
        Os(u[j], u, c, n, !0);
      }
    }
    r = o ? r.projectionNext : r.next;
  }
  return n;
}
function z0(t, e) {
  for (let r = Qe; r < t.length; r++) {
    let n = t[r],
      o = n[j].firstChild;
    o !== null && Os(n[j], n, o, e);
  }
  t[Rn] !== t[Pt] && e.push(t[Rn]);
}
var pm = [];
function G0(t) {
  return t[Ye] ?? q0(t);
}
function q0(t) {
  let e = pm.pop() ?? Object.create(Z0);
  return (e.lView = t), e;
}
function W0(t) {
  t.lView[Ye] !== t && ((t.lView = null), pm.push(t));
}
var Z0 = $(b({}, co), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (t) => {
    Zs(t.lView);
  },
  consumerOnSignalRead() {
    this.lView[Ye] = this;
  },
});
function Y0(t) {
  let e = t[Ye] ?? Object.create(Q0);
  return (e.lView = t), e;
}
var Q0 = $(b({}, co), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (t) => {
    let e = On(t.lView);
    for (; e && !gm(e[j]); ) e = On(e);
    e && ng(e);
  },
  consumerOnSignalRead() {
    this.lView[Ye] = this;
  },
});
function gm(t) {
  return t.type !== 2;
}
var K0 = 100;
function mm(t, e = !0, r = 0) {
  let n = t[mt],
    o = n.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    J0(t, r);
  } catch (s) {
    throw (e && fm(t, s), s);
  } finally {
    i || (o.end?.(), n.inlineEffectRunner?.flush());
  }
}
function J0(t, e) {
  let r = cg();
  try {
    qh(!0), Nl(t, e);
    let n = 0;
    for (; Ws(t); ) {
      if (n === K0) throw new _(103, !1);
      n++, Nl(t, 1);
    }
  } finally {
    qh(r);
  }
}
function X0(t, e, r, n) {
  let o = e[N];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && e[mt].inlineEffectRunner?.flush(), ru(e);
  let c = !0,
    u = null,
    f = null;
  i ||
    (gm(t)
      ? ((f = G0(e)), (u = Pi(f)))
      : Qf() === null
      ? ((c = !1), (f = Y0(e)), (u = Pi(f)))
      : e[Ye] && (Tc(e[Ye]), (e[Ye] = null)));
  try {
    tg(e), XC(t.bindingStartIndex), r !== null && tm(t, e, r, 2, n);
    let g = (o & 3) === 3;
    if (!i)
      if (g) {
        let v = t.preOrderCheckHooks;
        v !== null && fs(e, v, null);
      } else {
        let v = t.preOrderHooks;
        v !== null && hs(e, v, 0, null), Yc(e, 0);
      }
    if ((s || eI(e), vm(e, 0), t.contentQueries !== null && dm(t, e), !i))
      if (g) {
        let v = t.contentCheckHooks;
        v !== null && fs(e, v);
      } else {
        let v = t.contentHooks;
        v !== null && hs(e, v, 1), Yc(e, 1);
      }
    h0(t, e);
    let h = t.components;
    h !== null && wm(e, h, 0);
    let y = t.viewQuery;
    if ((y !== null && Al(2, y, n), !i))
      if (g) {
        let v = t.viewCheckHooks;
        v !== null && fs(e, v);
      } else {
        let v = t.viewHooks;
        v !== null && hs(e, v, 2), Yc(e, 2);
      }
    if ((t.firstUpdatePass === !0 && (t.firstUpdatePass = !1), e[Zc])) {
      for (let v of e[Zc]) v();
      e[Zc] = null;
    }
    i || (e[N] &= -73);
  } catch (g) {
    throw (i || Zs(e), g);
  } finally {
    f !== null && (_c(f, u), c && W0(f)), ou();
  }
}
function vm(t, e) {
  for (let r = Og(t); r !== null; r = Pg(r))
    for (let n = Qe; n < r.length; n++) {
      let o = r[n];
      ym(o, e);
    }
}
function eI(t) {
  for (let e = Og(t); e !== null; e = Pg(e)) {
    if (!(e[N] & Is.HasTransplantedViews)) continue;
    let r = e[Es];
    for (let n = 0; n < r.length; n++) {
      let o = r[n];
      ng(o);
    }
  }
}
function tI(t, e, r) {
  let n = sn(e, t);
  ym(n, r);
}
function ym(t, e) {
  nu(t) && Nl(t, e);
}
function Nl(t, e) {
  let n = t[j],
    o = t[N],
    i = t[Ye],
    s = !!(e === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && e === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Sc(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (t[N] &= -9217),
    s)
  )
    X0(n, t, n.template, t[xt]);
  else if (o & 8192) {
    vm(t, 1);
    let c = n.components;
    c !== null && wm(t, c, 1);
  }
}
function wm(t, e, r) {
  for (let n = 0; n < e.length; n++) tI(t, e[n], r);
}
function Su(t, e) {
  let r = cg() ? 64 : 1088;
  for (t[mt].changeDetectionScheduler?.notify(e); t; ) {
    t[N] |= r;
    let n = On(t);
    if (hl(t) && !n) return t;
    t = n;
  }
  return null;
}
var Ln = class {
    get rootNodes() {
      let e = this._lView,
        r = e[j];
      return Os(r, e, r.firstChild, []);
    }
    constructor(e, r, n = !0) {
      (this._lView = e),
        (this._cdRefInjectingView = r),
        (this.notifyErrorHandler = n),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[xt];
    }
    set context(e) {
      this._lView[xt] = e;
    }
    get destroyed() {
      return (this._lView[N] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let e = this._lView[xe];
        if (kt(e)) {
          let r = e[Cs],
            n = r ? r.indexOf(this) : -1;
          n > -1 && (Sl(e, n), ys(r, n));
        }
        this._attachedToViewContainer = !1;
      }
      Gg(this._lView[j], this._lView);
    }
    onDestroy(e) {
      rg(this._lView, e);
    }
    markForCheck() {
      Su(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[N] &= -129;
    }
    reattach() {
      gl(this._lView), (this._lView[N] |= 128);
    }
    detectChanges() {
      (this._lView[N] |= 1024), mm(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new _(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let e = hl(this._lView),
        r = this._lView[Sr];
      r !== null && !e && bu(r, this._lView), Hg(this._lView[j], this._lView);
    }
    attachToAppRef(e) {
      if (this._attachedToViewContainer) throw new _(902, !1);
      this._appRef = e;
      let r = hl(this._lView),
        n = this._lView[Sr];
      n !== null && !r && zg(n, this._lView), gl(this._lView);
    }
  },
  Tu = (() => {
    let e = class e {};
    e.__NG_ELEMENT_ID__ = oI;
    let t = e;
    return t;
  })(),
  nI = Tu,
  rI = class extends nI {
    constructor(e, r, n) {
      super(),
        (this._declarationLView = e),
        (this._declarationTContainer = r),
        (this.elementRef = n);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(e, r) {
      return this.createEmbeddedViewImpl(e, r);
    }
    createEmbeddedViewImpl(e, r, n) {
      let o = U0(this._declarationLView, this._declarationTContainer, e, {
        embeddedViewInjector: r,
        dehydratedView: n,
      });
      return new Ln(o);
    }
  };
function oI() {
  return iI(Ae(), re());
}
function iI(t, e) {
  return t.type & 4 ? new rI(e, t, Qs(t, e)) : null;
}
var s1 = new RegExp(`^(\\d+)*(${VE}|${LE})*(.*)`);
var sI = () => null;
function cp(t, e) {
  return sI(t, e);
}
var Ar = class {},
  Dm = new S("", { providedIn: "root", factory: () => !1 });
var bm = new S(""),
  Cm = new S(""),
  Rl = class {},
  Ps = class {};
function aI(t) {
  let e = Error(`No component factory found for ${Fe(t)}.`);
  return (e[cI] = t), e;
}
var cI = "ngComponent";
var Ol = class {
    resolveComponentFactory(e) {
      throw aI(e);
    }
  },
  Fu = class Fu {};
Fu.NULL = new Ol();
var Nr = Fu,
  Rr = class {},
  Un = (() => {
    let e = class e {
      constructor() {
        this.destroyNode = null;
      }
    };
    e.__NG_ELEMENT_ID__ = () => lI();
    let t = e;
    return t;
  })();
function lI() {
  let t = re(),
    e = Ae(),
    r = sn(e.index, t);
  return (Jt(r) ? r : t)[ge];
}
var uI = (() => {
  let e = class e {};
  e.ɵprov = M({ token: e, providedIn: "root", factory: () => null });
  let t = e;
  return t;
})();
function Pl(t, e, r) {
  let n = r ? t.styles : null,
    o = r ? t.classes : null,
    i = 0;
  if (e !== null)
    for (let s = 0; s < e.length; s++) {
      let c = e[s];
      if (typeof c == "number") i = c;
      else if (i == 1) o = Ph(o, c);
      else if (i == 2) {
        let u = c,
          f = e[++s];
        n = Ph(n, u + ": " + f + ";");
      }
    }
  r ? (t.styles = n) : (t.stylesWithoutHost = n),
    r ? (t.classes = o) : (t.classesWithoutHost = o);
}
var ks = class extends Nr {
  constructor(e) {
    super(), (this.ngModule = e);
  }
  resolveComponentFactory(e) {
    let r = en(e);
    return new Or(r, this.ngModule);
  }
};
function lp(t, e) {
  let r = [];
  for (let n in t) {
    if (!t.hasOwnProperty(n)) continue;
    let o = t[n];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      c = i ? o[1] : Xt.None;
    e
      ? r.push({
          propName: s,
          templateName: n,
          isSignal: (c & Xt.SignalBased) !== 0,
        })
      : r.push({ propName: s, templateName: n });
  }
  return r;
}
function dI(t) {
  let e = t.toLowerCase();
  return e === "svg" ? BC : e === "math" ? $C : null;
}
var Or = class extends Ps {
    get inputs() {
      let e = this.componentDef,
        r = e.inputTransforms,
        n = lp(e.inputs, !0);
      if (r !== null)
        for (let o of n)
          r.hasOwnProperty(o.propName) && (o.transform = r[o.propName]);
      return n;
    }
    get outputs() {
      return lp(this.componentDef.outputs, !1);
    }
    constructor(e, r) {
      super(),
        (this.componentDef = e),
        (this.ngModule = r),
        (this.componentType = e.type),
        (this.selector = wC(e.selectors)),
        (this.ngContentSelectors = e.ngContentSelectors
          ? e.ngContentSelectors
          : []),
        (this.isBoundToModule = !!r);
    }
    create(e, r, n, o) {
      let i = z(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Te ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let c = s ? new vl(e, s) : e,
          u = c.get(Rr, null);
        if (u === null) throw new _(407, !1);
        let f = c.get(uI, null),
          g = c.get(Ar, null),
          h = {
            rendererFactory: u,
            sanitizer: f,
            inlineEffectRunner: null,
            changeDetectionScheduler: g,
          },
          y = u.createRenderer(null, this.componentDef),
          v = this.componentDef.selectors[0][0] || "div",
          D = n
            ? m0(y, n, this.componentDef.encapsulation, c)
            : Ug(y, v, dI(v)),
          A = 512;
        this.componentDef.signals
          ? (A |= 4096)
          : this.componentDef.onPush || (A |= 16);
        let C = null;
        D !== null && (C = vu(D, c, !0));
        let I = Iu(0, null, null, 1, 0, null, null, null, null, null, null),
          J = Xs(null, I, null, A, null, null, h, y, c, null, C);
        ru(J);
        let ie,
          q,
          be = null;
        try {
          let te = this.componentDef,
            me,
            ct = null;
          te.findHostDirectiveDefs
            ? ((me = []),
              (ct = new Map()),
              te.findHostDirectiveDefs(te, me, ct),
              me.push(te))
            : (me = [te]);
          let Ie = fI(J, D);
          (be = hI(Ie, D, te, me, J, h, y)),
            (q = eg(I, tn)),
            D && mI(y, te, D, n),
            r !== void 0 && vI(q, this.ngContentSelectors, r),
            (ie = gI(be, te, me, ct, J, [yI])),
            _u(I, J, null);
        } catch (te) {
          throw (be !== null && Ml(be), Ml(J), te);
        } finally {
          ou();
        }
        return new kl(this.componentType, ie, Qs(q, J), J, q);
      } finally {
        z(i);
      }
    }
  },
  kl = class extends Rl {
    constructor(e, r, n, o, i) {
      super(),
        (this.location = n),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = r),
        (this.hostView = this.changeDetectorRef = new Ln(o, void 0, !1)),
        (this.componentType = e);
    }
    setInput(e, r) {
      let n = this._tNode.inputs,
        o;
      if (n !== null && (o = n[e])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(e) &&
            Object.is(this.previousInputValues.get(e), r))
        )
          return;
        let i = this._rootLView;
        Mu(i[j], i, o, e, r), this.previousInputValues.set(e, r);
        let s = sn(this._tNode.index, i);
        Su(s, 1);
      }
    }
    get injector() {
      return new Nn(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(e) {
      this.hostView.onDestroy(e);
    }
  };
function fI(t, e) {
  let r = t[j],
    n = tn;
  return (t[n] = e), ea(r, n, 2, "#host", null);
}
function hI(t, e, r, n, o, i, s) {
  let c = o[j];
  pI(n, t, e, s);
  let u = null;
  e !== null && (u = vu(e, o[_r]));
  let f = i.rendererFactory.createRenderer(e, r),
    g = 16;
  r.signals ? (g = 4096) : r.onPush && (g = 64);
  let h = Xs(o, im(r), null, g, o[t.index], t, i, f, null, null, u);
  return (
    c.firstCreatePass && xl(c, t, n.length - 1), ta(o, h), (o[t.index] = h)
  );
}
function pI(t, e, r, n) {
  for (let o of t) e.mergedAttrs = mo(e.mergedAttrs, o.hostAttrs);
  e.mergedAttrs !== null &&
    (Pl(e, e.mergedAttrs, !0), r !== null && Qg(n, r, e));
}
function gI(t, e, r, n, o, i) {
  let s = Ae(),
    c = o[j],
    u = Je(s, o);
  cm(c, o, s, r, null, n);
  for (let g = 0; g < r.length; g++) {
    let h = s.directiveStart + g,
      y = xr(o, c, h, s);
    Fn(y, o);
  }
  lm(c, o, s), u && Fn(u, o);
  let f = xr(o, c, s.directiveStart + s.componentOffset, s);
  if (((t[xt] = o[xt] = f), i !== null)) for (let g of i) g(f, e);
  return nm(c, s, o), f;
}
function mI(t, e, r, n) {
  if (n) ll(t, r, ["ng-version", "18.2.3"]);
  else {
    let { attrs: o, classes: i } = DC(e.selectors[0]);
    o && ll(t, r, o), i && i.length > 0 && Yg(t, r, i.join(" "));
  }
}
function vI(t, e, r) {
  let n = (t.projection = []);
  for (let o = 0; o < e.length; o++) {
    let i = r[o];
    n.push(i != null ? Array.from(i) : null);
  }
}
function yI() {
  let t = Ae();
  cu(re()[j], t);
}
var So = (() => {
  let e = class e {};
  e.__NG_ELEMENT_ID__ = wI;
  let t = e;
  return t;
})();
function wI() {
  let t = Ae();
  return bI(t, re());
}
var DI = So,
  Em = class extends DI {
    constructor(e, r, n) {
      super(),
        (this._lContainer = e),
        (this._hostTNode = r),
        (this._hostLView = n);
    }
    get element() {
      return Qs(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Nn(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let e = lu(this._hostTNode, this._hostLView);
      if (yg(e)) {
        let r = Ss(e, this._hostLView),
          n = _s(e),
          o = r[j].data[n + 8];
        return new Nn(o, r);
      } else return new Nn(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(e) {
      let r = up(this._lContainer);
      return (r !== null && r[e]) || null;
    }
    get length() {
      return this._lContainer.length - Qe;
    }
    createEmbeddedView(e, r, n) {
      let o, i;
      typeof n == "number"
        ? (o = n)
        : n != null && ((o = n.index), (i = n.injector));
      let s = cp(this._lContainer, e.ssrId),
        c = e.createEmbeddedViewImpl(r || {}, i, s);
      return this.insertImpl(c, o, ap(this._hostTNode, s)), c;
    }
    createComponent(e, r, n, o, i) {
      let s = e && !FC(e),
        c;
      if (s) c = r;
      else {
        let D = r || {};
        (c = D.index),
          (n = D.injector),
          (o = D.projectableNodes),
          (i = D.environmentInjector || D.ngModuleRef);
      }
      let u = s ? e : new Or(en(e)),
        f = n || this.parentInjector;
      if (!i && u.ngModule == null) {
        let A = (s ? f : this.parentInjector).get(Te, null);
        A && (i = A);
      }
      let g = en(u.componentType ?? {}),
        h = cp(this._lContainer, g?.id ?? null),
        y = h?.firstChild ?? null,
        v = u.create(f, o, y, i);
      return this.insertImpl(v.hostView, c, ap(this._hostTNode, h)), v;
    }
    insert(e, r) {
      return this.insertImpl(e, r, !0);
    }
    insertImpl(e, r, n) {
      let o = e._lView;
      if (UC(o)) {
        let c = this.indexOf(e);
        if (c !== -1) this.detach(c);
        else {
          let u = o[xe],
            f = new Em(u, u[st], u[xe]);
          f.detach(f.indexOf(e));
        }
      }
      let i = this._adjustIndex(r),
        s = this._lContainer;
      return H0(s, o, i, n), e.attachToViewContainerRef(), xp(el(s), i, e), e;
    }
    move(e, r) {
      return this.insert(e, r);
    }
    indexOf(e) {
      let r = up(this._lContainer);
      return r !== null ? r.indexOf(e) : -1;
    }
    remove(e) {
      let r = this._adjustIndex(e, -1),
        n = Sl(this._lContainer, r);
      n && (ys(el(this._lContainer), r), Gg(n[j], n));
    }
    detach(e) {
      let r = this._adjustIndex(e, -1),
        n = Sl(this._lContainer, r);
      return n && ys(el(this._lContainer), r) != null ? new Ln(n) : null;
    }
    _adjustIndex(e, r = 0) {
      return e ?? this.length + r;
    }
  };
function up(t) {
  return t[Cs];
}
function el(t) {
  return t[Cs] || (t[Cs] = []);
}
function bI(t, e) {
  let r,
    n = e[t.index];
  return (
    kt(n) ? (r = n) : ((r = um(n, e, null, t)), (e[t.index] = r), ta(e, r)),
    EI(r, e, t, n),
    new Em(r, t, e)
  );
}
function CI(t, e) {
  let r = t[ge],
    n = r.createComment(""),
    o = Je(e, t),
    i = Wg(r, o);
  return Rs(r, i, n, o0(r, o), !1), n;
}
var EI = _I,
  II = () => !1;
function MI(t, e, r) {
  return II(t, e, r);
}
function _I(t, e, r, n) {
  if (t[Rn]) return;
  let o;
  r.type & 8 ? (o = yt(n)) : (o = CI(e, r)), (t[Rn] = o);
}
var dp = new Set();
function Fr(t) {
  dp.has(t) ||
    (dp.add(t),
    performance?.mark?.("mark_feature_usage", { detail: { feature: t } }));
}
function SI(t) {
  return typeof t == "function" && t[Mt] !== void 0;
}
function To(t, e) {
  Fr("NgSignals");
  let r = ah(t),
    n = r[Mt];
  return (
    e?.equal && (n.equal = e.equal),
    (r.set = (o) => xc(n, o)),
    (r.update = (o) => ch(n, o)),
    (r.asReadonly = TI.bind(r)),
    r
  );
}
function TI() {
  let t = this[Mt];
  if (t.readonlyFn === void 0) {
    let e = () => this();
    (e[Mt] = t), (t.readonlyFn = e);
  }
  return t.readonlyFn;
}
function Im(t) {
  return SI(t) && typeof t.set == "function";
}
function xI(t) {
  return Object.getPrototypeOf(t.prototype).constructor;
}
function Ft(t) {
  let e = xI(t.type),
    r = !0,
    n = [t];
  for (; e; ) {
    let o;
    if (nn(t)) o = e.ɵcmp || e.ɵdir;
    else {
      if (e.ɵcmp) throw new _(903, !1);
      o = e.ɵdir;
    }
    if (o) {
      if (r) {
        n.push(o);
        let s = t;
        (s.inputs = cs(t.inputs)),
          (s.inputTransforms = cs(t.inputTransforms)),
          (s.declaredInputs = cs(t.declaredInputs)),
          (s.outputs = cs(t.outputs));
        let c = o.hostBindings;
        c && PI(t, c);
        let u = o.viewQuery,
          f = o.contentQueries;
        if (
          (u && RI(t, u),
          f && OI(t, f),
          AI(t, o),
          $b(t.outputs, o.outputs),
          nn(o) && o.data.animation)
        ) {
          let g = t.data;
          g.animation = (g.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let c = i[s];
          c && c.ngInherit && c(t), c === Ft && (r = !1);
        }
    }
    e = Object.getPrototypeOf(e);
  }
  NI(n);
}
function AI(t, e) {
  for (let r in e.inputs) {
    if (!e.inputs.hasOwnProperty(r) || t.inputs.hasOwnProperty(r)) continue;
    let n = e.inputs[r];
    if (
      n !== void 0 &&
      ((t.inputs[r] = n),
      (t.declaredInputs[r] = e.declaredInputs[r]),
      e.inputTransforms !== null)
    ) {
      let o = Array.isArray(n) ? n[0] : n;
      if (!e.inputTransforms.hasOwnProperty(o)) continue;
      (t.inputTransforms ??= {}), (t.inputTransforms[o] = e.inputTransforms[o]);
    }
  }
}
function NI(t) {
  let e = 0,
    r = null;
  for (let n = t.length - 1; n >= 0; n--) {
    let o = t[n];
    (o.hostVars = e += o.hostVars),
      (o.hostAttrs = mo(o.hostAttrs, (r = mo(r, o.hostAttrs))));
  }
}
function cs(t) {
  return t === Er ? {} : t === Ze ? [] : t;
}
function RI(t, e) {
  let r = t.viewQuery;
  r
    ? (t.viewQuery = (n, o) => {
        e(n, o), r(n, o);
      })
    : (t.viewQuery = e);
}
function OI(t, e) {
  let r = t.contentQueries;
  r
    ? (t.contentQueries = (n, o, i) => {
        e(n, o, i), r(n, o, i);
      })
    : (t.contentQueries = e);
}
function PI(t, e) {
  let r = t.hostBindings;
  r
    ? (t.hostBindings = (n, o) => {
        e(n, o), r(n, o);
      })
    : (t.hostBindings = e);
}
function xu(t) {
  let e = t.inputConfig,
    r = {};
  for (let n in e)
    if (e.hasOwnProperty(n)) {
      let o = e[n];
      Array.isArray(o) && o[3] && (r[n] = o[3]);
    }
  t.inputTransforms = r;
}
var rn = class {},
  wo = class {};
var Fl = class extends rn {
    constructor(e, r, n, o = !0) {
      super(),
        (this.ngModuleType = e),
        (this._parent = r),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new ks(this));
      let i = Vp(e);
      (this._bootstrapComponents = $g(i.bootstrap)),
        (this._r3Injector = Sg(
          e,
          r,
          [
            { provide: rn, useValue: this },
            { provide: Nr, useValue: this.componentFactoryResolver },
            ...n,
          ],
          Fe(e),
          new Set(["environment"])
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let e = this._r3Injector;
      !e.destroyed && e.destroy(),
        this.destroyCbs.forEach((r) => r()),
        (this.destroyCbs = null);
    }
    onDestroy(e) {
      this.destroyCbs.push(e);
    }
  },
  Ll = class extends wo {
    constructor(e) {
      super(), (this.moduleType = e);
    }
    create(e) {
      return new Fl(this.moduleType, e, []);
    }
  };
var Fs = class extends rn {
  constructor(e) {
    super(),
      (this.componentFactoryResolver = new ks(this)),
      (this.instance = null);
    let r = new vo(
      [
        ...e.providers,
        { provide: rn, useValue: this },
        { provide: Nr, useValue: this.componentFactoryResolver },
      ],
      e.parent || eu(),
      e.debugName,
      new Set(["environment"])
    );
    (this.injector = r),
      e.runEnvironmentInitializers && r.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(e) {
    this.injector.onDestroy(e);
  }
};
function na(t, e, r = null) {
  return new Fs({
    providers: t,
    parent: e,
    debugName: r,
    runEnvironmentInitializers: !0,
  }).injector;
}
function Mm(t) {
  return FI(t)
    ? Array.isArray(t) || (!(t instanceof Map) && Symbol.iterator in t)
    : !1;
}
function kI(t, e) {
  if (Array.isArray(t)) for (let r = 0; r < t.length; r++) e(t[r]);
  else {
    let r = t[Symbol.iterator](),
      n;
    for (; !(n = r.next()).done; ) e(n.value);
  }
}
function FI(t) {
  return t !== null && (typeof t == "function" || typeof t == "object");
}
function Vn(t, e, r) {
  let n = t[e];
  return Object.is(n, r) ? !1 : ((t[e] = r), !0);
}
function LI(t, e, r, n) {
  let o = Vn(t, e, r);
  return Vn(t, e + 1, n) || o;
}
function VI(t) {
  return (t.flags & 32) === 32;
}
function jI(t, e, r, n, o, i, s, c, u) {
  let f = e.consts,
    g = ea(e, t, 4, s || null, c || null);
  am(e, r, g, Ms(f, u)), cu(e, g);
  let h = (g.tView = Iu(
    2,
    g,
    n,
    o,
    i,
    e.directiveRegistry,
    e.pipeRegistry,
    null,
    e.schemas,
    f,
    null
  ));
  return (
    e.queries !== null &&
      (e.queries.template(e, g), (h.queries = e.queries.embeddedTView(g))),
    g
  );
}
function BI(t, e, r, n, o, i, s, c, u, f) {
  let g = r + tn,
    h = e.firstCreatePass ? jI(g, e, t, n, o, i, s, c, u) : e.data[g];
  Mo(h, !1);
  let y = $I(e, t, h, r);
  su() && Cu(e, t, y, h), Fn(y, t);
  let v = um(y, t, y, h);
  return (
    (t[g] = v),
    ta(t, v),
    MI(v, h, t),
    tu(h) && rm(e, t, h),
    u != null && om(t, h, f),
    h
  );
}
function Au(t, e, r, n, o, i, s, c) {
  let u = re(),
    f = ze(),
    g = Ms(f.consts, i);
  return BI(u, f, t, e, r, n, o, g, s, c), Au;
}
var $I = UI;
function UI(t, e, r, n) {
  return au(!0), e[ge].createComment("");
}
var yr = (function (t) {
    return (
      (t[(t.EarlyRead = 0)] = "EarlyRead"),
      (t[(t.Write = 1)] = "Write"),
      (t[(t.MixedReadWrite = 2)] = "MixedReadWrite"),
      (t[(t.Read = 3)] = "Read"),
      t
    );
  })(yr || {}),
  _m = (() => {
    let e = class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
    };
    e.ɵprov = M({ token: e, providedIn: "root", factory: () => new e() });
    let t = e;
    return t;
  })(),
  An = class An {
    constructor() {
      (this.ngZone = w(ae)),
        (this.scheduler = w(Ar)),
        (this.errorHandler = w(At, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    execute() {
      this.executing = !0;
      for (let e of An.PHASES)
        for (let r of this.sequences)
          if (!(r.erroredOrDestroyed || !r.hooks[e]))
            try {
              r.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                r.hooks[e](r.pipelinedValue)
              );
            } catch (n) {
              (r.erroredOrDestroyed = !0), this.errorHandler?.handleError(n);
            }
      this.executing = !1;
      for (let e of this.sequences)
        e.afterRun(), e.once && this.sequences.delete(e);
      for (let e of this.deferredRegistrations) this.sequences.add(e);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(e) {
      this.executing
        ? this.deferredRegistrations.add(e)
        : (this.sequences.add(e), this.scheduler.notify(6));
    }
    unregister(e) {
      this.executing && this.sequences.has(e)
        ? ((e.erroredOrDestroyed = !0),
          (e.pipelinedValue = void 0),
          (e.once = !0))
        : (this.sequences.delete(e), this.deferredRegistrations.delete(e));
    }
  };
(An.PHASES = [yr.EarlyRead, yr.Write, yr.MixedReadWrite, yr.Read]),
  (An.ɵprov = M({ token: An, providedIn: "root", factory: () => new An() }));
var Vl = An,
  jl = class {
    constructor(e, r, n, o) {
      (this.impl = e),
        (this.hooks = r),
        (this.once = n),
        (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        (this.unregisterOnDestroy = o.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1), (this.pipelinedValue = void 0);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy();
    }
  };
function Nu(t, e) {
  !e?.injector && kC(Nu);
  let r = e?.injector ?? w(it);
  return qE(r) ? (Fr("NgAfterNextRender"), zI(t, r, e, !0)) : GI;
}
function HI(t, e) {
  if (t instanceof Function) {
    let r = [void 0, void 0, void 0, void 0];
    return (r[e] = t), r;
  } else return [t.earlyRead, t.write, t.mixedReadWrite, t.read];
}
function zI(t, e, r, n) {
  let o = e.get(_m);
  o.impl ??= e.get(Vl);
  let i = r?.phase ?? yr.MixedReadWrite,
    s = new jl(o.impl, HI(t, i), n, e.get(du));
  return o.impl.register(s), s;
}
var GI = { destroy() {} };
function xo(t, e, r, n) {
  let o = re(),
    i = Ys();
  if (Vn(o, i, e)) {
    let s = ze(),
      c = iu();
    O0(c, o, t, e, r, n);
  }
  return xo;
}
function qI(t, e, r, n) {
  return Vn(t, Ys(), r) ? e + br(r) + n : ln;
}
function WI(t, e, r, n, o, i) {
  let s = JC(),
    c = LI(t, s, r, o);
  return lg(2), c ? e + br(r) + n + br(o) + i : ln;
}
function ls(t, e) {
  return (t << 17) | (e << 2);
}
function jn(t) {
  return (t >> 17) & 32767;
}
function ZI(t) {
  return (t & 2) == 2;
}
function YI(t, e) {
  return (t & 131071) | (e << 17);
}
function Bl(t) {
  return t | 2;
}
function Pr(t) {
  return (t & 131068) >> 2;
}
function tl(t, e) {
  return (t & -131069) | (e << 2);
}
function QI(t) {
  return (t & 1) === 1;
}
function $l(t) {
  return t | 1;
}
function KI(t, e, r, n, o, i) {
  let s = i ? e.classBindings : e.styleBindings,
    c = jn(s),
    u = Pr(s);
  t[n] = r;
  let f = !1,
    g;
  if (Array.isArray(r)) {
    let h = r;
    (g = h[1]), (g === null || Co(h, g) > 0) && (f = !0);
  } else g = r;
  if (o)
    if (u !== 0) {
      let y = jn(t[c + 1]);
      (t[n + 1] = ls(y, c)),
        y !== 0 && (t[y + 1] = tl(t[y + 1], n)),
        (t[c + 1] = YI(t[c + 1], n));
    } else
      (t[n + 1] = ls(c, 0)), c !== 0 && (t[c + 1] = tl(t[c + 1], n)), (c = n);
  else
    (t[n + 1] = ls(u, 0)),
      c === 0 ? (c = n) : (t[u + 1] = tl(t[u + 1], n)),
      (u = n);
  f && (t[n + 1] = Bl(t[n + 1])),
    fp(t, g, n, !0),
    fp(t, g, n, !1),
    JI(e, g, t, n, i),
    (s = ls(c, u)),
    i ? (e.classBindings = s) : (e.styleBindings = s);
}
function JI(t, e, r, n, o) {
  let i = o ? t.residualClasses : t.residualStyles;
  i != null &&
    typeof e == "string" &&
    Co(i, e) >= 0 &&
    (r[n + 1] = $l(r[n + 1]));
}
function fp(t, e, r, n) {
  let o = t[r + 1],
    i = e === null,
    s = n ? jn(o) : Pr(o),
    c = !1;
  for (; s !== 0 && (c === !1 || i); ) {
    let u = t[s],
      f = t[s + 1];
    XI(u, e) && ((c = !0), (t[s + 1] = n ? $l(f) : Bl(f))),
      (s = n ? jn(f) : Pr(f));
  }
  c && (t[r + 1] = n ? Bl(o) : $l(o));
}
function XI(t, e) {
  return t === null || e == null || (Array.isArray(t) ? t[1] : t) === e
    ? !0
    : Array.isArray(t) && typeof e == "string"
    ? Co(t, e) >= 0
    : !1;
}
function Ao(t, e, r) {
  let n = re(),
    o = Ys();
  if (Vn(n, o, e)) {
    let i = ze(),
      s = iu();
    sm(i, s, n, t, e, n[ge], r, !1);
  }
  return Ao;
}
function hp(t, e, r, n, o) {
  let i = e.inputs,
    s = o ? "class" : "style";
  Mu(t, r, i[s], s, n);
}
function ra(t, e) {
  return eM(t, e, null, !0), ra;
}
function eM(t, e, r, n) {
  let o = re(),
    i = ze(),
    s = lg(2);
  if ((i.firstUpdatePass && nM(i, t, s, n), e !== ln && Vn(o, s, e))) {
    let c = i.data[$n()];
    aM(i, c, o, o[ge], t, (o[s + 1] = cM(e, r)), n, s);
  }
}
function tM(t, e) {
  return e >= t.expandoStartIndex;
}
function nM(t, e, r, n) {
  let o = t.data;
  if (o[r + 1] === null) {
    let i = o[$n()],
      s = tM(t, r);
    lM(i, n) && e === null && !s && (e = !1),
      (e = rM(o, i, e, n)),
      KI(o, i, e, r, s, n);
  }
}
function rM(t, e, r, n) {
  let o = rE(t),
    i = n ? e.residualClasses : e.residualStyles;
  if (o === null)
    (n ? e.classBindings : e.styleBindings) === 0 &&
      ((r = nl(null, t, e, r, n)), (r = Do(r, e.attrs, n)), (i = null));
  else {
    let s = e.directiveStylingLast;
    if (s === -1 || t[s] !== o)
      if (((r = nl(o, t, e, r, n)), i === null)) {
        let u = oM(t, e, n);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = nl(null, t, e, u[1], n)),
          (u = Do(u, e.attrs, n)),
          iM(t, e, n, u));
      } else i = sM(t, e, n);
  }
  return (
    i !== void 0 && (n ? (e.residualClasses = i) : (e.residualStyles = i)), r
  );
}
function oM(t, e, r) {
  let n = r ? e.classBindings : e.styleBindings;
  if (Pr(n) !== 0) return t[jn(n)];
}
function iM(t, e, r, n) {
  let o = r ? e.classBindings : e.styleBindings;
  t[jn(o)] = n;
}
function sM(t, e, r) {
  let n,
    o = e.directiveEnd;
  for (let i = 1 + e.directiveStylingLast; i < o; i++) {
    let s = t[i].hostAttrs;
    n = Do(n, s, r);
  }
  return Do(n, e.attrs, r);
}
function nl(t, e, r, n, o) {
  let i = null,
    s = r.directiveEnd,
    c = r.directiveStylingLast;
  for (
    c === -1 ? (c = r.directiveStart) : c++;
    c < s && ((i = e[c]), (n = Do(n, i.hostAttrs, o)), i !== t);

  )
    c++;
  return t !== null && (r.directiveStylingLast = c), n;
}
function Do(t, e, r) {
  let n = r ? 1 : 2,
    o = -1;
  if (e !== null)
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      typeof s == "number"
        ? (o = s)
        : o === n &&
          (Array.isArray(t) || (t = t === void 0 ? [] : ["", t]),
          aC(t, s, r ? !0 : e[++i]));
    }
  return t === void 0 ? null : t;
}
function aM(t, e, r, n, o, i, s, c) {
  if (!(e.type & 3)) return;
  let u = t.data,
    f = u[c + 1],
    g = QI(f) ? pp(u, e, r, o, Pr(f), s) : void 0;
  if (!Ls(g)) {
    Ls(i) || (ZI(f) && (i = pp(u, null, r, o, c, s)));
    let h = Xp($n(), r);
    d0(n, s, h, o, i);
  }
}
function pp(t, e, r, n, o, i) {
  let s = e === null,
    c;
  for (; o > 0; ) {
    let u = t[o],
      f = Array.isArray(u),
      g = f ? u[1] : u,
      h = g === null,
      y = r[o + 1];
    y === ln && (y = h ? Ze : void 0);
    let v = h ? qc(y, n) : g === n ? y : void 0;
    if ((f && !Ls(v) && (v = qc(u, n)), Ls(v) && ((c = v), s))) return c;
    let D = t[o + 1];
    o = s ? jn(D) : Pr(D);
  }
  if (e !== null) {
    let u = i ? e.residualClasses : e.residualStyles;
    u != null && (c = qc(u, n));
  }
  return c;
}
function Ls(t) {
  return t !== void 0;
}
function cM(t, e) {
  return (
    t == null ||
      t === "" ||
      (typeof e == "string"
        ? (t = t + e)
        : typeof t == "object" && (t = Fe(_o(t)))),
    t
  );
}
function lM(t, e) {
  return (t.flags & (e ? 8 : 16)) !== 0;
}
function uM(t, e, r, n, o, i) {
  let s = e.consts,
    c = Ms(s, o),
    u = ea(e, t, 2, n, c);
  return (
    am(e, r, u, Ms(s, i)),
    u.attrs !== null && Pl(u, u.attrs, !1),
    u.mergedAttrs !== null && Pl(u, u.mergedAttrs, !0),
    e.queries !== null && e.queries.elementStart(e, u),
    u
  );
}
function B(t, e, r, n) {
  let o = re(),
    i = ze(),
    s = tn + t,
    c = o[ge],
    u = i.firstCreatePass ? uM(s, i, o, e, r, n) : i.data[s],
    f = dM(i, o, u, c, e, t);
  o[s] = f;
  let g = tu(u);
  return (
    Mo(u, !0),
    Qg(c, f, u),
    !VI(u) && su() && Cu(i, o, f, u),
    zC() === 0 && Fn(f, o),
    GC(),
    g && (rm(i, o, u), nm(i, u, o)),
    n !== null && om(o, u),
    B
  );
}
function K() {
  let t = Ae();
  ag() ? KC() : ((t = t.parent), Mo(t, !1));
  let e = t;
  ZC(e) && YC(), qC();
  let r = ze();
  return (
    r.firstCreatePass && (cu(r, t), Zp(t) && r.queries.elementEnd(t)),
    e.classesWithoutHost != null &&
      lE(e) &&
      hp(r, e, re(), e.classesWithoutHost, !0),
    e.stylesWithoutHost != null &&
      uE(e) &&
      hp(r, e, re(), e.stylesWithoutHost, !1),
    K
  );
}
function Hn(t, e, r, n) {
  return B(t, e, r, n), K(), Hn;
}
var dM = (t, e, r, n, o, i) => (au(!0), Ug(n, o, iE()));
var Vs = "en-US";
var fM = Vs;
function hM(t) {
  typeof t == "string" && (fM = t.toLowerCase().replace(/_/g, "-"));
}
var pM = (t, e, r) => {};
function Dt(t, e, r, n) {
  let o = re(),
    i = ze(),
    s = Ae();
  return Sm(i, o, o[ge], s, t, e, n), Dt;
}
function gM(t, e, r, n) {
  let o = t.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === r && o[i + 1] === n) {
        let c = e[bs],
          u = o[i + 2];
        return c.length > u ? c[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function Sm(t, e, r, n, o, i, s) {
  let c = tu(n),
    f = t.firstCreatePass && V0(t),
    g = e[xt],
    h = L0(e),
    y = !0;
  if (n.type & 3 || s) {
    let A = Je(n, e),
      C = s ? s(A) : A,
      I = h.length,
      J = s ? (q) => s(yt(q[n.index])) : n.index,
      ie = null;
    if ((!s && c && (ie = gM(t, e, o, n.index)), ie !== null)) {
      let q = ie.__ngLastListenerFn__ || ie;
      (q.__ngNextListenerFn__ = i), (ie.__ngLastListenerFn__ = i), (y = !1);
    } else {
      (i = mp(n, e, g, i)), pM(A, o, i);
      let q = r.listen(C, o, i);
      h.push(i, q), f && f.push(o, J, I, I + 1);
    }
  } else i = mp(n, e, g, i);
  let v = n.outputs,
    D;
  if (y && v !== null && (D = v[o])) {
    let A = D.length;
    if (A)
      for (let C = 0; C < A; C += 2) {
        let I = D[C],
          J = D[C + 1],
          be = e[I][J].subscribe(i),
          te = h.length;
        h.push(i, be), f && f.push(o, n.index, te, -(te + 1));
      }
  }
}
function gp(t, e, r, n) {
  let o = z(null);
  try {
    return ht(6, e, r), r(n) !== !1;
  } catch (i) {
    return fm(t, i), !1;
  } finally {
    ht(7, e, r), z(o);
  }
}
function mp(t, e, r, n) {
  return function o(i) {
    if (i === Function) return n;
    let s = t.componentOffset > -1 ? sn(t.index, e) : e;
    Su(s, 5);
    let c = gp(e, r, n, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (c = gp(e, r, u, i) && c), (u = u.__ngNextListenerFn__);
    return c;
  };
}
function oe(t, e = "") {
  let r = re(),
    n = ze(),
    o = t + tn,
    i = n.firstCreatePass ? ea(n, o, 1, e, null) : n.data[o],
    s = mM(n, r, i, e, t);
  (r[o] = s), su() && Cu(n, r, s, i), Mo(i, !1);
}
var mM = (t, e, r, n, o) => (au(!0), ZE(e[ge], n));
function Ru(t) {
  return oa("", t, ""), Ru;
}
function oa(t, e, r) {
  let n = re(),
    o = qI(n, t, e, r);
  return o !== ln && hm(n, $n(), o), oa;
}
function Ou(t, e, r, n, o) {
  let i = re(),
    s = WI(i, t, e, r, n, o);
  return s !== ln && hm(i, $n(), s), Ou;
}
function un(t, e, r) {
  Im(e) && (e = e());
  let n = re(),
    o = Ys();
  if (Vn(n, o, e)) {
    let i = ze(),
      s = iu();
    sm(i, s, n, t, e, n[ge], r, !1);
  }
  return un;
}
function zn(t, e) {
  let r = Im(t);
  return r && t.set(e), r;
}
function dn(t, e) {
  let r = re(),
    n = ze(),
    o = Ae();
  return Sm(n, r, r[ge], o, t, e), dn;
}
function vM(t, e, r) {
  let n = ze();
  if (n.firstCreatePass) {
    let o = nn(t);
    Ul(r, n.data, n.blueprint, o, !0), Ul(e, n.data, n.blueprint, o, !1);
  }
}
function Ul(t, e, r, n, o) {
  if (((t = Se(t)), Array.isArray(t)))
    for (let i = 0; i < t.length; i++) Ul(t[i], e, r, n, o);
  else {
    let i = ze(),
      s = re(),
      c = Ae(),
      u = Mr(t) ? t : Se(t.provide),
      f = zp(t),
      g = c.providerIndexes & 1048575,
      h = c.directiveStart,
      y = c.providerIndexes >> 20;
    if (Mr(t) || !t.multi) {
      let v = new kn(f, o, k),
        D = ol(u, e, o ? g : g + y, h);
      D === -1
        ? (wl(Ts(c, s), i, u),
          rl(i, t, e.length),
          e.push(u),
          c.directiveStart++,
          c.directiveEnd++,
          o && (c.providerIndexes += 1048576),
          r.push(v),
          s.push(v))
        : ((r[D] = v), (s[D] = v));
    } else {
      let v = ol(u, e, g + y, h),
        D = ol(u, e, g, g + y),
        A = v >= 0 && r[v],
        C = D >= 0 && r[D];
      if ((o && !C) || (!o && !A)) {
        wl(Ts(c, s), i, u);
        let I = DM(o ? wM : yM, r.length, o, n, f);
        !o && C && (r[D].providerFactory = I),
          rl(i, t, e.length, 0),
          e.push(u),
          c.directiveStart++,
          c.directiveEnd++,
          o && (c.providerIndexes += 1048576),
          r.push(I),
          s.push(I);
      } else {
        let I = Tm(r[o ? D : v], f, !o && n);
        rl(i, t, v > -1 ? v : D, I);
      }
      !o && n && C && r[D].componentProviders++;
    }
  }
}
function rl(t, e, r, n) {
  let o = Mr(e),
    i = TC(e);
  if (o || i) {
    let u = (i ? Se(e.useClass) : e).prototype.ngOnDestroy;
    if (u) {
      let f = t.destroyHooks || (t.destroyHooks = []);
      if (!o && e.multi) {
        let g = f.indexOf(r);
        g === -1 ? f.push(r, [n, u]) : f[g + 1].push(n, u);
      } else f.push(r, u);
    }
  }
}
function Tm(t, e, r) {
  return r && t.componentProviders++, t.multi.push(e) - 1;
}
function ol(t, e, r, n) {
  for (let o = r; o < n; o++) if (e[o] === t) return o;
  return -1;
}
function yM(t, e, r, n) {
  return Hl(this.multi, []);
}
function wM(t, e, r, n) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      c = xr(r, r[j], this.providerFactory.index, n);
    (i = c.slice(0, s)), Hl(o, i);
    for (let u = s; u < c.length; u++) i.push(c[u]);
  } else (i = []), Hl(o, i);
  return i;
}
function Hl(t, e) {
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    e.push(n());
  }
  return e;
}
function DM(t, e, r, n, o) {
  let i = new kn(t, r, k);
  return (
    (i.multi = []),
    (i.index = e),
    (i.componentProviders = 0),
    Tm(i, o, n && !r),
    i
  );
}
function No(t, e = []) {
  return (r) => {
    r.providersResolver = (n, o) => vM(n, o ? o(t) : t, e);
  };
}
var bM = (() => {
  let e = class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let o = $p(!1, n.type),
          i =
            o.length > 0
              ? na([o], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, i);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  e.ɵprov = M({
    token: e,
    providedIn: "environment",
    factory: () => new e(T(Te)),
  });
  let t = e;
  return t;
})();
function Xe(t) {
  Fr("NgStandalone"),
    (t.getStandaloneInjector = (e) =>
      e.get(bM).getOrCreateStandaloneInjector(t));
}
var ia = (() => {
  let e = class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "platform" }));
  let t = e;
  return t;
})();
var xm = new S("");
function Gn(t) {
  return !!t && typeof t.then == "function";
}
function Am(t) {
  return !!t && typeof t.subscribe == "function";
}
var sa = new S(""),
  Nm = (() => {
    let e = class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, o) => {
            (this.resolve = n), (this.reject = o);
          })),
          (this.appInits = w(sa, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let i of this.appInits) {
          let s = i();
          if (Gn(s)) n.push(s);
          else if (Am(s)) {
            let c = new Promise((u, f) => {
              s.subscribe({ complete: u, error: f });
            });
            n.push(c);
          }
        }
        let o = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            o();
          })
          .catch((i) => {
            this.reject(i);
          }),
          n.length === 0 && o(),
          (this.initialized = !0);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Ro = new S("");
function CM() {
  sh(() => {
    throw new _(600, !1);
  });
}
function EM(t) {
  return t.isBoundToModule;
}
var IM = 10;
function MM(t, e, r) {
  try {
    let n = r();
    return Gn(n)
      ? n.catch((o) => {
          throw (e.runOutsideAngular(() => t.handleError(o)), o);
        })
      : n;
  } catch (n) {
    throw (e.runOutsideAngular(() => t.handleError(n)), n);
  }
}
var fn = (() => {
  let e = class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = w(AE)),
        (this.afterRenderManager = w(_m)),
        (this.zonelessEnabled = w(Dm)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new ye()),
        (this.afterTick = new ye()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = w(an).hasPendingTasks.pipe(O((n) => !n))),
        (this._injector = w(Te));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let n;
      return new Promise((o) => {
        n = this.isStable.subscribe({
          next: (i) => {
            i && o();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, o) {
      let i = n instanceof Ps;
      if (!this._injector.get(Nm).done) {
        let v = !i && Lp(n),
          D = !1;
        throw new _(405, D);
      }
      let c;
      i ? (c = n) : (c = this._injector.get(Nr).resolveComponentFactory(n)),
        this.componentTypes.push(c.componentType);
      let u = EM(c) ? void 0 : this._injector.get(rn),
        f = o || c.selector,
        g = c.create(it.NULL, [], f, u),
        h = g.location.nativeElement,
        y = g.injector.get(xm, null);
      return (
        y?.registerApplication(h),
        g.onDestroy(() => {
          this.detachView(g.hostView),
            ps(this.components, g),
            y?.unregisterApplication(h);
        }),
        this._loadComponent(g),
        g
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new _(101, !1);
      let n = z(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (o) {
        this.internalErrorHandler(o);
      } finally {
        (this._runningTick = !1), z(n), this.afterTick.next();
      }
    }
    synchronize() {
      let n = null;
      this._injector.destroyed ||
        (n = this._injector.get(Rr, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let o = 0;
      for (; this.dirtyFlags !== 0 && o++ < IM; ) this.synchronizeOnce(n);
    }
    synchronizeOnce(n) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let o = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(o);
        for (let { _lView: i, notifyErrorHandler: s } of this._views)
          _M(i, s, o, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else n?.begin?.(), n?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => Ws(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let o = n;
      this._views.push(o), o.attachToAppRef(this);
    }
    detachView(n) {
      let o = n;
      ps(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let o = this._injector.get(Ro, []);
      [...this._bootstrapListeners, ...o].forEach((i) => i(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => ps(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new _(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function ps(t, e) {
  let r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
function _M(t, e, r, n) {
  if (!r && !Ws(t)) return;
  mm(t, e, r && !n ? 0 : 1);
}
var zl = class {
    constructor(e, r) {
      (this.ngModuleFactory = e), (this.componentFactories = r);
    }
  },
  aa = (() => {
    let e = class e {
      compileModuleSync(n) {
        return new Ll(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let o = this.compileModuleSync(n),
          i = Vp(n),
          s = $g(i.declarations).reduce((c, u) => {
            let f = en(u);
            return f && c.push(new Or(f)), c;
          }, []);
        return new zl(o, s);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var SM = (() => {
  let e = class e {
    constructor() {
      (this.zone = w(ae)),
        (this.changeDetectionScheduler = w(Ar)),
        (this.applicationRef = w(fn));
    }
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.changeDetectionScheduler.runningTick ||
                this.zone.run(() => {
                  this.applicationRef.tick();
                });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function TM({
  ngZoneFactory: t,
  ignoreChangesOutsideZone: e,
  scheduleInRootZone: r,
}) {
  return (
    (t ??= () => new ae($(b({}, xM()), { scheduleInRootZone: r }))),
    [
      { provide: ae, useFactory: t },
      {
        provide: Ir,
        multi: !0,
        useFactory: () => {
          let n = w(SM, { optional: !0 });
          return () => n.initialize();
        },
      },
      {
        provide: Ir,
        multi: !0,
        useFactory: () => {
          let n = w(AM);
          return () => {
            n.initialize();
          };
        },
      },
      e === !0 ? { provide: bm, useValue: !0 } : [],
      { provide: Cm, useValue: r ?? Tg },
    ]
  );
}
function xM(t) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: t?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: t?.runCoalescing ?? !1,
  };
}
var AM = (() => {
  let e = class e {
    constructor() {
      (this.subscription = new ue()),
        (this.initialized = !1),
        (this.zone = w(ae)),
        (this.pendingTasks = w(an));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              ae.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            })
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            ae.assertInAngularZone(), (n ??= this.pendingTasks.add());
          })
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var NM = (() => {
  let e = class e {
    constructor() {
      (this.appRef = w(fn)),
        (this.taskService = w(an)),
        (this.ngZone = w(ae)),
        (this.zonelessEnabled = w(Dm)),
        (this.disableScheduling = w(bm, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new ue()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(As)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (w(Cm, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Il || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let o = this.useMicrotaskScheduler ? Jh : xg;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              o(() => this.tick())
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              o(() => this.tick())
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(As + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs
        );
      } catch (o) {
        throw (this.taskService.remove(n), o);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        Jh(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function RM() {
  return (typeof $localize < "u" && $localize.locale) || Vs;
}
var Pu = new S("", {
  providedIn: "root",
  factory: () => w(Pu, F.Optional | F.SkipSelf) || RM(),
});
var Rm = new S("");
function us(t) {
  return !!t.platformInjector;
}
function OM(t) {
  let e = us(t) ? t.r3Injector : t.moduleRef.injector,
    r = e.get(ae);
  return r.run(() => {
    us(t)
      ? t.r3Injector.resolveInjectorInitializers()
      : t.moduleRef.resolveInjectorInitializers();
    let n = e.get(At, null),
      o;
    if (
      (r.runOutsideAngular(() => {
        o = r.onError.subscribe({
          next: (i) => {
            n.handleError(i);
          },
        });
      }),
      us(t))
    ) {
      let i = () => e.destroy(),
        s = t.platformInjector.get(Rm);
      s.add(i),
        e.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else
      t.moduleRef.onDestroy(() => {
        ps(t.allPlatformModules, t.moduleRef), o.unsubscribe();
      });
    return MM(n, r, () => {
      let i = e.get(Nm);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = e.get(Pu, Vs);
          if ((hM(s || Vs), us(t))) {
            let c = e.get(fn);
            return (
              t.rootComponent !== void 0 && c.bootstrap(t.rootComponent), c
            );
          } else return PM(t.moduleRef, t.allPlatformModules), t.moduleRef;
        })
      );
    });
  });
}
function PM(t, e) {
  let r = t.injector.get(fn);
  if (t._bootstrapComponents.length > 0)
    t._bootstrapComponents.forEach((n) => r.bootstrap(n));
  else if (t.instance.ngDoBootstrap) t.instance.ngDoBootstrap(r);
  else throw new _(-403, !1);
  e.push(t);
}
var gs = null;
function kM(t = [], e) {
  return it.create({
    name: e,
    providers: [
      { provide: zs, useValue: "platform" },
      { provide: Rm, useValue: new Set([() => (gs = null)]) },
      ...t,
    ],
  });
}
function FM(t = []) {
  if (gs) return gs;
  let e = kM(t);
  return (gs = e), CM(), LM(e), e;
}
function LM(t) {
  t.get(gu, null)?.forEach((r) => r());
}
var qn = (() => {
  let e = class e {};
  e.__NG_ELEMENT_ID__ = VM;
  let t = e;
  return t;
})();
function VM(t) {
  return jM(Ae(), re(), (t & 16) === 16);
}
function jM(t, e, r) {
  if (qs(t) && !r) {
    let n = sn(t.index, e);
    return new Ln(n, n);
  } else if (t.type & 175) {
    let n = e[vt];
    return new Ln(n, e);
  }
  return null;
}
var Gl = class {
    constructor() {}
    supports(e) {
      return Mm(e);
    }
    create(e) {
      return new ql(e);
    }
  },
  BM = (t, e) => e,
  ql = class {
    constructor(e) {
      (this.length = 0),
        (this._linkedRecords = null),
        (this._unlinkedRecords = null),
        (this._previousItHead = null),
        (this._itHead = null),
        (this._itTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._movesHead = null),
        (this._movesTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null),
        (this._identityChangesHead = null),
        (this._identityChangesTail = null),
        (this._trackByFn = e || BM);
    }
    forEachItem(e) {
      let r;
      for (r = this._itHead; r !== null; r = r._next) e(r);
    }
    forEachOperation(e) {
      let r = this._itHead,
        n = this._removalsHead,
        o = 0,
        i = null;
      for (; r || n; ) {
        let s = !n || (r && r.currentIndex < vp(n, o, i)) ? r : n,
          c = vp(s, o, i),
          u = s.currentIndex;
        if (s === n) o--, (n = n._nextRemoved);
        else if (((r = r._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let f = c - o,
            g = u - o;
          if (f != g) {
            for (let y = 0; y < f; y++) {
              let v = y < i.length ? i[y] : (i[y] = 0),
                D = v + y;
              g <= D && D < f && (i[y] = v + 1);
            }
            let h = s.previousIndex;
            i[h] = g - f;
          }
        }
        c !== u && e(s, c, u);
      }
    }
    forEachPreviousItem(e) {
      let r;
      for (r = this._previousItHead; r !== null; r = r._nextPrevious) e(r);
    }
    forEachAddedItem(e) {
      let r;
      for (r = this._additionsHead; r !== null; r = r._nextAdded) e(r);
    }
    forEachMovedItem(e) {
      let r;
      for (r = this._movesHead; r !== null; r = r._nextMoved) e(r);
    }
    forEachRemovedItem(e) {
      let r;
      for (r = this._removalsHead; r !== null; r = r._nextRemoved) e(r);
    }
    forEachIdentityChange(e) {
      let r;
      for (r = this._identityChangesHead; r !== null; r = r._nextIdentityChange)
        e(r);
    }
    diff(e) {
      if ((e == null && (e = []), !Mm(e))) throw new _(900, !1);
      return this.check(e) ? this : null;
    }
    onDestroy() {}
    check(e) {
      this._reset();
      let r = this._itHead,
        n = !1,
        o,
        i,
        s;
      if (Array.isArray(e)) {
        this.length = e.length;
        for (let c = 0; c < this.length; c++)
          (i = e[c]),
            (s = this._trackByFn(c, i)),
            r === null || !Object.is(r.trackById, s)
              ? ((r = this._mismatch(r, i, s, c)), (n = !0))
              : (n && (r = this._verifyReinsertion(r, i, s, c)),
                Object.is(r.item, i) || this._addIdentityChange(r, i)),
            (r = r._next);
      } else
        (o = 0),
          kI(e, (c) => {
            (s = this._trackByFn(o, c)),
              r === null || !Object.is(r.trackById, s)
                ? ((r = this._mismatch(r, c, s, o)), (n = !0))
                : (n && (r = this._verifyReinsertion(r, c, s, o)),
                  Object.is(r.item, c) || this._addIdentityChange(r, c)),
              (r = r._next),
              o++;
          }),
          (this.length = o);
      return this._truncate(r), (this.collection = e), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let e;
        for (e = this._previousItHead = this._itHead; e !== null; e = e._next)
          e._nextPrevious = e._next;
        for (e = this._additionsHead; e !== null; e = e._nextAdded)
          e.previousIndex = e.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, e = this._movesHead;
          e !== null;
          e = e._nextMoved
        )
          e.previousIndex = e.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(e, r, n, o) {
      let i;
      return (
        e === null ? (i = this._itTail) : ((i = e._prev), this._remove(e)),
        (e =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(n, null)),
        e !== null
          ? (Object.is(e.item, r) || this._addIdentityChange(e, r),
            this._reinsertAfter(e, i, o))
          : ((e =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(n, o)),
            e !== null
              ? (Object.is(e.item, r) || this._addIdentityChange(e, r),
                this._moveAfter(e, i, o))
              : (e = this._addAfter(new Wl(r, n), i, o))),
        e
      );
    }
    _verifyReinsertion(e, r, n, o) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(n, null);
      return (
        i !== null
          ? (e = this._reinsertAfter(i, e._prev, o))
          : e.currentIndex != o &&
            ((e.currentIndex = o), this._addToMoves(e, o)),
        e
      );
    }
    _truncate(e) {
      for (; e !== null; ) {
        let r = e._next;
        this._addToRemovals(this._unlink(e)), (e = r);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(e, r, n) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(e);
      let o = e._prevRemoved,
        i = e._nextRemoved;
      return (
        o === null ? (this._removalsHead = i) : (o._nextRemoved = i),
        i === null ? (this._removalsTail = o) : (i._prevRemoved = o),
        this._insertAfter(e, r, n),
        this._addToMoves(e, n),
        e
      );
    }
    _moveAfter(e, r, n) {
      return (
        this._unlink(e), this._insertAfter(e, r, n), this._addToMoves(e, n), e
      );
    }
    _addAfter(e, r, n) {
      return (
        this._insertAfter(e, r, n),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = e)
          : (this._additionsTail = this._additionsTail._nextAdded = e),
        e
      );
    }
    _insertAfter(e, r, n) {
      let o = r === null ? this._itHead : r._next;
      return (
        (e._next = o),
        (e._prev = r),
        o === null ? (this._itTail = e) : (o._prev = e),
        r === null ? (this._itHead = e) : (r._next = e),
        this._linkedRecords === null && (this._linkedRecords = new js()),
        this._linkedRecords.put(e),
        (e.currentIndex = n),
        e
      );
    }
    _remove(e) {
      return this._addToRemovals(this._unlink(e));
    }
    _unlink(e) {
      this._linkedRecords !== null && this._linkedRecords.remove(e);
      let r = e._prev,
        n = e._next;
      return (
        r === null ? (this._itHead = n) : (r._next = n),
        n === null ? (this._itTail = r) : (n._prev = r),
        e
      );
    }
    _addToMoves(e, r) {
      return (
        e.previousIndex === r ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = e)
            : (this._movesTail = this._movesTail._nextMoved = e)),
        e
      );
    }
    _addToRemovals(e) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new js()),
        this._unlinkedRecords.put(e),
        (e.currentIndex = null),
        (e._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = e),
            (e._prevRemoved = null))
          : ((e._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = e)),
        e
      );
    }
    _addIdentityChange(e, r) {
      return (
        (e.item = r),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = e)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                e),
        e
      );
    }
  },
  Wl = class {
    constructor(e, r) {
      (this.item = e),
        (this.trackById = r),
        (this.currentIndex = null),
        (this.previousIndex = null),
        (this._nextPrevious = null),
        (this._prev = null),
        (this._next = null),
        (this._prevDup = null),
        (this._nextDup = null),
        (this._prevRemoved = null),
        (this._nextRemoved = null),
        (this._nextAdded = null),
        (this._nextMoved = null),
        (this._nextIdentityChange = null);
    }
  },
  Zl = class {
    constructor() {
      (this._head = null), (this._tail = null);
    }
    add(e) {
      this._head === null
        ? ((this._head = this._tail = e),
          (e._nextDup = null),
          (e._prevDup = null))
        : ((this._tail._nextDup = e),
          (e._prevDup = this._tail),
          (e._nextDup = null),
          (this._tail = e));
    }
    get(e, r) {
      let n;
      for (n = this._head; n !== null; n = n._nextDup)
        if ((r === null || r <= n.currentIndex) && Object.is(n.trackById, e))
          return n;
      return null;
    }
    remove(e) {
      let r = e._prevDup,
        n = e._nextDup;
      return (
        r === null ? (this._head = n) : (r._nextDup = n),
        n === null ? (this._tail = r) : (n._prevDup = r),
        this._head === null
      );
    }
  },
  js = class {
    constructor() {
      this.map = new Map();
    }
    put(e) {
      let r = e.trackById,
        n = this.map.get(r);
      n || ((n = new Zl()), this.map.set(r, n)), n.add(e);
    }
    get(e, r) {
      let n = e,
        o = this.map.get(n);
      return o ? o.get(e, r) : null;
    }
    remove(e) {
      let r = e.trackById;
      return this.map.get(r).remove(e) && this.map.delete(r), e;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function vp(t, e, r) {
  let n = t.previousIndex;
  if (n === null) return n;
  let o = 0;
  return r && n < r.length && (o = r[n]), n + e + o;
}
function yp() {
  return new ku([new Gl()]);
}
var ku = (() => {
  let e = class e {
    constructor(n) {
      this.factories = n;
    }
    static create(n, o) {
      if (o != null) {
        let i = o.factories.slice();
        n = n.concat(i);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (o) => e.create(n, o || yp()),
        deps: [[e, new Ql(), new Hs()]],
      };
    }
    find(n) {
      let o = this.factories.find((i) => i.supports(n));
      if (o != null) return o;
      throw new _(901, !1);
    }
  };
  e.ɵprov = M({ token: e, providedIn: "root", factory: yp });
  let t = e;
  return t;
})();
function Om(t) {
  try {
    let { rootComponent: e, appProviders: r, platformProviders: n } = t,
      o = FM(n),
      i = [TM({}), { provide: Ar, useExisting: NM }, ...(r || [])],
      s = new Fs({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return OM({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: e,
    });
  } catch (e) {
    return Promise.reject(e);
  }
}
var Pm = new S("");
function hn(t) {
  return typeof t == "boolean" ? t : t != null && t !== "false";
}
function Oo(t, e) {
  Fr("NgSignals");
  let r = rh(t);
  return e?.equal && (r[Mt].equal = e.equal), r;
}
function Lt(t) {
  let e = z(null);
  try {
    return t();
  } finally {
    z(e);
  }
}
function km(t) {
  let e = en(t);
  if (!e) return null;
  let r = new Or(e);
  return {
    get selector() {
      return r.selector;
    },
    get type() {
      return r.componentType;
    },
    get inputs() {
      return r.inputs;
    },
    get outputs() {
      return r.outputs;
    },
    get ngContentSelectors() {
      return r.ngContentSelectors;
    },
    get isStandalone() {
      return e.standalone;
    },
    get isSignal() {
      return e.signals;
    },
  };
}
var jm = null;
function jt() {
  return jm;
}
function Bm(t) {
  jm ??= t;
}
var ca = class {};
var Ee = new S(""),
  $u = (() => {
    let e = class e {
      historyGo(n) {
        throw new Error("");
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: () => w(UM), providedIn: "platform" }));
    let t = e;
    return t;
  })(),
  $m = new S(""),
  UM = (() => {
    let e = class e extends $u {
      constructor() {
        super(),
          (this._doc = w(Ee)),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return jt().getBaseHref(this._doc);
      }
      onPopState(n) {
        let o = jt().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("popstate", n, !1),
          () => o.removeEventListener("popstate", n)
        );
      }
      onHashChange(n) {
        let o = jt().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("hashchange", n, !1),
          () => o.removeEventListener("hashchange", n)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(n) {
        this._location.pathname = n;
      }
      pushState(n, o, i) {
        this._history.pushState(n, o, i);
      }
      replaceState(n, o, i) {
        this._history.replaceState(n, o, i);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(n = 0) {
        this._history.go(n);
      }
      getState() {
        return this._history.state;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({
        token: e,
        factory: () => new e(),
        providedIn: "platform",
      }));
    let t = e;
    return t;
  })();
function Uu(t, e) {
  if (t.length == 0) return e;
  if (e.length == 0) return t;
  let r = 0;
  return (
    t.endsWith("/") && r++,
    e.startsWith("/") && r++,
    r == 2 ? t + e.substring(1) : r == 1 ? t + e : t + "/" + e
  );
}
function Fm(t) {
  let e = t.match(/#|\?|$/),
    r = (e && e.index) || t.length,
    n = r - (t[r - 1] === "/" ? 1 : 0);
  return t.slice(0, n) + t.slice(r);
}
function Vt(t) {
  return t && t[0] !== "?" ? "?" + t : t;
}
var Bt = (() => {
    let e = class e {
      historyGo(n) {
        throw new Error("");
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: () => w(Hu), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Um = new S(""),
  Hu = (() => {
    let e = class e extends Bt {
      constructor(n, o) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            w(Ee).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n)
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return Uu(this._baseHref, n);
      }
      path(n = !1) {
        let o =
            this._platformLocation.pathname + Vt(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && n ? `${o}${i}` : o;
      }
      pushState(n, o, i, s) {
        let c = this.prepareExternalUrl(i + Vt(s));
        this._platformLocation.pushState(n, o, c);
      }
      replaceState(n, o, i, s) {
        let c = this.prepareExternalUrl(i + Vt(s));
        this._platformLocation.replaceState(n, o, c);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T($u), T(Um, 8));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Hm = (() => {
    let e = class e extends Bt {
      constructor(n, o) {
        super(),
          (this._platformLocation = n),
          (this._baseHref = ""),
          (this._removeListenerFns = []),
          o != null && (this._baseHref = o);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n)
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(n = !1) {
        let o = this._platformLocation.hash ?? "#";
        return o.length > 0 ? o.substring(1) : o;
      }
      prepareExternalUrl(n) {
        let o = Uu(this._baseHref, n);
        return o.length > 0 ? "#" + o : o;
      }
      pushState(n, o, i, s) {
        let c = this.prepareExternalUrl(i + Vt(s));
        c.length == 0 && (c = this._platformLocation.pathname),
          this._platformLocation.pushState(n, o, c);
      }
      replaceState(n, o, i, s) {
        let c = this.prepareExternalUrl(i + Vt(s));
        c.length == 0 && (c = this._platformLocation.pathname),
          this._platformLocation.replaceState(n, o, c);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T($u), T(Um, 8));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Vr = (() => {
    let e = class e {
      constructor(n) {
        (this._subject = new he()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = n);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = GM(Fm(Lm(o)))),
          this._locationStrategy.onPopState((i) => {
            this._subject.emit({
              url: this.path(!0),
              pop: !0,
              state: i.state,
              type: i.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(n = !1) {
        return this.normalize(this._locationStrategy.path(n));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(n, o = "") {
        return this.path() == this.normalize(n + Vt(o));
      }
      normalize(n) {
        return e.stripTrailingSlash(zM(this._basePath, Lm(n)));
      }
      prepareExternalUrl(n) {
        return (
          n && n[0] !== "/" && (n = "/" + n),
          this._locationStrategy.prepareExternalUrl(n)
        );
      }
      go(n, o = "", i = null) {
        this._locationStrategy.pushState(i, "", n, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Vt(o)), i);
      }
      replaceState(n, o = "", i = null) {
        this._locationStrategy.replaceState(i, "", n, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Vt(o)), i);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(n = 0) {
        this._locationStrategy.historyGo?.(n);
      }
      onUrlChange(n) {
        return (
          this._urlChangeListeners.push(n),
          (this._urlChangeSubscription ??= this.subscribe((o) => {
            this._notifyUrlChangeListeners(o.url, o.state);
          })),
          () => {
            let o = this._urlChangeListeners.indexOf(n);
            this._urlChangeListeners.splice(o, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(n = "", o) {
        this._urlChangeListeners.forEach((i) => i(n, o));
      }
      subscribe(n, o, i) {
        return this._subject.subscribe({ next: n, error: o, complete: i });
      }
    };
    (e.normalizeQueryParams = Vt),
      (e.joinWithSlash = Uu),
      (e.stripTrailingSlash = Fm),
      (e.ɵfac = function (o) {
        return new (o || e)(T(Bt));
      }),
      (e.ɵprov = M({ token: e, factory: () => HM(), providedIn: "root" }));
    let t = e;
    return t;
  })();
function HM() {
  return new Vr(T(Bt));
}
function zM(t, e) {
  if (!t || !e.startsWith(t)) return e;
  let r = e.substring(t.length);
  return r === "" || ["/", ";", "?", "#"].includes(r[0]) ? r : e;
}
function Lm(t) {
  return t.replace(/\/index.html$/, "");
}
function GM(t) {
  if (new RegExp("^(https?:)?//").test(t)) {
    let [, r] = t.split(/\/\/[^\/]+/);
    return r;
  }
  return t;
}
function la(t, e) {
  e = encodeURIComponent(e);
  for (let r of t.split(";")) {
    let n = r.indexOf("="),
      [o, i] = n == -1 ? [r, ""] : [r.slice(0, n), r.slice(n + 1)];
    if (o.trim() === e) return decodeURIComponent(i);
  }
  return null;
}
var Lu = class {
    constructor(e, r, n, o) {
      (this.$implicit = e),
        (this.ngForOf = r),
        (this.index = n),
        (this.count = o);
    }
    get first() {
      return this.index === 0;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 === 0;
    }
    get odd() {
      return !this.even;
    }
  },
  zm = (() => {
    let e = class e {
      set ngForOf(n) {
        (this._ngForOf = n), (this._ngForOfDirty = !0);
      }
      set ngForTrackBy(n) {
        this._trackByFn = n;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      constructor(n, o, i) {
        (this._viewContainer = n),
          (this._template = o),
          (this._differs = i),
          (this._ngForOf = null),
          (this._ngForOfDirty = !0),
          (this._differ = null);
      }
      set ngForTemplate(n) {
        n && (this._template = n);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          let n = this._ngForOf;
          if (!this._differ && n)
            if (0)
              try {
              } catch {}
            else this._differ = this._differs.find(n).create(this.ngForTrackBy);
        }
        if (this._differ) {
          let n = this._differ.diff(this._ngForOf);
          n && this._applyChanges(n);
        }
      }
      _applyChanges(n) {
        let o = this._viewContainer;
        n.forEachOperation((i, s, c) => {
          if (i.previousIndex == null)
            o.createEmbeddedView(
              this._template,
              new Lu(i.item, this._ngForOf, -1, -1),
              c === null ? void 0 : c
            );
          else if (c == null) o.remove(s === null ? void 0 : s);
          else if (s !== null) {
            let u = o.get(s);
            o.move(u, c), Vm(u, i);
          }
        });
        for (let i = 0, s = o.length; i < s; i++) {
          let u = o.get(i).context;
          (u.index = i), (u.count = s), (u.ngForOf = this._ngForOf);
        }
        n.forEachIdentityChange((i) => {
          let s = o.get(i.currentIndex);
          Vm(s, i);
        });
      }
      static ngTemplateContextGuard(n, o) {
        return !0;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(k(So), k(Tu), k(ku));
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [["", "ngFor", "", "ngForOf", ""]],
        inputs: {
          ngForOf: "ngForOf",
          ngForTrackBy: "ngForTrackBy",
          ngForTemplate: "ngForTemplate",
        },
        standalone: !0,
      }));
    let t = e;
    return t;
  })();
function Vm(t, e) {
  t.context.$implicit = e.item;
}
var zu = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵmod = Ot({ type: e })),
      (e.ɵinj = Rt({}));
    let t = e;
    return t;
  })(),
  Gu = "browser",
  qM = "server";
function WM(t) {
  return t === Gu;
}
function ua(t) {
  return t === qM;
}
var Gm = (() => {
    let e = class e {};
    e.ɵprov = M({
      token: e,
      providedIn: "root",
      factory: () => (WM(w(wt)) ? new Vu(w(Ee), window) : new ju()),
    });
    let t = e;
    return t;
  })(),
  Vu = class {
    constructor(e, r) {
      (this.document = e), (this.window = r), (this.offset = () => [0, 0]);
    }
    setOffset(e) {
      Array.isArray(e) ? (this.offset = () => e) : (this.offset = e);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(e) {
      this.window.scrollTo(e[0], e[1]);
    }
    scrollToAnchor(e) {
      let r = ZM(this.document, e);
      r && (this.scrollToElement(r), r.focus());
    }
    setHistoryScrollRestoration(e) {
      this.window.history.scrollRestoration = e;
    }
    scrollToElement(e) {
      let r = e.getBoundingClientRect(),
        n = r.left + this.window.pageXOffset,
        o = r.top + this.window.pageYOffset,
        i = this.offset();
      this.window.scrollTo(n - i[0], o - i[1]);
    }
  };
function ZM(t, e) {
  let r = t.getElementById(e) || t.getElementsByName(e)[0];
  if (r) return r;
  if (
    typeof t.createTreeWalker == "function" &&
    t.body &&
    typeof t.body.attachShadow == "function"
  ) {
    let n = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT),
      o = n.currentNode;
    for (; o; ) {
      let i = o.shadowRoot;
      if (i) {
        let s = i.getElementById(e) || i.querySelector(`[name="${e}"]`);
        if (s) return s;
      }
      o = n.nextNode();
    }
  }
  return null;
}
var ju = class {
    setOffset(e) {}
    getScrollPosition() {
      return [0, 0];
    }
    scrollToPosition(e) {}
    scrollToAnchor(e) {}
    setHistoryScrollRestoration(e) {}
  },
  Lr = class {};
var ko = class {},
  fa = class {},
  $t = class t {
    constructor(e) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        e
          ? typeof e == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  e
                    .split(
                      `
`
                    )
                    .forEach((r) => {
                      let n = r.indexOf(":");
                      if (n > 0) {
                        let o = r.slice(0, n),
                          i = o.toLowerCase(),
                          s = r.slice(n + 1).trim();
                        this.maybeSetNormalizedName(o, i),
                          this.headers.has(i)
                            ? this.headers.get(i).push(s)
                            : this.headers.set(i, [s]);
                      }
                    });
              })
            : typeof Headers < "u" && e instanceof Headers
            ? ((this.headers = new Map()),
              e.forEach((r, n) => {
                this.setHeaderEntries(n, r);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(e).forEach(([r, n]) => {
                    this.setHeaderEntries(r, n);
                  });
              })
          : (this.headers = new Map());
    }
    has(e) {
      return this.init(), this.headers.has(e.toLowerCase());
    }
    get(e) {
      this.init();
      let r = this.headers.get(e.toLowerCase());
      return r && r.length > 0 ? r[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(e) {
      return this.init(), this.headers.get(e.toLowerCase()) || null;
    }
    append(e, r) {
      return this.clone({ name: e, value: r, op: "a" });
    }
    set(e, r) {
      return this.clone({ name: e, value: r, op: "s" });
    }
    delete(e, r) {
      return this.clone({ name: e, value: r, op: "d" });
    }
    maybeSetNormalizedName(e, r) {
      this.normalizedNames.has(r) || this.normalizedNames.set(r, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof t
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      e.init(),
        Array.from(e.headers.keys()).forEach((r) => {
          this.headers.set(r, e.headers.get(r)),
            this.normalizedNames.set(r, e.normalizedNames.get(r));
        });
    }
    clone(e) {
      let r = new t();
      return (
        (r.lazyInit =
          this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
        (r.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        r
      );
    }
    applyUpdate(e) {
      let r = e.name.toLowerCase();
      switch (e.op) {
        case "a":
        case "s":
          let n = e.value;
          if ((typeof n == "string" && (n = [n]), n.length === 0)) return;
          this.maybeSetNormalizedName(e.name, r);
          let o = (e.op === "a" ? this.headers.get(r) : void 0) || [];
          o.push(...n), this.headers.set(r, o);
          break;
        case "d":
          let i = e.value;
          if (!i) this.headers.delete(r), this.normalizedNames.delete(r);
          else {
            let s = this.headers.get(r);
            if (!s) return;
            (s = s.filter((c) => i.indexOf(c) === -1)),
              s.length === 0
                ? (this.headers.delete(r), this.normalizedNames.delete(r))
                : this.headers.set(r, s);
          }
          break;
      }
    }
    setHeaderEntries(e, r) {
      let n = (Array.isArray(r) ? r : [r]).map((i) => i.toString()),
        o = e.toLowerCase();
      this.headers.set(o, n), this.maybeSetNormalizedName(e, o);
    }
    forEach(e) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((r) =>
          e(this.normalizedNames.get(r), this.headers.get(r))
        );
    }
  };
var Zu = class {
  encodeKey(e) {
    return qm(e);
  }
  encodeValue(e) {
    return qm(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function YM(t, e) {
  let r = new Map();
  return (
    t.length > 0 &&
      t
        .replace(/^\?/, "")
        .split("&")
        .forEach((o) => {
          let i = o.indexOf("="),
            [s, c] =
              i == -1
                ? [e.decodeKey(o), ""]
                : [e.decodeKey(o.slice(0, i)), e.decodeValue(o.slice(i + 1))],
            u = r.get(s) || [];
          u.push(c), r.set(s, u);
        }),
    r
  );
}
var QM = /%(\d[a-f0-9])/gi,
  KM = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function qm(t) {
  return encodeURIComponent(t).replace(QM, (e, r) => KM[r] ?? e);
}
function da(t) {
  return `${t}`;
}
var gn = class t {
  constructor(e = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = e.encoder || new Zu()),
      e.fromString)
    ) {
      if (e.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = YM(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach((r) => {
            let n = e.fromObject[r],
              o = Array.isArray(n) ? n.map(da) : [da(n)];
            this.map.set(r, o);
          }))
        : (this.map = null);
  }
  has(e) {
    return this.init(), this.map.has(e);
  }
  get(e) {
    this.init();
    let r = this.map.get(e);
    return r ? r[0] : null;
  }
  getAll(e) {
    return this.init(), this.map.get(e) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(e, r) {
    return this.clone({ param: e, value: r, op: "a" });
  }
  appendAll(e) {
    let r = [];
    return (
      Object.keys(e).forEach((n) => {
        let o = e[n];
        Array.isArray(o)
          ? o.forEach((i) => {
              r.push({ param: n, value: i, op: "a" });
            })
          : r.push({ param: n, value: o, op: "a" });
      }),
      this.clone(r)
    );
  }
  set(e, r) {
    return this.clone({ param: e, value: r, op: "s" });
  }
  delete(e, r) {
    return this.clone({ param: e, value: r, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((e) => {
          let r = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map((n) => r + "=" + this.encoder.encodeValue(n))
            .join("&");
        })
        .filter((e) => e !== "")
        .join("&")
    );
  }
  clone(e) {
    let r = new t({ encoder: this.encoder });
    return (
      (r.cloneFrom = this.cloneFrom || this),
      (r.updates = (this.updates || []).concat(e)),
      r
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach((e) => {
          switch (e.op) {
            case "a":
            case "s":
              let r = (e.op === "a" ? this.map.get(e.param) : void 0) || [];
              r.push(da(e.value)), this.map.set(e.param, r);
              break;
            case "d":
              if (e.value !== void 0) {
                let n = this.map.get(e.param) || [],
                  o = n.indexOf(da(e.value));
                o !== -1 && n.splice(o, 1),
                  n.length > 0
                    ? this.map.set(e.param, n)
                    : this.map.delete(e.param);
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var Yu = class {
  constructor() {
    this.map = new Map();
  }
  set(e, r) {
    return this.map.set(e, r), this;
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    );
  }
  delete(e) {
    return this.map.delete(e), this;
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function JM(t) {
  switch (t) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function Wm(t) {
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer;
}
function Zm(t) {
  return typeof Blob < "u" && t instanceof Blob;
}
function Ym(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function XM(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
var Po = class t {
    constructor(e, r, n, o) {
      (this.url = r),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = e.toUpperCase());
      let i;
      if (
        (JM(this.method) || o
          ? ((this.body = n !== void 0 ? n : null), (i = o))
          : (i = n),
        i &&
          ((this.reportProgress = !!i.reportProgress),
          (this.withCredentials = !!i.withCredentials),
          i.responseType && (this.responseType = i.responseType),
          i.headers && (this.headers = i.headers),
          i.context && (this.context = i.context),
          i.params && (this.params = i.params),
          (this.transferCache = i.transferCache)),
        (this.headers ??= new $t()),
        (this.context ??= new Yu()),
        !this.params)
      )
        (this.params = new gn()), (this.urlWithParams = r);
      else {
        let s = this.params.toString();
        if (s.length === 0) this.urlWithParams = r;
        else {
          let c = r.indexOf("?"),
            u = c === -1 ? "?" : c < r.length - 1 ? "&" : "";
          this.urlWithParams = r + u + s;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
          Wm(this.body) ||
          Zm(this.body) ||
          Ym(this.body) ||
          XM(this.body)
        ? this.body
        : this.body instanceof gn
        ? this.body.toString()
        : typeof this.body == "object" ||
          typeof this.body == "boolean" ||
          Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || Ym(this.body)
        ? null
        : Zm(this.body)
        ? this.body.type || null
        : Wm(this.body)
        ? null
        : typeof this.body == "string"
        ? "text/plain"
        : this.body instanceof gn
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" ||
          typeof this.body == "number" ||
          typeof this.body == "boolean"
        ? "application/json"
        : null;
    }
    clone(e = {}) {
      let r = e.method || this.method,
        n = e.url || this.url,
        o = e.responseType || this.responseType,
        i = e.transferCache ?? this.transferCache,
        s = e.body !== void 0 ? e.body : this.body,
        c = e.withCredentials ?? this.withCredentials,
        u = e.reportProgress ?? this.reportProgress,
        f = e.headers || this.headers,
        g = e.params || this.params,
        h = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (f = Object.keys(e.setHeaders).reduce(
            (y, v) => y.set(v, e.setHeaders[v]),
            f
          )),
        e.setParams &&
          (g = Object.keys(e.setParams).reduce(
            (y, v) => y.set(v, e.setParams[v]),
            g
          )),
        new t(r, n, s, {
          params: g,
          headers: f,
          context: h,
          reportProgress: u,
          responseType: o,
          withCredentials: c,
          transferCache: i,
        })
      );
    }
  },
  mn = (function (t) {
    return (
      (t[(t.Sent = 0)] = "Sent"),
      (t[(t.UploadProgress = 1)] = "UploadProgress"),
      (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
      (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
      (t[(t.Response = 4)] = "Response"),
      (t[(t.User = 5)] = "User"),
      t
    );
  })(mn || {}),
  Fo = class {
    constructor(e, r = 200, n = "OK") {
      (this.headers = e.headers || new $t()),
        (this.status = e.status !== void 0 ? e.status : r),
        (this.statusText = e.statusText || n),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  ha = class t extends Fo {
    constructor(e = {}) {
      super(e), (this.type = mn.ResponseHeader);
    }
    clone(e = {}) {
      return new t({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  Lo = class t extends Fo {
    constructor(e = {}) {
      super(e),
        (this.type = mn.Response),
        (this.body = e.body !== void 0 ? e.body : null);
    }
    clone(e = {}) {
      return new t({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  pn = class extends Fo {
    constructor(e) {
      super(e, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${
              e.url || "(unknown url)"
            }`)
          : (this.message = `Http failure response for ${
              e.url || "(unknown url)"
            }: ${e.status} ${e.statusText}`),
        (this.error = e.error || null);
    }
  },
  Xm = 200,
  e_ = 204;
function Wu(t, e) {
  return {
    body: e,
    headers: t.headers,
    context: t.context,
    observe: t.observe,
    params: t.params,
    reportProgress: t.reportProgress,
    responseType: t.responseType,
    withCredentials: t.withCredentials,
    transferCache: t.transferCache,
  };
}
var Ut = (() => {
    let e = class e {
      constructor(n) {
        this.handler = n;
      }
      request(n, o, i = {}) {
        let s;
        if (n instanceof Po) s = n;
        else {
          let f;
          i.headers instanceof $t ? (f = i.headers) : (f = new $t(i.headers));
          let g;
          i.params &&
            (i.params instanceof gn
              ? (g = i.params)
              : (g = new gn({ fromObject: i.params }))),
            (s = new Po(n, o, i.body !== void 0 ? i.body : null, {
              headers: f,
              context: i.context,
              params: g,
              reportProgress: i.reportProgress,
              responseType: i.responseType || "json",
              withCredentials: i.withCredentials,
              transferCache: i.transferCache,
            }));
        }
        let c = x(s).pipe(St((f) => this.handler.handle(f)));
        if (n instanceof Po || i.observe === "events") return c;
        let u = c.pipe(Pe((f) => f instanceof Lo));
        switch (i.observe || "body") {
          case "body":
            switch (s.responseType) {
              case "arraybuffer":
                return u.pipe(
                  O((f) => {
                    if (f.body !== null && !(f.body instanceof ArrayBuffer))
                      throw new Error("Response is not an ArrayBuffer.");
                    return f.body;
                  })
                );
              case "blob":
                return u.pipe(
                  O((f) => {
                    if (f.body !== null && !(f.body instanceof Blob))
                      throw new Error("Response is not a Blob.");
                    return f.body;
                  })
                );
              case "text":
                return u.pipe(
                  O((f) => {
                    if (f.body !== null && typeof f.body != "string")
                      throw new Error("Response is not a string.");
                    return f.body;
                  })
                );
              case "json":
              default:
                return u.pipe(O((f) => f.body));
            }
          case "response":
            return u;
          default:
            throw new Error(
              `Unreachable: unhandled observe type ${i.observe}}`
            );
        }
      }
      delete(n, o = {}) {
        return this.request("DELETE", n, o);
      }
      get(n, o = {}) {
        return this.request("GET", n, o);
      }
      head(n, o = {}) {
        return this.request("HEAD", n, o);
      }
      jsonp(n, o) {
        return this.request("JSONP", n, {
          params: new gn().append(o, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(n, o = {}) {
        return this.request("OPTIONS", n, o);
      }
      patch(n, o, i = {}) {
        return this.request("PATCH", n, Wu(i, o));
      }
      post(n, o, i = {}) {
        return this.request("POST", n, Wu(i, o));
      }
      put(n, o, i = {}) {
        return this.request("PUT", n, Wu(i, o));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(ko));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  t_ = /^\)\]\}',?\n/,
  n_ = "X-Request-URL";
function Qm(t) {
  if (t.url) return t.url;
  let e = n_.toLocaleLowerCase();
  return t.headers.get(e);
}
var r_ = (() => {
    let e = class e {
      constructor() {
        (this.fetchImpl =
          w(Qu, { optional: !0 })?.fetch ?? ((...n) => globalThis.fetch(...n))),
          (this.ngZone = w(ae));
      }
      handle(n) {
        return new U((o) => {
          let i = new AbortController();
          return (
            this.doRequest(n, i.signal, o).then(Ku, (s) =>
              o.error(new pn({ error: s }))
            ),
            () => i.abort()
          );
        });
      }
      doRequest(n, o, i) {
        return Ai(this, null, function* () {
          let s = this.createRequestInit(n),
            c;
          try {
            let D = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(n.urlWithParams, b({ signal: o }, s))
            );
            o_(D), i.next({ type: mn.Sent }), (c = yield D);
          } catch (D) {
            i.error(
              new pn({
                error: D,
                status: D.status ?? 0,
                statusText: D.statusText,
                url: n.urlWithParams,
                headers: D.headers,
              })
            );
            return;
          }
          let u = new $t(c.headers),
            f = c.statusText,
            g = Qm(c) ?? n.urlWithParams,
            h = c.status,
            y = null;
          if (
            (n.reportProgress &&
              i.next(new ha({ headers: u, status: h, statusText: f, url: g })),
            c.body)
          ) {
            let D = c.headers.get("content-length"),
              A = [],
              C = c.body.getReader(),
              I = 0,
              J,
              ie,
              q = typeof Zone < "u" && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              Ai(this, null, function* () {
                for (;;) {
                  let { done: te, value: me } = yield C.read();
                  if (te) break;
                  if ((A.push(me), (I += me.length), n.reportProgress)) {
                    ie =
                      n.responseType === "text"
                        ? (ie ?? "") +
                          (J ??= new TextDecoder()).decode(me, { stream: !0 })
                        : void 0;
                    let ct = () =>
                      i.next({
                        type: mn.DownloadProgress,
                        total: D ? +D : void 0,
                        loaded: I,
                        partialText: ie,
                      });
                    q ? q.run(ct) : ct();
                  }
                }
              })
            );
            let be = this.concatChunks(A, I);
            try {
              let te = c.headers.get("Content-Type") ?? "";
              y = this.parseBody(n, be, te);
            } catch (te) {
              i.error(
                new pn({
                  error: te,
                  headers: new $t(c.headers),
                  status: c.status,
                  statusText: c.statusText,
                  url: Qm(c) ?? n.urlWithParams,
                })
              );
              return;
            }
          }
          h === 0 && (h = y ? Xm : 0),
            h >= 200 && h < 300
              ? (i.next(
                  new Lo({
                    body: y,
                    headers: u,
                    status: h,
                    statusText: f,
                    url: g,
                  })
                ),
                i.complete())
              : i.error(
                  new pn({
                    error: y,
                    headers: u,
                    status: h,
                    statusText: f,
                    url: g,
                  })
                );
        });
      }
      parseBody(n, o, i) {
        switch (n.responseType) {
          case "json":
            let s = new TextDecoder().decode(o).replace(t_, "");
            return s === "" ? null : JSON.parse(s);
          case "text":
            return new TextDecoder().decode(o);
          case "blob":
            return new Blob([o], { type: i });
          case "arraybuffer":
            return o.buffer;
        }
      }
      createRequestInit(n) {
        let o = {},
          i = n.withCredentials ? "include" : void 0;
        if (
          (n.headers.forEach((s, c) => (o[s] = c.join(","))),
          n.headers.has("Accept") ||
            (o.Accept = "application/json, text/plain, */*"),
          !n.headers.has("Content-Type"))
        ) {
          let s = n.detectContentTypeHeader();
          s !== null && (o["Content-Type"] = s);
        }
        return {
          body: n.serializeBody(),
          method: n.method,
          headers: o,
          credentials: i,
        };
      }
      concatChunks(n, o) {
        let i = new Uint8Array(o),
          s = 0;
        for (let c of n) i.set(c, s), (s += c.length);
        return i;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Qu = class {};
function Ku() {}
function o_(t) {
  t.then(Ku, Ku);
}
function i_(t, e) {
  return e(t);
}
function s_(t, e, r) {
  return (n, o) => Ke(r, () => e(n, (i) => t(i, o)));
}
var ev = new S(""),
  a_ = new S(""),
  c_ = new S("", { providedIn: "root", factory: () => !0 });
var Km = (() => {
  let e = class e extends ko {
    constructor(n, o) {
      super(),
        (this.backend = n),
        (this.injector = o),
        (this.chain = null),
        (this.pendingTasks = w(an)),
        (this.contributeToStability = w(c_));
    }
    handle(n) {
      if (this.chain === null) {
        let o = Array.from(
          new Set([...this.injector.get(ev), ...this.injector.get(a_, [])])
        );
        this.chain = o.reduceRight((i, s) => s_(i, s, this.injector), i_);
      }
      if (this.contributeToStability) {
        let o = this.pendingTasks.add();
        return this.chain(n, (i) => this.backend.handle(i)).pipe(
          Tn(() => this.pendingTasks.remove(o))
        );
      } else return this.chain(n, (o) => this.backend.handle(o));
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(T(fa), T(Te));
  }),
    (e.ɵprov = M({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
var l_ = /^\)\]\}',?\n/;
function u_(t) {
  return "responseURL" in t && t.responseURL
    ? t.responseURL
    : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
    ? t.getResponseHeader("X-Request-URL")
    : null;
}
var Jm = (() => {
    let e = class e {
      constructor(n) {
        this.xhrFactory = n;
      }
      handle(n) {
        if (n.method === "JSONP") throw new _(-2800, !1);
        let o = this.xhrFactory;
        return (o.ɵloadImpl ? ne(o.ɵloadImpl()) : x(null)).pipe(
          ke(
            () =>
              new U((s) => {
                let c = o.build();
                if (
                  (c.open(n.method, n.urlWithParams),
                  n.withCredentials && (c.withCredentials = !0),
                  n.headers.forEach((C, I) =>
                    c.setRequestHeader(C, I.join(","))
                  ),
                  n.headers.has("Accept") ||
                    c.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !n.headers.has("Content-Type"))
                ) {
                  let C = n.detectContentTypeHeader();
                  C !== null && c.setRequestHeader("Content-Type", C);
                }
                if (n.responseType) {
                  let C = n.responseType.toLowerCase();
                  c.responseType = C !== "json" ? C : "text";
                }
                let u = n.serializeBody(),
                  f = null,
                  g = () => {
                    if (f !== null) return f;
                    let C = c.statusText || "OK",
                      I = new $t(c.getAllResponseHeaders()),
                      J = u_(c) || n.url;
                    return (
                      (f = new ha({
                        headers: I,
                        status: c.status,
                        statusText: C,
                        url: J,
                      })),
                      f
                    );
                  },
                  h = () => {
                    let { headers: C, status: I, statusText: J, url: ie } = g(),
                      q = null;
                    I !== e_ &&
                      (q =
                        typeof c.response > "u" ? c.responseText : c.response),
                      I === 0 && (I = q ? Xm : 0);
                    let be = I >= 200 && I < 300;
                    if (n.responseType === "json" && typeof q == "string") {
                      let te = q;
                      q = q.replace(l_, "");
                      try {
                        q = q !== "" ? JSON.parse(q) : null;
                      } catch (me) {
                        (q = te),
                          be && ((be = !1), (q = { error: me, text: q }));
                      }
                    }
                    be
                      ? (s.next(
                          new Lo({
                            body: q,
                            headers: C,
                            status: I,
                            statusText: J,
                            url: ie || void 0,
                          })
                        ),
                        s.complete())
                      : s.error(
                          new pn({
                            error: q,
                            headers: C,
                            status: I,
                            statusText: J,
                            url: ie || void 0,
                          })
                        );
                  },
                  y = (C) => {
                    let { url: I } = g(),
                      J = new pn({
                        error: C,
                        status: c.status || 0,
                        statusText: c.statusText || "Unknown Error",
                        url: I || void 0,
                      });
                    s.error(J);
                  },
                  v = !1,
                  D = (C) => {
                    v || (s.next(g()), (v = !0));
                    let I = { type: mn.DownloadProgress, loaded: C.loaded };
                    C.lengthComputable && (I.total = C.total),
                      n.responseType === "text" &&
                        c.responseText &&
                        (I.partialText = c.responseText),
                      s.next(I);
                  },
                  A = (C) => {
                    let I = { type: mn.UploadProgress, loaded: C.loaded };
                    C.lengthComputable && (I.total = C.total), s.next(I);
                  };
                return (
                  c.addEventListener("load", h),
                  c.addEventListener("error", y),
                  c.addEventListener("timeout", y),
                  c.addEventListener("abort", y),
                  n.reportProgress &&
                    (c.addEventListener("progress", D),
                    u !== null &&
                      c.upload &&
                      c.upload.addEventListener("progress", A)),
                  c.send(u),
                  s.next({ type: mn.Sent }),
                  () => {
                    c.removeEventListener("error", y),
                      c.removeEventListener("abort", y),
                      c.removeEventListener("load", h),
                      c.removeEventListener("timeout", y),
                      n.reportProgress &&
                        (c.removeEventListener("progress", D),
                        u !== null &&
                          c.upload &&
                          c.upload.removeEventListener("progress", A)),
                      c.readyState !== c.DONE && c.abort();
                  }
                );
              })
          )
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Lr));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  tv = new S(""),
  d_ = "XSRF-TOKEN",
  f_ = new S("", { providedIn: "root", factory: () => d_ }),
  h_ = "X-XSRF-TOKEN",
  p_ = new S("", { providedIn: "root", factory: () => h_ }),
  pa = class {},
  g_ = (() => {
    let e = class e {
      constructor(n, o, i) {
        (this.doc = n),
          (this.platform = o),
          (this.cookieName = i),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let n = this.doc.cookie || "";
        return (
          n !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = la(n, this.cookieName)),
            (this.lastCookieString = n)),
          this.lastToken
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Ee), T(wt), T(f_));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function m_(t, e) {
  let r = t.url.toLowerCase();
  if (
    !w(tv) ||
    t.method === "GET" ||
    t.method === "HEAD" ||
    r.startsWith("http://") ||
    r.startsWith("https://")
  )
    return e(t);
  let n = w(pa).getToken(),
    o = w(p_);
  return (
    n != null &&
      !t.headers.has(o) &&
      (t = t.clone({ headers: t.headers.set(o, n) })),
    e(t)
  );
}
function nv(...t) {
  let e = [
    Ut,
    Jm,
    Km,
    { provide: ko, useExisting: Km },
    { provide: fa, useFactory: () => w(r_, { optional: !0 }) ?? w(Jm) },
    { provide: ev, useValue: m_, multi: !0 },
    { provide: tv, useValue: !0 },
    { provide: pa, useClass: g_ },
  ];
  for (let r of t) e.push(...r.ɵproviders);
  return Eo(e);
}
var ed = class extends ca {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  td = class t extends ed {
    static makeCurrent() {
      Bm(new t());
    }
    onAndCancel(e, r, n) {
      return (
        e.addEventListener(r, n),
        () => {
          e.removeEventListener(r, n);
        }
      );
    }
    dispatchEvent(e, r) {
      e.dispatchEvent(r);
    }
    remove(e) {
      e.remove();
    }
    createElement(e, r) {
      return (r = r || this.getDefaultDocument()), r.createElement(e);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(e) {
      return e instanceof DocumentFragment;
    }
    getGlobalEventTarget(e, r) {
      return r === "window"
        ? window
        : r === "document"
        ? e
        : r === "body"
        ? e.body
        : null;
    }
    getBaseHref(e) {
      let r = v_();
      return r == null ? null : y_(r);
    }
    resetBaseElement() {
      Vo = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(e) {
      return la(document.cookie, e);
    }
  },
  Vo = null;
function v_() {
  return (
    (Vo = Vo || document.querySelector("base")),
    Vo ? Vo.getAttribute("href") : null
  );
}
function y_(t) {
  return new URL(t, document.baseURI).pathname;
}
var w_ = (() => {
    let e = class e {
      build() {
        return new XMLHttpRequest();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  ma = new S(""),
  sv = (() => {
    let e = class e {
      constructor(n, o) {
        (this._zone = o),
          (this._eventNameToPlugin = new Map()),
          n.forEach((i) => {
            i.manager = this;
          }),
          (this._plugins = n.slice().reverse());
      }
      addEventListener(n, o, i) {
        return this._findPluginFor(o).addEventListener(n, o, i);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(n) {
        let o = this._eventNameToPlugin.get(n);
        if (o) return o;
        if (((o = this._plugins.find((s) => s.supports(n))), !o))
          throw new _(5101, !1);
        return this._eventNameToPlugin.set(n, o), o;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(ma), T(ae));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  jo = class {
    constructor(e) {
      this._doc = e;
    }
  },
  Ju = "ng-app-id",
  av = (() => {
    let e = class e {
      constructor(n, o, i, s = {}) {
        (this.doc = n),
          (this.appId = o),
          (this.nonce = i),
          (this.platformId = s),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = ua(s)),
          this.resetHostNodes();
      }
      addStyles(n) {
        for (let o of n)
          this.changeUsageCount(o, 1) === 1 && this.onStyleAdded(o);
      }
      removeStyles(n) {
        for (let o of n)
          this.changeUsageCount(o, -1) <= 0 && this.onStyleRemoved(o);
      }
      ngOnDestroy() {
        let n = this.styleNodesInDOM;
        n && (n.forEach((o) => o.remove()), n.clear());
        for (let o of this.getAllStyles()) this.onStyleRemoved(o);
        this.resetHostNodes();
      }
      addHost(n) {
        this.hostNodes.add(n);
        for (let o of this.getAllStyles()) this.addStyleToHost(n, o);
      }
      removeHost(n) {
        this.hostNodes.delete(n);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(n) {
        for (let o of this.hostNodes) this.addStyleToHost(o, n);
      }
      onStyleRemoved(n) {
        let o = this.styleRef;
        o.get(n)?.elements?.forEach((i) => i.remove()), o.delete(n);
      }
      collectServerRenderedStyles() {
        let n = this.doc.head?.querySelectorAll(`style[${Ju}="${this.appId}"]`);
        if (n?.length) {
          let o = new Map();
          return (
            n.forEach((i) => {
              i.textContent != null && o.set(i.textContent, i);
            }),
            o
          );
        }
        return null;
      }
      changeUsageCount(n, o) {
        let i = this.styleRef;
        if (i.has(n)) {
          let s = i.get(n);
          return (s.usage += o), s.usage;
        }
        return i.set(n, { usage: o, elements: [] }), o;
      }
      getStyleElement(n, o) {
        let i = this.styleNodesInDOM,
          s = i?.get(o);
        if (s?.parentNode === n) return i.delete(o), s.removeAttribute(Ju), s;
        {
          let c = this.doc.createElement("style");
          return (
            this.nonce && c.setAttribute("nonce", this.nonce),
            (c.textContent = o),
            this.platformIsServer && c.setAttribute(Ju, this.appId),
            n.appendChild(c),
            c
          );
        }
      }
      addStyleToHost(n, o) {
        let i = this.getStyleElement(n, o),
          s = this.styleRef,
          c = s.get(o)?.elements;
        c ? c.push(i) : s.set(o, { elements: [i], usage: 1 });
      }
      resetHostNodes() {
        let n = this.hostNodes;
        n.clear(), n.add(this.doc.head);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Ee), T(pu), T(mu, 8), T(wt));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Xu = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  rd = /%COMP%/g,
  cv = "%COMP%",
  D_ = `_nghost-${cv}`,
  b_ = `_ngcontent-${cv}`,
  C_ = !0,
  E_ = new S("", { providedIn: "root", factory: () => C_ });
function I_(t) {
  return b_.replace(rd, t);
}
function M_(t) {
  return D_.replace(rd, t);
}
function lv(t, e) {
  return e.map((r) => r.replace(rd, t));
}
var rv = (() => {
    let e = class e {
      constructor(n, o, i, s, c, u, f, g = null) {
        (this.eventManager = n),
          (this.sharedStylesHost = o),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = s),
          (this.doc = c),
          (this.platformId = u),
          (this.ngZone = f),
          (this.nonce = g),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = ua(u)),
          (this.defaultRenderer = new Bo(n, c, f, this.platformIsServer));
      }
      createRenderer(n, o) {
        if (!n || !o) return this.defaultRenderer;
        this.platformIsServer &&
          o.encapsulation === gt.ShadowDom &&
          (o = $(b({}, o), { encapsulation: gt.Emulated }));
        let i = this.getOrCreateRenderer(n, o);
        return (
          i instanceof va
            ? i.applyToHost(n)
            : i instanceof $o && i.applyStyles(),
          i
        );
      }
      getOrCreateRenderer(n, o) {
        let i = this.rendererByCompId,
          s = i.get(o.id);
        if (!s) {
          let c = this.doc,
            u = this.ngZone,
            f = this.eventManager,
            g = this.sharedStylesHost,
            h = this.removeStylesOnCompDestroy,
            y = this.platformIsServer;
          switch (o.encapsulation) {
            case gt.Emulated:
              s = new va(f, g, o, this.appId, h, c, u, y);
              break;
            case gt.ShadowDom:
              return new nd(f, g, n, o, c, u, this.nonce, y);
            default:
              s = new $o(f, g, o, h, c, u, y);
              break;
          }
          i.set(o.id, s);
        }
        return s;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(
        T(sv),
        T(av),
        T(pu),
        T(E_),
        T(Ee),
        T(wt),
        T(ae),
        T(mu)
      );
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Bo = class {
    constructor(e, r, n, o) {
      (this.eventManager = e),
        (this.doc = r),
        (this.ngZone = n),
        (this.platformIsServer = o),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(e, r) {
      return r
        ? this.doc.createElementNS(Xu[r] || r, e)
        : this.doc.createElement(e);
    }
    createComment(e) {
      return this.doc.createComment(e);
    }
    createText(e) {
      return this.doc.createTextNode(e);
    }
    appendChild(e, r) {
      (ov(e) ? e.content : e).appendChild(r);
    }
    insertBefore(e, r, n) {
      e && (ov(e) ? e.content : e).insertBefore(r, n);
    }
    removeChild(e, r) {
      r.remove();
    }
    selectRootElement(e, r) {
      let n = typeof e == "string" ? this.doc.querySelector(e) : e;
      if (!n) throw new _(-5104, !1);
      return r || (n.textContent = ""), n;
    }
    parentNode(e) {
      return e.parentNode;
    }
    nextSibling(e) {
      return e.nextSibling;
    }
    setAttribute(e, r, n, o) {
      if (o) {
        r = o + ":" + r;
        let i = Xu[o];
        i ? e.setAttributeNS(i, r, n) : e.setAttribute(r, n);
      } else e.setAttribute(r, n);
    }
    removeAttribute(e, r, n) {
      if (n) {
        let o = Xu[n];
        o ? e.removeAttributeNS(o, r) : e.removeAttribute(`${n}:${r}`);
      } else e.removeAttribute(r);
    }
    addClass(e, r) {
      e.classList.add(r);
    }
    removeClass(e, r) {
      e.classList.remove(r);
    }
    setStyle(e, r, n, o) {
      o & (Nt.DashCase | Nt.Important)
        ? e.style.setProperty(r, n, o & Nt.Important ? "important" : "")
        : (e.style[r] = n);
    }
    removeStyle(e, r, n) {
      n & Nt.DashCase ? e.style.removeProperty(r) : (e.style[r] = "");
    }
    setProperty(e, r, n) {
      e != null && (e[r] = n);
    }
    setValue(e, r) {
      e.nodeValue = r;
    }
    listen(e, r, n) {
      if (
        typeof e == "string" &&
        ((e = jt().getGlobalEventTarget(this.doc, e)), !e)
      )
        throw new Error(`Unsupported event target ${e} for event ${r}`);
      return this.eventManager.addEventListener(
        e,
        r,
        this.decoratePreventDefault(n)
      );
    }
    decoratePreventDefault(e) {
      return (r) => {
        if (r === "__ngUnwrap__") return e;
        (this.platformIsServer ? this.ngZone.runGuarded(() => e(r)) : e(r)) ===
          !1 && r.preventDefault();
      };
    }
  };
function ov(t) {
  return t.tagName === "TEMPLATE" && t.content !== void 0;
}
var nd = class extends Bo {
    constructor(e, r, n, o, i, s, c, u) {
      super(e, i, s, u),
        (this.sharedStylesHost = r),
        (this.hostEl = n),
        (this.shadowRoot = n.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let f = lv(o.id, o.styles);
      for (let g of f) {
        let h = document.createElement("style");
        c && h.setAttribute("nonce", c),
          (h.textContent = g),
          this.shadowRoot.appendChild(h);
      }
    }
    nodeOrShadowRoot(e) {
      return e === this.hostEl ? this.shadowRoot : e;
    }
    appendChild(e, r) {
      return super.appendChild(this.nodeOrShadowRoot(e), r);
    }
    insertBefore(e, r, n) {
      return super.insertBefore(this.nodeOrShadowRoot(e), r, n);
    }
    removeChild(e, r) {
      return super.removeChild(null, r);
    }
    parentNode(e) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  $o = class extends Bo {
    constructor(e, r, n, o, i, s, c, u) {
      super(e, i, s, c),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = o),
        (this.styles = u ? lv(u, n.styles) : n.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  va = class extends $o {
    constructor(e, r, n, o, i, s, c, u) {
      let f = o + "-" + n.id;
      super(e, r, n, i, s, c, u, f),
        (this.contentAttr = I_(f)),
        (this.hostAttr = M_(f));
    }
    applyToHost(e) {
      this.applyStyles(), this.setAttribute(e, this.hostAttr, "");
    }
    createElement(e, r) {
      let n = super.createElement(e, r);
      return super.setAttribute(n, this.contentAttr, ""), n;
    }
  },
  __ = (() => {
    let e = class e extends jo {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return !0;
      }
      addEventListener(n, o, i) {
        return (
          n.addEventListener(o, i, !1), () => this.removeEventListener(n, o, i)
        );
      }
      removeEventListener(n, o, i) {
        return n.removeEventListener(o, i);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Ee));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  S_ = (() => {
    let e = class e extends jo {
      constructor(n) {
        super(n), (this.delegate = w(Pm, { optional: !0 }));
      }
      supports(n) {
        return this.delegate ? this.delegate.supports(n) : !1;
      }
      addEventListener(n, o, i) {
        return this.delegate.addEventListener(n, o, i);
      }
      removeEventListener(n, o, i) {
        return this.delegate.removeEventListener(n, o, i);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Ee));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  iv = ["alt", "control", "meta", "shift"],
  T_ = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  x_ = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  A_ = (() => {
    let e = class e extends jo {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return e.parseEventName(n) != null;
      }
      addEventListener(n, o, i) {
        let s = e.parseEventName(o),
          c = e.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => jt().onAndCancel(n, s.domEventName, c));
      }
      static parseEventName(n) {
        let o = n.toLowerCase().split("."),
          i = o.shift();
        if (o.length === 0 || !(i === "keydown" || i === "keyup")) return null;
        let s = e._normalizeKey(o.pop()),
          c = "",
          u = o.indexOf("code");
        if (
          (u > -1 && (o.splice(u, 1), (c = "code.")),
          iv.forEach((g) => {
            let h = o.indexOf(g);
            h > -1 && (o.splice(h, 1), (c += g + "."));
          }),
          (c += s),
          o.length != 0 || s.length === 0)
        )
          return null;
        let f = {};
        return (f.domEventName = i), (f.fullKey = c), f;
      }
      static matchEventFullKeyCode(n, o) {
        let i = T_[n.key] || n.key,
          s = "";
        return (
          o.indexOf("code.") > -1 && ((i = n.code), (s = "code.")),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === " " ? (i = "space") : i === "." && (i = "dot"),
              iv.forEach((c) => {
                if (c !== i) {
                  let u = x_[c];
                  u(n) && (s += c + ".");
                }
              }),
              (s += i),
              s === o)
        );
      }
      static eventCallback(n, o, i) {
        return (s) => {
          e.matchEventFullKeyCode(s, n) && i.runGuarded(() => o(s));
        };
      }
      static _normalizeKey(n) {
        return n === "esc" ? "escape" : n;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Ee));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function uv(t, e) {
  return Om(b({ rootComponent: t }, N_(e)));
}
function N_(t) {
  return {
    appProviders: [...F_, ...(t?.providers ?? [])],
    platformProviders: k_,
  };
}
function R_() {
  td.makeCurrent();
}
function O_() {
  return new At();
}
function P_() {
  return Fg(document), document;
}
var k_ = [
  { provide: wt, useValue: Gu },
  { provide: gu, useValue: R_, multi: !0 },
  { provide: Ee, useFactory: P_, deps: [] },
];
var F_ = [
  { provide: zs, useValue: "root" },
  { provide: At, useFactory: O_, deps: [] },
  { provide: ma, useClass: __, multi: !0, deps: [Ee, ae, wt] },
  { provide: ma, useClass: A_, multi: !0, deps: [Ee] },
  { provide: ma, useClass: S_, multi: !0 },
  rv,
  av,
  sv,
  { provide: Rr, useExisting: rv },
  { provide: Lr, useClass: w_, deps: [] },
  [],
];
var dv = (() => {
  let e = class e {
    constructor(n) {
      this._doc = n;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(n) {
      this._doc.title = n || "";
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(T(Ee));
  }),
    (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var P = "primary",
  ni = Symbol("RouteTitle"),
  cd = class {
    constructor(e) {
      this.params = e || {};
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.params, e);
    }
    get(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r[0] : r;
      }
      return null;
    }
    getAll(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r : [r];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function zr(t) {
  return new cd(t);
}
function V_(t, e, r) {
  let n = r.path.split("/");
  if (
    n.length > t.length ||
    (r.pathMatch === "full" && (e.hasChildren() || n.length < t.length))
  )
    return null;
  let o = {};
  for (let i = 0; i < n.length; i++) {
    let s = n[i],
      c = t[i];
    if (s[0] === ":") o[s.substring(1)] = c;
    else if (s !== c.path) return null;
  }
  return { consumed: t.slice(0, n.length), posParams: o };
}
function j_(t, e) {
  if (t.length !== e.length) return !1;
  for (let r = 0; r < t.length; ++r) if (!bt(t[r], e[r])) return !1;
  return !0;
}
function bt(t, e) {
  let r = t ? ld(t) : void 0,
    n = e ? ld(e) : void 0;
  if (!r || !n || r.length != n.length) return !1;
  let o;
  for (let i = 0; i < r.length; i++)
    if (((o = r[i]), !Cv(t[o], e[o]))) return !1;
  return !0;
}
function ld(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function Cv(t, e) {
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return !1;
    let r = [...t].sort(),
      n = [...e].sort();
    return r.every((o, i) => n[i] === o);
  } else return t === e;
}
function Ev(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function wn(t) {
  return jc(t) ? t : Gn(t) ? ne(Promise.resolve(t)) : x(t);
}
var B_ = { exact: Mv, subset: _v },
  Iv = { exact: $_, subset: U_, ignored: () => !0 };
function fv(t, e, r) {
  return (
    B_[r.paths](t.root, e.root, r.matrixParams) &&
    Iv[r.queryParams](t.queryParams, e.queryParams) &&
    !(r.fragment === "exact" && t.fragment !== e.fragment)
  );
}
function $_(t, e) {
  return bt(t, e);
}
function Mv(t, e, r) {
  if (
    !Zn(t.segments, e.segments) ||
    !Da(t.segments, e.segments, r) ||
    t.numberOfChildren !== e.numberOfChildren
  )
    return !1;
  for (let n in e.children)
    if (!t.children[n] || !Mv(t.children[n], e.children[n], r)) return !1;
  return !0;
}
function U_(t, e) {
  return (
    Object.keys(e).length <= Object.keys(t).length &&
    Object.keys(e).every((r) => Cv(t[r], e[r]))
  );
}
function _v(t, e, r) {
  return Sv(t, e, e.segments, r);
}
function Sv(t, e, r, n) {
  if (t.segments.length > r.length) {
    let o = t.segments.slice(0, r.length);
    return !(!Zn(o, r) || e.hasChildren() || !Da(o, r, n));
  } else if (t.segments.length === r.length) {
    if (!Zn(t.segments, r) || !Da(t.segments, r, n)) return !1;
    for (let o in e.children)
      if (!t.children[o] || !_v(t.children[o], e.children[o], n)) return !1;
    return !0;
  } else {
    let o = r.slice(0, t.segments.length),
      i = r.slice(t.segments.length);
    return !Zn(t.segments, o) || !Da(t.segments, o, n) || !t.children[P]
      ? !1
      : Sv(t.children[P], e, i, n);
  }
}
function Da(t, e, r) {
  return e.every((n, o) => Iv[r](t[o].parameters, n.parameters));
}
var zt = class {
    constructor(e = new Y([], {}), r = {}, n = null) {
      (this.root = e), (this.queryParams = r), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= zr(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return G_.serialize(this);
    }
  },
  Y = class {
    constructor(e, r) {
      (this.segments = e),
        (this.children = r),
        (this.parent = null),
        Object.values(r).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return ba(this);
    }
  },
  Wn = class {
    constructor(e, r) {
      (this.path = e), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= zr(this.parameters)), this._parameterMap;
    }
    toString() {
      return xv(this);
    }
  };
function H_(t, e) {
  return Zn(t, e) && t.every((r, n) => bt(r.parameters, e[n].parameters));
}
function Zn(t, e) {
  return t.length !== e.length ? !1 : t.every((r, n) => r.path === e[n].path);
}
function z_(t, e) {
  let r = [];
  return (
    Object.entries(t.children).forEach(([n, o]) => {
      n === P && (r = r.concat(e(o, n)));
    }),
    Object.entries(t.children).forEach(([n, o]) => {
      n !== P && (r = r.concat(e(o, n)));
    }),
    r
  );
}
var ri = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: () => new Gr(), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Gr = class {
    parse(e) {
      let r = new dd(e);
      return new zt(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment()
      );
    }
    serialize(e) {
      let r = `/${Uo(e.root, !0)}`,
        n = Z_(e.queryParams),
        o = typeof e.fragment == "string" ? `#${q_(e.fragment)}` : "";
      return `${r}${n}${o}`;
    }
  },
  G_ = new Gr();
function ba(t) {
  return t.segments.map((e) => xv(e)).join("/");
}
function Uo(t, e) {
  if (!t.hasChildren()) return ba(t);
  if (e) {
    let r = t.children[P] ? Uo(t.children[P], !1) : "",
      n = [];
    return (
      Object.entries(t.children).forEach(([o, i]) => {
        o !== P && n.push(`${o}:${Uo(i, !1)}`);
      }),
      n.length > 0 ? `${r}(${n.join("//")})` : r
    );
  } else {
    let r = z_(t, (n, o) =>
      o === P ? [Uo(t.children[P], !1)] : [`${o}:${Uo(n, !1)}`]
    );
    return Object.keys(t.children).length === 1 && t.children[P] != null
      ? `${ba(t)}/${r[0]}`
      : `${ba(t)}/(${r.join("//")})`;
  }
}
function Tv(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function ya(t) {
  return Tv(t).replace(/%3B/gi, ";");
}
function q_(t) {
  return encodeURI(t);
}
function ud(t) {
  return Tv(t)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Ca(t) {
  return decodeURIComponent(t);
}
function hv(t) {
  return Ca(t.replace(/\+/g, "%20"));
}
function xv(t) {
  return `${ud(t.path)}${W_(t.parameters)}`;
}
function W_(t) {
  return Object.entries(t)
    .map(([e, r]) => `;${ud(e)}=${ud(r)}`)
    .join("");
}
function Z_(t) {
  let e = Object.entries(t)
    .map(([r, n]) =>
      Array.isArray(n)
        ? n.map((o) => `${ya(r)}=${ya(o)}`).join("&")
        : `${ya(r)}=${ya(n)}`
    )
    .filter((r) => r);
  return e.length ? `?${e.join("&")}` : "";
}
var Y_ = /^[^\/()?;#]+/;
function od(t) {
  let e = t.match(Y_);
  return e ? e[0] : "";
}
var Q_ = /^[^\/()?;=#]+/;
function K_(t) {
  let e = t.match(Q_);
  return e ? e[0] : "";
}
var J_ = /^[^=?&#]+/;
function X_(t) {
  let e = t.match(J_);
  return e ? e[0] : "";
}
var eS = /^[^&#]+/;
function tS(t) {
  let e = t.match(eS);
  return e ? e[0] : "";
}
var dd = class {
  constructor(e) {
    (this.url = e), (this.remaining = e);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new Y([], {})
        : new Y([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let e = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(e);
      while (this.consumeOptional("&"));
    return e;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let e = [];
    for (
      this.peekStartsWith("(") || e.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), e.push(this.parseSegment());
    let r = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (r = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith("(") && (n = this.parseParens(!1)),
      (e.length > 0 || Object.keys(r).length > 0) && (n[P] = new Y(e, r)),
      n
    );
  }
  parseSegment() {
    let e = od(this.remaining);
    if (e === "" && this.peekStartsWith(";")) throw new _(4009, !1);
    return this.capture(e), new Wn(Ca(e), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let e = {};
    for (; this.consumeOptional(";"); ) this.parseParam(e);
    return e;
  }
  parseParam(e) {
    let r = K_(this.remaining);
    if (!r) return;
    this.capture(r);
    let n = "";
    if (this.consumeOptional("=")) {
      let o = od(this.remaining);
      o && ((n = o), this.capture(n));
    }
    e[Ca(r)] = Ca(n);
  }
  parseQueryParam(e) {
    let r = X_(this.remaining);
    if (!r) return;
    this.capture(r);
    let n = "";
    if (this.consumeOptional("=")) {
      let s = tS(this.remaining);
      s && ((n = s), this.capture(n));
    }
    let o = hv(r),
      i = hv(n);
    if (e.hasOwnProperty(o)) {
      let s = e[o];
      Array.isArray(s) || ((s = [s]), (e[o] = s)), s.push(i);
    } else e[o] = i;
  }
  parseParens(e) {
    let r = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let n = od(this.remaining),
        o = this.remaining[n.length];
      if (o !== "/" && o !== ")" && o !== ";") throw new _(4010, !1);
      let i;
      n.indexOf(":") > -1
        ? ((i = n.slice(0, n.indexOf(":"))), this.capture(i), this.capture(":"))
        : e && (i = P);
      let s = this.parseChildren();
      (r[i] = Object.keys(s).length === 1 ? s[P] : new Y([], s)),
        this.consumeOptional("//");
    }
    return r;
  }
  peekStartsWith(e) {
    return this.remaining.startsWith(e);
  }
  consumeOptional(e) {
    return this.peekStartsWith(e)
      ? ((this.remaining = this.remaining.substring(e.length)), !0)
      : !1;
  }
  capture(e) {
    if (!this.consumeOptional(e)) throw new _(4011, !1);
  }
};
function Av(t) {
  return t.segments.length > 0 ? new Y([], { [P]: t }) : t;
}
function Nv(t) {
  let e = {};
  for (let [n, o] of Object.entries(t.children)) {
    let i = Nv(o);
    if (n === P && i.segments.length === 0 && i.hasChildren())
      for (let [s, c] of Object.entries(i.children)) e[s] = c;
    else (i.segments.length > 0 || i.hasChildren()) && (e[n] = i);
  }
  let r = new Y(t.segments, e);
  return nS(r);
}
function nS(t) {
  if (t.numberOfChildren === 1 && t.children[P]) {
    let e = t.children[P];
    return new Y(t.segments.concat(e.segments), e.children);
  }
  return t;
}
function Yn(t) {
  return t instanceof zt;
}
function rS(t, e, r = null, n = null) {
  let o = Rv(t);
  return Ov(o, e, r, n);
}
function Rv(t) {
  let e;
  function r(i) {
    let s = {};
    for (let u of i.children) {
      let f = r(u);
      s[u.outlet] = f;
    }
    let c = new Y(i.url, s);
    return i === t && (e = c), c;
  }
  let n = r(t.root),
    o = Av(n);
  return e ?? o;
}
function Ov(t, e, r, n) {
  let o = t;
  for (; o.parent; ) o = o.parent;
  if (e.length === 0) return id(o, o, o, r, n);
  let i = oS(e);
  if (i.toRoot()) return id(o, o, new Y([], {}), r, n);
  let s = iS(i, o, t),
    c = s.processChildren
      ? Go(s.segmentGroup, s.index, i.commands)
      : kv(s.segmentGroup, s.index, i.commands);
  return id(o, s.segmentGroup, c, r, n);
}
function Ea(t) {
  return typeof t == "object" && t != null && !t.outlets && !t.segmentPath;
}
function Zo(t) {
  return typeof t == "object" && t != null && t.outlets;
}
function id(t, e, r, n, o) {
  let i = {};
  n &&
    Object.entries(n).forEach(([u, f]) => {
      i[u] = Array.isArray(f) ? f.map((g) => `${g}`) : `${f}`;
    });
  let s;
  t === e ? (s = r) : (s = Pv(t, e, r));
  let c = Av(Nv(s));
  return new zt(c, i, o);
}
function Pv(t, e, r) {
  let n = {};
  return (
    Object.entries(t.children).forEach(([o, i]) => {
      i === e ? (n[o] = r) : (n[o] = Pv(i, e, r));
    }),
    new Y(t.segments, n)
  );
}
var Ia = class {
  constructor(e, r, n) {
    if (
      ((this.isAbsolute = e),
      (this.numberOfDoubleDots = r),
      (this.commands = n),
      e && n.length > 0 && Ea(n[0]))
    )
      throw new _(4003, !1);
    let o = n.find(Zo);
    if (o && o !== Ev(n)) throw new _(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function oS(t) {
  if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new Ia(!0, 0, t);
  let e = 0,
    r = !1,
    n = t.reduce((o, i, s) => {
      if (typeof i == "object" && i != null) {
        if (i.outlets) {
          let c = {};
          return (
            Object.entries(i.outlets).forEach(([u, f]) => {
              c[u] = typeof f == "string" ? f.split("/") : f;
            }),
            [...o, { outlets: c }]
          );
        }
        if (i.segmentPath) return [...o, i.segmentPath];
      }
      return typeof i != "string"
        ? [...o, i]
        : s === 0
        ? (i.split("/").forEach((c, u) => {
            (u == 0 && c === ".") ||
              (u == 0 && c === ""
                ? (r = !0)
                : c === ".."
                ? e++
                : c != "" && o.push(c));
          }),
          o)
        : [...o, i];
    }, []);
  return new Ia(r, e, n);
}
var $r = class {
  constructor(e, r, n) {
    (this.segmentGroup = e), (this.processChildren = r), (this.index = n);
  }
};
function iS(t, e, r) {
  if (t.isAbsolute) return new $r(e, !0, 0);
  if (!r) return new $r(e, !1, NaN);
  if (r.parent === null) return new $r(r, !0, 0);
  let n = Ea(t.commands[0]) ? 0 : 1,
    o = r.segments.length - 1 + n;
  return sS(r, o, t.numberOfDoubleDots);
}
function sS(t, e, r) {
  let n = t,
    o = e,
    i = r;
  for (; i > o; ) {
    if (((i -= o), (n = n.parent), !n)) throw new _(4005, !1);
    o = n.segments.length;
  }
  return new $r(n, !1, o - i);
}
function aS(t) {
  return Zo(t[0]) ? t[0].outlets : { [P]: t };
}
function kv(t, e, r) {
  if (((t ??= new Y([], {})), t.segments.length === 0 && t.hasChildren()))
    return Go(t, e, r);
  let n = cS(t, e, r),
    o = r.slice(n.commandIndex);
  if (n.match && n.pathIndex < t.segments.length) {
    let i = new Y(t.segments.slice(0, n.pathIndex), {});
    return (
      (i.children[P] = new Y(t.segments.slice(n.pathIndex), t.children)),
      Go(i, 0, o)
    );
  } else
    return n.match && o.length === 0
      ? new Y(t.segments, {})
      : n.match && !t.hasChildren()
      ? fd(t, e, r)
      : n.match
      ? Go(t, 0, o)
      : fd(t, e, r);
}
function Go(t, e, r) {
  if (r.length === 0) return new Y(t.segments, {});
  {
    let n = aS(r),
      o = {};
    if (
      Object.keys(n).some((i) => i !== P) &&
      t.children[P] &&
      t.numberOfChildren === 1 &&
      t.children[P].segments.length === 0
    ) {
      let i = Go(t.children[P], e, r);
      return new Y(t.segments, i.children);
    }
    return (
      Object.entries(n).forEach(([i, s]) => {
        typeof s == "string" && (s = [s]),
          s !== null && (o[i] = kv(t.children[i], e, s));
      }),
      Object.entries(t.children).forEach(([i, s]) => {
        n[i] === void 0 && (o[i] = s);
      }),
      new Y(t.segments, o)
    );
  }
}
function cS(t, e, r) {
  let n = 0,
    o = e,
    i = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; o < t.segments.length; ) {
    if (n >= r.length) return i;
    let s = t.segments[o],
      c = r[n];
    if (Zo(c)) break;
    let u = `${c}`,
      f = n < r.length - 1 ? r[n + 1] : null;
    if (o > 0 && u === void 0) break;
    if (u && f && typeof f == "object" && f.outlets === void 0) {
      if (!gv(u, f, s)) return i;
      n += 2;
    } else {
      if (!gv(u, {}, s)) return i;
      n++;
    }
    o++;
  }
  return { match: !0, pathIndex: o, commandIndex: n };
}
function fd(t, e, r) {
  let n = t.segments.slice(0, e),
    o = 0;
  for (; o < r.length; ) {
    let i = r[o];
    if (Zo(i)) {
      let u = lS(i.outlets);
      return new Y(n, u);
    }
    if (o === 0 && Ea(r[0])) {
      let u = t.segments[e];
      n.push(new Wn(u.path, pv(r[0]))), o++;
      continue;
    }
    let s = Zo(i) ? i.outlets[P] : `${i}`,
      c = o < r.length - 1 ? r[o + 1] : null;
    s && c && Ea(c)
      ? (n.push(new Wn(s, pv(c))), (o += 2))
      : (n.push(new Wn(s, {})), o++);
  }
  return new Y(n, {});
}
function lS(t) {
  let e = {};
  return (
    Object.entries(t).forEach(([r, n]) => {
      typeof n == "string" && (n = [n]),
        n !== null && (e[r] = fd(new Y([], {}), 0, n));
    }),
    e
  );
}
function pv(t) {
  let e = {};
  return Object.entries(t).forEach(([r, n]) => (e[r] = `${n}`)), e;
}
function gv(t, e, r) {
  return t == r.path && bt(e, r.parameters);
}
var qo = "imperative",
  De = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = "NavigationStart"),
      (t[(t.NavigationEnd = 1)] = "NavigationEnd"),
      (t[(t.NavigationCancel = 2)] = "NavigationCancel"),
      (t[(t.NavigationError = 3)] = "NavigationError"),
      (t[(t.RoutesRecognized = 4)] = "RoutesRecognized"),
      (t[(t.ResolveStart = 5)] = "ResolveStart"),
      (t[(t.ResolveEnd = 6)] = "ResolveEnd"),
      (t[(t.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (t[(t.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (t[(t.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (t[(t.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (t[(t.ChildActivationStart = 11)] = "ChildActivationStart"),
      (t[(t.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (t[(t.ActivationStart = 13)] = "ActivationStart"),
      (t[(t.ActivationEnd = 14)] = "ActivationEnd"),
      (t[(t.Scroll = 15)] = "Scroll"),
      (t[(t.NavigationSkipped = 16)] = "NavigationSkipped"),
      t
    );
  })(De || {}),
  tt = class {
    constructor(e, r) {
      (this.id = e), (this.url = r);
    }
  },
  qr = class extends tt {
    constructor(e, r, n = "imperative", o = null) {
      super(e, r),
        (this.type = De.NavigationStart),
        (this.navigationTrigger = n),
        (this.restoredState = o);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Ct = class extends tt {
    constructor(e, r, n) {
      super(e, r), (this.urlAfterRedirects = n), (this.type = De.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  qe = (function (t) {
    return (
      (t[(t.Redirect = 0)] = "Redirect"),
      (t[(t.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (t[(t.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (t[(t.GuardRejected = 3)] = "GuardRejected"),
      t
    );
  })(qe || {}),
  Ma = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      t
    );
  })(Ma || {}),
  Ht = class extends tt {
    constructor(e, r, n, o) {
      super(e, r),
        (this.reason = n),
        (this.code = o),
        (this.type = De.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  vn = class extends tt {
    constructor(e, r, n, o) {
      super(e, r),
        (this.reason = n),
        (this.code = o),
        (this.type = De.NavigationSkipped);
    }
  },
  Yo = class extends tt {
    constructor(e, r, n, o) {
      super(e, r),
        (this.error = n),
        (this.target = o),
        (this.type = De.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  _a = class extends tt {
    constructor(e, r, n, o) {
      super(e, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = De.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  hd = class extends tt {
    constructor(e, r, n, o) {
      super(e, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = De.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  pd = class extends tt {
    constructor(e, r, n, o, i) {
      super(e, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.shouldActivate = i),
        (this.type = De.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  gd = class extends tt {
    constructor(e, r, n, o) {
      super(e, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = De.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  md = class extends tt {
    constructor(e, r, n, o) {
      super(e, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = De.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  vd = class {
    constructor(e) {
      (this.route = e), (this.type = De.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  yd = class {
    constructor(e) {
      (this.route = e), (this.type = De.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  wd = class {
    constructor(e) {
      (this.snapshot = e), (this.type = De.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Dd = class {
    constructor(e) {
      (this.snapshot = e), (this.type = De.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  bd = class {
    constructor(e) {
      (this.snapshot = e), (this.type = De.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Cd = class {
    constructor(e) {
      (this.snapshot = e), (this.type = De.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Sa = class {
    constructor(e, r, n) {
      (this.routerEvent = e),
        (this.position = r),
        (this.anchor = n),
        (this.type = De.Scroll);
    }
    toString() {
      let e = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${e}')`;
    }
  },
  Qo = class {},
  Wr = class {
    constructor(e, r) {
      (this.url = e), (this.navigationBehaviorOptions = r);
    }
  };
function uS(t, e) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = na(t.providers, e, `Route: ${t.path}`)),
    t._injector ?? e
  );
}
function at(t) {
  return t.outlet || P;
}
function dS(t, e) {
  let r = t.filter((n) => at(n) === e);
  return r.push(...t.filter((n) => at(n) !== e)), r;
}
function oi(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let e = t.parent; e; e = e.parent) {
    let r = e.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var Ed = class {
    get injector() {
      return oi(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(e) {}
    constructor(e) {
      (this.rootInjector = e),
        (this.outlet = null),
        (this.route = null),
        (this.children = new ii(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  ii = (() => {
    let e = class e {
      constructor(n) {
        (this.rootInjector = n), (this.contexts = new Map());
      }
      onChildOutletCreated(n, o) {
        let i = this.getOrCreateContext(n);
        (i.outlet = o), this.contexts.set(n, i);
      }
      onChildOutletDestroyed(n) {
        let o = this.getContext(n);
        o && ((o.outlet = null), (o.attachRef = null));
      }
      onOutletDeactivated() {
        let n = this.contexts;
        return (this.contexts = new Map()), n;
      }
      onOutletReAttached(n) {
        this.contexts = n;
      }
      getOrCreateContext(n) {
        let o = this.getContext(n);
        return (
          o || ((o = new Ed(this.rootInjector)), this.contexts.set(n, o)), o
        );
      }
      getContext(n) {
        return this.contexts.get(n) || null;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Te));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Ta = class {
    constructor(e) {
      this._root = e;
    }
    get root() {
      return this._root.value;
    }
    parent(e) {
      let r = this.pathFromRoot(e);
      return r.length > 1 ? r[r.length - 2] : null;
    }
    children(e) {
      let r = Id(e, this._root);
      return r ? r.children.map((n) => n.value) : [];
    }
    firstChild(e) {
      let r = Id(e, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(e) {
      let r = Md(e, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((o) => o.value).filter((o) => o !== e);
    }
    pathFromRoot(e) {
      return Md(e, this._root).map((r) => r.value);
    }
  };
function Id(t, e) {
  if (t === e.value) return e;
  for (let r of e.children) {
    let n = Id(t, r);
    if (n) return n;
  }
  return null;
}
function Md(t, e) {
  if (t === e.value) return [e];
  for (let r of e.children) {
    let n = Md(t, r);
    if (n.length) return n.unshift(e), n;
  }
  return [];
}
var Ge = class {
  constructor(e, r) {
    (this.value = e), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Br(t) {
  let e = {};
  return t && t.children.forEach((r) => (e[r.value.outlet] = r)), e;
}
var xa = class extends Ta {
  constructor(e, r) {
    super(e), (this.snapshot = r), Pd(this, e);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Fv(t) {
  let e = fS(t),
    r = new Ce([new Wn("", {})]),
    n = new Ce({}),
    o = new Ce({}),
    i = new Ce({}),
    s = new Ce(""),
    c = new yn(r, n, i, s, o, P, t, e.root);
  return (c.snapshot = e.root), new xa(new Ge(c, []), e);
}
function fS(t) {
  let e = {},
    r = {},
    n = {},
    o = "",
    i = new Ur([], e, n, o, r, P, t, null, {});
  return new Na("", new Ge(i, []));
}
var yn = class {
  constructor(e, r, n, o, i, s, c, u) {
    (this.urlSubject = e),
      (this.paramsSubject = r),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = o),
      (this.dataSubject = i),
      (this.outlet = s),
      (this.component = c),
      (this._futureSnapshot = u),
      (this.title = this.dataSubject?.pipe(O((f) => f[ni])) ?? x(void 0)),
      (this.url = e),
      (this.params = r),
      (this.queryParams = n),
      (this.fragment = o),
      (this.data = i);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(O((e) => zr(e)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(O((e) => zr(e)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Aa(t, e, r = "emptyOnly") {
  let n,
    { routeConfig: o } = t;
  return (
    e !== null &&
    (r === "always" ||
      o?.path === "" ||
      (!e.component && !e.routeConfig?.loadComponent))
      ? (n = {
          params: b(b({}, e.params), t.params),
          data: b(b({}, e.data), t.data),
          resolve: b(b(b(b({}, t.data), e.data), o?.data), t._resolvedData),
        })
      : (n = {
          params: b({}, t.params),
          data: b({}, t.data),
          resolve: b(b({}, t.data), t._resolvedData ?? {}),
        }),
    o && Vv(o) && (n.resolve[ni] = o.title),
    n
  );
}
var Ur = class {
    get title() {
      return this.data?.[ni];
    }
    constructor(e, r, n, o, i, s, c, u, f) {
      (this.url = e),
        (this.params = r),
        (this.queryParams = n),
        (this.fragment = o),
        (this.data = i),
        (this.outlet = s),
        (this.component = c),
        (this.routeConfig = u),
        (this._resolve = f);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= zr(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= zr(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let e = this.url.map((n) => n.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${e}', path:'${r}')`;
    }
  },
  Na = class extends Ta {
    constructor(e, r) {
      super(r), (this.url = e), Pd(this, r);
    }
    toString() {
      return Lv(this._root);
    }
  };
function Pd(t, e) {
  (e.value._routerState = t), e.children.forEach((r) => Pd(t, r));
}
function Lv(t) {
  let e = t.children.length > 0 ? ` { ${t.children.map(Lv).join(", ")} } ` : "";
  return `${t.value}${e}`;
}
function sd(t) {
  if (t.snapshot) {
    let e = t.snapshot,
      r = t._futureSnapshot;
    (t.snapshot = r),
      bt(e.queryParams, r.queryParams) ||
        t.queryParamsSubject.next(r.queryParams),
      e.fragment !== r.fragment && t.fragmentSubject.next(r.fragment),
      bt(e.params, r.params) || t.paramsSubject.next(r.params),
      j_(e.url, r.url) || t.urlSubject.next(r.url),
      bt(e.data, r.data) || t.dataSubject.next(r.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function _d(t, e) {
  let r = bt(t.params, e.params) && H_(t.url, e.url),
    n = !t.parent != !e.parent;
  return r && !n && (!t.parent || _d(t.parent, e.parent));
}
function Vv(t) {
  return typeof t.title == "string" || t.title === null;
}
var kd = (() => {
    let e = class e {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = P),
          (this.activateEvents = new he()),
          (this.deactivateEvents = new he()),
          (this.attachEvents = new he()),
          (this.detachEvents = new he()),
          (this.parentContexts = w(ii)),
          (this.location = w(So)),
          (this.changeDetector = w(qn)),
          (this.inputBinder = w(ka, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(n) {
        if (n.name) {
          let { firstChange: o, previousValue: i } = n.name;
          if (o) return;
          this.isTrackedInParentContexts(i) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(n) {
        return this.parentContexts.getContext(n)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let n = this.parentContexts.getContext(this.name);
        n?.route &&
          (n.attachRef
            ? this.attach(n.attachRef, n.route)
            : this.activateWith(n.route, n.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new _(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new _(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new _(4012, !1);
        this.location.detach();
        let n = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(n.instance),
          n
        );
      }
      attach(n, o) {
        (this.activated = n),
          (this._activatedRoute = o),
          this.location.insert(n.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(n.instance);
      }
      deactivate() {
        if (this.activated) {
          let n = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(n);
        }
      }
      activateWith(n, o) {
        if (this.isActivated) throw new _(4013, !1);
        this._activatedRoute = n;
        let i = this.location,
          c = n.snapshot.component,
          u = this.parentContexts.getOrCreateContext(this.name).children,
          f = new Sd(n, u, i.injector);
        (this.activated = i.createComponent(c, {
          index: i.length,
          injector: f,
          environmentInjector: o,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [on],
      }));
    let t = e;
    return t;
  })(),
  Sd = class t {
    __ngOutletInjector(e) {
      return new t(this.route, this.childContexts, e);
    }
    constructor(e, r, n) {
      (this.route = e), (this.childContexts = r), (this.parent = n);
    }
    get(e, r) {
      return e === yn
        ? this.route
        : e === ii
        ? this.childContexts
        : this.parent.get(e, r);
    }
  },
  ka = new S(""),
  mv = (() => {
    let e = class e {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(n) {
        this.unsubscribeFromRouteData(n), this.subscribeToRouteData(n);
      }
      unsubscribeFromRouteData(n) {
        this.outletDataSubscriptions.get(n)?.unsubscribe(),
          this.outletDataSubscriptions.delete(n);
      }
      subscribeToRouteData(n) {
        let { activatedRoute: o } = n,
          i = fo([o.queryParams, o.params, o.data])
            .pipe(
              ke(
                ([s, c, u], f) => (
                  (u = b(b(b({}, s), c), u)),
                  f === 0 ? x(u) : Promise.resolve(u)
                )
              )
            )
            .subscribe((s) => {
              if (
                !n.isActivated ||
                !n.activatedComponentRef ||
                n.activatedRoute !== o ||
                o.component === null
              ) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              let c = km(o.component);
              if (!c) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              for (let { templateName: u } of c.inputs)
                n.activatedComponentRef.setInput(u, s[u]);
            });
        this.outletDataSubscriptions.set(n, i);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function hS(t, e, r) {
  let n = Ko(t, e._root, r ? r._root : void 0);
  return new xa(n, e);
}
function Ko(t, e, r) {
  if (r && t.shouldReuseRoute(e.value, r.value.snapshot)) {
    let n = r.value;
    n._futureSnapshot = e.value;
    let o = pS(t, e, r);
    return new Ge(n, o);
  } else {
    if (t.shouldAttach(e.value)) {
      let i = t.retrieve(e.value);
      if (i !== null) {
        let s = i.route;
        return (
          (s.value._futureSnapshot = e.value),
          (s.children = e.children.map((c) => Ko(t, c))),
          s
        );
      }
    }
    let n = gS(e.value),
      o = e.children.map((i) => Ko(t, i));
    return new Ge(n, o);
  }
}
function pS(t, e, r) {
  return e.children.map((n) => {
    for (let o of r.children)
      if (t.shouldReuseRoute(n.value, o.value.snapshot)) return Ko(t, n, o);
    return Ko(t, n);
  });
}
function gS(t) {
  return new yn(
    new Ce(t.url),
    new Ce(t.params),
    new Ce(t.queryParams),
    new Ce(t.fragment),
    new Ce(t.data),
    t.outlet,
    t.component,
    t
  );
}
var Jo = class {
    constructor(e, r) {
      (this.redirectTo = e), (this.navigationBehaviorOptions = r);
    }
  },
  jv = "ngNavigationCancelingError";
function Ra(t, e) {
  let { redirectTo: r, navigationBehaviorOptions: n } = Yn(e)
      ? { redirectTo: e, navigationBehaviorOptions: void 0 }
      : e,
    o = Bv(!1, qe.Redirect);
  return (o.url = r), (o.navigationBehaviorOptions = n), o;
}
function Bv(t, e) {
  let r = new Error(`NavigationCancelingError: ${t || ""}`);
  return (r[jv] = !0), (r.cancellationCode = e), r;
}
function mS(t) {
  return $v(t) && Yn(t.url);
}
function $v(t) {
  return !!t && t[jv];
}
var vS = (t, e, r, n) =>
    O(
      (o) => (
        new Td(e, o.targetRouterState, o.currentRouterState, r, n).activate(t),
        o
      )
    ),
  Td = class {
    constructor(e, r, n, o, i) {
      (this.routeReuseStrategy = e),
        (this.futureState = r),
        (this.currState = n),
        (this.forwardEvent = o),
        (this.inputBindingEnabled = i);
    }
    activate(e) {
      let r = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, n, e),
        sd(this.futureState.root),
        this.activateChildRoutes(r, n, e);
    }
    deactivateChildRoutes(e, r, n) {
      let o = Br(r);
      e.children.forEach((i) => {
        let s = i.value.outlet;
        this.deactivateRoutes(i, o[s], n), delete o[s];
      }),
        Object.values(o).forEach((i) => {
          this.deactivateRouteAndItsChildren(i, n);
        });
    }
    deactivateRoutes(e, r, n) {
      let o = e.value,
        i = r ? r.value : null;
      if (o === i)
        if (o.component) {
          let s = n.getContext(o.outlet);
          s && this.deactivateChildRoutes(e, r, s.children);
        } else this.deactivateChildRoutes(e, r, n);
      else i && this.deactivateRouteAndItsChildren(r, n);
    }
    deactivateRouteAndItsChildren(e, r) {
      e.value.component &&
      this.routeReuseStrategy.shouldDetach(e.value.snapshot)
        ? this.detachAndStoreRouteSubtree(e, r)
        : this.deactivateRouteAndOutlet(e, r);
    }
    detachAndStoreRouteSubtree(e, r) {
      let n = r.getContext(e.value.outlet),
        o = n && e.value.component ? n.children : r,
        i = Br(e);
      for (let s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
      if (n && n.outlet) {
        let s = n.outlet.detach(),
          c = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(e.value.snapshot, {
          componentRef: s,
          route: e,
          contexts: c,
        });
      }
    }
    deactivateRouteAndOutlet(e, r) {
      let n = r.getContext(e.value.outlet),
        o = n && e.value.component ? n.children : r,
        i = Br(e);
      for (let s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(e, r, n) {
      let o = Br(r);
      e.children.forEach((i) => {
        this.activateRoutes(i, o[i.value.outlet], n),
          this.forwardEvent(new Cd(i.value.snapshot));
      }),
        e.children.length && this.forwardEvent(new Dd(e.value.snapshot));
    }
    activateRoutes(e, r, n) {
      let o = e.value,
        i = r ? r.value : null;
      if ((sd(o), o === i))
        if (o.component) {
          let s = n.getOrCreateContext(o.outlet);
          this.activateChildRoutes(e, r, s.children);
        } else this.activateChildRoutes(e, r, n);
      else if (o.component) {
        let s = n.getOrCreateContext(o.outlet);
        if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
          let c = this.routeReuseStrategy.retrieve(o.snapshot);
          this.routeReuseStrategy.store(o.snapshot, null),
            s.children.onOutletReAttached(c.contexts),
            (s.attachRef = c.componentRef),
            (s.route = c.route.value),
            s.outlet && s.outlet.attach(c.componentRef, c.route.value),
            sd(c.route.value),
            this.activateChildRoutes(e, null, s.children);
        } else
          (s.attachRef = null),
            (s.route = o),
            s.outlet && s.outlet.activateWith(o, s.injector),
            this.activateChildRoutes(e, null, s.children);
      } else this.activateChildRoutes(e, null, n);
    }
  },
  Oa = class {
    constructor(e) {
      (this.path = e), (this.route = this.path[this.path.length - 1]);
    }
  },
  Hr = class {
    constructor(e, r) {
      (this.component = e), (this.route = r);
    }
  };
function yS(t, e, r) {
  let n = t._root,
    o = e ? e._root : null;
  return Ho(n, o, r, [n.value]);
}
function wS(t) {
  let e = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !e || e.length === 0 ? null : { node: t, guards: e };
}
function Yr(t, e) {
  let r = Symbol(),
    n = e.get(t, r);
  return n === r ? (typeof t == "function" && !Cp(t) ? t : e.get(t)) : n;
}
function Ho(
  t,
  e,
  r,
  n,
  o = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let i = Br(e);
  return (
    t.children.forEach((s) => {
      DS(s, i[s.value.outlet], r, n.concat([s.value]), o),
        delete i[s.value.outlet];
    }),
    Object.entries(i).forEach(([s, c]) => Wo(c, r.getContext(s), o)),
    o
  );
}
function DS(
  t,
  e,
  r,
  n,
  o = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let i = t.value,
    s = e ? e.value : null,
    c = r ? r.getContext(t.value.outlet) : null;
  if (s && i.routeConfig === s.routeConfig) {
    let u = bS(s, i, i.routeConfig.runGuardsAndResolvers);
    u
      ? o.canActivateChecks.push(new Oa(n))
      : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
      i.component ? Ho(t, e, c ? c.children : null, n, o) : Ho(t, e, r, n, o),
      u &&
        c &&
        c.outlet &&
        c.outlet.isActivated &&
        o.canDeactivateChecks.push(new Hr(c.outlet.component, s));
  } else
    s && Wo(e, c, o),
      o.canActivateChecks.push(new Oa(n)),
      i.component
        ? Ho(t, null, c ? c.children : null, n, o)
        : Ho(t, null, r, n, o);
  return o;
}
function bS(t, e, r) {
  if (typeof r == "function") return r(t, e);
  switch (r) {
    case "pathParamsChange":
      return !Zn(t.url, e.url);
    case "pathParamsOrQueryParamsChange":
      return !Zn(t.url, e.url) || !bt(t.queryParams, e.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !_d(t, e) || !bt(t.queryParams, e.queryParams);
    case "paramsChange":
    default:
      return !_d(t, e);
  }
}
function Wo(t, e, r) {
  let n = Br(t),
    o = t.value;
  Object.entries(n).forEach(([i, s]) => {
    o.component
      ? e
        ? Wo(s, e.children.getContext(i), r)
        : Wo(s, null, r)
      : Wo(s, e, r);
  }),
    o.component
      ? e && e.outlet && e.outlet.isActivated
        ? r.canDeactivateChecks.push(new Hr(e.outlet.component, o))
        : r.canDeactivateChecks.push(new Hr(null, o))
      : r.canDeactivateChecks.push(new Hr(null, o));
}
function si(t) {
  return typeof t == "function";
}
function CS(t) {
  return typeof t == "boolean";
}
function ES(t) {
  return t && si(t.canLoad);
}
function IS(t) {
  return t && si(t.canActivate);
}
function MS(t) {
  return t && si(t.canActivateChild);
}
function _S(t) {
  return t && si(t.canDeactivate);
}
function SS(t) {
  return t && si(t.canMatch);
}
function Uv(t) {
  return t instanceof _t || t?.name === "EmptyError";
}
var wa = Symbol("INITIAL_VALUE");
function Zr() {
  return ke((t) =>
    fo(t.map((e) => e.pipe(Tt(1), zc(wa)))).pipe(
      O((e) => {
        for (let r of e)
          if (r !== !0) {
            if (r === wa) return wa;
            if (r === !1 || TS(r)) return r;
          }
        return !0;
      }),
      Pe((e) => e !== wa),
      Tt(1)
    )
  );
}
function TS(t) {
  return Yn(t) || t instanceof Jo;
}
function xS(t, e) {
  return fe((r) => {
    let {
      targetSnapshot: n,
      currentSnapshot: o,
      guards: { canActivateChecks: i, canDeactivateChecks: s },
    } = r;
    return s.length === 0 && i.length === 0
      ? x($(b({}, r), { guardsResult: !0 }))
      : AS(s, n, o, t).pipe(
          fe((c) => (c && CS(c) ? NS(n, i, t, e) : x(c))),
          O((c) => $(b({}, r), { guardsResult: c }))
        );
  });
}
function AS(t, e, r, n) {
  return ne(t).pipe(
    fe((o) => FS(o.component, o.route, r, e, n)),
    ft((o) => o !== !0, !0)
  );
}
function NS(t, e, r, n) {
  return ne(e).pipe(
    St((o) =>
      hr(
        OS(o.route.parent, n),
        RS(o.route, n),
        kS(t, o.path, r),
        PS(t, o.route, r)
      )
    ),
    ft((o) => o !== !0, !0)
  );
}
function RS(t, e) {
  return t !== null && e && e(new bd(t)), x(!0);
}
function OS(t, e) {
  return t !== null && e && e(new wd(t)), x(!0);
}
function PS(t, e, r) {
  let n = e.routeConfig ? e.routeConfig.canActivate : null;
  if (!n || n.length === 0) return x(!0);
  let o = n.map((i) =>
    os(() => {
      let s = oi(e) ?? r,
        c = Yr(i, s),
        u = IS(c) ? c.canActivate(e, t) : Ke(s, () => c(e, t));
      return wn(u).pipe(ft());
    })
  );
  return x(o).pipe(Zr());
}
function kS(t, e, r) {
  let n = e[e.length - 1],
    i = e
      .slice(0, e.length - 1)
      .reverse()
      .map((s) => wS(s))
      .filter((s) => s !== null)
      .map((s) =>
        os(() => {
          let c = s.guards.map((u) => {
            let f = oi(s.node) ?? r,
              g = Yr(u, f),
              h = MS(g) ? g.canActivateChild(n, t) : Ke(f, () => g(n, t));
            return wn(h).pipe(ft());
          });
          return x(c).pipe(Zr());
        })
      );
  return x(i).pipe(Zr());
}
function FS(t, e, r, n, o) {
  let i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
  if (!i || i.length === 0) return x(!0);
  let s = i.map((c) => {
    let u = oi(e) ?? o,
      f = Yr(c, u),
      g = _S(f) ? f.canDeactivate(t, e, r, n) : Ke(u, () => f(t, e, r, n));
    return wn(g).pipe(ft());
  });
  return x(s).pipe(Zr());
}
function LS(t, e, r, n) {
  let o = e.canLoad;
  if (o === void 0 || o.length === 0) return x(!0);
  let i = o.map((s) => {
    let c = Yr(s, t),
      u = ES(c) ? c.canLoad(e, r) : Ke(t, () => c(e, r));
    return wn(u);
  });
  return x(i).pipe(Zr(), Hv(n));
}
function Hv(t) {
  return kc(
    we((e) => {
      if (typeof e != "boolean") throw Ra(t, e);
    }),
    O((e) => e === !0)
  );
}
function VS(t, e, r, n) {
  let o = e.canMatch;
  if (!o || o.length === 0) return x(!0);
  let i = o.map((s) => {
    let c = Yr(s, t),
      u = SS(c) ? c.canMatch(e, r) : Ke(t, () => c(e, r));
    return wn(u);
  });
  return x(i).pipe(Zr(), Hv(n));
}
var Xo = class {
    constructor(e) {
      this.segmentGroup = e || null;
    }
  },
  ei = class extends Error {
    constructor(e) {
      super(), (this.urlTree = e);
    }
  };
function jr(t) {
  return dr(new Xo(t));
}
function jS(t) {
  return dr(new _(4e3, !1));
}
function BS(t) {
  return dr(Bv(!1, qe.GuardRejected));
}
var xd = class {
    constructor(e, r) {
      (this.urlSerializer = e), (this.urlTree = r);
    }
    lineralizeSegments(e, r) {
      let n = [],
        o = r.root;
      for (;;) {
        if (((n = n.concat(o.segments)), o.numberOfChildren === 0)) return x(n);
        if (o.numberOfChildren > 1 || !o.children[P])
          return jS(`${e.redirectTo}`);
        o = o.children[P];
      }
    }
    applyRedirectCommands(e, r, n, o, i) {
      if (typeof r != "string") {
        let c = r,
          {
            queryParams: u,
            fragment: f,
            routeConfig: g,
            url: h,
            outlet: y,
            params: v,
            data: D,
            title: A,
          } = o,
          C = Ke(i, () =>
            c({
              params: v,
              data: D,
              queryParams: u,
              fragment: f,
              routeConfig: g,
              url: h,
              outlet: y,
              title: A,
            })
          );
        if (C instanceof zt) throw new ei(C);
        r = C;
      }
      let s = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        e,
        n
      );
      if (r[0] === "/") throw new ei(s);
      return s;
    }
    applyRedirectCreateUrlTree(e, r, n, o) {
      let i = this.createSegmentGroup(e, r.root, n, o);
      return new zt(
        i,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment
      );
    }
    createQueryParams(e, r) {
      let n = {};
      return (
        Object.entries(e).forEach(([o, i]) => {
          if (typeof i == "string" && i[0] === ":") {
            let c = i.substring(1);
            n[o] = r[c];
          } else n[o] = i;
        }),
        n
      );
    }
    createSegmentGroup(e, r, n, o) {
      let i = this.createSegments(e, r.segments, n, o),
        s = {};
      return (
        Object.entries(r.children).forEach(([c, u]) => {
          s[c] = this.createSegmentGroup(e, u, n, o);
        }),
        new Y(i, s)
      );
    }
    createSegments(e, r, n, o) {
      return r.map((i) =>
        i.path[0] === ":" ? this.findPosParam(e, i, o) : this.findOrReturn(i, n)
      );
    }
    findPosParam(e, r, n) {
      let o = n[r.path.substring(1)];
      if (!o) throw new _(4001, !1);
      return o;
    }
    findOrReturn(e, r) {
      let n = 0;
      for (let o of r) {
        if (o.path === e.path) return r.splice(n), o;
        n++;
      }
      return e;
    }
  },
  Ad = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function $S(t, e, r, n, o) {
  let i = zv(t, e, r);
  return i.matched
    ? ((n = uS(e, n)),
      VS(n, e, r, o).pipe(O((s) => (s === !0 ? i : b({}, Ad)))))
    : x(i);
}
function zv(t, e, r) {
  if (e.path === "**") return US(r);
  if (e.path === "")
    return e.pathMatch === "full" && (t.hasChildren() || r.length > 0)
      ? b({}, Ad)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let o = (e.matcher || V_)(r, t, e);
  if (!o) return b({}, Ad);
  let i = {};
  Object.entries(o.posParams ?? {}).forEach(([c, u]) => {
    i[c] = u.path;
  });
  let s =
    o.consumed.length > 0
      ? b(b({}, i), o.consumed[o.consumed.length - 1].parameters)
      : i;
  return {
    matched: !0,
    consumedSegments: o.consumed,
    remainingSegments: r.slice(o.consumed.length),
    parameters: s,
    positionalParamSegments: o.posParams ?? {},
  };
}
function US(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? Ev(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function vv(t, e, r, n) {
  return r.length > 0 && GS(t, r, n)
    ? {
        segmentGroup: new Y(e, zS(n, new Y(r, t.children))),
        slicedSegments: [],
      }
    : r.length === 0 && qS(t, r, n)
    ? {
        segmentGroup: new Y(t.segments, HS(t, r, n, t.children)),
        slicedSegments: r,
      }
    : { segmentGroup: new Y(t.segments, t.children), slicedSegments: r };
}
function HS(t, e, r, n) {
  let o = {};
  for (let i of r)
    if (Fa(t, e, i) && !n[at(i)]) {
      let s = new Y([], {});
      o[at(i)] = s;
    }
  return b(b({}, n), o);
}
function zS(t, e) {
  let r = {};
  r[P] = e;
  for (let n of t)
    if (n.path === "" && at(n) !== P) {
      let o = new Y([], {});
      r[at(n)] = o;
    }
  return r;
}
function GS(t, e, r) {
  return r.some((n) => Fa(t, e, n) && at(n) !== P);
}
function qS(t, e, r) {
  return r.some((n) => Fa(t, e, n));
}
function Fa(t, e, r) {
  return (t.hasChildren() || e.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function WS(t, e, r) {
  return e.length === 0 && !t.children[r];
}
var Nd = class {};
function ZS(t, e, r, n, o, i, s = "emptyOnly") {
  return new Rd(t, e, r, n, o, s, i).recognize();
}
var YS = 31,
  Rd = class {
    constructor(e, r, n, o, i, s, c) {
      (this.injector = e),
        (this.configLoader = r),
        (this.rootComponentType = n),
        (this.config = o),
        (this.urlTree = i),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = c),
        (this.applyRedirects = new xd(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(e) {
      return new _(4002, `'${e.segmentGroup}'`);
    }
    recognize() {
      let e = vv(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(e).pipe(
        O(({ children: r, rootSnapshot: n }) => {
          let o = new Ge(n, r),
            i = new Na("", o),
            s = rS(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (i.url = this.urlSerializer.serialize(s)),
            { state: i, tree: s }
          );
        })
      );
    }
    match(e) {
      let r = new Ur(
        [],
        Object.freeze({}),
        Object.freeze(b({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        P,
        this.rootComponentType,
        null,
        {}
      );
      return this.processSegmentGroup(this.injector, this.config, e, P, r).pipe(
        O((n) => ({ children: n, rootSnapshot: r })),
        Zt((n) => {
          if (n instanceof ei)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof Xo ? this.noMatchError(n) : n;
        })
      );
    }
    processSegmentGroup(e, r, n, o, i) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(e, r, n, i)
        : this.processSegment(e, r, n, n.segments, o, !0, i).pipe(
            O((s) => (s instanceof Ge ? [s] : []))
          );
    }
    processChildren(e, r, n, o) {
      let i = [];
      for (let s of Object.keys(n.children))
        s === "primary" ? i.unshift(s) : i.push(s);
      return ne(i).pipe(
        St((s) => {
          let c = n.children[s],
            u = dS(r, s);
          return this.processSegmentGroup(e, u, c, s, o);
        }),
        Hc((s, c) => (s.push(...c), s)),
        Yt(null),
        Uc(),
        fe((s) => {
          if (s === null) return jr(n);
          let c = Gv(s);
          return QS(c), x(c);
        })
      );
    }
    processSegment(e, r, n, o, i, s, c) {
      return ne(r).pipe(
        St((u) =>
          this.processSegmentAgainstRoute(
            u._injector ?? e,
            r,
            u,
            n,
            o,
            i,
            s,
            c
          ).pipe(
            Zt((f) => {
              if (f instanceof Xo) return x(null);
              throw f;
            })
          )
        ),
        ft((u) => !!u),
        Zt((u) => {
          if (Uv(u)) return WS(n, o, i) ? x(new Nd()) : jr(n);
          throw u;
        })
      );
    }
    processSegmentAgainstRoute(e, r, n, o, i, s, c, u) {
      return at(n) !== s && (s === P || !Fa(o, i, n))
        ? jr(o)
        : n.redirectTo === void 0
        ? this.matchSegmentAgainstRoute(e, o, n, i, s, u)
        : this.allowRedirects && c
        ? this.expandSegmentAgainstRouteUsingRedirect(e, o, r, n, i, s, u)
        : jr(o);
    }
    expandSegmentAgainstRouteUsingRedirect(e, r, n, o, i, s, c) {
      let {
        matched: u,
        parameters: f,
        consumedSegments: g,
        positionalParamSegments: h,
        remainingSegments: y,
      } = zv(r, o, i);
      if (!u) return jr(r);
      typeof o.redirectTo == "string" &&
        o.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > YS && (this.allowRedirects = !1));
      let v = new Ur(
          i,
          f,
          Object.freeze(b({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          yv(o),
          at(o),
          o.component ?? o._loadedComponent ?? null,
          o,
          wv(o)
        ),
        D = Aa(v, c, this.paramsInheritanceStrategy);
      (v.params = Object.freeze(D.params)), (v.data = Object.freeze(D.data));
      let A = this.applyRedirects.applyRedirectCommands(
        g,
        o.redirectTo,
        h,
        v,
        e
      );
      return this.applyRedirects
        .lineralizeSegments(o, A)
        .pipe(fe((C) => this.processSegment(e, n, r, C.concat(y), s, !1, c)));
    }
    matchSegmentAgainstRoute(e, r, n, o, i, s) {
      let c = $S(r, n, o, e, this.urlSerializer);
      return (
        n.path === "**" && (r.children = {}),
        c.pipe(
          ke((u) =>
            u.matched
              ? ((e = n._injector ?? e),
                this.getChildConfig(e, n, o).pipe(
                  ke(({ routes: f }) => {
                    let g = n._loadedInjector ?? e,
                      {
                        parameters: h,
                        consumedSegments: y,
                        remainingSegments: v,
                      } = u,
                      D = new Ur(
                        y,
                        h,
                        Object.freeze(b({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        yv(n),
                        at(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        wv(n)
                      ),
                      A = Aa(D, s, this.paramsInheritanceStrategy);
                    (D.params = Object.freeze(A.params)),
                      (D.data = Object.freeze(A.data));
                    let { segmentGroup: C, slicedSegments: I } = vv(r, y, v, f);
                    if (I.length === 0 && C.hasChildren())
                      return this.processChildren(g, f, C, D).pipe(
                        O((ie) => new Ge(D, ie))
                      );
                    if (f.length === 0 && I.length === 0)
                      return x(new Ge(D, []));
                    let J = at(n) === i;
                    return this.processSegment(
                      g,
                      f,
                      C,
                      I,
                      J ? P : i,
                      !0,
                      D
                    ).pipe(O((ie) => new Ge(D, ie instanceof Ge ? [ie] : [])));
                  })
                ))
              : jr(r)
          )
        )
      );
    }
    getChildConfig(e, r, n) {
      return r.children
        ? x({ routes: r.children, injector: e })
        : r.loadChildren
        ? r._loadedRoutes !== void 0
          ? x({ routes: r._loadedRoutes, injector: r._loadedInjector })
          : LS(e, r, n, this.urlSerializer).pipe(
              fe((o) =>
                o
                  ? this.configLoader.loadChildren(e, r).pipe(
                      we((i) => {
                        (r._loadedRoutes = i.routes),
                          (r._loadedInjector = i.injector);
                      })
                    )
                  : BS(r)
              )
            )
        : x({ routes: [], injector: e });
    }
  };
function QS(t) {
  t.sort((e, r) =>
    e.value.outlet === P
      ? -1
      : r.value.outlet === P
      ? 1
      : e.value.outlet.localeCompare(r.value.outlet)
  );
}
function KS(t) {
  let e = t.value.routeConfig;
  return e && e.path === "";
}
function Gv(t) {
  let e = [],
    r = new Set();
  for (let n of t) {
    if (!KS(n)) {
      e.push(n);
      continue;
    }
    let o = e.find((i) => n.value.routeConfig === i.value.routeConfig);
    o !== void 0 ? (o.children.push(...n.children), r.add(o)) : e.push(n);
  }
  for (let n of r) {
    let o = Gv(n.children);
    e.push(new Ge(n.value, o));
  }
  return e.filter((n) => !r.has(n));
}
function yv(t) {
  return t.data || {};
}
function wv(t) {
  return t.resolve || {};
}
function JS(t, e, r, n, o, i) {
  return fe((s) =>
    ZS(t, e, r, n, s.extractedUrl, o, i).pipe(
      O(({ state: c, tree: u }) =>
        $(b({}, s), { targetSnapshot: c, urlAfterRedirects: u })
      )
    )
  );
}
function XS(t, e) {
  return fe((r) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: o },
    } = r;
    if (!o.length) return x(r);
    let i = new Set(o.map((u) => u.route)),
      s = new Set();
    for (let u of i) if (!s.has(u)) for (let f of qv(u)) s.add(f);
    let c = 0;
    return ne(s).pipe(
      St((u) =>
        i.has(u)
          ? eT(u, n, t, e)
          : ((u.data = Aa(u, u.parent, t).resolve), x(void 0))
      ),
      we(() => c++),
      pr(1),
      fe((u) => (c === s.size ? x(r) : He))
    );
  });
}
function qv(t) {
  let e = t.children.map((r) => qv(r)).flat();
  return [t, ...e];
}
function eT(t, e, r, n) {
  let o = t.routeConfig,
    i = t._resolve;
  return (
    o?.title !== void 0 && !Vv(o) && (i[ni] = o.title),
    tT(i, t, e, n).pipe(
      O(
        (s) => (
          (t._resolvedData = s), (t.data = Aa(t, t.parent, r).resolve), null
        )
      )
    )
  );
}
function tT(t, e, r, n) {
  let o = ld(t);
  if (o.length === 0) return x({});
  let i = {};
  return ne(o).pipe(
    fe((s) =>
      nT(t[s], e, r, n).pipe(
        ft(),
        we((c) => {
          if (c instanceof Jo) throw Ra(new Gr(), c);
          i[s] = c;
        })
      )
    ),
    pr(1),
    $c(i),
    Zt((s) => (Uv(s) ? He : dr(s)))
  );
}
function nT(t, e, r, n) {
  let o = oi(e) ?? n,
    i = Yr(t, o),
    s = i.resolve ? i.resolve(e, r) : Ke(o, () => i(e, r));
  return wn(s);
}
function ad(t) {
  return ke((e) => {
    let r = t(e);
    return r ? ne(r).pipe(O(() => e)) : x(e);
  });
}
var Wv = (() => {
    let e = class e {
      buildTitle(n) {
        let o,
          i = n.root;
        for (; i !== void 0; )
          (o = this.getResolvedTitleForRoute(i) ?? o),
            (i = i.children.find((s) => s.outlet === P));
        return o;
      }
      getResolvedTitleForRoute(n) {
        return n.data[ni];
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: () => w(rT), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  rT = (() => {
    let e = class e extends Wv {
      constructor(n) {
        super(), (this.title = n);
      }
      updateTitle(n) {
        let o = this.buildTitle(n);
        o !== void 0 && this.title.setTitle(o);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(dv));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  ai = new S("", { providedIn: "root", factory: () => ({}) }),
  oT = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵcmp = Le({
        type: e,
        selectors: [["ng-component"]],
        standalone: !0,
        features: [Xe],
        decls: 1,
        vars: 0,
        template: function (o, i) {
          o & 1 && Hn(0, "router-outlet");
        },
        dependencies: [kd],
        encapsulation: 2,
      }));
    let t = e;
    return t;
  })();
function Fd(t) {
  let e = t.children && t.children.map(Fd),
    r = e ? $(b({}, t), { children: e }) : b({}, t);
  return (
    !r.component &&
      !r.loadComponent &&
      (e || r.loadChildren) &&
      r.outlet &&
      r.outlet !== P &&
      (r.component = oT),
    r
  );
}
var ti = new S(""),
  Ld = (() => {
    let e = class e {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = w(aa));
      }
      loadComponent(n) {
        if (this.componentLoaders.get(n)) return this.componentLoaders.get(n);
        if (n._loadedComponent) return x(n._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(n);
        let o = wn(n.loadComponent()).pipe(
            O(Zv),
            we((s) => {
              this.onLoadEndListener && this.onLoadEndListener(n),
                (n._loadedComponent = s);
            }),
            Tn(() => {
              this.componentLoaders.delete(n);
            })
          ),
          i = new ur(o, () => new ye()).pipe(lr());
        return this.componentLoaders.set(n, i), i;
      }
      loadChildren(n, o) {
        if (this.childrenLoaders.get(o)) return this.childrenLoaders.get(o);
        if (o._loadedRoutes)
          return x({ routes: o._loadedRoutes, injector: o._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(o);
        let s = iT(o, this.compiler, n, this.onLoadEndListener).pipe(
            Tn(() => {
              this.childrenLoaders.delete(o);
            })
          ),
          c = new ur(s, () => new ye()).pipe(lr());
        return this.childrenLoaders.set(o, c), c;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function iT(t, e, r, n) {
  return wn(t.loadChildren()).pipe(
    O(Zv),
    fe((o) =>
      o instanceof wo || Array.isArray(o) ? x(o) : ne(e.compileModuleAsync(o))
    ),
    O((o) => {
      n && n(t);
      let i,
        s,
        c = !1;
      return (
        Array.isArray(o)
          ? ((s = o), (c = !0))
          : ((i = o.create(r).injector),
            (s = i.get(ti, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(Fd), injector: i }
      );
    })
  );
}
function sT(t) {
  return t && typeof t == "object" && "default" in t;
}
function Zv(t) {
  return sT(t) ? t.default : t;
}
var Vd = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: () => w(aT), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  aT = (() => {
    let e = class e {
      shouldProcessUrl(n) {
        return !0;
      }
      extract(n) {
        return n;
      }
      merge(n, o) {
        return n;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Yv = new S(""),
  Qv = new S("");
function cT(t, e, r) {
  let n = t.get(Qv),
    o = t.get(Ee);
  return t.get(ae).runOutsideAngular(() => {
    if (!o.startViewTransition || n.skipNextTransition)
      return (n.skipNextTransition = !1), new Promise((f) => setTimeout(f));
    let i,
      s = new Promise((f) => {
        i = f;
      }),
      c = o.startViewTransition(() => (i(), lT(t))),
      { onViewTransitionCreated: u } = n;
    return u && Ke(t, () => u({ transition: c, from: e, to: r })), s;
  });
}
function lT(t) {
  return new Promise((e) => {
    Nu({ read: () => setTimeout(e) }, { injector: t });
  });
}
var uT = new S(""),
  jd = (() => {
    let e = class e {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new ye()),
          (this.transitionAbortSubject = new ye()),
          (this.configLoader = w(Ld)),
          (this.environmentInjector = w(Te)),
          (this.urlSerializer = w(ri)),
          (this.rootContexts = w(ii)),
          (this.location = w(Vr)),
          (this.inputBindingEnabled = w(ka, { optional: !0 }) !== null),
          (this.titleStrategy = w(Wv)),
          (this.options = w(ai, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = w(Vd)),
          (this.createViewTransition = w(Yv, { optional: !0 })),
          (this.navigationErrorHandler = w(uT, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => x(void 0)),
          (this.rootComponentType = null);
        let n = (i) => this.events.next(new vd(i)),
          o = (i) => this.events.next(new yd(i));
        (this.configLoader.onLoadEndListener = o),
          (this.configLoader.onLoadStartListener = n);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(n) {
        let o = ++this.navigationId;
        this.transitions?.next(
          $(b(b({}, this.transitions.value), n), { id: o })
        );
      }
      setupNavigations(n, o, i) {
        return (
          (this.transitions = new Ce({
            id: 0,
            currentUrlTree: o,
            currentRawUrl: o,
            extractedUrl: this.urlHandlingStrategy.extract(o),
            urlAfterRedirects: this.urlHandlingStrategy.extract(o),
            rawUrl: o,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: qo,
            restoredState: null,
            currentSnapshot: i.snapshot,
            targetSnapshot: null,
            currentRouterState: i,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Pe((s) => s.id !== 0),
            O((s) =>
              $(b({}, s), {
                extractedUrl: this.urlHandlingStrategy.extract(s.rawUrl),
              })
            ),
            ke((s) => {
              let c = !1,
                u = !1;
              return x(s).pipe(
                ke((f) => {
                  if (this.navigationId > s.id)
                    return (
                      this.cancelNavigationTransition(
                        s,
                        "",
                        qe.SupersededByNewNavigation
                      ),
                      He
                    );
                  (this.currentTransition = s),
                    (this.currentNavigation = {
                      id: f.id,
                      initialUrl: f.rawUrl,
                      extractedUrl: f.extractedUrl,
                      targetBrowserUrl:
                        typeof f.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(f.extras.browserUrl)
                          : f.extras.browserUrl,
                      trigger: f.source,
                      extras: f.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? $(b({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let g =
                      !n.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    h = f.extras.onSameUrlNavigation ?? n.onSameUrlNavigation;
                  if (!g && h !== "reload") {
                    let y = "";
                    return (
                      this.events.next(
                        new vn(
                          f.id,
                          this.urlSerializer.serialize(f.rawUrl),
                          y,
                          Ma.IgnoredSameUrlNavigation
                        )
                      ),
                      f.resolve(!1),
                      He
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(f.rawUrl))
                    return x(f).pipe(
                      ke((y) => {
                        let v = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new qr(
                              y.id,
                              this.urlSerializer.serialize(y.extractedUrl),
                              y.source,
                              y.restoredState
                            )
                          ),
                          v !== this.transitions?.getValue()
                            ? He
                            : Promise.resolve(y)
                        );
                      }),
                      JS(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        n.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy
                      ),
                      we((y) => {
                        (s.targetSnapshot = y.targetSnapshot),
                          (s.urlAfterRedirects = y.urlAfterRedirects),
                          (this.currentNavigation = $(
                            b({}, this.currentNavigation),
                            { finalUrl: y.urlAfterRedirects }
                          ));
                        let v = new _a(
                          y.id,
                          this.urlSerializer.serialize(y.extractedUrl),
                          this.urlSerializer.serialize(y.urlAfterRedirects),
                          y.targetSnapshot
                        );
                        this.events.next(v);
                      })
                    );
                  if (
                    g &&
                    this.urlHandlingStrategy.shouldProcessUrl(f.currentRawUrl)
                  ) {
                    let {
                        id: y,
                        extractedUrl: v,
                        source: D,
                        restoredState: A,
                        extras: C,
                      } = f,
                      I = new qr(y, this.urlSerializer.serialize(v), D, A);
                    this.events.next(I);
                    let J = Fv(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = s =
                        $(b({}, f), {
                          targetSnapshot: J,
                          urlAfterRedirects: v,
                          extras: $(b({}, C), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = v),
                      x(s)
                    );
                  } else {
                    let y = "";
                    return (
                      this.events.next(
                        new vn(
                          f.id,
                          this.urlSerializer.serialize(f.extractedUrl),
                          y,
                          Ma.IgnoredByUrlHandlingStrategy
                        )
                      ),
                      f.resolve(!1),
                      He
                    );
                  }
                }),
                we((f) => {
                  let g = new hd(
                    f.id,
                    this.urlSerializer.serialize(f.extractedUrl),
                    this.urlSerializer.serialize(f.urlAfterRedirects),
                    f.targetSnapshot
                  );
                  this.events.next(g);
                }),
                O(
                  (f) => (
                    (this.currentTransition = s =
                      $(b({}, f), {
                        guards: yS(
                          f.targetSnapshot,
                          f.currentSnapshot,
                          this.rootContexts
                        ),
                      })),
                    s
                  )
                ),
                xS(this.environmentInjector, (f) => this.events.next(f)),
                we((f) => {
                  if (
                    ((s.guardsResult = f.guardsResult),
                    f.guardsResult && typeof f.guardsResult != "boolean")
                  )
                    throw Ra(this.urlSerializer, f.guardsResult);
                  let g = new pd(
                    f.id,
                    this.urlSerializer.serialize(f.extractedUrl),
                    this.urlSerializer.serialize(f.urlAfterRedirects),
                    f.targetSnapshot,
                    !!f.guardsResult
                  );
                  this.events.next(g);
                }),
                Pe((f) =>
                  f.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(f, "", qe.GuardRejected),
                      !1)
                ),
                ad((f) => {
                  if (f.guards.canActivateChecks.length)
                    return x(f).pipe(
                      we((g) => {
                        let h = new gd(
                          g.id,
                          this.urlSerializer.serialize(g.extractedUrl),
                          this.urlSerializer.serialize(g.urlAfterRedirects),
                          g.targetSnapshot
                        );
                        this.events.next(h);
                      }),
                      ke((g) => {
                        let h = !1;
                        return x(g).pipe(
                          XS(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector
                          ),
                          we({
                            next: () => (h = !0),
                            complete: () => {
                              h ||
                                this.cancelNavigationTransition(
                                  g,
                                  "",
                                  qe.NoDataFromResolver
                                );
                            },
                          })
                        );
                      }),
                      we((g) => {
                        let h = new md(
                          g.id,
                          this.urlSerializer.serialize(g.extractedUrl),
                          this.urlSerializer.serialize(g.urlAfterRedirects),
                          g.targetSnapshot
                        );
                        this.events.next(h);
                      })
                    );
                }),
                ad((f) => {
                  let g = (h) => {
                    let y = [];
                    h.routeConfig?.loadComponent &&
                      !h.routeConfig._loadedComponent &&
                      y.push(
                        this.configLoader.loadComponent(h.routeConfig).pipe(
                          we((v) => {
                            h.component = v;
                          }),
                          O(() => {})
                        )
                      );
                    for (let v of h.children) y.push(...g(v));
                    return y;
                  };
                  return fo(g(f.targetSnapshot.root)).pipe(Yt(null), Tt(1));
                }),
                ad(() => this.afterPreactivation()),
                ke(() => {
                  let { currentSnapshot: f, targetSnapshot: g } = s,
                    h = this.createViewTransition?.(
                      this.environmentInjector,
                      f.root,
                      g.root
                    );
                  return h ? ne(h).pipe(O(() => s)) : x(s);
                }),
                O((f) => {
                  let g = hS(
                    n.routeReuseStrategy,
                    f.targetSnapshot,
                    f.currentRouterState
                  );
                  return (
                    (this.currentTransition = s =
                      $(b({}, f), { targetRouterState: g })),
                    (this.currentNavigation.targetRouterState = g),
                    s
                  );
                }),
                we(() => {
                  this.events.next(new Qo());
                }),
                vS(
                  this.rootContexts,
                  n.routeReuseStrategy,
                  (f) => this.events.next(f),
                  this.inputBindingEnabled
                ),
                Tt(1),
                we({
                  next: (f) => {
                    (c = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new Ct(
                          f.id,
                          this.urlSerializer.serialize(f.extractedUrl),
                          this.urlSerializer.serialize(f.urlAfterRedirects)
                        )
                      ),
                      this.titleStrategy?.updateTitle(
                        f.targetRouterState.snapshot
                      ),
                      f.resolve(!0);
                  },
                  complete: () => {
                    c = !0;
                  },
                }),
                Gc(
                  this.transitionAbortSubject.pipe(
                    we((f) => {
                      throw f;
                    })
                  )
                ),
                Tn(() => {
                  !c &&
                    !u &&
                    this.cancelNavigationTransition(
                      s,
                      "",
                      qe.SupersededByNewNavigation
                    ),
                    this.currentTransition?.id === s.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                Zt((f) => {
                  if (((u = !0), $v(f)))
                    this.events.next(
                      new Ht(
                        s.id,
                        this.urlSerializer.serialize(s.extractedUrl),
                        f.message,
                        f.cancellationCode
                      )
                    ),
                      mS(f)
                        ? this.events.next(
                            new Wr(f.url, f.navigationBehaviorOptions)
                          )
                        : s.resolve(!1);
                  else {
                    let g = new Yo(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      f,
                      s.targetSnapshot ?? void 0
                    );
                    try {
                      let h = Ke(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(g)
                      );
                      if (h instanceof Jo) {
                        let { message: y, cancellationCode: v } = Ra(
                          this.urlSerializer,
                          h
                        );
                        this.events.next(
                          new Ht(
                            s.id,
                            this.urlSerializer.serialize(s.extractedUrl),
                            y,
                            v
                          )
                        ),
                          this.events.next(
                            new Wr(h.redirectTo, h.navigationBehaviorOptions)
                          );
                      } else {
                        this.events.next(g);
                        let y = n.errorHandler(f);
                        s.resolve(!!y);
                      }
                    } catch (h) {
                      this.options.resolveNavigationPromiseOnError
                        ? s.resolve(!1)
                        : s.reject(h);
                    }
                  }
                  return He;
                })
              );
            })
          )
        );
      }
      cancelNavigationTransition(n, o, i) {
        let s = new Ht(
          n.id,
          this.urlSerializer.serialize(n.extractedUrl),
          o,
          i
        );
        this.events.next(s), n.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let n = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0))
          ),
          o =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          n.toString() !== o?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function dT(t) {
  return t !== qo;
}
var fT = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: () => w(hT), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Od = class {
    shouldDetach(e) {
      return !1;
    }
    store(e, r) {}
    shouldAttach(e) {
      return !1;
    }
    retrieve(e) {
      return null;
    }
    shouldReuseRoute(e, r) {
      return e.routeConfig === r.routeConfig;
    }
  },
  hT = (() => {
    let e = class e extends Od {};
    (e.ɵfac = (() => {
      let n;
      return function (i) {
        return (n || (n = kr(e)))(i || e);
      };
    })()),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Kv = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: () => w(pT), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  pT = (() => {
    let e = class e extends Kv {
      constructor() {
        super(...arguments),
          (this.location = w(Vr)),
          (this.urlSerializer = w(ri)),
          (this.options = w(ai, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = w(Vd)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new zt()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Fv(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(n) {
        return this.location.subscribe((o) => {
          o.type === "popstate" && n(o.url, o.state);
        });
      }
      handleRouterEvent(n, o) {
        if (n instanceof qr) this.stateMemento = this.createStateMemento();
        else if (n instanceof vn) this.rawUrlTree = o.initialUrl;
        else if (n instanceof _a) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !o.extras.skipLocationChange
          ) {
            let i = this.urlHandlingStrategy.merge(o.finalUrl, o.initialUrl);
            this.setBrowserUrl(o.targetBrowserUrl ?? i, o);
          }
        } else
          n instanceof Qo
            ? ((this.currentUrlTree = o.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                o.finalUrl,
                o.initialUrl
              )),
              (this.routerState = o.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !o.extras.skipLocationChange &&
                this.setBrowserUrl(o.targetBrowserUrl ?? this.rawUrlTree, o))
            : n instanceof Ht &&
              (n.code === qe.GuardRejected || n.code === qe.NoDataFromResolver)
            ? this.restoreHistory(o)
            : n instanceof Yo
            ? this.restoreHistory(o, !0)
            : n instanceof Ct &&
              ((this.lastSuccessfulId = n.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(n, o) {
        let i = n instanceof zt ? this.urlSerializer.serialize(n) : n;
        if (this.location.isCurrentPathEqualTo(i) || o.extras.replaceUrl) {
          let s = this.browserPageId,
            c = b(b({}, o.extras.state), this.generateNgRouterState(o.id, s));
          this.location.replaceState(i, "", c);
        } else {
          let s = b(
            b({}, o.extras.state),
            this.generateNgRouterState(o.id, this.browserPageId + 1)
          );
          this.location.go(i, "", s);
        }
      }
      restoreHistory(n, o = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let i = this.browserPageId,
            s = this.currentPageId - i;
          s !== 0
            ? this.location.historyGo(s)
            : this.currentUrlTree === n.finalUrl &&
              s === 0 &&
              (this.resetState(n), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (o && this.resetState(n), this.resetUrlToCurrentUrlTree());
      }
      resetState(n) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            n.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(n, o) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: n, ɵrouterPageId: o }
          : { navigationId: n };
      }
    };
    (e.ɵfac = (() => {
      let n;
      return function (i) {
        return (n || (n = kr(e)))(i || e);
      };
    })()),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  zo = (function (t) {
    return (
      (t[(t.COMPLETE = 0)] = "COMPLETE"),
      (t[(t.FAILED = 1)] = "FAILED"),
      (t[(t.REDIRECTING = 2)] = "REDIRECTING"),
      t
    );
  })(zo || {});
function Jv(t, e) {
  t.events
    .pipe(
      Pe(
        (r) =>
          r instanceof Ct ||
          r instanceof Ht ||
          r instanceof Yo ||
          r instanceof vn
      ),
      O((r) =>
        r instanceof Ct || r instanceof vn
          ? zo.COMPLETE
          : (
              r instanceof Ht
                ? r.code === qe.Redirect ||
                  r.code === qe.SupersededByNewNavigation
                : !1
            )
          ? zo.REDIRECTING
          : zo.FAILED
      ),
      Pe((r) => r !== zo.REDIRECTING),
      Tt(1)
    )
    .subscribe(() => {
      e();
    });
}
function gT(t) {
  throw t;
}
var mT = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  vT = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Ne = (() => {
    let e = class e {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = w(ia)),
          (this.stateManager = w(Kv)),
          (this.options = w(ai, { optional: !0 }) || {}),
          (this.pendingTasks = w(an)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = w(jd)),
          (this.urlSerializer = w(ri)),
          (this.location = w(Vr)),
          (this.urlHandlingStrategy = w(Vd)),
          (this._events = new ye()),
          (this.errorHandler = this.options.errorHandler || gT),
          (this.navigated = !1),
          (this.routeReuseStrategy = w(fT)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = w(ti, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!w(ka, { optional: !0 })),
          (this.eventsSubscription = new ue()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (n) => {
                this.console.warn(n);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let n = this.navigationTransitions.events.subscribe((o) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              s = this.navigationTransitions.currentNavigation;
            if (i !== null && s !== null) {
              if (
                (this.stateManager.handleRouterEvent(o, s),
                o instanceof Ht &&
                  o.code !== qe.Redirect &&
                  o.code !== qe.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (o instanceof Ct) this.navigated = !0;
              else if (o instanceof Wr) {
                let c = o.navigationBehaviorOptions,
                  u = this.urlHandlingStrategy.merge(o.url, i.currentRawUrl),
                  f = b(
                    {
                      browserUrl: i.extras.browserUrl,
                      info: i.extras.info,
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl:
                        i.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        dT(i.source),
                    },
                    c
                  );
                this.scheduleNavigation(u, qo, null, f, {
                  resolve: i.resolve,
                  reject: i.reject,
                  promise: i.promise,
                });
              }
            }
            wT(o) && this._events.next(o);
          } catch (i) {
            this.navigationTransitions.transitionAbortSubject.next(i);
          }
        });
        this.eventsSubscription.add(n);
      }
      resetRootComponentType(n) {
        (this.routerState.root.component = n),
          (this.navigationTransitions.rootComponentType = n);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              qo,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (n, o) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(n, "popstate", o);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(n, o, i) {
        let s = { replaceUrl: !0 },
          c = i?.navigationId ? i : null;
        if (i) {
          let f = b({}, i);
          delete f.navigationId,
            delete f.ɵrouterPageId,
            Object.keys(f).length !== 0 && (s.state = f);
        }
        let u = this.parseUrl(n);
        this.scheduleNavigation(u, o, c, s);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(n) {
        (this.config = n.map(Fd)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(n, o = {}) {
        let {
            relativeTo: i,
            queryParams: s,
            fragment: c,
            queryParamsHandling: u,
            preserveFragment: f,
          } = o,
          g = f ? this.currentUrlTree.fragment : c,
          h = null;
        switch (u ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            h = b(b({}, this.currentUrlTree.queryParams), s);
            break;
          case "preserve":
            h = this.currentUrlTree.queryParams;
            break;
          default:
            h = s || null;
        }
        h !== null && (h = this.removeEmptyProps(h));
        let y;
        try {
          let v = i ? i.snapshot : this.routerState.snapshot.root;
          y = Rv(v);
        } catch {
          (typeof n[0] != "string" || n[0][0] !== "/") && (n = []),
            (y = this.currentUrlTree.root);
        }
        return Ov(y, n, h, g ?? null);
      }
      navigateByUrl(n, o = { skipLocationChange: !1 }) {
        let i = Yn(n) ? n : this.parseUrl(n),
          s = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(s, qo, null, o);
      }
      navigate(n, o = { skipLocationChange: !1 }) {
        return yT(n), this.navigateByUrl(this.createUrlTree(n, o), o);
      }
      serializeUrl(n) {
        return this.urlSerializer.serialize(n);
      }
      parseUrl(n) {
        try {
          return this.urlSerializer.parse(n);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(n, o) {
        let i;
        if (
          (o === !0 ? (i = b({}, mT)) : o === !1 ? (i = b({}, vT)) : (i = o),
          Yn(n))
        )
          return fv(this.currentUrlTree, n, i);
        let s = this.parseUrl(n);
        return fv(this.currentUrlTree, s, i);
      }
      removeEmptyProps(n) {
        return Object.entries(n).reduce(
          (o, [i, s]) => (s != null && (o[i] = s), o),
          {}
        );
      }
      scheduleNavigation(n, o, i, s, c) {
        if (this.disposed) return Promise.resolve(!1);
        let u, f, g;
        c
          ? ((u = c.resolve), (f = c.reject), (g = c.promise))
          : (g = new Promise((y, v) => {
              (u = y), (f = v);
            }));
        let h = this.pendingTasks.add();
        return (
          Jv(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(h));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: o,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: n,
            extras: s,
            resolve: u,
            reject: f,
            promise: g,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          g.catch((y) => Promise.reject(y))
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function yT(t) {
  for (let e = 0; e < t.length; e++) if (t[e] == null) throw new _(4008, !1);
}
function wT(t) {
  return !(t instanceof Qo) && !(t instanceof Wr);
}
var La = (() => {
  let e = class e {
    constructor(n, o, i, s, c, u) {
      (this.router = n),
        (this.route = o),
        (this.tabIndexAttribute = i),
        (this.renderer = s),
        (this.el = c),
        (this.locationStrategy = u),
        (this.href = null),
        (this.onChanges = new ye()),
        (this.preserveFragment = !1),
        (this.skipLocationChange = !1),
        (this.replaceUrl = !1),
        (this.routerLinkInput = null);
      let f = c.nativeElement.tagName?.toLowerCase();
      (this.isAnchorElement = f === "a" || f === "area"),
        this.isAnchorElement
          ? (this.subscription = n.events.subscribe((g) => {
              g instanceof Ct && this.updateHref();
            }))
          : this.setTabIndexIfNotOnNativeEl("0");
    }
    setTabIndexIfNotOnNativeEl(n) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue("tabindex", n);
    }
    ngOnChanges(n) {
      this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
    }
    set routerLink(n) {
      n == null
        ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
        : (Yn(n)
            ? (this.routerLinkInput = n)
            : (this.routerLinkInput = Array.isArray(n) ? n : [n]),
          this.setTabIndexIfNotOnNativeEl("0"));
    }
    onClick(n, o, i, s, c) {
      let u = this.urlTree;
      if (
        u === null ||
        (this.isAnchorElement &&
          (n !== 0 ||
            o ||
            i ||
            s ||
            c ||
            (typeof this.target == "string" && this.target != "_self")))
      )
        return !0;
      let f = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return this.router.navigateByUrl(u, f), !this.isAnchorElement;
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let n = this.urlTree;
      this.href =
        n !== null && this.locationStrategy
          ? this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(n)
            )
          : null;
      let o =
        this.href === null
          ? null
          : jg(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
      this.applyAttributeValue("href", o);
    }
    applyAttributeValue(n, o) {
      let i = this.renderer,
        s = this.el.nativeElement;
      o !== null ? i.setAttribute(s, n, o) : i.removeAttribute(s, n);
    }
    get urlTree() {
      return this.routerLinkInput === null
        ? null
        : Yn(this.routerLinkInput)
        ? this.routerLinkInput
        : this.router.createUrlTree(this.routerLinkInput, {
            relativeTo:
              this.relativeTo !== void 0 ? this.relativeTo : this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: this.preserveFragment,
          });
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(k(Ne), k(yn), uu("tabindex"), k(Un), k(cn), k(Bt));
  }),
    (e.ɵdir = _e({
      type: e,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function (o, i) {
        o & 1 &&
          Dt("click", function (c) {
            return i.onClick(
              c.button,
              c.ctrlKey,
              c.shiftKey,
              c.altKey,
              c.metaKey
            );
          }),
          o & 2 && xo("target", i.target);
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [2, "preserveFragment", "preserveFragment", hn],
        skipLocationChange: [2, "skipLocationChange", "skipLocationChange", hn],
        replaceUrl: [2, "replaceUrl", "replaceUrl", hn],
        routerLink: "routerLink",
      },
      standalone: !0,
      features: [xu, on],
    }));
  let t = e;
  return t;
})();
var Pa = class {};
var DT = (() => {
    let e = class e {
      constructor(n, o, i, s, c) {
        (this.router = n),
          (this.injector = i),
          (this.preloadingStrategy = s),
          (this.loader = c);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            Pe((n) => n instanceof Ct),
            St(() => this.preload())
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(n, o) {
        let i = [];
        for (let s of o) {
          s.providers &&
            !s._injector &&
            (s._injector = na(s.providers, n, `Route: ${s.path}`));
          let c = s._injector ?? n,
            u = s._loadedInjector ?? c;
          ((s.loadChildren && !s._loadedRoutes && s.canLoad === void 0) ||
            (s.loadComponent && !s._loadedComponent)) &&
            i.push(this.preloadConfig(c, s)),
            (s.children || s._loadedRoutes) &&
              i.push(this.processRoutes(u, s.children ?? s._loadedRoutes));
        }
        return ne(i).pipe(fr());
      }
      preloadConfig(n, o) {
        return this.preloadingStrategy.preload(o, () => {
          let i;
          o.loadChildren && o.canLoad === void 0
            ? (i = this.loader.loadChildren(n, o))
            : (i = x(null));
          let s = i.pipe(
            fe((c) =>
              c === null
                ? x(void 0)
                : ((o._loadedRoutes = c.routes),
                  (o._loadedInjector = c.injector),
                  this.processRoutes(c.injector ?? n, c.routes))
            )
          );
          if (o.loadComponent && !o._loadedComponent) {
            let c = this.loader.loadComponent(o);
            return ne([s, c]).pipe(fr());
          } else return s;
        });
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Ne), T(aa), T(Te), T(Pa), T(Ld));
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Xv = new S(""),
  bT = (() => {
    let e = class e {
      constructor(n, o, i, s, c = {}) {
        (this.urlSerializer = n),
          (this.transitions = o),
          (this.viewportScroller = i),
          (this.zone = s),
          (this.options = c),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (c.scrollPositionRestoration ||= "disabled"),
          (c.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof qr
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = n.navigationTrigger),
              (this.restoredId = n.restoredState
                ? n.restoredState.navigationId
                : 0))
            : n instanceof Ct
            ? ((this.lastId = n.id),
              this.scheduleScrollEvent(
                n,
                this.urlSerializer.parse(n.urlAfterRedirects).fragment
              ))
            : n instanceof vn &&
              n.code === Ma.IgnoredSameUrlNavigation &&
              ((this.lastSource = void 0),
              (this.restoredId = 0),
              this.scheduleScrollEvent(
                n,
                this.urlSerializer.parse(n.url).fragment
              ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof Sa &&
            (n.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(n.position)
              : n.anchor && this.options.anchorScrolling === "enabled"
              ? this.viewportScroller.scrollToAnchor(n.anchor)
              : this.options.scrollPositionRestoration !== "disabled" &&
                this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(n, o) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new Sa(
                  n,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  o
                )
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (e.ɵfac = function (o) {
      Jg();
    }),
      (e.ɵprov = M({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function ey(t, ...e) {
  return Eo([
    { provide: ti, multi: !0, useValue: t },
    [],
    { provide: yn, useFactory: ty, deps: [Ne] },
    { provide: Ro, multi: !0, useFactory: ny },
    e.map((r) => r.ɵproviders),
  ]);
}
function ty(t) {
  return t.routerState.root;
}
function ci(t, e) {
  return { ɵkind: t, ɵproviders: e };
}
function ny() {
  let t = w(it);
  return (e) => {
    let r = t.get(fn);
    if (e !== r.components[0]) return;
    let n = t.get(Ne),
      o = t.get(ry);
    t.get(Bd) === 1 && n.initialNavigation(),
      t.get(oy, null, F.Optional)?.setUpPreloading(),
      t.get(Xv, null, F.Optional)?.init(),
      n.resetRootComponentType(r.componentTypes[0]),
      o.closed || (o.next(), o.complete(), o.unsubscribe());
  };
}
var ry = new S("", { factory: () => new ye() }),
  Bd = new S("", { providedIn: "root", factory: () => 1 });
function CT() {
  return ci(2, [
    { provide: Bd, useValue: 0 },
    {
      provide: sa,
      multi: !0,
      deps: [it],
      useFactory: (e) => {
        let r = e.get($m, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise((n) => {
                let o = e.get(Ne),
                  i = e.get(ry);
                Jv(o, () => {
                  n(!0);
                }),
                  (e.get(jd).afterPreactivation = () => (
                    n(!0), i.closed ? x(void 0) : i
                  )),
                  o.initialNavigation();
              })
          );
      },
    },
  ]);
}
function ET() {
  return ci(3, [
    {
      provide: sa,
      multi: !0,
      useFactory: () => {
        let e = w(Ne);
        return () => {
          e.setUpLocationChangeListener();
        };
      },
    },
    { provide: Bd, useValue: 2 },
  ]);
}
var oy = new S("");
function IT(t) {
  return ci(0, [
    { provide: oy, useExisting: DT },
    { provide: Pa, useExisting: t },
  ]);
}
function MT() {
  return ci(8, [mv, { provide: ka, useExisting: mv }]);
}
function _T(t) {
  let e = [
    { provide: Yv, useValue: cT },
    {
      provide: Qv,
      useValue: b({ skipNextTransition: !!t?.skipInitialTransition }, t),
    },
  ];
  return ci(9, e);
}
var Dv = new S("ROUTER_FORROOT_GUARD"),
  ST = [
    Vr,
    { provide: ri, useClass: Gr },
    Ne,
    ii,
    { provide: yn, useFactory: ty, deps: [Ne] },
    Ld,
    [],
  ],
  Va = (() => {
    let e = class e {
      constructor(n) {}
      static forRoot(n, o) {
        return {
          ngModule: e,
          providers: [
            ST,
            [],
            { provide: ti, multi: !0, useValue: n },
            { provide: Dv, useFactory: NT, deps: [[Ne, new Hs(), new Ql()]] },
            { provide: ai, useValue: o || {} },
            o?.useHash ? xT() : AT(),
            TT(),
            o?.preloadingStrategy ? IT(o.preloadingStrategy).ɵproviders : [],
            o?.initialNavigation ? RT(o) : [],
            o?.bindToComponentInputs ? MT().ɵproviders : [],
            o?.enableViewTransitions ? _T().ɵproviders : [],
            OT(),
          ],
        };
      }
      static forChild(n) {
        return {
          ngModule: e,
          providers: [{ provide: ti, multi: !0, useValue: n }],
        };
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(T(Dv, 8));
    }),
      (e.ɵmod = Ot({ type: e })),
      (e.ɵinj = Rt({}));
    let t = e;
    return t;
  })();
function TT() {
  return {
    provide: Xv,
    useFactory: () => {
      let t = w(Gm),
        e = w(ae),
        r = w(ai),
        n = w(jd),
        o = w(ri);
      return (
        r.scrollOffset && t.setOffset(r.scrollOffset), new bT(o, n, t, e, r)
      );
    },
  };
}
function xT() {
  return { provide: Bt, useClass: Hm };
}
function AT() {
  return { provide: Bt, useClass: Hu };
}
function NT(t) {
  return "guarded";
}
function RT(t) {
  return [
    t.initialNavigation === "disabled" ? ET().ɵproviders : [],
    t.initialNavigation === "enabledBlocking" ? CT().ɵproviders : [],
  ];
}
var bv = new S("");
function OT() {
  return [
    { provide: bv, useFactory: ny },
    { provide: Ro, multi: !0, useExisting: bv },
  ];
}
var ja = class t {
  title = "login-register-app";
  static ɵfac = function (r) {
    return new (r || t)();
  };
  static ɵcmp = Le({
    type: t,
    selectors: [["app-root"]],
    standalone: !0,
    features: [Xe],
    decls: 1,
    vars: 0,
    template: function (r, n) {
      r & 1 && Hn(0, "router-outlet");
    },
    dependencies: [kd],
  });
};
var hy = (() => {
    let e = class e {
      constructor(n, o) {
        (this._renderer = n),
          (this._elementRef = o),
          (this.onChange = (i) => {}),
          (this.onTouched = () => {});
      }
      setProperty(n, o) {
        this._renderer.setProperty(this._elementRef.nativeElement, n, o);
      }
      registerOnTouched(n) {
        this.onTouched = n;
      }
      registerOnChange(n) {
        this.onChange = n;
      }
      setDisabledState(n) {
        this.setProperty("disabled", n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(k(Un), k(cn));
    }),
      (e.ɵdir = _e({ type: e }));
    let t = e;
    return t;
  })(),
  PT = (() => {
    let e = class e extends hy {};
    (e.ɵfac = (() => {
      let n;
      return function (i) {
        return (n || (n = kr(e)))(i || e);
      };
    })()),
      (e.ɵdir = _e({ type: e, features: [Ft] }));
    let t = e;
    return t;
  })(),
  py = new S("");
var kT = { provide: py, useExisting: Bn(() => eo), multi: !0 };
function FT() {
  let t = jt() ? jt().getUserAgent() : "";
  return /android (\d+)/.test(t.toLowerCase());
}
var LT = new S(""),
  eo = (() => {
    let e = class e extends hy {
      constructor(n, o, i) {
        super(n, o),
          (this._compositionMode = i),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !FT());
      }
      writeValue(n) {
        let o = n ?? "";
        this.setProperty("value", o);
      }
      _handleInput(n) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(n);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(n) {
        (this._composing = !1), this._compositionMode && this.onChange(n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(k(Un), k(cn), k(LT, 8));
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (o, i) {
          o & 1 &&
            Dt("input", function (c) {
              return i._handleInput(c.target.value);
            })("blur", function () {
              return i.onTouched();
            })("compositionstart", function () {
              return i._compositionStart();
            })("compositionend", function (c) {
              return i._compositionEnd(c.target.value);
            });
        },
        features: [No([kT]), Ft],
      }));
    let t = e;
    return t;
  })();
function VT(t) {
  return (
    t == null || ((typeof t == "string" || Array.isArray(t)) && t.length === 0)
  );
}
var Ud = new S(""),
  gy = new S("");
function jT(t) {
  return VT(t.value) ? { required: !0 } : null;
}
function iy(t) {
  return null;
}
function my(t) {
  return t != null;
}
function vy(t) {
  return Gn(t) ? ne(t) : t;
}
function yy(t) {
  let e = {};
  return (
    t.forEach((r) => {
      e = r != null ? b(b({}, e), r) : e;
    }),
    Object.keys(e).length === 0 ? null : e
  );
}
function wy(t, e) {
  return e.map((r) => r(t));
}
function BT(t) {
  return !t.validate;
}
function Dy(t) {
  return t.map((e) => (BT(e) ? e : (r) => e.validate(r)));
}
function $T(t) {
  if (!t) return null;
  let e = t.filter(my);
  return e.length == 0
    ? null
    : function (r) {
        return yy(wy(r, e));
      };
}
function Hd(t) {
  return t != null ? $T(Dy(t)) : null;
}
function UT(t) {
  if (!t) return null;
  let e = t.filter(my);
  return e.length == 0
    ? null
    : function (r) {
        let n = wy(r, e).map(vy);
        return Bc(n).pipe(O(yy));
      };
}
function zd(t) {
  return t != null ? UT(Dy(t)) : null;
}
function sy(t, e) {
  return t === null ? [e] : Array.isArray(t) ? [...t, e] : [t, e];
}
function HT(t) {
  return t._rawValidators;
}
function zT(t) {
  return t._rawAsyncValidators;
}
function $d(t) {
  return t ? (Array.isArray(t) ? t : [t]) : [];
}
function $a(t, e) {
  return Array.isArray(t) ? t.includes(e) : t === e;
}
function ay(t, e) {
  let r = $d(e);
  return (
    $d(t).forEach((o) => {
      $a(r, o) || r.push(o);
    }),
    r
  );
}
function cy(t, e) {
  return $d(e).filter((r) => !$a(t, r));
}
var Ua = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(e) {
      (this._rawValidators = e || []),
        (this._composedValidatorFn = Hd(this._rawValidators));
    }
    _setAsyncValidators(e) {
      (this._rawAsyncValidators = e || []),
        (this._composedAsyncValidatorFn = zd(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(e) {
      this._onDestroyCallbacks.push(e);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((e) => e()),
        (this._onDestroyCallbacks = []);
    }
    reset(e = void 0) {
      this.control && this.control.reset(e);
    }
    hasError(e, r) {
      return this.control ? this.control.hasError(e, r) : !1;
    }
    getError(e, r) {
      return this.control ? this.control.getError(e, r) : null;
    }
  },
  Jr = class extends Ua {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  mi = class extends Ua {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  Ha = class {
    constructor(e) {
      this._cd = e;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  GT = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  eF = $(b({}, GT), { "[class.ng-submitted]": "isSubmitted" }),
  Wa = (() => {
    let e = class e extends Ha {
      constructor(n) {
        super(n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(k(mi, 2));
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [
          ["", "formControlName", ""],
          ["", "ngModel", ""],
          ["", "formControl", ""],
        ],
        hostVars: 14,
        hostBindings: function (o, i) {
          o & 2 &&
            ra("ng-untouched", i.isUntouched)("ng-touched", i.isTouched)(
              "ng-pristine",
              i.isPristine
            )("ng-dirty", i.isDirty)("ng-valid", i.isValid)(
              "ng-invalid",
              i.isInvalid
            )("ng-pending", i.isPending);
        },
        features: [Ft],
      }));
    let t = e;
    return t;
  })(),
  Za = (() => {
    let e = class e extends Ha {
      constructor(n) {
        super(n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(k(Jr, 10));
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [
          ["", "formGroupName", ""],
          ["", "formArrayName", ""],
          ["", "ngModelGroup", ""],
          ["", "formGroup", ""],
          ["form", 3, "ngNoForm", ""],
          ["", "ngForm", ""],
        ],
        hostVars: 16,
        hostBindings: function (o, i) {
          o & 2 &&
            ra("ng-untouched", i.isUntouched)("ng-touched", i.isTouched)(
              "ng-pristine",
              i.isPristine
            )("ng-dirty", i.isDirty)("ng-valid", i.isValid)(
              "ng-invalid",
              i.isInvalid
            )("ng-pending", i.isPending)("ng-submitted", i.isSubmitted);
        },
        features: [Ft],
      }));
    let t = e;
    return t;
  })();
var di = "VALID",
  Ba = "INVALID",
  Qr = "PENDING",
  fi = "DISABLED",
  Xr = class {},
  za = class extends Xr {
    constructor(e, r) {
      super(), (this.value = e), (this.source = r);
    }
  },
  pi = class extends Xr {
    constructor(e, r) {
      super(), (this.pristine = e), (this.source = r);
    }
  },
  gi = class extends Xr {
    constructor(e, r) {
      super(), (this.touched = e), (this.source = r);
    }
  },
  Kr = class extends Xr {
    constructor(e, r) {
      super(), (this.status = e), (this.source = r);
    }
  };
function by(t) {
  return (Ya(t) ? t.validators : t) || null;
}
function qT(t) {
  return Array.isArray(t) ? Hd(t) : t || null;
}
function Cy(t, e) {
  return (Ya(e) ? e.asyncValidators : t) || null;
}
function WT(t) {
  return Array.isArray(t) ? zd(t) : t || null;
}
function Ya(t) {
  return t != null && !Array.isArray(t) && typeof t == "object";
}
function ZT(t, e, r) {
  let n = t.controls;
  if (!(e ? Object.keys(n) : n).length) throw new _(1e3, "");
  if (!n[r]) throw new _(1001, "");
}
function YT(t, e, r) {
  t._forEachChild((n, o) => {
    if (r[o] === void 0) throw new _(1002, "");
  });
}
var Ga = class {
    constructor(e, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = Oo(() => this.statusReactive())),
        (this.statusReactive = To(void 0)),
        (this._pristine = Oo(() => this.pristineReactive())),
        (this.pristineReactive = To(!0)),
        (this._touched = Oo(() => this.touchedReactive())),
        (this.touchedReactive = To(!1)),
        (this._events = new ye()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(e),
        this._assignAsyncValidators(r);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(e) {
      this._rawValidators = this._composedValidatorFn = e;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(e) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = e;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return Lt(this.statusReactive);
    }
    set status(e) {
      Lt(() => this.statusReactive.set(e));
    }
    get valid() {
      return this.status === di;
    }
    get invalid() {
      return this.status === Ba;
    }
    get pending() {
      return this.status == Qr;
    }
    get disabled() {
      return this.status === fi;
    }
    get enabled() {
      return this.status !== fi;
    }
    get pristine() {
      return Lt(this.pristineReactive);
    }
    set pristine(e) {
      Lt(() => this.pristineReactive.set(e));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return Lt(this.touchedReactive);
    }
    set touched(e) {
      Lt(() => this.touchedReactive.set(e));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(e) {
      this._assignValidators(e);
    }
    setAsyncValidators(e) {
      this._assignAsyncValidators(e);
    }
    addValidators(e) {
      this.setValidators(ay(e, this._rawValidators));
    }
    addAsyncValidators(e) {
      this.setAsyncValidators(ay(e, this._rawAsyncValidators));
    }
    removeValidators(e) {
      this.setValidators(cy(e, this._rawValidators));
    }
    removeAsyncValidators(e) {
      this.setAsyncValidators(cy(e, this._rawAsyncValidators));
    }
    hasValidator(e) {
      return $a(this._rawValidators, e);
    }
    hasAsyncValidator(e) {
      return $a(this._rawAsyncValidators, e);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(e = {}) {
      let r = this.touched === !1;
      this.touched = !0;
      let n = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsTouched($(b({}, e), { sourceControl: n })),
        r && e.emitEvent !== !1 && this._events.next(new gi(!0, n));
    }
    markAllAsTouched(e = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: e.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((r) => r.markAllAsTouched(e));
    }
    markAsUntouched(e = {}) {
      let r = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let n = e.sourceControl ?? this;
      this._forEachChild((o) => {
        o.markAsUntouched({
          onlySelf: !0,
          emitEvent: e.emitEvent,
          sourceControl: n,
        });
      }),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, n),
        r && e.emitEvent !== !1 && this._events.next(new gi(!1, n));
    }
    markAsDirty(e = {}) {
      let r = this.pristine === !0;
      this.pristine = !1;
      let n = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsDirty($(b({}, e), { sourceControl: n })),
        r && e.emitEvent !== !1 && this._events.next(new pi(!1, n));
    }
    markAsPristine(e = {}) {
      let r = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let n = e.sourceControl ?? this;
      this._forEachChild((o) => {
        o.markAsPristine({ onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, n),
        r && e.emitEvent !== !1 && this._events.next(new pi(!0, n));
    }
    markAsPending(e = {}) {
      this.status = Qr;
      let r = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Kr(this.status, r)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.markAsPending($(b({}, e), { sourceControl: r }));
    }
    disable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = fi),
        (this.errors = null),
        this._forEachChild((o) => {
          o.disable($(b({}, e), { onlySelf: !0 }));
        }),
        this._updateValue();
      let n = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new za(this.value, n)),
        this._events.next(new Kr(this.status, n)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors($(b({}, e), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach((o) => o(!0));
    }
    enable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = di),
        this._forEachChild((n) => {
          n.enable($(b({}, e), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
        this._updateAncestors($(b({}, e), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach((n) => n(!1));
    }
    _updateAncestors(e, r) {
      this._parent &&
        !e.onlySelf &&
        (this._parent.updateValueAndValidity(e),
        e.skipPristineCheck || this._parent._updatePristine({}, r),
        this._parent._updateTouched({}, r));
    }
    setParent(e) {
      this._parent = e;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(e = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let n = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === di || this.status === Qr) &&
            this._runAsyncValidator(n, e.emitEvent);
      }
      let r = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new za(this.value, r)),
        this._events.next(new Kr(this.status, r)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.updateValueAndValidity(
            $(b({}, e), { sourceControl: r })
          );
    }
    _updateTreeValidity(e = { emitEvent: !0 }) {
      this._forEachChild((r) => r._updateTreeValidity(e)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? fi : di;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(e, r) {
      if (this.asyncValidator) {
        (this.status = Qr),
          (this._hasOwnPendingAsyncValidator = { emitEvent: r !== !1 });
        let n = vy(this.asyncValidator(this));
        this._asyncValidationSubscription = n.subscribe((o) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(o, { emitEvent: r, shouldHaveEmitted: e });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let e = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), e;
      }
      return !1;
    }
    setErrors(e, r = {}) {
      (this.errors = e),
        this._updateControlsErrors(
          r.emitEvent !== !1,
          this,
          r.shouldHaveEmitted
        );
    }
    get(e) {
      let r = e;
      return r == null ||
        (Array.isArray(r) || (r = r.split(".")), r.length === 0)
        ? null
        : r.reduce((n, o) => n && n._find(o), this);
    }
    getError(e, r) {
      let n = r ? this.get(r) : this;
      return n && n.errors ? n.errors[e] : null;
    }
    hasError(e, r) {
      return !!this.getError(e, r);
    }
    get root() {
      let e = this;
      for (; e._parent; ) e = e._parent;
      return e;
    }
    _updateControlsErrors(e, r, n) {
      (this.status = this._calculateStatus()),
        e && this.statusChanges.emit(this.status),
        (e || n) && this._events.next(new Kr(this.status, r)),
        this._parent && this._parent._updateControlsErrors(e, r, n);
    }
    _initObservables() {
      (this.valueChanges = new he()), (this.statusChanges = new he());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? fi
        : this.errors
        ? Ba
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Qr)
        ? Qr
        : this._anyControlsHaveStatus(Ba)
        ? Ba
        : di;
    }
    _anyControlsHaveStatus(e) {
      return this._anyControls((r) => r.status === e);
    }
    _anyControlsDirty() {
      return this._anyControls((e) => e.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((e) => e.touched);
    }
    _updatePristine(e, r) {
      let n = !this._anyControlsDirty(),
        o = this.pristine !== n;
      (this.pristine = n),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, r),
        o && this._events.next(new pi(this.pristine, r));
    }
    _updateTouched(e = {}, r) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new gi(this.touched, r)),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, r);
    }
    _registerOnCollectionChange(e) {
      this._onCollectionChange = e;
    }
    _setUpdateStrategy(e) {
      Ya(e) && e.updateOn != null && (this._updateOn = e.updateOn);
    }
    _parentMarkedDirty(e) {
      let r = this._parent && this._parent.dirty;
      return !e && !!r && !this._parent._anyControlsDirty();
    }
    _find(e) {
      return null;
    }
    _assignValidators(e) {
      (this._rawValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedValidatorFn = qT(this._rawValidators));
    }
    _assignAsyncValidators(e) {
      (this._rawAsyncValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedAsyncValidatorFn = WT(this._rawAsyncValidators));
    }
  },
  qa = class extends Ga {
    constructor(e, r, n) {
      super(by(r), Cy(n, r)),
        (this.controls = e),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(e, r) {
      return this.controls[e]
        ? this.controls[e]
        : ((this.controls[e] = r),
          r.setParent(this),
          r._registerOnCollectionChange(this._onCollectionChange),
          r);
    }
    addControl(e, r, n = {}) {
      this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: n.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(e, r = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    setControl(e, r, n = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        r && this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: n.emitEvent }),
        this._onCollectionChange();
    }
    contains(e) {
      return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
    }
    setValue(e, r = {}) {
      YT(this, !0, e),
        Object.keys(e).forEach((n) => {
          ZT(this, !0, n),
            this.controls[n].setValue(e[n], {
              onlySelf: !0,
              emitEvent: r.emitEvent,
            });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(e, r = {}) {
      e != null &&
        (Object.keys(e).forEach((n) => {
          let o = this.controls[n];
          o && o.patchValue(e[n], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(e = {}, r = {}) {
      this._forEachChild((n, o) => {
        n.reset(e ? e[o] : null, { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r, this),
        this._updateTouched(r, this),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (e, r, n) => ((e[n] = r.getRawValue()), e)
      );
    }
    _syncPendingControls() {
      let e = this._reduceChildren(!1, (r, n) =>
        n._syncPendingControls() ? !0 : r
      );
      return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
    }
    _forEachChild(e) {
      Object.keys(this.controls).forEach((r) => {
        let n = this.controls[r];
        n && e(n, r);
      });
    }
    _setUpControls() {
      this._forEachChild((e) => {
        e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(e) {
      for (let [r, n] of Object.entries(this.controls))
        if (this.contains(r) && e(n)) return !0;
      return !1;
    }
    _reduceValue() {
      let e = {};
      return this._reduceChildren(
        e,
        (r, n, o) => ((n.enabled || this.disabled) && (r[o] = n.value), r)
      );
    }
    _reduceChildren(e, r) {
      let n = e;
      return (
        this._forEachChild((o, i) => {
          n = r(n, o, i);
        }),
        n
      );
    }
    _allControlsDisabled() {
      for (let e of Object.keys(this.controls))
        if (this.controls[e].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(e) {
      return this.controls.hasOwnProperty(e) ? this.controls[e] : null;
    }
  };
var Gd = new S("CallSetDisabledState", {
    providedIn: "root",
    factory: () => qd,
  }),
  qd = "always";
function QT(t, e) {
  return [...e.path, t];
}
function Ey(t, e, r = qd) {
  Iy(t, e),
    e.valueAccessor.writeValue(t.value),
    (t.disabled || r === "always") &&
      e.valueAccessor.setDisabledState?.(t.disabled),
    JT(t, e),
    ex(t, e),
    XT(t, e),
    KT(t, e);
}
function ly(t, e) {
  t.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(e);
  });
}
function KT(t, e) {
  if (e.valueAccessor.setDisabledState) {
    let r = (n) => {
      e.valueAccessor.setDisabledState(n);
    };
    t.registerOnDisabledChange(r),
      e._registerOnDestroy(() => {
        t._unregisterOnDisabledChange(r);
      });
  }
}
function Iy(t, e) {
  let r = HT(t);
  e.validator !== null
    ? t.setValidators(sy(r, e.validator))
    : typeof r == "function" && t.setValidators([r]);
  let n = zT(t);
  e.asyncValidator !== null
    ? t.setAsyncValidators(sy(n, e.asyncValidator))
    : typeof n == "function" && t.setAsyncValidators([n]);
  let o = () => t.updateValueAndValidity();
  ly(e._rawValidators, o), ly(e._rawAsyncValidators, o);
}
function JT(t, e) {
  e.valueAccessor.registerOnChange((r) => {
    (t._pendingValue = r),
      (t._pendingChange = !0),
      (t._pendingDirty = !0),
      t.updateOn === "change" && My(t, e);
  });
}
function XT(t, e) {
  e.valueAccessor.registerOnTouched(() => {
    (t._pendingTouched = !0),
      t.updateOn === "blur" && t._pendingChange && My(t, e),
      t.updateOn !== "submit" && t.markAsTouched();
  });
}
function My(t, e) {
  t._pendingDirty && t.markAsDirty(),
    t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
    e.viewToModelUpdate(t._pendingValue),
    (t._pendingChange = !1);
}
function ex(t, e) {
  let r = (n, o) => {
    e.valueAccessor.writeValue(n), o && e.viewToModelUpdate(n);
  };
  t.registerOnChange(r),
    e._registerOnDestroy(() => {
      t._unregisterOnChange(r);
    });
}
function tx(t, e) {
  t == null, Iy(t, e);
}
function nx(t, e) {
  if (!t.hasOwnProperty("model")) return !1;
  let r = t.model;
  return r.isFirstChange() ? !0 : !Object.is(e, r.currentValue);
}
function rx(t) {
  return Object.getPrototypeOf(t.constructor) === PT;
}
function ox(t, e) {
  t._syncPendingControls(),
    e.forEach((r) => {
      let n = r.control;
      n.updateOn === "submit" &&
        n._pendingChange &&
        (r.viewToModelUpdate(n._pendingValue), (n._pendingChange = !1));
    });
}
function ix(t, e) {
  if (!e) return null;
  Array.isArray(e);
  let r, n, o;
  return (
    e.forEach((i) => {
      i.constructor === eo ? (r = i) : rx(i) ? (n = i) : (o = i);
    }),
    o || n || r || null
  );
}
var sx = { provide: Jr, useExisting: Bn(() => vi) },
  hi = Promise.resolve(),
  vi = (() => {
    let e = class e extends Jr {
      get submitted() {
        return Lt(this.submittedReactive);
      }
      constructor(n, o, i) {
        super(),
          (this.callSetDisabledState = i),
          (this._submitted = Oo(() => this.submittedReactive())),
          (this.submittedReactive = To(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new he()),
          (this.form = new qa({}, Hd(n), zd(o)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(n) {
        hi.then(() => {
          let o = this._findContainer(n.path);
          (n.control = o.registerControl(n.name, n.control)),
            Ey(n.control, n, this.callSetDisabledState),
            n.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(n);
        });
      }
      getControl(n) {
        return this.form.get(n.path);
      }
      removeControl(n) {
        hi.then(() => {
          let o = this._findContainer(n.path);
          o && o.removeControl(n.name), this._directives.delete(n);
        });
      }
      addFormGroup(n) {
        hi.then(() => {
          let o = this._findContainer(n.path),
            i = new qa({});
          tx(i, n),
            o.registerControl(n.name, i),
            i.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(n) {
        hi.then(() => {
          let o = this._findContainer(n.path);
          o && o.removeControl(n.name);
        });
      }
      getFormGroup(n) {
        return this.form.get(n.path);
      }
      updateModel(n, o) {
        hi.then(() => {
          this.form.get(n.path).setValue(o);
        });
      }
      setValue(n) {
        this.control.setValue(n);
      }
      onSubmit(n) {
        return (
          this.submittedReactive.set(!0),
          ox(this.form, this._directives),
          this.ngSubmit.emit(n),
          n?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(n = void 0) {
        this.form.reset(n), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(n) {
        return n.pop(), n.length ? this.form.get(n) : this.form;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(k(Ud, 10), k(gy, 10), k(Gd, 8));
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (o, i) {
          o & 1 &&
            Dt("submit", function (c) {
              return i.onSubmit(c);
            })("reset", function () {
              return i.onReset();
            });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [No([sx]), Ft],
      }));
    let t = e;
    return t;
  })();
function uy(t, e) {
  let r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
function dy(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    Object.keys(t).length === 2 &&
    "value" in t &&
    "disabled" in t
  );
}
var ax = class extends Ga {
  constructor(e = null, r, n) {
    super(by(r), Cy(n, r)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(e),
      this._setUpdateStrategy(r),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Ya(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (dy(e) ? (this.defaultValue = e.value) : (this.defaultValue = e));
  }
  setValue(e, r = {}) {
    (this.value = this._pendingValue = e),
      this._onChange.length &&
        r.emitModelToViewChange !== !1 &&
        this._onChange.forEach((n) =>
          n(this.value, r.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(r);
  }
  patchValue(e, r = {}) {
    this.setValue(e, r);
  }
  reset(e = this.defaultValue, r = {}) {
    this._applyFormState(e),
      this.markAsPristine(r),
      this.markAsUntouched(r),
      this.setValue(this.value, r),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(e) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(e) {
    this._onChange.push(e);
  }
  _unregisterOnChange(e) {
    uy(this._onChange, e);
  }
  registerOnDisabledChange(e) {
    this._onDisabledChange.push(e);
  }
  _unregisterOnDisabledChange(e) {
    uy(this._onDisabledChange, e);
  }
  _forEachChild(e) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(e) {
    dy(e)
      ? ((this.value = this._pendingValue = e.value),
        e.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = e);
  }
};
var cx = { provide: mi, useExisting: Bn(() => yi) },
  fy = Promise.resolve(),
  yi = (() => {
    let e = class e extends mi {
      constructor(n, o, i, s, c, u) {
        super(),
          (this._changeDetectorRef = c),
          (this.callSetDisabledState = u),
          (this.control = new ax()),
          (this._registered = !1),
          (this.name = ""),
          (this.update = new he()),
          (this._parent = n),
          this._setValidators(o),
          this._setAsyncValidators(i),
          (this.valueAccessor = ix(this, s));
      }
      ngOnChanges(n) {
        if ((this._checkForErrors(), !this._registered || "name" in n)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let o = n.name.previousValue;
            this.formDirective.removeControl({
              name: o,
              path: this._getPath(o),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in n && this._updateDisabled(n),
          nx(n, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(n) {
        (this.viewModel = n), this.update.emit(n);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        Ey(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._isStandalone() || this._checkParentType(), this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(n) {
        fy.then(() => {
          this.control.setValue(n, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(n) {
        let o = n.isDisabled.currentValue,
          i = o !== 0 && hn(o);
        fy.then(() => {
          i && !this.control.disabled
            ? this.control.disable()
            : !i && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(n) {
        return this._parent ? QT(n, this._parent) : [n];
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(
        k(Jr, 9),
        k(Ud, 10),
        k(gy, 10),
        k(py, 10),
        k(qn, 8),
        k(Gd, 8)
      );
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [
          ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""],
        ],
        inputs: {
          name: "name",
          isDisabled: [0, "disabled", "isDisabled"],
          model: [0, "ngModel", "model"],
          options: [0, "ngModelOptions", "options"],
        },
        outputs: { update: "ngModelChange" },
        exportAs: ["ngModel"],
        features: [No([cx]), Ft, on],
      }));
    let t = e;
    return t;
  })(),
  Qa = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵdir = _e({
        type: e,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""],
      }));
    let t = e;
    return t;
  })();
var lx = (() => {
  let e = class e {
    constructor() {
      this._validator = iy;
    }
    ngOnChanges(n) {
      if (this.inputName in n) {
        let o = this.normalizeInput(n[this.inputName].currentValue);
        (this._enabled = this.enabled(o)),
          (this._validator = this._enabled ? this.createValidator(o) : iy),
          this._onChange && this._onChange();
      }
    }
    validate(n) {
      return this._validator(n);
    }
    registerOnValidatorChange(n) {
      this._onChange = n;
    }
    enabled(n) {
      return n != null;
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵdir = _e({ type: e, features: [on] }));
  let t = e;
  return t;
})();
var ux = { provide: Ud, useExisting: Bn(() => wi), multi: !0 };
var wi = (() => {
  let e = class e extends lx {
    constructor() {
      super(...arguments),
        (this.inputName = "required"),
        (this.normalizeInput = hn),
        (this.createValidator = (n) => jT);
    }
    enabled(n) {
      return n;
    }
  };
  (e.ɵfac = (() => {
    let n;
    return function (i) {
      return (n || (n = kr(e)))(i || e);
    };
  })()),
    (e.ɵdir = _e({
      type: e,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
      ],
      hostVars: 1,
      hostBindings: function (o, i) {
        o & 2 && xo("required", i._enabled ? "" : null);
      },
      inputs: { required: "required" },
      features: [No([ux]), Ft],
    }));
  let t = e;
  return t;
})();
var dx = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = Ot({ type: e })),
    (e.ɵinj = Rt({}));
  let t = e;
  return t;
})();
var Ka = (() => {
  let e = class e {
    static withConfig(n) {
      return {
        ngModule: e,
        providers: [{ provide: Gd, useValue: n.callSetDisabledState ?? qd }],
      };
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = Ot({ type: e })),
    (e.ɵinj = Rt({ imports: [dx] }));
  let t = e;
  return t;
})();
var Ja = Zf(Zd());
var Xa = class t {
  constructor(e, r) {
    this.http = e;
    this.router = r;
  }
  email = "";
  password = "";
  login() {
    this.email && this.password
      ? this.http
          .post("http://localhost:3000/login", {
            email: this.email,
            password: this.password,
          })
          .subscribe(
            (e) => {
              Ja.default.fire({
                title: "Login Successful!",
                text: "You have successfully logged in.",
                icon: "success",
                showConfirmButton: !1,
                timer: 1500,
                position: "center",
              }),
                localStorage.setItem("token", e.token),
                this.router.navigate(["/profile"]);
            },
            (e) => {
              Ja.default.fire({
                title: "Error!",
                text: "Invalid credentials. Please try again.",
                icon: "error",
                confirmButtonText: "Retry",
                position: "center",
              });
            }
          )
      : Ja.default.fire({
          title: "Incomplete Details",
          text: "Please enter both email and password",
          icon: "warning",
          confirmButtonText: "OK",
          position: "center",
        });
  }
  static ɵfac = function (r) {
    return new (r || t)(k(Ut), k(Ne));
  };
  static ɵcmp = Le({
    type: t,
    selectors: [["app-login"]],
    standalone: !0,
    features: [Xe],
    decls: 18,
    vars: 2,
    consts: [
      [1, "container", "login-container"],
      [3, "ngSubmit"],
      [
        "type",
        "email",
        "name",
        "email",
        "placeholder",
        "Enter your email",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "password",
        "name",
        "password",
        "placeholder",
        "Enter your password",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["type", "submit"],
      ["routerLink", "/register"],
    ],
    template: function (r, n) {
      r & 1 &&
        (B(0, "div", 0)(1, "h2"),
        oe(2, "yasserhack5"),
        K(),
        B(3, "form", 1),
        Dt("ngSubmit", function () {
          return n.login();
        }),
        B(4, "div")(5, "label"),
        oe(6, "Email"),
        K(),
        B(7, "input", 2),
        dn("ngModelChange", function (i) {
          return zn(n.email, i) || (n.email = i), i;
        }),
        K()(),
        B(8, "div")(9, "label"),
        oe(10, "Password"),
        K(),
        B(11, "input", 3),
        dn("ngModelChange", function (i) {
          return zn(n.password, i) || (n.password = i), i;
        }),
        K()(),
        B(12, "button", 4),
        oe(13, "Login"),
        K()(),
        B(14, "p"),
        oe(15, "Don't have an account? "),
        B(16, "a", 5),
        oe(17, "Register here"),
        K()()()),
        r & 2 &&
          (Ve(7), un("ngModel", n.email), Ve(4), un("ngModel", n.password));
    },
    dependencies: [Ka, Qa, eo, Wa, Za, wi, yi, vi],
    styles: [
      ".login-container[_ngcontent-%COMP%]{width:300px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:10px;background-color:#f9f9f9}h2[_ngcontent-%COMP%]{text-align:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}input[_ngcontent-%COMP%]{width:94%;padding:8px;margin-bottom:10px;border-radius:4px;border:1px solid #ccc}button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}",
    ],
  });
};
var ec = Zf(Zd());
var tc = class t {
  constructor(e) {
    this.http = e;
  }
  name = "";
  email = "";
  password = "";
  register() {
    this.name && this.email && this.password
      ? this.http
          .post("http://localhost:3000/register", {
            name: this.name,
            email: this.email,
            password: this.password,
          })
          .subscribe(
            () => {
              ec.default.fire({
                title: "Registration Successful!",
                text: "Your account has been created.",
                icon: "success",
                showConfirmButton: !1,
                timer: 1500,
                position: "center",
              });
            },
            (e) => {
              ec.default.fire({
                title: "Error!",
                text: "Registration failed. Please try again.",
                icon: "error",
                confirmButtonText: "Retry",
                position: "center",
              });
            }
          )
      : ec.default.fire({
          title: "Incomplete Details",
          text: "Please fill in all fields",
          icon: "warning",
          confirmButtonText: "OK",
          position: "center",
        });
  }
  static ɵfac = function (r) {
    return new (r || t)(k(Ut));
  };
  static ɵcmp = Le({
    type: t,
    selectors: [["app-register"]],
    standalone: !0,
    features: [Xe],
    decls: 22,
    vars: 3,
    consts: [
      [1, "container", "register-container"],
      [3, "ngSubmit"],
      [
        "type",
        "text",
        "name",
        "name",
        "placeholder",
        "Enter your name",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "email",
        "name",
        "email",
        "placeholder",
        "Enter your email",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "password",
        "name",
        "password",
        "placeholder",
        "Enter your password",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["type", "submit"],
      ["routerLink", "/login"],
    ],
    template: function (r, n) {
      r & 1 &&
        (B(0, "div", 0)(1, "h2"),
        oe(2, "Register"),
        K(),
        B(3, "form", 1),
        Dt("ngSubmit", function () {
          return n.register();
        }),
        B(4, "div")(5, "label"),
        oe(6, "Name"),
        K(),
        B(7, "input", 2),
        dn("ngModelChange", function (i) {
          return zn(n.name, i) || (n.name = i), i;
        }),
        K()(),
        B(8, "div")(9, "label"),
        oe(10, "Email"),
        K(),
        B(11, "input", 3),
        dn("ngModelChange", function (i) {
          return zn(n.email, i) || (n.email = i), i;
        }),
        K()(),
        B(12, "div")(13, "label"),
        oe(14, "Password"),
        K(),
        B(15, "input", 4),
        dn("ngModelChange", function (i) {
          return zn(n.password, i) || (n.password = i), i;
        }),
        K()(),
        B(16, "button", 5),
        oe(17, "Register"),
        K()(),
        B(18, "p"),
        oe(19, "Already have an account? "),
        B(20, "a", 6),
        oe(21, "Login here"),
        K()()()),
        r & 2 &&
          (Ve(7),
          un("ngModel", n.name),
          Ve(4),
          un("ngModel", n.email),
          Ve(4),
          un("ngModel", n.password));
    },
    dependencies: [Ka, Qa, eo, Wa, Za, wi, yi, vi, Va, La],
    styles: [
      ".register-container[_ngcontent-%COMP%]{width:300px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:10px;background-color:#f9f9f9}h2[_ngcontent-%COMP%]{text-align:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}input[_ngcontent-%COMP%]{width:94%;padding:8px;margin-bottom:10px;border-radius:4px;border:1px solid #ccc}button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#28a745;color:#fff;border:none;border-radius:4px;cursor:pointer}",
    ],
  });
};
function fx(t, e) {
  if ((t & 1 && (B(0, "li"), oe(1), K()), t & 2)) {
    let r = e.$implicit;
    Ve(), Ou(" ", r.name, " - ", r.email, " ");
  }
}
var nc = class t {
  constructor(e) {
    this.http = e;
  }
  users = [];
  ngOnInit() {
    this.http.get("http://localhost:3000/users").subscribe(
      (e) => {
        this.users = e;
      },
      (e) => {
        console.error("Error fetching users:", e);
      }
    );
  }
  static ɵfac = function (r) {
    return new (r || t)(k(Ut));
  };
  static ɵcmp = Le({
    type: t,
    selectors: [["app-users"]],
    standalone: !0,
    features: [Xe],
    decls: 4,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"]],
    template: function (r, n) {
      r & 1 &&
        (B(0, "h2"),
        oe(1, "Registered Users"),
        K(),
        B(2, "ul"),
        Au(3, fx, 2, 2, "li", 0),
        K()),
        r & 2 && (Ve(3), Ao("ngForOf", n.users));
    },
    dependencies: [zu, zm],
  });
};
var rc = class t {
  static ɵfac = function (r) {
    return new (r || t)();
  };
  static ɵcmp = Le({
    type: t,
    selectors: [["app-test-page"]],
    standalone: !0,
    features: [Xe],
    decls: 4,
    vars: 0,
    consts: [["routerLink", "/register"]],
    template: function (r, n) {
      r & 1 &&
        (B(0, "p"),
        oe(1, "Don't have an account? "),
        B(2, "a", 0),
        oe(3, "Register here"),
        K()());
    },
    dependencies: [Va, La],
  });
};
var oc = class t {
  constructor(e, r) {
    this.http = e;
    this.router = r;
  }
  user = {};
  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    let e = localStorage.getItem("token");
    if (!e) {
      this.router.navigate(["/login"]);
      return;
    }
    this.http
      .get("/api/profile", { headers: { Authorization: `Bearer ${e}` } })
      .subscribe(
        (r) => {
          this.user = r;
        },
        (r) => {
          console.error("Error fetching profile", r),
            this.router.navigate(["/login"]);
        }
      );
  }
  static ɵfac = function (r) {
    return new (r || t)(k(Ut), k(Ne));
  };
  static ɵcmp = Le({
    type: t,
    selectors: [["app-profile"]],
    decls: 7,
    vars: 3,
    consts: [
      [1, "profile-container"],
      [1, "profile-card"],
      ["alt", "Profile Picture", 1, "profile-image", 3, "src"],
    ],
    template: function (r, n) {
      r & 1 &&
        (B(0, "div", 0)(1, "div", 1),
        Hn(2, "img", 2),
        B(3, "h2"),
        oe(4),
        K(),
        B(5, "p"),
        oe(6),
        K()()()),
        r & 2 &&
          (Ve(2),
          Ao("src", n.user.pictureUrl, wu),
          Ve(2),
          Ru(n.user.name),
          Ve(2),
          oa("Email: ", n.user.email, ""));
    },
    styles: [
      ".profile-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f0f0f0}.profile-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;padding:20px;box-shadow:0 4px 8px #0000001a;text-align:center;width:300px}.profile-image[_ngcontent-%COMP%]{border-radius:50%;width:150px;height:150px;object-fit:cover}h2[_ngcontent-%COMP%]{margin:10px 0}p[_ngcontent-%COMP%]{color:#777}",
    ],
  });
};
var ic = class t {
  constructor(e) {
    this.router = e;
  }
  canActivate() {
    return localStorage.getItem("token")
      ? !0
      : (this.router.navigate(["/login"]), !1);
  }
  static ɵfac = function (r) {
    return new (r || t)(T(Ne));
  };
  static ɵprov = M({ token: t, factory: t.ɵfac, providedIn: "root" });
};
var Sy = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: Xa },
  { path: "register", component: tc },
  { path: "users", component: nc },
  { path: "test", component: rc },
  { path: "profile", component: oc, canActivate: [ic] },
  { path: "**", redirectTo: "login" },
];
var Ty = { providers: [ey(Sy), nv()] };
uv(ja, Ty).catch((t) => console.error(t));
