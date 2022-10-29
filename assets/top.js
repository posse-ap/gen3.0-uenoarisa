'use strict';
{
  const btn = document.getElementById('js-header-btn');
  let modal = document.getElementById('js-modal');
  let cover = document.getElementById('js-cover');
  let modalbtn2 = document.getElementById('js-modal-btn2');
  let complete = document.getElementById('js-complete');
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    modal.classList.remove('close');
    cover.classList.add('active');
    cover.classList.remove('close');
  });

  const closebtn = document.getElementById('js-round_btn2');
  closebtn.addEventListener('click', () => {
    modal.classList.remove('active');
    cover.classList.remove('active');
  });


  modalbtn2.addEventListener('click', () => {
    complete.classList.add('active');
  });


  let roundbtn2 = document.getElementById('js-round_btn');
  roundbtn2.addEventListener('click', () => {
    complete.classList.remove('active');
    modal.classList.remove('active');
    cover.classList.remove('active');
  });

  // カレンダー＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

  console.log(1)

  let modaldate =document.getElementById('js-modal-date');
  let wrapper = document.getElementById('js-wrapper')
  modaldate.addEventListener('click',() =>{
    wrapper.classList.add('active');
  })
  let calenderarrow= document.getElementById('js-calender__arrow');
  calenderarrow.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
  })

  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  // 月末だとずれる可能性があるため、1日固定で取得
  var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

  // 初期表示
  window.onload = function () {
    showProcess(today);
  };
  // 前の月表示
  let prev = document.getElementById('prev');
  
  prev.addEventListener('click',()=>{
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
  })

  // 次の月表示
  let next = document.getElementById('next');
  
  next.addEventListener('click',()=>{
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
  })

  // カレンダー表示
  function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#calender_header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#wrapper__calendar').innerHTML = calendar;
  }

  // カレンダー作成
  function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
      calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
      calendar += "<tr>";
      // 1colum単位で設定
      for (var j = 0; j < week.length; j++) {
        if (i == 0 && j < startDayOfWeek) {
          // 1行目で1日まで先月の日付を設定
          calendar += "<td class='disabled' >" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
        } else if (count >= endDate) {
          // 最終行で最終日以降、翌月の日付を設定
          count++;
          calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
        } else {
          // 当月の日付を曜日に照らし合わせて設定
          count++;
          if (year == today.getFullYear()
            && month == (today.getMonth())
            && count == today.getDate()) {
            calendar += `<td class="date today" data-date=${count} data-month=${month+1} onclick="getdate()">`+count +`</td>`
          } else {
            calendar += `<td class="date" data-date=${count} data-month=${month+1} onclick="getdate()">` + count + "</td>";
          }
        }
      }
      calendar += "</tr>";
    }
    return calendar;
  }


  // データ取得
//  const DATA_URLS = [
//   'http://posse-task.anti-pattern.co.jp/1st-work/study_time.json',
//   'http://posse-task.anti-pattern.co.jp/1st-work/study_language.json',
//   'http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json'
//  ];
 
 
//  let dataset0=[
//   {
//     "day": 1,
//     "time": 3
// },
// {
//     "day": 2,
//     "time": 4
// },
// {
//     "day": 3,
//     "time": 5
// },
// {
//     "day": 4,
//     "time": 3
// },
// {
//     "day": 5,
//     "time": 0
// },
// {
//     "day": 6,
//     "time": 0
// },
// {
//     "day": 7,
//     "time": 4
// },
// {
//     "day": 8,
//     "time": 2
// },
// {
//     "day": 9,
//     "time": 2
// },
// {
//     "day": 10,
//     "time": 8
// },
// {
//     "day": 11,
//     "time": 8
// },
// {
//     "day": 12,
//     "time": 2
// },
// {
//     "day": 13,
//     "time": 2
// },
// {
//     "day": 14,
//     "time": 1
// },
// {
//     "day": 15,
//     "time": 7
// },
// {
//     "day": 16,
//     "time": 4
// },
// {
//     "day": 17,
//     "time": 4
// },
// {
//     "day": 18,
//     "time": 3
// },
// {
//     "day": 19,
//     "time": 3
// },
// {
//     "day": 20,
//     "time": 3
// },
// {
//     "day": 21,
//     "time": 2
// },
// {
//     "day": 22,
//     "time": 2
// },
// {
//     "day": 23,
//     "time": 6
// },
// {
//     "day": 24,
//     "time": 2
// },
// {
//     "day": 25,
//     "time": 2
// },
// {
//     "day": 26,
//     "time": 1
// },
// {
//     "day": 27,
//     "time": 1
// },
// {
//     "day": 28,
//     "time": 1
// },
// {
//     "day": 29,
//     "time": 7
// },
// {
//     "day": 30,
//     "time": 8
// }
//  ]
//  let dataset1= {
//   "N予備校": 40,
//   "ドットインストール": 20,
//   "課題": 40
// }
// let dataset2=
//     {
//         "HTML": 30,
//         "CSS": 20,
//         "JavaScript": 10,
//         "PHP": 5,
//         "Laravel": 5,
//         "SQL": 20,
//         "SHELL": 20,
//         "その他": 10
//     }

//  let DATA_JSON = [dataset0,dataset1,dataset2]
//  for (let i=0; i<DATA_URLS.length; i++){
//     fetch(DATA_URLS[i])
//      .then(function(response){
//       return response.json();
//      })
//      .then(function(jsonData){
//       DATA_JSON[i].push(jsonData)
//      });
//  }

//  fetch(DATA_URLS[0])
//      .then(function(response){
//       return response.json();
//      })
//      .then(function(jsonData){
//       dataset0 =jsonData
//      });
//   fetch(DATA_URLS[1])
//      .then(function(response){
//       return response.json();
//      })
//      .then(function(jsonData){
//       dataset1 =jsonData
//      });
//   fetch(DATA_URLS[2])
//      .then(function(response){
//       return response.json();
//      })
//      .then(function(jsonData){
//       dataset2 =jsonData
//      });



  
}