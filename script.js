const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();

const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
  },{threshold:.12});
  items.forEach(item=>observer.observe(item));
}else{items.forEach(item=>item.classList.add('visible'));}

const lightbox=document.getElementById('lightbox');
const lightboxImage=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  lightboxImage.src=item.dataset.full;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');
}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src='';}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
