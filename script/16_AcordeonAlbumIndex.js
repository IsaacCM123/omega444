(function() {
if (typeof Spry == "undefined") window.Spry = {}; if (!Spry.Widget) Spry.Widget = {};
Spry.Widget.Accordion = function(element, opts) {
	this.element = this.getElement(element);
	this.defaultPanel = 0;
	this.enableAnimation = true;
	this.useFixedPanelHeights = true;
	if (this.element) this.attachBehaviors();
};

Spry.Widget.Accordion.prototype.getElement = function(ele){
	if (ele && typeof ele == "string") return document.getElementById(ele);
	return ele;
};
Spry.Widget.Accordion.prototype.removeClassName = function(ele, className){ };
Spry.Widget.Accordion.prototype.openPanel = function(elementOrIndex){
	var panelA = this.currentPanel;
	var panelB;
	if (typeof elementOrIndex == "number") panelB = this.getPanels()[elementOrIndex];
	else panelB = this.getElement(elementOrIndex);
	var contentA = panelA ? this.getPanelContent(panelA) : null;
	var contentB = this.getPanelContent(panelB);
	if (this.useFixedPanelHeights && !this.fixedPanelHeight)
		this.fixedPanelHeight = (contentA.offsetHeight) ? contentA.offsetHeight : contentA.scrollHeight;
	if (this.enableAnimation) {
		if (this.animator)
			this.animator.stop();
			this.animator = new Spry.Widget.Accordion.PanelAnimator(this, panelB, { duration: this.duration, fps: this.fps, transition: this.transition });
			this.animator.start();
	}
	this.currentPanel = panelB;
};
Spry.Widget.Accordion.prototype.onPanelTabClick = function(e, panel){
	if (panel != this.currentPanel)
		this.openPanel(panel);
};

Spry.Widget.Accordion.prototype.attachPanelHandlers = function(panel){
	var tab = this.getPanelTab(panel);
	if (tab){
		var self = this;
		Spry.Widget.Accordion.addEventListener(tab, "click", function(e) { return self.onPanelTabClick(e, panel); }, false);
	}
};

Spry.Widget.Accordion.addEventListener = function(element, eventType, handler, capture){
	if (element.addEventListener)
		element.addEventListener(eventType, handler, capture);
};

Spry.Widget.Accordion.prototype.initPanel = function(panel, isDefault){
	var content = this.getPanelContent(panel);
	if (isDefault){
		this.currentPanel = panel;
	}
	else{
		if (content){
			content.style.height = "0px";
		}
	}
	this.attachPanelHandlers(panel);
};
Spry.Widget.Accordion.prototype.attachBehaviors = function(){
	var panels = this.getPanels();
	for (var i = 0; i < panels.length; i++)
		this.initPanel(panels[i], i == this.defaultPanel);
};

Spry.Widget.Accordion.prototype.getPanels = function(){
	return this.getElementChildren(this.element);
};

Spry.Widget.Accordion.prototype.getPanelTab = function(panel){
	if (!panel)
		return null;
		return this.getElementChildren(panel)[0];
};

Spry.Widget.Accordion.prototype.getPanelContent = function(panel){
	if (!panel)
		return null;
		return this.getElementChildren(panel)[1];
};

Spry.Widget.Accordion.prototype.getElementChildren = function(element){
	var children = [];
	var child = element.firstChild;
	while (child){
		if (child.nodeType == 1)
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Spry.Widget.Accordion.PanelAnimator = function(accordion, panel, opts){
	this.duration = 500;
	this.transition = Spry.Widget.Accordion.PanelAnimator.defaultTransition;
	this.panel = panel;
	this.panelData = [];
	this.useFixedPanelHeights = accordion.useFixedPanelHeights;
	var panels = accordion.getPanels();
	for (var i = 0; i < panels.length; i++)	{
		var p = panels[i];
		var c = accordion.getPanelContent(p);
		if (c){
			var h = c.offsetHeight;
			if (h == undefined)
				h = 0;
			if (p == panel && h == 0) c.style.display = "block";
			if (p == panel || h > 0){
				var obj = new Object;
				obj.panel = p;
				obj.content = c;
				obj.fromHeight = h;
				obj.toHeight = (p == panel) ? (accordion.useFixedPanelHeights ? accordion.fixedPanelHeight : c.scrollHeight) : 0;
				obj.distance = obj.toHeight - obj.fromHeight;
				this.panelData.push(obj);
			}
		}
	}
};

Spry.Widget.Accordion.PanelAnimator.defaultTransition = function(time, begin, finish, duration) { time /= duration; return begin + ((2 - time) * time * finish); };
Spry.Widget.Accordion.PanelAnimator.prototype.start = function(){
	var self = this;
	this.startTime = (new Date).getTime();
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};
Spry.Widget.Accordion.PanelAnimator.prototype.stop = function(){ };
Spry.Widget.Accordion.PanelAnimator.prototype.stepAnimation = function(){
	var curTime = (new Date).getTime();
	var elapsedTime = curTime - this.startTime;
	var i, obj;
	if (elapsedTime >= this.duration) {
		if (this.onComplete)
			this.onComplete();
			return;
	}
	for (i = 0; i < this.panelData.length; i++)	{
		obj = this.panelData[i];
		var ht = this.transition(elapsedTime, obj.fromHeight, obj.distance, this.duration);
		obj.content.style.height = ((ht < 0) ? 0 : ht) + "px";
	}
	var self = this;
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};
})();