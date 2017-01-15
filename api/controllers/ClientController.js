/**
 * RecuiterController
 *
 * @description :: Server-side logic for managing Recuiters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getallRecruiters: function(req, res) {
		ClientService.getallClients(function(err,result){
			return res.view('clients',{
					'recruiters': result,
					'recactive':true
			});
		})
	},
	addClientpage:function(req,res){
		return res.view('addclient',{'recactive':true});
	},
	addClient:function(req,res){
		var params = _.extend(req.query || {}, req.params || {}, req.body || {});
		var objects={
			"Name":params.name,
			"Email":params.email,
			"Phone":params.phone,
			"City":params.city,
			"Area":params.area,
			"Address":params.address
		};
		ClientService.insertClient(objects,function(err,result){
			if(err){

			}else{
						return res.redirect('/clients');
			}
		});
	},
	deleteclientrecord:function(req,res){
		var id=parseInt(req.param('id'))
		ClientService.deleteClient(id,function(err,result){
			return res.redirect('/clients');
		});
	},
	numberofClients:function(req,res){
		var id=parseInt(req.param('id'))
		ClientService.deleteClient(id,function(err,result){
			return res.redirect('/clients');
		});
	}
};
