import React,{useState,useEffect} from 'react';
import Article from './components/Articles';


function App() {
  const [articles,setArticles] = useState([]);
  const[subreddit , setSubreddit] = useState('webdev');


useEffect(() =>{
  fetch("https://www.reddit.com/r/" + subreddit +".json").then(res =>{
    if (res.status !=200){
      console.log("Error");
      return;
    }

    res.json().then(data => {
      if (data != null)
        setArticles(data.data.children);
    });
  }
)
}, [subreddit]);



  return (
    <div className="App">
      <header>
        <input class = "subreddit_input" onChange={e => setSubreddit(e.target.value)} value={subreddit}  onChange={ e => setSubreddit(e.target.value)}></input>
      
      </header>

      <div className="articles">
{
  (articles != null) ?  articles.map((article, index) =><Article key ={index}  article ={article.data}/>) :'' 
  
}
      </div>
    </div>
  );
}

export default App;
