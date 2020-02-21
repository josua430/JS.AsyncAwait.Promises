function requestHandler(req,res)
{
    user.findById(req.UserId, function(err, user){
        if (err){
            res.send(err);
        }else
        {
            TextTrackList.findById(user.TaskId, function(err, task){
                if (err) {
                    res.send(err);
                }else
                {
                    //other call
                }
            })
        }
    });
}