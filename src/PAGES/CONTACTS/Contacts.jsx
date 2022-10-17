import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../COMPONENTS/FOOTER/Footer';
import './Contacts.scss';
import switcher from '../../ASSETS/switcher.svg';

const Contacts = () => {
  return (
    <div className='contacts'>
         <div className='switcher'>
          <Link to='/'>Главная</Link>
          <img src={switcher} alt='' />
          <Link>Контакты</Link>
        </div>
        <h1 className='svyaz'>Связаться с нами</h1>
        <div className='all-columns'>
            <div className='social-media'>
                <h3>В социальных сетях</h3>
                    <div className='svgs'>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 8.75C11.5054 8.75 10.5516 9.14509 9.84835 9.84835C9.14509 10.5516 8.75 11.5054 8.75 12.5C8.75 13.4946 9.14509 14.4484 9.84835 15.1517C10.5516 15.8549 11.5054 16.25 12.5 16.25C13.4946 16.25 14.4484 15.8549 15.1516 15.1517C15.8549 14.4484 16.25 13.4946 16.25 12.5C16.25 11.5054 15.8549 10.5516 15.1516 9.84835C14.4484 9.14509 13.4946 8.75 12.5 8.75ZM12.5 6.25C14.1576 6.25 15.7473 6.90848 16.9194 8.08058C18.0915 9.25268 18.75 10.8424 18.75 12.5C18.75 14.1576 18.0915 15.7473 16.9194 16.9194C15.7473 18.0915 14.1576 18.75 12.5 18.75C10.8424 18.75 9.25268 18.0915 8.08058 16.9194C6.90848 15.7473 6.25 14.1576 6.25 12.5C6.25 10.8424 6.90848 9.25268 8.08058 8.08058C9.25268 6.90848 10.8424 6.25 12.5 6.25ZM20.625 5.9375C20.625 6.3519 20.4604 6.74933 20.1674 7.04235C19.8743 7.33538 19.4769 7.5 19.0625 7.5C18.6481 7.5 18.2507 7.33538 17.9576 7.04235C17.6646 6.74933 17.5 6.3519 17.5 5.9375C17.5 5.5231 17.6646 5.12567 17.9576 4.83265C18.2507 4.53962 18.6481 4.375 19.0625 4.375C19.4769 4.375 19.8743 4.53962 20.1674 4.83265C20.4604 5.12567 20.625 5.5231 20.625 5.9375ZM12.5 2.5C9.4075 2.5 8.9025 2.50875 7.46375 2.5725C6.48375 2.61875 5.82625 2.75 5.21625 2.9875C4.67375 3.1975 4.2825 3.44875 3.86625 3.86625C3.47501 4.24425 3.17419 4.70573 2.98625 5.21625C2.74875 5.82875 2.6175 6.485 2.5725 7.46375C2.5075 8.84375 2.5 9.32625 2.5 12.5C2.5 15.5925 2.50875 16.0975 2.5725 17.5362C2.61875 18.515 2.75 19.1737 2.98625 19.7825C3.19875 20.3263 3.44875 20.7175 3.86375 21.1325C4.285 21.5525 4.67625 21.8037 5.21375 22.0112C5.83125 22.25 6.48875 22.3825 7.46375 22.4275C8.84375 22.4925 9.32625 22.5 12.5 22.5C15.5925 22.5 16.0975 22.4912 17.5362 22.4275C18.5137 22.3812 19.1725 22.25 19.7825 22.0138C20.3237 21.8025 20.7175 21.5513 21.1325 21.1362C21.5537 20.715 21.805 20.3238 22.0125 19.7863C22.25 19.17 22.3825 18.5112 22.4275 17.5362C22.4925 16.1562 22.5 15.6737 22.5 12.5C22.5 9.4075 22.4912 8.9025 22.4275 7.46375C22.3812 6.48625 22.25 5.82625 22.0125 5.21625C21.8241 4.70625 21.5238 4.24495 21.1337 3.86625C20.7559 3.47481 20.2944 3.17396 19.7837 2.98625C19.1712 2.74875 18.5137 2.6175 17.5362 2.5725C16.1562 2.5075 15.6737 2.5 12.5 2.5ZM12.5 0C15.8962 0 16.32 0.0124999 17.6525 0.0749999C18.9837 0.1375 19.89 0.34625 20.6875 0.65625C21.5125 0.97375 22.2075 1.40375 22.9025 2.0975C23.5381 2.72237 24.0299 3.47824 24.3437 4.3125C24.6525 5.10875 24.8625 6.01625 24.925 7.3475C24.9837 8.68 25 9.10375 25 12.5C25 15.8962 24.9875 16.32 24.925 17.6525C24.8625 18.9837 24.6525 19.89 24.3437 20.6875C24.0308 21.5222 23.5389 22.2783 22.9025 22.9025C22.2775 23.5379 21.5216 24.0297 20.6875 24.3438C19.8912 24.6525 18.9837 24.8625 17.6525 24.925C16.32 24.9838 15.8962 25 12.5 25C9.10375 25 8.68 24.9875 7.3475 24.925C6.01625 24.8625 5.11 24.6525 4.3125 24.3438C3.47791 24.0306 2.72191 23.5387 2.0975 22.9025C1.46176 22.2777 0.969914 21.5218 0.65625 20.6875C0.34625 19.8912 0.1375 18.9837 0.0749999 17.6525C0.0162499 16.32 0 15.8962 0 12.5C0 9.10375 0.0124999 8.68 0.0749999 7.3475C0.1375 6.015 0.34625 5.11 0.65625 4.3125C0.969045 3.47772 1.461 2.72165 2.0975 2.0975C2.72209 1.46154 3.47804 0.969662 4.3125 0.65625C5.11 0.34625 6.015 0.1375 7.3475 0.0749999C8.68 0.0162499 9.10375 0 12.5 0Z" fill="#E0BEA2"/>
                        </svg>
                    
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 22.5C15.1522 22.5 17.6957 21.4464 19.5711 19.5711C21.4464 17.6957 22.5 15.1522 22.5 12.5C22.5 9.84783 21.4464 7.3043 19.5711 5.42893C17.6957 3.55357 15.1522 2.5 12.5 2.5C9.84783 2.5 7.3043 3.55357 5.42893 5.42893C3.55357 7.3043 2.5 9.84783 2.5 12.5C2.5 15.1522 3.55357 17.6957 5.42893 19.5711C7.3043 21.4464 9.84783 22.5 12.5 22.5ZM12.5 25C5.59625 25 0 19.4037 0 12.5C0 5.59625 5.59625 0 12.5 0C19.4037 0 25 5.59625 25 12.5C25 19.4037 19.4037 25 12.5 25ZM8.6125 13.9625L5.49 12.9887C4.815 12.7825 4.81125 12.3175 5.64125 11.9837L17.8075 7.28375C18.5137 6.99625 18.9137 7.36 18.685 8.27125L16.6137 18.0462C16.4688 18.7425 16.05 18.9088 15.4687 18.5875L12.28 16.2275L10.7937 17.6625C10.6412 17.81 10.5175 17.9363 10.2825 17.9675C10.0487 18 9.85625 17.93 9.715 17.5425L8.6275 13.9537L8.6125 13.9625Z" fill="#E0BEA2"/>
                        </svg>
                    </div>
            </div>
            <div className='phones'>
                <h3>По Телефону</h3>
                <h4>0558994399</h4>
                <h4>0558994399</h4>
            </div>
            <div className='pochta'>
                <h3>По Почте</h3>
                <h4>example@gmail.com</h4>
            </div>
            <div className='our-office'>
                <h3>Наш офис</h3>
                <h4>г.Кара-Балта, улица Кожомбердиева, 100</h4>
            </div>
        </div>
        <div className='third-container'>
          <h1>Узнайте первым о новинках</h1>
          <div className='subscription'>
             <input type='email' placeholder='Ваш e-mail'/>
                <button onClick={click => {
                  if(click) {
                    alert('Вы Успешно Подписаны!')
                  }
                }}>ПОДПИСАТЬСЯ</button>
              <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contacts