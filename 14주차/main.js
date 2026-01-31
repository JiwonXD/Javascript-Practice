document.addEventListener('DOMContentLoaded', () => {
  // 이미지 주소를 변수에 저장
  const images = {
    grape: 'https://i.namu.wiki/i/hMr9MtxFJBGYo9sn4gvATlRK-s4k6LeJ2ILYHj1SUR9aplhMUgIBnoB3tR8wmlDYkYR0a2nj3Yjb3jRXf3pJcA.webp',
    banana: 'https://i.namu.wiki/i/Mj0aArUbJiq5_c500MqmbYyDPWnSiDBCsxbesdkR0XTOtDvwrjj2ponJvctbYgQ7zPE_LvjsJHAl786rZu0tkw.webp',
    plum: 'https://i.namu.wiki/i/4_KxhSW8w9ANNtantLpHtW0k3DVOuX8i8HzgxTjcnzbaGqf2xX6o24e3AMTiRt9ZolE8DYMvhlWgr3BF_hc8SQ.webp',
    strawberry: 'https://i.namu.wiki/i/QlcodLd3yutRpQKN1LJFt99Yjceocg38cuWattK1SanunUMzdWylvIPgPZPPkPQgG8RcYydF4QGfqEIScoNlNA.webp',
    peach: 'https://i.namu.wiki/i/2F2V5gO5D6kwFXRAofuQB_IUT6LbELVMpyGPDE5v2J41wp5ks7gxrGGIncBpPuX2gU5PDYEiVSwVjjitZB9AYg.webp'
  };
  const names = {
    grape: '포도', banana: '바나나', plum: '자두', strawberry: '딸기', peach: '복숭아'
  };

  const radioPreview = document.getElementById('radio-preview');
  const checkboxPreview = document.getElementById('checkbox-preview');
  const selectPreview = document.getElementById('select-preview');
  const selectEl = document.getElementById('item-select');

  function createImg(key) {
    const img = document.createElement('img');
    img.src = images[key];
    img.alt = names[key];
    img.loading = 'lazy';
    return img;
  }

  // 라디오: 선택된 하나 출력
  document.getElementById('radio-controls').addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
      radioPreview.innerHTML = '';
      radioPreview.appendChild(createImg(e.target.value));
    }
  });
  // 초기 이미지
  radioPreview.innerHTML = '';
  radioPreview.appendChild(createImg(document.querySelector('input[name="fruits"]:checked').value));

  // 체크박스: 체크된 모두 출력
  document.getElementById('checkbox-controls').addEventListener('change', () => {
    const checked = Array.from(document.querySelectorAll('#checkbox-controls input[type="checkbox"]:checked'))
      .map(el => el.value);
    checkboxPreview.innerHTML = '';
    if (checked.length === 0) {
      checkboxPreview.innerHTML = '<em>선택된 항목이 없습니다.</em>';
      return;
    }
    checked.forEach(k => checkboxPreview.appendChild(createImg(k)));
  });

  // 셀렉트: 선택한 하나 출력
  function renderSelect() {
    selectPreview.innerHTML = '';
    selectPreview.appendChild(createImg(selectEl.value));
  }
  selectEl.addEventListener('change', renderSelect);
  renderSelect();
});