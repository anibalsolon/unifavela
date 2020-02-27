var Timeline = function() {
    function Timeline(target) {
        this.base = target;
        this.periodContainer = $(this.base).find('.periods-container');
        this.cardContainer = $(this.base).find('.cards-container');
        this.timelineNodeContainer = $(this.base).find('.timeline-container .timeline-steps');
        this._parseData();
        this._generateTimeline();
        this._setStateClasses();
        this._assignBtn();
        this._adjustPeriodContainer();
        this._adjustCardContainer();
    }
    Timeline.prototype._parseData = function() {
        var base = this.base;
        var periods = $(base).find('.periods-container section');
        for (var i = 0; i < periods.length; i++) {
            var section = periods[i];
            section.period = $(section).attr('period');
            section.index = $(section).index();
        }
        this.periodData = periods;
        var data = $(base).find('.cards-container section');
        for (var i = 0; i < data.length; i++) {
            var section = data[i];
            section.period = $(section).attr('period');
            section.index = $(section).index();
        }
        this.cardData = data;
        this.activePeriod = this.periodData[0];
        this.activePeriodIndex = 0;
        this.activeCard = this.cardData[0];
        this.activeCardIndex = 0;
    };
    Timeline.prototype._setStateClasses = function() {
        $(this.base).find('.periods-container section.active').removeClass('active');
        $(this.base).find('.periods-container section.prev').removeClass('prev');
        $(this.base).find('.periods-container section.next').removeClass('next');
        $(this.activePeriod).addClass('active');
        if ($(this.activePeriod).prev().length != 0) {
            $(this.activePeriod).prev().addClass('prev');
            $(this.base).find('.periods-container .btn-back').removeClass('hide');
        } else {
            $(this.base).find('.periods-container .btn-back').addClass('hide');
        }
        if ($(this.activePeriod).next().length != 0) {
            $(this.activePeriod).next().addClass('next');
            $(this.base).find('.periods-container .btn-next').removeClass('hide');
        } else {
            $(this.base).find('.periods-container .btn-next').addClass('hide');
        }

        $(this.base).find('.cards-container section.active').removeClass('active');
        $(this.base).find('.cards-container section.prev').removeClass('prev');
        $(this.base).find('.cards-container section.next').removeClass('next');
        $(this.activeCard).addClass('active');
        if ($(this.activeCard).prev().length != 0) {
            $(this.activeCard).prev().addClass('prev');
        }
        if ($(this.activeCard).next().length != 0) {
            $(this.activeCard).next().addClass('next');
        }
        
        $(this.base).find('.timeline-steps li.active').removeClass('active');
        $(this.timelineData[this.activeCard.index]).addClass('active');
        this.timelineData.removeClass('active-period');
        this.timelineData.filter('.' + this.activePeriod.period).addClass('active-period');
        var timelineB = $(this.base).find('.timeline-container .btn-back');
        var timelineN = $(this.base).find('.timeline-container .btn-next');
        if (this.activeCardIndex === 0) {
            timelineB.addClass('hide');
        } else {
            timelineB.removeClass('hide');
        }
        if (this.activeCardIndex >= this.cardData.length - 1) {
            timelineN.addClass('hide');
        } else {
            timelineN.removeClass('hide');
        }
    };
    Timeline.prototype._generateTimeline = function() {
        var htmlWrap = '<ol></ol>';
        $(this.timelineNodeContainer).append(htmlWrap);
        var wrap = $(this.timelineNodeContainer).find('ol');
        var numNode = this.cardData.length;
        for (var i = 0; i < numNode; i++) {
            var el = wrap.append('<li class="' + this.cardData[i].period + '"></li>');
        }
        var nodeList = $(this.base).find('.timeline-steps ol li');
        this.timelineData = nodeList;
    };
    Timeline.prototype._assignBtn = function() {
        var _this = this;
        var periodPrev = $(this.base).find('.periods-container .btn-back');
        var periodNext = $(this.base).find('.periods-container .btn-next');
        periodPrev.click(function() {
            if (_this.activePeriodIndex > 0) {
                _this.activePeriodIndex -= 1;
                _this.activePeriod = _this.periodData[_this.activePeriodIndex];
                _this._chainActions('period');
                _this._setStateClasses();
            }
            _this._adjustPeriodContainer();
        });
        periodNext.click(function() {
            if (_this.activePeriodIndex < _this.periodData.length - 1) {
                _this.activePeriodIndex += 1;
                _this.activePeriod = _this.periodData[_this.activePeriodIndex];
                _this._chainActions('period');
                _this._setStateClasses();
            }
            _this._adjustPeriodContainer();
        });
        var timelinePrev = $(this.base).find('.timeline-container .btn-back');
        var timelineNext = $(this.base).find('.timeline-container .btn-next');
        timelinePrev.click(function() {
            if (_this.activeCardIndex > 0) {
                _this.activeCardIndex -= 1;
                _this.activeCard = _this.cardData[_this.activeCardIndex];
                _this._chainActions('timeline');
                _this._setStateClasses();
            }
            _this._adjustCardContainer();
            _this._adjustPeriodContainer();
        });
        timelineNext.click(function() {
            if (_this.activeCardIndex < _this.cardData.length - 1) {
                _this.activeCardIndex += 1;
                _this.activeCard = _this.cardData[_this.activeCardIndex];
                _this._chainActions('timeline');
                _this._setStateClasses();
            }
            _this._adjustCardContainer();
            _this._adjustPeriodContainer();
        });
        var _loop_1 = function(i) {
            $(this_1.timelineData[i]).click(function() {
                _this.activeCardIndex = _this.cardData[i].index;
                _this.activeCard = _this.cardData[_this.activeCardIndex];
                _this._chainActions('timeline');
                _this._setStateClasses();
                _this._adjustCardContainer();
                _this._shiftTimeline();
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.timelineData.length; i++) {
            _loop_1(i);
        }
    };
    Timeline.prototype._adjustPeriodContainer = function() {
        // var activeH = $(this.activePeriod).outerHeight();
        // $(this.periodContainer).height(activeH);
    };
    Timeline.prototype._adjustCardContainer = function() {
        var maxH = Math.max.apply(null, $.map($(this.base).find('.cards-container section'), function(el, index) { return $(el).outerHeight() + 24; }))
        $(this.cardContainer).height(maxH);
    };
    Timeline.prototype._shiftTimeline = function() {
        $(this.timelineNodeContainer).css('left', '-' + ((this.activeCardIndex + 1) * 4) + '%');
    };
    Timeline.prototype._chainActions = function(state) {
        switch (state) {
            case 'period':
                if (this.activePeriod.period != this.activeCard.period) {
                    var ta = [];
                    for (var i = 0; i < this.cardData.length; i++) {
                        var temp = this.cardData[i];
                        if (this.activePeriod.period === temp.period)
                            ta.push(temp);
                    }
                    this.activeCard = ta[0];
                    this.activeCardIndex = ta[0].index;
                }
                break;
            case 'timeline':
                if (this.activeCard.period != this.activePeriod.period) {
                    var ta = void 0;
                    for (var i = 0; i < this.periodData.length; i++) {
                        var temp = this.periodData[i];
                        if (this.activeCard.period === temp.period)
                            ta = temp;
                    }
                    this.activePeriod = ta;
                    this.activePeriodIndex = ta.index;
                }
                break;
        }

        this._shiftTimeline();
        this._adjustCardContainer();
    };
    return Timeline;
}();