function countdown(number, callback) {
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = number;

    if (number > 1) {
      setTimeout(function() {
        countdown(number - 1, callback);
      }, 1000);
    } else {
      setTimeout(function() {
        callback();
      }, 1000);
    }
  }

  function startCountdown() {
    var startButton = document.getElementsByTagName("button")[0];
    startButton.disabled = true;
    startButton.style.display = "none";

    countdown(10, function() {
      var countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = "Happy Independence Day";
      startButton.disabled = false;
      startButton.style.display = "block";
    });
  }

 