console.log("notification");
var _notify_html = "<div id='remarkalbe-notify'><a  target='_blank' href='" + $M.main + "'>Remarkerbe Update: Check it out on extensions for Chrome/Firefox and saving to Evernote</a></div>";
!$M.is_extension && !$M.in_readable && $M.notify(_notify_html, 3E4, !0);
