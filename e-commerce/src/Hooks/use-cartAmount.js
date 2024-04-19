import useCounter from "./use-counter";

const useCartItemEdit = (amount) => {
  const { counter, incrementCounter, decrementCounter } = useCounter(amount);
  const onIncrement = () => {
    incrementCounter();
  };
  const onDecrement = () => {
    if (counter === 1) {
        
    } else {
      decrementCounter();
    }
  };
  return { counter, onIncrement, onDecrement };
};

export default useCartItemEdit;
