
export const vistaHome = ( req , res) => {
    console.log('Salida del home----->')
    res.render("home", {
        layout:"main",
        title : "Bienvenidos a Node Express y Handlebars 2024",
        dataCard : [
            {
                title:"Este es el titulo uno",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                url:"https://placehold.jp/300x200.png"
            },
            {
                title:"Este es el titulo dos",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                url:"https://placehold.jp/300x200.png"
            },
            {
                title:"Este es el titulo tres",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                url:"https://placehold.jp/300x200.png"
            }
        ]
    })
}