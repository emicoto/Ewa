﻿
function gettimezone(h) {
	switch(true){
		case select(2,3,4)(h):
			return "凌晨";
		case select(5,6,7)(h):
			return "黎明";
		case select(8,9,10)(h):
			return "上午";
		case select(11,12,13)(h):
			return "中午";
		case select(14,15,16)(h):
			return "下午";
		case select(17,18,19)(h):
			return "傍晚";			
		case select(20,21,22)(h):
			return "晚上";			
		case select(23,0,1)(h):
			return "深夜";
	};
}

function GetTime() {
    const t = new Map();
    const obj = {
      凌晨: [2, 3, 4],
      黎明: [5, 6, 7],
      上午: [8, 9, 10],
      中午: [11, 12, 13],
      下午: [14, 15, 16],
      傍晚: [17, 18, 19],
      晚上: [20, 21, 22],
      深夜: [23, 0, 1],
    };
  
    const setTime = (word, args) => args.map((v) => t.set(v, word));
    for (const times in obj) {
      setTime(times, obj[times]);
    }
    return t;
}

Macro.add('timeprocess', {
	handler: function () {
		var time = V.date.time;
		var min, hour, day, week, month, year, zone, weekday; // Never checked and always overwritten - no need to init with old value
		// Sanity check

		/* 时间的处理 */
		if (time < 0) time = 0;

		min = time % 60
		hour = Math.floor(time/60);

		if (hour > 23){
			day = day + Math.floor(hour/24);
			week = week += Math.floor(hour/24);
			hour = hour % 24;
		};

		zone = gettimezone(hour)

		/* 周的处理 */
		week = week%7
		switch(week){
			case 0:
				weekday = "周日";
			case 1:
				weekday = "周一";
			case 2:
				weekday = "周二";
			case 3:
				weekday = "周三";
			case 4:
				weekday = "周四";
			case 5:
				weekday = "周五";
			case 6:
				weekday = "周六";
		}

		/* 月的处理，每月固定30天 */
		while(day > 30){
			month += 1;
			day = Math.max(day-30,1);
		}

		/* 年的处理 */
		if (month>12){
			year = year+Math.floor(month/12);
			month = Math.max(month%12,1);
		}

		V.date.time = time;
		V.date.min = min;
		V.date.hour = hour;

		V.date.zone = zone;
		V.date.weekday = weekday;

		V.date.day = day;
		V.date.week = week;
		V.date.month = mont;
		V.date.year = year;
	}

});

Macro.add('time', {
	handler: function () {
		var time = V.date.time;
		var min, hour, zone;

		if (time < 0) time = 0;

		if (time >= 24*60 ) time = 23*59+59;

		hour = Math.floor(time/60);
		min = time%60;

		zone = gettimezone(hour)

		V.date.min = min
		V.date.hour = hour
		V.date.zone = zone
	}
});