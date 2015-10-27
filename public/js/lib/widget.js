(function(){
	function WdDefaultRadio(obj){
		this.jDom=$(obj);
		this.jSpans=this.jDom.find(">span");
		this.jInput=$(this.jDom.attr("for"));
		var self=this;
		this.jSpans.on("click",function(){
			$(this).addClass("checked").siblings("span").removeClass("checked");
			self.jInput.val($(this).attr("value"));
		})
	}
	$(document).ready(function(){
		$(".wd-radio").each(function(){
			var obj=new WdDefaultRadio(this);
		})
	})
})()