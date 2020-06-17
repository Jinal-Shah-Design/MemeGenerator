let topText, bottomText, imageURL
let makeMeme = document.querySelector("#make-meme"); 
let memeList = document.querySelector("#meme-list");

//Event listner for button click 
makeMeme.addEventListener('click',function(e) {
    e.preventDefault(); 
    //selecting HTML elements 
    topText = document.querySelector("#top-text").value;
    bottomText = document.querySelector("#bottom-text").value; 
    imageURL = document.querySelector("#imageURL"); 
    
    //Making sure there is an image URL present
    if(imageURL.value === "") { 
        alert('You must put in an Image URL to make meme'); 
        return; 
    }

    //Creating HTML elements
    let meme = document.createElement("li");
    let memeContain = document.createElement("div");
    let bottom = document.createElement("div");
    let top = document.createElement("div");
    let img = document.createElement("img");

    //setting Image source to URL and corresponding text 
    img.src = imageURL.value; 
    top.innerText = topText;
    bottom.innerText = bottomText;

    //Appending all three to a container
    memeContain.appendChild(top);
    memeContain.appendChild(bottom);
    memeContain.appendChild(img); 
    
    //Appending the container to the LI 
    meme.appendChild(memeContain);
    //Appending LI to the UL 
    memeList.appendChild(meme);
    
    //Adding classes for styling
    memeContain.classList.add('meme-container');
    top.classList.add('top');
    bottom.classList.add('bottom');
    img.classList.add('image');

    //Hover affect + Removing Meme 
    meme.addEventListener('mouseover', function(e){
        e.target.classList.toggle('hover');
    });
    meme.addEventListener('mouseout',function(e){
        e.target.classList.remove('hover');
    });
    memeContain.addEventListener('dblclick', function(e){
        e.target.parentElement.remove();
    });

    //Setting values to empty strings 
    document.querySelector("#top-text").value = ""; 
    document.querySelector("#bottom-text").value = "";
    document.querySelector("#imageURL").value = "";

});
