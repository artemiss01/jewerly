(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            o = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n },
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            u = "sizes",
            p = "poster",
            m = "llOriginalAttrs",
            f = "data",
            h = "loading",
            v = "loaded",
            g = "applied",
            b = "error",
            w = "native",
            y = "data-",
            E = "ll-status",
            S = function (e, t) {
              return e.getAttribute(y + t);
            },
            T = function (e) {
              return S(e, E);
            },
            x = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            C = function (e) {
              return x(e, null);
            },
            L = function (e) {
              return null === T(e);
            },
            M = function (e) {
              return T(e) === w;
            },
            P = [h, v, g, b],
            _ = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            A = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            G = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            $ = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && G(s).forEach(t);
            },
            B = function (e, t) {
              G(e).forEach(t);
            },
            N = [d],
            F = [d, p],
            H = [d, c, u],
            V = [f],
            q = function (e) {
              return !!e[m];
            },
            R = function (e) {
              return e[m];
            },
            j = function (e) {
              return delete e[m];
            },
            W = function (e, t) {
              if (!q(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[m] = s);
              }
            },
            X = function (e, t) {
              if (q(e)) {
                var s = R(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            Y = function (e, t, s) {
              A(e, t.class_applied),
                x(e, g),
                s &&
                  (t.unobserve_completed && O(e, t),
                  _(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              A(e, t.class_loading),
                x(e, h),
                s && (z(s, 1), _(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            J = function (e, t) {
              K(e, u, S(e, t.data_sizes)),
                K(e, c, S(e, t.data_srcset)),
                K(e, d, S(e, t.data_src));
            },
            Q = {
              IMG: function (e, t) {
                $(e, function (e) {
                  W(e, H), J(e, t);
                }),
                  W(e, H),
                  J(e, t);
              },
              IFRAME: function (e, t) {
                W(e, N), K(e, d, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  W(e, N), K(e, d, S(e, t.data_src));
                }),
                  W(e, F),
                  K(e, p, S(e, t.data_poster)),
                  K(e, d, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                W(e, V), K(e, f, S(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                _(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                k(e, t.class_loading),
                t.unobserve_completed && O(e, s);
            },
            ae = function (e, t, s) {
              var i = I(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = M(t);
                      re(t, s, i),
                        A(t, s.class_loaded),
                        x(t, v),
                        _(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = M(t);
                      re(t, s, i),
                        A(t, s.class_error),
                        x(t, b),
                        _(s.callback_error, t, i),
                        s.restore_on_error && X(t, H),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                );
            },
            oe = function (e, t, s) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, s),
                      (function (e) {
                        q(e) ||
                          (e[m] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg),
                          n = S(e, t.data_bg_hidpi),
                          a = r && n ? n : i;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          I(e).setAttribute(d, a),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg_multi),
                          n = S(e, t.data_bg_multi_hidpi),
                          a = r && n ? n : i;
                        a && ((e.style.backgroundImage = a), Y(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            Y(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    ae(e, t, s),
                      (function (e, t, s) {
                        var i = Q[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            le = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(u);
            },
            de = function (e) {
              $(e, function (e) {
                X(e, H);
              }),
                X(e, H);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                X(e, N);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  X(e, N);
                }),
                  X(e, F),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, V);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (q(e)) {
                        var t = R(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    M(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                C(e),
                j(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            me = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return P.indexOf(T(e)) >= 0;
                      })(e);
                      x(e, "entered"),
                        A(e, s.class_entered),
                        k(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && O(e, s);
                        })(e, s, i),
                        _(s.callback_enter, e, t, i),
                        n || oe(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      L(e) ||
                        (A(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return T(e) === h;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              $(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            de(e),
                            k(e, s.class_loading),
                            z(i, -1),
                            C(e),
                            _(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        _(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            ve = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ge = function (e) {
              return (function (e) {
                return T(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return he(e).filter(L);
              })(e || ve(t));
            },
            we = function (e, s) {
              var n = o(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !me(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        fe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ve(e)), he(s).filter(ge)).forEach(function (t) {
                          k(t, e.class_error), C(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (we.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  a = be(e, r);
                D(this, a.length),
                  !s && i
                    ? me(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, s),
                                  (function (e, t) {
                                    var s = Q[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  x(e, w);
                              })(e, t, s);
                          }),
                            D(s, 0);
                        })(a, r, this)
                      : ((n = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ve(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                be(e, s).forEach(function (e) {
                  O(e, t), oe(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ve(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (we.load = function (e, t) {
              var s = o(t);
              oe(e, s);
            }),
            (we.resetStatus = function (e) {
              C(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) l(e, s);
                  else l(e, t);
              })(we, window.lazyLoadOptions),
            we
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      n = !0,
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      };
    function a(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function o(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                r = s[2],
                a = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === i && e.type === r) return !0;
                });
              n.push({ itemsArray: o, matchMedia: a });
            }),
            n
          );
      }
    }
    let l = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let o = "",
          l = 0;
        t &&
          ((o = "header.header"), (l = document.querySelector(o).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: s,
          header: o,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (r(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", d);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        a(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    const d = { inputMaskModule: null, selectModule: null };
    let c = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                c.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (d.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  d.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function u(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function p(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : u(t[s]) &&
              u(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              p(e[s], t[s]);
        });
    }
    const m = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function f() {
      const e = "undefined" != typeof document ? document : {};
      return p(e, m), e;
    }
    const h = {
      document: m,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function v() {
      const e = "undefined" != typeof window ? window : {};
      return p(e, h), e;
    }
    function g(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function b() {
      return Date.now();
    }
    function w(e, t) {
      void 0 === t && (t = "x");
      const s = v();
      let i, n, r;
      const a = (function (e) {
        const t = v();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = a.transform || a.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function y(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function E() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (
          null != n &&
          ((s = n),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const s = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              r = Object.getOwnPropertyDescriptor(n, i);
            void 0 !== r &&
              r.enumerable &&
              (y(e[i]) && y(n[i])
                ? n[i].__swiper__
                  ? (e[i] = n[i])
                  : E(e[i], n[i])
                : !y(e[i]) && y(n[i])
                ? ((e[i] = {}), n[i].__swiper__ ? (e[i] = n[i]) : E(e[i], n[i]))
                : (e[i] = n[i]));
          }
        }
      }
      var s;
      return e;
    }
    function S(e, t, s) {
      e.style.setProperty(t, s);
    }
    function T(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const n = v(),
        r = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const d = s > r ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + d * (s - r);
          if ((c(p, s) && (p = s), t.wrapperEl.scrollTo({ [i]: p }), c(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    function x(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function C(e, t) {
      void 0 === t && (t = []);
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function L(e, t) {
      return v().getComputedStyle(e, null).getPropertyValue(t);
    }
    function M(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function P(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function _(e, t, s) {
      const i = v();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    let A, k, I;
    function O() {
      return (
        A ||
          (A = (function () {
            const e = v(),
              t = f();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        A
      );
    }
    function z(e) {
      return (
        void 0 === e && (e = {}),
        k ||
          (k = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = O(),
              i = v(),
              n = i.navigator.platform,
              r = t || i.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = i.screen.width,
              l = i.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              m = "Win32" === n;
            let f = "MacIntel" === n;
            return (
              !c &&
                f &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${l}`) >= 0 &&
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (f = !1)),
              d && !m && ((a.os = "android"), (a.android = !0)),
              (c || p || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        k
      );
    }
    function D() {
      return (
        I ||
          (I = (function () {
            const e = v();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
            };
          })()),
        I
      );
    }
    var G = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n() {
          i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
            r[a] = arguments[a];
          t.apply(i, r);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const $ = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (s) {
          let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (s.shadowRoot
              ? (t = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                ))
              : requestAnimationFrame(() => {
                  s.shadowRoot &&
                    ((t = s.shadowRoot.querySelector(
                      `.${e.params.lazyPreloaderClass}`,
                    )),
                    t && t.remove());
                })),
            t && t.remove();
        }
      },
      B = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      N = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          n = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const s = n,
            r = [s - t];
          return (
            r.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
            void e.slides.forEach((t, s) => {
              r.includes(t.column) && B(e, s);
            })
          );
        }
        const r = n + i - 1;
        if (e.params.rewind || e.params.loop)
          for (let i = n - t; i <= r + t; i += 1) {
            const t = ((i % s) + s) % s;
            (t < n || t > r) && B(e, t);
          }
        else
          for (let i = Math.max(n - t, 0); i <= Math.min(r + t, s - 1); i += 1)
            i !== n && (i > r || i < n) && B(e, i);
      };
    var F = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(L(i, "padding-left") || 0, 10) -
              parseInt(L(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(L(i, "padding-top") || 0, 10) -
              parseInt(L(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: n,
            slidesEl: r,
            size: a,
            rtlTranslate: o,
            wrongRTL: l,
          } = e,
          d = e.virtual && i.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          u = x(r, `.${e.params.slideClass}, swiper-slide`),
          p = d ? e.virtual.slides.length : u.length;
        let m = [];
        const f = [],
          h = [];
        let v = i.slidesOffsetBefore;
        "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          w = e.slidesGrid.length;
        let y = i.spaceBetween,
          E = -v,
          T = 0,
          C = 0;
        if (void 0 === a) return;
        "string" == typeof y && y.indexOf("%") >= 0
          ? (y = (parseFloat(y.replace("%", "")) / 100) * a)
          : "string" == typeof y && (y = parseFloat(y)),
          (e.virtualSize = -y),
          u.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (S(n, "--swiper-centered-offset-before", ""),
            S(n, "--swiper-centered-offset-after", ""));
        const M = i.grid && i.grid.rows > 1 && e.grid;
        let P;
        M && e.grid.initSlides(p);
        const A =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let n = 0; n < p; n += 1) {
          let r;
          if (
            ((P = 0),
            u[n] && (r = u[n]),
            M && e.grid.updateSlide(n, r, p, t),
            !u[n] || "none" !== L(r, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              A && (u[n].style[t("width")] = "");
              const a = getComputedStyle(r),
                o = r.style.transform,
                l = r.style.webkitTransform;
              if (
                (o && (r.style.transform = "none"),
                l && (r.style.webkitTransform = "none"),
                i.roundLengths)
              )
                P = e.isHorizontal() ? _(r, "width", !0) : _(r, "height", !0);
              else {
                const e = s(a, "width"),
                  t = s(a, "padding-left"),
                  i = s(a, "padding-right"),
                  n = s(a, "margin-left"),
                  o = s(a, "margin-right"),
                  l = a.getPropertyValue("box-sizing");
                if (l && "border-box" === l) P = e + n + o;
                else {
                  const { clientWidth: s, offsetWidth: a } = r;
                  P = e + t + i + n + o + (a - s);
                }
              }
              o && (r.style.transform = o),
                l && (r.style.webkitTransform = l),
                i.roundLengths && (P = Math.floor(P));
            } else
              (P = (a - (i.slidesPerView - 1) * y) / i.slidesPerView),
                i.roundLengths && (P = Math.floor(P)),
                u[n] && (u[n].style[t("width")] = `${P}px`);
            u[n] && (u[n].swiperSlideSize = P),
              h.push(P),
              i.centeredSlides
                ? ((E = E + P / 2 + T / 2 + y),
                  0 === T && 0 !== n && (E = E - a / 2 - y),
                  0 === n && (E = E - a / 2 - y),
                  Math.abs(E) < 0.001 && (E = 0),
                  i.roundLengths && (E = Math.floor(E)),
                  C % i.slidesPerGroup == 0 && m.push(E),
                  f.push(E))
                : (i.roundLengths && (E = Math.floor(E)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && m.push(E),
                  f.push(E),
                  (E = E + P + y)),
              (e.virtualSize += P + y),
              (T = P),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + g),
          o &&
            l &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (n.style.width = `${e.virtualSize + y}px`),
          i.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + y}px`),
          M && e.grid.updateWrapperSize(P, m, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < m.length; s += 1) {
            let n = m[s];
            i.roundLengths && (n = Math.floor(n)),
              m[s] <= e.virtualSize - a && t.push(n);
          }
          (m = t),
            Math.floor(e.virtualSize - a) - Math.floor(m[m.length - 1]) > 1 &&
              m.push(e.virtualSize - a);
        }
        if (d && i.loop) {
          const t = h[0] + y;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup,
              ),
              n = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + n);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && m.push(m[m.length - 1] + t),
              f.push(f[f.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === m.length && (m = [0]), 0 !== y)) {
          const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1,
          ).forEach((e) => {
            e.style[s] = `${y}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (y || 0);
          }),
            (e -= y);
          const t = e - a;
          m = m.map((e) => (e <= 0 ? -v : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (y || 0);
            }),
            (e -= y),
            e < a)
          ) {
            const t = (a - e) / 2;
            m.forEach((e, s) => {
              m[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: m,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          S(n, "--swiper-centered-offset-before", -m[0] + "px"),
            S(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== c && e.emit("slidesLengthChange"),
          m.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== w && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          p <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        n && (a = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let o = s.spaceBetween;
        "string" == typeof o && o.indexOf("%") >= 0
          ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
          : "string" == typeof o && (o = parseFloat(o));
        for (let e = 0; e < i.length; e += 1) {
          const l = i[e];
          let d = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
          const c =
              (a + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + o),
            u =
              (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + o),
            p = -(a - d),
            m = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (m > 1 && m <= t.size) ||
            (p <= 0 && m >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (l.progress = n ? -c : c),
            (l.originalProgress = n ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: a, progressLoop: o } = t;
        const l = r,
          d = a;
        if (0 === i) (n = 0), (r = !0), (a = !0);
        else {
          n = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (r = s || n <= 0), (a = o || n >= 1), s && (n = 0), o && (n = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[s],
            r = t.slidesGrid[i],
            a = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (o = l >= n ? (l - n) / a : (l + a - r) / a), o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: o,
          isBeginning: r,
          isEnd: a,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          a && !d && t.emit("reachEnd toEdge"),
          ((l && !r) || (d && !a)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
          r = e.virtual && s.virtual.enabled,
          a = (e) => x(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let o;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass,
            );
          }),
          r)
        )
          if (s.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = a(`[data-swiper-slide-index="${t}"]`));
          } else o = a(`[data-swiper-slide-index="${n}"]`);
        else o = t[n];
        if (o) {
          o.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: n,
            activeIndex: r,
            realIndex: a,
            snapIndex: o,
          } = t;
        let l,
          d = e;
        const c = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : i >= t[e] && i < t[e + 1] && (n = e + 1)
                  : i >= t[e] && (n = e);
              return (
                s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          l = i.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / n.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), d === r))
          return (
            l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = c(d))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? c(d)
            : t.slides[d]
            ? parseInt(
                t.slides[d].getAttribute("data-swiper-slide-index") || d,
                10,
              )
            : d),
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: r,
            activeIndex: d,
          }),
          t.initialized && N(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const s = this,
          i = s.params;
        let n = e.closest(`.${i.slideClass}, swiper-slide`);
        !n &&
          s.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !n &&
              e.matches &&
              e.matches(`.${i.slideClass}, swiper-slide`) &&
              (n = e);
          });
        let r,
          a = !1;
        if (n)
          for (let e = 0; e < s.slides.length; e += 1)
            if (s.slides[e] === n) {
              (a = !0), (r = e);
              break;
            }
        if (!n || !a)
          return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
        (s.clickedSlide = n),
          s.virtual && s.params.virtual.enabled
            ? (s.clickedIndex = parseInt(
                n.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (s.clickedIndex = r),
          i.slideToClickedSlide &&
            void 0 !== s.clickedIndex &&
            s.clickedIndex !== s.activeIndex &&
            s.slideToClickedSlide();
      },
    };
    var H = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = w(n, e);
        return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: n, wrapperEl: r, progress: a } = s;
        let o,
          l = 0,
          d = 0;
        s.isHorizontal() ? (l = i ? -e : e) : (d = e),
          n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? l : d),
          n.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -l : -d)
            : n.virtualTranslate ||
              (s.isHorizontal()
                ? (l -= s.cssOverflowAdjustment())
                : (d -= s.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
        const c = s.maxTranslate() - s.minTranslate();
        (o = 0 === c ? 0 : (e - s.minTranslate()) / c),
          o !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = i && e > l ? l : i && e < d ? d : e),
          r.updateProgress(c),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                T({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd,
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function V(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = i;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${n}`),
        s && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === o
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    var q = {
      slideTo: function (e, t, s, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: m,
          enabled: f,
        } = r;
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!f && !i && !n)
        )
          return !1;
        const h = Math.min(r.params.slidesPerGroupSkip, a);
        let v = h + Math.floor((a - h) / r.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1);
        const g = -l[v];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * g),
              s = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (a = e)
                : t >= s && t < i && (a = e + 1)
              : t >= s && (a = e);
          }
        if (r.initialized && a !== u) {
          if (
            !r.allowSlideNext &&
            (p
              ? g > r.translate && g > r.minTranslate()
              : g < r.translate && g < r.minTranslate())
          )
            return !1;
          if (
            !r.allowSlidePrev &&
            g > r.translate &&
            g > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          (a !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(g),
          (b = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -g === r.translate) || (!p && g === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(g),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (o.cssMode) {
          const e = r.isHorizontal(),
            s = p ? g : -g;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    m[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (m[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                T({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(g),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd,
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const n = this;
        let r = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (r += n.virtual.slidesBefore)
              : (r = n.getSlideIndexByData(r))),
          n.slideTo(r, t, s, i)
        );
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { enabled: n, params: r, animating: a } = i;
        if (!n) return i;
        let o = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : o,
          d = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (a && !d && r.loopPreventsSliding) return !1;
          if (
            (i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft),
            i.activeIndex === i.slides.length - 1 && r.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                i.slideTo(i.activeIndex + l, e, t, s);
              }),
              !0
            );
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: n,
            snapGrid: r,
            slidesGrid: a,
            rtlTranslate: o,
            enabled: l,
            animating: d,
          } = i;
        if (!l) return i;
        const c = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (d && !c && n.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(o ? i.translate : -i.translate),
          m = r.map((e) => u(e));
        let f = r[m.indexOf(p) - 1];
        if (void 0 === f && n.cssMode) {
          let e;
          r.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (f = r[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = a.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return n.loop && 0 === i.activeIndex && n.cssMode
          ? (requestAnimationFrame(() => {
              i.slideTo(h, e, t, s);
            }),
            !0)
          : i.slideTo(h, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const n = this;
        let r = n.activeIndex;
        const a = Math.min(n.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          l - e > (n.snapGrid[o + 1] - e) * i && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[o - 1];
          l - e <= (n.snapGrid[o] - e) * i && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    x(s, `${a}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  g(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  x(s, `${a}[data-swiper-slide-index="${n}"]`)[0],
                )),
                g(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    var R = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        x(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: s = !0,
          direction: i,
          setTranslate: n,
          activeSlideIndex: r,
          byController: a,
          byMousewheel: o,
        } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
          slides: d,
          allowSlidePrev: c,
          allowSlideNext: u,
          slidesEl: p,
          params: m,
        } = l;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && m.virtual.enabled)
        )
          return (
            s &&
              (m.centeredSlides || 0 !== l.snapIndex
                ? m.centeredSlides && l.snapIndex < m.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = c),
            (l.allowSlideNext = u),
            void l.emit("loopFix")
          );
        const f =
          "auto" === m.slidesPerView
            ? l.slidesPerViewDynamic()
            : Math.ceil(parseFloat(m.slidesPerView, 10));
        let h = m.loopedSlides || f;
        h % m.slidesPerGroup != 0 &&
          (h += m.slidesPerGroup - (h % m.slidesPerGroup)),
          (l.loopedSlides = h);
        const v = [],
          g = [];
        let b = l.activeIndex;
        void 0 === r
          ? (r = l.getSlideIndex(
              l.slides.filter((e) =>
                e.classList.contains(m.slideActiveClass),
              )[0],
            ))
          : (b = r);
        const w = "next" === i || !i,
          y = "prev" === i || !i;
        let E = 0,
          S = 0;
        if (r < h) {
          E = Math.max(h - r, m.slidesPerGroup);
          for (let e = 0; e < h - r; e += 1) {
            const t = e - Math.floor(e / d.length) * d.length;
            v.push(d.length - t - 1);
          }
        } else if (r > l.slides.length - 2 * h) {
          S = Math.max(r - (l.slides.length - 2 * h), m.slidesPerGroup);
          for (let e = 0; e < S; e += 1) {
            const t = e - Math.floor(e / d.length) * d.length;
            g.push(t);
          }
        }
        if (
          (y &&
            v.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.prepend(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          w &&
            g.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.append(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === m.slidesPerView && l.updateSlides(),
          m.watchSlidesProgress && l.updateSlidesOffset(),
          s)
        )
          if (v.length > 0 && y)
            if (void 0 === t) {
              const e = l.slidesGrid[b],
                t = l.slidesGrid[b + E] - e;
              o
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(b + E, 0, !1, !0),
                  n &&
                    ((l.touches[l.isHorizontal() ? "startX" : "startY"] += t),
                    (l.touchEventsData.currentTranslate = l.translate)));
            } else
              n &&
                (l.slideToLoop(t, 0, !1, !0),
                (l.touchEventsData.currentTranslate = l.translate));
          else if (g.length > 0 && w)
            if (void 0 === t) {
              const e = l.slidesGrid[b],
                t = l.slidesGrid[b - S] - e;
              o
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(b - S, 0, !1, !0),
                  n &&
                    ((l.touches[l.isHorizontal() ? "startX" : "startY"] += t),
                    (l.touchEventsData.currentTranslate = l.translate)));
            } else l.slideToLoop(t, 0, !1, !0);
        if (
          ((l.allowSlidePrev = c),
          (l.allowSlideNext = u),
          l.controller && l.controller.control && !a)
        ) {
          const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === m.slidesPerView && s,
                  });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({
                ...e,
                slideTo:
                  l.controller.control.params.slidesPerView ===
                    m.slidesPerView && s,
              });
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function j(e) {
      const t = this,
        s = f(),
        i = v(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = l.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(d)) return;
      if ("which" in l && 3 === l.which) return;
      if ("button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const c = !!r.noSwipingClass && "" !== r.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      c && l.target && l.target.shadowRoot && u && (d = u[0]);
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        m = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (m
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === f() || s === v()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode
                    ? i || t(s.getRootNode().host)
                    : null;
                })(t)
              );
            })(p, d)
          : d.closest(p))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
      (a.currentX = l.pageX), (a.currentY = l.pageY);
      const h = a.currentX,
        g = a.currentY,
        w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (w && (h <= y || h >= i.innerWidth - y)) {
        if ("prevent" !== w) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (a.startX = h),
        (a.startY = g),
        (n.touchStartTime = b()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1);
      let E = !0;
      d.matches(n.focusableElements) &&
        ((E = !1), "SELECT" === d.nodeName && (n.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(n.focusableElements) &&
          s.activeElement !== d &&
          s.activeElement.blur();
      const S = E && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !S) ||
        d.isContentEditable ||
        l.preventDefault(),
        r.freeMode &&
          r.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function W(e) {
      const t = f(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: r, rtlTranslate: a, enabled: o } = s;
      if (!o) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      const d = i.evCache.findIndex((e) => e.pointerId === l.pointerId);
      d >= 0 && (i.evCache[d] = l);
      const c = i.evCache.length > 1 ? i.evCache[0] : l,
        u = c.pageX,
        p = c.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!s.allowTouchMove)
        return (
          l.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: u,
              currentY: p,
            }),
            (i.touchStartTime = b()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (p < r.startY && s.translate <= s.maxTranslate()) ||
            (p > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (u < r.startX && s.translate <= s.maxTranslate()) ||
          (u > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const m = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : m * m + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(m))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
      let v = s.isHorizontal() ? m : h,
        g = s.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      n.oneWayMovement &&
        ((v = Math.abs(v) * (a ? 1 : -1)), (g = Math.abs(g) * (a ? 1 : -1))),
        (r.diff = v),
        (v *= n.touchRatio),
        a && ((v = -v), (g = -g));
      const w = s.touchesDirection;
      (s.swipeDirection = v > 0 ? "prev" : "next"),
        (s.touchesDirection = g > 0 ? "prev" : "next");
      const y = s.params.loop && !n.cssMode,
        E =
          ("next" === s.swipeDirection && s.allowSlideNext) ||
          ("prev" === s.swipeDirection && s.allowSlidePrev);
      if (!i.isMoved) {
        if (
          (y && E && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l);
      }
      let S;
      i.isMoved &&
        w !== s.touchesDirection &&
        y &&
        E &&
        Math.abs(v) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (S = !0)),
        s.emit("sliderMove", l),
        (i.isMoved = !0),
        (i.currentTranslate = v + i.startTranslate);
      let T = !0,
        x = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (x = 0),
        v > 0
          ? (y &&
              E &&
              !S &&
              i.currentTranslate >
                (n.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((T = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + v) ** x)))
          : v < 0 &&
            (y &&
              E &&
              !S &&
              i.currentTranslate <
                (n.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === n.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((T = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - v) ** x))),
        T && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(v) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        n.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function X(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          e.type,
        ))
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(e.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: n,
        touches: r,
        rtlTranslate: a,
        slidesGrid: o,
        enabled: l,
      } = t;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", d),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = b(),
        u = c - s.touchStartTime;
      if (t.allowClick) {
        const e = d.path || (d.composedPath && d.composedPath());
        t.updateClickedSlide((e && e[0]) || d.target, e),
          t.emit("tap click", d),
          u < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d);
      }
      if (
        ((s.lastClickTime = b()),
        g(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = n.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (n.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let m = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? p >= o[e] && p < o[e + t] && ((m = e), (f = o[e + t] - o[e]))
          : p >= o[e] && ((m = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      let h = null,
        v = null;
      n.rewind &&
        (t.isBeginning
          ? (v =
              n.virtual && n.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const w = (p - o[m]) / f,
        y = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (w >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? h : m + y)
            : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (w > 1 - n.longSwipesRatio
              ? t.slideTo(m + y)
              : null !== v && w < 0 && Math.abs(w) > n.longSwipesRatio
              ? t.slideTo(v)
              : t.slideTo(m));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
          ? d.target === t.navigation.nextEl
            ? t.slideTo(m + y)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : m + y),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
      }
    }
    function Y() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e,
        a = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = a && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !a
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function U(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function K() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function J(e) {
      const t = this;
      $(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let Q = !1;
    function Z() {}
    const ee = (e, t) => {
      const s = f(),
        { params: i, el: n, wrapperEl: r, device: a } = e,
        o = !!i.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
        s[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        s[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          n[l]("click", e.onClick, !0),
        i.cssMode && r[l]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[d](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Y,
              !0,
            )
          : e[d]("observerUpdate", Y, !0),
        n[l]("load", e.onLoad, { capture: !0 });
    };
    const te = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var se = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ie(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (!0 === e[i] && (e[i] = { enabled: !0 }),
            "navigation" === i &&
              e[i] &&
              e[i].enabled &&
              !e[i].prevEl &&
              !e[i].nextEl &&
              (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 &&
              e[i] &&
              e[i].enabled &&
              !e[i].el &&
              (e[i].auto = !0),
            i in e && "enabled" in n
              ? ("object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                E(t, s))
              : E(t, s))
          : E(t, s);
      };
    }
    const ne = {
        eventsEmitter: G,
        update: F,
        translate: H,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              ((s.wrapperEl.style.transitionDuration = `${e}ms`),
              (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              V({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                V({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: q,
        loop: R,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = f(),
              { params: s } = e;
            (e.onTouchStart = j.bind(e)),
              (e.onTouchMove = W.bind(e)),
              (e.onTouchEnd = X.bind(e)),
              s.cssMode && (e.onScroll = K.bind(e)),
              (e.onClick = U.bind(e)),
              (e.onLoad = J.bind(e)),
              Q || (t.addEventListener("touchstart", Z), (Q = !0)),
              ee(e, "on");
          },
          detachEvents: function () {
            ee(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: n } = e,
              r = i.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const o = (a in r ? r[a] : void 0) || e.originalParams,
              l = te(e, i),
              d = te(e, o),
              c = i.enabled;
            l && !d
              ? (n.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (n.classList.add(`${i.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === i.grid.fill)) &&
                  n.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === o[t]) return;
                const s = i[t] && i[t].enabled,
                  n = o[t] && o[t].enabled;
                s && !n && e[t].disable(), !s && n && e[t].enable();
              });
            const u = o.direction && o.direction !== i.direction,
              p = i.loop && (o.slidesPerView !== i.slidesPerView || u),
              m = i.loop;
            u && s && e.changeDirection(), E(e.params, o);
            const f = e.params.enabled,
              h = e.params.loop;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !f ? e.disable() : !c && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", o),
              s &&
                (p
                  ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                  : !m && h
                  ? (e.loopCreate(t), e.updateSlides())
                  : m && !h && e.loopDestroy()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t, s) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !s))
            )
              return;
            let i = !1;
            const n = v(),
              r = "window" === t ? n.innerHeight : s.clientHeight,
              a = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              const { point: r, value: o } = a[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
                : o <= s.clientWidth && (i = r);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: n, device: r } = e,
              a = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass,
              );
            t.push(...a), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      re = {};
    class ae {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
          i[n] = arguments[n];
        1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
          t || (t = {}),
          (t = E({}, t)),
          e && !t.el && (t.el = e);
        const r = f();
        if (
          t.el &&
          "string" == typeof t.el &&
          r.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            r.querySelectorAll(t.el).forEach((s) => {
              const i = E({}, t, { el: s });
              e.push(new ae(i));
            }),
            e
          );
        }
        const a = this;
        (a.__swiper__ = !0),
          (a.support = O()),
          (a.device = z({ userAgent: t.userAgent })),
          (a.browser = D()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const o = {};
        a.modules.forEach((e) => {
          e({
            params: t,
            swiper: a,
            extendParams: ie(t, o),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const l = E({}, se, o);
        return (
          (a.params = E({}, l, re, t)),
          (a.originalParams = E({}, a.params)),
          (a.passedParams = E({}, t)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = M(x(t, `.${s.slideClass}, swiper-slide`)[0]);
        return M(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = x(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
          let e,
            t = i[o] ? i[o].swiperSlideSize : 0;
          for (let s = o + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1) {
            (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            n[o] - n[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && $(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
        )
          i(), s.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
            e.isEnd &&
            !s.centeredSlides
          ) {
            const t =
              e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            n = e.slideTo(t.length - 1, 0, !1, !0);
          } else n = e.slideTo(e.activeIndex, 0, !1, !0);
          n || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t),
          s.parentNode &&
            s.parentNode.host &&
            "SWIPER-CONTAINER" === s.parentNode.host.nodeName &&
            (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return x(s, i())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = C("div", t.params.wrapperClass)),
            s.append(n),
            x(s, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: n,
            slidesEl:
              t.isElement && !s.parentNode.host.slideSlots
                ? s.parentNode.host
                : n,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === L(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === L(s, "direction")),
            wrongRTL: "-webkit-box" === L(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          s.forEach((e) => {
            e.complete
              ? $(t, e)
              : e.addEventListener("load", (e) => {
                  $(t, e.target);
                });
          }),
          N(t),
          (t.initialized = !0),
          N(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, el: n, wrapperEl: r, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttribute("style"),
              r.removeAttribute("style"),
              a &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        E(re, e);
      }
      static get extendedDefaults() {
        return re;
      }
      static get defaults() {
        return se;
      }
      static installModule(e) {
        ae.prototype.__modules__ || (ae.prototype.__modules__ = []);
        const t = ae.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ae.installModule(e)), ae)
          : (ae.installModule(e), ae);
      }
    }
    function oe(e, t, s, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((n) => {
            if (!s[n] && !0 === s.auto) {
              let r = x(e.el, `.${i[n]}`)[0];
              r || ((r = C("div", i[n])), (r.className = i[n]), e.el.append(r)),
                (s[n] = r),
                (t[n] = r);
            }
          }),
        s
      );
    }
    function le(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function a(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function o(e, s) {
        const i = t.params.navigation;
        (e = r(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function l() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return o(s, !1), void o(e, !1);
        o(s, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function d(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), n("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), n("navigationNext"));
      }
      function u() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = oe(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = a(e.nextEl),
          i = a(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: i }),
          (s = r(s)),
          (i = r(i));
        const n = (s, i) => {
          s && s.addEventListener("click", "next" === i ? c : d),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => n(e, "next")), i.forEach((e) => n(e, "prev"));
      }
      function p() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = r(e)), (s = r(s));
        const i = (e, s) => {
          e.removeEventListener("click", "next" === s ? c : d),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      i("init", () => {
        !1 === t.params.navigation.enabled ? m() : (u(), l());
      }),
        i("toEdge fromEdge lock unlock", () => {
          l();
        }),
        i("destroy", () => {
          p();
        }),
        i("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = r(e)),
            (s = r(s)),
            t.enabled
              ? l()
              : [...e, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass),
                  );
        }),
        i("click", (e, s) => {
          let { nextEl: i, prevEl: a } = t.navigation;
          (i = r(i)), (a = r(a));
          const o = s.target;
          if (
            t.params.navigation.hideOnClick &&
            !a.includes(o) &&
            !i.includes(o)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : a.length &&
                (e = a[0].classList.contains(t.params.navigation.hiddenClass)),
              n(!0 === e ? "navigationShow" : "navigationHide"),
              [...i, ...a]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                );
          }
        });
      const m = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            u(),
            l();
        },
        disable: m,
        update: l,
        init: u,
        destroy: p,
      });
    }
    function de(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!+\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function ce(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const r = "swiper-pagination";
      let a;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let o = 0;
      const l = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function d() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function c(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${i}-${s}`),
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${i}-${s}-${s}`));
      }
      function u(e) {
        const s = e.target.closest(de(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const i = M(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          const e = t.realIndex,
            s = t.getSlideIndexByData(i),
            n = t.getSlideIndexByData(t.realIndex),
            r = (i) => {
              const n = t.activeIndex;
              t.loopFix({ direction: i, activeSlideIndex: s, slideTo: !1 });
              n === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
            };
          if (s > t.slides.length - t.loopedSlides) r(s > n ? "next" : "prev");
          else if (t.params.centeredSlides) {
            const e =
              "auto" === t.params.slidesPerView
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(t.params.slidesPerView, 10));
            s < Math.floor(e / 2) && r("prev");
          }
          t.slideToLoop(i);
        } else t.slideTo(i);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (d()) return;
        let i,
          r,
          u = t.pagination.el;
        u = l(u);
        const p =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          m = t.params.loop
            ? Math.ceil(p / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (i =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((i = t.snapIndex), (r = t.previousSnapIndex))
            : ((r = t.previousIndex || 0), (i = t.activeIndex || 0)),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const n = t.pagination.bullets;
          let l, d, p;
          if (
            (s.dynamicBullets &&
              ((a = _(n[0], t.isHorizontal() ? "width" : "height", !0)),
              u.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  a * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((o += i - (r || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (l = Math.max(i - o, 0)),
              (d = l + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (p = (d + l) / 2)),
            n.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e,
                )
                .flat();
              e.classList.remove(...t);
            }),
            u.length > 1)
          )
            n.forEach((e) => {
              const n = M(e);
              n === i
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                  (n >= l &&
                    n <= d &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" "),
                    ),
                  n === l && c(e, "prev"),
                  n === d && c(e, "next"));
            });
          else {
            const e = n[i];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              t.isElement &&
                n.forEach((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet");
                }),
              s.dynamicBullets)
            ) {
              const e = n[l],
                t = n[d];
              for (let e = l; e <= d; e += 1)
                n[e] &&
                  n[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" "),
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              r = (a * i - a) / 2 - p * a,
              o = e ? "right" : "left";
            n.forEach((e) => {
              e.style[t.isHorizontal() ? o : "top"] = `${r}px`;
            });
          }
        }
        u.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(de(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(i + 1);
              }),
              e.querySelectorAll(de(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(m);
              })),
            "progressbar" === s.type)
          ) {
            let n;
            n = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (i + 1) / m;
            let a = 1,
              o = 1;
            "horizontal" === n ? (a = r) : (o = r),
              e.querySelectorAll(de(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, i + 1, m)),
              0 === r && n("paginationRender", e))
            : (0 === r && n("paginationRender", e), n("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function m() {
        const e = t.params.pagination;
        if (d()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length;
        let i = t.pagination.el;
        i = l(i);
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          i.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = r || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...s.querySelectorAll(de(e.bulletClass)),
                );
          }),
          "custom" !== e.type && n("paginationRender", i[0]);
      }
      function f() {
        t.params.pagination = oe(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" },
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
            "string" != typeof e.el ||
            (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
                (s = s.filter((e) => P(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = l(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (o = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", u),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function h() {
        const e = t.params.pagination;
        if (d()) return;
        let s = t.pagination.el;
        s &&
          ((s = l(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              ),
              e.clickable &&
                (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", u));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" ")),
            );
      }
      i("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = l(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              );
          });
      }),
        i("init", () => {
          !1 === t.params.pagination.enabled ? v() : (f(), m(), p());
        }),
        i("activeIndexChange", () => {
          void 0 === t.snapIndex && p();
        }),
        i("snapIndexChange", () => {
          p();
        }),
        i("snapGridLengthChange", () => {
          m(), p();
        }),
        i("destroy", () => {
          h();
        }),
        i("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = l(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass,
              ),
            ));
        }),
        i("lock unlock", () => {
          p();
        }),
        i("click", (e, s) => {
          const i = s.target,
            r = l(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !i.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            n(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass),
              );
          }
        });
      const v = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = l(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass),
          )),
          h();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = l(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass),
            )),
            f(),
            m(),
            p();
        },
        disable: v,
        render: m,
        update: p,
        init: f,
        destroy: h,
      });
    }
    function ue(e) {
      let t,
        s,
        { swiper: i, extendParams: n, on: r, emit: a, params: o } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let l,
        d,
        c,
        u,
        p,
        m,
        h,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        g = o && o.autoplay ? o.autoplay.delay : 3e3,
        b = new Date().getTime;
      function w(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", w), C());
      }
      const y = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (d = !0) : d && ((g = l), (d = !1));
          const e = i.autoplay.paused ? l : b + g - new Date().getTime();
          (i.autoplay.timeLeft = e),
            a("autoplayTimeLeft", e, e / v),
            (s = requestAnimationFrame(() => {
              y();
            }));
        },
        E = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), y();
          let n = void 0 === e ? i.params.autoplay.delay : e;
          (v = i.params.autoplay.delay), (g = i.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                  : i.slides[i.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((n = r), (v = r), (g = r)),
            (l = n);
          const o = i.params.speed,
            d = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(o, !0, !0), a("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(i.slides.length - 1, o, !0, !0), a("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                  ? (i.slideNext(o, !0, !0), a("autoplay"))
                  : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(0, o, !0, !0), a("autoplay")),
                i.params.cssMode &&
                  ((b = new Date().getTime()),
                  requestAnimationFrame(() => {
                    E();
                  })));
            };
          return (
            n > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  d();
                }, n)))
              : requestAnimationFrame(() => {
                  d();
                }),
            n
          );
        },
        S = () => {
          (i.autoplay.running = !0), E(), a("autoplayStart");
        },
        T = () => {
          (i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            a("autoplayStop");
        },
        x = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (h = !0);
          const n = () => {
            a("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", w)
                : C();
          };
          if (((i.autoplay.paused = !0), s))
            return m && (l = i.params.autoplay.delay), (m = !1), void n();
          const r = l || i.params.autoplay.delay;
          (l = r - (new Date().getTime() - b)),
            (i.isEnd && l < 0 && !i.params.loop) || (l < 0 && (l = 0), n());
        },
        C = () => {
          (i.isEnd && l < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((b = new Date().getTime()),
            h ? ((h = !1), E(l)) : E(),
            (i.autoplay.paused = !1),
            a("autoplayResume"));
        },
        L = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = f();
          "hidden" === e.visibilityState && ((h = !0), x(!0)),
            "visible" === e.visibilityState && C();
        },
        M = (e) => {
          "mouse" === e.pointerType &&
            ((h = !0), i.animating || i.autoplay.paused || x(!0));
        },
        P = (e) => {
          "mouse" === e.pointerType && i.autoplay.paused && C();
        };
      r("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", M),
            i.el.addEventListener("pointerleave", P)),
          f().addEventListener("visibilitychange", L),
          (b = new Date().getTime()),
          S());
      }),
        r("destroy", () => {
          i.el.removeEventListener("pointerenter", M),
            i.el.removeEventListener("pointerleave", P),
            f().removeEventListener("visibilitychange", L),
            i.autoplay.running && T();
        }),
        r("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? x(!0, !0) : T());
        }),
        r("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? T()
              : ((c = !0),
                (u = !1),
                (h = !1),
                (p = setTimeout(() => {
                  (h = !0), (u = !0), x(!0);
                }, 200))));
        }),
        r("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && c) {
            if (
              (clearTimeout(p),
              clearTimeout(t),
              i.params.autoplay.disableOnInteraction)
            )
              return (u = !1), void (c = !1);
            u && i.params.cssMode && C(), (u = !1), (c = !1);
          }
        }),
        r("slideChange", () => {
          !i.destroyed && i.autoplay.running && (m = !0);
        }),
        Object.assign(i.autoplay, { start: S, stop: T, pause: x, resume: C });
    }
    function pe() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(ne).forEach((e) => {
      Object.keys(ne[e]).forEach((t) => {
        ae.prototype[t] = ne[e][t];
      });
    }),
      ae.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const n = v();
          let r = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = n.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let n = s,
                      r = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: a } = e;
                      (a && a !== t.el) ||
                        ((n = i ? i.width : (s[0] || s).inlineSize),
                        (r = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (n === s && r === i) || o();
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", o),
                n.addEventListener("orientationchange", l));
          }),
            s("destroy", () => {
              a && n.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", o),
                n.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: n } = e;
          const r = [],
            a = v(),
            o = function (e, s) {
              void 0 === s && (s = {});
              const i = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const s = function () {
                    n("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(s)
                    : a.setTimeout(s, 0);
                },
              );
              i.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                r.push(i);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = P(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.hostEl, { childList: t.params.observeSlideChildren }),
                  o(t.wrapperEl, { attributes: !1 });
              }
            }),
            i("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]),
      window.addEventListener("load", function (e) {
        pe(),
          document.querySelector(".swiper") &&
            new ae(".sliders-page__slider", {
              modules: [le, ce, ue],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: "auto",
              spaceBetween: 25,
              autoHeight: !1,
              speed: 800,
              grabCursor: !0,
              rewind: !0,
              pagination: { el: ".swiper-pagination", clickable: !0 },
              navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              },
              on: {},
            });
      });
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let me = !1;
    setTimeout(() => {
      if (me) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    let fe = !0;
    document.addEventListener("click", function (e) {
      let t = e.target;
      fe && t.closest(".icon-menu")
        ? (document.documentElement.classList.add("menu-open"),
          document.documentElement.classList.add("lock"),
          (fe = !1))
        : t.closest(".icon-menu-close") &&
          (document.documentElement.classList.remove("menu-open"),
          document.documentElement.classList.remove("lock"),
          (fe = !0));
    }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
          function t() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", t), t();
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && r(s);
          let n = o(e, "spollers");
          function r(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    a(e),
                    e.addEventListener("click", l))
                  : (e.classList.remove("_spoller-init"),
                    a(e, !1),
                    e.removeEventListener("click", l));
            });
          }
          function a(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function l(e) {
            const s = e.target;
            if (s.closest("[data-spoller]")) {
              const n = s.closest("[data-spoller]"),
                r = n.closest("[data-spollers]"),
                a = !!r.hasAttribute("data-one-spoller");
              r.querySelectorAll("._slide").length ||
                (a && !n.classList.contains("_spoller-active") && d(r),
                n.classList.toggle("_spoller-active"),
                ((e, s = 500) => {
                  e.hidden ? i(e, s) : t(e, s);
                })(n.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function d(e) {
            const s = e.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              t(s.nextElementSibling, 500));
          }
          n &&
            n.length &&
            n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                r(e.itemsArray, e.matchMedia);
              }),
                r(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-showmore]");
        let s, n;
        function r(e) {
          e.forEach((e) => {
            a(e.itemsArray, e.matchMedia);
          });
        }
        function a(e, s) {
          e.forEach((e) => {
            !(function (e, s = !1) {
              e = s ? e.item : e;
              const n = e.querySelector("[data-showmore-content]"),
                r = e.querySelector("[data-showmore-button]"),
                a = l(e, n);
              (s.matches || !s) &&
              a <
                (function (e) {
                  let t = e.offsetHeight;
                  e.style.removeProperty("height");
                  let s = e.offsetHeight;
                  return (e.style.height = `${t}px`), s;
                })(n)
                ? (t(n, 0, a), (r.hidden = !1))
                : (i(n, 0, a), (r.hidden = !0));
            })(e, s);
          });
        }
        function l(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              i = t.children;
            for (let t = 1; t < i.length; t++) {
              if (((s += i[t - 1].offsetHeight), t === e)) break;
            }
          } else {
            s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          }
          return s;
        }
        function d(e) {
          const o = e.target,
            d = e.type;
          if ("click" === d) {
            if (o.closest("[data-showmore-button]")) {
              const e = o
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                s = e.querySelector("[data-showmore-content]"),
                n = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                r = l(e, s);
              s.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? t(s, n, r)
                  : i(s, n, r),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === d && (s.length && a(s), n.length && r(n));
        }
        e.length &&
          ((s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          s.length && a(s),
          document.addEventListener("click", d),
          window.addEventListener("resize", d),
          (n = o(e, "showmoreMedia")),
          n &&
            n.length &&
            (n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                a(e.itemsArray, e.matchMedia);
              });
            }),
            r(n)));
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              c.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && c.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                c.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? c.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                n = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                r = new FormData(t);
              t.classList.add("_sending");
              const a = await fetch(e, { method: n, body: r });
              if (a.ok) {
                await a.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && l(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } }),
          ),
            c.formClean(e),
            a(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0);
  })();
})();
