$('#alertaubicacion').click(function(){
    Swal.fire({
        title: "Se requiere permisos de ubicacion",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Permisos Aceptados",
            icon: "success"
          });
        }
      });
})