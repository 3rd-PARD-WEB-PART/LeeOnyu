import self from './img/photo.png';
import './App.css';

function App() {
  return (
    <div>
      <div className='black-circle'>
        <div className='white-circle'>
          <div className="self-photo">
            <img src={self} className='image' alt='My Photo' />
          </div>
        </div>
        <div className='name-space'>
          Front-end Developer 
          <p class='bold'>이온유</p>
        </div>
      </div>
      <div className='text-space'>
        <p class='text'>이번학기 목표</p>
        <p class='sub-text'>
        · 하고 싶은거 찾기
        </p>        
      </div>
      <div className='text-space2'>
        <p class='text'>좋아하는 것</p>
        <p class='sub-text'> · 매운거 먹기 ex) 불닭볶음면 </p>       
        <p class='sub-text'> · 단거 먹기 ex) 초콜릿 </p>
        <p class='sub-text'> · 민초, 마라탕, 삼겹살 등등 </p>
        
      </div>

    </div>
  );
}

export default App;
