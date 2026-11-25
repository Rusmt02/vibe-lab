const moods = {
  focus: { label: 'soft focus', color: '#a998ff', glow: 'rgba(169, 152, 255, .3)', radius: '42% 58% 52% 48% / 47% 42% 58% 53%', quote: '«Сегодня достаточно сделать одну вещь — внимательно.»' },
  spark: { label: 'bright spark', color: '#ff7daf', glow: 'rgba(255, 125, 175, .34)', radius: '57% 43% 38% 62% / 50% 56% 44% 50%', quote: '«Идея уже здесь. Дай ей немного воздуха.»' },
  drift: { label: 'slow drift', color: '#62d9ca', glow: 'rgba(98, 217, 202, .27)', radius: '49% 51% 61% 39% / 62% 42% 58% 38%', quote: '«Можно не торопиться. Ритм никуда не уйдёт.»' },
  rush: { label: 'good rush', color: '#ffb84d', glow: 'rgba(255, 184, 77, .32)', radius: '61% 39% 49% 51% / 38% 59% 41% 62%', quote: '«Первый шаг уже считается движением.»' }
};
const root = document.documentElement;
const orb = document.querySelector('#orb');
const orbLabel = document.querySelector('#orbLabel');
const quote = document.querySelector('#quote');
const intensity = document.querySelector('#intensity');
const intensityValue = document.querySelector('#intensityValue');
function setMood(name) { const mood = moods[name]; root.style.setProperty('--orb', mood.color); root.style.setProperty('--orb-glow', mood.glow); orb.style.borderRadius = mood.radius; orbLabel.textContent = mood.label; quote.textContent = mood.quote; document.querySelectorAll('.mood-card').forEach(card => card.classList.toggle('active', card.dataset.mood === name)); }
document.querySelectorAll('.mood-card').forEach(card => card.addEventListener('click', () => setMood(card.dataset.mood)));
intensity.addEventListener('input', event => { const value = event.target.value; intensityValue.textContent = `${value}%`; orb.style.transform = `rotate(-${17 - (value - 64) / 10}deg) scale(${0.92 + value / 500})`; });
document.querySelector('#reset').addEventListener('click', () => { setMood('focus'); intensity.value = 64; intensityValue.textContent = '64%'; orb.style.transform = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); });
