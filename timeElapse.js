var elapseText = {
	s: '0m',
	m: 'm',
	h: 'h',
	d: 'd',
	M: 'mon',
	y: 'y'
};
timeElapse = function(time) {
	var today = new Date(), publishTime = new Date(time * 1000);
	var elapseSecond = (today - publishTime) / 1000;
	var elapseYear = today.getFullYear() - publishTime.getFullYear();
	var elapseMonth = today.getMonth() - publishTime.getMonth();
	var elapseDay = today.getDate() - publishTime.getDate();
	var elapseTime = today % 8.64e7- publishTime % 8.64e7;
	if(elapseSecond < 60) {
		return elapseText['s'];
	}
	if(elapseSecond < 3600) {
		return ~~(elapseSecond / 60) + elapseText['m'];
	}
	if(elapseSecond < 86400) {
		return ~~(elapseSecond / 3600) + elapseText['h'];
	}
	if(elapseYear > 0) {
		if(elapseMonth > 0 || elapseMonth === 0 && (elapseDay > 0 || elapseDay === 0 && elapseTime >= 0)) {
			return elapseYear + elapseText['y'];
		} else if(elapseYear > 1) {
			return (elapseYear - 1) + elapseText['y'];
		} else {
			if(elapseDay < 0 || elapseDay === 0 && elapseTime < 0) {
				elapseMonth -= 1;
			}
			return (elapseMonth + 12) + elapseText['M'];
		}
	} else {
		if(elapseMonth > 0) {
			if(elapseDay > 0 || elapseDay === 0 && elapseTime >= 0) {
				return elapseMonth + elapseText['M'];
			} else if(elapseMonth > 1) {
				return (elapseMonth - 1) + elapseText['M'];
			} else {
				return ~~(elapseSecond / 86400) + elapseText['d'];
			}
		} else {
			return ~~(elapseSecond / 86400) + elapseText['d'];
		}
	}
};
/** test
describe('elapse', () => {
	it('should format correct elapse when elapse is less than 60s', () => {
		expect(UI.elapse(Date.now(), Date.now() + 59)).toBe('0m');
	});
	it('should format correct elapse when elapse is between 60s and 1 hour', () => {
		expect(UI.elapse(Date.now(), Date.now() + 3599000)).toBe('59m');
	});
	it('should format correct elapse when elapse is between 1 hour and 1 day', () => {
		expect(UI.elapse(Date.now(), Date.now() + 86399000)).toBe('23h');
	});
	it('should format correct elapse when elapse is in same month', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2016-04-27T03:24:00')).toBe('11d');
	});
	it('should format correct elapse when elapse is in next month but in one month', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2016-05-07T03:24:00')).toBe('21d');
	});
	it('should format correct elapse when elapse is in next two month but less than two month', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2016-06-07T03:24:00')).toBe('1mon');
	});
	it('should format correct elapse when elapse is in next two month', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2016-06-17T03:24:00')).toBe('2mon');
	});
	it('should format correct elapse when elapse is in next year', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2017-06-17T03:24:00')).toBe('1y');
	});
	it('should format correct elapse when elapse is in next year in same month', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2018-04-17T03:23:59')).toBe('2y');
	});
	it('should format correct elapse when elapse is in next year in same day', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2017-04-16T03:24:00')).toBe('1y');
	});
	it('should format correct elapse when elapse is in next two year in same day but less than two year', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2018-04-16T03:23:29')).toBe('1y');
	});
	it('should format correct elapse when elapse is in next year in different month but less than one year', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2017-02-13T03:23:29')).toBe('9mon');
	});
	it('should format correct elapse when elapse is in next year in same month but less than one year', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2017-04-13T03:23:29')).toBe('11mon');
	});
	it('should format correct elapse when elapse is in next year in same day but less than one year', () => {
		expect(UI.elapse('2016-04-16T03:24:00', '2017-04-16T03:23:29')).toBe('11mon');
	});
});
*/