"use strict";(self["webpackChunkcampus_showcase_front"]=self["webpackChunkcampus_showcase_front"]||[]).push([[248],{3248:function(e,t,i){i.r(t),i.d(t,{default:function(){return tt}});var s=i(6768),a=i(4232),l=i(5130);const n={class:"cultural-activities"},c={key:0,class:"loading-state"},r={key:1,class:"error-state"},o={class:"page-header"},u={class:"activity-filter"},d={class:"filter-tabs"},v=["onClick"],k={class:"icon"},m={key:0,class:"current-activities"},g={class:"activities-grid"},p=["onClick"],L={class:"activity-image"},y=["src","alt"],f={class:"activity-info"},b={class:"activity-meta"},h={class:"time"},C={class:"location"},_={class:"description"},I={class:"schedule"},E={class:"timeline"},A={class:"date"},X={class:"events"},q={class:"regular-activities"},K={class:"activities-grid"},F={class:"activity-header"},R={class:"frequency"},x={class:"activity-content"},w={class:"location"},T={class:"description"},D={class:"categories"},P={class:"clubs-section"},W={class:"clubs-grid"},S={class:"club-header"},B={class:"club-stats"},Y={class:"member-count"},V={class:"found-year"},J={class:"club-content"},Q={class:"club-activities"},U={class:"achievements"},$={class:"facilities-section"},j={class:"facilities-info"},G={class:"facility-card"},O={class:"area"},Z={class:"features"},z={class:"features-grid"},H={class:"modal-header"},M={class:"modal-body"},N={class:"image-gallery"},ee={class:"gallery-container"},te={class:"main-image"},ie=["src","alt"],se={class:"thumbnails"},ae=["src","onClick","alt"],le={class:"activity-details"},ne={class:"basic-info"},ce={class:"info-item"},re={class:"info-item"},oe={class:"info-item"},ue={class:"description"},de={class:"schedule"},ve={class:"timeline"},ke={class:"time"},me={class:"events"};function ge(e,t,i,ge,pe,Le){const ye=(0,s.g2)("ActivityRegistration");return(0,s.uX)(),(0,s.CE)("div",n,[ge.loading?((0,s.uX)(),(0,s.CE)("div",c,t[6]||(t[6]=[(0,s.Lk)("div",{class:"loading-spinner"},null,-1),(0,s.Lk)("p",null,"加载中...",-1)]))):ge.error?((0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("p",null,(0,a.v_)(ge.error),1),(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>ge.fetchData&&ge.fetchData(...e))},"重试")])):((0,s.uX)(),(0,s.CE)(s.FK,{key:2},[(0,s.Lk)("header",o,[(0,s.Lk)("h1",null,(0,a.v_)(ge.banner.title),1),(0,s.Lk)("p",null,(0,a.v_)(ge.banner.subtitle),1)]),(0,s.Lk)("div",u,[(0,s.Lk)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(ge.activityTypes,(e=>((0,s.uX)(),(0,s.CE)("button",{key:e,class:(0,a.C4)({active:ge.currentType===e}),onClick:t=>ge.currentType=e},[(0,s.Lk)("span",k,(0,a.v_)(ge.getTypeIcon(e)),1),(0,s.eW)(" "+(0,a.v_)(e),1)],10,v)))),128))])]),ge.filteredActivities.length?((0,s.uX)(),(0,s.CE)("section",m,[t[10]||(t[10]=(0,s.Lk)("h2",null,"正��进行",-1)),(0,s.Lk)("div",g,[(0,s.bF)(l.F,{name:"activity-card"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(ge.filteredActivities,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"activity-card",onClick:t=>ge.showDetail(e)},[(0,s.Lk)("div",L,[(0,s.Lk)("img",{src:e.images[0],alt:e.title},null,8,y),(0,s.Lk)("span",{class:(0,a.C4)(["activity-status",e.status])},(0,a.v_)(e.status),3)]),(0,s.Lk)("div",f,[(0,s.Lk)("h3",null,(0,a.v_)(e.title),1),(0,s.Lk)("div",b,[(0,s.Lk)("span",h,[t[7]||(t[7]=(0,s.Lk)("i",{class:"icon"},"📅",-1)),(0,s.eW)(" "+(0,a.v_)(e.time),1)]),(0,s.Lk)("span",C,[t[8]||(t[8]=(0,s.Lk)("i",{class:"icon"},"📍",-1)),(0,s.eW)(" "+(0,a.v_)(e.location),1)])]),(0,s.Lk)("p",_,(0,a.v_)(e.description),1),(0,s.Lk)("div",I,[t[9]||(t[9]=(0,s.Lk)("h4",null,"活动安排",-1)),(0,s.Lk)("div",E,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.schedule,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"timeline-item"},[(0,s.Lk)("div",A,(0,a.v_)(e.date),1),(0,s.Lk)("div",X,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.events,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"event"},(0,a.v_)(e),1)))),128))])])))),128))])])])],8,p)))),128))])),_:1})])])):(0,s.Q3)("",!0),(0,s.Lk)("section",q,[t[12]||(t[12]=(0,s.Lk)("h2",null,"常规活动",-1)),(0,s.Lk)("div",K,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(ge.regularActivities,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"activity-card"},[(0,s.Lk)("div",F,[(0,s.Lk)("h3",null,(0,a.v_)(e.title),1),(0,s.Lk)("span",R,(0,a.v_)(e.frequency),1)]),(0,s.Lk)("div",x,[(0,s.Lk)("p",w,[t[11]||(t[11]=(0,s.Lk)("i",{class:"icon"},"📍",-1)),(0,s.eW)(" "+(0,a.v_)(e.location),1)]),(0,s.Lk)("p",T,(0,a.v_)(e.description),1),(0,s.Lk)("div",D,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.categories,(e=>((0,s.uX)(),(0,s.CE)("span",{key:e,class:"category-tag"},(0,a.v_)(e),1)))),128))])])])))),128))])]),(0,s.Lk)("section",P,[t[17]||(t[17]=(0,s.Lk)("h2",null,"学生社团",-1)),(0,s.Lk)("div",W,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(ge.clubs,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"club-card"},[(0,s.Lk)("div",S,[(0,s.Lk)("h3",null,(0,a.v_)(e.name),1),(0,s.Lk)("div",B,[(0,s.Lk)("span",Y,[t[13]||(t[13]=(0,s.Lk)("i",{class:"icon"},"👥",-1)),(0,s.eW)(" "+(0,a.v_)(e.memberCount)+"人 ",1)]),(0,s.Lk)("span",V,[t[14]||(t[14]=(0,s.Lk)("i",{class:"icon"},"📅",-1)),(0,s.eW)(" "+(0,a.v_)(e.foundYear)+"年成立 ",1)])])]),(0,s.Lk)("div",J,[(0,s.Lk)("div",Q,[t[15]||(t[15]=(0,s.Lk)("h4",null,"主要活动",-1)),(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.activities,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e},(0,a.v_)(e),1)))),128))])]),(0,s.Lk)("div",U,[t[16]||(t[16]=(0,s.Lk)("h4",null,"主要成就",-1)),(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.achievements,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e},(0,a.v_)(e),1)))),128))])])])])))),128))])]),(0,s.Lk)("section",$,[t[21]||(t[21]=(0,s.Lk)("h2",null,"活动场地",-1)),(0,s.Lk)("div",j,[(0,s.Lk)("div",G,[(0,s.Lk)("h3",null,(0,a.v_)(ge.facilities[0].name),1),(0,s.Lk)("p",O,[t[18]||(t[18]=(0,s.Lk)("i",{class:"icon"},"📐",-1)),(0,s.eW)(" "+(0,a.v_)(ge.facilities[0].area),1)]),(0,s.Lk)("div",Z,[t[20]||(t[20]=(0,s.Lk)("h4",null,"场地设施",-1)),(0,s.Lk)("div",z,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(ge.facilities[0].features,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"feature-item"},[t[19]||(t[19]=(0,s.Lk)("i",{class:"icon"},"✨",-1)),(0,s.eW)(" "+(0,a.v_)(e),1)])))),128))])])])])])],64)),(0,s.bF)(l.eB,{name:"modal"},{default:(0,s.k6)((()=>[ge.selectedActivity?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"activity-modal",onClick:t[5]||(t[5]=(...e)=>ge.closeDetail&&ge.closeDetail(...e))},[(0,s.Lk)("div",{class:"modal-content",onClick:t[4]||(t[4]=(0,l.D$)((()=>{}),["stop"]))},[(0,s.Lk)("div",H,[(0,s.Lk)("h2",null,(0,a.v_)(ge.selectedActivity.title),1),(0,s.Lk)("button",{class:"close-btn",onClick:t[1]||(t[1]=(...e)=>ge.closeDetail&&ge.closeDetail(...e))},"×")]),(0,s.Lk)("div",M,[(0,s.Lk)("div",N,[(0,s.Lk)("div",ee,[(0,s.Lk)("div",te,[(0,s.Lk)("img",{src:ge.selectedActivity.images[ge.currentImageIndex],alt:`活动图片${ge.currentImageIndex+1}`},null,8,ie)]),(0,s.Lk)("div",se,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(ge.selectedActivity.images,((e,t)=>((0,s.uX)(),(0,s.CE)("img",{key:t,src:e,class:(0,a.C4)({active:ge.currentImageIndex===t}),onClick:e=>ge.currentImageIndex=t,alt:`缩略图${t+1}`},null,10,ae)))),128))]),(0,s.bo)((0,s.Lk)("button",{class:"gallery-nav prev",onClick:t[2]||(t[2]=e=>ge.currentImageIndex=(ge.currentImageIndex-1+ge.selectedActivity.images.length)%ge.selectedActivity.images.length)}," ‹ ",512),[[l.aG,ge.selectedActivity.images.length>1]]),(0,s.bo)((0,s.Lk)("button",{class:"gallery-nav next",onClick:t[3]||(t[3]=e=>ge.currentImageIndex=(ge.currentImageIndex+1)%ge.selectedActivity.images.length)}," › ",512),[[l.aG,ge.selectedActivity.images.length>1]])])]),(0,s.Lk)("div",le,[(0,s.bF)(l.eB,{name:"fade-slide-down",appear:""},{default:(0,s.k6)((()=>[(0,s.Lk)("div",ne,[(0,s.Lk)("div",ce,[t[22]||(t[22]=(0,s.Lk)("i",{class:"icon"},"📅",-1)),(0,s.Lk)("span",null,(0,a.v_)(ge.selectedActivity.time),1)]),(0,s.Lk)("div",re,[t[23]||(t[23]=(0,s.Lk)("i",{class:"icon"},"📍",-1)),(0,s.Lk)("span",null,(0,a.v_)(ge.selectedActivity.location),1)]),(0,s.Lk)("div",oe,[t[24]||(t[24]=(0,s.Lk)("i",{class:"icon"},"🏷️",-1)),(0,s.Lk)("span",null,(0,a.v_)(ge.selectedActivity.type),1)])])])),_:1}),(0,s.bF)(l.eB,{name:"fade-slide-down",appear:""},{default:(0,s.k6)((()=>[(0,s.Lk)("div",ue,[t[25]||(t[25]=(0,s.Lk)("h3",null,"活动介绍",-1)),(0,s.Lk)("p",null,(0,a.v_)(ge.selectedActivity.description),1)])])),_:1}),(0,s.bF)(l.eB,{name:"fade-slide-down",appear:""},{default:(0,s.k6)((()=>[(0,s.Lk)("div",de,[t[26]||(t[26]=(0,s.Lk)("h3",null,"活动安排",-1)),(0,s.Lk)("div",ve,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(ge.selectedActivity.schedule,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"timeline-item"},[(0,s.Lk)("div",ke,(0,a.v_)(e.date),1),(0,s.Lk)("div",me,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.events,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"event"},(0,a.v_)(e),1)))),128))])])))),128))])])])),_:1}),(0,s.bF)(l.eB,{name:"fade-slide-up",appear:""},{default:(0,s.k6)((()=>[ge.selectedActivity.registration?((0,s.uX)(),(0,s.Wv)(ye,{key:0,registration:ge.selectedActivity.registration,onSubmit:ge.handleRegistration},null,8,["registration","onSubmit"])):(0,s.Q3)("",!0)])),_:1})])])])])):(0,s.Q3)("",!0)])),_:1})])}i(8992),i(4520),i(3949);var pe=i(144),Le=i(5120),ye=i(3270),fe=i(9733),be=i(8902),he=i(5640),Ce=i(1560),_e=i(1680),Ie=i(9773),Ee=i(7227),Ae=i(5918);const Xe=()=>(0,Le.u)({banner:{title:"文化活动",subtitle:"丰富多彩的校园文化生活",image:ye},currentActivities:[{id:1,title:"2024春季校园文化节",time:"2024-03-01 至 2024-03-15",location:"校园各处",type:"文艺演出",status:"正在进行",registration:{status:"open",deadline:"2024-02-28",maxParticipants:500,currentParticipants:320,requirements:["在校学生","对艺术表演有浓厚兴趣","能够参与全程活动"],categories:[{id:1,name:"音乐表演",quota:100,registered:80},{id:2,name:"舞蹈表演",quota:100,registered:75},{id:3,name:"戏剧表演",quota:100,registered:85},{id:4,name:"美术展览",quota:100,registered:60},{id:5,name:"观众参与",quota:100,registered:20}]},description:"为期两周的文化盛宴，包含音乐会、艺术展、戏剧表演等多种形式",schedule:[{date:"3月1日",events:["开幕式","交响音乐会","美术展开展"]},{date:"3月8日",events:["校园歌手大赛","诗歌朗诵会"]}],images:[ye,fe]},{id:2,title:"人工智能与未来发展论坛",time:"2024-03-10 14:00",location:"图书馆报告厅",type:"学术讲座",status:"即将开始",registration:{status:"open",deadline:"2024-03-09",maxParticipants:200,currentParticipants:150,requirements:["对AI领域感兴趣","需提前预习相关资料"],categories:[{id:1,name:"现场参与",quota:150,registered:120},{id:2,name:"线上直播",quota:50,registered:30}]},description:"邀请行业专家探讨AI技术发展趋势及其对未来的影响",schedule:[{date:"14:00-15:30",events:["主题演讲：AI发展现状与趋势","AI技术演示"]},{date:"15:45-16:30",events:["圆桌讨论：AI伦理与未来挑战"]}],images:[be,he]},{id:3,title:"校园马拉松比赛",time:"2024-03-20 08:00",location:"校园跑道",type:"体育赛事",status:"即将开始",registration:{status:"open",deadline:"2024-03-15",maxParticipants:1e3,currentParticipants:600,requirements:["体检合格","签署免责声明","有跑步基础"],categories:[{id:1,name:"全程马拉松",quota:300,registered:200},{id:2,name:"半程马拉松",quota:400,registered:250},{id:3,name:"迷你马拉松",quota:300,registered:150}]},description:"年度校园马拉松赛事，设有全程、半程和迷你马拉松项目",schedule:[{date:"7:00-7:45",events:["参赛选手检录","热身活动"]},{date:"8:00",events:["全程马拉松起跑"]},{date:"8:30",events:["半程马拉松起跑"]}],images:[Ce,_e,Ie]}],regularActivities:[{id:1,title:"周末艺术沙龙",frequency:"每周六",location:"艺术中心",description:"邀请艺术家与师生交流，分享艺术创作经验",categories:["音乐","美术","舞蹈","戏剧"]},{id:2,title:"学术讲座系列",frequency:"每周三",location:"图书馆报告厅",description:"邀请各领域专家学者进行学术分享",categories:["科技","人文","社科","艺术"]},{id:3,title:"创新创业工作坊",frequency:"每月第一周",location:"创新创业中心",description:"为学生提供创业指导和项目孵化支持",categories:["创业","创新","项目管理"]},{id:4,title:"国际文化交流日",frequency:"每月最后一周",location:"国际交流中心",description:"与国际学生交流互动，体验多国文化",categories:["文化交流","语言学习","国际交流"]}],clubs:[{id:1,name:"话剧社",memberCount:120,foundYear:2010,activities:["每年公演","工作坊","剧本创作"],achievements:["校园戏剧节最佳剧目奖","市级优秀社团"]},{id:2,name:"民乐团",memberCount:80,foundYear:2012,activities:["传统节日演出","民乐推广","音乐会"],achievements:["全国大学生艺术展演金奖"]},{id:3,name:"科技创新协会",memberCount:150,foundYear:2015,activities:["创新项目开发","科技竞赛","创客工作坊"],achievements:["互联网+大赛金奖","挑战杯特等奖"]},{id:4,name:"志愿者协会",memberCount:200,foundYear:2008,activities:["社区服务","环保行动","支教活动"],achievements:["最佳志愿服务团队","青年志愿服务奖"]},{id:5,name:"摄影协会",memberCount:90,foundYear:2013,activities:["摄影培训","作品展览","外拍活动"],achievements:["校园风光摄影大赛金奖","市级摄影展优秀奖"]}],facilities:[{name:"大学生活动中心",area:"5000平方米",images:[ye,Ee,Ae],features:["多功能报告厅","排练厅","社团活动室","创客空间","展览厅","音乐排练室","舞蹈教室","录音棚","会议室","休闲区"]}]}),qe={class:"activity-registration"},Ke={class:"registration-status"},Fe={class:"status-info"},Re={class:"deadline"},xe={class:"progress-bar"},we={class:"progress-text"},Te={class:"requirements"},De={class:"categories"},Pe={class:"category-list"},We={class:"category-header"},Se={class:"name"},Be={class:"quota"},Ye={class:"category-progress"},Ve=["onClick","disabled"],Je={key:0,class:"registration-form"},Qe={class:"form-group"},Ue={class:"form-group"},$e={class:"form-group"},je={class:"form-group"},Ge={class:"form-actions"};function Oe(e,t,i,n,c,r){return(0,s.uX)(),(0,s.CE)("div",qe,[(0,s.Lk)("div",Ke,[(0,s.Lk)("div",Fe,[t[6]||(t[6]=(0,s.Lk)("h3",null,"报名状态",-1)),(0,s.Lk)("span",{class:(0,a.C4)(["status-tag",i.registration.status])},(0,a.v_)(n.getStatusText(i.registration.status)),3)]),(0,s.Lk)("div",Re," 报名截止："+(0,a.v_)(i.registration.deadline),1),(0,s.Lk)("div",xe,[(0,s.Lk)("div",{class:(0,a.C4)(["progress",{"almost-full":n.progressPercentage>80}]),style:(0,a.Tr)({width:n.progressPercentage+"%"})},null,6),(0,s.Lk)("span",we," 已报名 "+(0,a.v_)(i.registration.currentParticipants)+"/"+(0,a.v_)(i.registration.maxParticipants),1)])]),(0,s.Lk)("div",Te,[t[7]||(t[7]=(0,s.Lk)("h3",null,"报名要求",-1)),(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.registration.requirements,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{key:t},(0,a.v_)(e),1)))),128))])]),(0,s.Lk)("div",De,[t[8]||(t[8]=(0,s.Lk)("h3",null,"报名类别",-1)),(0,s.Lk)("div",Pe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.registration.categories,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:(0,a.C4)(["category-item",{selected:n.selectedCategory===e.id}])},[(0,s.Lk)("div",We,[(0,s.Lk)("span",Se,(0,a.v_)(e.name),1),(0,s.Lk)("span",Be,(0,a.v_)(e.registered)+"/"+(0,a.v_)(e.quota),1)]),(0,s.Lk)("div",Ye,[(0,s.Lk)("div",{class:"progress",style:(0,a.Tr)({width:e.registered/e.quota*100+"%"})},null,4)]),(0,s.Lk)("button",{onClick:t=>n.selectCategory(e),disabled:e.registered>=e.quota||"open"!==i.registration.status,class:"select-btn"},(0,a.v_)(n.getButtonText(e)),9,Ve)],2)))),128))])]),n.showForm?((0,s.uX)(),(0,s.CE)("div",Je,[t[14]||(t[14]=(0,s.Lk)("h3",null,"报名信息",-1)),(0,s.Lk)("form",{onSubmit:t[5]||(t[5]=(0,l.D$)(((...e)=>n.submitRegistration&&n.submitRegistration(...e)),["prevent"]))},[(0,s.Lk)("div",Qe,[t[9]||(t[9]=(0,s.Lk)("label",null,"姓名",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.name=e),required:""},null,512),[[l.Jo,n.form.name]])]),(0,s.Lk)("div",Ue,[t[10]||(t[10]=(0,s.Lk)("label",null,"学号",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.studentId=e),required:""},null,512),[[l.Jo,n.form.studentId]])]),(0,s.Lk)("div",$e,[t[11]||(t[11]=(0,s.Lk)("label",null,"联系电话",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.phone=e),type:"tel",required:""},null,512),[[l.Jo,n.form.phone]])]),(0,s.Lk)("div",je,[t[12]||(t[12]=(0,s.Lk)("label",null,"邮箱",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.email=e),type:"email",required:""},null,512),[[l.Jo,n.form.email]])]),(0,s.Lk)("div",Ge,[(0,s.Lk)("button",{type:"button",onClick:t[4]||(t[4]=(...e)=>n.cancelRegistration&&n.cancelRegistration(...e))},"取消"),t[13]||(t[13]=(0,s.Lk)("button",{type:"submit",class:"submit-btn"},"提交报名",-1))])],32)])):(0,s.Q3)("",!0)])}var Ze={name:"ActivityRegistration",props:{registration:{type:Object,required:!0}},setup(e,{emit:t}){const i=(0,pe.KR)(null),a=(0,pe.KR)(!1),l=(0,pe.KR)({name:"",studentId:"",phone:"",email:""}),n=(0,s.EW)((()=>e.registration.currentParticipants/e.registration.maxParticipants*100)),c=e=>{const t={open:"报名中",closed:"报名已截止",ended:"活动已结束"};return t[e]||e},r=t=>t.registered>=t.quota?"名额已满":"open"!==e.registration.status?"报名结束":"立即报名",o=e=>{e.registered>=e.quota||(i.value=e.id,a.value=!0)},u=()=>{t("submit",{categoryId:i.value,...l.value}),v()},d=()=>{v()},v=()=>{i.value=null,a.value=!1,l.value={name:"",studentId:"",phone:"",email:""}};return{selectedCategory:i,showForm:a,form:l,progressPercentage:n,getStatusText:c,getButtonText:r,selectCategory:o,submitRegistration:u,cancelRegistration:d}}},ze=i(1241);const He=(0,ze.A)(Ze,[["render",Oe],["__scopeId","data-v-1f6f92b8"]]);var Me=He,Ne={name:"CulturalActivitiesView",components:{ActivityRegistration:Me},setup(){const e=(0,pe.KR)({}),t=(0,pe.KR)([]),i=(0,pe.KR)([]),a=(0,pe.KR)([]),l=(0,pe.KR)([]),n=(0,pe.KR)("全部活动"),c=(0,pe.KR)(null),r=(0,pe.KR)(0),o=(0,pe.KR)(!1),u=(0,pe.KR)(!0),d=(0,pe.KR)(null),v=["全部活动","学术讲座","文艺演出","社团活动","体育赛事","志愿服务"],k=e=>{const t={"全部活动":"🎯","学术讲座":"📚","文艺演出":"🎭","社团活动":"🎪","体育赛事":"⚽","志愿服务":"❤️"};return t[e]||"📌"},m=(0,s.EW)((()=>"全部活动"===n.value?t.value:t.value.filter((e=>{const t=e.type.toLowerCase(),i=n.value.toLowerCase();return t.includes(i)})))),g=e=>{const t={"正在进行":"status-ongoing","即将开始":"status-upcoming","已结束":"status-ended"};return t[e]||""},p=()=>{const e=document.querySelectorAll(".activity-card");e.forEach(((e,t)=>{e.style.animationDelay=100*t+"ms"}))};(0,s.wB)(n,(()=>{(0,s.dY)((()=>{p()}))}));const L=async()=>{u.value=!0,d.value=null;try{const s=await Xe();e.value=s.banner||{},t.value=s.currentActivities||[],i.value=s.regularActivities||[],a.value=s.clubs||[],l.value=s.facilities||[]}catch(s){d.value="获取数据失败，请稍后重试",console.error("获取文化活动数据失败:",s)}finally{u.value=!1}},y=e=>{c.value=e,r.value=0,o.value=!0},f=()=>{o.value=!1,setTimeout((()=>{c.value=null,r.value=0}),300)},b=e=>{e?.images&&e.images.forEach((e=>{const t=new Image;t.src=e}))};(0,s.sV)((()=>{L();const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("visible")}))}),{threshold:.1});document.querySelectorAll(".scroll-reveal").forEach((t=>{e.observe(t)}))}));const h=e=>{console.log("提交报名:",e)};return{banner:e,currentActivities:t,regularActivities:i,clubs:a,facilities:l,currentType:n,selectedActivity:c,filteredActivities:m,loading:u,error:d,showDetail:y,closeDetail:f,fetchData:L,activityTypes:v,getTypeIcon:k,getStatusStyle:g,preloadImages:b,currentImageIndex:r,modalZoomed:o,handleRegistration:h}}};const et=(0,ze.A)(Ne,[["render",ge],["__scopeId","data-v-ad70d45a"]]);var tt=et},1560:function(e,t,i){e.exports=i.p+"img/操场.7202027f.jpg"},9773:function(e,t,i){e.exports=i.p+"img/操场3.0f77c70f.jpg"},9733:function(e,t,i){e.exports=i.p+"img/音乐谷.bba50b42.png"}}]);
//# sourceMappingURL=248.512ebe6e.js.map