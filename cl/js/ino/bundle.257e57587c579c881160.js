( () => {
    "use strict";
    var t = {
        72: t => {
            var e = [];
            function o(t) {
                for (var o = -1, n = 0; n < e.length; n++)
                    if (e[n].identifier === t) {
                        o = n;
                        break
                    }
                return o
            }
            function n(t, n) {
                for (var i = {}, l = [], r = 0; r < t.length; r++) {
                    var s = t[r]
                      , d = n.base ? s[0] + n.base : s[0]
                      , c = i[d] || 0
                      , p = "".concat(d, " ").concat(c);
                    i[d] = c + 1;
                    var u = o(p)
                      , m = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3],
                        supports: s[4],
                        layer: s[5]
                    };
                    if (-1 !== u)
                        e[u].references++,
                        e[u].updater(m);
                    else {
                        var h = a(m, n);
                        n.byIndex = r,
                        e.splice(r, 0, {
                            identifier: p,
                            updater: h,
                            references: 1
                        })
                    }
                    l.push(p)
                }
                return l
            }
            function a(t, e) {
                var o = e.domAPI(e);
                o.update(t);
                return function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer)
                            return;
                        o.update(t = e)
                    } else
                        o.remove()
                }
            }
            t.exports = function(t, a) {
                var i = n(t = t || [], a = a || {});
                return function(t) {
                    t = t || [];
                    for (var l = 0; l < i.length; l++) {
                        var r = o(i[l]);
                        e[r].references--
                    }
                    for (var s = n(t, a), d = 0; d < i.length; d++) {
                        var c = o(i[d]);
                        0 === e[c].references && (e[c].updater(),
                        e.splice(c, 1))
                    }
                    i = s
                }
            }
        }
        ,
        659: t => {
            var e = {};
            t.exports = function(t, o) {
                var n = function(t) {
                    if (void 0 === e[t]) {
                        var o = document.querySelector(t);
                        if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                            try {
                                o = o.contentDocument.head
                            } catch (t) {
                                o = null
                            }
                        e[t] = o
                    }
                    return e[t]
                }(t);
                if (!n)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                n.appendChild(o)
            }
        }
        ,
        540: t => {
            t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes),
                t.insert(e, t.options),
                e
            }
        }
        ,
        56: (t, e, o) => {
            t.exports = function(t) {
                var e = o.nc;
                e && t.setAttribute("nonce", e)
            }
        }
        ,
        825: t => {
            t.exports = function(t) {
                if ("undefined" == typeof document)
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var e = t.insertStyleElement(t);
                return {
                    update: function(o) {
                        !function(t, e, o) {
                            var n = "";
                            o.supports && (n += "@supports (".concat(o.supports, ") {")),
                            o.media && (n += "@media ".concat(o.media, " {"));
                            var a = void 0 !== o.layer;
                            a && (n += "@layer".concat(o.layer.length > 0 ? " ".concat(o.layer) : "", " {")),
                            n += o.css,
                            a && (n += "}"),
                            o.media && (n += "}"),
                            o.supports && (n += "}");
                            var i = o.sourceMap;
                            i && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                            e.styleTagTransform(n, t, e.options)
                        }(e, t, o)
                    },
                    remove: function() {
                        !function(t) {
                            if (null === t.parentNode)
                                return !1;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        }
        ,
        113: t => {
            t.exports = function(t, e) {
                if (e.styleSheet)
                    e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        }
        ,
        669: t => {
            t.exports = jQuery
        }
    }
      , e = {};
    function o(n) {
        var a = e[n];
        if (void 0 !== a)
            return a.exports;
        var i = e[n] = {
            exports: {}
        };
        return t[n](i, i.exports, o),
        i.exports
    }
    o.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = (t, e) => {
        for (var n in e)
            o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    o.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.nc = void 0;
    var n = {};
    o.r(n);
    var a = {};
    o.r(a);
    var l = {};
    o.r(l);
    var r = o(669);
    const s = class {
        constructor(t) {
            this.url = t,
            this.funds = {},
            this.fundsValues = {},
            this.setFundsMonthly(),
            this.setFundsSingle(),
            this.setFundsValuesSingle(),
            this.setFundsValuesMonthly()
        }
        setURI(t) {
            this.url = t
        }
        async ajaxRequest(t, e) {
            return await r.ajax({
                url: this.url,
                type: t,
                dataType: "json",
                data: e,
                cache: !1,
                success: function(t) {
                    return t
                },
                error: function(t, e) {
                    var o = "";
                    return o = 0 === t.status ? "Not connect.\n Verify Network." : 404 == t.status ? "Requested page not found. [404]" : 500 == t.status ? "Internal Server Error [500]." : "parsererror" === e ? "Requested JSON parse failed." : "timeout" === e ? "Time out error." : "abort" === e ? "Ajax request aborted." : "Uncaught Error.\n" + t.responseText,
                    alert(o),
                    o
                }
            })
        }
        setFundsMonthly() {
            this.funds.monthly = this.ajaxRequest("GET", {
                type: "monthly_funds"
            })
        }
        setFundsSingle() {
            this.funds.single = this.ajaxRequest("GET", {
                type: "single_funds"
            })
        }
        setFundsValuesMonthly() {
            let t = WSURL + "get_all_fund_values.php";
            this.setURI(t),
            this.fundsValues.monthly = this.ajaxRequest("GET", {
                type: "monthly"
            })
        }
        setFundsValuesSingle() {
            let t = WSURL + "get_all_fund_values.php";
            this.setURI(t),
            this.fundsValues.single = this.ajaxRequest("GET", {
                type: "single"
            })
        }
        getFundsMonthly() {
            return this.funds.monthly
        }
        getFundsSingle() {
            return this.funds.single
        }
        getSingleFundValuesById(t) {
            return this.fundsValues.single.then((e => {
                let o = Array()
                  , n = Array();
                for (let a = 0, i = 0, l = 0; a < e.length; a++)
                    e[a].product_id == t && (o[i] = e[a],
                    i++),
                    e[a].product_id == parseInt(objCMS.defaultSingleFundId) && (n[l] = e[a],
                    l++);
                return 0 == o.length && (o = n),
                o
            }
            ))
        }
        getMonthlyFundValuesById(t) {
            return this.fundsValues.monthly.then((e => {
                let o = Array()
                  , n = Array();
                for (let a = 0, i = 0, l = 0; a < e.length; a++)
                    e[a].product_id == t && (o[i] = e[a],
                    i++),
                    e[a].product_id == parseInt(objCMS.defaultMonthlyFundId) && (n[l] = e[a],
                    l++);
                return 0 == o.length && (o = n),
                o
            }
            ))
        }
    }
    ;
    var d = o(669);
    async function c(t) {
        return await d.ajax({
            url: WSURL + "encrypt.php",
            type: "post",
            dataType: "json",
            data: {
                enc: 1,
                data: t
            },
            success: function(t) {
                return t
            },
            complete: function() {}
        })
    }
    function p(t) {
        const e = t.value.replace(/\s+/g, " ").replace(/[^a-zA-Z ]/g, "");
        t.value = e
    }
    function u(t) {
        const e = t.value.replace(/\s+/g, " ").replace(/[^a-zA-Z0-9 ]/g, "");
        t.value = e
    }
    function m(t, e) {
        window.dataLayer = window.dataLayer || [],
        window.dataLayer = window.dataLayer || [],
        window.dataLayer.push({
            event: t,
            ecommerce: e
        })
    }
    function h(t) {
        var e = {};
        let o = 0
          , n = JSON.parse(localStorage.getItem("cart") || "false");
        var a = [];
        if (n) {
            for (var i = 0; i < n.cart.length; i++)
                o += parseFloat(n.cart[i].amount),
                a.push({
                    item_id: n.cart[i].fund_id,
                    item_name: n.cart[i].fund_name,
                    item_brand: n.cart[i].fund_name,
                    item_category: "One off Donation",
                    price: n.cart[i].amount,
                    quantity: "1"
                });
            e.currency = "USD",
            e.value = o.toFixed(2),
            e.items = a,
            m(t, e)
        }
    }
    function f(t) {
        var e = {};
        let o = 0
          , n = JSON.parse(localStorage.getItem("cart") || "false");
        var a = [];
        if (n) {
            for (var i = 0; i < n.cart.length; i++)
                o += parseFloat(n.cart[i].amount),
                a.push({
                    item_id: n.cart[i].fund_id,
                    item_name: n.cart[i].fund_name,
                    item_brand: n.cart[i].fund_name,
                    item_category: "Monthly Donation",
                    price: n.cart[i].amount,
                    quantity: "1"
                });
            e.currency = "USD",
            e.value = o.toFixed(2),
            e.items = a,
            m(t, e)
        }
    }
    function v(t) {
        const e = t.value.replace(/\s+/g, " ").replace(/[^0-9+\-]/g, "");
        t.value = e
    }
    const b = class {
        constructor() {
            this.loadImage = function(t) {
                return function(t) {
                    const e = document.createElement("img");
                    return e.src = t.src,
                    e.width = t.width,
                    e.height = t.height,
                    e.alt = t.alt,
                    Array.isArray(t.classList) && e.classList.add(...t.classList),
                    e
                }(t)
            }
            ,
            this.enc_data = function(t) {
                return c(t)
            }
            ,
            this.getAnalyticsParams = function(t) {
                return function(t) {
                    const e = new URLSearchParams(t);
                    let o, n, a, i, l, r, s = {};
                    return e.has("Products") && (o = e.get("Products"),
                    -1 != o.indexOf(",") && (o = o.split(",")),
                    s.products = o),
                    e.has("Prodamt") && (n = e.get("Prodamt"),
                    s.amount = n),
                    e.has("pspReference") && (a = e.get("pspReference"),
                    s.pspReference = a),
                    e.has("fIds") && (i = e.get("fIds"),
                    -1 != i.indexOf(",") && (i = i.split(",")),
                    s.productIds = i),
                    e.has("bAmt") && (r = e.get("bAmt"),
                    -1 != r.indexOf(",") && (r = r.split(",")),
                    s.bAmt = r),
                    e.has("Giftaid") && (l = e.get("Giftaid"),
                    s.giftaid = l),
                    s
                }(t)
            }
            ,
            this.hideLoader = function() {
                return d("#iframe iframe").removeClass("holds-the-iframe"),
                void d("html, body").animate({
                    scrollTop: d("#iframe").offset().top - 100
                }, 800)
            }
            ,
            this.ValidateAlpha = function(t) {
                return function(t) {
                    if (t) {
                        var e = t.which ? t.which : t.keyCode;
                        return !(e < 65 || e > 90) || !(e < 97 || e > 123) || 32 == e
                    }
                    var o = String.fromCharCode(event.charCode ? event.charCode : event.which);
                    return !!/^[A-z ,.'"-]+$/.test(o)
                }(t)
            }
            ,
            this.validateAlphaInput = function(t) {
                return p(t)
            }
            ,
            this.validateAlphanumericInput = function(t) {
                return u(t)
            }
            ,
            this.ValidatePhone = function(t) {
                return v(t)
            }
            ,
            this.ajaxRequest = function(t, e, o) {
                return async function(t, e, o) {
                    return await d.ajax({
                        url: t,
                        type: e,
                        dataType: "json",
                        data: o,
                        cache: !1,
                        success: function(t) {
                            return t
                        },
                        error: function(t, e) {
                            var o = "";
                            return o = 0 === t.status ? "Not connect.\n Verify Network." : 404 == t.status ? "Requested page not found. [404]" : 500 == t.status ? "Internal Server Error [500]." : "parsererror" === e ? "Requested JSON parse failed." : "timeout" === e ? "Time out error." : "abort" === e ? "Ajax request aborted." : "Uncaught Error.\n" + t.responseText,
                            alert(o),
                            !1
                        }
                    })
                }(t, e, o)
            }
        }
    }
    ;
    var g = o(669);
    const y = new b;
    const S = class {
        render() {
            document.getElementById("home_header").innerHTML = '<div class="container clearfix"> <a href="javascript:void(0);" class="logoMain" id="logoMain"> </a> <div class="dcartWrap d-flex align-items-center"> <div class="dropdown"> <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-shopping-cart"></i> <span class="badge badge-danger"></span> <i className="”fas" fa-check-circle fa-3x”></i> </button> <form id="djCart"> <div class="dropdown-menu dropdown-menu-right donationDropDown" aria-labelledby="dropdownMenuButton"> <h4 id="cart-heading-text">Your donation</h4> <div class="list-dp-projects"> </div> <div class="row row-dpTotal font-bold"> <div class="col-7" id="cart-total-text">Total</div> <div class="col-5 text-right">USD 0</div> </div> </div> </form> </div> </div> </div>';
            ( () => {
                const t = {
                    src: "img/logo-xl.png",
                    width: 169,
                    height: 68,
                    classList: ["img-fluid"]
                }
                  , e = y.loadImage(t);
                g("#logoMain").append(e)
            }
            )()
        }
    }
    ;
    var x = o(669);
    class C {
        constructor() {
            this.initState = function(t, e) {
                return function(t, e) {
                    x(t).length && x(t).state({
                        value: !1
                    }, e)
                }(t, e)
            }
            ,
            this.cleanState = function(t, e) {
                return function(t, e) {
                    x(t).state({}, e)
                }(t, e)
            }
            ,
            this.getCurrentState = function(t, e) {
                return function(t, e) {
                    let o, n;
                    return x(t).length ? (o = x(t).state(),
                    o = o[e],
                    n = o[Object.keys(o)[Object.keys(o).length - 1]],
                    n) : (console.log("Error:", t + " state not found"),
                    !1)
                }(t, e)
            }
            ,
            this.getState = function(t) {
                return function(t) {
                    return x(t).state()
                }(t)
            }
            ,
            this.setState = function(t, e, o) {
                return function(t, e, o) {
                    x(t).state(o, e)
                }(t, e, o)
            }
        }
    }
    var _ = o(669);
    new C;
    function M(t) {
        if (!t)
            return 0;
        let e = "";
        t.cart.forEach((function(t, o) {
            "0" === t.shopId ? e += '<li><div class="row"><div class="col-6">' + t.fund_name + '</div><div class="col-6 text-right">' + objCMS.currency + parseFloat(t.amount).toFixed(2) + "</div></div></li>" : e += '<li><div class="row"><div class="col-6">' + t.fund_name + '</div><div class="col-2 text-right">' + t.shopId + '</div><div class="col-4 text-right">' + objCMS.currency + parseFloat(t.amount).toFixed(2) + "</div></div></li>"
        }
        )),
        _(".step-4-monthly div p:first-child").html(objCMS.step5totalDonationMonthly + " : <span>" + parseFloat(J()).toFixed(2) + objCMS.currency + "</span>"),
        _(".step-4-monthly div ul").html(e),
        _(".step-5-monthly div p:first-child").html(objCMS.step5totalDonationMonthly + " : <span>" + parseFloat(J()).toFixed(2) + objCMS.currency + "</span>"),
        _(".step-5-monthly div ul").html(e)
    }
    function T(t) {
        if (!t)
            return 0;
        let e = "";
        t.cart.forEach((function(t, o) {
            e += '<li><div class="row"><div class="col-6">' + t.fund_name + '</div><div class="col-6 text-right">' + objCMS.currency + parseFloat(t.amount).toFixed(2) + "</div></div></li>"
        }
        )),
        _(".step-5-oneoff div p").html(objCMS.step5totalDonation + " : <span>" + parseFloat(J()).toFixed(2) + objCMS.currency + "</span>"),
        _(".step-5-oneoff div ul").html(e)
    }
    function j() {
        _("#donationWizard > div:first ul li").each((function() {
            _(this).hasClass("last")
        }
        )),
        _(".step-5-oneoff #finishbtn").addClass("disabled"),
        function() {
            let t = JSON.parse(localStorage.getItem("cart") || "false")
              , e = WSURL + "begin-request.php";
            _.ajax({
                type: "POST",
                url: e,
                data: t,
                dataType: "json",
                beforeSend: function(t) {
                    t && t.overrideMimeType && t.overrideMimeType("application/json;charset=UTF-8")
                },
                success: function(t) {
                    "Error"in t && (alert(t.Error),
                    t.redirect_url += "?error=" + t.Error);
                    let e = '<iframe id="iframe_single" class="embed-responsive-item holds-the-iframe" frameborder="0" width="100%" height="570" scrolling="no" src="' + t.redirect_url + '"></iframe>';
                    t.redirect_url && (window.location.href.indexOf("thankyou") > -1 ? window.location.href = t.redirect_url : _("#donationWizard #iframe").html(e)),
                    localStorage.clear()
                },
                error: function(t, e) {
                    0 === t.status || (404 === t.status || (500 === t.status || ("parsererror" === e || ("timeout" === e || ("abort" === e || t.responseText)))))
                }
            })
        }()
    }
    function w() {
        let t = JSON.parse(localStorage.getItem("cart") || "false");
        t.csrf = _("input[name='csrf']").val();
        let e = WSURL + "begin-recursion.php";
        _.ajax({
            type: "POST",
            url: e,
            data: t,
            dataType: "json",
            beforeSend: function(t) {
                t && t.overrideMimeType && t.overrideMimeType("application/json;charset=UTF-8")
            },
            success: function(t) {
                "Error"in t && (alert(t.Error),
                t.redirect_url += "?error=" + t.Error);
                let e = '<iframe id="iframe_monthly" class="embed-responsive-item holds-the-iframe" frameborder="0" width="100%" height="570" scrolling="no" src="' + t.redirect_url + '"></iframe>';
                t.redirect_url && (window.location.href.indexOf("thankyou") > -1 ? window.location.href = t.redirect_url : _("#donationWizard #iframe").html(e)),
                localStorage.clear()
            },
            error: function(t, e) {
                0 === t.status || (404 === t.status || (500 === t.status || ("parsererror" === e || ("timeout" === e || ("abort" === e || t.responseText)))))
            }
        })
    }
    var A = o(669);
    function k() {
        let t = 0;
        t += J(),
        A(".amountConvert #ofSelectAmount").text(parseFloat(t).toFixed(2)),
        A(".amountConvert #ofConAmount").text(parseFloat(t / 100 * 25 + t).toFixed(2)),
        U()
    }
    function I() {
        M(JSON.parse(localStorage.getItem("cart") || "false"))
    }
    const O = '<div class="row"> <div class="qurbaniPopup"> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="qurbani-group-a-title-text">Group A – SGD 90</h4> <p id="qurbani-group-a-des-text">Kenya, Malawi, Mali and Niger.</p> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="number" class="form-control focus-blur validate" name="group_qty[]" id="groupA_qty" onfocus=\'"0"==this.value&&(this.value="")\' onchange="qurbaniCalcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount" name="amount[]" readonly=""> </div> </div> </div> </div> </div> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="qurbani-group-b-title-text">Group B – SGD 150</h4> <p id="qurbani-group-b-des-text">Afghanistan, Bangladesh, Bangladesh (Rohingya Refugees), Ethiopia, Nepal, Pakistan, Somalia, Sri Lanka and Sudan.</p> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="number" class="form-control focus-blur validate" name="group_qty[]" id="groupB_qty" onfocus=\'"0"==this.value&&(this.value="")\' onchange="qurbaniCalcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount1" name="amount[]" readonly=""> </div> </div> </div> </div> </div> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="qurbani-group-c-title-text">Group C – SGD 230</h4> <p id="qurbani-group-c-des-text">Chechnya, Philippines, South Africa, South Sudan and Yemen.</p> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="number" class="form-control focus-blur validate" name="group_qty[]" id="groupC_qty" onfocus=\'"0"==this.value&&(this.value="")\' onchange="qurbaniCalcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount2" name="amount[]" readonly=""> </div> </div> </div> </div> </div> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="qurbani-group-d-title-text">Group D – SGD 330</h4> <p id="qurbani-group-d-des-text">Albania, Bosnia & Herzegovina, Kosovo, Indonesia, Iraq, North Macedonia and Syria.</p> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="number" class="form-control focus-blur validate" name="group_qty[]" id="groupD_qty" onfocus=\'"0"==this.value&&(this.value="")\' onchange="qurbaniCalcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount3" name="amount[]" readonly=""> </div> </div> </div> </div> </div> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="qurbani-group-e-title-text">Group E – SGD 525</h4> <p id="qurbani-group-e-des-text">Jordan, Lebanon and Palestine (Gaza) and Turkiye</p> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="number" class="form-control focus-blur validate" name="group_qty[]" id="groupE_qty" onfocus=\'"0"==this.value&&(this.value="")\' onchange="qurbaniCalcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount4" name="amount[]" readonly=""> </div> </div> </div> </div> </div> </div> </div> <input id="fund_name" name="fund_name[]" type="hidden" value="Qurbani Group A"/> <input id="fund_name1" name="fund_name[]" type="hidden" value="Qurbani Group B"/> <input id="fund_name2" name="fund_name[]" type="hidden" value="Qurbani Group C"/> <input id="fund_name3" name="fund_name[]" type="hidden" value="Qurbani Group D"/> <input id="fund_name4" name="fund_name[]" type="hidden" value="Qurbani Group E"/> <input id="product" name="product[]" type="hidden" value="346"/> <input id="product1" name="product[]" type="hidden" value="347"/> <input id="product2" name="product[]" type="hidden" value="348"/> <input id="product3" name="product[]" type="hidden" value="349"/> <input id="product4" name="product[]" type="hidden" value="1191"/> <div class="boxTotalAmount font-bold h2 mt-3" style="color:red!important">Total: SGD<span id="overallTotalText">0.00</span></div> ';
    const F = '<div class="row"> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="group-a-title-text">Higher Education Scholarship Fund – SGD35</h4> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="text" class="form-control focus-blur" name="group_qty[]" id="groupA_qty" onkeypress="validateValueOrphan(event)" onfocus=\'"0"==this.value&&(this.value="")\' onchange="calcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount" name="amount[]" readonly=""> </div> </div> </div> </div> </div> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="group-b-title-text">Orphan Medical Care – SGD35</h4> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="text" class="form-control focus-blur" name="group_qty[]" id="groupB_qty" onkeypress="validateValueOrphan(event)" onfocus=\'"0"==this.value&&(this.value="")\' onchange="calcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount1" name="amount[]" readonly=""> </div> </div> </div> </div> </div> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="group-c-title-text">Orphan Sponsorship Programme – SGD95</h4> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="text" class="form-control focus-blur" name="group_qty[]" id="groupC_qty" onkeypress="validateValueOrphan(event)" onfocus=\'"0"==this.value&&(this.value="")\' onchange="calcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount2" name="amount[]" readonly=""> </div> </div> </div> </div> </div> <div class="col-12"> <div class="groupWrap"> <div class="topPart col-xs-12 col-sm-6"> <h4 id="group-d-title-text">Family Sponsorship – SGD275</h4> </div> <div class="bottomPart col-xs-12 col-sm-6"> <div class="form-group row"> <label class="col-md-4 col-form-label">Quantity</label> <div class="col-md-8"> <input type="text" class="form-control focus-blur" name="group_qty[]" id="groupD_qty" onkeypress="validateValueOrphan(event)" onfocus=\'"0"==this.value&&(this.value="")\' onchange="calcAmt()"> </div> </div> <div class="form-group row"> <label class="col-md-4 col-form-label">Subtotal SGD</label> <div class="col-md-8"> <input type="text" class="form-control" id="amount3" name="amount[]" readonly=""> </div> </div> </div> </div> </div> </div> <input id="fund_name" name="fund_name[]" type="hidden" value="Higher Education Scholarship Fund"/> <input id="fund_name1" name="fund_name[]" type="hidden" value="Orphan Medical Care"/> <input id="fund_name2" name="fund_name[]" type="hidden" value="Orphan Sponsorship Programme"/> <input id="fund_name3" name="fund_name[]" type="hidden" value="Family Sponsorship"/> <input id="product" name="product[]" type="hidden" value="1189"/> <input id="product1" name="product[]" type="hidden" value="1190"/> <input id="product2" name="product[]" type="hidden" value="1191"/> <input id="product3" name="product[]" type="hidden" value="1192"/> <div class="boxTotalAmount font-bold h2 mt-3" style="color:red!important">Total: SGD<span id="overallTotalText">0.00</span></div> ';
    var N = o(669);
    function D() {
        N("#od-inline-modal").html(O),
        N("html, body").animate({
            scrollTop: N("#od-inline-modal").offset().top - 105
        }, 1e3),
        N("#causeList + br + h4").text(objCMS.FundTextHeading2Single),
        N("#qurbani-group-a-title-text").text(objCMS.qurbaniGroupATitleText),
        N("#qurbani-group-b-title-text").text(objCMS.qurbaniGroupBTitleText),
        N("#qurbani-group-c-title-text").text(objCMS.qurbaniGroupCTitleText),
        N("#qurbani-group-d-title-text").text(objCMS.qurbaniGroupDTitleText),
        N("#qurbani-group-e-title-text").text(objCMS.qurbaniGroupETitleText),
        N("#qurbani-group-a-des-text").text(objCMS.qurbaniGroupADescText),
        N("#qurbani-group-b-des-text").text(objCMS.qurbaniGroupBDescText),
        N("#qurbani-group-c-des-text").text(objCMS.qurbaniGroupCDescText),
        N("#qurbani-group-d-des-text").text(objCMS.qurbaniGroupDDescText),
        N("#qurbani-group-e-des-text").text(objCMS.qurbaniGroupEDescText),
        N("#causeListAmount").html('<input type="radio" id="qurbaniamount" name="odamount"  data-value="Qurbani" class="required">'),
        setQurbaniAmount(objCMS.qurbaniGroupAValueText, objCMS.qurbaniGroupBValueText, objCMS.qurbaniGroupCValueText, objCMS.qurbaniGroupDValueText, objCMS.qurbaniGroupEValueText)
    }
    function q() {
        N("#md-orphan-modal").html(F),
        N("html, body").animate({
            scrollTop: N("#md-orphan-modal").offset().top - 105
        }, 1e3),
        N("#md-products + br + h4").text(objCMS.FundTextHeading2Monthly),
        N("#group-a-title-text").text(objCMS.groupATitleText),
        N("#group-b-title-text").text(objCMS.groupBTitleText),
        N("#group-c-title-text").text(objCMS.groupCTitleText),
        N("#group-d-title-text").text(objCMS.groupDTitleText),
        N("#group-a-des-text").text(objCMS.groupADescriptionText),
        N("#group-b-des-text").text(objCMS.groupBDescriptionText),
        N("#group-c-des-text").text(objCMS.groupCDescriptionText),
        N("#group-d-des-text").text(objCMS.groupDDescriptionText),
        N("#md-amount").html('<input type="radio" id="orphanamount" name="mdamount"  data-value="Orphan Sponsorship" class="required">'),
        setOrphanAmount(objCMS.groupAValueText, objCMS.groupBValueText, objCMS.groupCValueText, objCMS.groupDValueText)
    }
    var P = o(669);
    function L(t) {
        let e;
        cart.amount = 0,
        "single" === dtype ? t == parseInt(qurbaniFundID) ? P("#descriptionAmountOT").text("") : (P(".btnAddCartWrap").removeClass("d-none"),
        P("#fieldOfDonOther").css("display", "none").removeClass("required"),
        P("#fieldOfDonOther-error").css("display", "none"),
        e = selectedAmount,
        cart.amount = parseFloat(e).toFixed(2),
        P("#descriptionAmountOT").text(objCMS.fundValueDynamicTextSingle + " " + e + objCMS.currency + " " + selectedreasontext)) : t == parseInt(orphanFundID) ? P("#descriptionAmountMonthly").text("") : (P(".btnAddCartWrap").addClass("d-none"),
        P("#fieldMonDonOther").css("display", "none").removeClass("required"),
        P("#fieldMonDonOther-error").css("display", "none"),
        e = selectedAmount,
        cart.amount = parseFloat(e).toFixed(2),
        P("#descriptionAmountMonthly").text(objCMS.fundValueDynamicTextMonthly + " " + e + objCMS.currency + " " + selectedreasontext))
    }
    function E(t, e) {
        let o, n = JSON.parse(localStorage.getItem("cart") || "false"), a = n ? n.cart[n.cart.length - 1].fund_id : 0, i = (a && n.cart[n.cart.length - 1].amount,
        a ? "" : "required");
        var l, r, s;
        let d;
        if ("odtype" === e) {
            if (e = "single",
            l = "fieldOfDonOther",
            r = "od",
            s = "causeListAmount",
            o = objCMS.otherAmountTxtSingle,
            t === parseInt(qurbaniFundID))
                return D(),
                P("#" + s).html(""),
                P(".btnAddCartWrap").addClass("d-none"),
                0;
            P("#od-inline-modal").html(""),
            d = objFunds.getSingleFundValuesById(t),
            P("html, body").animate({
                scrollTop: P("#causeListAmount").offset().top - 105
            }, 1e3)
        } else {
            if (e = "monthly",
            l = "fieldMonDonOther",
            r = "md",
            s = "md-amount",
            o = objCMS.otherAmountTxtMonthly,
            t === parseInt(orphanFundID))
                return q(),
                P("#" + s).html(""),
                0;
            P("#md-orphan-modal").html(""),
            d = objFunds.getMonthlyFundValuesById(t),
            P("html, body").animate({
                scrollTop: P("#md-amount").offset().top - 115
            }, 1e3)
        }
        var c = "";
        d.then((t => {
            let e = "";
            for (let o = 0; o < 3; o++)
                e = "" === t[o].reason ? t[o].p_values + " will help save lives" : t[o].reason,
                1 === o ? (c += '<input type="radio" id="' + r + t[o].p_values + '" name="' + r + 'amount" data-value="' + e + '" class="' + i + '" checked="checked" />\n                            <label for="' + r + t[o].p_values + '" data-causeAmount="' + t[o].p_values + '">' + objCMS.currency + t[o].p_values + "</label>",
                selectedAmount = t[o].p_values,
                selectedreasontext = e) : c += '<input type="radio" id="' + r + t[o].p_values + '" name="' + r + 'amount" data-value="' + e + '" class="' + i + '" />\n                            <label for="' + r + t[o].p_values + '" data-causeAmount="' + t[o].p_values + '">' + objCMS.currency + t[o].p_values + "</label>";
            c += '<input type="radio" id="' + r + 'other" name="' + r + 'amount" data-value="other" class="' + i + '"/>',
            c += '<label for="' + r + 'other">' + o + "</label>",
            c += '<input type="number" min="0" id="' + l + '" name="' + l + '" onkeyup="if(this.value<=0) {this.value=\'\'}" class="form-control required" placeholder="' + objCMS.enterAmountTxtSingle + '" >',
            P("#" + s).html(c),
            P("#causeList + br + h4").text(objCMS.FundTextHeading2Single),
            P("#md-products + br + h4").text(objCMS.FundTextHeading2Monthly)
        }
        ))
    }
    var G = o(669);
    function W(t=!1) {
        G("#stepTwoNext p").removeClass("d-none"),
        G("input[name='odtype']").removeClass("required"),
        G("input[name='mdtype']").removeClass("required"),
        G("input[name='odamount']").removeClass("required"),
        G("input[name='mdamount']").removeClass("required"),
        G("#causeListAmount").children().remove(),
        G("#md-amount").children().remove(),
        t || setTimeout((function() {
            G(".dcartWrap .dropdown").hasClass("show") || G("#dropdownMenuButton").click()
        }
        ), 100)
    }
    var B = o(669);
    const H = new C;
    function J() {
        let t = JSON.parse(localStorage.getItem("cart") || "false")
          , e = 0;
        if (t)
            for (let o = 0; o < t.cart.length; o++)
                e += parseFloat(t.cart[o].amount);
        return e
    }
    function R() {
        let t = JSON.parse(localStorage.getItem("cart") || "false")
          , e = 0
          , o = "";
        if (t) {
            for (let n = 0; n < t.cart.length; n++)
                o += '<div class="row row-dpProject">',
                o += '<div class="col-7"><span class="dpProjectName">' + t.cart[n].fund_name + "</span></div>",
                o += '<div class="col-3 text-right"><span class="dpProjectAmount">' + objCMS.currency + t.cart[n].amount + "</span></div>",
                o += '<div class="col-2 text-right delCart" ><a href="javascript:void(0);" ><i data-value="' + t.cart[n].fund_id + '" class="fa fa-trash"></i></a></div>',
                o += "</div>",
                e += parseFloat(t.cart[n].amount);
            e = e.toFixed(2),
            B(".list-dp-projects").html(o),
            B(".row-dpTotal div:nth-child(2)").html(objCMS.currency + e),
            B("#dropdownMenuButton span").text(t.cart.length),
            "single" === t.cart[0].type ? k() : I()
        } else
            B(".row-dpTotal div:nth-child(2)").html(objCMS.currency + "0"),
            B("#dropdownMenuButton span").text(0);
        return B(".btnAddCartWrap").addClass("d-none"),
        B("input[name='odtype']").prop("checked", !1),
        B("input[name='odamount']").prop("checked", !1),
        B("#descriptionAmountOT").text(""),
        B("#causeList + br + h4").text(""),
        W(),
        t
    }
    function z(t) {
        var e, o = {};
        if (!("amount"in t && "fund_id"in t && "fund_name"in t && "type"in t))
            return 0;
        if (!isAdded)
            return 0;
        if (!t.amount || !t.fund_id || !t.fund_name)
            return 0;
        e = [{
            item_id: t.fund_id,
            item_name: t.fund_name,
            item_brand: t.fund_name,
            item_category: "One off Donation",
            price: t.amount,
            quantity: "1"
        }];
        var n = JSON.parse(localStorage.getItem("cart") || "false");
        if (n) {
            for (let e = 0; e < n.cart.length; e++)
                if (n.cart[e].fund_id === t.fund_id)
                    return n.cart[e].amount = (parseFloat(t.amount) + parseFloat(n.cart[e].amount)).toFixed(2),
                    localStorage.setItem("cart", JSON.stringify(n)),
                    H.setState("#djCart", "cart", {
                        value: JSON.stringify(n)
                    }),
                    U(),
                    R(),
                    !0;
            n.cart.push(t),
            localStorage.setItem("cart", JSON.stringify(n)),
            H.setState("#djCart", "cart", {
                value: JSON.stringify(n)
            })
        } else
            localStorage.setItem("cart", JSON.stringify({
                cart: new Array(t)
            })),
            H.setState("#djCart", "cart", {
                value: JSON.stringify({
                    cart: new Array(t)
                })
            });
        return U(),
        R(),
        o.currency = "USD",
        o.value = t.amount,
        o.items = e,
        m("add_to_cart", o),
        !0
    }
    function V(t, e=0) {
        var o = []
          , n = {};
        if (e) {
            let e = []
              , n = !0;
            if (!(t.length > 0))
                return 0;
            for (let a = 0; a < t.length; a++)
                "amount"in t[a] && "fund_id"in t[a] && "fund_name"in t[a] && "type"in t[a] || (n = !1),
                (t[a].amount <= 0 || t[a].fund_id <= 0 || !t[a].fund_name || !t[a].amount) && (n = !1),
                o = [{
                    item_id: t.fund_id,
                    item_name: t.fund_name,
                    item_brand: t.fund_name,
                    item_category: "Monthly Donation",
                    price: t.amount,
                    quantity: "1"
                }],
                n && e.push(t[a]),
                n = !0;
            t = e
        } else {
            if (!("amount"in t && "fund_id"in t && "fund_name"in t && "type"in t))
                return 0;
            if (t.amount <= 0 || t.fund_id <= 0 || !t.fund_name || !t.amount)
                return 0;
            o = [{
                item_id: t.fund_id,
                item_name: t.fund_name,
                item_brand: t.fund_name,
                item_category: "Monthly Donation",
                price: t.amount,
                quantity: "1"
            }]
        }
        let a = JSON.parse(localStorage.getItem("cart") || "false");
        return e ? a ? (a.cart = t,
        localStorage.setItem("cart", JSON.stringify(a)),
        H.setState("#monthlyCart", "cart", {
            value: JSON.stringify(a)
        })) : (localStorage.setItem("cart", JSON.stringify({
            cart: t
        })),
        H.setState("#monthlyCart", "cart", {
            value: JSON.stringify({
                cart: t
            })
        })) : a ? (a.cart = new Array(t),
        localStorage.setItem("cart", JSON.stringify(a)),
        H.setState("#monthlyCart", "cart", {
            value: JSON.stringify(a)
        })) : (localStorage.setItem("cart", JSON.stringify({
            cart: new Array(t)
        })),
        H.setState("#monthlyCart", "cart", {
            value: JSON.stringify({
                cart: new Array(t)
            })
        })),
        n.currency = "USD",
        n.value = t.amount,
        n.items = o,
        m("add_to_cart", n),
        !0
    }
    function U() {
        let t = parseFloat(J())
          , e = .014 * parseFloat(t)
          , o = objCMS.trasnfeetext.replace("amountfee@", e.toFixed(2) + objCMS.currency);
        B("#trasnfee + label").text(o)
    }
    var K = o(669);
    const Y = new C;
    var Q = o(669);
    function Z(t) {
        let e = "<option value='' disabled=''>Select donation amount</option>";
        for (let o = 0; o < t.values.length; o++)
            e += "<option value='" + t.values[o].d_values + "'>" + t.values[o].d_text + "</option>";
        if (t) {
            let o = "";
            o = t.img_path ? "../src/core/assets/media/popup/" + t.img_path : "assets/img/donation-popup.jpg",
            Q("#wizardModal img").attr("src", o),
            Q("#wizardModal .txt h2").text(t.heading_text),
            Q("#wizardModal .txt p").text(t.description),
            Q("#wizardModal .txt select").html(e),
            Q("#wizardModal .txt input[name=modal_fund_name]").val(t.fund_name),
            Q("#wizardModal .txt input[name=modal_fund_id]").val(t.fund_id),
            Q("#wizardModal .txt #cancelDonate").text(t.cancle_btn_txt),
            Q("#wizardModal .txt #popupDonate").text(t.proceed_btn_txt)
        }
    }
    var X = o(669);
    function $() {
        let t = JSON.parse(localStorage.getItem("cart") || "false")
          , e = (t ? t.cart[t.cart.length - 1].fund_id : 0) ? "" : "required"
          , o = "";
        var n = {}
          , a = [];
        name = "odtype",
        o = objFunds.getFundsSingle().then((t => {
            let o = ""
              , n = "";
            for (let i = 0; i < t.length; i++) {
                a.push({
                    item_id: t[i].id,
                    item_name: t[i].name,
                    item_brand: t[i].name,
                    item_category: "One off Donation",
                    item_list_name: "One off Donation",
                    quantity: "1"
                });
                let l = "";
                "" === t[i].external_link || null === t[i].external_link ? n = 'data-type="odtype"' : (n = ' data-type="odtype" ',
                n += ' data-external-link="' + t[i].external_link + '" '),
                o += '<input type="radio" ' + n + ' id="' + t[i].id + '" name="' + name + '" data-value="' + t[i].id + '" class="' + e + '" /><label for="' + t[i].id + '" data-cause="' + t[i].name + '" onclick="' + l + '" >' + t[i].name + "</label>"
            }
            return X("#causeList").removeClass("holds-the-iframe"),
            X("#causeList").html(o),
            o
        }
        )),
        n.item_list_id = "oneoff",
        n.item_list_name = "One off Donation",
        n.items = a,
        m("view_item_list", n)
    }
    function tt() {
        let t = JSON.parse(localStorage.getItem("cart") || "false")
          , e = (t ? t.cart[t.cart.length - 1].fund_id : 0) ? "" : "required"
          , o = "";
        var n = {}
          , a = [];
        let i;
        name = "mdtype",
        objFunds.getFundsMonthly().then((t => {
            for (let n = 0; n < t.length; n++)
                a.push({
                    item_id: t[n].id,
                    item_name: t[n].name,
                    item_brand: t[n].name,
                    item_category: "Monthly Donation",
                    item_list_name: "One off Donation",
                    quantity: "1"
                }),
                "" === t[n].external_link || null === t[n].external_link ? i = 'data-type="mdtype"' : (i = ' data-type="mdtype" ',
                i += ' data-external-link="' + t[n].external_link + '" '),
                o += '<input type="radio" ' + i + ' id="' + t[n].id + '" name="' + name + '" data-value="' + t[n].id + '" class="' + e + '" /><label for="' + t[n].id + '" data-cause="' + t[n].name + '" onclick="' + undefined + '" >' + t[n].name + "</label>";
            X("#md-products").removeClass("holds-the-iframe"),
            X("#md-products").html(o)
        }
        )),
        n.item_list_id = "monthly",
        n.item_list_name = "Monthly Donations",
        n.items = a,
        m("view_item_list", n)
    }
    var et = o(669);
    const ot = new C;
    class nt {
        constructor() {
            this.generateOptionsForTitle = function() {
                return function() {
                    var t = document.getElementById("monthly-title")
                      , e = document.getElementById("single-title");
                    function o(t, e, o) {
                        var n = document.createElement("option");
                        n.text = e,
                        n.value = o,
                        t.add(n)
                    }
                    objCMS.SingleFormTitleOption1 && (o(t, objCMS.SingleFormTitleOption1, objCMS.SingleFormTitleOption1),
                    o(e, objCMS.SingleFormTitleOption1, objCMS.SingleFormTitleOption1)),
                    objCMS.SingleFormTitleOption2 && (o(t, objCMS.SingleFormTitleOption2, objCMS.SingleFormTitleOption2),
                    o(e, objCMS.SingleFormTitleOption2, objCMS.SingleFormTitleOption2)),
                    objCMS.SingleFormTitleOption3 && (o(t, objCMS.SingleFormTitleOption3, objCMS.SingleFormTitleOption3),
                    o(e, objCMS.SingleFormTitleOption3, objCMS.SingleFormTitleOption3))
                }()
            }
            ,
            this.setSingleTemplate = function() {
                return function() {
                    ot.initState("#personalInfo", "personalInfo"),
                    et(".step-4-monthly.secForm").hide(),
                    et(".step-4-oneoff.secForm").show(),
                    et(".giftAidSection .step-3-monthly").hide(),
                    et(".giftAidSection .step-3-oneoff").show(),
                    et("#single-giftaid-image").attr("src", generalMediaPath + objCMS.giftAidImage),
                    et("#tax-payer-heading").text(objCMS.taxPayerTxtSingle),
                    et("#giftchekboxoneoff+label").text(objCMS.giftAidLabelTxtSingle),
                    et("#agreementTxtSingle").text(objCMS.agreementTxtSingle),
                    et("#user-details-single-heading").text(objCMS.step4HeadingTxt1Single),
                    et("#KIT-heading-single").text(objCMS.step4HeadingTxt2Single),
                    et("#KIT-text-single").text(objCMS.KITTxtSingle),
                    et("#contact-single-text").html(objCMS.contactTxtSingle);
                    let t = '<span class="text-blue"> *</span>';
                    et("select[name='single_title']").prev("label").html(objCMS.TitleLabelSingle + t),
                    et("input[name='single_fname']").prev("label").html(objCMS.FirstNameLabelSingle + t),
                    et("input[name='single_fname']").attr("placeholder", objCMS.FirstNamePlaceholderSingle),
                    et("input[name='single_lname']").prev("label").html(objCMS.LastNameLabelSingle + t),
                    et("input[name='single_lname']").attr("placeholder", objCMS.LastNamePlaceholderSingle),
                    et("input[name='single_email']").prev("label").html(objCMS.EmailSingleLabel + t),
                    et("input[name='single_email']").attr("placeholder", objCMS.EmailSinglePlaceHolder),
                    et("input[name='single_pno']").prev("label").html(objCMS.ContactSingleLabel),
                    et("input[name='single_pno']").attr("placeholder", objCMS.ContactSinglePlaceHolder),
                    et("input[name='single_postcode']").prev("label").html(objCMS.PostCodeSingleLabel + t),
                    et("input[name='single_postcode']").attr("placeholder", objCMS.PostCodeSinglePlaceHolder),
                    et("input[name='single_address']").prev("label").html(objCMS.AddressSingleLabel + t),
                    et("input[name='single_address']").attr("placeholder", objCMS.AddressSinglePlaceHolder),
                    et("input[name='single_address2']").prev("label").html(objCMS.Address2SingleLabel),
                    et("input[name='single_address2']").attr("placeholder", objCMS.Address2SinglePlaceHolder),
                    et("input[name='single_town']").prev("label").html(objCMS.CityFieldLabelSingle + t),
                    et("input[name='single_town']").attr("placeholder", objCMS.CitySinglePlaceHolder),
                    et("input[name='postcode_lookup']").prev("label").html(objCMS.searchAddressLabel + t),
                    et("input[name='postcode_lookup']").attr("placeholder", objCMS.placholderSearchAddressTxt),
                    et("select[name='single_country']").prev("label").html(objCMS.CountryFieldLabelSingle + t),
                    et("select[name='single_about_us']").prev("label").html(objCMS.selectAboutLabelTxt),
                    et("input[name='single_check_email']").next("label").text(objCMS.KITEmailLabelTxt),
                    et("input[name='single_check_tele']").next("label").text(objCMS.KITTeleLabelTxt),
                    et("input[name='single_check_sms']").next("label").text(objCMS.KITSMSLabelTxt),
                    et(".paymentSection .step-5-monthly").hide(),
                    et(".paymentSection .step-5-oneoff").show("fast", (function() {
                        U(),
                        et("#payment-heading-text-single").text(objCMS.step5HeadingTxtSingle),
                        grecaptcha.ready(( () => {
                            grecaptcha.render("recaptcha-container", {
                                sitekey: "6Le1GwwqAAAAAO5fJaxYqAOrTGiV2lwQjVYVqvBz",
                                callback: function(t) {}
                            })
                        }
                        )),
                        et(".step-5-oneoff #finishbtn").text(objCMS.donateButtonTxt)
                    }
                    )),
                    et(".fundsloaded .step-2-monthly").hide(),
                    et(".fundsloaded .step-2-oneoff").show("fast", (function() {
                        $(),
                        et("#single-fund-heading-1").text(objCMS.FundTextHeading1Single),
                        et("#cartButton").text(objCMS.addDonateButtonTextSingle),
                        et("#stepTwoNext p").html(et("#stepTwoNext p").html(objCMS.addMoretxtSingle).text())
                    }
                    )),
                    et(".btnAddCartWrap").addClass("d-none"),
                    et("#cart-heading-text").text(objCMS.cartHeading),
                    et("#cart-total-text").text(objCMS.cartTotalTxt)
                }()
            }
            ,
            this.setMonthlyTemplate = function() {
                return function() {
                    ot.initState("#personalInfo", "personalInfo"),
                    ot.initState("#monthlyCart", "cart"),
                    et(".step-4-monthly.secForm").show(),
                    et(".step-4-oneoff.secForm").hide(),
                    et(".giftAidSection .step-3-oneoff").hide(),
                    et(".giftAidSection .step-3-monthly").show(),
                    I(),
                    et("#monthly-giftaid-image").attr("src", generalMediaPath + objCMS.giftAidImage),
                    et("#tax-payer-heading-monthly").text(objCMS.taxPayerTxtMonthly),
                    et("#giftchekboxmonthly+label").text(objCMS.giftAidLabelTxtMonthly),
                    et("#agreementTxtSingle").text(objCMS.agreementTxtMonthly),
                    et(".step-4-monthly secForm").show(),
                    et(".step-4-oneoff secForm").hide(),
                    et("#user-details-monthly-heading").text(objCMS.step4HeadingTxt1Monthly),
                    et("#KIT-heading-monthly").text(objCMS.step4HeadingTxt2Monthly),
                    et("#KIT-text-monthly").text(objCMS.KITTxtMonthly),
                    et("#contact-single-text").html(objCMS.contactTxtSingle);
                    let t = '<span class="text-blue"> *</span>';
                    et("select[name='monthly_title']").prev("label").html(objCMS.TitleLabelSingle + t),
                    et("input[name='monthly_fname']").prev("label").html(objCMS.FirstNameLabelSingle + t),
                    et("input[name='monthly_fname']").attr("placeholder", objCMS.FirstNamePlaceholderSingle),
                    et("input[name='monthly_lname']").prev("label").html(objCMS.LastNameLabelSingle + t),
                    et("input[name='monthly_lname']").attr("placeholder", objCMS.LastNamePlaceholderSingle),
                    et("input[name='monthly_email']").prev("label").html(objCMS.EmailSingleLabel + t),
                    et("input[name='monthly_email']").attr("placeholder", objCMS.EmailSinglePlaceHolder),
                    et("input[name='monthly_pno']").prev("label").html(objCMS.ContactSingleLabel),
                    et("input[name='monthly_pno']").attr("placeholder", objCMS.ContactSinglePlaceHolder),
                    et("input[name='monthly_postcode']").prev("label").html(objCMS.PostCodeSingleLabel + t),
                    et("input[name='monthly_postcode']").attr("placeholder", objCMS.PostCodeSinglePlaceHolder),
                    et("input[name='monthly_address']").prev("label").html(objCMS.AddressSingleLabel + t),
                    et("input[name='monthly_address']").attr("placeholder", objCMS.AddressSinglePlaceHolder),
                    et("input[name='monthly_homeno']").prev("label").html(objCMS.NLabel + t),
                    et("input[name='monthly_homeno']").attr("placeholder", objCMS.NPlaceHolder),
                    et("input[name='monthly_address2']").prev("label").html(objCMS.Address2SingleLabel),
                    et("input[name='monthly_address2']").attr("placeholder", objCMS.Address2SinglePlaceHolder),
                    et("input[name='monthly_town']").prev("label").html(objCMS.CityFieldLabelSingle + t),
                    et("input[name='monthly_town']").attr("placeholder", objCMS.CitySinglePlaceHolder),
                    et("input[name='postcode_lookup']").prev("label").html(objCMS.searchAddressLabel + t),
                    et("input[name='postcode_lookup']").attr("placeholder", objCMS.placholderSearchAddressTxt),
                    et("input[name='monthly_provincia']").prev("label").html(objCMS.ProvinciaLabel + t),
                    et("input[name='monthly_provincia']").attr("placeholder", objCMS.ProvinciaPlaceHolder),
                    et("select[name='monthly_country']").prev("label").html(objCMS.CountryFieldLabelSingle + t),
                    et("select[name='monthly_about_us']").prev("label").html(objCMS.selectAboutLabelTxt),
                    et("input[name='monthly_check_email']").next("label").text(objCMS.KITEmailLabelTxt),
                    et("input[name='monthly_check_tele']").next("label").text(objCMS.KITTeleLabelTxt),
                    et("input[name='monthly_check_sms']").next("label").text(objCMS.KITSMSLabelTxt),
                    I(),
                    et(".paymentSection .step-5-oneoff").hide("fast"),
                    et(".paymentSection .step-5-monthly").show("fast", (function() {
                        U(),
                        et("#payment-heading-text-monthly").text(objCMS.step5HeadingTxtMonthly),
                        grecaptcha.ready(( () => {
                            grecaptcha.render("recaptcha-container-monthly", {
                                sitekey: "6Le1GwwqAAAAAO5fJaxYqAOrTGiV2lwQjVYVqvBz",
                                callback: function(t) {}
                            })
                        }
                        )),
                        et("#finishbuttonText").text(objCMS.donateButtonTxt)
                    }
                    )),
                    et(".fundsloaded .step-2-oneoff").hide(),
                    et(".fundsloaded .step-2-monthly").show("fast", (function() {
                        tt(),
                        et("#monthly-fund-heading-1").text(objCMS.FundTextHeading1Monthly)
                    }
                    )),
                    et(".btnAddCartWrap").addClass("d-none")
                }()
            }
        }
    }
    var at = o(669);
    const it = new nt
      , lt = new b;
    function rt() {
        at("#donationWizard > div:first ul li").each((function() {
            at(this).hasClass("first") || at(this).hasClass("current") || (at(this).addClass("disabled"),
            at(this).removeClass("done"))
        }
        ))
    }
    const st = class {
        constructor() {
            this.init = function() {
                return at('#selectDtype input[type="radio"]').on("click", (function(t) {
                    this.tempCart = JSON.parse(localStorage.getItem("cart") || "false"),
                    "monthly" === at(this).attr("value") && (at('#selectDtype input[type="radio"]').state({
                        value: "monthly"
                    }, "dtype"),
                    it.setMonthlyTemplate(),
                    dtype = "monthly",
                    at(".step-2-monthly").css("display", "block"),
                    at(".step-4-monthly").css("display", "block"),
                    at(".step-5-monthly").css("display", "block"),
                    at(".step-2-oneoff").css("display", "none"),
                    at(".step-4-oneoff").css("display", "none"),
                    at(".step-5-oneoff").css("display", "none"),
                    this.tempCart && "single" === this.tempCart.cart[0].type && (localStorage.clear(),
                    R()),
                    0 === at("#donationWizard").steps("getCurrentIndex") && at("#donationWizard").steps("next")),
                    "oneoff" === at(this).attr("value") && (at('#selectDtype input[type="radio"]').state({
                        value: "single"
                    }, "dtype"),
                    it.setSingleTemplate(),
                    dtype = "single",
                    at(".step-2-oneoff").css("display", "block"),
                    at(".step-4-oneoff").css("display", "block"),
                    at(".step-5-oneoff").css("display", "block"),
                    at(".step-2-monthly").css("display", "none"),
                    at(".step-4-monthly").css("display", "none"),
                    at(".step-5-monthly").css("display", "none"),
                    this.tempCart && "monthly" === this.tempCart.cart[0].type && (localStorage.clear(),
                    R()),
                    0 === at("#donationWizard").steps("getCurrentIndex") && at("#donationWizard").steps("next")),
                    rt()
                }
                )),
                void at('#selectDtype input[type="radio"]').on("state:dtype", (function(t, e, o) {
                    t.preventDefault()
                }
                ))
            }
            ,
            this.stepsDisable = function() {
                return rt()
            }
        }
        render() {
            at("#home_content_step1").html('<h1 class="text-center text-blue mb-4 font-600">MAKE YOUR DONATION</h1> <div class="text-center mb-5" id="dv_bannerImage"> </div> <div id="selectDtype" class="btn-radio-wrap mb-4"> <input type="radio" value="monthly" name="dtype" id="dmonthly" class="required"> <label for="dmonthly">Monthly</label> <input type="radio" value="oneoff" name="dtype" id="doneoff" class="required" checked="checked"> <label for="doneoff">One-Off</label> </div> '),
            ( () => {
                const t = {
                    src: "img/banner.png",
                    width: 606,
                    height: 220,
                    classList: ["img-fluid"]
                }
                  , e = lt.loadImage(t);
                at("#dv_bannerImage").append(e)
            }
            )()
        }
    }
    ;
    const dt = '<option value="">اختر دولة</option> <option value="AW">آروبا</option> <option value="AZ">أذربيجان</option> <option value="AM">أرمينيا</option> <option value="ES">أسبانيا</option> <option value="AU">أستراليا</option> <option value="AF">أفغانستان</option> <option value="AL">ألبانيا</option> <option value="DE">ألمانيا</option> <option value="AG">أنتيجوا وبربودا</option> <option value="AO">أنجولا</option> <option value="AI">أنجويلا</option> <option value="AD">أندورا</option> <option value="UY">أورجواي</option> <option value="UZ">أوزبكستان</option> <option value="UG">أوغندا</option> <option value="UA">أوكرانيا</option> <option value="IE">أيرلندا</option> <option value="IS">أيسلندا</option> <option value="ET">اثيوبيا</option> <option value="ER">اريتريا</option> <option value="EE">استونيا</option> <option value="IL">اسرائيل</option> <option value="AR">الأرجنتين</option> <option value="JO">الأردن</option> <option value="EC">الاكوادور</option> <option value="AE">الامارات العربية المتحدة</option> <option value="BS">الباهاما</option> <option value="BH">البحرين</option> <option value="BR">البرازيل</option> <option value="PT">البرتغال</option> <option value="BA">البوسنة والهرسك</option> <option value="GA">الجابون</option> <option value="ME">الجبل الأسود</option> <option value="DZ">الجزائر</option> <option value="DK">الدانمرك</option> <option value="CV">الرأس الأخضر</option> <option value="SV">السلفادور</option> <option value="SN">السنغال</option> <option value="SD">السودان</option> <option value="SE">السويد</option> <option value="EH">الصحراء الغربية</option> <option value="SO">الصومال</option> <option value="CN">الصين</option> <option value="IQ">العراق</option> <option value="VA">الفاتيكان</option> <option value="PH">الفيلبين</option> <option value="AQ">القطب الجنوبي</option> <option value="CM">الكاميرون</option> <option value="CG">الكونغو - برازافيل</option> <option value="KW">الكويت</option> <option value="HU">المجر</option> <option value="IO">المحيط الهندي البريطاني</option> <option value="MA">المغرب</option> <option value="TF">المقاطعات الجنوبية الفرنسية</option> <option value="MX">المكسيك</option> <option value="SA">المملكة العربية السعودية</option> <option value="GB">المملكة المتحدة</option> <option value="NO">النرويج</option> <option value="AT">النمسا</option> <option value="NE">النيجر</option> <option value="IN">الهند</option> <option value="US">الولايات المتحدة الأمريكية</option> <option value="JP">اليابان</option> <option value="YE">اليمن</option> <option value="GR">اليونان</option> <option value="ID">اندونيسيا</option> <option value="IR">ايران</option> <option value="IT">ايطاليا</option> <option value="PG">بابوا غينيا الجديدة</option> <option value="PY">باراجواي</option> <option value="PK">باكستان</option> <option value="PW">بالاو</option> <option value="BW">بتسوانا</option> <option value="PN">بتكايرن</option> <option value="BB">بربادوس</option> <option value="BM">برمودا</option> <option value="BN">بروناي</option> <option value="BE">بلجيكا</option> <option value="BG">بلغاريا</option> <option value="BZ">بليز</option> <option value="BD">بنجلاديش</option> <option value="PA">بنما</option> <option value="BJ">بنين</option> <option value="BT">بوتان</option> <option value="PR">بورتوريكو</option> <option value="BF">بوركينا فاسو</option> <option value="BI">بوروندي</option> <option value="PL">بولندا</option> <option value="BO">بوليفيا</option> <option value="PF">بولينيزيا الفرنسية</option> <option value="PE">بيرو</option> <option value="TZ">تانزانيا</option> <option value="TH">تايلند</option> <option value="TW">تايوان</option> <option value="TM">تركمانستان</option> <option value="TR">تركيا</option> <option value="TT">ترينيداد وتوباغو</option> <option value="TD">تشاد</option> <option value="TG">توجو</option> <option value="TV">توفالو</option> <option value="TK">توكيلو</option> <option value="TO">تونجا</option> <option value="TN">تونس</option> <option value="TL">تيمور الشرقية</option> <option value="JM">جامايكا</option> <option value="GI">جبل طارق</option> <option value="GD">جرينادا</option> <option value="GL">جرينلاند</option> <option value="AX">جزر أولان</option> <option value="AN">جزر الأنتيل الهولندية</option> <option value="TC">جزر الترك وجايكوس</option> <option value="KM">جزر القمر</option> <option value="KY">جزر الكايمن</option> <option value="MH">جزر المارشال</option> <option value="MV">جزر الملديف</option> <option value="UM">جزر الولايات المتحدة البعيدة الصغيرة</option> <option value="SB">جزر سليمان</option> <option value="FO">جزر فارو</option> <option value="VI">جزر فرجين الأمريكية</option> <option value="VG">جزر فرجين البريطانية</option> <option value="FK">جزر فوكلاند</option> <option value="CK">جزر كوك</option> <option value="CC">جزر كوكوس</option> <option value="MP">جزر ماريانا الشمالية</option> <option value="WF">جزر والس وفوتونا</option> <option value="CX">جزيرة الكريسماس</option> <option value="BV">جزيرة بوفيه</option> <option value="IM">جزيرة مان</option> <option value="NF">جزيرة نورفوك</option> <option value="HM">جزيرة هيرد وماكدونالد</option> <option value="CF">جمهورية افريقيا الوسطى</option> <option value="CZ">جمهورية التشيك</option> <option value="DO">جمهورية الدومينيك</option> <option value="CD">جمهورية الكونغو الديمقراطية</option> <option value="ZA">جمهورية جنوب افريقيا</option> <option value="GT">جواتيمالا</option> <option value="GP">جوادلوب</option> <option value="GU">جوام</option> <option value="GE">جورجيا</option> <option value="GS">جورجيا الجنوبية وجزر ساندويتش الجنوبية</option> <option value="DJ">جيبوتي</option> <option value="JE">جيرسي</option> <option value="DM">دومينيكا</option> <option value="RW">رواندا</option> <option value="RU">روسيا</option> <option value="BY">روسيا البيضاء</option> <option value="RO">رومانيا</option> <option value="RE">روينيون</option> <option value="ZM">زامبيا</option> <option value="ZW">زيمبابوي</option> <option value="CI">ساحل العاج</option> <option value="WS">ساموا</option> <option value="AS">ساموا الأمريكية</option> <option value="SM">سان مارينو</option> <option value="PM">سانت بيير وميكولون</option> <option value="VC">سانت فنسنت وغرنادين</option> <option value="KN">سانت كيتس ونيفيس</option> <option value="LC">سانت لوسيا</option> <option value="MF">سانت مارتين</option> <option value="SH">سانت هيلنا</option> <option value="ST">ساو تومي وبرينسيبي</option> <option value="LK">سريلانكا</option> <option value="SJ">سفالبارد وجان مايان</option> <option value="SK">سلوفاكيا</option> <option value="SI">سلوفينيا</option> <option value="SG">سنغافورة</option> <option value="SZ">سوازيلاند</option> <option value="SY">سوريا</option> <option value="SR">سورينام</option> <option value="CH">سويسرا</option> <option value="SL">سيراليون</option> <option value="SC">سيشل</option> <option value="CL">شيلي</option> <option value="RS">صربيا</option> <option value="TJ">طاجكستان</option> <option value="OM">عمان</option> <option value="GM">غامبيا</option> <option value="GH">غانا</option> <option value="GF">غويانا</option> <option value="GY">غيانا</option> <option value="GN">غينيا</option> <option value="GQ">غينيا الاستوائية</option> <option value="GW">غينيا بيساو</option> <option value="VU">فانواتو</option> <option value="FR">فرنسا</option> <option value="PS">فلسطين</option> <option value="VE">فنزويلا</option> <option value="FI">فنلندا</option> <option value="VN">فيتنام</option> <option value="FJ">فيجي</option> <option value="CY">قبرص</option> <option value="KG">قرغيزستان</option> <option value="QA">قطر</option> <option value="KZ">كازاخستان</option> <option value="NC">كاليدونيا الجديدة</option> <option value="HR">كرواتيا</option> <option value="KH">كمبوديا</option> <option value="CA">كندا</option> <option value="CU">كوبا</option> <option value="KR">كوريا الجنوبية</option> <option value="KP">كوريا الشمالية</option> <option value="CR">كوستاريكا</option> <option value="CO">كولومبيا</option> <option value="KI">كيريباتي</option> <option value="KE">كينيا</option> <option value="LV">لاتفيا</option> <option value="LA">لاوس</option> <option value="LB">لبنان</option> <option value="LU">لوكسمبورج</option> <option value="LY">ليبيا</option> <option value="LR">ليبيريا</option> <option value="LT">ليتوانيا</option> <option value="LI">ليختنشتاين</option> <option value="LS">ليسوتو</option> <option value="MQ">مارتينيك</option> <option value="MO">ماكاو الصينية</option> <option value="MT">مالطا</option> <option value="ML">مالي</option> <option value="MY">ماليزيا</option> <option value="YT">مايوت</option> <option value="MG">مدغشقر</option> <option value="EG">مصر</option> <option value="MK">مقدونيا</option> <option value="MW">ملاوي</option> <option value="MN">منغوليا</option> <option value="MR">موريتانيا</option> <option value="MU">موريشيوس</option> <option value="MZ">موزمبيق</option> <option value="MD">مولدافيا</option> <option value="MC">موناكو</option> <option value="MS">مونتسرات</option> <option value="MM">ميانمار</option> <option value="FM">ميكرونيزيا</option> <option value="NA">ناميبيا</option> <option value="NR">نورو</option> <option value="NP">نيبال</option> <option value="NG">نيجيريا</option> <option value="NI">نيكاراجوا</option> <option value="NZ">نيوزيلاندا</option> <option value="NU">نيوي</option> <option value="HT">هايتي</option> <option value="HN">هندوراس</option> <option value="NL">هولندا</option> <option value="HK">هونج كونج الصينية</option>';
    const ct = '<option value="">اختر ولاية في الولايات المتحدة</option> <option value="AL">ألاباما</option> <option value="AK">ألاسكا</option> <option value="AZ">أريزونا</option> <option value="AR">أركنساس</option> <option value="CA">كاليفورنيا</option> <option value="CO">كولورادو</option> <option value="CT">كونيتيكت</option> <option value="DE">ديلاوير</option> <option value="DC">واشنطن العاصمة</option> <option value="FL">فلوريدا</option> <option value="GA">جورجيا</option> <option value="HI">هاواي</option> <option value="ID">أيداهو</option> <option value="IL">إلينوي</option> <option value="IN">إنديانا</option> <option value="IA">آيوا</option> <option value="KS">كانساس</option> <option value="KY">كنتاكي</option> <option value="LA">لويزيانا</option> <option value="ME">مين</option> <option value="MD">ماريلاند</option> <option value="MA">ماساتشوستس</option> <option value="MI">ميتشيغان</option> <option value="MN">مينيسوتا</option> <option value="MS">مسيسيبي</option> <option value="MO">ميزوري</option> <option value="MT">مونتانا</option> <option value="NE">نبراسكا</option> <option value="NV">نيفادا</option> <option value="NH">نيوهامبشير</option> <option value="NJ">نيوجيرسي</option> <option value="NM">نيومكسيكو</option> <option value="NY">نيويورك</option> <option value="NC">كارولاينا الشمالية</option> <option value="ND">داكوتا الشمالية</option> <option value="OH">أوهايو</option> <option value="OK">أوكلاهوما</option> <option value="OR">أوريغون</option> <option value="PA">بنسلفانيا</option> <option value="RI">جزيرة رود</option> <option value="SC">كارولاينا الجنوبية</option> <option value="SD">داكوتا الجنوبية</option> <option value="TN">تينيسي</option> <option value="TX">تكساس</option> <option value="UT">يوتا</option> <option value="VT">فيرمونت</option> <option value="VA">فيرجينيا</option> <option value="WA">واشنطن</option> <option value="WV">فيرجينيا الغربية</option> <option value="WI">ويسكونسن</option> <option value="WY">وايومنغ</option>';
    const pt = '<option value="">اختر من فضلك</option> <option value="البريد الإلكتروني">البريد الإلكتروني</option> <option value="مواقع البحث">مواقع البحث</option> <option value="وسائل التواصل الإجتماعي">وسائل التواصل الإجتماعي </option> <option value="موقع الإغاثة الإسلامية">موقع الإغاثة الإسلامية</option> <option value="صديق/ قريب">صديق/ قريب</option> <option value="Other">اخرى</option>';
    function ut(t) {
        var e = t.checked ? "1" : "0";
        let o = JSON.parse(localStorage.getItem("cart") || "false");
        o.tax_payer = e,
        localStorage.setItem("cart", JSON.stringify(o))
    }
    var mt = o(669);
    const ht = class {
        constructor() {
            this.init = function() {
                return mt("#ddlcountry_single").html(dt),
                mt("#single_about_us").html(pt),
                mt("#monthly_about_us").html(pt),
                mt("#ddlcountry_monthly").html(dt),
                mt("#ddlstate_monthly").html(ct),
                mt("#ddlstate_single").html(ct),
                mt(document).on("click", "#donationWizard-t-2 span", (function() {
                    let t = JSON.parse(localStorage.getItem("cart") || "false");
                    isAdded = !1,
                    t ? "single" === t.cart[0].type ? T(t) : M(t) : alert("Cart is empty")
                }
                )),
                mt(document).on("click", "#giftchekboxoneoff", (function() {
                    ut(this)
                }
                )),
                mt(document).on("click", "#giftchekboxmonthly", (function() {
                    ut(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='single_fname']", (function(t) {
                    return p(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='single_lname']", (function(t) {
                    return p(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='single_address']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='single_address2']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='single_postcode']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='single_town']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='monthly_fname']", (function(t) {
                    return p(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='monthly_lname']", (function(t) {
                    return p(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='monthly_address']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='monthly_address2']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='monthly_postcode']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='monthly_town']", (function(t) {
                    return u(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='single_pno']", (function(t) {
                    return v(this)
                }
                )),
                mt(document).on("input", "#personalInfo input[name='monthly_pno']", (function(t) {
                    return v(this)
                }
                )),
                mt(document).on("change", "#ddlcountry_monthly", (function() {
                    "US" === mt(this).val() ? mt("#dependentMonthlyState").removeClass("d-none") : mt("#dependentMonthlyState").addClass("d-none")
                }
                )),
                void mt(document).on("change", "#ddlcountry_single", (function() {
                    "US" === mt(this).val() ? mt("#dependentSingleState").removeClass("d-none") : mt("#dependentSingleState").addClass("d-none")
                }
                ))
            }
        }
        render() {
            mt("#home_content_step3").html(' <section class="step-4-monthly stepsMonthly secForm" id="personalInfo" style="direction:ltr"> <h2 class="text-center text-blue text-uppercase mb-3 font-bold h1" id="user-details-monthly-heading">Your Details </h2> <div class="yourDonation mb-4 font-medium" id="monthlyCart" style="direction:rtl"> <p class="text-center"></p> <ul> </ul> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="lname">Last name<span class="text-blue">*</span></label> <input type="text" name="monthly_lname" class="form-control required" minlength="2" maxlength="20" placeholder="" tabindex="3"> </div> <div class="form-group col-md-6"> <label for="fname">First name<span class="text-blue">*</span></label> <input type="text" name="monthly_fname" class="form-control required" minlength="2" maxlength="20" placeholder="" tabindex="2"> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="pno">Phone number<span class="text-blue"></span></label> <input type="tel" name="monthly_pno" class="form-control" maxlength="19" placeholder="" tabindex="5"> </div> <div class="form-group col-md-6"> <label for="email">Email address<span class="text-blue">*</span></label> <input type="email" name="monthly_email" class="form-control required" maxlength="49" placeholder="" tabindex="4"> </div> </div> <hr> <div class="form-row"> <div class="form-group col-md-12"> <label for="line1">Address line 1<span class="text-blue">*</span></label> <input type="text" name="monthly_address" id="line1" class="form-control required" minlength="0" maxlength="49" placeholder="" tabindex="6"> </div> </div> <div class="form-row"> <div class="form-group col-md-12"> <label for="line2">Address line 2<span class="text-blue"></span></label> <input type="text" name="monthly_address2" id="line2" class="form-control" maxlength="49" placeholder="" tabindex="7"> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="postcode">Postcode<span class="text-blue">*</span></label> <input type="text" name="monthly_postcode" id="postcode" class="form-control required" minlength="2" maxlength="10" placeholder="" tabindex="9"> </div> <div class="form-group col-md-6"> <label for="pno">Town or city<span class="text-blue">*</span></label> <input type="text" name="monthly_town" id="town" class="form-control required" minlength="2" maxlength="39" placeholder="" tabindex="8"> </div> </div> <div class="form-row" style="flex-direction:row-reverse"> <div class="form-group col-md-6"> <label for="ddlcountry_monthly">Country</label> <select id="ddlcountry_monthly" name="monthly_country" class="form-control selectArrow required" tabindex="10"> </select> </div> <div class="form-group col-md-6 d-none" id="dependentMonthlyState"> <label for="ddlstate_monthly">ولاية <span class="text-blue"> *</span></label> <select id="ddlstate_monthly" name="monthly_state" class="form-control selectArrow required" tabindex="10"> </select> </div> <div class="form-group col-md-6 d-none"> </div> <div class="form-group col-md-6"> <label for="hear">How did you hear about us?</label> <select id="monthly_about_us" name="monthly_about_us" class="form-control" tabindex="11"> </select> </div> <hr> </div> <div class="mb-5" style="direction:rtl"> <h2 class="text-center text-blue text-uppercase mb-3 font-bold h1" id="KIT-heading-monthly">KEEP IN TOUCH</h2> <p class="text-center lead mb-4 keepTouchText" id="KIT-text-monthly"> We would like to keep in touch with you to share the latest info on our work as well as how your donations have helped IRUK save lives, via SMS, telephone and email (inc. via social media). We will always treat your personal information with the utmost care and will keep it private. </p> <div class="checkboxWrap text-center"> <div class="form-check form-check-inline"> <input class="form-check-input big-checkbox" type="checkbox" id="check-email-monthly" name="monthly_check_email" value="1" tabindex="14"> <label class="form-check-label" for="check-email-monthly">Email</label> </div> <div class="form-check form-check-inline"> <input class="form-check-input big-checkbox" type="checkbox" id="check-tele-monthly" name="monthly_check_tele" value="1" tabindex="15"> <label class="form-check-label" for="check-tele-monthly">Telephone</label> </div> <div class="form-check form-check-inline"> <input class="form-check-input big-checkbox" type="checkbox" id="check-sms-monthly" name="monthly_check_sms" value="1" tabindex="16"> <label class="form-check-label" for="check-sms-monthly">SMS (Text Message)</label> </div> </div> </div> </section> <section class="step-4-oneoff secForm" id="personalInfo" style="direction:ltr"> <h2 class="text-center text-blue text-uppercase mb-3 font-bold h1" id="user-details-single-heading">Your Details</h2> <div class="form-row"> <div class="form-group col-md-6"> <label for="lname">Last name<span class="text-blue">*</span></label> <input type="text" name="single_lname" class="form-control required" minlength="2" maxlength="20" placeholder="" tabindex="3"> </div> <div class="form-group col-md-6"> <label for="fname">First name<span class="text-blue">*</span></label> <input type="text" name="single_fname" class="form-control required" minlength="2" maxlength="20" placeholder="" tabindex="2"> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="single_pno">Phone number<span class="text-blue"></span></label> <input type="tel" name="single_pno" class="form-control" maxlength="19" placeholder="" tabindex="5"> </div> <div class="form-group col-md-6"> <label for="email">Email address<span class="text-blue">*</span></label> <input type="email" name="single_email" class="form-control required" maxlength="49" placeholder="" tabindex="4"> </div> </div> <hr> <div class="form-row"> <div class="form-group col-md-12"> <label for="line1">Address line 1<span class="text-blue">*</span></label> <input type="text" name="single_address" id="line1" class="form-control required" minlength="2" maxlength="49" placeholder="" tabindex="6"> </div> </div> <div class="form-row"> <div class="form-group col-md-12"> <label for="line2">Address line 2<span class="text-blue"></span></label> <input type="text" name="single_address2" id="line2" class="form-control" maxlength="49" placeholder="" tabindex="7"> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="postcode">Postcode<span class="text-blue">*</span></label> <input type="text" name="single_postcode" id="postcode" class="form-control required" minlength="2" maxlength="10" placeholder="" tabindex="9"> </div> <div class="form-group col-md-6"> <label for="town">Town or city<span class="text-blue">*</span></label> <input type="text" name="single_town" id="town" class="form-control required" minlength="2" maxlength="39" placeholder="" tabindex="8"> </div> </div> <div class="form-row" style="flex-direction:row-reverse"> <div class="form-group col-md-6"> <label for="ddlcountry_single">Country</label> <select id="ddlcountry_single" name="single_country" class="form-control selectArrow required" tabindex="10"> </select> </div> <div class="form-group col-md-6 d-none" id="dependentSingleState"> <label for="ddlstate_single">ولاية <span class="text-blue"> *</span></label> <select id="ddlstate_single" name="single_state" class="form-control selectArrow required" tabindex="10"> </select> </div> <div class="form-group col-md-6 d-none"> </div> <div class="form-group col-md-6"> <label for="hear">How did you hear about us?</label> <select id="single_about_us" name="single_about_us" class="form-control" tabindex="11"> </select> </div> <hr> </div> <div class="mb-5" id="KIT-single" style="direction:rtl"> <h2 class="text-center text-blue text-uppercase mb-3 font-bold h1" id="KIT-heading-single">KEEP IN TOUCH</h2> <p class="text-center lead mb-4 keepTouchText" id="KIT-text-single"> We would like to keep in touch with you to share the latest info on our work as well as how your donations have helped IRUK save lives, via SMS, telephone and email (inc. via social media). We will always treat your personal information with the utmost care and will keep it private. </p> <div class="checkboxWrap text-center"> <div class="form-check form-check-inline"> <input class="form-check-input big-checkbox" type="checkbox" id="check-email-oneoff" name="single_check_email" value="1" tabindex="14"> <label class="form-check-label" for="check-email-oneoff">Email</label> </div> <div class="form-check form-check-inline"> <input class="form-check-input big-checkbox" type="checkbox" id="check-tele-oneoff" name="single_check_tele" value="1" tabindex="15"> <label class="form-check-label" for="check-tele-oneoff">Telephone</label> </div> <div class="form-check form-check-inline"> <input class="form-check-input big-checkbox" type="checkbox" id="check-sms-oneoff" name="single_check_sms" value="1" tabindex="16"> <label class="form-check-label" for="check-sms-oneoff">SMS (Text Message)</label> </div> </div> </div> </section> <div class="btnWrap"> <a href="javascript:void(0);" id="prevButton" class="btn btn-prev font-bold"><i class="fa fa-arrow-circle-o-left"></i> Back</a> <a href="javascript:void(0);" id="nextButton" class="btn btn-next font-bold"> Next <i class="fa fa-arrow-circle-o-right"></i></a> </div> <div class="coustomTextArea"> <p><small id="contact-single-text">You can opt out any time by contacting us on 0207 593 3232 or emailing us on info@islamic-relief.sg</small></p> </div>')
        }
    }
    ;
    var ft = o(669);
    const vt = new b;
    const bt = class {
        constructor() {
            this.init = function() {
                return ft(document).on("click", "#donationWizard-t-3 span", (function() {
                    let t = JSON.parse(localStorage.getItem("cart") || "false");
                    isAdded = !1,
                    t ? "single" === t.cart[0].type ? T(t) : M(t) : alert("Cart is empty")
                }
                )),
                ft(document).on("click", "#trasnfee", (function() {
                    let t = JSON.parse(localStorage.getItem("cart") || "false")
                      , e = parseFloat(J())
                      , o = .014 * parseFloat(e);
                    ft(this).prop("checked") ? (t.trasnfee = ft(this).val(),
                    ft(".yourDonation p span").html(objCMS.currency + (e + o).toFixed(2))) : ft(this).prop("checked") || (t.trasnfee = 0,
                    ft(".yourDonation p span").text(objCMS.currency + e.toFixed(2))),
                    localStorage.setItem("cart", JSON.stringify(t)),
                    t = JSON.parse(localStorage.getItem("cart") || "false")
                }
                )),
                void ft(document).on("load", "#iframe_single", (function() {}
                ))
            }
        }
        render() {
            ft("#home_content_step4").html(' <section class="step-5-monthly stepsMonthly secForm"> <h2 class="text-center text-blue text-uppercase mb-3 font-bold h1" id="payment-heading-text-monthly">Payment</h2> <div class="yourDonation mb-4 font-medium"> <p class="text-center"></p> <ul> </ul> </div> <div class="btnFinishWrap mb-4 mt-4 flex-column align-items-center recaptcha-container" id="grecaptcha-monthly"> <div class="" id="recaptcha-container-monthly"> </div> <div class="recaptcha-error-message mt-3" style="direction:ltr" id="g-recaptcha-error-message-monthly"></div> </div> <div class="btnFinishWrap mb-4 mt-4"> <a href="javascript:void(0);" name="monthly" id="finishbtn" class="btn font-bold btn-finish">تبرع الآن</a> </div> <div class="text-center mb-3" id="single_footer_icons"> </div> <div class="form-row" id="iframe"> </div> </section> <section class="step-5-oneoff secForm"> <h2 class="text-center text-blue text-uppercase mb-3 font-bold h1" id="payment-heading-text-single">Payment</h2> <div class="yourDonation mb-4 font-medium"> <p class="text-center"></p> <ul> </ul> </div> <div class="btnFinishWrap mb-4 mt-4 flex-column align-items-center recaptcha-container" id="grecaptcha"> <div class="" id="recaptcha-container"> </div> <div class="recaptcha-error-message mt-3" style="direction:ltr" id="g-recaptcha-error-message"></div> </div> <div class="btnFinishWrap mb-4 mt-4"> <a href="javascript:void(0);" name="single" id="finishbtn" class="btn font-bold btn-finish">تبرع الآن</a> </div> <div class="text-center mb-3" id="single_footer_icons"> </div> <div class="form-row" id="iframe"> </div> </section>'),
            ( () => {
                const t = {
                    src: "img/cards-icons.png",
                    width: 203,
                    height: 44,
                    classList: ["img-fluid"],
                    alt: "payment method"
                }
                  , e = vt.loadImage(t);
                ft("#single_footer_icons").append(e)
            }
            )()
        }
    }
    ;
    var gt = o(669)
      , yt = o(669);
    const St = new st
      , xt = new class {
        constructor() {
            this.removeRequiredOnStep2 = function(t=!1) {
                return W(!1)
            }
            ,
            this.init = function() {
                return G(document).on("click", "input[name='mdamount']", (function() {
                    if ("other" === G(this).data("value"))
                        cart.amount = 0,
                        G("#fieldMonDonOther").css("display", "block").focus().addClass("required"),
                        G("#fieldMonDonOther").change((function() {
                            let t = G("#fieldMonDonOther").val();
                            cart.amount = parseFloat(t).toFixed(2),
                            G("#descriptionAmountMonthly").text(objCMS.fundValueDynamicTextMonthly + " " + t + objCMS.currency)
                        }
                        ));
                    else {
                        G("#fieldMonDonOther").css("display", "none").removeClass("required"),
                        G("#fieldMonDonOther-error").css("display", "none");
                        let t = G('label[for="' + this.id + '"]').data("causeamount");
                        cart.amount = parseFloat(t).toFixed(2),
                        G("#descriptionAmountMonthly").text(objCMS.fundValueDynamicTextMonthly + " " + t + objCMS.currency + " " + G(this).data("value"))
                    }
                }
                )),
                G(document).on("click", "input[name='odamount']", (function() {
                    if (G(".btnAddCartWrap").removeClass("d-none"),
                    "other" === G(this).data("value"))
                        cart.amount = 0,
                        G("#fieldOfDonOther").css("display", "block").focus().addClass("required"),
                        G("#fieldOfDonOther").change((function() {
                            let t = parseFloat(G("#fieldOfDonOther").val()).toFixed(2);
                            cart.amount = t,
                            G("#descriptionAmountOT").text(objCMS.fundValueDynamicTextSingle + " " + objCMS.currency + t)
                        }
                        ));
                    else {
                        G("#fieldOfDonOther").css("display", "none").removeClass("required"),
                        G("#fieldOfDonOther-error").css("display", "none");
                        let t = G('label[for="' + this.id + '"]').data("causeamount");
                        cart.amount = parseFloat(t).toFixed(2),
                        G("#descriptionAmountOT").text(objCMS.fundValueDynamicTextSingle + " " + t + objCMS.currency + " " + G(this).data("value"))
                    }
                }
                )),
                G(document).on("click", "input[name='odtype']", (function() {
                    G(this).data("external-link") ? window.location = G(this).data("external-link") : E(G(this).data("value"), G(this).data("type")),
                    G("#stepTwoNext p").hasClass("d-none") || G("#stepTwoNext p").addClass("d-none");
                    let t = G("#" + G(this).data("value") + " + label").text();
                    cart = {
                        fund_id: G(this).data("value"),
                        fund_name: t,
                        type: "single",
                        shopId: "0"
                    },
                    setTimeout(L, 100, G(this).data("value"))
                }
                )),
                G(document).on("click", "input[name='mdtype']", (function() {
                    G(this).data("external-link") ? window.location = G(this).data("external-link") : E(G(this).data("value"), G(this).data("type")),
                    G("#stepTwoNext p").hasClass("d-none") || G("#stepTwoNext p").addClass("d-none");
                    let t = G("#" + G(this).data("value") + " + label").text();
                    cart = {
                        fund_id: G(this).data("value"),
                        fund_name: t,
                        type: "monthly",
                        shopId: "0"
                    },
                    setTimeout(L, 500, G(this).data("value"))
                }
                )),
                G(document).on("click", 'input[name="paymentSlct"]', (function() {
                    "1" === G('input[name="paymentSlct"]:checked').val() ? window.location = G(this).attr("data-url") : "2" === G('input[name="paymentSlct"]:checked').val() && (G("#monthly-fund-heading-1, #md-products").removeClass("d-none"),
                    G(".monthlySlctPymntMethod, .paymentSelectHead").addClass("display-none"))
                }
                )),
                G(document).on("click", ".addDonation", (function() {
                    G("#donationWizard-t-1").click()
                }
                )),
                G(document).on("click", ".proceedDonation", (function() {
                    G("#donationWizard-t-2").closest("li").removeClass("disabled"),
                    G("#doneoff").prop("checked", !0),
                    G("#donationWizard-t-2").click()
                }
                )),
                G(document).on("click", "#wizardModal #popupDonate", (function() {
                    let t = G("#wizardModal form select[name=modalDonate]").val()
                      , e = G("#wizardModal form input[name=modal_fund_name]").val()
                      , o = G("#wizardModal form input[name=modal_fund_id]").val();
                    t && (cart = {
                        fund_id: parseInt(o),
                        fund_name: e,
                        type: "single",
                        shopId: "0",
                        amount: parseFloat(t).toFixed(2)
                    },
                    isAdded = !0,
                    "single" === dtype ? z(cart) : "monthly" === dtype && (V(cart),
                    I()))
                }
                )),
                void G(document).on("click", "#cartButton", (function() {
                    let t;
                    isAdded = !0,
                    "single" === dtype ? t = z(cart) : "monthly" === dtype && (t = V(cart),
                    I(),
                    G("input[name='mdtype']").prop("checked", !1),
                    G("input[name='mdamount']").prop("checked", !1),
                    G("#descriptionAmountMonthly").text(""),
                    G("#md-products + br + h4").text("")),
                    0 != t ? isAdded = !1 : G('<label id="odamount-error" class="error" for="odamount">' + errorMsg.odamount + "</label>").insertBefore("#causeListAmount input[name='odamount']:first-child")
                }
                ))
            }
        }
        render() {
            G("#home_content_step2").html(' <section class="step-2-monthly stepsMonthly"> <h4 class="text-blue text-uppercase mb-3 font-600" id="monthly-fund-heading-1">Select Your Fund</h4> <div class="btn-list-wrap" id="md-products"> </div> <br> <h4 class="text-blue text-uppercase mb-3 font-600"></h4> <div class="btn-list-wrap btn-list-amount mb-2" id="md-amount"> </div> <div class="list-group-wrap" id="md-orphan-modal"> </div> <div class="descriptionAmount text-center mb-2" id="descriptionAmountMonthly"></div> </section> <section class="step-2-oneoff"> <h4 class="text-blue text-uppercase mb-3 font-600" id="single-fund-heading-1">Select Your Fund</h4> <div class="btn-list-wrap" id="causeList"> </div> <br> <h4 class="text-blue text-uppercase mt-3 font-600"></h4> <div class="btn-list-wrap btn-list-amount mb-2 font-bold" id="causeListAmount"> </div> <div class="list-group-wrap" id="od-inline-modal"> </div> <div class="descriptionAmount text-center mb-2" id="descriptionAmountOT"></div> </section> <div class="btnAddCartWrap d-none"> <a id="cartButton" class="btn btn-addCart font-bold"><i class=""></i> Add To Cart</a> </div> <div class="btnWrap" id="stepTwoNext"> <a href="javascript:void(0);" id="prevButton" class="btn btn-prev font-bold"><i class="fa fa-arrow-circle-o-left"></i> Back</a> <p class="text-center mb-2 d-none stepTwoPara">Scroll up if you would like <br/> to add additional donations.</p> <a href="javascript:void(0);" id="nextButton" class="btn btn-next font-bold"> Next <i class="fa fa-arrow-circle-o-right"></i></a> </div>')
        }
    }
      , Ct = new ht
      , _t = new bt
      , Mt = new class {
        constructor() {
            this.getTotalAmount = function() {
                return J()
            }
            ,
            this.generateTransFeeText = function() {
                return U()
            }
            ,
            this.addToCart = function() {
                return R()
            }
            ,
            this.setCart = function(t) {
                return z(t)
            }
            ,
            this.setCartMonthly = function(t, e=0) {
                return V(t, 0)
            }
            ,
            this.calCartButton = function() {
                return function() {
                    let t;
                    isAdded = !0;
                    let e = []
                      , o = [];
                    if ("single" === dtype) {
                        var n = B("input[name='amount[]']").map((function() {
                            return B(this).val()
                        }
                        )).get()
                          , a = B("input[name='product[]']").map((function() {
                            return B(this).val()
                        }
                        )).get()
                          , i = B("input[name='fund_name[]']").map((function() {
                            return B(this).val()
                        }
                        )).get()
                          , l = B("input[name='group_qty[]']").map((function() {
                            return B(this).val()
                        }
                        )).get();
                        for (let e = 0; e < n.length && e < a.length; e++)
                            checkNumeric(n[e]) && checkNumeric(a[e]) && (o = {
                                fund_id: a[e],
                                amount: parseFloat(n[e]).toFixed(2),
                                fund_name: i[e],
                                shopId: l[e],
                                type: "single"
                            },
                            t = z(o))
                    } else if ("monthly" === dtype) {
                        var r = B("input[name='amount[]']").map((function() {
                            return B(this).val()
                        }
                        )).get()
                          , s = B("input[name='product[]']").map((function() {
                            return B(this).val()
                        }
                        )).get()
                          , d = B("input[name='fund_name[]']").map((function() {
                            return B(this).val()
                        }
                        )).get()
                          , c = B("input[name='group_qty[]']").map((function() {
                            return B(this).val()
                        }
                        )).get();
                        for (let t = 0; t < r.length && t < s.length; t++)
                            checkNumeric(r[t]) && checkNumeric(s[t]) && e.push({
                                fund_id: s[t],
                                amount: parseFloat(r[t]).toFixed(2),
                                fund_name: d[t],
                                shopId: c[t],
                                type: "monthly"
                            });
                        t = V(e, !0),
                        0 != t ? isAdded = !1 : B('<label id="mdamount-error" class="error text-center" for="mdamount">' + errorMsg.mdamount + "</label>").insertBefore("#md-orphan-modal")
                    }
                }()
            }
            ,
            this.removeToggle = function() {
                B("#dropdownMenuButton").dropdown("toggle")
            }
            ,
            this.deleteCartItem = function(t) {
                return function(t) {
                    let e = JSON.parse(localStorage.getItem("cart") || "false");
                    if (e)
                        for (let o = 0; o < e.cart.length; o++)
                            if (e.cart[o].fund_id = t) {
                                e.cart.splice(o, 1);
                                break
                            }
                    if (0 === e.cart.length)
                        return localStorage.clear(),
                        H.cleanState("#djCart", "cart"),
                        H.cleanState("#monthlyCart", "cart"),
                        location.reload(),
                        0;
                    localStorage.setItem("cart", JSON.stringify(e)),
                    H.setState("#djCart", "cart", {
                        value: JSON.stringify(e)
                    }),
                    "single" === e.cart[0].type ? (k(),
                    T(JSON.parse(localStorage.getItem("cart") || "false"))) : (I(),
                    M(JSON.parse(localStorage.getItem("cart") || "false"))),
                    R()
                }(t)
            }
        }
    }
      , Tt = new class {
        constructor() {
            this.setUserInfo = function() {
                !function() {
                    let t, e = JSON.parse(localStorage.getItem("cart") || "false"), o = K("#donationWizard").serializeArray(), n = {}, a = {};
                    for (t = 0; t < o.length; t++)
                        "monthly_email" !== o[t].name && "single_email" !== o[t].name || (a[o[t].name] = o[t].value),
                        n[o[t].name] = o[t].value;
                    c(JSON.stringify(a)).then((t => {
                        var e = t;
                        localStorage.setItem("intentinfo", JSON.stringify(e))
                    }
                    )),
                    c(JSON.stringify(n)).then((t => {
                        e.userInfo = t,
                        Y.setState("#personalInfo", "personalInfo", {
                            dec_data: JSON.stringify(n),
                            enc_data: JSON.stringify(t)
                        }),
                        localStorage.setItem("cart", JSON.stringify(e)),
                        "single" === e.cart[0].type ? T(e) : M(e)
                    }
                    ))
                }()
            }
        }
    }
      , jt = new class {
        constructor() {
            this.setPopup = function(t) {
                return Z(t)
            }
            ,
            this.getPopupData = function(t) {
                return function(t) {
                    let e = WSURL + "get_popup_fund.php";
                    Q.ajax({
                        url: e,
                        dataType: "json",
                        type: "POST",
                        data: {
                            type: t
                        },
                        success: function(t) {
                            popupLength = t.values.length,
                            popupLength > 0 && Z(t)
                        },
                        error: function(t, e) {
                            0 === t.status || 404 === t.status || 500 === t.status || "parsererror" === e || "timeout" === e || "abort" === e || t.responseText
                        }
                    })
                }(t)
            }
        }
    }
      , wt = new nt
      , At = new class {
        constructor() {
            this.setGiftAidSingle = function() {
                return k()
            }
            ,
            this.setGiftAidMonthly = function() {
                return I()
            }
        }
    }
      , kt = new class {
        constructor() {
            this.getMonthlyPaymentTemplate = function(t) {
                return M(t)
            }
            ,
            this.getSinglePaymentTemplate = function(t) {
                return T(t)
            }
            ,
            this.setPayment = function() {
                return function() {
                    _("#finishButton").hide(),
                    _("#finishButton").addClass("disabled");
                    let t = _("#donationWizard").serializeArray()
                      , e = {};
                    for (i = 0; i < t.length; i++)
                        "accountHolderName" !== t[i].name && "mAccountNumber" !== t[i].name && "mSortCode" !== t[i].name && "pmDate" !== t[i].name || (e[t[i].name] = t[i].value);
                    let o = JSON.parse(localStorage.getItem("cart") || "false");
                    enc_data(JSON.stringify(e)).then((t => {
                        o.paymentDetails = t,
                        localStorage.setItem("cart", JSON.stringify(o)),
                        w()
                    }
                    ))
                }()
            }
            ,
            this.submitOneOff = function() {
                return j()
            }
            ,
            this.submitMonthly = function() {
                return _("#donationWizard > div:first ul li").each((function() {
                    _(this).hasClass("last") || _(this).addClass("done disabled")
                }
                )),
                _("#finishbtn").addClass("disabled"),
                void w()
            }
        }
    }
      , It = new C;
    function Ot() {
        gt("#donationWizard h1:first").text(objCMS.step1Heading),
        gt("#Hstep1").text(objCMS.step1Text),
        gt("#Hstep2").text(objCMS.step2Text),
        gt("#Hstep3").text(objCMS.step3Text),
        gt("#Hstep4").text(objCMS.step4Text),
        gt("#dmonthly + label").text(objCMS.monthlyButtonTxt),
        gt("#doneoff + label").text(objCMS.singleButtonTxt),
        gt(".btn-next").html(objCMS.nextButtonTxt + ' <i class="fa fa-arrow-circle-o-left"></i>'),
        gt(".btn-prev").html('<i class="fa fa-arrow-circle-o-right"></i> ' + objCMS.backButtonTxt),
        gt("#Copyrights").text(objCMS.copyRightTxt),
        gt("#logo-image").attr("src", generalMediaPath + objCMS.logo_img),
        gt("#logoMain").attr("href", objCMS.logo_link),
        gt("#logo-image").attr("alt", objCMS.logo_alt_text),
        gt("#banner-image").attr("src", generalMediaPath + objCMS.step1BannerImage),
        gt("#footer-image").attr("src", generalMediaPath + objCMS.footerImage),
        gt("#private-policy").text(objCMS.privatepolicytxt),
        gt("#private-policy").attr("href", objCMS.privatepolicylink),
        gt("#otherways").text(objCMS.otherwaystxt),
        gt("#CharityNumber").text(objCMS.charityNumber),
        gt("#otherways").attr("href", objCMS.otherwayslink),
        gt("#fav").attr("src", generalMediaPath + objCMS.logo_img),
        gt("#cart-heading-text").text(objCMS.cartHeading),
        gt("#cart-total-text").text(objCMS.cartTotalTxt),
        function() {
            let t = JSON.parse(localStorage.getItem("cart") || "false");
            t && localStorage.setItem("cart", JSON.stringify({
                cart: t.cart
            }))
        }(),
        jt.getPopupData("single_fund");
        const t = gt("#donationWizard");
        if (t.css("display", "block"),
        gt("#Wizfooter").css("display", "block"),
        t.validate({
            onkeyup: (t, e) => {
                if ("postcode_lookup" === t.id && 13 === e.keyCode)
                    return !0;
                if ("postcode_lookup" === t.id)
                    ;
                else {
                    if ("mAccountNumber" === t.id && 13 === e.keyCode)
                        return !0;
                    if ("mAccountNumber" !== t.id)
                        return !0
                }
            }
            ,
            onfocusout: t => "postcode_lookup" !== t.id && "mAccountNumber" !== t.id,
            errorPlacement: function(t, e) {
                "dtype" === e.attr("name") || "odtype" === e.attr("name") || "odamount" === e.attr("name") || "mdtype" === e.attr("name") || "mdamount" === e.attr("name") || "mAccountNumber" === e.attr("name") ? e.before(t) : e.after(t)
            },
            rules: {
                postcode_lookup: {
                    onfocusout: !1,
                    onclick: !1,
                    getAddress: !0
                },
                load_address: {
                    load_address: !0
                },
                mAccountNumber: {
                    onfocusout: !1,
                    onclick: !1,
                    getAccount: !0
                },
                confirm: {
                    equalTo: "#password"
                }
            },
            messages: errorMsg
        }),
        t.steps({
            headerTag: "h3",
            bodyTag: "fieldset",
            transitionEffect: "fade",
            enablePagination: !1,
            titleTemplate: '<span class="step">#index#</span> #title#',
            onStepChanging: function(e, o, n) {
                return o > n || (t.validate({
                    ignore: []
                }),
                t.valid())
            },
            onFinishing: function(e, o) {
                return t.validate({
                    ignore: []
                }),
                t.valid()
            },
            onFinished: function(t, e) {
                alert("Submitted!")
            }
        }),
        yt.validator.addMethod("getAccount", (function(t, e) {
            return validaccount
        }
        ), "Enter a valid Account Number & Sort Code"),
        yt.validator.addMethod("getAddress", (function(t, e) {
            return addressFound
        }
        ), "Please enter/search for an address"),
        yt.validator.addMethod("load_address", (function(t, e) {
            return -1 != t
        }
        ), "Please select address or enter manually"),
        function() {
            let t = JSON.parse(localStorage.getItem("cart") || !1);
            if (!t)
                return 0;
            "single" === t.cart[0].type ? (h("begin_checkout"),
            dtype = "single",
            It.initState('#selectDtype input[type="radio"]', "dtype"),
            wt.setSingleTemplate(),
            gt("#donationWizard-t-1").closest("li").removeClass("disabled"),
            gt("#donationWizard-t-1").closest("li").addClass("done"),
            gt("#donationWizard-t-2").closest("li").removeClass("disabled"),
            gt("#doneoff").prop("checked", !0),
            gt("#donationWizard-t-2").click()) : (f("begin_checkout"),
            dtype = "monthly",
            It.setState('#selectDtype input[type="radio"]', "dtype", {
                value: "monthly"
            }),
            wt.setMonthlyTemplate(),
            It.initState("#monthlyCart", "cart"),
            gt("#donationWizard-t-1").closest("li").removeClass("disabled"),
            gt("#donationWizard-t-1").closest("li").addClass("done"),
            gt("#donationWizard-t-2").closest("li").removeClass("disabled"),
            gt("#dmonthly").prop("checked", !0),
            gt("#donationWizard-t-2").click())
        }(),
        "single" === dtype) {
            let t = Mt.addToCart();
            t && It.setState("#djCart", "cart", {
                value: t
            })
        }
        gt(document).delegate(".delCart i", "click", (function() {
            Mt.deleteCartItem(gt(this).data("value"))
        }
        )),
        gt(document).delegate("#nextButton", "click", (function() {
            var t = gt("#donationWizard").steps("next")
              , e = gt("#donationWizard").steps("getCurrentIndex");
            2 === e && t ? "single" === dtype ? (0 === Mt.getTotalAmount() && (isAdded = !0),
            cart.fund_id == qurbaniFundID ? Mt.calCartButton() : (Mt.setCart(cart),
            isAdded = !1),
            h("begin_checkout")) : "monthly" === dtype && (cart.fund_id == orphanFundID ? Mt.calCartButton() : Mt.setCartMonthly(cart),
            At.setGiftAidMonthly(),
            f("begin_checkout")) : 3 === e && t && (Tt.setUserInfo(),
            "single" === dtype ? h("add_payment_info") : "monthly" === dtype && (At.setGiftAidMonthly(),
            f("add_payment_info"))),
            gt(".fieldsetPinfo").hasClass("current") && gt("#doneoff").is(":checked") && !isShowed && popupLength > 0 && (gt("#wizardModal").modal("show"),
            isShowed = !0),
            t || gt("#donationWizard").steps("finish")
        }
        )),
        gt(document).delegate("#prevButton", "click", (function() {
            gt("#donationWizard").steps("previous")
        }
        )),
        gt(document).on("click", "#finishbtn", (function() {
            if (gt("#donationWizard").valid())
                if ("single" == gt(this).attr("name"))
                    0 == grecaptcha.getResponse().length ? (gt("#grecaptcha").addClass("recaptcha-invalid"),
                    gt("#g-recaptcha-error-message").html("Please verify that you are not a robot.")) : (gt("#grecaptcha").removeClass("recaptcha-invalid"),
                    gt("#g-recaptcha-error-message").html(""),
                    Ft(gt(this).attr("name")));
                else if ("monthly" == gt(this).attr("name")) {
                    0 == grecaptcha.getResponse().length ? (gt("#grecaptcha-monthly").addClass("recaptcha-invalid"),
                    gt("#g-recaptcha-error-message-monthly").html("Please verify that you are not a robot.")) : (gt("#grecaptcha-monthly").removeClass("recaptcha-invalid"),
                    gt("#g-recaptcha-error-message-monthly").html(""),
                    Ft(gt(this).attr("name")))
                }
        }
        )),
        gt(document).on("click", "#finishButton", (function() {
            gt("#donationWizard").valid() && (gt("#donationWizard > div:first ul li").each((function() {
                gt(this).hasClass("last") || gt(this).addClass("done disabled")
            }
            )),
            kt.setPayment())
        }
        )),
        gt(document).on("click", "#donationWizard-t-3 span", (function() {
            let t = JSON.parse(localStorage.getItem("cart") || "false");
            isAdded = !1,
            t ? "single" === t.cart[0].type ? T(t) : M(t) : alert("Cart is empty")
        }
        ))
    }
    function Ft(t) {
        var e = grecaptcha.getResponse();
        gt.ajax({
            type: "POST",
            url: WSURL + "verify_recaptcha.php",
            data: {
                response: e
            },
            contentType: "application/x-www-form-urlencoded",
            success: function(e) {
                "monthly" === t ? e.success ? kt.submitMonthly() : (gt("#grecaptcha-monthly").addClass("recaptcha-invalid"),
                gt("#g-recaptcha-error-message-monthly").html("reCAPTCHA verification failed. Please try again.")) : e.success ? kt.submitOneOff() : (gt("#grecaptcha").addClass("recaptcha-invalid"),
                gt("#g-recaptcha-error-message").html("reCAPTCHA verification failed. Please try again."))
            },
            error: function(t, e, o) {
                console.error("Error during verification: ", e, o)
            }
        })
    }
    const Nt = class {
        render() {
            gt("#home_content").html('<form id="donationWizard" class="donationWizard wizard-circle" method="post" action="#"> <h3 id="Hstep1">Start</h3> <fieldset class="fieldsetFirst" id="home_content_step1"> </fieldset> <h3 id="Hstep2">Donation</h3> <fieldset class="fieldsetSecond fundsloaded" id="home_content_step2"> </fieldset> <h3 id="Hstep3">Details</h3> <fieldset class="fieldsetPinfo" id="home_content_step3"> </fieldset> <h3 id="Hstep4">Payment</h3> <fieldset class="fieldsetGift paymentSection" id="home_content_step4"> </fieldset> </form> '),
            St.render(),
            xt.render(),
            Ct.render(),
            _t.render(),
            Ot(),
            It.initState("#monthlyCart", "cart"),
            It.initState("#personalInfo", "personalInfo"),
            St.init(),
            xt.init(),
            It.initState('#selectDtype input[type="radio"]', "dtype"),
            Ct.init(),
            _t.init()
        }
    }
    ;
    var Dt = o(669);
    new b;
    var qt = o(669);
    const Pt = new b;
    var Lt = o(72)
      , Et = o.n(Lt)
      , Gt = o(825)
      , Wt = o.n(Gt)
      , Bt = o(659)
      , Ht = o.n(Bt)
      , Jt = o(56)
      , Rt = o.n(Jt)
      , zt = o(540)
      , Vt = o.n(zt)
      , Ut = o(113)
      , Kt = o.n(Ut)
      , Yt = {};
    Yt.styleTagTransform = Kt(),
    Yt.setAttributes = Rt(),
    Yt.insert = Ht().bind(null, "head"),
    Yt.domAPI = Wt(),
    Yt.insertStyleElement = Vt();
    Et()(n.default, Yt);
    n.default && n.default.locals && n.default.locals;
    var Qt = {};
    Qt.styleTagTransform = Kt(),
    Qt.setAttributes = Rt(),
    Qt.insert = Ht().bind(null, "head"),
    Qt.domAPI = Wt(),
    Qt.insertStyleElement = Vt();
    Et()(a.default, Qt);
    a.default && a.default.locals && a.default.locals;
    var Zt = {};
    Zt.styleTagTransform = Kt(),
    Zt.setAttributes = Rt(),
    Zt.insert = Ht().bind(null, "head"),
    Zt.domAPI = Wt(),
    Zt.insertStyleElement = Vt();
    Et()(l.default, Zt);
    l.default && l.default.locals && l.default.locals;
    const Xt = new b
      , $t = new s(WSURL + "get_funds.php")
      , te = new S
      , ee = new Nt
      , oe = new class {
        render() {
            Dt("#wizardModal").html(' <div class="modal-dialog modal-dialog-centered modal-lg"> <div class="modal-content"> <div class="modal-body"> <img width="640" height="360" class="img-fluid" alt="donation"/> <div class="txt"> <h2></h2> <p class="lead font-medium"></p> <form class="popupForm"> <select class="form-control" name="modalDonate" id="sel1"> </select> <input type="hidden" name="modal_fund_name" value=""> <input type="hidden" name="modal_fund_id" value=""> </form> <div class="btnModalDonate"> <button type="button" id="popupDonate" data-dismiss="modal" class="btn btn-donate font-medium"></button> <button type="button" id="cancelDonate" class="font-medium btn btn-default" data-dismiss="modal"></button> </div> </div> </div> </div> </div>')
        }
    }
      , ne = new class {
        render() {
            qt("#home_footer").html('<div class="row"> <div class="col-sm-12"> <div class="footerLogo text-center"> </div> <div class="footerContent"> <p><a href="javascript:void(0);" id="private-policy">Privacy Policy</a> | <a href="javascript:void(0);" id="otherways">Other ways to donate (phone,post & bank transfer)</a></p> <p id="Copyrights">© Copyrights 2022 Islamic Relief Worldwide, Inc. All rights reserved. Registered Charity No. 328158</p> <p id="CharityNumber"></p> </div> </div> </div>'),
            ( () => {
                const t = {
                    src: "img/logoFtr.png",
                    width: 200,
                    height: 76,
                    classList: ["img-responsive"],
                    alt: "fundraising regulator"
                }
                  , e = Pt.loadImage(t);
                qt(".footerLogo").append(e)
            }
            )(),
            qt("#Copyrights").text(objCMS.copyRightTxt),
            qt("#private-policy").text(objCMS.privatepolicytxt),
            qt("#private-policy").attr("href", objCMS.privatepolicylink),
            qt("#otherways").text(objCMS.otherwaystxt),
            qt("#CharityNumber").text(objCMS.charityNumber),
            qt("#otherways").attr("href", objCMS.otherwayslink)
        }
    }
      , ae = new C;
    Xt.ajaxRequest(WSURL + "cms-data.php", "GET", {}).then((t => {
        window.objCMS = t,
        window.errorMsg = {
            dtype: "Please Select One of the option",
            single_title: objCMS.titleError,
            odtype: objCMS.fundrequirederrorSingle,
            odamount: objCMS.amountrequirederrorSingle,
            single_fname: {
                required: objCMS.firstNameError,
                minlength: objCMS.characterlenght
            },
            single_lname: {
                required: objCMS.lastNameError,
                minlength: objCMS.characterlenght
            },
            single_email: objCMS.emailError,
            single_pno: {
                required: objCMS.pnoError,
                minlength: objCMS.pnominlenght,
                maxlenght: objCMS.pnominlenght
            },
            single_postcode: objCMS.postcodeError,
            single_address: objCMS.address1Error,
            single_town: objCMS.cityError,
            single_state: objCMS.stateError,
            single_country: objCMS.countryError,
            fieldOfDonOther: objCMS.amountrequirederrorSingle,
            monthly_title: objCMS.titleError,
            mdtype: objCMS.fundrequirederrorMonthly,
            mdamount: objCMS.amountrequirederrorMonthly,
            monthly_fname: {
                required: objCMS.firstNameError,
                minlength: objCMS.characterlenght
            },
            monthly_lname: {
                required: objCMS.lastNameError,
                minlength: objCMS.characterlenght
            },
            monthly_email: objCMS.emailError,
            monthly_pno: {
                required: objCMS.pnoError,
                minlength: objCMS.pnominlenght,
                maxlenght: objCMS.pnominlenght
            },
            monthly_address: objCMS.address1Error,
            monthly_postcode: objCMS.postcodeError,
            monthly_town: objCMS.cityError,
            monthly_state: objCMS.stateError,
            monthly_country: objCMS.countryError,
            fieldMonDonOther: objCMS.amountrequirederrorSingle
        },
        window.objFunds = $t,
        te.render(),
        ae.initState("#djCart", "cart"),
        ee.render(),
        oe.render(),
        ne.render()
    }
    ))
}
)();
