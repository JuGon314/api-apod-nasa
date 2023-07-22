const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    console.log("Button pressed");
    sendApiRequest();
});

async function sendApiRequest() {
    let api_key = "VKEGBGP9nTiTiMTC3SIXTJdR0zswlGWxaipyrDtp";
    let input = document.querySelector(".input").value;
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${input}`);
    let data = await response.json();
    console.log(data);
    useApiData(data);
};

function useApiData(data) {
    document.querySelector(".nasa__title").innerHTML = data.title;

    document.querySelector(".nasa__image").innerHTML = `<img width="30%" src="${data.url}">`;
    document.querySelector(".nasa__image").style = "width=30%; height=30%;";

    document.querySelector(".nasa__description").innerHTML = data.explanation;
    document.querySelector(".nasa__description").style = "width: 80%;";
}