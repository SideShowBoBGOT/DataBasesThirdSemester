(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._2321 = function() {
	this.initialize(img._2321);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,51);


(lib._2323 = function() {
	this.initialize(img._2323);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._3211pngcopy = function() {
	this.initialize(img._3211pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,118);


(lib._32121 = function() {
	this.initialize(img._32121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,31);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,98);// helper functions:

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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2323();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._32121();
	this.instance.parent = this;
	this.instance.setTransform(-116,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-116,-15.5,232,31), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2321();
	this.instance.parent = this;
	this.instance.setTransform(-76,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-76,-25.5,152,51), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3211pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-56.5,-59,113,118), null);


// stage content:
(lib._300x600_сметана = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(123.5,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9986,scaleY:0.9986,rotation:-29.8589,x:155.45,y:65},64,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,rotation:0,x:123.5,y:59},65,cjs.Ease.cubicInOut).to({scaleX:0.9986,scaleY:0.9986,rotation:-29.8589,x:155.45,y:65},65,cjs.Ease.cubicInOut).wait(1));

	// Layer_9
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,161.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},7,cjs.Ease.cubicInOut).wait(69));

	// Layer_5
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({y:182.5,alpha:0},6,cjs.Ease.cubicInOut).to({_off:true},1).wait(75));

	// Layer_2
	this.instance_3 = new lib.Button();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15,483);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(195));

	// Layer_8
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({y:280},3,cjs.Ease.cubicInOut).to({y:320},3,cjs.Ease.cubicInOut).to({y:300},3,cjs.Ease.cubicInOut).wait(67));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBD77").s().p("EgbVAxxMAAAhjhMA2rAAAMAAABjhg");
	this.shape.setTransform(153.025,300.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128.1,280,199.9,340);
// library properties:
lib.properties = {
	id: 'C9BAB681E1317744BDA1AE75771B62FD',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2321.png", id:"_2321"},
		{src:"images/_2323.png", id:"_2323"},
		{src:"images/_3211pngcopy.png", id:"_3211pngcopy"},
		{src:"images/_32121.png", id:"_32121"},
		{src:"images/Button.png", id:"Button"}
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
an.compositions['C9BAB681E1317744BDA1AE75771B62FD'] = {
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