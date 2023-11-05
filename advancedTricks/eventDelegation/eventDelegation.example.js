/**
 * @description
 * Event delegation is a technique in which you attach a single event
 * listener to a parent rather than multiple listeners to each child.
 * memory usage and improves performance, especially for large lists or
 * dynamically generated content.
 */
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    console.log("You clicked on an li element!");
  }
});
