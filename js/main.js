$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 991) {
      $(".navbar-collapse").show();
    } else {
      $(".navbar-collapse").hide();
    }
  });
});

$(document).ready(function () {
  let comprarButtons = $(".btn-dark");

  comprarButtons.click(function (event) {
    event.preventDefault();

    let confirmar = confirm("¿Quieres comprar el producto?");

    if (confirmar) {
      alert("¡Comprado exitosamente!");
    } else {
      alert("Compra cancelada");
    }
  });
});
