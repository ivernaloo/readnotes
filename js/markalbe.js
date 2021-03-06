$M = {
    version    : "0.4.0",
    environment: "production",
    env        : {
        production : {main: "http://remarker.be/", sync_service: "http://service.remarker.be/notes/sync"},
        test       : {
            main        : "http://1.remarkerbetest.sinaapp.com/",
            sync_service: "http://service.remarker.be/notes/sync"
        },
        development: {main: "", sync_service: "http://0.0.0.0:3000/notes/sync"}
    }
};
$M.main = $M.env[$M.environment].main;
$M.sync_service = $M.env[$M.environment].sync_service;
$M.site = $M.main;
$M.main = window.$M_main || $M.main;
$M.is_pdf = window.$M_is_pdf || $('script[src*="viewer"]').length && $('script[src*="pdf.js"]').length && $("#viewerContainer").length;
$M.is_extension = void 0 != window.$M_main;
window.$M = $M;
$M.utils = {};
$M.log = {};
$M.counter = 0;
$M.support_save_opener = !0;
$M.stack = new function () {
    var a = {};
    this.pop = function (b) {
        if (a[b])return a[b].pop()
    };
    this.push = function (b, c) {
        a[b] || (a[b] = []);
        a[b].push(c)
    };
    this.top = function (b) {
        if (a[b])return a[b][a[b].length - 1]
    }
};
$M.log.info = function () {
};
$M.saved = !0;
$M.assets = {
    "markalbe.js"    : "markalbe.js",
    "markalbe.css"   : "markalbe.scss.css",
    "markalbe-ui.css": "markalbe-ui.scss.css",
    "remarkalbe.js"  : "remarkalbe.js",
    "jQuery.js"      : "jQuery.js",
    "notification.js": "notification.js"
};
"development" != $M.environment && ($M.assets = {
    "markalbe.js"    : $M.main + "js/markalbe.js",
    "markalbe.css"   : $M.main + "css/markalbe.scss.css",
    "markalbe-ui.css": $M.main + "css/markalbe-ui.scss.css",
    "remarkalbe.js"  : $M.main + "js/remarkalbe.js",
    "notification.js": "test" == $M.environment ? $M.env.test.main + "js/notification.js" : $M.env.production.main + "js/notification.js",
    "jQuery.js"      : $M.is_extension && $M.main + "js/jquery-1.8.2.min.js" || "http://code.jquery.com/jquery-1.8.2.min.js"
});
$M.forDevelop = function (a) {
    return "development" == $M.environment ? a + "?" + (new Date).getUTCMilliseconds() : a
};
$M.constant = {
    APP_NAME               : "remarkalbe",
    MARK_ATTRIBUTE         : "remarkalbe",
    STYLE_PREFIX           : "remarkalbe-",
    STYLE_HIGHLIGHT        : "highlight",
    STYLE_BOLD             : "bold",
    STYLE_UNDERLINE        : "underline",
    STYLE_ITALIC           : "italic",
    STYLE_RESTORE          : "restore",
    STYLE_A                : "answer",
    STYLE_Q                : "question",
    STYLE_STEP             : "step",
    STYLE_NAMING           : "naming",
    STYLE_PROBLEM          : "problem",
    STYLE_WORD             : "word",
    STYLE_TAG              : "tag",
    MARK_START             : "start",
    MARK_END               : "end",
    WRAP_TAG               : "span",
    STYLE_TOPIC            : "topic",
    STYLE_TOPIC_WHAT       : "topic-what",
    STYLE_TOPIC_HOW        : "topic-how",
    STYLE_TOPIC_WHY        : "topic-why",
    STYLE_TOPIC_GOOD       : "topic-good",
    STYLE_TOPIC_BAD        : "topic-bad",
    STYLE_TOPIC_EXAMPLE    : "topic-example",
    STYLE_CURRENT          : "current",
    STYLE_KEYPOINT         : "key-point",
    STYLE_STRUCTURE        : "structure",
    STYLE_UTILITY          : "utility",
    STYLE_UTILITY_KEYPOINT : "utility_keypoint",
    STYLE_UTILITY_STRUCTURE: "utility_structure",
    STYLE_COLORFUL         : "colorful",
    MARK_CID_PREFIX        : "rmkb-",
    ID_READABLE_IFRAME     : "remarkalbe-readable-iframe",
    TAG_ORIGINAL           : "remarkalbe-original",
    ID_ORIGINAL_STYLE      : "remarkalbe-readable-original-style",
    ID_READABLE_STYLE      : "remarkalbe-readable-iframe-style",
    ID_TOPBAR              : "remarkalbe-topbar",
    HASH_READABLE          : "remarkalbe-readable",
    ATTR_AFFILIATE         : "remarkalbe-affiliate-for",
    ATTR_MARK_TYPE         : "remarkalbe-mark-type",
    HTML_SAVE_FORM         : "<form id='remarkalbe-save-form' action='" + $M.sync_service + "' method='POST' target='_blank' style='display:none !important;'><textarea id='remarkalbe-save-content' type='hidden' name='content'></textarea><input type='hidden' name='title' id='remarkalbe-save-title' /><input type='hidden' name='url' id='remarkalbe-save-url' /> <input type='submit' /></form>",
    HTML_SAVE_FORM_FOR_AJAX: "<form id='remarkalbe-save-form' action='" +
    $M.sync_service + "' method='POST' target='remarkalbe-save-form-result' style='display:none !important;'><textarea id='remarkalbe-save-content' type='hidden' name='content'></textarea><input type='hidden' name='title' id='remarkalbe-save-title' /><input type='hidden' name='url' id='remarkalbe-save-url' /> <input type='submit' /></form><iframe id='remarkalbe-save-form-result' name='remarkalbe-save-form-result'></iframe>",
    HTML_NOTIFY            : "<div id='remarkalbe-notify'></div>",
    HTML_MESSAGEBOX        : "<div class='remarkalbe-modal-bg'></div><div class='remarkalbe-info-box'><h3 class='remarkalbe-info-box-title'></h3><p class='remarkalbe-info-box-content'></p><p class='remarkalbe-info-box-buttons'></p></div>"
};
$M.utils.loadJS = function (a, b) {
    var c = $M.utils.createElement("script", {src: a, type: "text/javascript"}), b = b || function () {
        };
    c.onload = c.onreadystatechange = function () {
        if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)b(), this.onload = this.onreadystatechange = null, this.parentNode.removeChild(this)
    };
    document.body.appendChild(c)
};
$M.utils.loadCSS = function (a, b) {
    "development" == $M.environment && b && (a += "?" + (new Date).getUTCMilliseconds());
    document.body.appendChild($M.utils.createElement("link", {href: a, type: "text/css", rel: "stylesheet"}))
};
$M.utils.createElement = function (a, b) {
    var c = document.createElement(a), d;
    for (d in b)$(c).attr(d, b[d]);
    return c
};
$M.utils.invalidNode = function (a) {
    return a && 1 != a.nodeType
};
$M.utils.next = function (a) {
    do a = a.nextSibling; while (invalidNode(a));
    return a
};
$M.utils.first = function (a) {
    a = a.firstChild;
    return invalidNode(a) ? $M.utils.next(a) : a
};
$M.utils.format = function (a, b) {
    for (var c in b)for (var d = "{%" + c + "%}"; 0 <= a.indexOf(d);)a = a.replace(d, b[c]);
    return a
};
$M.downUntilTextNode = function (a) {
    for (; 0 < a.childNodes.length;)a = a.childNodes[0];
    return a
};
$M.getSelectionContent = function () {
    var a = window.getSelection(), b = a.getRangeAt(0), a = a.toString();
    "" == a.trim() && (b = b.cloneContents(), a = $.map(b.childNodes, function (a) {
        return a.outerHTML
    }).join(""));
    return a.toString()
};
$M.get_ends = function (a) {
    var b = a.anchorNode, c = a.focusNode, d = a.anchorOffset, e = a.focusOffset, f = function (a, c, d) {
        return a.nodeValue && " " != a.nodeValue[c + 1 * d] && " " == b.nodeValue[c + 2 * d] ? 1 * d : 0
    };
    if (b == c) {
        if (b.splitText) {
            var g = a.focusOffset, a = a.anchorOffset;
            g > a ? (d += f(b, a, -1), e += f(c, g - 1, 1), b.splitText(d)) : (d += f(b, a - 1, 1), e += f(c, g, -1), b.splitText(e));
            elem = b.nextSibling;
            elem.splitText(Math.abs(e - d));
            return [b.nextSibling, b.nextSibling]
        }
        g = d;
        a = e;
        c = Math.min(g, a);
        g = Math.max(g, a);
        return [b.childNodes[c], b.childNodes[g -
        1]]
    }
    a.containsNode(b, !1) && b.splitText && b.splitText(d);
    a.containsNode(c, !1) && c.splitText && c.splitText(e);
    !c.splitText && c.childNodes && (c = c.childNodes[e - 1]);
    !b.splitText && b.childNodes && (b = b.childNodes[d - 1]);
    a.containsNode(b.nextSibling, !1) ? (start = b.nextSibling, end = c) : (end = b, start = c.nextSibling);
    return [start, end]
};
$M.isCombo = function () {
    return $M.getSelectionContent() == $M.lastRecord.content
};
$M.lastRecord = {};
$M.saveRecord = function (a) {
    $M.isCombo() || ($M.lastRecord.start = a[0].parentNode, $M.lastRecord.end = a[a.length - 1].parentNode, $M.lastRecord.content = $M.lastContent)
};
$M.find_selection_nodes = function () {
    var a = window.getSelection();
    a.getRangeAt(0);
    for (var b = [], c = $M.isCombo(), d = c ? [$M.lastRecord.start, $M.lastRecord.end] : $M.get_ends(a), e = d[0]; e && e != d[1];)if (a.containsNode(e, !1)) {
        for ("" != e && b.push(e); null == e.nextSibling;)e = e.parentNode;
        e = e.nextSibling
    } else if (a.containsNode(e, !0))e = e.firstChild; else break;
    e == d[1] && b.push(d[1]);
    c && (b.shift(0), b.unshift(d[0]));
    return b
};
$M.selectors = {
    byStyle  : function (a, b) {
        return "." + $M.getStyle(a) + (b ? $M.selectors.byStyle("MARK_START") : "")
    }, byAttr: function (a, b) {
        var c = ["[", $M.constant.MARK_ATTRIBUTE];
        a && c.push(b || "=", "'", a, "'");
        c.push("]");
        return c.join("")
    }, byType: function (a, b) {
        a = ["[", $M.constant.ATTR_MARK_TYPE, "=", a, "]"];
        b && a.unshift($M.selectors.byStyle("MARK_START"));
        return a.join("")
    }
};
$M.isHomelessMark = function (a) {
    return !$(a).attr($M.constant.ATTR_AFFILIATE)
};
$M.generateMarkClassId = function (a) {
    return $M.constant.MARK_CID_PREFIX + $M.counter + "_" + a
};
$M.getMarkClassSeries = function (a) {
    a = $(a).attr($M.constant.MARK_ATTRIBUTE);
    if (!a)return null;
    var b = a.lastIndexOf("_");
    return a && 0 <= b && a.substring(0, b + 1)
};
$M.getMarkSeriesByPart = function (a, b) {
    var c = $M.getMarkClassSeries(a);
    return $M.getMarkSeries(c, b)
};
$M.getMarkType = function (a) {
    return $(a).attr($M.constant.ATTR_MARK_TYPE) || $($M.getMarkSeriesByPart(a)[0]).attr($M.constant.ATTR_MARK_TYPE)
};
$M.processSelection = function (a, b) {
    for (var c = 0, d = [], e = 0; e < a.length; e++) {
        var f = $(a[e]);
        if ($M.isMark(a[e]))f.addClass(b), d.push(a[e]), f.attr($M.constant.MARK_ATTRIBUTE, $M.generateMarkClassId(c)); else {
            var g = {"class": b};
            g[$M.constant.MARK_ATTRIBUTE] = $M.generateMarkClassId(c);
            f.wrap($M.utils.createElement($M.constant.WRAP_TAG, g));
            d.push($M.getNodeNearestMark(a[e]))
        }
        c++
    }
    $M.stack.push(b, $M.generateMarkClassId(""));
    c = $M.getNodeNearestMark(a[0]);
    e = $M.getNodeNearestMark(a[a.length - 1]);
    $(c).addClass($M.getStyle("MARK_START"));
    $(e).addClass($M.getStyle("MARK_END"));
    $(d).each(function () {
        $(this).attr($M.constant.ATTR_MARK_TYPE, b)
    });
    $M.triggerProcessCallback(b, c, e, d);
    $M.stack.push("ALL", $M.generateMarkClassId(""))
};
$M.registerProcessCallback = function (a, b) {
    $M._process_callback = $M._process_callback || {};
    $M._process_callback[a] = $M._process_callback[a] || [];
    $M._process_callback[a].push(b)
};
$M.triggerProcessCallback = function (a, b, c, d) {
    if ($M._process_callback && $M._process_callback[a])for (var e = 0; e < $M._process_callback[a].length; e++)$M._process_callback[a][e](b, c, d)
};
$M.isMark = function (a, b) {
    return a && (a.tagName && a.tagName.toLowerCase() == $M.constant.WRAP_TAG && -1 < a.className.indexOf($M.constant.STYLE_PREFIX)) && (void 0 == b || $(a).hasClass($M.getStyle(b))) ? !0 : !1
};
$M.getMarkCategory = function (a) {
    var b = "";
    $(["STYLE_STRUCTURE", "STYLE_KEYPOINT", "STYLE_UTILITY"]).each(function () {
        if ($M.isMark(a, this))return b = this.toString(), !1
    });
    return b
};
$M.getFocusedMark = function () {
    var a = window.getSelection().anchorNode;
    return $M.getNodeNearestMark(a)
};
$M.getNodeNearestMark = function (a, b) {
    var c;
    void 0 == b && (b = !0);
    $M.isMark(a) && b ? c = a : $(a).parents($M.constant.WRAP_TAG).each(function () {
        if ($M.isMark(this))return c = this, !1
    });
    return c
};
$M.selectRange = function (a, b) {
    var c = document.createRange(), d = window.getSelection();
    b ? (c.setStart(a), c.setEndAfter(b)) : c.selectNode(a);
    d.removeAllRanges();
    d.addRange(c)
};
$M.selectMark = function (a) {
    $M.getNodeNearestMark(a) && (a = $M.getMarkSeriesByPart(a), $M.selectRange(a[0], a[a.length - 1]))
};
$M.getMarkByMarkAttribute = function (a) {
    return $($M.selectors.byAttr(a))[0]
};
$M.getMarkSeriesStart = function (a) {
    return $M.getMarkByMarkAttribute(a + "0")
};
$M.getMarkSeries = function (a, b) {
    return $($M.selectors.byAttr(a, "^="), b ? b : document.body)
};
$M.deleteMark = function () {
    var a = $M.getFocusedMark() || $M.lastRecord.start;
    a && ($(a).is("." + $M.getStyle("STYLE_CURRENT")) && $M.stack.pop($M.getStyle("STYLE_CURRENT")), $(a).is("." + $M.getStyle("STYLE_TOPIC")) && $M.stack.pop($M.getStyle("STYLE_TOPIC")), $(a).is("." + $M.getStyle("STYLE_Q")) && $M.stack.pop($M.getStyle("STYLE_Q")), $M.getMarkSeriesByPart(a).each(function () {
        var a = $(this);
        a.mouseleave();
        a.after(a.html());
        this.parentNode.removeChild(this)
    }), $M.lastRecord = null)
};
$M.existHeaderBetween = function (a) {
    var b = $(a).closest(":has(.remarkalbe-current)")[0], c = $(".remarkalbe-current")[0];
    do {
        if (a.tagName && a == b)break;
        if (a == c)return !1;
        if (a.previousSibling) {
            a = a.previousSibling;
            if ($(a).has(c)[0])return !1;
            if ($(a).is(":header") || $(a).has(":header")[0])return !0
        } else a = a.parentNode
    } while (1);
    a = c;
    do {
        if (a.tagName && a == b)break;
        if (a.nextSibling) {
            if (a = a.nextSibling, $(a).is(":header") || $(a).has(":header")[0])return !0
        } else a = a.parentNode
    } while (1);
    return !1
};
$M.refreshCurrent = function (a) {
    a.length && (a = a[0]);
    var b = $M.getStyle("STYLE_CURRENT");
    if ($(a).hasClass(b))return $(a).removeClass(b), $M.stack.pop(b), !1;
    var c = $M.stack.pop(b);
    $($M.getMarkSeriesStart(c)).removeClass(b);
    $(a).addClass(b);
    $M.stack.push(b, $M.getMarkClassSeries(a));
    return $M.getMarkClassSeries(a)
};
$M.getMaster = function (a) {
    a = $M.getMarkSeriesByPart(a)[0];
    return (a = $(a).attr($M.constant.ATTR_AFFILIATE)) && $M.getMarkSeries(a)
};
$M.getStyle = function (a) {
    return $M.constant.STYLE_PREFIX + $M.constant[a]
};
$M.keyEvent = {
    h  : $M.getStyle("STYLE_HIGHLIGHT"),
    b  : $M.getStyle("STYLE_BOLD"),
    u  : $M.getStyle("STYLE_UNDERLINE"),
    i  : $M.getStyle("STYLE_ITALIC"),
    z  : $M.getStyle("STYLE_RESTORE"),
    q  : $M.getStyle("STYLE_Q"),
    a  : $M.getStyle("STYLE_A"),
    n  : $M.getStyle("STYLE_NAMING"),
    "?": $M.getStyle("STYLE_PROBLEM"),
    w  : $M.getStyle("STYLE_WORD"),
    t  : $M.getStyle("STYLE_TAG"),
    T  : $M.getStyle("STYLE_TOPIC"),
    W  : $M.getStyle("STYLE_TOPIC_WHAT"),
    H  : $M.getStyle("STYLE_TOPIC_HOW"),
    Y  : $M.getStyle("STYLE_TOPIC_WHY"),
    G  : $M.getStyle("STYLE_TOPIC_GOOD"),
    B  : $M.getStyle("STYLE_TOPIC_BAD"),
    E  : $M.getStyle("STYLE_TOPIC_EXAMPLE")
};
$M.getTopicStyles = function () {
    for (var a = "WHAT HOW WHY GOOD BAD EXAMPLE".split(" "), b = [], c = 0; c < a.length; c++)b.push($M.getStyle("STYLE_TOPIC_" + a[c]));
    return b
};
$M.styleTag = function () {
    var a = {}, b;
    for (b in $M.keyEvent)0 > "hbuiznwt".split("").indexOf(b) && (a[$M.keyEvent[b]] = b.toUpperCase());
    return a
}();
$M.trigger_press = function (a) {
    var a = a.charCodeAt(0), b = document.createEvent("KeyboardEvent"), c = "undefined" !== typeof b.initKeyboardEvent ? "initKeyboardEvent" : "initKeyEvent";
    Object.defineProperty(b, "keyCode", {
        get: function () {
            return this.keyCodeVal
        }
    });
    Object.defineProperty(b, "which", {
        get: function () {
            return this.keyCodeVal
        }
    });
    b[c]("keypress", !0, !0, window, !1, !1, !1, !1, a, 0);
    b.keyCodeVal = a;
    document.dispatchEvent(b)
};
$M.generateToolbar = function () {
    var a                                                                                                                                                                                                                            = "", b = $M.constant.ID_TOPBAR, c = $("#" + b)[0] || $("<div id='" + b + "'>")[0], b = '<ul class="remarkalbe-toolbar"><li><a href="http://remarker.be" id="remarkalbe-logo" target="_blank">R</a></li><li class="remarkalbe-for-readable"><a href="javascript:void()" id="readable-save-to-note" title="Save to Evernote">Save current view</a></li><li class="remarkalbe-for-readable"><a href="javascript:void()" id="readable-back">Back</a></li><li class="remarkalbe-for-origin" id="remarkalbe-save"><div class="remarkalbe-btn-group"><a href="javascript:void(0)" id="remarkalbe-smart-save" title="Save to Evernote">Save</a><button class="remarkalbe-dropdown-toggle remarkalbe-btn"><span class="remarkalbe-caret"></span></button><ul class="remarkalbe-dropdown-menu"><li><a href="javascript:void()"  id="remarkalbe-custom-save">Custom Save...</a></li></ul></li><li class="remarkalbe-for-origin" style="display:none !important;"><a href="#' +
        $M.constant.HASH_READABLE + '" id="remarkalbe-toolbar-export">Export</a></li><li class="current remarkalbe-for-origin" id="remarkalbe-help"><a href="javascript:void()">Help</a><div id=\'remarkalbe-shortcut-help\'>', d, e = {
        "Keypoint tools": {
            h: "highlight",
            b: "bold",
            i: "italic",
            u: "underline"
        },
        "Topic tools"   : {
            T: "Topic",
            W: "What",
            H: "How",
            Y: "whY",
            G: "Good",
            B: "Bad",
            E: "Example"
        },
        "Utility tools" : {
            q: "question",
            a: "answer",
            t: "tag",
            w: "word",
            z: "cancel"
        }
    }, f                                                                                                                                                                                                                             = [];
    for (d in e) {
        var g = e[d];
        f.push("<div class='", d.toLowerCase().replace(/\s/,
            "-"), "'>", d, "</div>");
        f.push("<ul>");
        for (var h in g)f.push("<li><kbd class='", "key-" + h, "'>", h, "</kbd><span>", g[h], "<span></li>");
        f.push("</ul>")
    }
    d = f.join("");
    $(c).html(a + (b + d + "<a id='remarkalbe-view-doc' href='http://remarker.be/getting_started'>view doc</a></div></li></ul>"));
    $(document.body).append(c);
    $("#remarkalbe-help a").click(function () {
        $(this).parent().toggleClass("current")
    });
    $("kbd", c).mousedown(function () {
        var a = $(this).text();
        $M.trigger_press(a)
    });
    d = function () {
        $(c).toggleClass("remarkalbe-for-tablet",
            1200 > $(window).width())
    };
    $(window).on("resize", d);
    d();
    $("#remarkalbe-toolbar-export, #remarkalbe-custom-save").click(function () {
        $M.launch_readable();
        _gaq && _gaq.push(["_trackEvent", "click", "Export"])
    });
    $("#readable-back").click(function () {
        _gaq && _gaq.push(["_trackEvent", "click", "Back"]);
        window.parent.$M.backOriginal()
    });
    $("#remarkalbe-smart-save").click(function () {
        var a = function () {
            _gaq && _gaq.push(["_trackEvent", "click", "Save"]);
            $M.notify("Analyzing and processing content and marks...");
            $M.launch_invisible_readable()
        };
        $M.stack.top($M.getStyle("STYLE_TAG")) ? a() : $M.messageBox("Info", "You haven't create a <b>[t]ag</b> mark, which is useful for searching and organizing. Please add some [t]ag marks before saving. <a href='" + $M.site + "examples' target='_blank'>See Examples</a>", [{
            content: "OK",
            "class": "rmkb-btn"
        }]).fail(a)
    });
    $("#readable-save-to-note").click(function () {
        $M.notify("Saving...");
        $M.completeAndSubmitForm(window)
    })
};
$M.hide_original = function () {
    var a = document.getElementsByTagName("html")[0], b = a.id && "" < a.id ? "#" + a.id : "html", c = document.getElementsByTagName("body")[0], d = c.id && "" < c.id ? "#" + c.id : "body", e = "{%html%}.{%original%}, {%html%} > {%body%}.{%original%}, {%body%}.{%original%} { position: static !important; margin: 0 !important; padding: 0 !important; border: 0 !important; } {%html%}.{%original%}, {%html%} > {%body%}.{%original%}, {%body%}.{%original%} { overflow: hidden !important; overflow-x: hidden !important; overflow-y: hidden !important; } {%html%}.{%original%} object, {%html%}.{%original%} embed, {%html%}.{%original%} iframe, {%html%} > {%body%}.{%original%} object, {%html%} > {%body%}.{%original%} embed, {%html%} > {%body%}.{%original%} iframe, {%body%}.{%original%} object, {%body%}.{%original%} embed, {%body%}.{%original%} iframe { visibility: hidden !important; } {%html%}.{%original%} {%readable-iframe%}, {%html%} > {%body%}.{%original%} {%readable-iframe%}, {%body%}.{%original%} {%readable-iframe%}, {%readable-iframe%} { display: block !important; overflow: auto !important; visibility: visible !important; } ",
        f                                                                                                                                                                                       = $M.utils.createElement("style", {
            id: $M.constant.ID_ORIGINAL_STYLE,
            type: "text/css"
        }), e                                                                                                                                                                                   = $M.utils.format(e, {
            html: b,
            body: d,
            "readable-iframe": $M.constant.ID_READABLE_IFRAME,
            original: $M.constant.TAG_ORIGINAL
        });
    $(f).html(e);
    document.body.appendChild(f);
    $(a).addClass($M.constant.TAG_ORIGINAL);
    $(c).addClass($M.constant.TAG_ORIGINAL)
};
$M.lauch = function () {
    $M.utils.loadCSS($M.forDevelop($M.assets["markalbe-ui.css"]), !0);
    $M.in_readable = "remarkalbe-readable-body" == document.body.id;
    $M.in_readable || ($M.utils.loadCSS($M.forDevelop($M.assets["markalbe.css"]), !0), $M.checkSaved());
    $M.generateToolbar();
    $(document.body).addClass($M.getStyle("STYLE_COLORFUL"));
    $M.is_pdf && $(document.body).addClass("rmkb-pdf");
    document.addEventListener("keypress", function (a) {
        var b = String.fromCharCode(a.which), b = String.fromCharCode(a.which);
        10 == a.which && 1 == a.ctrlKey ?
            (window.location = "#" + $M.constant.HASH_READABLE, _gaq && _gaq.push(["_trackEvent", "keyDown", "Export"])) : b in $M.keyEvent && !("" == $M.getSelectionContent() && "z" != b) && (_gaq && _gaq.push(["_trackEvent", "keyDown", b]), "z" != b ? ($M.lastContent = $M.getSelectionContent(), a = $M.find_selection_nodes(), $M.counter++, $M.processSelection(a, $M.keyEvent[b]), $M.saveRecord(a), $M.log.info($M.lastRecord)) : ($M.deleteMark(), $M.lastRecord = {}), $M.saved = !1)
    }, !1);
    $(document.body).on("dblclick", $M.selectors.byAttr(), function () {
        $M.selectMark(this)
    });
    $(document.body).on("click", [$M.selectors.byStyle("STYLE_STRUCTURE"), $M.selectors.byStyle("STYLE_A"), $M.selectors.byStyle("STYLE_Q")].join(), function () {
        if ("" == window.getSelection().toString()) {
            var a = $M.getMarkSeriesByPart(this)[0], b = $M.refreshCurrent(a);
            b && ($M.stack.push("ALL", b), $M.isMark(a, "STYLE_TOPIC") && $M.stack.push($M.getStyle("STYLE_TOPIC"), $M.getMarkClassSeries(a)))
        }
    });
    $(document.body).on("mouseenter", $M.selectors.byAttr(), function () {
        if (!$M.isMark(this, "STYLE_TOPIC")) {
            var a = $M.getMaster(this);
            $(a).addClass("stripes-darker")
        }
    });
    $(document.body).on("mouseleave", $M.selectors.byAttr(), function () {
        $($M.getMaster(this)).removeClass("stripes-darker")
    });
    $M.registerProcessCallback($M.getStyle("STYLE_A"), function (a, b) {
        var c = $M.stack.top($M.getStyle("STYLE_Q"));
        $(b).attr($M.constant.ATTR_AFFILIATE, c)
    });
    $("WHAT HOW WHY GOOD BAD EXAMPLE".split(" ")).each(function () {
        $M.registerProcessCallback($M.getStyle("STYLE_TOPIC_" + this), function (a, b, c) {
            $(c).each(function (a) {
                $(c[a]).addClass($M.getStyle("STYLE_STRUCTURE"))
            });
            b = $M.stack.top($M.getStyle("STYLE_TOPIC"));
            $(a).attr($M.constant.ATTR_AFFILIATE, b);
            b ? $M.dismiss_notify() : $M.notify("You'd better create a [T]opic mark before creating a W/H/G/B/E mark.", 1E4, !0, "alert");
            b != $M.stack.top($M.getStyle("STYLE_CURRENT")) && $M.refreshCurrent($($M.selectors.byAttr(b, "^="))[0])
        })
    });
    $(["HIGHLIGHT", "BOLD", "UNDERLINE", "ITALIC"]).each(function () {
        $M.registerProcessCallback($M.getStyle("STYLE_" + this), function (a, b, c) {
            $(c).each(function (a) {
                $(c[a]).addClass($M.getStyle("STYLE_KEYPOINT"))
            });
            (b = $M.stack.top($M.getStyle("STYLE_CURRENT"))) && $M.stack.top("ALL") != b && $M.existHeaderBetween(a) ? ($M.refreshCurrent($($M.selectors.byAttr(b, "^="))[0]), $M.stack.pop($M.getStyle("STYLE_CURRENT")), $M.notify("Inactivated the CURRENT mark. Because it's above the section.", 3E3)) : $(a).attr($M.constant.ATTR_AFFILIATE, b)
        })
    });
    $("Q A STEP PROBLEM TAG WORD".split(" ")).each(function () {
        var a = this;
        $M.registerProcessCallback($M.getStyle("STYLE_" + a), function (b, c, d) {
            $(d).each(function (a) {
                $(d[a]).addClass($M.getStyle("STYLE_UTILITY"))
            });
            c = $M.stack.top($M.getStyle("STYLE_CURRENT"));
            "A" == a && (c = $M.stack.top($M.getStyle("STYLE_Q")));
            $(b).attr($M.constant.ATTR_AFFILIATE, c)
        })
    });
    $M.registerProcessCallback($M.getStyle("STYLE_TOPIC"), function (a, b, c) {
        $(c).each(function (a) {
            $(c[a]).addClass($M.getStyle("STYLE_STRUCTURE"))
        });
        $M.stack.push("*", $M.refreshCurrent(a))
    });
    $M.utils.loadJS($M.forDevelop($M.assets["notification.js"]));
    $(document).on("click", ".remarkalbe-dropdown-toggle", function () {
        $(this).toggleClass("active");
        return !1
    });
    $(document).on("click",
        ".remarkalbe-dropdown-menu", function () {
            $(".remarkalbe-dropdown-toggle").removeClass("active")
        });
    $(document).click(function () {
        $(".remarkalbe-dropdown-toggle").removeClass("active")
    });
    $M.create_save_form();
    $M.addMessageListener()
};
$M.ready = function (a) {
    window.console && window.console.log && window.console.log("launch ready " + a);
    (!document.body || void 0 == $) && 30 > a ? setTimeout(function () {
        $M.ready(a + 1)
    }, 100) : $M.lauch()
};
$M.loadAssets = function (a) {
    _result = "";
    _css_template = '<link rel="stylesheet" href="%{src}" type="text/css" media="screen" />';
    _js_template = '<script type="text/javascript" src="%{src}"><\/script> ';
    for (var b in a)switch (b) {
        case "css":
            $(a[b]).each(function (c) {
                _result += _css_template.replace("%{src}", a[b][c])
            });
            break;
        case "js":
            $(a[b]).each(function (c) {
                _result += _js_template.replace("%{src}", a[b][c])
            })
    }
    return _result
};
$M.NOTIFY_TIMER = "";
$M.notify = function (a, b, c, d) {
    var e = $("#remarkalbe-notify")[0];
    e ? (e.className = "", clearTimeout($M.NOTIFY_TIMER), $(e).html(a).show(), b && ($M.NOTIFY_TIMER = setTimeout(function () {
        $M.dismiss_notify()
    }, b)), c && $(e).click(function () {
        $M.dismiss_notify()
    }), d && $(e).addClass(d)) : ($(document.body).append($M.constant.HTML_NOTIFY), $M.notify(a, b, c, d))
};
$M.dismiss_notify = function () {
    $("#remarkalbe-notify").fadeOut()
};
$M._dtd = $.Deferred();
$M.messageBox = function (a, b, c) {
    $M._dtd = $.Deferred();
    var d = $($M.constant.HTML_MESSAGEBOX);
    d.find("h3").text(a);
    d.find(".remarkalbe-info-box-content").html(b);
    $(c).each(function () {
        d.find(".remarkalbe-info-box-buttons").append($("<a>").attr("href", this.href || "javascript:void(0)").attr("target", this.target || "_self").attr("type", this.type).attr("class", this["class"]).text(this.content))
    });
    $(document.body).append(d);
    $(document.body).on("click", ".remarkalbe-info-box-buttons a, .remarkalbe-modal-bg", function () {
        $(this).is("[type=success]") &&
        $M._dtd.resolve();
        $(this).is("[type=fail]") && $M._dtd.reject();
        var a = $(".remarkalbe-modal-bg, .remarkalbe-info-box");
        a.hide();
        a.remove()
    });
    return $M._dtd
};
$M.create_save_form = function () {
    var a = "<form id='remarkalbe-save-form' action='" + $M.sync_service + "' method='POST' target='remarkalbe-save-form-result' style='display:none !important;' accept-charset='utf-8'><textarea id='remarkalbe-save-content' type='hidden' name='note[content]'></textarea><input type='hidden' name='note[title]' id='remarkalbe-save-title' /><input type='hidden' name='note[url]' id='remarkalbe-save-url' /><input type='hidden' name='note[tags]' id='remarkalbe-save-tags'><input type='hidden' name='note[words]' id='remarkalbe-save-words'><input type='submit' /></form>";
    $(document.body).append(a);
    $(document.body).append("<iframe id='remarkalbe-save-form-result' name='remarkalbe-save-form-result' style='display:none !important;'></iframe>")
};
$M.create_readable = function (a) {
    var b = $("#" + $M.constant.ID_READABLE_IFRAME);
    0 < b.length && b.remove();
    var c = "width:100% !important;height:100% !important;visibility:visible !important; display:block !important; overflow:auto !important; position:fixed !important; z-index:2147483646 !important; top:0; left:0; background:#fff !important";
    a && (c = "width:0 !important;height:0 !important;visibility:hidden !important; display:none !important; overflow:auto !important; position:fixed !important; z-index:-1 !important; right:0; bottom:0; background:#fff !important");
    b =
        $M.utils.createElement("iframe", {
            id               : $M.constant.ID_READABLE_IFRAME,
            frameBorder      : "0",
            allowTransparency: "true",
            scrolling        : "auto",
            style            : c
        });
    _assets = {
        js : [$M.assets["jQuery.js"], $M.forDevelop($M.assets["markalbe.js"]), $M.forDevelop($M.assets["remarkalbe.js"])],
        css: [$M.forDevelop($M.assets["markalbe-ui.css"])]
    };
    _iframe_html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html id="html" xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><script>window.$M_main =' +
        (window.$M_main && ['"', window.$M_main, '"'].join("")) + "<\/script><script>window.$M_is_pdf =" + $M.is_pdf + "<\/script>" + $M.loadAssets(_assets) + '</head><body class="remarkalbe-readable-body" id="remarkalbe-readable-body"><h1 class="loading-head">loading...</h1><script>$(document.body).append($R.buildView(window.parent, true));$(".loading-head").hide();$M.generateToolbar();<\/script>' + (a ? '<script>$R.clickToChangeView($R.recommendView);$R.originWindow.postMessage("ready", "*");<\/script>' : "") + "</body></html>";
    c = "{%iframe%}{width:100% !important;height:100% !important;visibility:visible !important; display:block !important; overflow:auto !important; position:fixed !important; z-index:2147483646 !important; top:0; left:0;}";
    cssElement = $M.utils.createElement("style", {id: $M.constant.ID_READABLE_STYLE, type: "text/css"});
    c = $M.utils.format(c, {iframe: "#" + $M.constant.ID_READABLE_IFRAME});
    $(cssElement).html(c);
    document.body.appendChild(cssElement);
    document.body.appendChild(b);
    a = document.getElementById($M.constant.ID_READABLE_IFRAME);
    b = b.contentDocument || b.contentWindow.document;
    b.open();
    b.write(_iframe_html);
    b.close();
    a.focus();
    return a
};
$M.checkSaved = function () {
    window.onbeforeunload = function () {
        if (!$M.saved)return "You have marks not saved. Leaving the page will discard what you mark. Are you sure to exit? "
    }
};
$M.completeAndSubmitForm = function (a) {
    a = a.$R && $("#" + a.$R.currentView, a.document.body);
    if (!a || 0 == a.length)alert("Save Fail! Please  save manually."); else {
        var b = function (a) {
            a = $.map(a, function (a) {
                return $(a).text()
            });
            return JSON.stringify(a)
        };
        $("#remarkalbe-save-content").val($("<div>").text(a.html()).html());
        $("#remarkalbe-save-title").val(a.find(".remarkalbe-title-header").text());
        $("#remarkalbe-save-url").val(a.find(".remarkalbe-source-url-section a").text());
        $("#remarkalbe-save-words").val(b(a.find(".remarkalbe-word-section .remarkalbe-word-section-word")));
        $("#remarkalbe-save-tags").val(b(a.find(".remarkalbe-tag-section .remarkalbe-tag-section-tag")));
        $("#remarkalbe-save-form").submit()
    }
};
$M.addMessageListener = function () {
    var a = /http.*?\/\/[^/]*/;
    window.addEventListener("message", function (b) {
        switch (!0) {
            case 0 <= b.origin.indexOf(document.domain) && "ready" == b.data:
                b = document.getElementById($M.constant.ID_READABLE_IFRAME);
                $M.notify("Saving...");
                $M.completeAndSubmitForm(b.contentWindow);
                break;
            case "save" == b.data:
                $("#remarkalbe-smart-save").click();
                break;
            case "saved" == b.data:
                $M.notify("Saving...", null, !1);
                setTimeout(function () {
                    $M.notify("Save successfully!", null, !1)
                }, 3E3);
                $M.saved = !0;
                break;
            case b.data.status && a.test($M.sync_service):
                $M.processResponse(b.data)
        }
    })
};
$M.processResponse = function (a) {
    switch (a.status) {
        case "302":
            $M.dismiss_notify();
            $(document.body).append(a.content);
            break;
        case "200":
            $M.notify("Save successfully!", null, !0);
            $M.saved = !0;
            $M.in_readable && (window.parent.$M.saved = !0);
            break;
        case "500":
            $M.notify(a.content)
    }
};
$M.launch_invisible_readable = function () {
    $M.create_readable(!0)
};
$M.launch_readable = function () {
    $M.hide_original();
    $M.create_readable()
};
$M.ready(0);
$M.backOriginal = function () {
    $("#" + $M.constant.ID_ORIGINAL_STYLE).remove();
    $("#" + $M.constant.ID_READABLE_IFRAME).remove()
};
function locationHashChanged() {
    switch (location.hash) {
        case "":
            $M.backOriginal();
            break;
        case "#" + $M.constant.HASH_READABLE:
            0 == $("#" + $M.constant.ID_READABLE_IFRAME).length && $M.launch_readable()
    }
}
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36157260-2"]);
_gaq.push(["_trackPageview", window.location.href]);
(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
})();
_gaq.push(["_trackEvent", "init", window.location.href]);
