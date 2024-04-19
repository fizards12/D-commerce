import { useCallback, useState } from "react"

const useCounter = (initCount)=>{
    const [counter,setCounter] = useState(initCount);
    const incrementCounter = useCallback(()=> setCounter(state=> state+1),[])
    const decrementCounter = useCallback(()=> setCounter(state=> state-1),[])
    return {counter,incrementCounter,decrementCounter}
}

export default useCounter;