import {useState, useEffect} from 'react';
import './App.css'
import dayjs from 'dayjs';

function App() {
  const [hour, setHour] = useState(dayjs().hour());
  const [allhours, setAllHours] = useState([])

  const hours = [];
  for(let i = 0; i < 24; i++) {
    hours.push(i);
  }

  const caculateHours = () => {
    let _hour = hour - 1;
    let next_hours = []
    for(let i = 0; i < 3; i++){
      _hour += 1;
      let j = _hour % 24;
      next_hours.push(hours[j])
    }
    
    _hour = hour;
    let prev_hours = []
    for(let i = 0; i < 2; i++){
      _hour -= 1;
      let j = (_hour + 24) % 24;
      prev_hours.push(hours[j])
    }

    let all_hours = prev_hours.reverse().concat(next_hours)
    setAllHours(all_hours);
  }
  useEffect(() => {
    caculateHours();
  }, [hour]);

  return (
    <main>
      <div className='block'>
      {
        allhours.map((h, i) => (
          <div className={`hour ${hour == h && 'active'}`} style={{
            '--hour': i == 0 ? '-60deg' : i == 1 ? '-40deg' : i === 2 ? '0deg' : i === 3 ? '40deg' : '60deg',
            '--tx': i == 0 ? '20px' : i == 1 ? '10px' : i == 2 ?  '0px' : i === 3 ? '10px' : '20px',
            '--opacity': i == 0 ? '0.4' : i == 1 ? '0.6' : i == 2 ? '1' : i === 3 ? '0.6' : '0.4',
          }} key={i} onClick={() => setHour(h)}>
            {h}
          </div>
        ))
      }
      </div>
    </main>
  )
}

export default App
