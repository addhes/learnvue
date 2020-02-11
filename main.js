Vue.component('coments',{
  template : '#coment-template',
  //data yang di oper
  props : ['coment'],
  data : function(){
    return {
      plus : false,
      minus : false,
    }
  },
  methods : {
    sundul : function(){
      this.plus = !this.plus,
      this.minus = false
    },
    bata : function(){
      this.minus = !this.minus
      this.plus = false
    },
  },
  //variable yang selalu berubah
  computed : {
    coto : function(){
      if ( this.pluse)
      return this.coment.coto + 1
      else if (this.minus)
      return this.coment.coto - 1
      else
      return this.coment.coto
    }
  }
})

var vm = new Vue({
  el : '#app',
  data : {
    coments : [
      {body : 'ini komentar saya', time: '20-1-14', coto: 0},
      {body : 'ini komentar gams', time: '14-1-14', coto: 0},
      {body : 'ini komentar kamu', time: '04-1-14', coto: 0},
    ]
  }
})
