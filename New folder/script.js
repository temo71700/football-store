const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}


const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

if (passwordInput && togglePassword) {
  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.textContent = '';
    } else {
      passwordInput.type = 'password';
      togglePassword.textContent = '';
    }
  });
}


const form = document.getElementById('registerForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!name || !email || !password) {
      alert('ყველა ველი აუცილებელია');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('ელფოსტა არასწორია');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს, 1 დიდ ასოს და 1 ციფრს');
      return;
    }

    alert('რეგისტრაცია წარმატებით დასრულდა!');
    form.reset();
  });
}

const scrollBtn = document.getElementById('scrollTopBtn');

if (scrollBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


const cookieNotice = document.getElementById('cookieNotice');
const acceptCookiesBtn = document.getElementById('acceptCookies');

if (cookieNotice && acceptCookiesBtn) {
  if (localStorage.getItem('cookiesAccepted')) {
    cookieNotice.style.display = 'none';
  }

  acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieNotice.style.display = 'none';
  });
}

