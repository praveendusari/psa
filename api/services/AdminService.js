/**
 * visitActivity
 *
 * @description :: Server-side logic for managing vislits related to a trial
 *                 Service written to interact wth ORM service and
 *                 retrieve the trial visits data accordingly
 */

module.exports = {
    getAdmindetails: function(params, callBack) {
        ORMService.view(Admin, {}, {
            where:{
              'username':params.username,
              'password':params.password
            }
        }, function(err, records) {
            if (err) {
              console.log(err);
                callBack(err, null);
            }
            console.log(records);
            callBack(null, records);
        });
    }
};
