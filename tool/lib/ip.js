/**
 * Grunt iSyn
 */

'use strict';

module.exports = function(grunt) {

	var IP="127.0.0.1";
	function getip(){
		var os = require('os');
		var ip=os.networkInterfaces();
		var ips=[];
		for(var i in ip){

			if(ip[i] instanceof Array){
				for(var j=0;j<ip[i].length;j++){
					if(ip[i][j].family=="IPv4"&&ip[i][j].address!="127.0.0.1"){

						ips.push(ip[i][j].address)
					}
				}
			}else{
				if(ip[i].family=="IPv4"&&ip[i].address!="127.0.0.1"){
					ips.push(ip[i].address)
				}
			}
		}
		grunt.log.writeln("可选择ip:\n\n")
		grunt.log.ok(ips);
		IP=ips[0];
	}
	getip();
	return IP;
};