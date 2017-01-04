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
    getallRecruiters: function(callBack) {
        ORMService.view(Client, {}, {}, function(err, result) {
            if (err) {
                callBack(err, null);
            }
            callBack(null, result);
        });
    }
};
