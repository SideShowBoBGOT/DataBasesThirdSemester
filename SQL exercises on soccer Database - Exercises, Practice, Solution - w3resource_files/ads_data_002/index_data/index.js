(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._121pngcopy = function() {
	this.initialize(img._121pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._2pngcopy = function() {
	this.initialize(img._2pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,81);


(lib.Asset82x = function() {
	this.initialize(img.Asset82x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,106);


(lib.Button1 = function() {
	this.initialize(img.Button1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,80);


(lib.Group1 = function() {
	this.initialize(img.Group1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,88);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib._2pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-92,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-92,-40.5,184,81), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset82x();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-91.5,-53,183,106), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group1();
	this.instance.parent = this;
	this.instance.setTransform(-124,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-124,-44,248,88), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Button1();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-105.5,-40,211,80), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-124,-44,248,88), null);


// stage content:
(lib._300x250_cheese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(149.95,209.8,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({x:176.75},6,cjs.Ease.cubicInOut).wait(15).to({regX:0.1,regY:0.1,scaleX:0.9821,scaleY:0.9821,x:176.8,y:209.85},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:0.8929,scaleY:0.8929,x:176.75,y:209.8},5,cjs.Ease.cubicInOut).wait(51));

	// Layer_9
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(209.8,133.45,0.8929,0.8929);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({y:142.4,alpha:1},5,cjs.Ease.cubicInOut).wait(71));

	// Layer_7
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.95,124.95,0.8929,0.8929);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.95,124.95,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},113).to({state:[{t:this.instance_3}]},6).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({_off:false},0).to({_off:true,alpha:1},6,cjs.Ease.cubicInOut).wait(76));

	// Layer_4
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(103.1,124.95,0.8929,0.8929);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:142.85,alpha:1},14,cjs.Ease.cubicInOut).to({_off:true},106).wait(75));

	// Layer_3
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(188.8,142.85,0.8929,0.8929);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).wait(7).to({y:124.95},0).to({y:133.9,alpha:1},12,cjs.Ease.cubicInOut).to({y:142.85,alpha:0},6,cjs.Ease.cubicInOut).to({_off:true},5).wait(75));

	// Layer_3
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(188.8,142.85,0.8929,0.8929);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).wait(7).to({y:124.95},0).to({y:133.9,alpha:1},12,cjs.Ease.cubicInOut).to({y:142.85,alpha:0},6,cjs.Ease.cubicInOut).to({_off:true},5).wait(105));

	// Layer_3
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(188.8,142.85,0.8929,0.8929);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({_off:false},0).wait(7).to({y:124.95},0).to({y:133.9,alpha:1},12,cjs.Ease.cubicInOut).to({y:142.85,alpha:0},6,cjs.Ease.cubicInOut).to({_off:true},5).wait(135));

	// Layer_3
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(188.8,142.85,0.8929,0.8929);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({y:124.95},0).to({y:133.9,alpha:1},12,cjs.Ease.cubicInOut).to({y:142.85,alpha:0},6,cjs.Ease.cubicInOut).to({_off:true},5).wait(165));

	// Layer_6
	this.instance_9 = new lib._121pngcopy();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,128);
// library properties:
lib.properties = {
	id: 'F801570E791686468F426F93FE95BFCF',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_121pngcopy.png", id:"_121pngcopy"},
		{src:"images/_2pngcopy.png", id:"_2pngcopy"},
		{src:"images/_3.png", id:"_3"},
		{src:"images/Asset82x.png", id:"Asset82x"},
		{src:"images/Button1.png", id:"Button1"},
		{src:"images/Group1.png", id:"Group1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F801570E791686468F426F93FE95BFCF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;