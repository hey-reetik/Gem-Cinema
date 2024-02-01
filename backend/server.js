const express =  require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true, dbName: "cinema" 
})

const moviesSchema = new mongoose.Schema({
    name: String,
    description : String,
    movie_url : String,
    rating : String,
    poster_url :String,
    trailer_url :String,
    bg_poster_url :String
})

const movies = mongoose.model('Movies',moviesSchema);

app.get('/movies',async(req,res)=>{
   await movies.find({}).then((data)=>{
    if(data && data.length !== 0){
        res.send(data).status(200);
       }else{
        res.send("No Data Found").status(404);
       }
   }).catch((err)=>{
    console.log(err);
    res.send(err).status(403);
   });
   
})

const authenticate =(req,res,next) =>{
   const {username,password} = req.headers;
   if(username == process.env.AUTH_USER && password == process.env.AUTH_PASS){
      next();
   }else{
    res.send({message: "Not Authorized"}).status(403);
   }
}

app.post('/admin/movies',authenticate,async(req,res)=>{
   const newMovie = req.body;
   if(newMovie || newMovie.length >0){
    const movieData = {
        name : newMovie.name || null,
        description : newMovie.description || null,
        movie_url : newMovie.movie_url || null,
        rating : newMovie.rating || null,
        poster_url :newMovie.poster_url ||null,
        trailer_url :newMovie.trailer_url || null,
        bg_poster_url :newMovie.bg_poster_url || null
     }
     const putMovie = new movies(movieData);
      await putMovie.save();
      res.send("Posted Success").status(200);
   }else{
    res.send("invalid request").status(403);
   }
   
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening on PORT : ${process.env.PORT}`)
})







