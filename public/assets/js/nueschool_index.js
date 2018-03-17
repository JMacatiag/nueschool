// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".notes-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newNote = {
      note: $("#note-input").val().trim(),
    };
    console.log(newNote);

    // Send the POST request.
    $.ajax("/api/notes", {
      type: "POST",
      data: newNote
    }).then(
      function() {
        console.log("created new note");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".edit").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("noteid")

    $.ajax("/api/notes/" + id, {
      type: "PUT",
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
