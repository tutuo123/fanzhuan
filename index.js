module.exports = function(str){
	if(str==undefined) return false
	return str.split("").reverse().join("")
}