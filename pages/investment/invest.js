var indexList1 = [
            {
                titleImg:'../imgs/car.png',
                title:'个人车辆质押GRCL00331项目',
                payStyle:'按月付息/到期还本',
                income:'12%',
                totleMoney:'500,000元',
                projectTime:'2个月',
                readyPic:'../imgs/ready.png',
                expect:'预期年化',
                startPrice:'项目规模',
                endPrice:'项目期限',
                project1:'../projects/project1'
            },
            {
                titleImg:'../imgs/give.png',
                title:'供应链金融-物资公司电缆采购',
                payStyle:'按月付息/到期还本',
                income:'13.2%',
                totleMoney:'500,000元',
                projectTime:'5个月',
                readyPic:'../imgs/ready.png',
                expect:'预期年化',
                startPrice:'项目规模',
                endPrice:'项目期限',
                project1:'../projects/project2'
            }
        ];
var indexList2 = [
            {
                titleImg:'../imgs/car.png',
                title:'供应链金融-工程公司GRCL00331项目',
                payStyle:'按月付息/到期还本',
                income:'13.2%',
                totleMoney:'24000,000元',
                projectTime:'2个月',
                readyPic:'../imgs/buy.png',
                expect:'预期年化',
                startPrice:'项目原始价格',
                endPrice:'项目转让价格',
                project1:'../projects/project3'
            },
            {
                titleImg:'../imgs/give.png',
                title:'供应链金融-工程公司GRCL00331项目',
                payStyle:'按月付息/到期还本',
                income:'13.2%',
                totleMoney:'24000,000元',
                projectTime:'5个月',
                readyPic:'../imgs/buy.png',
                expect:'预期年化',
                startPrice:'项目原始价格',
                endPrice:'项目转让价格',
                project1:'../projects/project4'
            }
        ];

Page({
    data:{
        text:"nihao",
        cutLine:"../imgs/line.png",
        invest_pic1:'../imgs/investPic1.png',
        invest_pic2:'../imgs/investPic2.png',
        indexDotted:'../imgs/dotted.png',
        indexList:indexList1
    },
    changeListL:function(){
        this.setData({
            invest_pic1:'../imgs/investPic1.png',
            invest_pic2:'../imgs/investPic2.png',
            indexList:indexList1
        })
    },
    changeListR:function(){
        this.setData({
            invest_pic1:'../imgs/investPic11.png',
            invest_pic2:'../imgs/investPic22.png',
            indexList:indexList2
        })
    }
})