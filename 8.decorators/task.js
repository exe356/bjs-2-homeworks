function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash == hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }

    let result = func(...args);
    cache.push({
      'hash': hash,
      'value': result
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer;
  
  function wrapper(...args) {
    wrapper.allCount++;
    if (!timer) {
    func(...args);
    wrapper.count++;
  }
      clearTimeout(timer);
    timer = setTimeout(() => {func(...args); 
    wrapper.count ++}, ms);
  }
    
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}