var typed = new Typed('#element', {
    strings: ['&lt;Engineer&gt;', '&lt;Web Developer&gt;'],
    typeSpeed: 65,
});
var url='https://www.youtube.com/'
function openResume(){
    window.open(url, '_blank').focus();
}
//Project Card

.card {
    display: flex;
    background-color: #1e1e1e;
    border-radius: 10px;
    overflow: hidden;
    max-width: 900px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card img {
    width: 50%;
    object-fit: cover;
}

.card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-content h1 {
    font-size: 24px;
    margin: 0 0 10px;
}

.card-content p {
    font-size: 16px;
    line-height: 1.6;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}

.tags span {
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px;
    font-size: 14px;
}

.links {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

.links a {
    text-decoration: none;
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.links a:hover {
    background-color: #0056b3;
}

.links a.github {
    background-color: #6c757d;
}

.links a.github:hover {
    background-color: #5a6268;
}