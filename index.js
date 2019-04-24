fetch("http://localhost:9001/copy-logs/titi/1901/latest/toto/fullLog.txt")
  .then(function(response) {
    return response.text();
  })
  .then(function(txt) {
    document.body.innerHTML = txt;
    document.querySelectorAll("header").forEach(function(x) {
      let b = document.createElement("button");
      b.innerHTML = "unfold";
      x.prepend(b);
    });
    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        let div = buttons[i].parentNode.parentNode;
        div.classList.toggle("open");
        buttons[i].classList.toggle("open");
      });
    }
  });
