(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_2760.png", id:"_2760"},
		{src:"images/_3640.png", id:"_3640"},
		{src:"images/_6201.png", id:"_6201"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/bg2.png", id:"bg2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/logo2.png", id:"logo2"},
		{src:"images/wf100.png", id:"wf100"},
		{src:"images/wf1002.png", id:"wf1002"},
		{src:"images/wf2.png", id:"wf2"},
		{src:"images/wf3.png", id:"wf3"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._2760 = function() {
	this.initialize(img._2760);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._3640 = function() {
	this.initialize(img._3640);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._6201 = function() {
	this.initialize(img._6201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.wf100 = function() {
	this.initialize(img.wf100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.wf1002 = function() {
	this.initialize(img.wf1002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.wf2 = function() {
	this.initialize(img.wf2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.wf3 = function() {
	this.initialize(img.wf3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.wideformat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CC0CD").s().p("AgIA1QgCgDAAgFQAAgFACgDQADgDAFgBQAFABADADQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDgAgIgkQgCgDAAgFQAAgEACgEQADgDAFAAQAGAAACADQADAEABAEQgBAFgDADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(138.4,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CC0CD").s().p("AgWA4IAAhtIASAAIAAALQAEgGADgEQAFgDAHAAIACAAIACABIACAAIABABIAAARIgDAAIgFAAQgHAAgFADQgDAFgDAHIAABNg");
	this.shape_1.setTransform(133,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4CC0CD").s().p("AgPA2QgIgDgGgHQgFgHgEgKQgDgJAAgNIAAgIQAAgNADgLQAEgJAFgHQAGgHAIgDQAIgDAHAAQAJAAAHADQAJADAFAHQAGAHAEAJQACALAAANIAAAIQAAANgCAJQgEAKgGAHQgFAHgJADQgHADgJAAQgHAAgIgDgAgIgmQgFADgDAEQgEAEgBAIQgCAGAAAKIAAAIQAAAJACAHQABAHAEAFQADAEAFADQAEACAEAAQAYAAAAglIAAgIQAAgKgBgGQgCgIgEgEQgDgEgFgDQgEgCgFAAQgEAAgEACg");
	this.shape_2.setTransform(124.1,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4CC0CD").s().p("AgNBPIAAheIgOAAIAAgPIAOAAIAAgLQAAgJADgHQACgHAEgFQAEgFAEgCQAGgCAHAAIALABIgBAQIgEgBIgEAAQgHAAgEAFQgFAGAAAKIAAALIATAAIAAAPIgTAAIAABeg");
	this.shape_3.setTransform(115.7,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4CC0CD").s().p("AAEBEQgEgCgBgDQgDgDgCgGQgBgGAAgIIAAhDIgRAAIAAgOIARAAIAAgbIAQAAIAAAbIAQAAIAAAOIgQAAIAABDIAAAHIADAEIADACIADAAIAEAAIADgBIAAAQIgFABIgHAAQgFABgEgCg");
	this.shape_4.setTransform(104,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CC0CD").s().p("AgTA3QgFgCgEgEQgFgEgCgGQgCgGgBgIQAAgIADgHQADgHAFgDQAGgFAJgDQAHgCAKAAIAMAAIAAgMQAAgKgEgEQgFgFgIABQgEAAgDABIgFADQgDADgBAEQgBADgBADIgSAAQABgGACgGQADgGAEgFQAGgEAHgDQAGgDAHAAQAIAAAGACQAHACAEAEQAFAEACAHQADAGAAAJIAAA1IAAAFIABAGIABAHIACAEIAAACIgTAAIgCgFIgBgHIgEAGIgGAEIgHADIgFABQgHAAgHgCgAgCADQgFABgEADQgEACgCAFQgCADAAAGIABAIQABADACACIAFAEIAIABIAFgBIAGgEIAFgDIADgGIAAgaIgKAAQgGAAgDACg");
	this.shape_5.setTransform(96.2,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4CC0CD").s().p("AAvA4IAAhHIgBgMQgCgEgDgDIgGgEIgHgBQgFAAgDACIgGAEQgCAEgBAEIgDAIIAAABIAABIIgQAAIAAhHQAAgHgBgEQgBgFgCgDIgHgDQgDgCgFAAQgHAAgFAEQgEADgDAHIAABRIgSAAIAAhtIARAAIAAAKQAFgGAHgDQAGgDAJAAQAIAAAIAEQAEADAEAJQAFgHAHgFQAHgEAKAAQAIAAAGACQAFADAFAFQADAEACAIQADAHAAALIAABHg");
	this.shape_6.setTransform(83.2,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CC0CD").s().p("AgVA4IAAhtIARAAIABALQADgGADgEQAFgDAHAAIACAAIACABIACAAIACABIAAARIgFAAIgEAAQgHAAgFADQgDAFgCAHIAABNg");
	this.shape_7.setTransform(72.6,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4CC0CD").s().p("AgPA2QgIgDgGgHQgFgHgEgKQgDgJAAgNIAAgIQAAgNADgLQAEgJAFgHQAGgHAIgDQAIgDAHAAQAIAAAJADQAHADAGAHQAGAHADAJQADALAAANIAAAIQAAANgDAJQgDAKgGAHQgGAHgHADQgJADgIAAQgHAAgIgDgAgIgmQgFADgDAEQgDAEgCAIQgCAGAAAKIAAAIQAAAJACAHQACAHADAFQADAEAFADQAEACAEAAQAZAAgBglIAAgIQAAgKgCgGQgBgIgDgEQgEgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(63.6,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CC0CD").s().p("AglBKIAAiTIBMAAIAAAQIg6AAIAAAzIAxAAIAAAOIgxAAIAABCg");
	this.shape_9.setTransform(53.8,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4CC0CD").s().p("AgTAHIAAgNIAoAAIAAANg");
	this.shape_10.setTransform(45.7,15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CC0CD").s().p("AgNA2QgIgDgGgGQgFgGgEgJQgCgKAAgNIAAgKQAAgOADgKQADgLAGgGQAGgHAIgCQAHgDAGAAQAKAAAIADQAHAEAFAGQAFAHACAKQACAJAAAOIAAAIIg9AAIAAACQAAASAIAIQAGAJALAAIAIgBIAHgDIAFgEIAGgFIAJAMIgGAFIgIAGIgKADQgFACgHAAQgIAAgIgDgAgGgnQgEACgDADQgDADgCAHQgCAGAAAJIAqAAIAAgCIgCgMQgBgFgCgEQgCgEgEgCQgFgCgFAAQgDAAgEABg");
	this.shape_11.setTransform(38.2,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4CC0CD").s().p("AgQBMQgHgDgFgHQgFgGgDgKQgDgKAAgNIAAgKQAAgOADgIQADgKAFgGQAFgHAGgDQAHgDAJAAQAGAAAGAEQAGADAEAGIAAg5IATAAIAACbIgRAAIgBgMQgEAHgHAEQgGADgGAAQgJAAgGgDgAgPgJQgFAJAAARIAAAKQAAATAFAJQAGAIAKAAQAIAAAFgDQAEgEADgGIAAg2QgDgGgEgEQgFgEgIAAQgKAAgGAJg");
	this.shape_12.setTransform(27.8,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CC0CD").s().p("AgIBLIAAhtIAQAAIAABtgAgGg3QgDgEAAgEQAAgFADgDQACgDAEAAQAFAAACADQADADAAAFQAAAEgDAEQgCADgFAAQgEAAgCgDg");
	this.shape_13.setTransform(20.4,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4CC0CD").s().p("AAaBKIgZhrIgBgIIAAAIIgaBrIgRAAIgdiTIASAAIATBkIACARIADgPIAYhmIANAAIAYBmIADAPIACgRIAShkIATAAIgeCTg");
	this.shape_14.setTransform(10.1,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.7,29.2);


(lib.txtwf100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626562").s().p("AgJAsQgFgCgEgEQgDgGgCgHQgCgIAAgKIAAgOQAAgKACgIQACgHADgFQAEgFAFgCQAFgCAEAAQAFAAAFACQAFACAEAFQADAFADAHQABAIAAAKIAAAOQAAAKgBAIQgCAHgEAGQgEAEgEACQgFADgGAAQgEAAgFgDgAgCgeIgDADQgBADgBAFIAAAJIAAAUIAAAKQABAEABADIADAEIACABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIADgEIACgHIAAgKIAAgUIAAgJIgCgIIgDgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape.setTransform(39.1,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626562").s().p("AgJAsQgFgCgEgEQgDgGgCgHQgCgIAAgKIAAgOQAAgKACgIQACgHADgFQAEgFAFgCQAFgCAEAAQAFAAAFACQAFACAEAFQADAFADAHQABAIAAAKIAAAOQAAAKgBAIQgCAHgEAGQgEAEgEACQgFADgGAAQgEAAgFgDgAgCgeIgDADQgBADgBAFIAAAJIAAAUIAAAKQABAEABADIADAEIACABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIADgEIACgHIAAgKIAAgUIAAgJIgCgIIgDgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape_1.setTransform(32.5,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626562").s().p("AAAAuIAAhFIgQAHIAAgPIAfgOIACAAIAABbg");
	this.shape_2.setTransform(25.4,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626562").s().p("AgOAHIAAgNIAdAAIAAANg");
	this.shape_3.setTransform(20.3,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626562").s().p("AgYAuIAAhbIAxAAIAAAQIgfAAIAAAYIAcAAIAAANIgcAAIAAAmg");
	this.shape_4.setTransform(15.1,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#626562").s().p("AAKAuIgKg1IgJA1IgTAAIgQhbIASAAIAJA4IALg4IANAAIALA4IAJg4IASAAIgQBbg");
	this.shape_5.setTransform(6.9,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.7,19.6);


(lib.theroad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#033A63").s().p("AghBGIAAiIIAhAAIAAAPQAEgJAGgEQAGgEAIgBIAFABIAFABIgBAkIgGgBIgGAAQgIAAgEADQgFADgDAHIAABZg");
	this.shape.setTransform(179,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#033A63").s().p("AgWBCQgKgEgHgIQgHgJgEgMQgEgNAAgQIAAgHQAAgQAEgMQAEgNAHgIQAHgJAKgEQALgFALAAQAMAAAKAFQALAEAHAJQAHAIAEANQAEAMAAAQIAAAHQAAAQgDANQgFAMgHAJQgHAIgLAEQgJAFgNAAQgLAAgLgFgAgNgfQgFAJAAATIAAAHQAAATAFAJQAFAJAIAAQAKAAAFgJQAEgJAAgTIAAgHQAAgTgFgJQgFgJgJAAQgIAAgFAJg");
	this.shape_1.setTransform(167.8,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#033A63").s().p("AgQBgIAAiIIAiAAIAACIgAgGg6IgHgDIgDgHQgCgDAAgFQAAgEACgDIADgGIAHgEQADgCADAAQAEAAAEACIAGAEIAEAGIABAHIgBAIIgEAHIgGADQgEACgEAAQgDAAgDgCg");
	this.shape_2.setTransform(158,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#033A63").s().p("AghBGIAAiIIAhAAIAAAPQAEgJAGgEQAGgEAIgBIAFABIAFABIgBAkIgGgBIgGAAQgIAAgEADQgFADgDAHIAABZg");
	this.shape_3.setTransform(150.9,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#033A63").s().p("AghBGIAAiIIAhAAIAAAPQAEgJAGgEQAGgEAIgBIAFABIAFABIgBAkIgGgBIgGAAQgIAAgEADQgFADgDAHIAABZg");
	this.shape_4.setTransform(142.3,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#033A63").s().p("AgbBEQgHgDgFgFQgGgGgDgHQgDgIAAgJQAAgLADgIQAEgJAGgDQAHgGAKgDQALgEALAAIAKAAIAAgLQAAgJgDgEQgDgEgFAAQgGAAgDAFQgEAEAAAHIgkAAQAAgJAEgIQADgIAHgGQAHgGAJgDQAJgEAKAAQAKAAAJADQAIADAHAFQAGAGAEAIQADAJAAAMIAAA7IABAKIAAAJIACAHIACAFIAAACIgkAAIgCgFIgBgFQgEAFgGAEQgFAEgJAAQgIAAgIgDgAgEAIQgEABgCADQgDADgBAEQgBAEAAAEQAAAIADAEQADAEAGAAQAEAAAEgDQAEgCACgEIAAgcIgIAAQgDAAgEACg");
	this.shape_5.setTransform(131.5,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#033A63").s().p("AAVBcIgVhrIgUBrIglAAIgii3IAmAAIARByIAWhyIAdAAIAWBzIAShzIAlAAIghC3g");
	this.shape_6.setTransform(115.6,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#033A63").s().p("AgpBRQgLgQAAghIAAgJQAAggALgRQALgQAWAAQAIAAAGAEQAGADAFAHIAAhFIAkAAIAADBIghAAIgBgOQgGAIgGAEQgHAEgIAAQgWAAgLgRgAgGgKQgEACgCAFQgCADgBAGIgBARIAAAJIAAAQQACAHACAFQACAEADACQAEACADAAQAHAAADgCQAFgDACgEIAAg9QgCgFgFgCQgEgDgFAAQgEAAgDACg");
	this.shape_7.setTransform(93.2,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#033A63").s().p("AgbBEQgHgDgFgFQgGgGgDgHQgDgIAAgJQAAgLADgIQAEgJAGgDQAHgGAKgDQALgEALAAIAKAAIAAgLQAAgJgDgEQgDgEgFAAQgGAAgDAFQgEAEAAAHIgkAAQAAgJAEgIQADgIAHgGQAHgGAJgDQAJgEAKAAQAKAAAJADQAIADAHAFQAGAGAEAIQADAJAAAMIAAA7IABAKIAAAJIACAHIACAFIAAACIgkAAIgCgFIgBgFQgEAFgGAEQgFAEgJAAQgIAAgIgDgAgEAIQgEABgCADQgDADgBAEQgBAEAAAEQAAAIADAEQADAEAGAAQAEAAAEgDQAEgCACgEIAAgcIgIAAQgDAAgEACg");
	this.shape_8.setTransform(80.9,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#033A63").s().p("AgWBCQgKgEgHgIQgHgJgEgMQgEgNAAgQIAAgHQAAgQAEgMQAEgNAHgIQAHgJAKgEQALgFALAAQAMAAAKAFQALAEAHAJQAHAIAEANQAEAMAAAQIAAAHQAAAQgDANQgFAMgHAJQgHAIgLAEQgJAFgNAAQgLAAgLgFgAgNgfQgFAJAAATIAAAHQAAATAFAJQAFAJAIAAQAKAAAEgJQAGgJgBgTIAAgHQAAgTgFgJQgFgJgJAAQgIAAgFAJg");
	this.shape_9.setTransform(68.2,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#033A63").s().p("AAVBcIgZhDIgTAAIAABDIglAAIAAi3IA7AAQAMAAALAEQAKAEAIAGQAHAIAEAKQAFAKAAAOQgBAKgBAIQgCAIgEAGQgDAEgFAGIgLAIIAhBLIAAACgAgXgFIAVAAQAJAAAGgHQAFgIABgMQgBgHgBgEQgBgFgDgEQgCgEgFgCQgEgCgDAAIgWAAg");
	this.shape_10.setTransform(55.1,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#033A63").s().p("AgTBCQgKgEgIgIQgIgIgDgMQgEgMAAgPIAAgJQAAgRADgMQAEgNAHgIQAIgJAKgEQAKgFALAAQAaAAANARQANARAAAhIAAAPIhFAAQAAAIACAFQACAGADADQADAEAEABQADACAGAAQAJAAAIgDQAHgEAGgFIAOAVQgDAEgEAEIgKAGIgOAFQgHACgJAAQgMAAgLgFgAgLghQgFAHAAAOIAiAAIAAgDQgBgMgDgGQgEgHgJAAQgIAAgEAHg");
	this.shape_11.setTransform(35.3,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#033A63").s().p("AAPBhIAAhWIgBgLIgDgGQgCgCgDgCQgDgBgDAAQgEAAgEACQgEADgCAEIAABjIgkAAIAAjBIAkAAIAABFQAFgGAIgEQAFgEAJAAQAIAAAHADQAHADAFAGQAFAHADAKQADAKAAANIAABWg");
	this.shape_12.setTransform(22.5,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#033A63").s().p("AgSBcIAAiYIgtAAIAAgfIB/AAIAAAfIguAAIAACYg");
	this.shape_13.setTransform(9.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.1,35.2);


(lib.smart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#033A63").s().p("AghBGIAAiIIAhAAIAAAPQAEgJAGgEQAGgEAIgBIAFABIAFABIgBAkIgGgBIgGAAQgIAAgEADQgFADgDAHIAABZg");
	this.shape.setTransform(198.2,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#033A63").s().p("AgTBCQgLgEgHgIQgIgIgDgMQgEgMAAgPIAAgJQAAgRAEgMQADgNAIgIQAHgJAKgEQAKgFALAAQAaAAANARQANARAAAhIAAAPIhGAAQABAIACAFQACAGADADQADAEAFABQACACAGAAQAJAAAIgDQAHgEAGgFIAOAVQgDAEgEAEIgKAGIgNAFQgIACgIAAQgMAAgMgFgAgLghQgEAHgBAOIAiAAIAAgDQAAgMgEgGQgEgHgKAAQgHAAgEAHg");
	this.shape_1.setTransform(187.4,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#033A63").s().p("Ag0BgIAAi8IAiAAIABAMQAEgHAHgEQAGgEAJAAQAWAAALAQQALARAAAiIAAAIQAAAfgLASQgLAQgWAAQgJAAgFgDQgGgEgFgGIAABAgAgJg/QgEADgDAEIAAA/QADAEAEADQADABAGAAQAJABAEgKQAEgHABgTIAAgIIgBgRQgBgHgDgEQgDgFgDgCQgDgCgEAAQgFAAgEACg");
	this.shape_2.setTransform(174.9,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#033A63").s().p("Ag0BgIAAi8IAiAAIABAMQAFgHAGgEQAGgEAIAAQAXAAALAQQALARAAAiIAAAIQAAAfgLASQgLAQgWAAQgJAAgFgDQgGgEgFgGIAABAgAgJg/QgFADgCAEIAAA/QACAEAFADQADABAGAAQAJABAEgKQAEgHABgTIAAgIIgBgRQgCgHgCgEQgCgFgEgCQgDgCgEAAQgFAAgEACg");
	this.shape_3.setTransform(162,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#033A63").s().p("AgWBCQgKgEgHgIQgHgJgEgMQgEgNAAgQIAAgHQAAgQAEgMQAEgNAHgIQAHgJAKgEQALgFALAAQAMAAAKAFQALAEAHAJQAHAIAEANQAEAMAAAQIAAAHQAAAQgDANQgFAMgHAJQgHAIgLAEQgJAFgNAAQgLAAgLgFgAgNgfQgFAJAAATIAAAHQAAATAFAJQAFAJAIAAQAJAAAGgJQAEgJAAgTIAAgHQAAgTgFgJQgFgJgJAAQgIAAgFAJg");
	this.shape_4.setTransform(148.9,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#033A63").s().p("AAPBhIAAhWIgBgLIgDgGQgCgCgDgCQgDgBgDAAQgEAAgEACQgEADgCAEIAABjIgkAAIAAjBIAkAAIAABFQAFgGAIgEQAFgEAJAAQAIAAAHADQAHADAFAGQAFAHADAKQADAKAAANIAABWg");
	this.shape_5.setTransform(136,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#033A63").s().p("AgTBbQgLgEgJgHQgJgHgFgMQgGgMAAgPIAlAAQABAIABAGQACAGADADQAEAEAFACQAEABAFAAQAFAAAEgBIAGgFQACgDABgDIABgIIgBgJQgBgEgCgDQgDgEgFgDIgNgGQgKgFgJgEQgKgGgHgFQgHgGgEgKQgFgIAAgNQAAgMAFgJQAEgJAIgHQAIgHAKgDQALgFALAAQANAAALAFQALAEAIAHQAHAIAEALQAEAKAAANIglAAIgBgLQgBgFgDgDQgDgEgDgCQgFgCgFAAQgEAAgDACQgEACgDACQgDADgBAEIgBAIQAAAFACAEQABAEAEADQAEADAFACIAKAGQANAFAJAFQAJAFAHAHQAGAGAEAKQADAJAAAMQAAAMgEAJQgEAJgHAHQgIAGgKAEQgLADgNAAQgKAAgMgDg");
	this.shape_6.setTransform(122.6,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#033A63").s().p("AAABUQgEgCgEgFQgFgFgDgIQgCgHAAgLIAAhHIgQAAIAAgbIAQAAIAAghIAiAAIAAAhIATAAIAAAbIgTAAIAABDIAAAHQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAEACIAEABIAGAAIADgBIAAAcIgJACIgLABQgIAAgHgCg");
	this.shape_7.setTransform(105.4,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#033A63").s().p("AghBGIAAiIIAhAAIAAAPQAEgJAGgEQAGgEAIgBIAFABIAFABIgBAkIgGgBIgGAAQgIAAgEADQgFADgDAHIAABZg");
	this.shape_8.setTransform(97.7,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#033A63").s().p("AgbBEQgHgDgFgFQgGgGgDgHQgDgIAAgJQAAgLADgIQAEgJAGgDQAHgGAKgDQALgEALAAIAKAAIAAgLQAAgJgDgEQgDgEgFAAQgGAAgDAFQgEAEAAAHIgkAAQAAgJAEgIQADgIAHgGQAHgGAJgDQAJgEAKAAQAKAAAJADQAIADAHAFQAGAGAEAIQADAJAAAMIAAA7IABAKIAAAJIACAHIACAFIAAACIgkAAIgCgFIgBgFQgEAFgGAEQgFAEgJAAQgIAAgIgDgAgEAIQgEABgCADQgDADgBAEQgBAEAAAEQAAAIADAEQADAEAGAAQAEAAAEgDQAEgCACgEIAAgcIgIAAQgDAAgEACg");
	this.shape_9.setTransform(86.9,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#033A63").s().p("AAvBGIAAhWIgBgLQgBgEgCgDIgFgDIgGgCQgFAAgEAEQgDAEgDAFIABADIAAADIAABaIgiAAIAAhVIgBgMQgBgEgCgDIgFgDIgGgCQgFABgDADQgEACgDAFIAABiIgkAAIAAiIIAiAAIABANQAGgHAIgEQAIgFAKAAQAJABAGAEQAIAEAEAKQAGgJAIgEQAIgGAMAAQAIAAAHADQAHADAEAGQAFAGADAKQADAKAAAPIAABWg");
	this.shape_10.setTransform(71,19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#033A63").s().p("AgSBbQgMgEgJgHQgJgHgFgMQgGgMAAgPIAlAAQAAAIACAGQABAGAEADQAEAEAEACQAFABAFAAQAFAAAEgBIAGgFQADgDAAgDIABgIIgBgJQAAgEgDgDQgDgEgGgDIgMgGQgKgFgJgEQgKgGgHgFQgHgGgEgKQgFgIABgNQgBgMAFgJQAEgJAIgHQAIgHALgDQAKgFALAAQAOAAAKAFQALAEAIAHQAHAIAEALQAEAKAAANIglAAIgBgLQgBgFgDgDQgCgEgFgCQgEgCgGAAQgDAAgEACQgDACgDACQgCADgCAEIgBAIQAAAFACAEQABAEAFADQADADAFACIAKAGQAMAFAKAFQAKAFAGAHQAHAGADAKQADAJAAAMQAAAMgEAJQgEAJgHAHQgIAGgKAEQgLADgNAAQgKAAgLgDg");
	this.shape_11.setTransform(54.4,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#033A63").s().p("AgTBCQgKgEgIgIQgIgIgDgMQgEgMAAgPIAAgJQAAgRADgMQAEgNAHgIQAIgJAKgEQAKgFALAAQAaAAANARQANARAAAhIAAAPIhFAAQAAAIACAFQACAGADADQADAEAEABQADACAGAAQAJAAAIgDQAHgEAGgFIAOAVQgDAEgEAEIgKAGIgOAFQgHACgJAAQgMAAgLgFgAgLghQgFAHAAAOIAiAAIAAgDQgBgMgDgGQgEgHgJAAQgIAAgEAHg");
	this.shape_12.setTransform(35.3,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#033A63").s().p("AAPBhIAAhWIgBgLIgDgGQgCgCgDgCQgDgBgDAAQgEAAgEACQgEADgCAEIAABjIgkAAIAAjBIAkAAIAABFQAFgGAIgEQAFgEAJAAQAIAAAHADQAHADAFAGQAFAHADAKQADAKAAANIAABWg");
	this.shape_13.setTransform(22.5,17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#033A63").s().p("AgSBcIAAiYIgtAAIAAgfIB/AAIAAAfIguAAIAACYg");
	this.shape_14.setTransform(9.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.3,35.2);


(lib.savup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#06334A").s().p("AgWBhQgKgFgIgKQgIgLgEgPQgEgRAAgWIAAghQAAgWAEgQQAEgQAIgKQAIgLAKgFQALgFALAAQAMAAALAFQAKAFAIALQAIAKAEAQQAEAQAAAWIAAAhQAAAWgEARQgEAPgIALQgHAKgLAFQgLAFgMAAQgLAAgLgFgAgGhCQgEADgDAFIgDAPQgCAIAAAOIAAArQAAAOACAJQABAJADAFQACAGAEACQADADADAAQAEAAAEgDQADgCADgGIADgOQACgJAAgOIAAgrQAAgOgCgIQgBgJgDgGQgCgFgEgDQgDgCgEAAQgDAAgDACg");
	this.shape.setTransform(45.5,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#06334A").s().p("AgUBhQgLgEgIgIQgIgHgFgLQgFgLAAgOIAnAAQAAANAGAHQAFAGAHAAQAFAAADgDQAEgCADgFIADgMIABgOQAAgIgBgHQgCgGgDgFQgDgEgEgCQgEgBgFAAIgHABIgFAAIgEAEIgDAEIgfgIIAKhjIBeAAIAAAhIg+AAIgEAqIAEgCIAGgCIAFgCIAGgBQANAAAJAEQAKAFAGAJQAHAIADALQAEAMAAAQQAAANgEAMQgEAMgHAJQgHAKgLAFQgLAFgOAAQgKAAgKgDg");
	this.shape_1.setTransform(31.9,37.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#06334A").s().p("AAABjIAAiWIglAPIAAggIBHgeIAEAAIAADFg");
	this.shape_2.setTransform(18.4,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#06334A").s().p("AgHAcQgEgCgEgEQgDgDgBgFQgCgFAAgHIAAgDQAAgHACgFQABgFADgEIAHgFIAIgCIAIACIAIAFQACAEACAFQACAFAAAHIAAADQAAAHgCAFQgCAFgCADQgEAEgEACQgEABgEABQgDgBgEgBgAgDgUIgFAFIgCAFIgBAJIAAADIABAJQABADABACIAFAFIADAAQANABAAgUIAAgDIgCgJIgCgFIgEgFIgFgBIgDABg");
	this.shape_3.setTransform(37,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#06334A").s().p("AACAjIgCgDIgCgEIgBgHIAAgiIgJAAIAAgIIAJAAIAAgOIAHAAIAAAOIAJAAIAAAIIgJAAIAAAiIABADIABACIABABIACAAIACAAIACAAIAAAIIgDAAIgEABIgEgBg");
	this.shape_4.setTransform(32.5,19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#06334A").s().p("AgUAoIAAhOIAJAAIAAAGQADgEADgCQAEgBADAAQAEAAAEABQADACADADQACADABAGIABAMIAAAFQAAAMgEAHQgFAHgJAAQgDAAgEgCIgFgFIAAAcgAgGgdIgEAFIAAAcQABADADACQADACADAAQAFAAADgFQADgFAAgIIAAgFQAAgKgDgEQgDgFgFAAQgDAAgDACg");
	this.shape_5.setTransform(25.9,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#06334A").s().p("AgJAcIgEgEQgDgDgBgEIgBgKIAAgjIAJAAIAAAjIABAHIACAEIADACIADAAQACAAADgCQADgCABgDIAAgpIAKAAIAAA4IgJAAIgBgFQgCADgDABQgDACgDAAIgHgBg");
	this.shape_6.setTransform(20.5,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#06334A").s().p("AgHAcQgEgCgCgCIgEgGIgBgHIAJAAIABAFIADAEIADABIACAAQAFAAACgBQADgDAAgEIgBgCIgCgDIgDgCIgEgDIgHgDIgFgCIgEgEIgBgGQAAgEACgDQABgCACgDIAGgEIAGgBIAIABIAGAFIADAFQACADAAAEIgKAAIgBgDIgBgDIgDgDIgEgBIgCABIgDACIgCADIAAACIAAADIACADIADACIADACIAIADIAFACQADACABADQABACAAAEIgBAHIgEAFQgDACgDACIgIAAQgDAAgEgBg");
	this.shape_7.setTransform(43.2,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#06334A").s().p("AgCAoIgFgCIgFgCIgEgDIAEgGQADADADABIAGACIAEgCQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIACgEIABgHIAAgGQgCADgDACQgDABgDAAQgEAAgEgBIgGgFQgCgDgCgGQgCgDABgHIAAgFQgBgIACgFQACgFACgDQACgEAEgBQAEgCAEAAQADAAADACQAEACABAEIABgHIAIAAIAAA5QAAAGgBAEIgEAHIgHAEQgEABgEAAIgCAAgAgHgaQgDAEAAAKIAAAFQAAAIADAFQADAEAEAAQAFAAACgCIAEgFIAAgbIgEgFQgCgCgFgBQgEAAgDAGg");
	this.shape_8.setTransform(37.9,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06334A").s().p("AAKAdIAAgkQAAgHgCgDQgDgDgEAAQgCAAgDADIgEAGIAAAoIgKAAIAAg4IAJAAIABAGQACgDADgDQADgBADAAIAHABQADABACACQACADABAEIABAKIAAAkg");
	this.shape_9.setTransform(32.7,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#06334A").s().p("AgDAnIAAg4IAHAAIAAA4gAgDgcIgBgEIABgEQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIABAEIgBAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_10.setTransform(28.8,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#06334A").s().p("AgCAdIgSg5IAKAAIAKAqIALgqIAKAAIgSA5g");
	this.shape_11.setTransform(25.2,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#06334A").s().p("AgJAdIgFgDIgEgGQgBgDAAgFQAAgDABgEQACgDADgCQADgCAEgBQAEgBAEAAIAGAAIAAgHQAAgFgCgDQgCgCgEAAIgDABIgDACIgCADIgBADIgJAAIABgFQACgEADgCIAGgEQADgCADAAIAHABQADABADADQADACAAADQACADAAAFIAAAbIAAADIABADIAAADIABADIAAABIgKAAIAAgDIgBgEIgDADIgCADIgEABIgCAAIgHAAgAgBABIgEACIgEADIgBAGIABAEIACADIADABIADABIACgBIADgBIADgCIABgDIAAgNIgEAAIgFAAg");
	this.shape_12.setTransform(20.2,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#06334A").s().p("AgHAmQgEgBgDgDQgEgDgCgFQgCgEAAgGIAKAAIABAHIADAFIAFADIADAAQAHAAAEgDQADgDAAgGIgBgFIgCgEIgFgDIgGgDIgIgEIgGgDQgEgDgBgDQgCgEABgEQgBgFACgEIAFgGQADgDAEgCQAEgCADAAQAGAAAEACQAEACADAEQAEADABAEIACAJIgKAAIgBgGIgCgFIgFgDQgDgBgDAAIgDABIgFADIgCAEIgBAFQABAFADADQAEADAFADIAKADQAEABACADIAFAHIABAIQgBAFgBAEQgBADgEADQgDADgEABQgEACgGAAIgHgCg");
	this.shape_13.setTransform(14.7,8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#06334A").s().p("AgGBqIAAgWQgIgBgHgDQgHgEgGgGQgGgHgDgJQgDgKAAgNIAfAAQAAAIACAFQABAFADAEQACADADABIAEABQAEAAADgBQADgCABgCIADgGIABgIIgBgIIgDgGIgFgGIgGgFIgQgIQgIgFgGgEQgFgGgDgIQgDgIAAgLQAAgJADgIQACgIAFgGQAFgGAHgDQAHgEAIgBIAAgYIAPAAIAAAYQAJACAGAEQAHAEAEAHQAFAHADAJQACAIAAALIggAAQAAgNgEgHQgDgGgHAAQgBAAgCABIgEAEIgDAHIAAAHIABAIIACAGIAGAFIAFAFIARAJQAIADAFAGQAGAGADAIQADAIAAALQAAAKgDAIQgDAHgFAGQgEAGgHADQgHAEgJABIAAAWg");
	this.shape_14.setTransform(7.8,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.8,56.5);


(lib.portability = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CC0CD").s().p("AgIA1QgCgDAAgFQAAgFACgDQAEgDAEgBQAFABADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgEgDgAgIgkQgCgDAAgFQAAgEACgEQAEgDAEAAQAGAAACADQADAEAAAEQAAAFgDADQgCADgGAAQgEAAgEgDg");
	this.shape.setTransform(117.6,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CC0CD").s().p("AgWA4IAAhtIASAAIAAALQAEgGADgEQAFgDAHAAIACAAIACABIACAAIABABIAAARIgDAAIgFAAQgHAAgFADQgDAFgDAHIAABNg");
	this.shape_1.setTransform(112.2,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4CC0CD").s().p("AgPA2QgIgDgFgHQgGgHgEgKQgEgJAAgNIAAgIQAAgNAEgLQAEgJAGgHQAFgHAIgDQAIgDAHAAQAJAAAHADQAJADAFAHQAGAHAEAJQACALAAANIAAAIQAAANgCAJQgEAKgGAHQgFAHgJADQgHADgJAAQgHAAgIgDgAgIgmQgFADgDAEQgDAEgCAIQgCAGAAAKIAAAIQAAAJACAHQACAHADAFQADAEAFADQAFACADAAQAYAAABglIAAgIQgBgKgBgGQgDgIgDgEQgDgEgFgDQgEgCgFAAQgDAAgFACg");
	this.shape_2.setTransform(103.3,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4CC0CD").s().p("AgNBPIAAheIgOAAIAAgPIAOAAIAAgLQAAgJADgHQACgHAEgFQAEgFAEgCQAGgCAHAAIALABIgBAQIgEgBIgEAAQgHAAgEAFQgFAGAAAKIAAALIATAAIAAAPIgTAAIAABeg");
	this.shape_3.setTransform(94.9,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4CC0CD").s().p("AgaBNIgDAAIgCgBIgCAAIAAgPIACAAIACAAIAHgBIAGgDIAEgGIADgJIADgKIghhsIAVAAIASBPIAUhPIATAAIglB+IgCAJIgFAJIgIAHQgFADgFAAIgDgBg");
	this.shape_4.setTransform(82.2,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CC0CD").s().p("AAEBEQgEgCgBgDQgDgDgCgGQgBgGAAgIIAAhDIgRAAIAAgOIARAAIAAgbIAQAAIAAAbIAQAAIAAAOIgQAAIAABDIAAAHIADAEIADACIADAAIAEAAIADgBIAAAQIgFABIgHAAQgFABgEgCg");
	this.shape_5.setTransform(74.4,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4CC0CD").s().p("AgIBLIAAhtIAQAAIAABtgAgGg3QgDgEAAgEQAAgFADgDQACgDAEAAQAFAAACADQADADAAAFQAAAEgDAEQgCADgFAAQgEAAgCgDg");
	this.shape_6.setTransform(69.2,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CC0CD").s().p("AgHBOIAAibIAQAAIAACbg");
	this.shape_7.setTransform(64.4,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4CC0CD").s().p("AgIBLIAAhtIAQAAIAABtgAgGg3QgDgEAAgEQAAgFADgDQACgDAEAAQAFAAACADQADADAAAFQAAAEgDAEQgCADgFAAQgEAAgCgDg");
	this.shape_8.setTransform(59.6,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CC0CD").s().p("AgKBLQgHgDgEgIIgBANIgRAAIAAibIASAAIAAA7QAFgHAGgEQAGgEAHAAQAJAAAHADQAHADAEAHQAFAGACAKQADAIAAAOIAAAKQAAANgDAKQgCAKgFAGQgEAHgHADQgHADgJAAQgHAAgGgEgAgMgNQgGAEgDAHIAAAyIAEAGIAFAFIAFADIAHABQALAAAFgIQAGgJAAgTIAAgKIgBgQQgCgFgCgFQgDgEgFgCQgEgDgFAAQgHAAgFAFg");
	this.shape_9.setTransform(52.2,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4CC0CD").s().p("AgSA3QgHgCgDgEQgFgEgCgGQgCgGAAgIQAAgIACgHQADgHAGgDQAFgFAIgDQAJgCAJAAIAMAAIAAgMQAAgKgFgEQgEgFgIABQgEAAgDABIgGADQgCADgBAEQgCADABADIgSAAQgBgGADgGQADgGAEgFQAFgEAHgDQAIgDAGAAQAIAAAGACQAHACAFAEQAEAEADAHQACAGAAAJIAAA1IAAAFIABAGIABAHIABAEIAAACIgTAAIgBgFIgBgHIgEAGIgGAEIgHADIgGABQgGAAgGgCgAgCADQgGABgDADQgEACgCAFQgCADAAAGIABAIQABADACACIAFAEIAIABIAEgBIAHgEIAFgDIADgGIAAgaIgJAAQgHAAgDACg");
	this.shape_10.setTransform(41.9,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CC0CD").s().p("AAEBEQgEgCgBgDQgDgDgCgGQgBgGAAgIIAAhDIgRAAIAAgOIARAAIAAgbIAQAAIAAAbIAQAAIAAAOIgQAAIAABDIAAAHIADAEIADACIADAAIAEAAIADgBIAAAQIgFABIgHAAQgFABgEgCg");
	this.shape_11.setTransform(33.4,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4CC0CD").s().p("AgVA4IAAhtIARAAIABALQADgGADgEQAFgDAHAAIACAAIACABIACAAIABABIAAARIgDAAIgFAAQgHAAgFADQgDAFgCAHIAABNg");
	this.shape_12.setTransform(27.9,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CC0CD").s().p("AgPA2QgIgDgFgHQgHgHgDgKQgDgJgBgNIAAgIQABgNADgLQADgJAHgHQAFgHAIgDQAHgDAIAAQAIAAAJADQAHADAGAHQAGAHADAJQAEALAAANIAAAIQAAANgEAJQgDAKgGAHQgGAHgHADQgJADgIAAQgIAAgHgDgAgIgmQgFADgDAEQgEAEgBAIQgCAGAAAKIAAAIQAAAJACAHQABAHAEAFQAEAEAEADQAFACADAAQAZAAAAglIAAgIQAAgKgCgGQgDgIgDgEQgDgEgFgDQgEgCgFAAQgDAAgFACg");
	this.shape_13.setTransform(18.9,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4CC0CD").s().p("AgtBKIAAiTIAuAAQALAAAIADQAIAEAGAGQAGAGADAIQADAJAAAKQAAAKgDAJQgDAIgGAEQgGAGgIADQgIADgLAAIgbAAIAAA6gAgaAAIAbAAQAHAAAFAAQAFgDADgDQADgEABgGQACgFAAgGIgCgLQgBgGgDgEQgDgEgFgCQgFgDgHAAIgbAAg");
	this.shape_14.setTransform(8.2,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.9,29.2);


(lib.perfomance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CC0CD").s().p("AgIA1QgCgDAAgFQAAgFACgDQAEgDAEgBQAFABADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgEgDgAgIgkQgCgDAAgFQAAgEACgEQAEgDAEAAQAGAAACADQADAEAAAEQAAAFgDADQgCADgGAAQgEAAgEgDg");
	this.shape.setTransform(140.1,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CC0CD").s().p("AgWA4IAAhtIASAAIAAALQAEgGADgEQAFgDAHAAIACAAIACABIACAAIABABIAAARIgDAAIgFAAQgHAAgFADQgDAFgDAHIAABNg");
	this.shape_1.setTransform(134.7,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4CC0CD").s().p("AgPA2QgIgDgFgHQgGgHgEgKQgEgJAAgNIAAgIQAAgNAEgLQAEgJAGgHQAFgHAIgDQAIgDAHAAQAJAAAHADQAJADAFAHQAGAHAEAJQACALABANIAAAIQgBANgCAJQgEAKgGAHQgFAHgJADQgHADgJAAQgHAAgIgDgAgIgmQgFADgDAEQgDAEgCAIQgCAGAAAKIAAAIQAAAJACAHQACAHADAFQADAEAFADQAFACADAAQAZAAAAglIAAgIQgBgKgBgGQgDgIgDgEQgDgEgFgDQgEgCgFAAQgDAAgFACg");
	this.shape_2.setTransform(125.8,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4CC0CD").s().p("AgNBPIAAheIgOAAIAAgPIAOAAIAAgLQAAgJADgHQACgHAEgFQAEgFAEgCQAGgCAHAAIALABIgBAQIgEgBIgEAAQgHAAgEAFQgFAGAAAKIAAALIATAAIAAAPIgTAAIAABeg");
	this.shape_3.setTransform(117.4,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4CC0CD").s().p("AgNA2QgIgDgGgGQgFgGgDgJQgEgKAAgNIAAgKQAAgOAEgKQADgLAHgGQAFgHAHgCQAIgDAGAAQAKAAAIADQAHAEAEAGQAGAHABAKQACAJAAAOIAAAIIg8AAIAAACQABASAGAIQAHAJAKAAIAJgBIAHgDIAGgEIAEgFIAJAMIgEAFIgIAGIgKADQgGACgIAAQgHAAgIgDgAgGgnQgEACgDADQgDADgCAHQgCAGAAAJIApAAIAAgCIgBgMQgBgFgCgEQgDgEgEgCQgEgCgFAAQgDAAgEABg");
	this.shape_4.setTransform(104.2,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CC0CD").s().p("AgPA1QgIgDgFgHQgFgGgDgKQgCgJAAgMIAAgKQAAgNACgKQADgJAFgHQAFgGAIgEQAIgDAJAAQAIAAAHADQAHADAFAEQAFAGACAHQADAIAAAJIgRAAQAAgMgGgHQgFgFgJAAQgFAAgFACQgFADgCAFQgDAEgBAHIgBAPIAAAKIABAPQABAGADAFQACAFAFACQAFACAFABIAHgBQAEgCADgDQADgCABgEIACgKIARAAQAAAJgDAGQgDAHgFAFQgFAEgHADQgHADgHAAQgJAAgIgEg");
	this.shape_5.setTransform(94.5,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4CC0CD").s().p("AATA4IAAhHQAAgNgFgGQgEgFgJAAQgFAAgFAEQgFAFgEAHIAABPIgSAAIAAhtIARAAIABAMQAFgGAHgFQAGgDAHAAQAHAAAFACQAGADAEAFQAEAEACAIQACAIAAAKIAABHg");
	this.shape_6.setTransform(84.4,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CC0CD").s().p("AgSA3QgHgCgDgEQgFgEgCgGQgDgGABgIQAAgIACgHQADgHAFgDQAGgFAJgDQAHgCAKAAIAMAAIAAgMQAAgKgEgEQgFgFgIABQgEAAgDABIgFADQgDADgBAEQgBADgBADIgRAAQAAgGACgGQADgGAEgFQAFgEAHgDQAIgDAGAAQAIAAAGACQAHACAEAEQAFAEADAHQACAGAAAJIAAA1IAAAFIABAGIABAHIABAEIAAACIgTAAIgBgFIgBgHIgEAGIgGAEIgHADIgGABQgHAAgFgCgAgCADQgGABgDADQgEACgCAFQgCADAAAGIABAIQABADACACIAFAEIAIABIAEgBIAHgEIAFgDIADgGIAAgaIgJAAQgHAAgDACg");
	this.shape_7.setTransform(74.4,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4CC0CD").s().p("AAuA4IAAhHIgBgMQgBgEgCgDIgHgEIgHgBQgEAAgEACIgFAEQgDAEgCAEIgCAIIAAABIAABIIgQAAIAAhHQABgHgCgEQgBgFgCgDIgHgDQgDgCgFAAQgHAAgEAEQgFADgDAHIAABRIgSAAIAAhtIARAAIABAKQAEgGAHgDQAGgDAKAAQAHAAAIAEQAEADAFAJQAEgHAHgFQAIgEAJAAQAIAAAFACQAGADAFAFQADAEACAIQADAHAAALIAABHg");
	this.shape_8.setTransform(61.4,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CC0CD").s().p("AgWA4IAAhtIASAAIAAALQAEgGADgEQAFgDAHAAIACAAIACABIACAAIABABIAAARIgEAAIgEAAQgHAAgFADQgDAFgDAHIAABNg");
	this.shape_9.setTransform(50.8,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4CC0CD").s().p("AgPA2QgIgDgGgHQgFgHgEgKQgEgJABgNIAAgIQgBgNAEgLQAEgJAFgHQAGgHAIgDQAIgDAHAAQAJAAAHADQAJADAFAHQAGAHAEAJQACALAAANIAAAIQAAANgCAJQgEAKgGAHQgFAHgJADQgHADgJAAQgHAAgIgDgAgIgmQgFADgDAEQgDAEgCAIQgCAGAAAKIAAAIQAAAJACAHQACAHADAFQAEAEAEADQAEACAEAAQAYAAAAglIAAgIQAAgKgCgGQgBgIgEgEQgDgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_10.setTransform(41.8,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CC0CD").s().p("AgNBPIAAheIgOAAIAAgPIAOAAIAAgLQAAgJADgHQACgHAEgFQAEgFAEgCQAGgCAHAAIALABIgBAQIgEgBIgEAAQgHAAgEAFQgFAGAAAKIAAALIATAAIAAAPIgTAAIAABeg");
	this.shape_11.setTransform(33.5,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4CC0CD").s().p("AgWA4IAAhtIASAAIAAALQAEgGADgEQAFgDAHAAIACAAIACABIACAAIABABIAAARIgDAAIgFAAQgHAAgFADQgDAFgDAHIAABNg");
	this.shape_12.setTransform(27.2,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CC0CD").s().p("AgNA2QgIgDgGgGQgGgGgDgJQgCgKAAgNIAAgKQgBgOAEgKQAEgLAFgGQAGgHAIgCQAHgDAFAAQALAAAHADQAIAEAFAGQAEAHACAKQADAJAAAOIAAAIIg8AAIAAACQgBASAIAIQAGAJALAAIAIgBIAHgDIAFgEIAGgFIAJAMIgGAFIgIAGIgJADQgGACgHAAQgIAAgIgDgAgGgnQgEACgDADQgDADgCAHQgCAGAAAJIAqAAIAAgCIgCgMQgBgFgCgEQgDgEgEgCQgDgCgHAAQgCAAgEABg");
	this.shape_13.setTransform(18.7,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4CC0CD").s().p("AgtBKIAAiTIAuAAQALAAAIADQAIAEAGAGQAGAGADAIQADAJAAAKQAAAKgDAJQgDAIgGAEQgGAGgIADQgIADgLAAIgbAAIAAA6gAgaAAIAbAAQAHAAAFAAQAFgDADgDQADgEABgGQACgFAAgGIgCgLQgBgGgDgEQgDgEgFgCQgFgDgHAAIgbAAg");
	this.shape_14.setTransform(8.2,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.4,29.2);


(lib.mcw3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.wf3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mcw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.wf2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mcw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.wf1002();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mcbg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_wf100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.wf100();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.logo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_6201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib._6201();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_3640 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626562").s().p("AgJAtQgFgDgEgEQgDgFgCgIQgCgIAAgJIAAgPQAAgKACgHQACgIADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFADAEAEQADAFADAIQABAHAAAKIAAAPQAAAJgBAIQgCAIgEAFQgEAEgEADQgFACgGAAQgEAAgFgCgAgCgeIgDAEQgBACgBAEIAAAKIAAAUIAAAKQABAFABACIADADIACACQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIADgDIACgHIAAgKIAAgUIAAgKIgCgGIgDgEQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCACg");
	this.shape.setTransform(227.5,175.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626562").s().p("AACAuIAAgUIgcAAIgBgMIAdg7IASAAIAAA4IAIAAIAAAPIgIAAIAAAUgAACgRIgMAcIAMAAIAAgdg");
	this.shape_1.setTransform(220.9,175.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626562").s().p("AgKAsQgFgDgDgEQgEgGgCgGQgCgHAAgIIAAgHQAAgKADgIQACgKAGgHQAFgGAHgEQAGgEAJAAIADAAIAAAPIgBAAQgFABgFABQgEACAAADIgFAHIgDAJQADgDAEgCQABgBAFAAQAFgBAEADQAFADACAEQADAEABAEQACAFAAAHQAAAHgCAGQgCAGgDAEQgEAEgFADQgFACgGAAQgFAAgFgDgAgFABIgDAFIAAAGQAAAKADAFQACAFADAAQAAAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIACgFIABgHIgBgGIgCgGIgDgDIgDAAQgCAAgDABg");
	this.shape_2.setTransform(214.4,175.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626562").s().p("AgJAtQgFgCgEgDQgEgDgCgFQgCgFAAgHIARAAIABAFIACAEIADACIADABIADgBIADgCIACgFIABgEQAAgIgDgDQgDgEgDAAIgJAAIAAgMIAJAAQADAAADgEQACgDAAgGIgBgEIgBgEIgDgDIgDgBIgCABIgDACIgCAEIgBAEIgSAAQAAgGACgFQADgEADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAGABADADQAEAEACAFQACAEAAAHIgBAGIgCAGIgEAEIgFAEQAHABADAFQADAGAAAIQAAAGgDAFQgBAFgFADQgDAEgGACQgEACgFAAQgFAAgEgCg");
	this.shape_3.setTransform(207.7,175.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626562").s().p("AgOAHIAAgNIAdAAIAAANg");
	this.shape_4.setTransform(202.1,175.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#626562").s().p("AgYAuIAAhbIAxAAIAAAQIgfAAIAAAYIAcAAIAAANIgcAAIAAAmg");
	this.shape_5.setTransform(196.9,175.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626562").s().p("AAKAuIgKg1IgJA1IgTAAIgQhbIASAAIAJA4IALg4IANAAIALA4IAJg4IASAAIgQBbg");
	this.shape_6.setTransform(188.7,175.2);

	this.instance = new lib._3640();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_2760 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626562").s().p("AgJAsQgFgCgEgEQgDgGgCgHQgCgIAAgKIAAgOQAAgKACgIQACgHADgFQAEgFAFgCQAFgCAEAAQAFAAAFACQAFACAEAFQADAFADAHQABAIAAAKIAAAOQAAAKgBAIQgCAHgEAGQgEAEgEACQgFADgGAAQgEAAgFgDgAgCgeIgDADQgBADgBAFIAAAJIAAAUIAAAKQABAEABADIADAEIACABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIADgEIACgHIAAgKIAAgUIAAgJIgCgIIgDgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape.setTransform(103.9,175.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626562").s().p("AgKAsQgFgCgDgGQgEgFgCgGQgCgHAAgIIAAgHQAAgKADgJQACgJAGgGQAFgIAHgDQAGgEAJAAIADAAIAAAQIgBAAQgFgBgFACQgEACAAACIgFAHIgDAKQADgDAEgBQABgCAFAAQAFAAAEACQAFADACAEQADAEABAEQACAGAAAGQAAAHgCAFQgCAGgDAFQgEAEgFACQgFADgGAAQgFAAgFgDgAgFAAIgDAGIAAAHQAAAJADAFQACAFADAAQAAAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIACgFIABgHIgBgHIgCgFIgDgDIgDAAQgCAAgDAAg");
	this.shape_1.setTransform(97.4,175.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626562").s().p("AgTAuIAchMIgjAAIAAgPIA1AAIAAALIgbBQg");
	this.shape_2.setTransform(90.7,175.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626562").s().p("AgZAuIAAgMIAZggIADgFIACgFIACgFIAAgEQAAgHgCgDQgCgEgDAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIgDADIgCAFIgBAGIgSAAQAAgGADgGQABgFAEgEQADgFAGgCQAFgCAFAAQAFAAAGABQAEACAEAEQADADABAFQACAFAAAGIgBAJIgDAIIgGAHIgHAJIgKARIAeAAIAAAPg");
	this.shape_3.setTransform(84.1,175.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626562").s().p("AgOAHIAAgNIAdAAIAAANg");
	this.shape_4.setTransform(78.5,176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#626562").s().p("AgYAuIAAhbIAxAAIAAAQIgfAAIAAAYIAbAAIAAANIgbAAIAAAmg");
	this.shape_5.setTransform(73.3,175.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626562").s().p("AAKAuIgKg1IgJA1IgTAAIgQhbIASAAIAJA4IALg4IANAAIALA4IAJg4IASAAIgQBbg");
	this.shape_6.setTransform(65.1,175.3);

	this.instance = new lib._2760();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.learnmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F03D").s().p("AgZAZQgIgKABgPQAAgQAJgKQAJgKAOAAQAPAAAJAKQAJALAAAUIguAAQAAAJAFAEQAEAFAFAAQAFAAADgCQACgDACgFIATADQgEAKgHAGQgIAFgMAAQgSAAgIgMgAgJgRQgDAEgBAIIAbAAQAAgIgEgEQgEgFgGAAQgEAAgFAFg");
	this.shape.setTransform(73.4,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F03D").s().p("AgWAlIAAhHIASAAIAAAKQAEgHACgCQAEgCAEAAQAHAAAGADIgGARQgFgDgEgBQgEABgDACQgBACgBAGQgCAFAAARIAAAXg");
	this.shape_1.setTransform(67.4,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6F03D").s().p("AgSAhQgIgFgFgIQgFgJAAgLQAAgJAFgJQAFgJAIgFQAJgEAJAAQAQAAALAKQAKALAAAPQAAAQgKALQgLAKgQAAQgIAAgKgEgAgLgPQgFAGAAAJQAAAKAFAGQAFAGAGAAQAHAAAFgGQAGgGAAgKQAAgJgGgGQgFgGgHAAQgGAAgFAGg");
	this.shape_2.setTransform(59.9,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F03D").s().p("AAdAyIAAhOIgUBOIgRAAIgUhOIAABOIgTAAIAAhiIAeAAIARBBIAShBIAeAAIAABig");
	this.shape_3.setTransform(49.8,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F03D").s().p("AAOAlIAAglQgBgLgBgDQgBgDgDgCQgCgCgEAAQgEAAgDACQgEADgCAFQgCAEABAKIAAAiIgTAAIAAhHIASAAIAAALQAJgMAMAAQAGAAAGACQAFACADADQACAEACAEIAAAOIAAArg");
	this.shape_4.setTransform(35.9,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6F03D").s().p("AgWAlIAAhHIASAAIAAAKQAEgHACgCQAEgCAEAAQAHAAAGADIgGARQgFgDgEgBQgEABgDACQgBACgBAGQgCAFAAARIAAAXg");
	this.shape_5.setTransform(29.4,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6F03D").s().p("AgaAfQgGgGAAgJQAAgGACgFQADgFAFAAQAGgDAKgCQAMgCAFgDIAAgCQgBgFgCgCQgDgDgGAAQgEAAgDACQgEACgBAFIgSgDQAEgKAGgFQAIgFANAAQAMAAAGADQAHADACAEQACAFAAAMIAAAVIABAOIADAKIgTAAIgBgGIgBgCQgFAFgFACQgEACgGAAQgLAAgHgGgAAAAEIgKADQgEADAAAEQAAAEADADQAEADAEAAQAEAAAEgEQAEgCABgEIABgJIAAgEIgLADg");
	this.shape_6.setTransform(22.2,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6F03D").s().p("AgaAZQgGgKAAgPQAAgQAJgKQAJgKAOAAQAPAAAJAKQAKALgBAUIguAAQABAJAEAEQAEAFAFAAQAEAAADgCQAEgDABgFIATADQgEAKgHAGQgJAFgLAAQgSAAgJgMgAgJgRQgDAEAAAIIAaAAQAAgIgEgEQgEgFgGAAQgEAAgFAFg");
	this.shape_7.setTransform(14.4,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F03D").s().p("AgiAxIAAhhIAVAAIAABQIAwAAIAAARg");
	this.shape_8.setTransform(6.6,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.6,19.6);


(lib.guru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#033A63").s().p("AgbBCQgHgCgFgHQgFgFgDgKQgDgKAAgNIAAhXIAkAAIAABXQAAALAEAFQADAEAGAAQAFABAEgDQAEgDADgFIAAhhIAkAAIAACHIgiAAIgBgMQgFAGgHAEQgGAEgKAAQgIAAgHgDg");
	this.shape.setTransform(226.9,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#033A63").s().p("AghBGIAAiIIAhAAIAAAPQAEgJAGgEQAGgEAIgBIAFABIAFABIgBAkIgGgBIgGAAQgIAAgEADQgFADgDAHIAABZg");
	this.shape_1.setTransform(216.7,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#033A63").s().p("AgbBCQgHgCgFgHQgFgFgDgKQgDgKAAgNIAAhXIAkAAIAABXQAAALAEAFQADAEAGAAQAFABAEgDQAEgDADgFIAAhhIAkAAIAACHIgiAAIgBgMQgFAGgHAEQgGAEgKAAQgIAAgHgDg");
	this.shape_2.setTransform(205.5,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#033A63").s().p("AgXBaQgMgFgJgKQgJgJgFgPQgFgQAAgTIAAgeQAAgUAFgPQAEgPAJgKQAIgKANgEQAMgFANgBQAPAAAMAFQALAEAIAHQAIAIAEALQAEAMABAPIglAAIgCgOQgCgHgDgDQgDgDgEgCQgFgCgGABQgGAAgFACQgFADgEAFQgEAGgBAKQgCAJAAANIAAAeQAAAMACAJQACAKAEAGQAEAFAGADQAGACAGABIAJgBIAGgCIAEgDIACgBIAAgiIgaAAIAAgaIBAAAIAABKIgIAIIgMAHQgIADgKADQgKACgNAAQgOAAgMgEg");
	this.shape_3.setTransform(191.6,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#033A63").s().p("AAABUQgEgCgEgFQgFgFgDgIQgCgHAAgLIAAhHIgQAAIAAgbIAQAAIAAghIAiAAIAAAhIATAAIAAAbIgTAAIAABDIAAAHQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAEACIAEABIAGAAIADgBIAAAcIgJACIgLABQgIAAgHgCg");
	this.shape_4.setTransform(173.8,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#033A63").s().p("AgTBCQgKgEgIgIQgIgIgDgMQgEgMAAgPIAAgJQAAgRADgMQAFgNAGgIQAIgJAKgEQAKgFALAAQAaAAANARQANARAAAhIAAAPIhFAAQAAAIACAFQACAGADADQADAEAEABQADACAGAAQAKAAAHgDQAHgEAGgFIAOAVQgDAEgEAEIgKAGIgNAFQgIACgJAAQgMAAgLgFgAgLghQgFAHAAAOIAiAAIAAgDQgBgMgDgGQgEgHgJAAQgIAAgEAHg");
	this.shape_5.setTransform(163.9,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#033A63").s().p("AgTBCQgLgEgHgIQgIgIgDgMQgEgMAAgPIAAgJQAAgRAEgMQADgNAIgIQAHgJAKgEQAKgFALAAQAaAAANARQANARAAAhIAAAPIhGAAQABAIACAFQACAGADADQADAEAFABQACACAGAAQAJAAAIgDQAHgEAGgFIAOAVQgDAEgEAEIgKAGIgNAFQgIACgIAAQgMAAgMgFgAgLghQgEAHgBAOIAiAAIAAgDQAAgMgEgGQgEgHgKAAQgHAAgEAHg");
	this.shape_6.setTransform(151.4,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#033A63").s().p("AAPBhIAAhWIgBgLIgDgGQgCgCgDgCQgDgBgDAAQgEAAgEACQgEADgCAEIAABjIgkAAIAAjBIAkAAIAABFQAFgGAIgEQAFgEAJAAQAIAAAHADQAHADAFAGQAFAHADAKQADAKAAANIAABWg");
	this.shape_7.setTransform(138.6,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#033A63").s().p("AgUBDQgKgEgGgGQgHgHgDgIQgDgIAAgIIAiAAQAAAFABAEQACAEACACQACACAEABIAFABQAOAAAAgOQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgFIgIgEIgJgFIgQgIQgIgEgFgDQgEgFgDgHQgDgGAAgIQAAgJAEgHQADgIAGgFQAGgGAJgDQAJgEAJAAQALAAAKAEQAJADAGAFQAHAGADAIQAEAIAAAJIgkAAQAAgHgDgFQgEgEgHAAQgEAAgEADQgDAEAAAGIABAFIAEAEIAGAEIAKAFQAKAEAIAEQAHAEAFAEQAFAFADAGQACAHAAAIQAAAJgEAIQgDAHgHAFQgGAGgJADQgKADgLAAQgLAAgJgEg");
	this.shape_8.setTransform(126.3,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#033A63").s().p("AgpBRQgLgQAAghIAAgJQAAggALgRQAMgQAWAAQAHAAAGAEQAGADAFAHIAAhFIAkAAIAADBIghAAIgBgOQgGAIgGAEQgHAEgHAAQgWAAgMgRgAgGgKQgEACgCAFQgCADgBAGIgBARIAAAJIAAAQQACAHACAFQACAEADACQAFACACAAQAGAAAEgCQAEgDADgEIAAg9QgDgFgEgCQgDgDgGAAQgEAAgDACg");
	this.shape_9.setTransform(113.8,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#033A63").s().p("AgbBEQgHgDgFgFQgGgGgDgHQgDgIAAgJQAAgLADgIQAEgJAGgDQAHgGAKgDQALgEALAAIAKAAIAAgLQAAgJgDgEQgDgEgFAAQgGAAgDAFQgEAEAAAHIgkAAQAAgJAEgIQADgIAHgGQAHgGAJgDQAJgEAKAAQAKAAAJADQAIADAHAFQAGAGAEAIQADAJAAAMIAAA7IABAKIAAAJIACAHIACAFIAAACIgkAAIgCgFIgBgFQgEAFgGAEQgFAEgJAAQgIAAgIgDgAgEAIQgEABgCADQgDADgBAEQgBAEAAAEQAAAIADAEQADAEAGAAQAEAAAEgDQAEgCACgEIAAgcIgIAAQgDAAgEACg");
	this.shape_10.setTransform(101.5,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#033A63").s().p("AgSBCQgLgEgIgIQgIgIgDgMQgEgMAAgPIAAgJQAAgRAEgMQADgNAIgIQAGgJALgEQAKgFALAAQAaAAANARQANARAAAhIAAAPIhGAAQABAIACAFQACAGADADQADAEAFABQACACAGAAQAKAAAHgDQAHgEAGgFIAOAVQgDAEgEAEIgKAGIgOAFQgHACgIAAQgMAAgLgFgAgLghQgEAHgBAOIAiAAIAAgDQgBgMgDgGQgEgHgKAAQgHAAgEAHg");
	this.shape_11.setTransform(89.2,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#033A63").s().p("AghBGIAAiIIAhAAIAAAPQAEgJAGgEQAGgEAIgBIAFABIAFABIgBAkIgGgBIgGAAQgIAAgEADQgFADgDAHIAABZg");
	this.shape_12.setTransform(79,19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#033A63").s().p("Ag0BgIAAi8IAiAAIABAMQAEgHAHgEQAGgEAIAAQAXAAALAQQALARAAAiIAAAIQAAAfgLASQgLAQgWAAQgJAAgFgDQgGgEgFgGIAABAgAgJg/QgEADgDAEIAAA/QADAEAEADQAEABAFAAQAJABAEgKQAEgHAAgTIAAgIIgBgRQgBgHgCgEQgCgFgEgCQgDgCgEAAQgGAAgDACg");
	this.shape_13.setTransform(68.1,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#033A63").s().p("AgSBbQgMgEgJgHQgJgHgFgMQgGgMAAgPIAlAAQAAAIACAGQABAGAEADQAEAEAEACQAFABAFAAQAFAAAEgBIAGgFQADgDAAgDIABgIIgBgJQAAgEgDgDQgDgEgGgDIgMgGQgKgFgJgEQgKgGgHgFQgHgGgEgKQgFgIABgNQgBgMAFgJQAEgJAIgHQAIgHALgDQAKgFALAAQAOAAAKAFQALAEAIAHQAHAIAEALQAEAKAAANIglAAIgBgLQgBgFgDgDQgCgEgFgCQgEgCgGAAQgDAAgEACQgDACgDACQgCADgCAEIgBAIQAAAFACAEQABAEAFADQADADAFACIAKAGQAMAFAKAFQAKAFAGAHQAHAGADAKQADAJAAAMQAAAMgEAJQgEAJgHAHQgIAGgKAEQgLADgNAAQgKAAgLgDg");
	this.shape_14.setTransform(54.4,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#033A63").s().p("AgTBCQgKgEgIgIQgIgIgDgMQgEgMAAgPIAAgJQAAgRADgMQAEgNAHgIQAIgJAKgEQAKgFALAAQAaAAANARQANARAAAhIAAAPIhFAAQAAAIACAFQACAGADADQADAEAEABQADACAGAAQAJAAAIgDQAHgEAGgFIAOAVQgDAEgEAEIgKAGIgOAFQgHACgJAAQgMAAgLgFgAgLghQgFAHAAAOIAiAAIAAgDQgBgMgDgGQgEgHgJAAQgIAAgEAHg");
	this.shape_15.setTransform(35.3,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#033A63").s().p("AAPBhIAAhWIgBgLIgDgGQgCgCgDgCQgDgBgDAAQgEAAgEACQgEADgCAEIAABjIgkAAIAAjBIAkAAIAABFQAFgGAIgEQAFgEAJAAQAIAAAHADQAHADAFAGQAFAHADAKQADAKAAANIAABWg");
	this.shape_16.setTransform(22.5,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#033A63").s().p("AgSBcIAAiYIgtAAIAAgfIB/AAIAAAfIguAAIAACYg");
	this.shape_17.setTransform(9.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235.6,35.2);


(lib.bgwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A0AF").s().p("A1tdbMAAAg61MAraAAAMAAAA61g");
	this.shape.setTransform(139,188.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,376.7);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F03D").s().p("Agcg4IA5A4Ig5A5g");
	this.shape.setTransform(2.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.9,11.5);


(lib.aprinter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSA8QgIgDgHgGQgGgGgDgHQgCgIAAgHIAeAAQAAAFACADQABADADADIAEACIAEABQAOAAAAgMIgCgEIgDgEIgHgFIgIgEIgPgHQgGgEgFgCQgFgFgBgFQgDgGAAgHQAAgIADgHQADgHAGgFQAFgFAIgDQAIgDAIAAQAKAAAJADQAIADAGAFQAGAFADAHQADAHAAAJIghAAQAAgHgDgEQgCgEgHAAQgEAAgDADQgDADAAAGIABAFIAEADIAFAEIAJAEQAJAEAIADQAGAEAEADQAFAFACAFQADAHgBAHQAAAIgDAHQgDAHgGAFQgGAFgJACQgIADgKAAQgJAAgJgEg");
	this.shape.setTransform(263.7,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSA8QgJgDgFgGQgHgGgCgHQgDgIAAgHIAfAAQAAAFABADQABADADADIAEACIAFABQANAAAAgMIgCgEIgDgEIgHgFIgIgEIgPgHQgGgEgFgCQgFgFgCgFQgCgGAAgHQAAgIADgHQADgHAFgFQAGgFAIgDQAIgDAIAAQALAAAIADQAIADAGAFQAGAFADAHQADAHAAAJIghAAQAAgHgCgEQgDgEgHAAQgDAAgDADQgEADAAAGIABAFIAEADIAFAEIAJAEQAJAEAIADQAGAEAFADQAEAFACAFQACAHABAHQgBAIgDAHQgDAHgGAFQgGAFgIACQgJADgKAAQgJAAgJgEg");
	this.shape_1.setTransform(253.1,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRA8QgKgEgHgIQgGgGgEgMQgDgKAAgOIAAgIQAAgPADgLQADgLAHgJQAGgHAKgEQAJgEAJAAQAYAAAMAPQAMAPAAAeIAAAOIg/AAQABAHACAFQABAFADADQADADAEACQACABAFAAQAIAAAIgDQAGgDAFgFIANAUIgGAGIgJAGIgNAEQgGACgIAAQgLAAgKgEgAgKgeQgEAGgBANIAfAAIAAgDQAAgLgDgFQgEgGgJAAQgGAAgEAGg");
	this.shape_2.setTransform(242.3,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANA/IAAhNIgBgKQAAgEgCgCIgEgEIgGgBQgDAAgEADQgDACgDAFIAABYIggAAIAAh6IAeAAIABAMQAGgHAHgEQAGgEAIAAQAHAAAHADQAFACAFAGQAEAFADAKQACAJAAANIAABNg");
	this.shape_3.setTransform(230.8,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBWIAAh6IAfAAIAAB6gAgGg0IgFgEIgEgFIgBgHIABgHIAEgFQACgDADgBQAEgBACAAQAEAAADABQADABADADIADAFIABAHIgBAHIgDAFIgGAEIgHABIgGgBg");
	this.shape_4.setTransform(222.1,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSA8QgJgDgFgGQgHgGgCgHQgEgIAAgHIAgAAQgBAFACADQABADACADIAGACIAEABQANAAAAgMIgBgEIgEgEIgHgFIgIgEIgPgHQgGgEgFgCQgEgFgDgFQgCgGAAgHQAAgIADgHQADgHAFgFQAGgFAIgDQAIgDAIAAQAKAAAJADQAIADAGAFQAGAFADAHQADAHAAAJIggAAQAAgHgDgEQgDgEgHAAQgDAAgDADQgEADAAAGIABAFIAEADIAFAEIAJAEQAKAEAGADQAHAEAFADQAEAFACAFQADAHAAAHQAAAIgEAHQgDAHgGAFQgGAFgIACQgIADgLAAQgKAAgIgEg");
	this.shape_5.setTransform(213.7,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA8QgGgDgFgFQgEgGgDgIQgCgJAAgNIAAhOIAgAAIAABPQAAAKAEAEQADAEAFAAQAEAAAEgCQAEgDACgEIAAhYIAhAAIAAB6IgeAAIgBgLQgFAGgHAEQgFAEgIAAQgIAAgHgDg");
	this.shape_6.setTransform(202.7,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIAzAAQALAAAKADQAKADAHAFQAGAGAEAIQAEAJAAAMIgBALIgEAKIgHAIQgEAEgFACQAGABAFACQAEAEADAFQADAFABAGIABAMQAAAYgNANQgOAMgZAAgAgTA3IAUAAQAFAAADgBQAEgCACgDIADgHIABgIQAAgLgDgGQgEgHgKABIgVAAgAgTgMIASAAQAIAAAFgFQAFgGAAgKQAAgLgFgFQgEgFgJAAIgSAAg");
	this.shape_7.setTransform(190.4,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBWIgEAAIgCAAIgEgBIAAgaIACAAIACAAIAHgBIAEgCIAEgEIACgGIACgIIgjh7IAiAAIAPBGIAPhGIAjAAIgpCMIgEALQgCAFgDAFQgDAFgGADQgGACgIAAIgEAAg");
	this.shape_8.setTransform(173.1,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA/IAAh6IAdAAIAAANQAEgHAFgFQAFgEAHAAIAFABIAEABIAAAgIgFgBIgGAAQgGAAgFADQgFADgCAGIAABQg");
	this.shape_9.setTransform(164.3,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQA8QgLgEgGgIQgHgGgDgMQgEgKAAgOIAAgIQAAgPAEgLQADgLAGgJQAHgHAJgEQAJgEAKAAQAYAAALAPQAMAPAAAeIAAAOIg+AAQAAAHABAFQACAFADADQADADAEACQACABAFAAQAJAAAGgDQAHgDAFgFIANAUIgHAGIgJAGIgLAEQgHACgIAAQgLAAgJgEgAgKgeQgEAGAAANIAeAAIAAgDQAAgLgEgFQgDgGgIAAQgHAAgEAGg");
	this.shape_10.setTransform(154.5,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOA+Igih6IAiAAIAOBLIAQhLIAhAAIgiB6g");
	this.shape_11.setTransform(143.5,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBTIAAilIBeAAIAAAcIg8AAIAAAnIAzAAIAAAaIgzAAIAAAsIA9AAIAAAcg");
	this.shape_12.setTransform(132.8,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeA/IAAh6IAeAAIABANQADgHAGgFQAFgEAGAAIAGABIADABIAAAgIgFgBIgGAAQgGAAgFADQgEADgCAGIAABQg");
	this.shape_13.setTransform(117.7,18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTA8QgKgEgGgIQgHgHgDgMQgEgLAAgPIAAgGQAAgOAEgMQADgKAHgJQAGgHAKgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAJADAKQAEAMAAAOIAAAGQAAAPgEALQgDAMgHAHQgGAIgKAEQgJAEgLAAQgKAAgJgEgAgLgcQgFAJAAAQIAAAGQAAASAFAIQAEAIAHAAQAIAAAFgIQAEgIAAgSIAAgGQAAgQgEgJQgFgIgIAAQgHAAgEAIg");
	this.shape_14.setTransform(107.6,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBZIAAhiIgQAAIAAgYIAQAAIAAgLQAAgLACgIQADgIAFgGQAGgFAFgDQAIgDAJAAIAIABIAHABIgBAaIgHgBQgHAAgEAFQgEAEAAAIIAAALIAUAAIAAAYIgUAAIAABig");
	this.shape_15.setTransform(98,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeA/IAAh6IAeAAIABANQADgHAGgFQAEgEAHAAIAGABIADABIAAAgIgFgBIgFAAQgIAAgEADQgEADgCAGIAABQg");
	this.shape_16.setTransform(85.1,18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRA8QgKgEgHgIQgGgGgEgMQgDgKAAgOIAAgIQAAgPADgLQADgLAHgJQAGgHAKgEQAJgEAJAAQAYAAAMAPQAMAPAAAeIAAAOIg/AAQABAHACAFQABAFADADQADADAEACQACABAFAAQAIAAAIgDQAGgDAFgFIANAUIgGAGIgJAGIgNAEQgGACgIAAQgLAAgKgEgAgKgeQgEAGgBANIAfAAIAAgDQAAgLgDgFQgEgGgJAAQgGAAgEAGg");
	this.shape_17.setTransform(75.4,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABMQgDgCgFgEQgEgFgCgHQgCgHgBgKIAAg/IgNAAIAAgYIANAAIAAgfIAfAAIAAAfIARAAIAAAYIgRAAIAAA7IABAHIABAEIADACIAFABIAEgBIAEAAIAAAYIgIADIgKABQgIAAgGgCg");
	this.shape_18.setTransform(65.9,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANA/IAAhNIgBgKQAAgEgCgCIgEgEIgGgBQgDAAgEADQgDACgDAFIAABYIggAAIAAh6IAeAAIABAMQAGgHAHgEQAGgEAIAAQAHAAAHADQAFACAFAGQAEAFADAKQACAJAAANIAABNg");
	this.shape_19.setTransform(56.6,18);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPBWIAAh6IAfAAIAAB6gAgGg0IgFgEIgEgFIgBgHIABgHIAEgFQACgDADgBQAEgBACAAQAEAAADABQADABADADIADAFIABAHIgBAHIgDAFIgGAEIgHABIgGgBg");
	this.shape_20.setTransform(47.9,15.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdA/IAAh6IAdAAIAAANQAEgHAFgFQAFgEAHAAIAFABIAEABIAAAgIgFgBIgGAAQgGAAgFADQgFADgCAGIAABQg");
	this.shape_21.setTransform(41.4,18);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag2BTIAAilIA3AAQANAAAKAEQAKAEAHAHQAHAIAEAKQADAKAAAMQAAAMgDAKQgEAIgHAHQgHAHgKADQgKAEgNABIgVAAIAAA6gAgUgCIAVAAQAFAAAEgCQAEgBACgDIAEgIIABgKIgBgLIgEgIQgCgFgEgBQgEgDgFAAIgVAAg");
	this.shape_22.setTransform(30.7,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAfBTIgJgiIgsAAIgJAiIgjAAIA0ilIAdAAIA0ClgAgOAUIAdAAIgPg5g");
	this.shape_23.setTransform(11.4,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,0,269,32.3);


(lib.animtxt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var i = 0;
		var c = 25;
		
		var self = this;
		var iid = setInterval(function() {
			i++;
			
			if (i==c+1) {
			  self.parent.play(); 	
				clearInterval(iid);
		 	} else {
			  self.gotoAndStop(i);
			}
		},53);
		
		this.stop();
	}
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45).call(this.frame_45).wait(71));

	// .
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHARIgFgEIgFgGQgBgEAAgDQAAgCABgEIAFgGIAFgEIAHgBIAHABIAHAEIAEAGIABAGIgBAHIgEAGIgHAEQgDABgEAAQgDAAgEgBg");
	this.shape.setTransform(266.6,19.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23).to({_off:false},0).wait(93));

	// u
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA/QgGgDgFgGQgFgGgDgJQgCgJAAgNIAAhRIAiAAIAABRQAAALADAFQAEAEAFAAQAFAAADgDQAEgCADgFIAAhbIAiAAIAAB/IggAAIgBgMQgFAHgHADQgFAEgJAAQgIAAgHgCg");
	this.shape_1.setTransform(257.2,15.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(22).to({_off:false},0).to({_off:true},93).wait(1));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA+QgKgDgGgIQgIgJgDgLQgDgMgBgPIAAgGQABgQADgLQADgMAIgIQAGgIAKgEQAKgEAKAAQAMAAAJAEQAJAEAHAIQAHAIAEAMQAEALAAAQIAAAGQAAAPgEAMQgEALgHAJQgGAIgKADQgJAFgMAAQgKAAgKgFgAgMgdQgFAJAAASIAAAGQAAASAFAIQAFAJAHAAQAJAAAEgJQAFgIAAgSIAAgGQAAgSgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_2.setTransform(245.1,15.2);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(21).to({_off:false},0).to({_off:true},93).wait(2));

	// y
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBaIgEgBIgDAAIgDgBIAAgbIACAAIABAAIAIAAIAEgCQADgCABgDIACgGIADgIIgliBIAkAAIAPBJIAQhJIAkAAIgrCTIgDAKQgDAGgDAEQgEAFgFAEQgHADgJAAIgDAAg");
	this.shape_3.setTransform(233.6,17.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(20).to({_off:false},0).to({_off:true},93).wait(3));

	// r
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBBIAAh/IAfAAIAAAOQAEgHAGgFQAFgEAHAAIAFAAIAFACIgBAhIgFgBIgGAAQgHAAgFADQgEADgDAGIAABTg");
	this.shape_4.setTransform(218.8,15);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(19).to({_off:false},0).to({_off:true},93).wait(4));

	// o
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA+QgJgDgIgIQgGgJgEgLQgEgMABgPIAAgGQgBgQAEgLQAEgMAGgIQAIgIAJgEQAKgEAKAAQAMAAAJAEQAJAEAIAIQAGAIAEAMQAEALgBAQIAAAGQABAPgEAMQgEALgGAJQgHAIgKADQgJAFgMAAQgKAAgKgFgAgMgdQgFAJAAASIAAAGQAAASAFAIQAFAJAHAAQAJAAAEgJQAFgIAAgSIAAgGQAAgSgFgJQgEgJgJAAQgHAAgFAJg");
	this.shape_5.setTransform(208.3,15.2);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(18).to({_off:false},0).to({_off:true},93).wait(5));

	// f
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTBcIAAhlIgQAAIAAgaIAQAAIAAgLQAAgLADgIQADgJAFgFQAGgGAFgDQAIgDAJAAIAIAAIAIACIAAAbQgEgBgFAAQgHAAgDAEQgFAFAAAIIAAALIAVAAIAAAaIgVAAIAABlg");
	this.shape_6.setTransform(198.4,12.3);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(17).to({_off:false},0).to({_off:true},93).wait(6));

	// r
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBBIAAh/IAfAAIAAAOQAEgHAGgFQAFgEAHAAIAFAAIAFACIgBAhIgFgBIgGAAQgHAAgFADQgEADgDAGIAABTg");
	this.shape_7.setTransform(185,15);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(16).to({_off:false},0).to({_off:true},93).wait(7));

	// e
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA+QgLgDgHgIQgHgIgDgLQgEgLAAgOIAAgJQAAgPAEgMQADgMAHgIQAGgIAKgEQAJgEALAAQAYgBAMARQANAQAAAfIAAANIhBAAQAAAIACAFQABAFADADQADADAFACQACACAFAAQAJAAAHgEQAHgDAFgFIAOAUIgHAHQgEADgFADQgGADgHACQgHACgIAAQgLAAgKgFgAgKgfQgEAHgBANIAgAAIAAgDQgBgMgDgFQgEgHgJAAQgGABgEAGg");
	this.shape_8.setTransform(174.8,15.2);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(15).to({_off:false},0).to({_off:true},93).wait(8));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAABPQgEgDgEgEQgEgFgDgHQgCgHAAgKIAAhCIgPAAIAAgZIAPAAIAAggIAgAAIAAAgIARAAIAAAZIgRAAIAAA+IAAAGIACAFIADACIAFAAIAEAAIAEgBIAAAbIgJACIgKABQgIAAgGgCg");
	this.shape_9.setTransform(165,13.7);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(14).to({_off:false},0).to({_off:true},93).wait(9));

	// n
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOBBIAAhQIgBgKQgBgEgCgDIgEgDIgGgBQgDAAgEADQgEACgCAFIAABbIgiAAIAAh/IAgAAIABANQAFgHAIgEQAFgEAKAAQAHAAAHADQAGACAEAGQAFAGACAJQADAKAAANIAABQg");
	this.shape_10.setTransform(155.3,15);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(13).to({_off:false},0).to({_off:true},93).wait(10));

	// i
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgGg2QgEgCgCgCIgEgFIgBgIIABgHQACgEACgBQACgDAEgCIAGgBIAHABIAGAFQACABABAEIACAHQAAAEgCAEQgBADgCACIgGAEIgHABIgGgBg");
	this.shape_11.setTransform(146.3,12.6);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(12).to({_off:false},0).to({_off:true},93).wait(11));

	// r
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBBIAAh/IAfAAIAAAOQAEgHAGgFQAFgEAHAAIAFAAIAFACIgBAhIgFgBIgGAAQgHAAgFADQgEADgDAGIAABTg");
	this.shape_12.setTransform(139.5,15);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(11).to({_off:false},0).to({_off:true},93).wait(12));

	// P
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BWIAAirIA5AAQANAAAKAEQALAEAHAIQAHAIAEAKQAEALAAAMQAAANgEAKQgEAIgHAHQgHAIgLADQgKAEgNAAIgWAAIAAA9gAgVgCIAWAAQAFAAAEgCQAEgCADgDIAEgIIABgLIgBgKIgEgJQgDgEgEgDQgEgCgFAAIgWAAg");
	this.shape_13.setTransform(128.4,12.9);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(10).to({_off:false},0).to({_off:true},93).wait(13));

	// e
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRA+QgLgDgHgIQgHgIgDgLQgEgLAAgOIAAgJQAAgPAEgMQADgMAHgIQAGgIAKgEQAJgEALAAQAYgBAMARQANAQAAAfIAAANIhBAAQAAAIACAFQABAFADADQADADAFACQACACAFAAQAJAAAHgEQAHgDAFgFIAOAUIgHAHQgEADgFADQgGADgHACQgHACgIAAQgLAAgKgFgAgKgfQgEAHgBANIAgAAIAAgDQgBgMgDgFQgEgHgJAAQgGABgEAGg");
	this.shape_14.setTransform(109.9,15.2);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(9).to({_off:false},0).to({_off:true},93).wait(14));

	// c
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSA+QgKgEgGgIQgHgIgDgLQgDgMAAgOIAAgIQAAgPADgLQADgMAHgIQAGgIAKgEQAJgEALAAQAKAAAJADQAIAEAHAFQAGAHADAJQADAKAAAMIggAAQAAgLgDgFQgEgHgIAAQgDABgDACQgEACgBAEQgCAFgBAGIAAAPIAAAIIAAAOQABAGACAFQABAEAEACQADADAEAAQAHAAAEgFQADgFAAgJIAgAAQAAAKgEAJQgDAJgGAGQgGAGgJADQgIADgKABQgLgBgJgEg");
	this.shape_15.setTransform(98.4,15.2);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(8).to({_off:false},0).to({_off:true},93).wait(15));

	// r
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfBBIAAh/IAfAAIAAAOQAEgHAGgFQAFgEAHAAIAFAAIAFACIgBAhIgFgBIgGAAQgHAAgFADQgEADgDAGIAABTg");
	this.shape_16.setTransform(89,15);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(7).to({_off:false},0).to({_off:true},93).wait(16));

	// o
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUA+QgJgDgIgIQgGgJgEgLQgEgMAAgPIAAgGQAAgQAEgLQAEgMAGgIQAIgIAJgEQAJgEALAAQALAAAKAEQAKAEAGAIQAIAIADAMQADALAAAQIAAAGQAAAPgDAMQgDALgIAJQgGAIgKADQgKAFgLAAQgLAAgJgFgAgMgdQgFAJAAASIAAAGQAAASAFAIQAFAJAHAAQAJAAAFgJQAEgIAAgSIAAgGQAAgSgFgJQgEgJgJAAQgHAAgFAJg");
	this.shape_17.setTransform(78.5,15.2);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(6).to({_off:false},0).to({_off:true},93).wait(17));

	// F
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAdIg6AAIAAAsIA0AAIAAAbIg0AAIAABHg");
	this.shape_18.setTransform(67.1,12.9);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(5).to({_off:false},0).to({_off:true},93).wait(18));

	// k
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANBbIgVgyIgJAKIAAAoIgiAAIAAi1IAiAAIAABhIAEgHIAVgkIAoAAIglAzIApBMg");
	this.shape_19.setTransform(55.6,12.5);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(4).to({_off:false},0).to({_off:true},93).wait(19));

	// r
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfBBIAAh/IAfAAIAAAOQAEgHAGgFQAFgEAHAAIAFAAIAFACIgBAhIgFgBIgGAAQgHAAgFADQgEADgDAGIAABTg");
	this.shape_20.setTransform(45.5,15);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(3).to({_off:false},0).to({_off:true},93).wait(20));

	// o
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUA+QgJgDgIgIQgGgJgEgLQgDgMAAgPIAAgGQAAgQADgLQAEgMAGgIQAIgIAJgEQAJgEALAAQAMAAAJAEQAJAEAIAIQAGAIAEAMQADALAAAQIAAAGQAAAPgDAMQgEALgGAJQgHAIgKADQgJAFgMAAQgLAAgJgFgAgMgdQgFAJAAASIAAAGQAAASAFAIQAFAJAHAAQAJAAAFgJQAEgIAAgSIAAgGQAAgSgFgJQgEgJgJAAQgHAAgFAJg");
	this.shape_21.setTransform(35,15.2);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(2).to({_off:false},0).to({_off:true},93).wait(21));

	// W
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUBWIgUhkIgTBkIgjAAIgfirIAjAAIARBrIAUhrIAbAAIAUBrIARhrIAjAAIgfCrg");
	this.shape_22.setTransform(19.8,12.9);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1).to({_off:false},0).to({_off:true},94).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.animtxt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var i = 0;
		var c = 20;
		
		var self = this;
		var iid = setInterval(function() {
			i++;
			
			if (i==c+1) {
			  self.parent.play(); 	
				clearInterval(iid);
		 	} else {
			  self.gotoAndStop(i);
			}
		},53);
		
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(31));

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85C3D7").s().p("AAEA9QgEgBAAgDQgEgDgBgFQgCgGABgHIAAg8IgQAAIAAgOIAQAAIAAgYIAOAAIAAAYIAPAAIAAAOIgPAAIAAA8IABAGIACAEIACACIAEAAIADAAIADgBIAAAOIgEABIgIABQgDAAgEgCg");
	this.shape.setTransform(167.2,9.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(18).to({_off:false},0).to({_off:true},27).wait(16));

	// c
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85C3D7").s().p("AgOAwQgGgDgFgGQgFgGgCgJQgCgIAAgLIAAgJQAAgLACgJQACgIAFgHQAFgFAGgEQAIgCAIAAQAHgBAGADQAHACAEAFQAEAFADAGQADAHAAAJIgQAAQgBgLgEgGQgFgGgIAAQgFAAgEADQgEACgDAEQgCAFgBAFIgBAOIAAAJIABAOQAAAFADAFQADAEAEACQAEACAFABIAHgCIAFgDQADgCACgEQABgEAAgFIAQAAQAAAIgEAFQgDAGgEAFQgEAEgHADQgGACgGAAQgIABgIgEg");
	this.shape_1.setTransform(160.4,10.9);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(17).to({_off:false},0).to({_off:true},29).wait(15));

	// e
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85C3D7").s().p("AgMAwQgHgCgFgGQgFgFgDgIQgDgJAAgMIAAgJQAAgNAEgJQADgKAFgFQAFgFAHgDQAGgDAGABQAJAAAHACQAGAEAFAFQAEAHACAJQACAIAAALIAAAIIg2AAIAAACQAAARAGAHQAGAIAJAAIAIgBIAGgDIAFgEIAEgEIAJALIgFAFIgHAFQgEACgFABQgFABgHAAQgHAAgHgDgAgFgkQgEACgDAEQgCACgCAGIgCAOIAlAAIAAgCIgBgLIgDgIQgCgEgEgBQgDgDgFAAIgGABg");
	this.shape_2.setTransform(151.5,10.9);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(16).to({_off:false},0).to({_off:true},31).wait(14));

	// f
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85C3D7").s().p("AgMBIIAAhVIgMAAIAAgOIAMAAIAAgKQAAgIADgGQABgHAEgEQAEgEADgCQAGgDAHAAIAKACIgBAOIgEgBIgEAAQgHAAgDAFQgEAFAAAJIAAAKIARAAIAAAOIgRAAIAABVg");
	this.shape_3.setTransform(144.3,8.6);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(15).to({_off:false},0).to({_off:true},33).wait(13));

	// r
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#85C3D7").s().p("AgTAyIAAhiIAQAAIAAAKQADgFADgEQAEgCAHAAIACAAIABAAIACAAIABABIAAAQIgDgBIgEAAQgHAAgEAEQgCAEgDAFIAABGg");
	this.shape_4.setTransform(138.5,10.8);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(14).to({_off:false},0).to({_off:true},35).wait(12));

	// e
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#85C3D7").s().p("AgMAwQgHgCgFgGQgFgFgDgIQgDgJAAgMIAAgJQAAgNAEgJQADgKAFgFQAFgFAHgDQAGgDAGABQAJAAAHACQAGAEAFAFQAEAHACAJQACAIAAALIAAAIIg2AAIAAACQAAARAGAHQAGAIAJAAIAIgBIAGgDIAFgEIAEgEIAJALIgFAFIgHAFQgEACgFABQgFABgHAAQgHAAgHgDgAgFgkQgEACgDAEQgCACgCAGIgCAOIAlAAIAAgCIgBgLIgDgIQgCgEgEgBQgDgDgFAAIgGABg");
	this.shape_5.setTransform(130.8,10.9);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(13).to({_off:false},0).to({_off:true},37).wait(11));

	// P
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#85C3D7").s().p("AgoBDIAAiFIApAAQAKAAAHADQAIADAFAGQAFAFADAHQACAIAAAJQAAAKgCAHQgDAIgFAEQgFAEgIADQgHADgKAAIgYAAIAAA1gAgXAAIAYAAQAGAAAFAAQAEgCADgEQADgDABgFQABgFAAgGQAAgFgBgFQgBgFgDgEQgDgDgEgCQgFgCgGgBIgYAAg");
	this.shape_6.setTransform(121.4,9.1);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(12).to({_off:false},0).to({_off:true},39).wait(10));

	// e
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#85C3D7").s().p("AgMAwQgHgCgFgGQgFgFgDgIQgDgJAAgMIAAgJQAAgNAEgJQADgKAFgFQAFgFAHgDQAGgDAGABQAJAAAHACQAGAEAFAFQAEAHACAJQACAIAAALIAAAIIg2AAIAAACQAAARAGAHQAGAIAJAAIAIgBIAGgDIAFgEIAEgEIAJALIgFAFIgHAFQgEACgFABQgFABgHAAQgHAAgHgDgAgFgkQgEACgDAEQgCACgCAGIgCAOIAlAAIAAgCIgBgLIgDgIQgCgEgEgBQgDgDgFAAIgGABg");
	this.shape_7.setTransform(107,10.9);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(11).to({_off:false},0).to({_off:true},41).wait(9));

	// h
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#85C3D7").s().p("AARBHIAAhCQAAgKgEgFQgEgFgIAAQgEAAgFAEQgFAEgDAHIAABHIgQAAIAAiNIAQAAIAAA1QAFgGAGgDQAFgDAGAAQAGAAAFACQAFACAEAEQAEAEABAHQACAHAAAIIAABCg");
	this.shape_8.setTransform(97.9,8.7);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(10).to({_off:false},0).to({_off:true},43).wait(8));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#85C3D7").s().p("AAEA9QgEgBAAgDQgEgDgBgFQgCgGABgHIAAg8IgQAAIAAgOIAQAAIAAgYIAOAAIAAAYIAPAAIAAAOIgPAAIAAA8IABAGIABAEIADACIAEAAIADAAIADgBIAAAOIgEABIgIABQgDAAgEgCg");
	this.shape_9.setTransform(90.3,9.7);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({_off:false},0).to({_off:true},45).wait(7));

	// t
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#85C3D7").s().p("AAEA9QgEgBgBgDQgCgDgCgFQgCgGAAgHIAAg8IgPAAIAAgOIAPAAIAAgYIAPAAIAAAYIAPAAIAAAOIgPAAIAAA8IAAAGIACAEIADACIADAAIAEAAIADgBIAAAOIgFABIgGABQgFAAgDgCg");
	this.shape_10.setTransform(80.3,9.7);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(8).to({_off:false},0).to({_off:true},47).wait(6));

	// o
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#85C3D7").s().p("AgOAwQgHgDgFgGQgFgFgDgKQgDgIAAgMIAAgIQAAgLADgJQADgJAFgGQAFgGAHgDQAHgCAHAAQAHAAAIACQAHADAFAGQAFAGADAJQADAJAAALIAAAIQAAAMgDAIQgDAKgFAFQgFAGgHADQgHADgIAAQgHAAgHgDgAgIgiQgEABgDAFQgDAEgBAGQgCAGAAAIIAAAIQAAAIACAHQABAGADAEQADAEAFADQAEACADAAQAWgBAAghIAAgIQAAgIgCgGQgCgGgDgEQgDgFgEgBQgEgDgEAAQgDAAgFADg");
	this.shape_11.setTransform(73,10.9);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(7).to({_off:false},0).to({_off:true},49).wait(5));

	// g
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#85C3D7").s().p("AgFBGIgJgDIgIgEIgHgFIAHgMQAFAGAGACQAGACAFAAIAHgBQAEgBADgDQACgDACgEQABgFAAgHIAAgLQgEAGgFADQgGADgFAAQgIAAgGgDQgGgDgFgGQgEgGgCgJQgDgHAAgMIAAgJQAAgMADgJQACgJAEgGQAFgGAGgDQAGgCAIAAQAGAAAFADQAGADAEAHIABgMIAPAAIAABkQAAAKgDAHQgDAHgEAFQgFAFgHACQgGACgIAAIgFAAgAgNgvQgFAIAAARIAAAJQAAAPAFAIQAFAIAJAAQAHAAAEgDQAFgEACgFIAAgxQgCgFgFgDQgEgEgHAAQgJAAgFAIg");
	this.shape_12.setTransform(63.4,12.7);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(6).to({_off:false},0).to({_off:true},51).wait(4));

	// e
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#85C3D7").s().p("AgMAwQgHgCgFgGQgFgFgDgIQgDgJAAgMIAAgJQAAgNAEgJQADgKAFgFQAFgFAHgDQAGgDAGABQAJAAAHACQAGAEAFAFQAEAHACAJQACAIAAALIAAAIIg2AAIAAACQAAARAGAHQAGAIAJAAIAIgBIAGgDIAFgEIAEgEIAJALIgFAFIgHAFQgEACgFABQgFABgHAAQgHAAgHgDgAgFgkQgEACgDAEQgCACgCAGIgCAOIAlAAIAAgCIgBgLIgDgIQgCgEgEgBQgDgDgFAAIgGABg");
	this.shape_13.setTransform(50.1,10.9);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(5).to({_off:false},0).to({_off:true},53).wait(3));

	// v
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#85C3D7").s().p("AgFAyIgehjIARAAIASBKIAShKIARAAIgdBjg");
	this.shape_14.setTransform(41.5,10.8);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(4).to({_off:false},0).to({_off:true},55).wait(2));

	// ’
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#85C3D7").s().p("AgKAQQADgHACgGQACgEAAgIIAAgMIAOAAIAAAMIgBAJIgCAHIgFAIIgEAHg");
	this.shape_15.setTransform(35.5,3.9);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(3).to({_off:false},0).to({_off:true},57).wait(1));

	// e
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#85C3D7").s().p("AgMAwQgHgCgFgGQgFgFgDgIQgDgJAAgMIAAgJQAAgNAEgJQADgKAFgFQAFgFAHgDQAGgDAGABQAJAAAHACQAGAEAFAFQAEAHACAJQACAIAAALIAAAIIg2AAIAAACQAAARAGAHQAGAIAJAAIAIgBIAGgDIAFgEIAEgEIAJALIgFAFIgHAFQgEACgFABQgFABgHAAQgHAAgHgDgAgFgkQgEACgDAEQgCACgCAGIgCAOIAlAAIAAgCIgBgLIgDgIQgCgEgEgBQgDgDgFAAIgGABg");
	this.shape_16.setTransform(29.4,10.9);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(2).to({_off:false},0).wait(59));

	// W
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#85C3D7").s().p("AAYBDIgWhgIgCgIIAAAIIgWBgIgQAAIgbiFIARAAIARBbIABAPIAEgOIAVhcIAMAAIAVBcIADAOIABgPIARhbIARAAIgbCFg");
	this.shape_17.setTransform(17.7,9.1);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1).to({_off:false},0).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.savup2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.savup();
	this.instance.parent = this;
	this.instance.setTransform(33.3,30.6,1,1,0,0,0,27.8,28.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F03D").s().p("AjrDrQhihhAAiKQAAiJBihiQBihiCJAAQCKAABhBiQBjBigBCJQABCKhjBhQhhBjiKgBQiJABhihjg");
	this.shape.setTransform(33.4,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.8,66.8);


(lib.mc_wf7620 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626562").s().p("AgJAsQgFgCgEgEQgDgGgCgHQgCgIAAgKIAAgOQAAgKACgHQACgIADgFQAEgFAFgCQAFgCAEAAQAFAAAFACQAFACAEAFQADAFADAIQABAHAAAKIAAAOQAAAKgBAIQgCAHgEAGQgEAEgEACQgFADgGAAQgEAAgFgDgAgCgeIgDADQgBADgBAEIAAAKIAAAUIAAAKQABAFABACIADAEIACABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIADgEIACgHIAAgKIAAgUIAAgKIgCgHIgDgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape.setTransform(171.3,182.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626562").s().p("AgZAuIAAgMIAZggIACgFIAEgFIABgFIABgEQgBgHgCgDQgCgEgDAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIgDADIgCAFIAAAGIgSAAQAAgGABgGQACgFAEgEQADgFAGgCQAFgCAFAAQAFAAAFABQAGACACAEQAEADACAFQACAFAAAGIgCAJIgDAIIgGAHIgHAJIgKARIAdAAIAAAPg");
	this.shape_1.setTransform(164.7,182.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626562").s().p("AgKAsQgFgCgDgFQgEgGgCgGQgCgHAAgIIAAgHQAAgKADgIQACgKAGgGQAFgIAHgDQAGgEAJAAIADAAIAAAQIgBAAQgFgBgFACQgEABAAAEIgFAGIgDAKQADgDAEgBQABgCAFAAQAFAAAEACQAFADACAEQADAEABAEQACAGAAAGQAAAHgCAGQgCAFgDAFQgEAEgFACQgFADgGAAQgFAAgFgDgAgFABIgDAFIAAAHQAAAJADAFQACAFADAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIACgFIABgHIgBgHIgCgFIgDgDIgDAAQgCAAgDABg");
	this.shape_2.setTransform(158.2,182.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626562").s().p("AgTAuIAchMIgjAAIAAgPIA1AAIAAALIgbBQg");
	this.shape_3.setTransform(151.5,182.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626562").s().p("AgOAHIAAgNIAdAAIAAANg");
	this.shape_4.setTransform(145.9,182.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#626562").s().p("AgYAuIAAhbIAxAAIAAAQIgfAAIAAAYIAbAAIAAANIgbAAIAAAmg");
	this.shape_5.setTransform(140.7,182.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626562").s().p("AAKAuIgKg1IgJA1IgTAAIgQhbIASAAIAJA4IALg4IANAAIALA4IAJg4IASAAIgQBbg");
	this.shape_6.setTransform(132.5,182.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Warstwa 1
	this.instance = new lib.mc_6201();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(150.7,302.9,1.084,1.61,0,0,0,139,188.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.epson300x2501 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
			 
		this.btn1.addEventListener("click",
		   function(event) {
		     window.open(clickTag, "_blank");
		   }
		);
			 
		
		this.btn1.addEventListener("mouseover",
		   function(event) {
		       self.btna.gotoAndPlay("loop");
			   self.btna.xc = 0;
		     }
		);
			 
		this.btn1.addEventListener("mouseout",
		   function(event) {
			   self.btna.xc = 1;
		     }
		);
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_426 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1).call(this.frame_25).wait(401).call(this.frame_426).wait(370));

	// Warstwa 4
	this.btn1 = new lib.btn1();
	this.btn1.parent = this;
	this.btn1.setTransform(399.3,300.2,2.654,1,0,0,0,150.7,303.1);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({_off:true},768).wait(28));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDgA3RTYMAuiAAAMAAAgmvMguiAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},768).wait(28));

	// Logo2
	this.instance = new lib.mc_logo2();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({alpha:1},10).wait(243).to({alpha:0},8).to({_off:true},421).wait(22));

	// LOGO
	this.instance_1 = new lib.mc_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},9).to({_off:true},746).wait(28));

	// Warstwa 8
	this.instance_2 = new lib.animtxt2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.3,136.3,1,1,0,0,0,140.3,17.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(50).to({y:343.3},13,cjs.Ease.get(-1)).to({y:494.1},12,cjs.Ease.get(0.98)).to({_off:true},670).wait(26));

	// Warstwa 5
	this.instance_3 = new lib.animtxt1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.5,112.7,1,1,0,0,0,88.5,14);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(53).to({y:319.7},13,cjs.Ease.get(-1)).to({y:470.5},12,cjs.Ease.get(0.98)).to({_off:true},668).wait(26));

	// Warstwa 6
	this.instance_4 = new lib.bgwhite();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},12).to({_off:true},63).wait(721));

	// Warstwa 32
	this.instance_5 = new lib.savup2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(47.5,105.4,0.584,0.584,30,0,0,33.5,33.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(383).to({_off:false},0).to({scaleX:1.07,scaleY:1.07,rotation:-7.2,y:105.2,alpha:1},9,cjs.Ease.get(1)).to({regX:33.4,scaleX:1,scaleY:1,rotation:0,x:47.4,y:105.3},7,cjs.Ease.get(-0.3)).wait(397));

	// Warstwa 30
	this.instance_6 = new lib.arrow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(255.1,224.3,1,1,0,0,0,2.9,5.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(372).to({_off:false},0).to({x:277.1,alpha:1},9,cjs.Ease.get(1)).to({_off:true},405).wait(10));

	// Warstwa 29
	this.instance_7 = new lib.learnmore();
	this.instance_7.parent = this;
	this.instance_7.setTransform(208.6,223.1,1,1,0,0,0,39.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(374).to({_off:false},0).to({x:230.6,alpha:1},9,cjs.Ease.get(1)).to({_off:true},405).wait(8));

	// wf1002.png
	this.instance_8 = new lib.mcw1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,-124,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(344).to({_off:false},0).to({y:62.4},12,cjs.Ease.get(-1)).to({y:125},11,cjs.Ease.get(0.99)).to({_off:true},423).wait(6));

	// wf2.png
	this.instance_9 = new lib.mcw2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,-124,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(346).to({_off:false},0).to({y:62.4},12,cjs.Ease.get(-1)).to({y:125},11,cjs.Ease.get(0.99)).to({_off:true},423).wait(4));

	// wf3.png
	this.instance_10 = new lib.mcw3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,-124,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(348).to({_off:false},0).to({y:62.4},12,cjs.Ease.get(-1)).to({y:125},11,cjs.Ease.get(0.99)).to({_off:true},423).wait(2));

	// Warstwa 24
	this.instance_11 = new lib.aprinter();
	this.instance_11.parent = this;
	this.instance_11.setTransform(151.1,-195.6,1,1,0,0,0,137.9,16.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(350).to({_off:false},0).to({y:-9.2},12,cjs.Ease.get(-1)).to({y:53.4},11,cjs.Ease.get(0.99)).wait(423));

	// Warstwa 22
	this.instance_12 = new lib.wideformat();
	this.instance_12.parent = this;
	this.instance_12.setTransform(452.2,43.8,1,1,0,0,0,73.8,14.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(262).to({_off:false},0).to({x:230.2},12,cjs.Ease.get(-1)).to({x:152.2},11,cjs.Ease.get(1)).wait(52).to({y:163.8},11,cjs.Ease.get(-1)).to({y:293.4},11,cjs.Ease.get(1)).to({_off:true},429).wait(8));

	// Warstwa 21
	this.instance_13 = new lib.guru();
	this.instance_13.parent = this;
	this.instance_13.setTransform(449.9,206.7,1,1,0,0,0,117.8,17.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(262).to({_off:false},0).to({x:227.9},12,cjs.Ease.get(-1)).to({x:149.9},11,cjs.Ease.get(1)).wait(49).to({y:326.7},11,cjs.Ease.get(-1)).to({y:456.3},11,cjs.Ease.get(1)).to({_off:true},429).wait(11));

	// Warstwa 20
	this.instance_14 = new lib.mc_wf7620();
	this.instance_14.parent = this;
	this.instance_14.setTransform(450,125,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(262).to({_off:false},0).to({x:228},12,cjs.Ease.get(-1)).to({x:150},11,cjs.Ease.get(1)).wait(50).to({y:245},11,cjs.Ease.get(-1)).to({y:377},11,cjs.Ease.get(1)).to({_off:true},429).wait(10));

	// Warstwa 18
	this.instance_15 = new lib.mc_3640();
	this.instance_15.parent = this;
	this.instance_15.setTransform(445,125,1,1,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(168).to({_off:false},0).to({x:240},11,cjs.Ease.get(-0.99)).to({x:150},10,cjs.Ease.get(1)).wait(73).to({x:-150},12,cjs.Ease.get(-1)).to({_off:true},509).wait(13));

	// Warstwa 17
	this.instance_16 = new lib.mc_2760();
	this.instance_16.parent = this;
	this.instance_16.setTransform(445,125,1,1,0,0,0,150,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(168).to({_off:false},0).to({x:240},11,cjs.Ease.get(-0.99)).to({x:150},10,cjs.Ease.get(1)).wait(73).to({x:-150},12,cjs.Ease.get(-1)).to({_off:true},505).wait(17));

	// Warstwa 19
	this.instance_17 = new lib.smart();
	this.instance_17.parent = this;
	this.instance_17.setTransform(443.1,206.7,1,1,0,0,0,102.2,17.6);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(168).to({_off:false},0).to({x:238.1},11,cjs.Ease.get(-0.99)).to({x:148.1},10,cjs.Ease.get(1)).wait(73).to({x:-151.9},12,cjs.Ease.get(-1)).to({_off:true},505).wait(17));

	// Warstwa 16
	this.instance_18 = new lib.perfomance();
	this.instance_18.parent = this;
	this.instance_18.setTransform(446.3,43.8,1,1,0,0,0,74.7,14.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(168).to({_off:false},0).to({x:241.3},11,cjs.Ease.get(-0.99)).to({x:151.3},10,cjs.Ease.get(1)).wait(73).to({x:-148.7},12,cjs.Ease.get(-1)).to({_off:true},505).wait(17));

	// txtwf100
	this.instance_19 = new lib.txtwf100();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150.1,-203.7,1,1,0,0,0,22.3,9.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(79).to({_off:false},0).to({y:12.3},13,cjs.Ease.get(-1)).to({y:150.3},12,cjs.Ease.get(1)).wait(64).to({x:-150.9},11,cjs.Ease.get(-0.99)).to({_off:true},594).wait(23));

	// portability
	this.instance_20 = new lib.portability();
	this.instance_20.parent = this;
	this.instance_20.setTransform(152.8,-320.2,1,1,0,0,0,63.4,14.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(83).to({_off:false},0).to({y:-74.2},13,cjs.Ease.get(-1)).to({y:43.8},12,cjs.Ease.get(1)).wait(60).to({x:-148.2},11,cjs.Ease.get(-0.99)).to({_off:true},598).wait(19));

	// wf100-dev
	this.instance_21 = new lib.mc_wf100();
	this.instance_21.parent = this;
	this.instance_21.setTransform(150,-227,1,1,0,0,0,150,125);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(81).to({_off:false},0).to({y:-29},13,cjs.Ease.get(-1)).to({y:125},12,cjs.Ease.get(1)).wait(62).to({x:-151},11,cjs.Ease.get(-0.99)).to({_off:true},594).wait(23));

	// the road
	this.instance_22 = new lib.theroad();
	this.instance_22.parent = this;
	this.instance_22.setTransform(148.7,-157.3,1,1,0,0,0,92.5,17.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(79).to({_off:false},0).to({y:36.7},13,cjs.Ease.get(-0.98)).to({y:206.7},12,cjs.Ease.get(1)).wait(64).to({x:-152.3},11,cjs.Ease.get(-0.99)).to({_off:true},594).wait(23));

	// Warstwa 23
	this.instance_23 = new lib.mc_bg();
	this.instance_23.parent = this;
	this.instance_23.setTransform(151,-125,1,1,0,0,0,150,125);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(342).to({_off:false},0).to({y:62.8},12,cjs.Ease.get(-1)).to({x:150,y:125},11,cjs.Ease.get(1)).to({_off:true},418).wait(13));

	// bg2
	this.instance_24 = new lib.mcbg2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(150,-125,1,1,0,0,0,150,125);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(79).to({_off:false},0).to({y:82},13,cjs.Ease.get(-1)).to({y:232},12,cjs.Ease.get(1)).wait(230).to({y:352},11,cjs.Ease.get(-1)).to({y:481.6},11,cjs.Ease.get(1)).to({_off:true},418).wait(22));

	// bg.gif
	this.instance_25 = new lib.mc_bg();
	this.instance_25.parent = this;
	this.instance_25.setTransform(151,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(79).to({y:332},13,cjs.Ease.get(-1)).to({y:482.8},12,cjs.Ease.get(0.98)).to({_off:true},668).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.3,122.2,800,606.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;