const displaytech = async () => {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
let newtechnews = new Object();
const technews = () => {
  
   fetch('https://hacker-news.firebaseio.com/v0/beststories/.json?print=pretty', {
    method: 'GET', //GET is the default.
     // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
  })
    .then((response) => response.json())
    .then(function (data) {
      for(i = 0; i < 5; i++) {
        let id = data[i];
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
          method: 'GET', //GET is the default.
           // include, *same-origin, omit
          redirect: 'follow', // manual, *follow, error
        })
          .then((response) => response.json())
          
          .then(function (data) {
            
            let head = data['title'];
            let author = data['by'];
            let datapoint = data['url'];
            newtechnews = {head,author,datapoint};
        
      })

      // arrayoftech[i] = newtechnews;  
      // console.log(arrayoftech);
}})}
technews();
}
else {
      alert(response.statusText);
    }
  };
  

