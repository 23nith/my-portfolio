let btn = document.getElementById('download');
btn.addEventListener('click', process)


function process(){
  document.getElementById('loading').style.content = "url('Resources/loading.gif')";
  let key = '059bf605ddefad0464c144452ad5218d';
  let theHtml = document.getElementById('userInput').value;
  console.log(theHtml);
  let size = document.querySelector('#size').value;
  let orientation = document.querySelector('#orientation').value;
  let url = `http://api.pdflayer.com/api/convert?access_key=${key}&document_url=${theHtml}`;
  url = url + `&page_size=${size}&orientation=${orientation}`; 
  
  var myInit = { 
               method: 'POST',
               mode: 'cors',
               cache: 'default' 
              };

  var myRequest = new Request(url, myInit);

  fetch(myRequest).then(function(response) {
    console.log(url);
    return response.blob();
  }).then(function(myBlob) {

    let a = document.createElement('a');
    a.style = "display: none";
    document.body.appendChild(a);
  
    let url = window.URL.createObjectURL(myBlob);
    a.href = url;

    a.download = 'pdflayer.pdf';
    document.getElementById('loading').style.content = "";
    document.getElementById('loading').innerHTML = '<h2>Conversion Done</h2>';
    setTimeout(function (){
      document.getElementById('loading').innerHTML = '';
    }, 5000);
    
    a.click();
  
    window.URL.revokeObjectURL(url);
  });
  
}