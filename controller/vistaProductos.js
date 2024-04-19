export const vistaProductos = ( req , res) => {
  
    res.render("productos",{
        layout:"main",
        productos:[
            "banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate",
            ],
       // color:"banana",
        title:"Productos"
    })
}


export const getProductos = ( req , res) => {
    const producto = req.params.producto
    
	console.log('Salida de producto', producto)

    res.render("productos",{
		layout:"main",
		productos:[
			"banana",
			"cebollas",
			"lechuga",
			"papas",
			"pimenton",
			"tomate"
			
		],
		//producto:producto,
		title:"Productos"
	})
}

