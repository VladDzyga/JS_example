var numImg = 3; //Количество картинок

$(document).ready(function(){//Слайдер
  	$('.header-slider').slick({
   		arrows: false,
   		slidesToShow: 1,
   		slidesToScroll: 1,
   		autoplay: true,
   		autoplaySpeed: 2000
  	});

  	

  	$('.addButton').on('click', add);

  	function add(){//Функция, которая добовляет картинки
  		numImg++;
  		$('.images').append($('<a data-fancybox="gallery" href="img/photo-'+ numImg +'.jpg"><img src="img/photo-'+ numImg +'.jpg"></a>'));
  		if(numImg >= 12){//Если картинок 12, то кнопка добавления картинок удаляется
  			this.remove();
  		}
  		if(!($('.subButton').length)){//Проверяем существет ли кнопка для удаления картинок. Если нет, создаем её.
  			$('.buttons').append($('<button class="subButton"><i class="material-icons">exposure_neg_1</i></button>'));
  			$('.subButton').on('click', sub);
  		}
	}

	function sub(){//Функция, которая удаляет картинки
		numImg--;
  		$('.images').children().last().remove();
  		if(numImg <= 3){
  			this.remove();//Если картинок 3, то кнопка удаления картинок убирается
  		}
  		if(!($('.addButton').length)){//Проверяем существет ли кнопка для добавления картинок. Если нет, создаем её.
  			$('.buttons').prepend($('<button class="addButton"><i class="material-icons">exposure_plus_1</i></button>'));
  			$('.addButton').on('click', add);
  		}
	}
});

