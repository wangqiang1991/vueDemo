export default {
  image:{
    loading_image:"/static/images/loading_img.png",
    white_loading:"http://appsource.goochao.com/loading_gray.png",
    black_loading:"http://appsource.goochao.com/loading_black.png"
  },
  attendWx:'/app/api/auth/wx/concern',
  home:{
    url_v2:"/app/api/home/v2",
    banner_click:"app/api/banner/view/:bannerId",
    recommend:"/app/api/home/recommends",
    activity_home_url:"/app/api/home/activity-info"
  }, 
  find:{
    goods:'/app/api/goods/search',
    picture:'/app/api/picture/search'
  },
  address:{
    cancelDefaultAddress:"/app/api/address/cancel/:addressId"
  },
  currency:{
  	currencyInterface: '/app/api/member/details/:memberId'
  },
  goodsDetail:{
  	goodsDetailInterface: "/app/api/goods/:goodsId/v2",
    collect_goods:'/app/api/goods/collection',
    similarity_goods:'/app/api/goods/similarity',
    shoppingCart_number:'app/api/shopping-cart/count',
    add_shopping:'app/api/shopping-cart',
    buy_now:"/app/api/order",
  },
  category:{
    list_v2:"/app/api/category/all"
  },
  banner:{
    url:"/app/api/banner/:bannerId"
  },
  goods:{
    goods_list:'/app/api/goods',
    goods_comment:'/app/api/order-comments/:goodsId'
  },
  sceneList:{
    area:"/app/api/picture/areas",
    style:"/app/api/picture/styles",
    subjectType:"/app/api/subject/types",
    subject:"/app/api/subject",
    picture:"/app/api/picture",
    space:'/app/api/space',
    plan:"/app/api/plan",
    house_url:"/app/api/house",
    planV2_url:"/app/api/plan/v2"
  },
  space:{
    url:'/app/api/space/:spaceId'
  },
  subject:{
    addCollect:'/app/api/subject/collection',
    load_url:"/app/api/subject/:subjectArticleId",
    subject_comment:"/app/api/subject/comments/:subjectArticleId",
    submiit_comment:"/app/api/articles/comment"
  },
  plan:{
    detail_url:"/app/api/plan/:planId",
    collection_url:"/app/api/plan-receive/receive",
    cancel_collect:"/app/api/plan-receive/receive/plans/:planId",
    join_shopping_cart:"/app/api/shopping-cart/batch-join",
    is_receive:"/app/api/plan-receive/receive-record",
    list_url:"/app/api/plan-receive/receive/plans",
    plan_type:"/app/api/dict/:type"
  },
  activity:{
    bind_goods:'/app/api/goods-member/bind',
    is_activityCommer:"/app/api/member-receive/receive-record",  //是否已经领取新人礼包
    is_activity:"/app/api/activity-member/receive-record",   //是否已经领取活动礼包
    receive_activity:"/app/api/activity-member/receive",
    receive_commber:"/app/api/member-receive",
    is_activityPlan:'/app/api/plan-receive/receive-record', //是否领取方案
    receive_plan:"/app/api/plan-receive/receive",   //领取方案
    bind_activity:"/app/api/activity-member/bind"  //建立联系
  },
  collect:{
    cancel_goods:"/app/api/goods/collection/by-goods/:goodsId",
    cancel_scene:"/app/api/scene/collection/by-scene/:sceneId",
    cancel_subject:"/app/api/subject/collection/by-subject/:subjectId"
  },
  message:{
    unread_url:"/app/api/message-center/unread",
    last_message:'/app/api/message-center/last-message',
    sys_message:'/app/api/message-center/sys-message',
    notice_message:"/app/api/message-center/notice-message",
    clear_url:"/app/api/message-center/unread/clear"
  }
}