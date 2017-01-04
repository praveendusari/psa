/**
 * RecuiterController
 *
 * @description :: Server-side logic for managing Recuiters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getallRecruiters: function(req, res) {
		ClientService.getallRecruiters(function(err,result){
			return res.view('clients',{
					'recruiters': result,
					'recactive':true
			});
		})
	},
	addRecruiterpage:function(req,res){
		return res.view('addclient',{'recactive':true});
	},
	addRecruiter:function(req,res){
		var params = _.extend(req.query || {}, req.params || {}, req.body || {});
		console.log(params);
		Client.create({
			"name":params.name,
			"email":params.email,
			"userid":params.username,
			"password":params.password,
			"description":params.description
		});
		return res.redirect('/clients');
	}
};
