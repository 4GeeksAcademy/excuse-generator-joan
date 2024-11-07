window.onload = function() {
  var who = [
    "My dog",
    "My donkey",
    "One koala",
    "The drunk guy of the neighborhood",
    "An alien",
    "My grandma",
    "My evil twin"
  ];
  var action = [
    " ate",
    " broke",
    " sold",
    " hid",
    " disintegrated",
    " burned",
    " lost"
  ];
  var what = [
    " the family jewelry",
    " my clothes",
    " your car",
    " your retirement savings",
    " my homework",
    " the treasure",
    " your inheritance"
  ];
  var when = [
    " yesterday.",
    " on my lunchbreak.",
    " just now.",
    " during your breakfast.",
    " few minutes ago.",
    " this morning.",
    " last week."
  ];

  var firstRandom = Math.floor(Math.random() * who.length);
  var secondRandom = Math.floor(Math.random() * action.length);
  var thirdRandom = Math.floor(Math.random() * what.length);
  var fourthRandom = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[firstRandom] +
    action[secondRandom] +
    what[thirdRandom] +
    when[fourthRandom];
};
