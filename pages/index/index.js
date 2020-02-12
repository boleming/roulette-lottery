
Page({
  data: {
    animationData: {}//动画的css3数据
  },
  onLoad() {
  },
  //随机度数
  getRandom(min,max) {
    let i = max-min+1;
		return Math.floor(Math.random()*i)+min;//设置随机旋转的度数
    // return Math.floor(Math.random()*1801)+1800;
  },
  //点击后旋转
  onRotate(){
    let num = 360/7;
    let degrees = this.getRandom(1800,3600);//获取随机度数
    this.getAnimation(3000,degrees);
    // console.log(degrees)
    if(degrees%360<=num*1){
      this.onShowModal('免分期服务费');
    }else if(degrees%360<=num*2){
      this.onShowModal('提高白条额度');
    }else if(degrees%360<=num*3){
      this.onShowModal('未中奖');
    }else if(degrees%360<=num*4){
      this.onShowModal('免单4999元');
    }else if(degrees%360<=num*5){
      this.onShowModal('免单50元');
    }else if(degrees%360<=num*6){
      this.onShowModal('免单10元');
    }else if(degrees%360<=num*7){
      this.onShowModal('免单5元');
    }
  },
  //中奖信息弹窗动画
  onShowModal(str){
    setTimeout(()=>{
      wx.showModal({
        title: '中奖信息',
        content: str,
        success:()=>{
          this.getAnimation(0,0);
        }
      })
    },3000)
  },
  //全局动画函数，秒数和旋转度数传参可复用
  getAnimation(s,degrees){
    let animation = wx.createAnimation({//定义全局初始化动画
      duration: s,//定义动画持续的时间
      timingFunction: 'ease',//定义动画的进行
    })
    animation.rotate(degrees).step();//旋转到n度
    this.setData({
      animationData: animation.export()//将定义的动画赋值给animationData
    })
  }
})
