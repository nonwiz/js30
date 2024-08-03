setInterval(() => {
    const currentTime = document.getElementById('time');
    const sand = document.getElementById('sand');
    const seconds = document.getElementById('time-seconds');
    const date = new Date();

    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    currentTime.innerHTML = `${hrs>9?hrs: "0"+hrs}:${mins>9?mins: "0"+mins}`;
    seconds.innerHTML = secs>9?secs: "0"+secs;

    const percentage = ((secs / 60) * 100) -4;
    sand.style.transform = `translateY(${percentage/2}%)`;
  }, 1000);