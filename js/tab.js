~function () {    function TabChange(container, defaultIndex) {        return this.init(container, defaultIndex);    }    TabChange.prototype = {        constructor: TabChange,        //->��������������Ĭ��ѡ�е�ҳ��        defaultIndexEven: function () {            utils.addClass(this.oLis[this.defaultIndex], "active");            utils.addClass(this.divList[this.defaultIndex], "active");        },        //->�¼�ί��ʵ�ְ��л�        liveClick: function () {            var _this = this;            this.tabFirst.onclick = function (e) {                e = e || window.event;                e.target = e.target || e.srcElement;                if (e.target.tagName.toLowerCase() === "li") {                    _this.detailFn(e.target);                }            };        },        detailFn: function (curEle) {            var index = utils.index(curEle);            utils.addClass(curEle, "active");            for (var i = 0; i < this.divList.length; i++) {                i === index ? utils.addClass(this.divList[i], "active") : (utils.removeClass(this.divList[i], "active"), utils.removeClass(this.oLis[i], "active"));            }        },        //->��ʼ��,Ҳ�ǵ�ǰ�����Ψһ���        init: function (container, defaultIndex) {            this.container = container || null;            this.defaultIndex = defaultIndex || 0;            this.aa = utils.firstChild(this.container);            this.tabFirst = utils.firstChild(this.aa);//            this.oLis = utils.children(this.tabFirst);            this.bb = utils.lastChild(this.container);//            this.divList = utils.children(this.bb, "div");//            this.defaultIndexEven();            this.liveClick();            return this;        }    };    window.zhufengTab = TabChange;}();