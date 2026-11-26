(function(){
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var y=$('#year'); if(y) y.textContent=new Date().getFullYear();
  var hdr=$('.site-header');
  function onScroll(){ if(hdr) hdr.classList.toggle('scrolled',window.scrollY>8); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  var menuBtn=$('#menu-btn'), nav=$('#nav');
  function setMenu(open){ nav.classList.toggle('open',open); menuBtn.setAttribute('aria-expanded',String(open)); menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu'); }
  if(menuBtn&&nav){ menuBtn.addEventListener('click',function(){ setMenu(!nav.classList.contains('open')); }); $$('#nav a').forEach(function(a){ a.addEventListener('click',function(){ setMenu(false); }); }); }
  function openDlg(id){ var d=document.getElementById(id); if(d&&!d.open) d.showModal(); }
  $$('[data-open]').forEach(function(b){ b.addEventListener('click',function(){ openDlg(b.getAttribute('data-open')); }); });
  $$('dialog').forEach(function(d){ d.addEventListener('click',function(e){ if(e.target===d) d.close(); }); $$('[data-close]',d).forEach(function(b){ b.addEventListener('click',function(){ d.close(); }); }); });
})();
