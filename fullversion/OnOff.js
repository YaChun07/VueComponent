Vue.component('onoff', {
  data: function () {
    return {
      isChecked: false
    }
  },
  computed:{
    togglePosition(){
      return this.isChecked?30:0;
    },
    isOnOff(){
      return this.isChecked?-30:30;
    },
    onOff(){
      return this.isChecked?"On":"Off"
    }
  },
  template:
  `<div style="width:60px;height:30px;border-radius:15px;border: 1px solid black;" @click="isChecked=!isChecked">
      <div style="width:30px;height:30px;background:blue;border-radius:15px;transition:0.3s "
:style="{'margin-left':togglePosition+'px'}">
        <div style="color:black;":style="{'margin-left':isOnOff+'px'}">
          {{this.onOff}}
        </div>
    </div>
  </div>`
})

	new Vue({
			el: "#app",
			data:{
			}
		})