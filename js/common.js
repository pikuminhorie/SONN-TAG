// slickのレスポンシブ
 $('.slick01').slick({
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
       }
     },
     {
       breakpoint: 640,
       settings: {
         arrows: false,
         dots: false,
       }
     },
   ]
 });