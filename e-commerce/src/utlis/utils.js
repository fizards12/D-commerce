const debounceFunc = (func,delay)=>{
    let timer;
    return ()=>{
        if(timer) clearTimeout(timer)
        timer = setTimeout(func,delay);
    }
}