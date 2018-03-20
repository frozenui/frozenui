/**
 * Grunt iSyn
 */

'use strict';

module.exports = function(grunt,PWD) {
	var exports={};
	var path=require("path");
	var fs = require('fs-extra');
	exports.RequireExtension=function() {
		this.tags = ['require'];
		this.parse = function(parser, nodes, lexer) {
		  var tok = parser.nextToken();
		  var args = parser.parseSignature(null, true);
		  parser.skip(lexer.TOKEN_BLOCK_END);
		  return new nodes.CallExtension(this, 'run', args);
		};
		this.run = function(context, dir ,page ,sassfile) {

			var mod=PWD+"/sass/"+dir+"/__mod-"+page+".scss";

			if(dir.indexOf("_")==0){

				return;
			}
      if(page.indexOf("_")==0){
        return;
      }
			mod=path.resolve(mod);
			fs.ensureFileSync(mod);
			var sassKey = dir + "-" + page + "-" + sassfile;
			console.log('==================================');
			console.log( sassKey);
			console.log('==================================');
			var content=fs.readFileSync(mod).toString();

			if(content.indexOf("'"+sassfile+"';")<0){
				fs.writeFileSync(mod,content+"@import '"+sassfile+"';\n")
			}

			return "";
		};
  	}

  	var cacheExtract = {}, cacheHead = "", cacheTail = "";
  	exports.ExtractExtension=function(){
  		this.tags = ["extract"];

  		this.parse = function(parser, nodes, lexer) {
  			var tok = parser.nextToken();

  			var args = parser.parseSignature(null, true);
  			parser.skip(lexer.TOKEN_BLOCK_END);

  			var body = parser.parseUntilBlocks("endextract");

  			parser.advanceAfterBlockEnd();
  			return new nodes.CallExtension(this, 'run', args, [body])
  		};
  		this.run = function(context, dir, page, tag, body) {
  			grunt.log.debug("=== Extract ===");
  			var bodyContent = body().trim();

  			var extractKey = dir+'-'+page+'-'+tag;
  			if(cacheExtract[extractKey]){
  				return bodyContent;
  			}

  			// extract head and tail
  			if( dir === "index" && page === "tmp"){
  				if( tag === "head"){
  					cacheHead = bodyContent;
  				} else if ( tag === "tail") {
  					cacheTail = bodyContent;
  				}
  			} else {
  				cacheExtract[extractKey] = bodyContent;
  			}

  			var indexPage = PWD + "/html/index/index.html";
  			fs.writeFileSync(indexPage, this._genAllContent() );

  			return bodyContent;
  		};
  		this._genAllContent = function(){
  			var tmp = "";
  			for(var k in cacheExtract){
  				tmp += cacheExtract[k] + "\n";
  			}
  			return cacheHead + "\n" + tmp + cacheTail;
  		}
  	}

  	exports.preCompile=function(templateName){
		// var def={},
		//     tmp=templateName.split("\\");
		// if(tmp.length<2){
		// 	tmp=templateName.split("/");
		// }
		// tmp[1]=tmp[1].replace(".html","");
		// def.dir=tmp[0];
		// def.page=tmp[1];
		// if(grunt.task.current.target!="release"){
		// 	def.isTest=true;
		// }
    // // console.log(def);
	  // if(def.dir.indexOf("_")==0){
    //
    //   return;
    // }
    // if(def.page.indexOf("_")==0){
    //
    //   return;
    // }
		// var mod=PWD+"/sass/"+def.dir+"/__mod-"+def.page+".scss";
		// fs.writeFileSync(mod,"");
		// return def;
  	}
  	exports.init=function(env){
   		env.addExtension('RequireExtension', new exports.RequireExtension());
   		env.addExtension('ExtractExtension', new exports.ExtractExtension());
   		return env;
   	}
  	return exports;
};
