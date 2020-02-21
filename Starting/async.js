async function requestHandler(req,res)
{
    try {
        const user = await user.findById(req.UserId);
        const task = await task.findById(user.taskId);
        
    } catch (error) {
        res.send(error);
    }
}