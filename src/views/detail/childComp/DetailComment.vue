<template>
  <div class="comment-info" v-if="Object.keys(comment).length > 0">
    <div class="info-head">
        <div class="head-title">用户评价</div>
        <div class="head-more">更多</div>
    </div>
    <div class="info-user">
        <img :src="comment.user.avatar"/>
        <span>{{comment.user.uname}}</span>
    </div>
    <div class="info-content">
        <p>{{comment.content}}</p>
        <div class="content-data">
            <span class="data">{{comment.created|dateFormatter}}</span>
            <span class="style">{{comment.style}}</span>
        </div>
        <div class="content-img">
            <img :src="item" v-for="(item,index) in comment.images" :key="index"/>
        </div>
    </div>
  </div>
</template>

<script>
import {GetDateByDate} from  "common/utils";
export default {
    props:{
        comment:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        dateFormatter(d){
            let date=new Date(d*1000);
            return GetDateByDate(date);
        }
    }
}
</script>

<style scoped>
.comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
}
.info-head{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-head .head-title{
    float: left;
    font-size: 15px;
}
.info-head .head-more{
    float: right;
    font-size: 13px;
    margin-right: 10px;
}
.info-user{
    display: flex;
    align-items: center;
    margin-top: 15px;
}
.info-user img{
    border-radius: 50%;
    width: 45px;
    height: 45px;
}
.info-user span{
    font-size: 15px;
    margin-left: 10px;
}
.info-content{
    margin: 5px 0px 15px;
}
.info-content>p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
}
.content-data{
    font-size: 12px;
    color: #999; 
}
.content-data .style{
    margin-left: 15px;
}
.content-img{
    margin-top: 10px;
}
.content-img img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
}
</style>