// Modified by https://github.com/deezertidal

/*脚本任务(京东 顺丰 联通等)*/
cron "30 6-23/3 * * *" script-path=https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/backend/dist/cron-sync-artifacts.min.js, tag=Auto-Gist
cron "15 7-18/2 * * *" script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v3/10010.js, tag=流量监控, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/
cron "15 1 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js, enable=false, tag=京东
cron "5 3 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/jd/JD_BaiTiao.js, enable=false, tag=京东白条
cron "0 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.js, enable=false, tag= 顺丰速运
cron "20 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/v2ex/v2ex.js, enable=false, tag=V2EX
cron "0 5 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.js, enable=false, tag=中国联通
cron "10 0 8 * * *" script-path=https://raw.githubusercontent.com/photonmang/quantumultX/master/tuhu/tuhu.js, enable=false, tag=途虎养车
cron "2 9 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_bean_change.js, tag=京东资产变动通知
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_bean_home.js, tag=领京豆额外奖励
cron "20 * * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_big_winner.js,tag=省钱大赢家之翻翻乐
cron "0 0 0 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_blueCoin.js,tag=东东超市兑换奖品
cron "1 8,12,18 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_bookshop.js,tag=口袋书店
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_car.js, tag=京东汽车
cron "0 0 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_car_exchange.js, tag=京东汽车兑换
cron "0 0-18/6 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_carnivalcity.js, tag=京东手机狂欢城
cron "2 0-23/4 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_cash.js,tag=签到领现金
cron "5 8,13,19 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_cfd.js,tag=京喜财富岛
cron "5 0,23 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_club_lottery.js,tag=摇京豆
cron "10 9 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_crazy_joy.js,tag=crazyJoy任务
cron "10 12 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_crazy_joy_bonus.js,tag=监控crazyJoy分红
cron "10 1,12 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_crazy_joy_coin.js,tag=crazyJoy挂机
cron "10 * * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_daily_egg.js,tag=天天提鹅
cron "13 1,22,23 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_daily_lottery.js, tag=每日抽奖
cron "10 * * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_dreamFactory.js,tag=京喜工厂
http-request https:\/\/me-api\.jd\.com\/user_new\/info\/GetJDUserInfoUnion script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/JD_extra_cookie.js, enable=false, tag=获取多账号京东Cookie
cron "1 12,23 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_family.js,tag=京东家庭号
cron "5 6-18/6 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_fruit.js,tag=东东农场
cron "20 13 * * 6" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_get_share_code.js, tag=获取互助码
cron "13 1,22 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_gold_creator.js, tag=金榜创造营
cron "13 1,6,22 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_health.js, tag=东东健康社区
cron "5-45/20 * * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_health_collect.js, tag=东东健康社区收集能量
cron "10 * * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_jdfactory.js,tag=东东工厂
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_jdzz.js,tag=京东赚赚
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_jin_tie.js,tag=领金贴
cron "15 0-23/2 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy.js,tag=京东宠汪汪
cron "15 0-23/1 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy_feedPets.js,tag=京东宠汪汪喂食
http-request ^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力
cron "0 0-16/8 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy_reward.js,tag=宠汪汪积分兑换奖品
cron "15 10 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy_run.js, tag=宠汪汪邀请助力与赛跑助力
http-response ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/addUser\?code= script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy_run.js, requires-body=true, timeout=10, tag=宠汪汪助力更新Token
http-request ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/user\/detail\?openId= script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy_run.js, timeout=3600, tag=宠汪汪助力获取Token
cron "10 0-21/3 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_joy_steal.js,tag=宠汪汪偷好友积分与狗粮
cron "1 0,11,21 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_jump.js, tag=跳跳乐瓜分京豆
cron "4 10 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_jxlhb.js,tag=京喜领88元红包
cron "20 0-23/3 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_jxmc.js,tag=惊喜牧场
cron "0 9,12,18 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_jxnc.js,tag=京喜农场
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_kd.js, tag=京东快递签到
cron "10-20/5 12 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_live.js,tag=京东直播
cron "0,30 0-23/1 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_live_redrain.js,tag=超级直播间红包雨
cron "4 10 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_market_lottery.js,tag=幸运大转盘
cron "4 10 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_mcxhd.js,tag=新潮品牌狂欢
cron "0 0,1-23/3 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_mohe.js,tag=5G超级盲盒
cron "3 0-23/2 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_moneyTree.js,tag=京东摇钱树
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_ms.js,tag=京东秒秒币
cron "10 0,20 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_necklace.js,tag=点点券
cron "35 1,23 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_nzmh.js,tag=女装盲盒
cron "15 6-18/6 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_pet.js,tag=东东萌宠
cron "12 0-23/6 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_pigPet.js, tag=京东金融养猪猪
cron "1 7-21/2 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_plantBean.js,tag=京东种豆得豆
cron "0 2 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_price.js,tag=京东保价
cron "1 1,2,23 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_redPacket.js, tag=京东全民开红包
cron "20 8 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_sgmh.js, tag=闪购盲盒
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_shop.js,tag=进店领豆
cron "16 22 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_small_home.js, tag=东东小窝
cron "8 0-23/3 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_speed.js,tag=京东天天加速
cron "20 0,22 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_speed_redpocke.js,tag=京东极速版红包
cron "0 7 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_speed_sign.js,tag=京东极速版
cron "0 1,21 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_star_shop.js,tag=明星小店
cron "11 * * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_superMarket.js,tag=东东超市
cron "10 0,7,23 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_syj.js, tag=赚京豆
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_unsubscribe.js,tag=取关京东店铺商品
cron "33 0,6-23/2 * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_zoo.js, tag=618动物联萌
cron "0-59/30 * * * *" script-path=https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd_scripts/jd_zooCollect.js,tag=618动物联萌收集金币
cron "30 0 8-22/2 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/hotsearch/hot.js, timeout=600, tag=热门监控
cron "5 0 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/wechatsubs/wechatsubs.js, tag=公众号监控

/*中国联通获取cookie*/
http-request ^https?:\/\/act.10010.com\/SigninApp\/signin\/querySigninActivity.htm script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js, tag=中国联通
http-request ^https?:\/\/act.10010.com\/SigninApp(.*?)\/signin\/daySign script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js, tag=中国联通
http-request ^https?:\/\/m.client.10010.com\/dailylottery\/static\/(textdl\/userLogin|active\/findActivityInfo) script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js, tag=中国联通

/*获取顺丰cookie*/
http-request ^https:\/\/sf-integral-sign-in.weixinjia.net\/app\/index script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js, tag=顺丰速运
http-request ^https:\/\/mcs-mimp-web.sf-express.com\/mcs-mimp\/share\/(.*?)Redirect script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js, tag=顺丰速运

/*获取美团cookie*/
http-request ^https:\/\/promotion.waimai.meituan.com\/playcenter\/signIn\/entry script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.cookie.js, tag=美团外卖
http-request ^https:\/\/promotion.waimai.meituan.com\/playcenter\/signIn\/doaction script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.cookie.js, requires-body=true,  tag=美团外卖
http-request ^https:\/\/i.meituan.com\/evolve\/signin\/signpost\/ script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/meituan/meituan.cookie.js, requires-body=true, tag=美团

/*获取京东cookie*/
http-request ^https:\/\/(api\.m|me-api|ms\.jr)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?|gw\/generic\/hy\/h5\/m\/appSign\?) tag=获取京东Cookie, requires-body=true, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
http-request https:\/\/wq\.jd\.com\/user_new\/info\/GetJDUserInfoUnion tag=多京东Cookie获取, script-path=https://raw.githubusercontent.com/dompling/Script/master/jd/JD_extra_cookie.js
http-request ^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/bt\/h5\/m\/queryUserSignFlow script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/jdczfcookie.js, tag=京东成长分

/*获取途虎cookie*/
http-request https://api.tuhu.cn/User/GetUserCurrentAndNextGradeInfo script-path=https://raw.githubusercontent.com/photonmang/quantumultX/master/tuhu/tuhu.Cookie.js, tag=途虎养车

hostname = daojia.jd.com,i.meituan.com,promotion.waimai.meituan.com,m.client.10010.com,act.10010.com,mcs-mimp-web.sf-express.com,*.v2ex.com,jdjoy.jd.com,jdread-api.jd.com,api.tuhu.cn,ms.jr.jd.com,me-api.jd.com,www.google.*,draw.jdfcloud.com
