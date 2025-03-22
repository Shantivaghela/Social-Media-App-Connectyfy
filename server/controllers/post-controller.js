const addpost = async(req,res) =>{
try {
    const {userId,content,media} = req.body;
    console.log(req.files["post-image"]);
    console.log(media);
    
    
    res.status(201).json({message:"data saved",})
} catch (error) {
    console.log("error form post",error);
    
}
}

module.exports = {addpost}