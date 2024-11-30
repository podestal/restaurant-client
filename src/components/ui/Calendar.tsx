import { div } from 'framer-motion/client';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface Props {
    selectedDate: Date | undefined
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const Calendar = ({ selectedDate, setSelectedDate }: Props) => {

  console.log(moment(selectedDate).format('YYYY-MM-DD'));
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [selectedDate])
  

  return (
    <div>
        {open 
        ? 
        <div className="p-4 bg-white dark:bg-slate-900 rounded-xl">
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
            />
        </div> 
        : 
        <p 
        className='cursor-pointer'
        onClick={() => setOpen(true)}
        >{moment(selectedDate).format('YYYY-MM-DD')}</p>}
    </div>
    
  );
};

export default Calendar;
