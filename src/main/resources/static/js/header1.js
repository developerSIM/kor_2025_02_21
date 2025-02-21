
const socket = new WebSocket('https://getbootstrap.kr/docs/5.3/components/toasts/'); // 서버 주소를 입력하세요.


socket.addEventListener('Open', function (event) {
    console.log(' Mission success ');
});


function loginSuccess(Nickname) {
    const message = `${Nickname}님이 로그인 했습니다.`;

    socket.send(message);
}

socket.addEventListener('message', function (event) {

    showToast(event.data);
});

function showToast(message) {
    const toastElement = document.createElement('div');
    toastElement.className = 'toast';
    toastElement.innerHTML = `
        <div class="토스트-header">
            <strong class="me-auto">알람</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>`;
    document.body.appendChild(toastElement);


    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}
