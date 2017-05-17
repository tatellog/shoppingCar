miAppAngular.controller('inicio', function ($scope , $location , carritoDeCompras) {
    // 4000 is the duration of the toast

    $scope.productos = [

        {
            id:1,
            nombre: "Producto 1",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            precio: 10,
            imagen: "vino.jpg",
            vm:1
        },
        {
            id:2,
            nombre: "Producto 2",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            precio: 16,
            imagen: "vino.jpg",
            vm:1
        },
        {
            id:3,
            nombre: "Producto 3",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            precio: 22,
            imagen: "vino.jpg",
            vm:1
        }
    ]


    $scope.carrito = [];

    $scope.comprar = function(_item){

        _item.ocultar = true;

        $scope.carrito.push(_item);

        carritoDeCompras.productos = $scope.carrito;

    }


    $scope.total = function(){

        var total = 0;
        for(item of $scope.carrito){

            total += item.precio;
        }

        carritoDeCompras.total = total;
        return total;

    }



    $scope.finalizar = function(){

        $location.path("/confirmacion");
    }



    $scope.totalP = function(){

        var totalC = 0;
        for(item of $scope.carrito){

            totalC += item.vm;
        }

        carritoDeCompras.totalP = totalC;
        return totalC;

    }



});