$(document).ready(function() {

	var playerXTurn = true;

	$('td').on('click',function() {

		if($(this).hasClass('marked-x') || $(this).hasClass('marked-o')) {
			alert('Space taken!');
			return false;
		}

		if(playerXTurn) {
			$('.player-x').removeClass('current-player');
			$('.player-o').addClass('current-player');
			$(this).addClass('marked-x');
			playerXTurn = false;
		} else {
			$('.player-x').addClass('current-player');
			$('.player-o').removeClass('current-player');
			$(this).addClass('marked-o');
			playerXTurn = true;
		}

	});

	$('.js-new-game').on('click', function() {
		$('td').removeClass('marked-x marked-o');
		$('.player-x, .player-o').removeClass('current-player')
		$('.player-x').addClass('current-player');
		var playerXTurn = true;
	})


})