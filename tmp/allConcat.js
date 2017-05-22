var Journal = require('./../js/journal.js').journalModule;

$(function(){
  $('#journal-form').submit(function(e) {
    e.preventDefault();
    title = $("#title").val();
    body = $("#body").val();

    entry = new Journal(title, body);
    $("#output").append(`<h3>${entry.title}</h3><p>${entry.body}</p><p>${entry.teaser()}</p><hr>`);
    $("#title").val("");
    $("#body").val("");
  });
});
