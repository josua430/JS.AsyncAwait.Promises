function requestHandler(req,res)
{
    user.findById(req.UserId)
        .then(function(user)
        {
            return TextTrackList.findById(user.TaskId);
        })
        .then(function(task){
            //other return
        })
        .catch(function(errors) {
            res.send(errors);
        });
}