/**
 * activities
 *
 * @description :: Server-side logic for managing activites
 *                 Service written to interact wth ORM service and
 *                 retrieve the data accordingly
 */


module.exports = {
  /**
   * getVisitActivities - method used to interact with ORM service and returns response
   *                 Based on the visitId requested ORM service fetches all the
   *                 activities (with selected attributes) for that particular visit.
   * @param  {String} visitID    : the visitId for which we are fetching activities
   * @param  {Function} callBack : callback to handle responses.
   */
  getallRecordstoday: function(date, callBack) {
    // ORMService.view(Feedback, {}, {
    //   where: sequelize.literal('extract(month FROM "NextmeetingTime")')
    // }, function(err, result) {
    //   if (err) {
    //     callBack(err, null);
    //   }
    //   callBack(null, result);
    // });
    console.log('select * FROM "PSA_feedback" WHERE extract(month from "NextmeetingTime") = '+date+'');
    sequelize.query('select * FROM "PSA_feedback" WHERE extract(month from "NextmeetingTime") = '+date+'')
      .then(function(result) {
        callBack(result);
      })
  },
  deleteClient: function(Id, callBack) {
    ORMService.delete(Client, {
      clientId: Id
    }, function(err, result) {
      if (err) {
        callBack(err, null);
      }
      console.log(result);
      callBack(null, result);
    });
  },
  insertClient: function(params, callBack) {
    ORMService.upsert(Client, {}, params, function(err, result) {
      if (err) {
        callBack(err, null);
      }
      console.log(result);
      callBack(null, result);
    });
  }
};
