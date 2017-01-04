/**
 * RecuiterController
 *
 * @description :: Server-side logic for managing Recuiters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	Index: function(req, res) {

			return res.view('loginpage',{layout: 'login'});

	},
	getDetails:function(req,res){
		var params = _.extend(req.query || {}, req.params || {}, req.body || {});
		console.log(params);
		AdminService.getAdmindetails(params,function(err,result){
			if(result){
				req.session.authenticated=params.username;
				res.redirect('/');
			}
		});
	}
};
