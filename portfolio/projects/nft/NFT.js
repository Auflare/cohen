const NFT = {
    "colors": ['#ff269a', '#ff3814', '#ffb41f', '#231fff', '#ff1f48', '#531fff'],
    generate: (text, hash) => {
        const [canvas, image, message, background, favicon] = [
            document.getElementsByClassName('canvas')[0],
            `https://avatars.dicebear.com/api/bottts/${hash}.svg`,
            `<div contenteditable class="message" > ${text} </div>`,
            NFT.colors[Math.floor(Math.random() * NFT.colors.length)],
            document.querySelector('link[rel=icon]')
        ];
        canvas.style.background = background, document.body.style.background = background + "80";
        canvas.innerHTML = "<img src='" + image + "'/>" + message;
        favicon.href = image
    }
}