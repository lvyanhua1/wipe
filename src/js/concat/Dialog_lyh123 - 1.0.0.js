/*!Dialog_lyh123 - 1.0.0-2020-05-26 */function DH(Obj){
    this.id = Obj.id;
    this.dia =document.getElementById(this.id);
    this._w = Obj._w<150?150:Obj._w;
    this._h = Obj._h<150?150:Obj._h;
    this.titl = Obj.titl;
    this.conts = Obj.conts;
    this.titie =document.getElementsByClassName('dialog-title')[0];
	this.dialog_body = document.getElementsByClassName('dialog-body')[0].getElementsByTagName('p')[0];
	console.log(this.dialog_body);
    this.close = document.getElementById('close');
    this.save = document.getElementById('save');
    this.callback = Obj.callback;
    this.init();
    this.addEvent();
}
DH.prototype.init = function(){
    this.dia.style.width = this._w+"px";
    this.dia.style.height = this._h+"px";
    this.titie.innerHTML =this.titl;
	this.dialog_body.innerHTML = this.conts;

};
DH.prototype.addEvent=function(){
    var that = this;
	if(this.close){
		this.close.addEventListener("click", function() {
			that.dia.style.display = "none";
		}, false);
    }
    if(this.save){
		this.save.addEventListener("click", function() {
			that.dia.style.display = "none";
			if(that.callback){
				that.callback.call(null); //调用同名的全局函数
			}
		});
	}else{
		return;
	}
};
var a = { //让提示框显示，默认是隐藏
	onclick: function(id) {
		document.getElementById(id).style.setProperty('display', 'block');
	}
};