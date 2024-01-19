






async function getImage(){
    try {
        const response = await fetch(""); 
        const data = await response.json(); 


        document.getElementById("blog-photo").src = URL.createObjectURL(data.blob);
        document.getElementById('blogauthor').innerText = data.author;
        document.getElementById('mainblog-release').innerText = data.release;
        document.getElementById('mainblog-title').innerText = data.title;

        document.getElementById('mainblog-topic').innerText = data.topic;
        document.getElementById('mainblog-topic').className = 'topic-button ' + data.topic.toLowerCase();

        document.getElementById('blog-content').innerText = data.content;
        
        console.log("Inserted photo and data");

    } 
    catch(error) {
    console.error(error);
    }
}









