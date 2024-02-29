// This will ensure all callouts are open by default
const callouts = document.querySelectorAll("blockquote.callout-collapsible");
callouts.forEach(el => el.classList.remove("callout-collapsed"));
