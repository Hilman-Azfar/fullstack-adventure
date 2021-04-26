// load data
import { stores } from "./data.js";

// create elements
// give props/class/id/content
// format into one card
{/* 
<article class="card" id="card-1">
	<img class="food-pic">
		Insert image here
        
	</img>
	<div class="content">
		<p>
			The idea of reaching the North Pole by means of balloons appears to have been
			entertained many
			years ago.
		</p>
	</div>
</article> 
*/}

// append to cards container
let $popcards = document.getElementById("popular-shops-cards");

// loop for all data
stores.popular.map((store, index) => {
	// create elements
	const article = document.createElement("article");
	const content = document.createElement("div");
    const title = document.createElement("p");
    const img = document.createElement("img");

	// set attributes
	article.setAttribute("class", "card");
    content.setAttribute("class", "content");
    article.setAttribute("id", `card-${index}`);
    img.setAttribute("class","food-pic");
	img.setAttribute("src", "https://images.unsplash.com/photo-1603073388206-82343315bdb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VzdGVybiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    title.innerHTML = store.title;

	// appendchild
    article.appendChild(img);
    content.appendChild(title);
    article.appendChild(content);
	$popcards.appendChild(article);
})