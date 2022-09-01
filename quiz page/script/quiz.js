'use strict';
{
  const ALL_QUIZ = [
    {
      question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？?',
      answers: ['約28万人', '約79万人', '約183万人'],
      correctNumber: 1,
      note: '経済産業省 2019年3月 － IT 人材需給に関する調査',
    },
    {
      question:'既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？?',
      answers:['INTECH', 'BIZZTECH', 'X-TECH'],
      correctNumber:2,
    },
    {
      question:'IoTとは何の略でしょう?',
      answers:['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
      correctNumber:0,
    },
    {
      question:'日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
      answers:['Society 5.0', 'CyPhy', 'SDGs'],
      correctNumber:0,
      note:'Society5.0 - 科学技術政策 - 内閣府'
    },
    {
      question:'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？?',
      answers:['Web3.0', 'NFT', 'メタバース'],
      correctNumber:0,
    },
    {
      question:'先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
      answers:['約2倍', '約5倍', '約11倍'],
      correctNumber:1,
      note:'Accenture Technology Vision 2021'
    }
  ];

  const quizContainer = document.getElementById('js-quizContainer');

  for (let i=0; i<6; i++){
    let data1 = ALL_QUIZ[i].answers;
    for (let g = ALL_QUIZ[i].answers.length - 1; g >= 0; g--) {
      const j = Math.floor(Math.random() * (g+1));
      console.log(g,j);
      [data1[j], data1[g]] = [data1[g], data1[j]];
    };

  let createQuizHtml = `<li class="js-quiz" id="content_area" data-quiz="${i}">
  <h2 class="question">Q${i+1}</h2>
  <p class="questiontext">${ALL_QUIZ[i].question}</p>
  <img src="img/quiz/img-quiz0${i+1}.png" alt="">
  <h3 class="answer">A</h3>
  <ul class="option">
    <li  class="option-content" id="option0-${i}" data-answer="0">${data1[0]}</li>
    <li class="option-content" id="option1-${i}" data-answer="1">${data1[1]}</li>
    <li class="option-content"id="option2-${i}" data-answer="2">${data1[2]}</li>
  </ul>
  <div class="correctbox" id="correctbox-${i}">
    <h4>正解！</h4>
    <p>A ${ALL_QUIZ[i].answers[ALL_QUIZ[i].correctNumber]}</p>
  </div>
  <div class="falsebox" id="falsebox-${i}">
    <h4>不正解…</h4>
    <p>A ${ALL_QUIZ[i].answers[ALL_QUIZ[i].correctNumber]}</p>
  </div>
  </li>`

  if (ALL_QUIZ[i].note!==undefined){
    createQuizHtml+=`<aside class="quote">
        <img src="img/quiz/icon-note.svg" alt="">${ALL_QUIZ[i].note}
  </aside>`;
  };

  quizContainer.insertAdjacentHTML('beforeend', createQuizHtml);
  };


  const allQuiz = document.querySelectorAll('.js-quiz');
  allQuiz.forEach(quiz =>{
    const answers = quiz.querySelectorAll('.option-content');
    const selectedQuiz = quiz.getAttribute('data-quiz');
    answers.forEach(answer => {
      answer.addEventListener('click', ()=>{
        console.log(selectedQuiz);
        let selectedAnswer = answer.getAttribute('data-answer')
        console.log(selectedAnswer);
        console.log(ALL_QUIZ[selectedQuiz].correctNumber)
        if (selectedAnswer==ALL_QUIZ[selectedQuiz].correctNumber ){
          let ele = document.getElementById(`correctbox-${selectedQuiz}`);
          ele.style.display = 'block';
        }
        else{
          let ele1 = document.getElementById(`falsebox-${selectedQuiz}`);
          ele1.style.display = 'block';
      };
      let main = document.getElementById(`option${selectedAnswer}-${selectedQuiz}`)
      main.style.backgroundColor = '#EFF2F5';
      main.style.color ="#0071BC";
      main.style.border="5px solid #0071BC";
      });
  });
});
};