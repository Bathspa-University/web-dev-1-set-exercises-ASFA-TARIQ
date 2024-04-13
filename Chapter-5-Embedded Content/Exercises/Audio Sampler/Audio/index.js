document.addEventListener('DOMContentLoaded', function () {
  const samples = document.querySelectorAll('.sample');
  samples.forEach(sample => {
      sample.addEventListener('click', function () {
          const audioSrc = this.getAttribute('data-audio');
          const audio = new Audio(audioSrc);
          audio.play();
      });
  });
});

document.getElementById('prev').addEventListener('click', function () {
  if (currentPage > 1) {
      currentPage--;
      displaySamples();
      updatebarsButtons();
  }
});

document.getElementById('next').addEventListener('click', function () {
  if (currentPage < totalPages) {
      currentPage++;
      displaySamples();
      updatebarsButtons();
  }
});

function updatePaginationButtons() {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

updatebarsButtons();

const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;

  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }

  if (text.length > 50) {
    if (synth.speaking && isSpeaking) {
      button.innerText = "Pause";
      synth.resume();
      isSpeaking = false;
    } else {
      button.innerText = "Resume";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    button.innerText = "Speaking";
  }

  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      button.innerText = "Convert to Speech";
    }
  });
};

button.addEventListener("click", textToSpeech);