import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {id: 0, value: 0, name: "Ненужня вещь"}, 
    {id: 1, value: 4, name: "Ложка"}, 
    {id: 2, value: 0, name: "Вилка"},
    {id: 3, value: 0, name: "Тарелка"},
    {id: 4, value: 0, name: "Набор минималиста"},
  ];

  let updatedCounters = null;

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    updatedCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value +=1;
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  const handleDecrement = (id) => {
    updatedCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value -=1;
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  return ( 
    <>
      {counters.map((count) => (
        <Counter 
          key={count.id} 
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button 
        className="btn btn-primary btn-sm m-2"
        onClick={handleReset}
      >
        Cброс
      </button>
    </>
  );
};

export default CountersList;