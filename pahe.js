 <!-- Histats.com  START  (aync)-->
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4651866,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4651866&101" alt="" border="0"></a></noscript>
<!-- Histats.com  END  -->



window.onload = function() {
  var puURL = 'https://t.co/O3nre5gSrZ';
  var puTS = Math.round(+new Date()/1000);
  console.log('T.'+localStorage.puTS+'/'+puTS);
  if (typeof localStorage.puTS == 'undefined' || parseInt(localStorage.puTS) <= (puTS - 3600)) {
    var links = document.getElementsByTagName('a');
    for(var i = 0, len = links.length; i < len; i++) {
      links[i].onclick = function (e) {
        var puHref = this.getAttribute("href");
          var puTarget = this.getAttribute("target");
          if (puHref !== '#' && puHref !== 'javascript:void(0)') {
          e.preventDefault();    
          if (puTarget == '_blank') {
            window.open(window.location.href);
          }
          window.open(puHref);
          window.location.href = puURL;
          localStorage.puTS = puTS;
        }
      }
    }
  }
};
