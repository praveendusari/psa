/**
 * FeedbackController
 *
 * @description :: Server-side logic for managing feedbacks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getallfeedbackstoday: function(req, res) {
    var todaydate = new Date();
    var month = todaydate.getMonth()+1;
    FeedbackService.getallRecordstoday(month, function(result) {
      return res.jsonp(result);
    });
  }
};
