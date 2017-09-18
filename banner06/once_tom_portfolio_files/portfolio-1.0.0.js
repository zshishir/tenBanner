(function($){
  $(document).ready(function() {

				
		function mob(id) {
		  return document.getElementById(id);
		}

		function style(id) {
		  return document.getElementById(id).style;
		}

		window.addEventListener("resize",resize);
		$(".link").click(function(e) {
		  e.preventDefault();
		  var w = $(this).data("width");
		  var h = $(this).data("height");
		  var link1 = $(this).data("internal-link");

		  
		  console.log(w+" "+h);
		  var sw = $(window).width();
		  var sh = $(window).height();
		  
		  $("#bdiv").css("left",sw/2-w/2);
		  $("#bdiv").css("top",sh/2-h/2);
		  
		  $("#bdiv").height(h);
		  
		  if (link1!=undefined)
			  $("#bdiv").html('<iframe width="'+w+'" height="'+h+'" frameborder="0" sandbox="allow-same-origin allow-scripts" src="'+link1+'"></iframe>'); else
		  $("#bdiv").html('<iframe width="'+w+'" height="'+h+'" frameborder="0" sandbox="allow-same-origin allow-scripts" src="http://once.pl/portfolio/html5/banners/'+$(this).data("src")+'/index.html"></iframe>');
		  $("#banner").show();
		});
		
		$("#banner").click(function(e) {
		  e.preventDefault();
		  $("#bdiv").html('');
		  $("#banner").hide();
		});
		
		function selCol(cols) {
		  var c = 0;
		  var i;
		  var min = cols[0];
		  for (i=0;i<cols.length;i++) {
		    if (cols[i]<min) {
			  min = cols[i];
			  c = i;
			}
		  }
		  return c;
		}
			
		function resize() {
		  var sw = $(window).width();
		  var sh = $(window).height();
		  var ods = 30;
		  
		  var col = Math.floor(sw/(300+ods));
		  
		  var i;
		  var cc;
		  var cols = new Array(col);
		  
		  var dif = sw - col*(300+ods);
		  dif/=2;
		  dif-=ods/10;
		  
		  console.log(sw+" "+dif+" "+col); 
		  var c;
		  
		  for (i=0;i<col;i++) {
		    cols[i] = 0;
		  }
		  
		  for (i=0;i<$(".item").length;i++) {
		      c = i % col;
			  cc = selCol(cols);
			  var hh = parseInt($(".item:eq("+i+") a").data("height"),10);
			  
			  var h2 = parseInt($(".item:eq("+i+") a").data("div-height"),10);
		      h2 = parseInt(h2,10);
		      if (h2<hh) hh = h2;
		  
		      //console.log("hs> "+h+ " " + h2)
			  
			  
		      $(".item").eq(i).css("left",dif+cc*(300+ods));
			  $(".item").eq(i).css("top",cols[cc]+50);
			  cols[cc]+=hh+ods*1.6;
		  }
		  
		  
		  console.log(col+" "+$(".item").length);
		}

		resize();
    	

  });
})(jQuery);
