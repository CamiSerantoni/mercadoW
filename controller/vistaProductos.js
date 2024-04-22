export const vistaProductos = (req, res) => {
    const productos = ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"];
    res.render('home', {
        productos: productos
    });
};


