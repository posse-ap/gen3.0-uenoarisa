// console.log(1)

// let type='doughnut'
//   let ctx = document.getElementById("js-study-language_chart").getContext("2d");

//   new Chart(ctx,{
//     // type: type,
//     // data: DATA_JSON[0],
//     // options: options
//     type: 'doughnut',
//     data: [{
//       "HTML": 30,
//       "CSS": 20,
//       "JavaScript": 10,
//       "PHP": 5,
//       "Laravel": 5,
//       "SQL": 20,
//       "SHELL": 20,
//       "その他": 10
//   }]
//   })
// let dataset1= {
  //   "N予備校": 40,
  //   "ドットインストール": 20,
  //   "課題": 40
  // }

(function() {
  'use strict';

  // var type = 'pie';
  var type = 'doughnut';

  var data = {
    labels: ['YES', 'NO', 'Maybe'],
    datasets: [{
      data: [122, 53, 33],
      backgroundColor: ['tomato', 'skyblue', 'gray']
    }]
  };

  var data1 = {
    datasets: [{
      data: [30, 20, 10,5,5,20,20,10],
      backgroundColor: ['blue', '#4141f5', '#24c7e4d0','#6666f0d0','#74befad0','#6b99fdd0','#926bfdd0','#6040eed0','#3b2791d0']
    }]
  };

  var data2 = {
    // labels: ['N予備校', 'ドットインストール', '課題'],
    datasets: [{
      data: [40,20,40],
      backgroundColor:['blue', '#4141f5', '#24c7e4d0']
    }]
  };

  var data3 = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    datasets: [{
      data: [3,4,5,3,0,0,4,2,2,8,8,2,2,1,7,4,4,3,3,3,2,6,2,2,1,1,1,7,8],
      backgroundColor:['blue', '#4141f5', '#24c7e4d0'],
    }]
  };



  var options = {
    cutoutPercentage: 40
  };
//   var option3 = {
//     scales: {
//         yAxes: [{
//             gridLines: {
//                 color: "rgba(0, 0, 0, 0)",
//             }   
//         }]
//     }
// }

  // var option3 = {
  //   scales: {
  //     xAxes: [{
  //       display: false,
  //       stacked: false,
  //       gridLines: {
  //         display:false
  //       }
  //     }],
  //     yAxes: [{
  //       display: false,
  //       gridLines: {
  //         display: false
  //       }
  //     }]
  //   }
  // }

  var ctx0 = document.getElementById('js-study-language_chart').getContext('2d');
  var myChart0 = new Chart(ctx0, {
    type: type,
    data: data1,
  });

  // ['HTML', 'CSS', 'JavaScript',"PHP","Laravel","SQL","SHELL",]

  var ctx1 = document.getElementById('js-study-contents_chart').getContext('2d');
  var myChart1 = new Chart(ctx1, {
    type: type,
    data: data2,
    options: options
  });

  var ctx2 = document.getElementById('js-hours-bargraph').getContext('2d');
  var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: data3,
    options:{
      plugins: {
        legend: false
    },
    scales:{
      bar: {groupWidth: "30%"}, // バーの太

    // x:{
    //   gridlines:{
    //     color:"white" 
    // },
    // y:{
    //   gridlines:{
    //     color:"white" 
    
  
    
// }}
  

  
} }
  });



  // for(let i = 0;i<12;i++){
  //   COLOR = ['blue', '#4141f5', '#24c7e4d0','#6666f0d0','#74befad0','#6b99fdd0','#926bfdd0','#6040eed0','#3b2791d0','blue', '#4141f5', '#24c7e4d0']
  //   let span = document.getElementById(`span${i+1}`);
  //   span.style.backgroundColor=`${COLOR[i]}`;
  // }
  

})();
