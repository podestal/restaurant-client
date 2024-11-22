import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles for date picker

interface Props {
  dueDate: Date | null;
  setDueDate: (dueDate: Date) => void;
}

const DateSelector = ({ dueDate, setDueDate }: Props) => {
  const handleDateChange = (date: Date | null) => {
    if (date === null) {
      return;
    }
    setDueDate(date);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <DatePicker
        selected={dueDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="MM/dd/yyyy"
        locale="en-US"
        placeholderText="Select a date"
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:border-blue-700 focus:outline-none text-gray-900 text-xs dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        calendarClassName="rounded-lg shadow-lg p-4 dark:bg-gray-900 dark:text-gray-100"
      />
    </div>
  );
};

export default DateSelector;
