/**
 * RecuiterController
 *
 * @description :: Server-side logic for managing Recuiters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	Index: function(req, res) {

			return res.view('loginpage',{layout: 'login', error:null});

	},
	getDetails:function(req,res){
		var params = _.extend(req.query || {}, req.params || {}, req.body || {});
		AdminService.getAdmindetails(params,function(err,result){
			if(err){
				console.log(err);
				return res.view('loginpage',{layout: 'login',error:"Invalid Username and Password"});
			}else{
				req.session.authenticated=params.username;
				res.redirect('/');
			}

		});
	}
};
