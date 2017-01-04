/**
 * RecuiterController
 *
 * @description :: Server-side logic for managing Recuiters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getallInterviewers: function(req, res) {
		RecruiterService.getallRecruiters(function(err,result){
			return res.view('interviewer',{
					'interviewers': result,
          'intactive':true
			});
		})
	},
	addInterviewerpage:function(req,res){
		return res.view('addinterviewers',{'active':true});
	},
  addInterviewer:function(req,res){
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    Interviewer.create({
      "name":params.name,
      "email":params.email,
      "userid":params.username,
      "password":params.password,
      "description":praparamsmas.description
    });
		return res.redirect('/interviewers');
	}
};
