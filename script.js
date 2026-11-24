(function(){
  document.querySelectorAll('.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.dataset.copy;
      var done=function(){var o=b.textContent;b.textContent='Copied';b.classList.add('done');setTimeout(function(){b.textContent=o;b.classList.remove('done')},1400)};
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done)}
      else{var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy');done()}catch(e){}a.remove()}
    });
  });
  document.getElementById('menu').addEventListener('click',function(){document.body.classList.toggle('open')});
  document.querySelectorAll('#sidebar nav a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('open')})});
  var links={};document.querySelectorAll('#sidebar nav a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){Object.values(links).forEach(function(l){l.classList.remove('active')});var l=links[e.target.id];if(l){l.classList.add('active');l.scrollIntoView({block:'nearest'})}}
    })},{rootMargin:'-20% 0px -70% 0px'});
    document.querySelectorAll('main section[id]').forEach(function(s){io.observe(s)});
  }
})();
