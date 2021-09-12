﻿D.placedata = {
    /* 单一功能地点 */
    巴士站 : {
        place:"巴士站", side:"室外",
        tag:["交通",'大道'],
        chara:[],
        bus:true, subway:false, car:false, bike:false,
        homebutton:false,
        img:"busstop",
        description(){
            return "";
        },
        situation:[],
    },
    地铁站 : {
        place:"地铁站", side:"室内",
        tag:["交通",'地下'],
        chara:[],
        bus:false, subway:true, car:false, bike:false,
        homebutton:false,
        img:"subway",
        description(){
            return "";
        },
        situation:[],
    },
    试衣间 : {
        place:"试衣间", side:"室内", 
        tag:['更衣间','狭窄'],
        chara:[], 
        bus:false, subway:false, car:false, bike:false,
        homebutton: false,
        img:"tryon",
        description(){},
        situation:[],
    },
    浴室 :{
        place:"浴室", side:"室内",
        tag:["沐浴"],
        chara:[],
        bus:false, subway:false, car:false, bike:false,
        homebutton: false,
        img:"bathroom",
        description(){},
        situation:[],
    },
    AW服装店 : {
        place:"A&W", side:"室内",
        tag:["服装店","试衣间"],
        chara:[],
        bus:false, subway:false, car:false, bike:false,
        homebutton:false,
        img:"AWclothes",
        description(){
            return "知名日常品牌A&W的卖场。形形色色的商品让人眼花缭乱。";
        },
        situation:[],
    },
    汉堡王  : {
        place:"汉堡王", side:"室内",
        tag:["快餐","休息"],
        chara:[],
        bus:false, subway:false, car:false, bike:false,
        homebutton:false,
        img:"burgerking",
        description(){
            return "知名连锁快餐店汉堡王。就是卖各种汉堡的地方。";
        },
        situation:[],
    },

    /* 主要地点 */
    单身公寓 : {
        place:"单身公寓", side:"室内",
        tag:["家","煮食","休息","沐浴","衣柜","电脑","WIFI"], 
        chara:[], 
        bus:false, subway:false, car:false, bike:false,
        homebutton: false,
        img:"singleapartment",
        description(){
            return "一个60平方米左右的单身公寓。简约现代风的装修，巨大的落地窗，还有一个阳台，两个人住也相当舒适的公寓。"
            /* 根据条件变更描述 */
        },
        situation:[
            {id:0, series:"城市生活", phrase: 5, display:"content", /* display里是事件文本放置的位置，before是前置文本，content是正文，after是后置文本+选项 */
             condition(){
                 if(V.days <= 7) return "城市生活_1";
                 else if(V.days <= 14) return "城市生活_2";
                 else if(V.days <= 28) return "城市生活_3";
                 else if(V.Flag.chaos < 20) return "城市生活_4";
                 else return "城市生活_5";
             }},
            {id:1, series:"有宠物的日子", phrase: 5, display:"before",
             condition(){
                 if(V.pet.active) return "宠物的日常_1"; /* 随机状况的话…… 直接 return either('事件A'，'事件B','事件C')*/
             }},              
        ]},

    怡安小区 : {
        place:"怡安小区", side:"室外", 
        tag:["交通","WIFI",],
        chara:[], 
        bus:true, subway:true, car:true, bike:true,
        homebutton: true,
        img:"neiborhood",
        description(){
            return "位于景南市南兴区的一个住宅小区。<br>现代化设计的公寓高楼林立在住宅园区内，道路两侧种满了花草树木。小区中央有个公园，"+(V.Flag.chaos < 15 ? "时不时有人散布经过。" : "但已经没人在外散步。")+"<br>从小区大门往大道走，就能到达嘉庆广场和地铁站。小区门口的巴士站也能通向景南市各区。交通十分方便。<br>";
        },
        situation:[

        ]},

    怡安小区公园 : {
        place:"小区公园", side:"室外", 
        tag:["公园","树丛","活动场所","WIFI"],
        chara:[], 
        bus:false, subway:false, car:false, bike:true,
        homebutton: true,
        img:"neiborhood_park",
        description(){
            let text = "绿意盎然，四周都种着花草树木。最吸引人的是南面一侧的用假山搭造的山泉景。<br>";
            if(V.Flag.chaos < 15) return text+"公园中央有个宽敞的小广场，偶尔会有大妈们在这里跳舞。<br>西面有儿童玩耍的设施。时不时能听到孩子们的欢声笑语。<br>";
            else return text+"公园中央有个宽敞的小广场，现在只有心大的年轻人会在这里活动。<br>";
        },
        situation:[]
    },
    嘉庆广场 : {
        place:"嘉庆广场", side:"室外",
        tag:["交通","商业广场","活动场所"],
        chara:[],
        bus:true, subway:true, car:true, bike:true,
        homebutton: false,
        img:"yiansquare",
        description(){
            let text = "位于怡安小区东面的一个中型商业广场。<br>广场主体面积占地近12万平方米，周围都种着树木，同时路边都有适合乘凉休息的桌椅和小亭。<br>最引人瞩目的是，并排在南面入口广场两侧的、树龄上百的木棉花树，";
            if(V.Flag.chaos < 15) return text+"每到花期会引来不少人聚集，广场上也会摆满小摊，让人一边享受美食一边观赏花景。<br>";
            else return text + "，附近时不时会有人聚众闹事。";
        },
        situation:[
            {id:0, series:"商场的日常风景", phrase:3, display:"before",
             condition(){
                 if(V.Flag.chaos < 15) return "商场的日常风景_1";
             }},

            {id:1, series:"商场闲逛", phrase:3, display:"content",
             condition(){
                 if(V.Flag.chaos < 15) return "商场闲逛_1";
             }},
        ],
    },
}