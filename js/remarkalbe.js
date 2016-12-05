var $R = {
    constant: {
        ATTR_AFFILIATE: "remarkalbe-affiliate-for",
        ATTR_MARK     : "remarkalbe",
        MARK_TAG      : "span",
        MARK_SELECTOR : "span[remarkalbe]",
        ID_VIEWNAV    : "remarkalbe-view-nav"
    }
};
$R.language = function () {
    return "cjk"
}();
$R.parsingOptions = {
    element_container                 : "body div article section td li dd dt".split(" "),
    elements_ignore                   : "button input select textarea optgroup command datalist frame framset noframes style link script noscript canvas applet map marquee area base".split(" "),
    elements_ignore_tag               : "form fieldset details dir center font".split(" "),
    elements_visible                  : "article section ul ol li dd table tr td div p span h1 h2 h3 h4 h5 h6".split(" "),
    elements_self_closing             : "br hr img col source embed param iframe".split(" "),
    element_copy_totally              : ["pre"],
    elements_link_density             : "div table ul li ol section aside header".split(" "),
    elements_keep_attributes          : {
        a     : ["title", "name"],
        img   : ["width", "height", "alt", "title"],
        video : "src width height poster audio preload autoplay loop controls".split(" "),
        audio : ["src", "preload", "autoplay", "loop", "controls"],
        source: ["src", "type"],
        object: "data type width height classid codebase codetype".split(" "),
        param : ["name", "value"],
        embed : "src type width height flashvars allowscriptaccess allowfullscreen bgcolor".split(" "),
        iframe: ["src", "width", "height", "frameborder", "scrolling"],
        td    : ["colspan", "rowspan"],
        th    : ["colspan", "rowspan"]
    },
    elements_paragraph_block          : ["p", "div", "td", "li", "section"],
    elements_paragraph_block_for_marks: ["p", "pre", "code", "div"],
    marks_ignore_in_skeleton          : ["STYLE_TAG", "STYLE_WORD"]
};
$R.domainList = {
    domains_ignore_links : "doubleclick.net fastclick.net adbrite.com adbureau.net admob.com bannersxchange.com buysellads.com impact-ad.jp atdmt.com advertising.com itmedia.jp microad.jp serving-sys.com adplan-ds.com".split(" "),
    domains_ignore_images: "googlesyndication.com fastclick.net .2mdn.net de17a.com content.aimatch.com bannersxchange.com buysellads.com impact-ad.jp atdmt.com advertising.com itmedia.jp microad.jp serving-sys.com adplan-ds.com".split(" "),
    domains_keep_videos  : "youtube.com youtube-nocookie.com vimeo.com hulu.com yahoo.com flickr.com newsnetz.ch".split(" ")
};
var _$R_style_topic_basic = "background:#E0FA91;", _$R_style_topic_good_and_bad = "background:#E2E2E2;", _$R_style_topic_q_and_a = "background:#FDDFEB;";
$R.styles = {
    mark_tag                    : "font-weight : bold;background-color: #9E9E9E;\tmargin-right: 4px;color:#fff;padding: 1px 4px;border-radius : 4px 0 0 4px;font-style: normal;",
    mark_tag_plain              : "background: #fff; color:000; font-style:normal;",
    "remarkalbe-topic"          : _$R_style_topic_basic,
    "remarkalbe-topic-what"     : _$R_style_topic_basic,
    "remarkalbe-topic-how"      : _$R_style_topic_basic,
    "remarkalbe-topic-why"      : _$R_style_topic_basic,
    "remarkalbe-topic-example"  : _$R_style_topic_good_and_bad,
    "remarkalbe-topic-bad"      : _$R_style_topic_good_and_bad,
    "remarkalbe-topic-good"     : _$R_style_topic_good_and_bad,
    "remarkalbe-highlight"      : "background:#FCF5A8;",
    "remarkalbe-bold"           : "font-weight:bold;",
    "remarkalbe-underline"      : "text-decoration:underline;",
    "remarkalbe-italic"         : "font-style:italic;",
    "remarkalbe-question"       : _$R_style_topic_q_and_a,
    "remarkalbe-answer"         : _$R_style_topic_q_and_a,
    "remarkalbe-word"           : "background:#B9DFF1;",
    "remarkalbe-tag"            : "background:#FF5918; color:#fff;",
    "remarkalbe-tag-section-tag": "background:#FF5918; color:#fff; border-radius:4px; padding:1px 4px;margin-left:5px;"
};
$R.textHelper = {};
$R.textHelper.getTextLength = function (a) {
    return a.replace(/[\r\n\s]/gi, "").length
};
$R.textHelper.getWordCount = function (a) {
    var c = [[/[\u3002]/gi, 4], [/[\uff1b|\uff1a|\u201c|\u201d|\uff08|\uff09|\u3001|\u300a|\u300b||\uff0c|\uff1f]/gi, 1]], a = a.replace(/[\r\n\s]+/gi, " "), a = a.replace(/([.,?!:;()\[\]'""-])/gi, "$1 "), b;
    for (b in c)a = a.replace(c[b][0], "[=word(" + c[b][1] + ")]");
    var d = 0, c = a.match(/([^\s\d]{3,})/gi), d = d + (null != c ? c.length : 0);
    a.replace(/\[=word\((\d)\)\]/, function (a, b) {
        d += 5 * parseInt(b)
    });
    return d
};
$R.imageHelper = {};
$R.imageHelper.getImageType = function (a) {
    var c = $(a).width(), a = $(a).height();
    switch (!0) {
        case 5E4 <= c * a:
        case 400 <= c && 80 <= a:
            return "large";
        case 2E4 <= c * a:
        case 150 <= c && 150 <= a:
            return "medium";
        case 5 >= c && 5 >= a:
            return "skip";
        default:
            return "small"
    }
};
$R.log = {};
$R.log.warn = function () {
};
$R.log.info = function () {
};
$R.commonHelper = {};
$R.commonHelper.getOuterHTML = function (a) {
    var c = $("<div>"), b = function (a) {
        var c = document.createElement(a.tag), a = a.children, h;
        for (h in a)a[h].tag ? c.appendChild(b(a[h])) : $(c).append($(a[h]).clone());
        return c
    };
    c.append(b(a));
    $(c).find(".remarkalbe-end").after("<br />");
    return c.html()
};
$R.commonHelper.pluralize = function (a) {
    return a + "s"
};
$R.commonHelper.candidateSort = function (a, c, b, d) {
    c = c ? -1 : 1;
    return function (e, h) {
        var j = e, g = h;
        a.constructor == String && (a = [a]);
        for (var k = 0; k < a.length; k++)j = j[a[k]], g = g[a[k]];
        return j < g ? -c : j > g ? c : b ? $R.commonHelper.candidateSort(b, d)(e, h) : 0
    }
};
var inList       = function (a, c, b) {
    c = $R.parsingOptions[c];
    b && (c = c[b]);
    return c.indexOf && (0 == c.indexOf("*") || -1 < c.indexOf(a))
}, containsPart  = function (a, c) {
    for (var b = 0, d = $R.domainList[c]; b < d; b++)if (a.indexOf(-1 < $R.domainList[c][b]))return !0
}, zeroDimension = function (a) {
    return !(a.offsetWidth + a.offsetHeight + a.offsetLeft + a.offsetTop)
};
$R.exploreNode = function (a, c, b) {
    var d = 0, e = !1, h = 0, j = 0, g = 0, k = 0, l = 0, r = 0, q = 0, u = [], x = [], y = [], z = [], A = function (a) {
        d++;
        var m = "#valid";
        switch (a.nodeType) {
            case 3:
                m = "#text";
                break;
            case 1:
                a.tagName && "" < a.tagName && (m = a.tagName.toLowerCase())
        }
        var f = {
            index           : d,
            node            : a,
            is_container    : -1 < $R.parsingOptions.element_container.indexOf(m),
            is_paragraph    : -1 < $R.parsingOptions.elements_paragraph_block.indexOf(m),
            is_candidate    : !1,
            is_text         : !1,
            is_link         : !1,
            is_link_skip    : !1,
            is_mark         : !1,
            is_image_small  : !1,
            is_image_medium : !1,
            is_image_large  : !1,
            is_image_skip   : !1,
            image_type      : "",
            length_text     : {
                above_plain_text: j,
                above_links_text: k,
                above_all_text  : k + j,
                plain_text      : 0,
                links_text      : 0,
                all_text        : 0
            },
            count_words     : {
                above_plain_words: g,
                above_links_words: l,
                above_all_words  : l + g,
                plain_words      : 0,
                links_words      : 0,
                all_words        : 0
            },
            count_containers: {above_containers: q, containers: 0},
            count_candidates: {above_candidates: r, candidates: 0},
            count_links     : {links: 0, links_skip: 0},
            count_images    : {images_small: 0, images_medium: 0, images_large: 0, images_skip: 0},
            count_marks     : {marks: 0},
            count_children  : {
                contains_mark: 0,
                mark_coverage: 0
            }
        };
        if (!("#invalid" == m || inList(m, "elements_ignore")))if ((!inList(m, "elements_visible") || !zeroDimension(a)) && !(inList(m, "elements_self_closing") && "img" != m)) {
            switch (m) {
                case "#text":
                    f.is_text = !0;
                    var s = a.nodeValue, a = f.length_text.plain_text = $R.textHelper.getTextLength(s), s = f.count_words.plain_words = $R.textHelper.getWordCount(s);
                    e ? (k += a, l += s) : (j += a, g += s);
                    return f;
                case "a":
                    m = a.href;
                    if ("" == m)break;
                    f.is_link = !0;
                    containsPart(m, "domains_ignore_links") && (f.is_link_skip = !0);
                    e || (e = !0, h = f.index);
                    y.push(f);
                    break;
                case "img":
                    m = a.src;
                    f.image_type = $R.imageHelper.getImageType(a);
                    m && containsPart(m, "domains_ignore_images") && (f.image_type = "skip");
                    f["is_image_" + f.image_type] = !0;
                    break;
                case $R.constant.MARK_TAG:
                    c && $M.isMark(a) && (f.is_mark = !0)
            }
            for (var m = 0, C = a.childNodes.length; m < C; m++) {
                var n = A(a.childNodes[m]);
                if (n) {
                    var w = ["link", "image", "container", "candidate", "mark"];
                    for (s in w) {
                        var B = $R.commonHelper.pluralize(w[s]);
                        _count_category = "count_" + B;
                        var v = f[_count_category], t;
                        for (t in v)v = n["is_" + t.replace(B,
                            w[s])], void 0 != v && (f[_count_category][t] += n[_count_category][t], f[_count_category][t] += v ? 1 : 0)
                    }
                    if (n.is_mark || 0 < n.count_marks.marks)f.count_children.contains_mark += 1, f.count_children.mark_coverage += n.length_text.all_text;
                    n.is_link ? (f.length_text.links_text += n.length_text.plain_text + n.length_text.links_text, f.count_words.links_words += n.count_words.plain_words + n.count_words.links_words) : (f.length_text.plain_text += n.length_text.plain_text, f.count_words.plain_words += n.count_words.plain_words, f.length_text.links_text +=
                        n.length_text.links_text, f.count_words.links_words += n.count_words.links_words)
                }
            }
            f.length_text.all_text += f.length_text.plain_text + f.length_text.links_text;
            f.count_words.all_words += f.count_words.plain_words + f.count_words.links_words;
            f.count_children.mark_coverage /= f.length_text.all_text;
            f.is_link && h == f.index && (e = !1, h = 0);
            f.is_paragraph && z.push(f);
            if (f.is_container || 1 == f.index || b) {
                u.push(f);
                f.is_container && q++;
                if (a = !b)a:switch (!0) {
                    case "cjk" != $R.language && 2 * f.count_links >= f.count_words.plain_words:
                    case "cjk" !=
                    $R.language && 65 > 3 * f.length_text.plain_text:
                    case "cjk" != $R.language && 5 > f.count_words.plain_words:
                    case "cjk" == $R.language && 10 > f.length_text.plain_text:
                    case "cjk" == $R.language && 2 > f.count_words.plain_words:
                        a = !1;
                        break a;
                    default:
                        a = !0
                }
                a && (f.is_candidate = !0, x.push(f), r++)
            }
            return f
        }
    };
    A(a);
    return b ? u.pop() : {containers: u, candidates: x, links: y, paragraphs: z}
};
$R.processCandidates = function (a) {
    a.sort($R.commonHelper.candidateSort("index"));
    for (var c = 0, b = a.length; c < b; c++) {
        for (var d = 0, e = c; e < b; e++)0 == a[e].count_candidates.candidates && jQuery.contains(a[c].node, a[e].node) && d++;
        a[c].count_pieces = {pieces: d};
        a[c].assessment = $R.computeFurtherDetails(a[c], a[0])
    }
    return a
};
$R.computeFurtherDetails = function (a, c) {
    var b = {
        paragraphs: {},
        words     : {},
        text      : {},
        links     : {},
        above_text: {},
        candidates: {},
        containers: {},
        pieces    : {},
        marks     : {}
    };
    _total = jQuery.extend({}, c);
    var d = function (a, c, d, g, k, l) {
        var r = c.split("_")[0], q = c.split("_")[1], l = l ? l : k ? k : d, k = k ? k == l ? c : k : c, r = ["ratio", r, d, g == _total ? "to_total" : "to", l].join("_"), g = g[k][l];
        b[q][r] = a[c][d] / (0 == g ? 1 : g)
    };
    b.paragraphs.count_lines = a.length_text.plain_text / 65;
    b.paragraphs.count_paragraphs_3_lines = b.paragraphs.count_lines / 3;
    b.paragraphs.count_paragraphs_5_lines =
        b.paragraphs.count_lines / 5;
    b.paragraphs.count_paragraphs_50_words = a.count_words.plain_words / 50;
    b.paragraphs.count_paragraphs_80_words = a.count_words.plain_words / 80;
    d(a, "length_text", "plain_text", _total);
    d(a, "count_words", "plain_words", _total);
    d(a, "length_text", "links_text", a, "plain_text");
    d(a, "count_words", "links_words", a, "plain_words");
    d(a, "length_text", "links_text", a, "all_text");
    d(a, "count_words", "links_words", a, "all_words");
    d(a, "length_text", "links_text", _total);
    d(a, "count_words", "links_words",
        _total);
    d(a, "count_links", "links", _total);
    d(a, "count_links", "links", a, "count_words", "plain_words");
    d(a, "length_text", "above_plain_text", _total, "plain_text");
    d(a, "count_words", "above_plain_words", _total, "plain_words");
    d(a, "count_candidates", "candidates", _total);
    d(a, "count_containers", "containers", _total);
    d(a, "count_pieces", "pieces", _total);
    d(a, "count_marks", "marks", _total);
    return b
};
$R.calculateScore = function (a, c, b, d) {
    var e = d * (1 - a);
    return 0 > b ? e : e + d * a * Math.pow(b, c)
};
$R.calculateScoreHistory = function (a, c) {
    var b, d = [c], e;
    for (e in a)p = a[e], b = $R.calculateScore(p.factor, p.power, p.value, d[0]), d.unshift(b);
    return d
};
$R.computeScoreForCandidate = function (a, c) {
    var b = a.assessment;
    base = b.paragraphs.count_paragraphs_3_lines + 1.5 * b.paragraphs.count_paragraphs_5_lines + b.paragraphs.count_paragraphs_50_words + 1.5 * b.paragraphs.count_paragraphs_80_words + 3 * a.count_images.images_large - 0.5 * a.count_images.images_skip - 0.5 * a.count_images.images_small;
    c && (base += a.count_marks.marks);
    var d;
    d = [{value: b.text.ratio_length_plain_text_to_total_plain_text, factor: 0.5, power: 2}, {
        value: b.words.ratio_count_plain_words_to_total_plain_words, factor: 0.5,
        power: 2
    }, {
        value : 1 - b.text.ratio_length_above_plain_text_to_total_plain_text,
        factor: 0.5,
        power : 5
    }, {
        value : 1 - b.words.ratio_count_above_plain_words_to_total_plain_words,
        factor: 0.5,
        power : 5
    }, {
        value : 1 - b.text.ratio_length_links_text_to_total_links_text,
        factor: 0.5,
        power : 1
    }, {
        value : 1 - b.words.ratio_count_links_words_to_total_links_words,
        factor: 0.5,
        power : 1
    }, {
        value : 1 - b.links.ratio_count_links_to_total_links,
        factor: 0.5,
        power : 1
    }, {value: 1 - b.text.ratio_length_links_text_to_plain_text, factor: 0.5, power: 1}, {
        value : 1 - b.words.ratio_count_links_words_to_plain_words,
        factor: 0.5, power: 1
    }, {
        value : 1 - b.text.ratio_length_links_text_to_all_text,
        factor: 0.5,
        power : 1
    }, {
        value : 1 - b.words.ratio_count_links_words_to_all_words,
        factor: 0.5,
        power : 1
    }, {
        value : 1 - b.links.ratio_count_links_to_plain_words,
        factor: 0.5,
        power : 1
    }, {
        value : 1 - b.candidates.ratio_count_candidates_to_total_candidates,
        factor: 0.5,
        power : 1
    }, {
        value : 1 - b.containers.ratio_count_containers_to_total_containers,
        factor: 0.5,
        power : 1
    }, {value: 1 - b.pieces.ratio_count_pieces_to_total_pieces, factor: 0.5, power: 1}];
    c && d.push({
        value : b.marks.ratio_count_marks_to_total_marks,
        factor: 0.5, power: 2
    });
    return $R.calculateScoreHistory(d, 1E3 * base)
};
$R.judgeNode = function (a) {
    var c = "#valid";
    switch (a.nodeType) {
        case 3:
            c = "#text";
            break;
        case 1:
            a.tagName && "" < a.tagName && (c = a.tagName.toLowerCase())
    }
    result = {type: "valid", tag: c, ignore: !0};
    if ("#valid" == c)return result;
    if (inList(c, "elements_ignore"))return result.type = "elements_ignore", result;
    if ("#text" == c)return result.type = "text", result.ignore = !1, result;
    if (inList(c, "elements_visible") && zeroDimension(a))return result.type = "elements_invisible", result;
    switch (c) {
        case "object":
        case "embed":
        case "iframe":
            var b                                                                                        =
                    "object" == c ? $(a).find("param[name='movie']").attr("value") : $(a).attr("src"), d = "" < b ? !1 : !0;
            containsPart(b, "domains_keep_videos") || (d = !0);
            if (d)return result.type = "video_skip", result
    }
    if ("a" == c && containsPart(a.href, "domains_ignore_links"))return result.type = "links_ignore", result;
    b = !1;
    if ("a" == c || "li" == c)if (b = $R.exploreNode(a, !0, !0), 0 < b.count_images.images_small + b.count_images.images_skip)return result;
    if (inList(c, "elements_link_density") && 130 > (a.innerText || a.textContent).length)if (b = b || $R.exploreNode(a,
                !0, !0), 2 <= b.count_links.links && 0 == b.count_marks.marks && b.length_text.links_text > b.length_text.plain_text && 0 == b.count_images.images_large + b.count_images.images_medium || 0 == (a.innerText || a.textContent).length)return result;
    if ("img" == c && (b = b || $R.exploreNode(a, !0, !0), b.is_image_skip))return result;
    result.ignore = !1;
    return result
};
$R.generateMarkTag = function (a) {
    var a = $M.styleTag[$M.getMarkType(a)], c = $R.styles.mark_tag, b = "";
    a && (b = b + ("<i class='remarkalbe-mark-tag' style=\"" + c + '">') + a, b += "</i>");
    return b
};
$R.insertMarkTag = function (a) {
    $(a).prepend($R.generateMarkTag(a))
};
$R.getMarkCSSStyle = function (a) {
    a = $M.getMarkType(a);
    return $R.styles[a]
};
$R.purifyContent = function (a) {
    var c = function (a, b) {
        return "" < b ? " " + a + '="' + b + '"' : ""
    }, b  = "", d = function (a) {
        var h = $R.judgeNode(a), j = h.tag;
        if ("text" == h.type)b += a.nodeValue.replace(/</gi, "&lt;").replace(/>/gi, "&gt;"); else {
            var g = $M.isMark(a);
            if (!h.ignore || g) {
                if (!inList(j, "elements_ignore_tag")) {
                    b += "<" + j;
                    _attrs = a.attributes;
                    if (g) {
                        for (var h = 0, k = _attrs.length; h < k; h++)_attr = _attrs.item(h).name, _value = a.getAttribute(_attr), b += c(_attr, _value);
                        b += " style='" + $R.getMarkCSSStyle(a) + "'"
                    }
                    if (!g && _attrs && j in $R.parsingOptions.elements_keep_attributes) {
                        h =
                            0;
                        for (k = _attrs.length; h < k; h++)_attr = _attrs.item(h).name, inList(_attr, "elements_keep_attributes", j) && (_value = a.getAttribute(_attr), b += c(_attr, _value))
                    }
                    b += c("id", a.getAttribute("id"));
                    switch (j) {
                        case "a":
                            b += c("target", "_blank");
                            b += " ";
                            b += c("href", a.href);
                            break;
                        case "img":
                            b += " ", b += c("src", a.src)
                    }
                    if (inList(j, "elements_self_closing")) {
                        b += " />";
                        return
                    }
                    b += ">"
                }
                $M.isMark(a, "MARK_START") && (b += $R.generateMarkTag(a));
                h = 0;
                for (k = a.childNodes.length; h < k; h++)d(a.childNodes[h]);
                inList(j, "elements_ignore_tag") || (b +=
                    "</" + j + ">")
            }
        }
    };
    d(a);
    return b
};
$R.getMainContent = function (a, c) {
    var b = $R.exploreNode(a, c), b = $R.processCandidates(b.candidates);
    for (i in b)b[i].scores = $R.computeScoreForCandidate(b[i], c), b[i].score = b[i].scores[0];
    b.sort($R.commonHelper.candidateSort("score", !0));
    _content_html = $R.purifyContent(b[0].node);
    return {candidates: b, content: _content_html}
};
$R.getPlainText = function (a) {
    return a.replace(/<[^>]+?>/gi, "").replace(/\s+/gi, " ").replace(/[\n\r]+/, "").trim()
};
$R.isGoodTitle = function (a, c) {
    var b = $R.getPlainText(a), d = $R.textHelper.getTextLength(b);
    return 5 > d || 195 < d ? 0 : -1 < c.indexOf(b) ? b : 0
};
$R.getTitleAndPostionFromFragment = function (a, c) {
    for (var b = [/<(h1)[^>]*>([\s\S]+?)<\/\1>/gi, /<(h2)[^>]*>([\s\S]+?)<\/\1>/gi, /<(h3|h4|h5|h6)[^>]*>([\s\S]+?)<\/\1>/gi], d = 0, e = b.length; d < e; d++) {
        var h = b[d].exec(a);
        if (h && -1 < b[d].lastIndex) {
            var j = b[d].lastIndex, g = j - h[0].length;
            if (_good_title = $R.isGoodTitle(h[2], c))return [_good_title, j, g]
        }
    }
    return [0, 0]
};
$R.getTitleFromFragment = function (a, c) {
    return $R.getTitleAndPostionFromFragment(a, c)[0]
};
$R.generateTitleHeader = function (a) {
    return "<div class='remarkalbe-title-header'><h1>" + a + "</h1></div>"
};
$R.generateContentSection = function (a) {
    return "<div class='remarkalbe-content-section'>" + a + "</div>"
};
$R.generateSourceURLSection = function () {
    var a = window.location.href;
    return $("<div class='remarkalbe-source-url-section'  style='font-style:italic;color: #999;'>source page &lt;</div>").append($("<a>", {
        href  : a,
        target: "_blank",
        style : "color:#999"
    }).text(a)).append("&gt;")[0].outerHTML
};
$R.generateTagSection = function (a) {
    return !a | 0 == a.length ? "" : ["<div class='remarkalbe-tag-section' style='margin-bottom:10px;'><span>tags: </span>", $.map(a, function (a) {
        return ["<span class='remarkalbe-tag-section-tag' style='", $R.styles["remarkalbe-tag-section-tag"], "'>", a, "</span>"].join("")
    }).join(""), "</div>"].join("")
};
$R.generateWordSection = function (a) {
    return !a | 0 == a.length ? "" : ["<div class='remarkalbe-word-section'><h3 style='color:#00A3F0;font-weight:bold;display:block !important;margin:6px 0;text-decoration: underline;font-style:italic;'>Words List</h3>", $.map(a, function (a) {
        return ["<div  class='remarkalbe-word-section-word'>", a, "</div>"].join("")
    }).join(""), "</div>"].join("")
};
$R.getTitleAndSplit = function (a, c, b) {
    var b = "" < b.document.title ? b.document.title : "", d = $R.getTitleAndPostionFromFragment(c, b), e = d[0], h = d[1];
    _start_pos = d[2];
    var j = a.node, d = "";
    if (!e) {
        do {
            if (j.tagName && "body" == j.tagName.toLowerCase())break;
            if (j.previousSibling) {
                if (j = j.previousSibling, d = $R.purifyContent(j) + d, e = $R.getTitleFromFragment(d, b), 585 < $R.textHelper.getTextLength($R.getPlainText(d)))break
            } else j = j.parentNode
        } while (!e)
    }
    e && (c = d + c, d = $R.getTitleAndPostionFromFragment(c, b), e = d[0], h = d[1], _start_pos = d[2]);
    e || (j = b.split(/<<|>>|\||-/g), 1 < j.length && j[0].length > 0.3 * b.length && (e = j[0]), e || (e = b), j = a.node);
    return {title: e, before_node: j, content: "" + c.substr(0, _start_pos || 0) + c.substr(h)}
};
$R.addMarkNotIncluded = function (a, c) {
    for (var b = $R.constant.MARK_SELECTOR, d = $(a), e = $(c).find(b).toArray(), b = d.find(b).toArray(), d = function (a) {
        for (var b = {}, c = 0; c < a.length; c++)b[$(a[c]).attr("remarkalbe")] = a[c];
        return b
    }, e       = d(e), d = d(b), b = [], h = 0; h < e.length && !(h in d); h++)b.push(e[h]);
    for (var h = [], j = 0; j < e.length; j++)j in d || j in b || h.push(e[j]);
    e = function (a, b) {
        for (var c = $("<div>"), d = 0; d < a.length; d++)c.append($R.insertMarkTag($(a[d]).clone()));
        b.push(c.html())
    };
    _result = [];
    e(b, _result);
    _result.push(a);
    e(h,
        _result);
    return _result.join("")
};
$R.addMarkTag = function (a) {
    a = $(a);
    a.find(".remarkalbe-start").each(function () {
        $(this).prepend("<i>hello</i>")
    });
    return a.html()
};
$R.getSkeleton = function (a) {
    var c = {
        tag     : "div",
        children: []
    }, b  = [$M.selectors.byStyle("STYLE_STRUCTURE"), $M.selectors.byStyle("STYLE_UTILITY")].join(), d = function (a) {
        a = $(a).clone();
        a.find(b).each(function () {
            $(this).find(".remarkalbe-mark-tag").remove();
            $(this).after($(this).html());
            $(this).remove()
        });
        $M.is_pdf && a.find("div").each(function () {
            this.outerHTML = "<span>" + $(this).html() + "</span>"
        });
        return a[0]
    }, e  = function (a, b, c) {
        var k = !1, l = a.tagName && a.tagName.toLowerCase();
        switch (!0) {
            case a.tagName && 0 <= "h1,h2,h3,h4,h5,h6".indexOf(l):
            case !c &&
            $M.isMark(a):
            case c && ($M.isMark(a, "STYLE_UTILITY") || $M.isMark(a, "STYLE_STRUCTURE")):
                b.children.push(d(a)), k = !0
        }
        if (!(0 == $(a).find($R.constant.MARK_SELECTOR).length && 0 == $(a).find("h1,h2,h3,h4,h5,h6").length) && a.childNodes) {
            inList(l, "elements_paragraph_block_for_marks") && !($M.is_pdf && "div" == l) ? (c = {
                tag     : l,
                children: []
            }, b.children.push(c)) : c = b;
            b = 0;
            for (l = a.childNodes.length; b < l; b++)e(a.childNodes[b], c, k)
        }
    };
    e(a, c);
    return $R.generateHTMLForSkeleton(c)
};
$R.generateHTMLForSkeleton = function (a) {
    var c = $("<div>"), b = $.map($R.parsingOptions.marks_ignore_in_skeleton, function (a) {
        return $M.getStyle(a)
    }), d = null, e = function (a, c, g) {
        var k = document.createElement(a.tag), l = a.children;
        g.appendChild(k);
        d || (d = g);
        for (var r in l)if (g = l[r], g.tag) {
            var q = e, u = g;
            a:{
                switch (g.tag) {
                    case "pre":
                    case "code":
                        g = g.tag;
                        break a
                }
                g = void 0
            }
            q(u, g, k)
        } else g = $(g).clone()[0], $M.isMark(g, "MARK_START") ? 0 <= b.indexOf($M.getMarkType(g)) || (q = $M.getMarkClassSeries(g), c && (g = $("<" + c + ">").append(g)[0]),
            _node_wrapper = $("<div>").attr("id", q).addClass($M.getMarkCategory(g)).append(g), $(k).append(_node_wrapper)) : $M.isMark(g) ? 0 <= b.indexOf($M.getMarkType(g)) || (q = $M.getMarkClassSeries(g), q = $(k).find("div#" + q)[0] || ("pre" == a.tag || "code" == a.tag) && $(d).find("div#" + q)[0], $(q || k).append(g)) : $(k).append(g);
        return k
    };
    c.append(e(a, !1, document.createElement("div")));
    $R.matchAffiliate(c);
    return c.html()
};
$R.matchAffiliate = function (a) {
    var c = $R.constant.ATTR_AFFILIATE, b = {}, d = [];
    a.find("[" + c + "]").each(function () {
        var a = $(this).attr(c);
        0 > d.indexOf(a) && (d.push(a), b[a] = []);
        var e = $(this).closest("[id^='rmkb-']");
        0 <= $(this).attr($M.constant.MARK_ATTRIBUTE).indexOf(e.attr("id")) && b[a].push(e)
    });
    a.find($M.selectors.byStyle("STYLE_TOPIC")).each(function () {
        var a = $M.getMarkClassSeries(this);
        0 > d.indexOf(a) && (d.push(a), b[a] = [])
    });
    d.sort(function (a, b) {
        return parseInt(/\d+/.exec(a)[0]) - parseInt(/\d+/.exec(b))
    });
    var e =
            function (a, b) {
                var c = "STYLE_TOP STYLE_TOPIC_WHAT STYLE_TOPIC_WHY STYLE_TOPIC_HOW STYLE_TOPIC_GOOD STYLE_TOPIC_BAD STYLE_TOPIC_EXAMPLE STYLE_HIGHLIGHT".split(" ").reverse(), d = [], e;
                for (e in c)d.push($M.getStyle(c[e]));
                c = [a, b];
                for (e in c)c[e].mark = c[e].children()[0], c[e].mark_type = $M.getMarkType(c[e].mark), c[e].score = d.indexOf(c[e].mark_type), c[e].mark_id = $M.getMarkClassSeries(c[e].mark);
                return c[1].score - c[0].score || c[0].mark_id - c[1].mark_id
            };
    $.each(d, function () {
        var c = a.find("#" + this), d = b[this].sort(e);
        if (0 != c.length) {
            var g = $("<ul style='margin:0;padding:0;list-style:none;'>");
            c.wrap("<div style='margin:0;padding:0;'>").wrap("<div>");
            var k = {};
            $.each(d, function () {
                var a = $(this).children()[0], b = $M.getMarkType(a);
                if ($M.isMark(a, "STYLE_STRUCTURE")) {
                    a = $(this).find("i.remarkalbe-mark-tag");
                    a.attr("style", $R.styles.mark_tag_plain);
                    if (!k[b]) {
                        var c = $("<ol style='margin:0;padding:0';list-style:none;>").attr("class", "remarkalbe-type-description").attr("for", b).append($R.markDescription[a.html()]);
                        g.append($("<li style='margin:3px 0;margin-left:3em;'>").append(c));
                        k[b] = 1
                    }
                    a.remove();
                    a = g.find("[for='" + b + "']")[0] || g;
                    $(a).append($("<li style='margin:3px 0;margin-left:3em;'>").attr("class", b).append(this))
                } else g.append($("<li style='margin:3px 0;margin-left:3em;'>").attr("class", b).append(this))
            });
            c.parent().append(g)
        }
    });
    a.find("p:empty, div:empty").remove()
};
$R.markDescription = {
    W: "<b>What</b> is it",
    H: "<b>How</b> to do",
    Y: "<b>Why</b>",
    G: "<b>Good</b> parts",
    B: "<b>Bad</b> parts",
    E: "<b>Example</b>"
};
$R.buildViewNavigation = function () {
    var a = $R.constant.ID_VIEWNAV;
    $(document.body).append("<div id='" + a + '\'><ul class=\'remarkalbe-button-group\'><li class="current"><a href="javascript:void()" class="nav-button" title="Full(1)" ><i class="icon-full-view" ></i></a></li><li><a href="javascript:void()" class="nav-button" title="Outline(2)" ><i class="icon-outline-view" ></i></a></li><li><a href="javascript:void()" class="nav-button" title="Simple(3)" ><i  class="icon-keypoint-view" ></i></a></li></ul></div>');
    $("#" + a).on("click", "li", function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        $R.changeView($(this).index() + 1)
    })
};
$R.toggleColorful = function (a) {
    a ? $(document.body).addClass($M.getStyle("STYLE_COLORFUL")) : $(document.body).removeClass($M.getStyle("STYLE_COLORFUL"))
};
$R.extractMarks = function (a, c) {
    var b = [];
    $(a).find($M.selectors.byStyle(c, !0)).each(function () {
        var c = $M.getMarkSeriesByPart(this, a);
        b.push($R.getPlainText(c.text()))
    });
    return b
};
$R.buildView = function (a, c) {
    $R.originWindow = a;
    $R.originWindow.postMessage = window.postMessage;
    var b = $R.analyzePage(a, c), d = b.content, e = b.title, h = $R.extractMarks(a.document.body, "STYLE_TAG"), j = $R.extractMarks(a.document.body, "STYLE_WORD"), g = function (a, b, c) {
        return $(["<div id='", a, "'>", $R.generateTitleHeader(b), $R.generateTagSection(h), $R.generateContentSection(c), $R.generateWordSection(j), $R.generateSourceURLSection(), "</div>"].join(""))
    }, b = g("remarkalbe-view-full", e, d), d = g("remarkalbe-view-skeleton",
        e, $R.getSkeleton($("<div></div>").append(d)[0])), e                                                                                                           = $("<div id='remarkalbe-view-simple'></div>"), b                                                         = $("<div id='remarkalbe-views'></div>").append(b).append(d).append(e);
    $R.recommendView = $R.determineView(d);
    $R.buildViewNavigation();
    $R.registerViewChange();
    return b[0]
};
$R.currentView = "remarkalbe-view-full";
$R.changeView = function (a) {
    var c = {1: "remarkalbe-view-full", 2: "remarkalbe-view-skeleton", 3: "remarkalbe-view-simple"}, a = parseInt(a);
    switch (a) {
        case 2:
            var b = $("#remarkalbe-view-full .remarkalbe-content-section").html(), b = $("<div></div>").append(b)[0], b = $R.getSkeleton(b);
            $("#" + c[a] + " .remarkalbe-content-section").html(b);
            break;
        case 3:
            $("#" + c[a]).html($("#remarkalbe-view-skeleton").html()), $(".remarkalbe-content-section", "#" + c[a]).find("h1,h2,h3,h4,h5,h6").remove()
    }
    $R.toggleColorful(1 == a);
    $R.currentView =
        c[a];
    $("#remarkalbe-views>div").hide();
    $("#" + c[a]).show()
};
$R.clickToChangeView = function (a) {
    $("#" + $R.constant.ID_VIEWNAV + " li").eq(parseInt(a) - 1).click()
};
$R.registerViewChange = function () {
    var a = {1: "remarkalbe-view-full", 2: "remarkalbe-view-skeleton", 3: "remarkalbe-view-simple"};
    document.body.addEventListener("keypress", function (a) {
        a = String.fromCharCode(a.which);
        $R.clickToChangeView(a)
    });
    $(document.body).ready(function () {
        $("#" + a["2"]).hide()
    })
};
$R.findMarkInNode = function (a) {
    var c = $R.constant.MARK_SELECTOR, b = [];
    $(a).find(c).each(function () {
        !$M.isMark(this, "STYLE_TAG") && !$M.isMark(this, "STYLE_WORD") && b.push($R.purifyContent(this))
    });
    return b.join("")
};
$R.getMarksNotIncluded = function (a, c) {
    var b = a, d = "", e = "";
    do {
        if (b.tagName && "body" == b.tagName.toLowerCase())break;
        b.previousSibling ? (b = b.previousSibling, d = $R.findMarkInNode(b) + d) : b = b.parentNode
    } while (1);
    b = c;
    do {
        if (b.tagName && "body" == b.tagName.toLowerCase())break;
        b.nextSibling ? (b = b.nextSibling, e += $R.findMarkInNode(b)) : b = b.parentNode
    } while (1);
    return {above: d, below: e}
};
$R.getFirstMain = function (a) {
    a.sort($R.commonHelper.candidateSort(["assessment", "text", "ratio_length_plain_text_to_total_plain_text"], !0, ["index"], !1));
    for (var c = 1; c < a.length; c++)if (0.7 >= a[c].assessment.text.ratio_length_plain_text_to_total_plain_text / a[c - 1].assessment.text.ratio_length_plain_text_to_total_plain_text)return a[c - 1];
    return a[0]
};
$R.determineView = function (a) {
    if ($M.is_pdf)return "2";
    var c = $(a).find("div.STYLE_STRUCTURE"), b = $(a).find("div.STYLE_KEYPOINT"), d = $.grep(b, $M.isHomelessMark), a = $(a).find("h1, h2, h3, h4, h5, h6").length, c = c.length, b = b.length, e = c + b, d = d.length;
    switch (!0) {
        case 5 >= e:
            return "3"
    }
    switch (!0) {
        case c >= 0.4 * e && 6 <= e:
        case 6 <= e && 2 * d <= b:
        case 4 <= e && 3 <= a && a >= 0.4 * e && b <= 3 * a:
            return "2"
    }
    return "1"
};
$R.analyzePage = function (a, c) {
    var b = $R.getMainContent(a.document.body, c), d = $R.getTitleAndSplit(b.candidates[0], b.content, a), e = d.title, h = d.content, j = d.before_node, g = b.candidates[0].node, k = d = "";
    c && 1 == b.candidates[0].assessment.marks.ratio_count_marks_to_total_marks || (b = $R.getMarksNotIncluded(j, g), d = b.above, k = b.below);
    h = [d, h, k].join("");
    return {content: h, title: e}
};
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36157260-2"]);
_gaq.push(["_trackPageview", window.location.href]);
(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(a, c)
})();
