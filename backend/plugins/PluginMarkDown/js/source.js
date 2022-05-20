textarea1 = mirrorMark(document.getElementById("srcedit"), {
  showToolbar: true
});
textarea1.registerActions({
  "save": function() {
    var txt = textarea1.cm.getDoc().getValue();
    document.getElementById("payload").value = txt;
    document.getElementById("edform").submit();
  }
});
textarea1.registerTools([
  { name: "save", action: "save" }
]);
textarea1.registerKeyMaps({ "Cmd-S": "save" });


textarea1.render();
document.getElementById("source").style.display = "none";

function toggle_element(id) {
  var x = document.getElementById(id)
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle_source() {
  toggle_element("source");
  toggle_element("main");
}
