// 1. 이모티콘 출력하기
function printEmoji() {
    // prompt로 사용자에게 숫자 입력 받기
    const input = prompt('몇 개의 하트를 출력할까요? (최대 50개)');
    const display = document.getElementById('emoji-display'); // 출력 영역 선택
    
    // 취소 버튼 클릭 시 함수 종료
    if (input === null) {
        return;
    }
    
    // 입력값을 숫자로 변환
    const num = Number(input);
    
    // 입력값이 숫자가 아니거나 0 이하일 경우
    if (isNaN(num) || num <= 0) {
        display.textContent = '올바른 숫자를 입력해주세요!';
        return;
    }
    
    // 최대값 50으로 제한
    if (num > 50) {
        display.textContent = '50개 이하로 입력해주세요!';
        return;
    }
    
    // 반복문으로 입력한 개수만큼 하트 이모티콘 생성
    let result = '';
    for (let i = 0; i < num; i++) {
        result += '❤️';
    }
    
    // 결과를 화면에 표시
    display.textContent = result;
}

// 2. 구구단 생성기
function generateGugudan() {
    // prompt로 몇 단을 생성할지 입력 받기
    const input = prompt('몇 단을 생성할까요? (2~9)');
    const display = document.getElementById('gugudan-display'); // 출력 영역 선택
    
    // 취소 버튼 클릭 시 함수 종료
    if (input === null) {
        return;
    }
    
    // 입력값을 숫자로 변환
    const dan = Number(input);
    
    // 입력값이 2~9 범위를 벗어난 경우
    if (isNaN(dan) || dan < 2 || dan > 9) {
        alert('2부터 9까지의 숫자만 입력 가능합니다!'); // alert로 경고 메시지 표시
        display.innerHTML = ''; // 기존 내용 지우기
        return;
    }
    
    // 반복문으로 구구단 생성 (1부터 9까지)
    let result = '';
    for (let i = 1; i <= 9; i++) {
        // 각 줄을 <li> 태그로 생성
        result += `<li>${dan} x ${i} = ${dan * i}</li>`;
    }
    
    // 결과를 리스트로 화면에 표시
    display.innerHTML = result;
}

// 3. 간단한 로그인
function checkLogin() {
    // 정답 변수 미리 저장 (아이디: admin, 비밀번호: 1234)
    const correctId = 'admin';
    const correctPw = '1234';
    
    // 사용자가 입력한 아이디와 비밀번호 가져오기
    const userId = document.getElementById('user-id').value;
    const userPw = document.getElementById('user-pw').value;
    
    // 결과를 표시할 영역 선택
    const resultDiv = document.getElementById('login-result');
    
    // 조건문으로 입력값과 정답 비교
    if (userId === correctId && userPw === correctPw) {
        // 아이디와 비밀번호 모두 맞음 (로그인 성공)
        resultDiv.textContent = '로그인에 성공했습니다!';
        resultDiv.className = 'login-result success'; // 검정색 스타일 적용
    } else if (userId === correctId && userPw !== correctPw) {
        // 아이디만 맞고 비밀번호 틀림
        resultDiv.textContent = '비밀번호가 틀렸습니다.';
        resultDiv.className = 'login-result fail'; // 빨간색 스타일 적용
    } else if (userId !== correctId && userPw === correctPw) {
        // 아이디 틀리고 비밀번호만 맞음
        resultDiv.textContent = '아이디가 틀렸습니다.';
        resultDiv.className = 'login-result fail'; // 빨간색 스타일 적용
    } else {
        // 아이디와 비밀번호 모두 틀림
        resultDiv.textContent = '로그인에 실패했습니다.';
        resultDiv.className = 'login-result fail'; // 빨간색 스타일 적용
    }
}

// 4. 숫자 카운터
let count = 0; // 카운터 변수 초기화 (0부터 시작)

// 숫자 증가 함수 (+1)
function increase() {
    count = count + 1; // 현재 값에 1 더하기
    updateDisplay(); // 화면 업데이트
}

// 숫자 감소 함수 (-1)
function decrease() {
    count = count - 1; // 현재 값에서 1 빼기
    updateDisplay(); // 화면 업데이트
}

// 화면에 현재 카운터 값 표시하는 함수
function updateDisplay() {
    const display = document.getElementById('counter-display'); // 숫자 표시 영역 선택
    display.textContent = count; // 현재 count 값을 화면에 표시
}