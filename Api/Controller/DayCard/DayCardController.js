const DayCard=require('../../Model/DayCard/DayCard')

exports.register=(req,res)=>{

     DayCard.create({
          Img:req.body.Img,
          Name:req.body.Name
     })
     .then((data)=>{
          res.send(data)
          console.log(data)
     })
     .catch((err)=>{
          console.log(err)
     })
}
exports.getCardImg=(req,res)=>{
     DayCard.find({
          _id:req.body.id
     })
     .then((data)=>{
          res.send(data)
          console.log(data)
     })
     .catch((err)=>{
          console.log(err)
     })
}
