// console.clear();

// var processGraphs = document.querySelectorAll('.process polygon');
// var processDetails = document.querySelectorAll('.process-details > div');
// var processGraphMouseover = function (event) {
// 	for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
// 		if (processGraphs[pg] === event.target && event.type === 'mouseover') {
// 			processGraphs[pg].style.opacity = 1;
// 		} else {
// 			processGraphs[pg].style.opacity = 0.5;
// 		}
// 	}
// 	for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
// 		if (processDetails[pd].classList.contains(event.target.getAttribute('class')) && event.type === 'mouseover') {
// 			processDetails[pd].style.opacity = 1;
// 		} else {
// 			processDetails[pd].style.opacity = 0.5;
// 		}
// 	}
// };
// var processGraphMouseout = function (event) {
// 	for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
// 		processGraphs[pg].removeAttribute('style');
// 	}
// 	for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
// 		processDetails[pd].removeAttribute('style');
// 	}
// };
// for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
// 	processGraphs[pg].addEventListener('mouseover', processGraphMouseover);
// 	processGraphs[pg].addEventListener('mouseout', processGraphMouseout);
// }

// document.addEventListener("DOMContentLoaded", function () {
// 	const form = document.querySelector(".form-wrap");
// 	const successMessage = document.getElementById("formSuccessMessage");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // 防止預設提交行為

//     // 顯示完成動畫
//     successMessage.style.display = "block";

//     // 模擬伺服器處理（用 setTimeout 模擬延遲）
//     setTimeout(function () {
//       successMessage.innerHTML = '<div style="font-size: 24px; color: #4CAF50;">Thank you for your submission!</div>';
//     }, 2000); // 2秒後顯示完成訊息

//     // 如果需要送出表單資料，這裡可以用 fetch 或 XMLHttpRequest
//     // Example:
//     // fetch('your-server-endpoint', {
//     //   method: 'POST',
//     //   body: new FormData(form),
//     // }).then(response => {
//     //   console.log('Form submitted successfully');
//     // });
//   });
// });