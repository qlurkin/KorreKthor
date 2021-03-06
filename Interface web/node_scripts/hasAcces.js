const { nextTick } = require("async")

function hasAcces(req,res,next){

    if(!req.session.userId){
        return res.redirect("/auth/login")
    }

    next()
}

exports.hasAcces = hasAcces