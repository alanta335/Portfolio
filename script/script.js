function myFunction(name, percentage) {
  const answer = document.getElementById("answer");
  answer.innerHTML = "";
  const question = document.getElementById("question");
  question.innerText = "apt install " + name;
  question.className = "type-command";
  var known;
  setTimeout(function () {
    question.className = "";
    setTimeout(() => {
      switch (percentage) {
        case 100:
          known = "[====================] 100%";
          break;
        case 90:
          known = "[=================>&nbsp;&nbsp;] 90%";
          break;
        case 80:
          known = "[===============>&nbsp;&nbsp;&nbsp;&nbsp;] 80%";
          break;
        case 70:
          known = "[=============>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] 70%";
          break;
        case 60:
          known =
            "[===========>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] 60%";
          break;
        case 50:
          known =
            "[=========>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] 50%";
          break;
        case 40:
          known =
            "[=======>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] 40%";
          break;
        case 30:
          known =
            "[=====>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] 30%";
          break;
        default:
          known = "[=> ] 0%";
      }
      answer.innerHTML = known;
    }, 500);
  }, 3000);
}
