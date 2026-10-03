document.getElementById('year').textContent = new Date().getFullYear();

const brandMark = document.querySelector('.brand-mark');
if (brandMark) {
  brandMark.textContent = '';
  brandMark.style.background = '#ffffff';
  brandMark.style.padding = '4px';
  brandMark.style.overflow = 'hidden';

  const logo = document.createElement('img');
  logo.src = 'assets/esw-logo.svg';
  logo.alt = '';
  logo.width = 34;
  logo.height = 36;
  logo.style.width = '100%';
  logo.style.height = '100%';
  logo.style.objectFit = 'contain';
  logo.style.display = 'block';
  brandMark.appendChild(logo);
}

if (!document.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = 'assets/esw-logo.svg';
  document.head.appendChild(favicon);
}
