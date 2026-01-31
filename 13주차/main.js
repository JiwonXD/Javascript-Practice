document.addEventListener('DOMContentLoaded', () => {
  // 회전 기능
  const img = document.getElementById('logoImg');
  const plusBtn = document.getElementById('btnPlus');
  const minusBtn = document.getElementById('btnMinus');
  const angleValue = document.getElementById('angleValue');
  let angle = 0;
  function updateRotation() {
    img.style.transform = `rotate(${angle}deg)`;
    angleValue.textContent = (angle % 360 + 360) % 360;
  }
  plusBtn.addEventListener('click', () => { angle += 90; updateRotation(); });
  minusBtn.addEventListener('click', () => { angle -= 90; updateRotation(); });
  updateRotation();

  // 갬블링 기능
  const slotBtns = [
    document.getElementById('slot1'),
    document.getElementById('slot2'),
    document.getElementById('slot3')
  ];
  const resultEl = document.getElementById('gamble-result');

  function roll(btn) {
    const v = Math.floor(Math.random() * 3); // 0~2
    btn.textContent = v;
    checkAll();
  }

  function checkAll() {
    const values = slotBtns.map(b => b.textContent);
    const allEqual = values.every(v => v === values[0]);
    if (allEqual) {
      resultEl.textContent = '성공!';
      resultEl.className = 'gamble-result success';
    } else {
      resultEl.textContent = '실패';
      resultEl.className = 'gamble-result fail';
    }
  }

  slotBtns.forEach(btn => {
    btn.addEventListener('click', () => roll(btn));
  });

  // 이벤트 처리 실습
  const keyBox = document.getElementById('keyBox');
  const errorBtn = document.getElementById('errorBtn');
  const errorMsg = document.getElementById('errorMsg');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      keyBox.classList.add('yellow');
      keyBox.classList.remove('blue');
    } else if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      keyBox.classList.add('blue');
      keyBox.classList.remove('yellow');
    }
  });

  errorBtn.addEventListener('click', () => {
    try {
      notDefinedFunction(); // 의도적 에러
    } catch (err) {
      errorMsg.textContent = '오류 발생: ' + err.message;
    }
  });
});