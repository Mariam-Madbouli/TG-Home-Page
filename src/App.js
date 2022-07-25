import logotg from './images/LOGO.svg';
import student from './images/student-02.svg';
import appstore from './images/app store.svg';
import googlestore from './images/google store.svg';

import face from './images/facebook.svg';
import tele from './images/telegram.svg';
import linked from './images/linkedin.svg';

import './App.css';

function App() {
  return (
    <div className="App">


      <div className="App-header">

        <div>
          <button className="btn">
                    انضم لنــا
            </button>
        </div>


        <nav>
          <ul>

                <li><a>فريقنــا</a></li>
                <li><a >أعمالنــا</a></li>
                <li><a >المسـارات</a></li>
                <li><a >مـاذا نقـدم</a></li>
                <li><a >مــن نحـــن</a></li>
                <li><a >الصفحـة الرئيســية</a></li>
            
          </ul>
        </nav>


        <img src={logotg} className="logo" alt="logo" />
        
      </div>




      <div className="banner">
          <div className="right">
            <p>تعــلم تخصص</p>
            <p>بمستوى <span>جامعـــــــــي </span></p>
            <p>متـــاح للجميـــع بالمجــــــــان</p>

            <div className="social">
              <img src={face} className="icon" alt="student" />
              <img src={tele} className="icon" alt="student" />
              <img src={linked} className="icon link" alt="student" />
              <span className="line"></span>

            </div>
          </div>



          <div className="left">
            <div>
              <img src={student} className="student" alt="student" />

            </div>
            
            
            
          </div>



      </div>

      <div className="iconsStore">
              <img src={appstore} className="store" alt="student" />
              <img src={googlestore} className="store google" alt="student" />

      </div>




      <footer className="footer">          
                    <div className="footerCon">
                        <div className="policy" >سياســــة الخصوصيـــة</div>
                        <div > &copy; 2022 TG Academy</div>
                    </div>
        </footer>
        


    </div>
  );
}

export default App;
