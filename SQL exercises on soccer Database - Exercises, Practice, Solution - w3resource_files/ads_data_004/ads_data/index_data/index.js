(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._333111pngcopy = function() {
	this.initialize(img._333111pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,320);


(lib._414 = function() {
	this.initialize(img._414);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,22);


(lib._4455 = function() {
	this.initialize(img._4455);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,398,18);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,78);


(lib.Fish = function() {
	this.initialize(img.Fish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,80);


(lib.Line = function() {
	this.initialize(img.Line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,2);


(lib.Pack = function() {
	this.initialize(img.Pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,188);// helper functions:

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

	// Layer_1
	this.instance = new lib._4455();
	this.instance.parent = this;
	this.instance.setTransform(-199,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-9,398,18);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4455();
	this.instance.parent = this;
	this.instance.setTransform(-199,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-9,398,18);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Button();
	this.instance.parent = this;
	this.instance.setTransform(-110,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-110,-39,220,78), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._333111pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-240,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-240,-160,480,320), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Fish();
	this.instance.parent = this;
	this.instance.setTransform(-198.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-198.5,-40,397,80), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Pack();
	this.instance.parent = this;
	this.instance.setTransform(-79,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-79,-94,158,188), null);


// stage content:
(lib.luks_crab_480x320 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(240,281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).to({scaleX:1.1,scaleY:1.1,x:239.95,y:280.95},4,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:240,y:281},5,cjs.Ease.cubicInOut).wait(51));

	// Layer_10
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(241,41);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(241,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},119).to({state:[{t:this.instance_2}]},5).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({_off:true,alpha:1},5,cjs.Ease.quadInOut).wait(71));

	// Layer_8
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240,160);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({_off:false},0).to({alpha:1},6,cjs.Ease.quadInOut).wait(76));

	// Layer_6
	this.instance_4 = new lib._414();
	this.instance_4.parent = this;
	this.instance_4.setTransform(157,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},125).wait(70));

	// Layer_5
	this.instance_5 = new lib.Line();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},125).wait(70));

	// Layer_4
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(240,154);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:167},42,cjs.Ease.cubicInOut).to({y:154},38,cjs.Ease.cubicInOut).to({y:164},44,cjs.Ease.cubicInOut).to({_off:true},1).wait(70));

	// Layer_3
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(246.5,205);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:213},42,cjs.Ease.cubicInOut).to({y:205},38,cjs.Ease.cubicInOut).to({y:209},44,cjs.Ease.cubicInOut).to({_off:true},1).wait(70));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#429DFF").s().p("EglfAZAMAAAgx/MBK/AAAMAAAAx/g");
	this.shape.setTransform(240,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240,160,240,163.89999999999998);
// library properties:
lib.properties = {
	id: '21BE06AE3DED134FA213C94AACDF8647',
	width: 480,
	height: 320,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_333111pngcopy.png", id:"_333111pngcopy"},
		{src:"images/_414.png", id:"_414"},
		{src:"images/_4455.png", id:"_4455"},
		{src:"images/Button.png", id:"Button"},
		{src:"images/Fish.png", id:"Fish"},
		{src:"images/Line.png", id:"Line"},
		{src:"images/Pack.png", id:"Pack"}
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
an.compositions['21BE06AE3DED134FA213C94AACDF8647'] = {
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