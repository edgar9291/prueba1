var title_isCloudAnimating = false;
var title_isSnakeAnimating = false;
var title_isStarAnimating = false;
var title_isShootingStarAnimating = false;
var title_isFlashlightAnimating = false;
var title_isDropAnimating = false;
var title_isFireAnimating = false;
var title_isHandAnimating = false;
var title_leftArmMove = true;
var title_leftLeavesMove = true;
var title_isLeavesAnimating = false;
var title_isLeafAnimating = false;
var title_isFalling = false;
var title_isFalling2 = false;
var title_isFalling3 = false;
var title_isFalling4 = false;
var title_isFalling5 = false;
var title_isFalling6 = false;
var title_isFalling7 = false;
var title_isFalling8 = false;
var title_isFalling9 = false;
var title_isFalling10 = false;
var title_isPopAnimating = false;
/**
 * STOP ALL ANIMATIONS
 */
function title_stopAllAnimations(){
	title_stopClouds();
	title_stopSnake();
	title_stopStar1();
	title_stopShootingStar();
	title_stopFlashlight();
	title_stopDrop();
	title_stopFire();
	title_stopHand();
	title_stopLeaves();
	title_stopLeaf();
	title_stopPop();
}
/**
 * UNIT 1 ANIMATIONS
 */
/**
 * START CLOUDS ANIMATION
 */
function title_playClouds(){
	var speed = .2;
	var lapse = 200;
	var cloud1, cloud2;
	if(title_isCloudAnimating){
		cloud1 = $("#U1_title-cover-clouds_id")[0].style.left;
		cloud1 = parseFloat(cloud1.substring(0, cloud1.length - 1));
		if(cloud1 <= -128){
			cloud1 = cloud1+256;
			$("#U1_title-cover-clouds_id").css("left",cloud1 + "%");
			cloud1 = cloud1-speed;
		}else{
			cloud1 = cloud1-speed;
		}
		cloud2 = $("#U1_title-cover-clouds2_id")[0].style.left;
		cloud2 = parseFloat(cloud2.substring(0, cloud2.length - 1));
		if(cloud2 <= -128){
			cloud2 = cloud2+256;
			$("#U1_title-cover-clouds2_id").css("left",cloud2 + "%");
			cloud2 = cloud2-speed;
		}else{
			cloud2 = cloud2-speed;
		}
		cloud1 = cloud1 + "%";
		cloud2 = cloud2 + "%";
		$("#U1_title-cover-clouds_id").animate({ left:cloud1 }, lapse);
		$("#U1_title-cover-clouds2_id").animate({ left:cloud2 }, lapse);
		setTimeout(function() { title_playClouds() }, lapse);
	}
}
/**
 * STOP CLOUDS ANIMATION
 */
function title_stopClouds(){
	title_isCloudAnimating = false;
}
/**
 * START SNAKE ANIMATION
 */

function title_playSnake(){
	var maxTop = 15;
	var maxBottom = 27;
	var maxLeft = -12;
	var maxRight = 24;
	var nextTop, nextLeft;
	var currentTop, currentLeft;
	var normal = 0.8;
	var lapse = 500;
	var max = 1;
	var min = -1;
	if(title_isSnakeAnimating){
		currentTop = $("#U1_title-cover-dragon_id")[0].style.top;
		currentTop = parseFloat(currentTop.substring(0, currentTop.length - 1));
		currentLeft = $("#U1_title-cover-dragon_id")[0].style.left;
		currentLeft = parseFloat(currentLeft.substring(0, currentLeft.length - 1));
		nextTop = (Math.random() * (max - min) + min) * normal;
		nextLeft = (Math.random() * (max - min) + min) * normal;
		nextTop = currentTop + nextTop;
		nextLeft = currentLeft + nextLeft; 
		if(nextTop < maxTop){
			nextTop = maxTop;
		}
		if(nextTop > maxBottom){
			nextTop = maxBottom;
		}
		if(nextLeft < maxLeft){
			nextLeft = maxLeft;
		}
		if(nextLeft > maxRight){
			nextLeft = maxRight;
		}
		nextTop = nextTop + "%";
		nextLeft = nextLeft + "%";
		$("#U1_title-cover-dragon_id").animate({ left:nextLeft,top:nextTop }, lapse);
		setTimeout(function() { title_playSnake() }, lapse);
	}
}
/**
 * STOP SNAKE ANIMATION
 */
function title_stopSnake(){
	title_isSnakeAnimating = false;
}
/**
 * UNIT 2 ANIMATIONS
 */
/**
 * START STAR1 ANIMATION
 */
function title_startStar1(){
	var lapse = 100;
	var transparent1, transparent2, transparent3, transparent4;
	if(title_isStarAnimating){
		transparent1 = Math.random();
		transparent2 = Math.random();
		transparent3 = Math.random();
		transparent4 = Math.random();
		if(transparent1 < 0.6){
			transparent1 = 0.6;
		}
		if(transparent2 < 0.6){
			transparent2 = 0.6;
		}
		if(transparent3 < 0.6){
			transparent3 = 0.6;
		}
		if(transparent4 < 0.6){
			transparent4 = 0.6;
		}
		$("#U2_title-cover-shine1_id").animate({ opacity:transparent1 }, lapse);
		$("#U2_title-cover-shine2_id").animate({ opacity:transparent2 }, lapse);
		$("#U2_title-cover-shine3_id").animate({ opacity:transparent3 }, lapse);
		$("#U2_title-cover-shine4_id").animate({ opacity:transparent4 }, lapse);
		setTimeout(function() { title_startStar1() }, lapse);
	}
}
/**
 * STOP STAR1 ANIMATION
 */
function title_stopStar1(){
	title_isStarAnimating = false;
}
/**
 * START SHOOTING STAR ANIMATION
 */
function title_startShootingStar(){
	var shootingStar;
	var startPositionX, startPositionY, endPositionX, endPositionY;
	var max = 200;
	var min = 50;
	var speed = 1000;
	var inclination = 200;
	var lapse;
	if(title_isShootingStarAnimating){
		lapse = (Math.floor(Math.random() * 4000) + 1);
		shootingStar = $("#U2_title-cover-fugaz"+(Math.floor(Math.random() * 3) + 1)+"_id");
		startPositionX = (Math.random() * (max - min) + min);
		startPositionY = -20;
		shootingStar.css("left",startPositionX + "%");
		shootingStar.css("top",startPositionY + "%");
		endPositionX = startPositionX - inclination;
		endPositionY = 200;
		endPositionX = endPositionX + "%";
		endPositionY = endPositionY + "%";
		shootingStar.animate({ left:endPositionX,top:endPositionY }, speed);
		setTimeout(function() { title_startShootingStar() }, lapse);

	}
}
/**
 * STOP SHOOTING STAR ANIMATION
 */
function title_stopShootingStar(){
	title_isShootingStarAnimating = false;
}
/**
 * UNIT 3 ANIMATIONS
 */
/**
 * TURN ON THE FLASHLIGHT
 */
function title_FlashlightON(){
	$("#U3_title-cover-light_id").show();
}
/**
 * TURN OFF THE FLASHLIGHT
 */
function title_FlashlightOFF(){
	$("#U3_title-cover-light_id").hide();
}
/**
 * START FLASHLIGHT ANIMATION
 */
function title_startFlashlight(){
	var lapse;
	var lapseOFF;
	var minON = 150;
	if(title_isFlashlightAnimating){
		lapse = (Math.floor(Math.random() * 6000) + 1)+4000;
		lapseOFF = (Math.floor(Math.random() * 4000) + 1)+minON;
		setTimeout(title_FlashlightON, 20);
		setTimeout(title_FlashlightOFF, 40);
		setTimeout(title_FlashlightON, 60);
		setTimeout(title_FlashlightOFF, 80);
		setTimeout(title_FlashlightON, 100);
		setTimeout(title_FlashlightOFF, 120);
		setTimeout(title_FlashlightON, 140);
		setTimeout(title_FlashlightOFF, lapseOFF);
		setTimeout(function() { title_startFlashlight() }, lapse);
	}
}
/**
 * STOP FLASHLIGHT ANIMATION
 */
function title_stopFlashlight(){
	title_isFlashlightAnimating = false;
}
/**
 * START DROP ANIMATION
 */
function title_startDrop(){
	var drop;
	var startPositionX, endPositionX;
	var startPositionY = 0;
	var endPositionY = 110;
	var max = 90;
	var min = 60;
	var speed = 1100;
	var lapse;
	if(title_isDropAnimating){
		lapse = (Math.floor(Math.random() * 3000) + 1);
		drop = $("#U3_title-cover-drop"+(Math.floor(Math.random() * 2) + 1)+"_id");
		startPositionX = (Math.random() * (max - min) + min);
		drop.css("left",startPositionX + "%");
		drop.css("top",startPositionY + "%");
		endPositionX = startPositionX + "%";
		endPositionY = endPositionY + "%";
		drop.animate({ left:endPositionX,top:endPositionY }, speed);
		setTimeout(function() { title_startDrop() }, lapse);
	}
}
/**
 * STOP DROP ANIMATION
 */
function title_stopDrop(){
	title_isDropAnimating = false;
}
/**
 * UNIT 4 ANIMATIONS
 */
/**
 * HIDES ALL FIRES
 */
function hideAllFire(){
	$("#U4_title-cover-fire1_id").hide();
	$("#U4_title-cover-fire2_id").hide();
}
/**
 * START FIRE ANIMATION
 */
function title_startFire(){
	var lapse = 10;
	var fire;
	if(title_isFireAnimating){
		hideAllFire();
		fireID = Math.floor(Math.random() * 3);
		if(fireID > 0){
			$("#U4_title-cover-fire"+fireID+"_id").show();
		}
		setTimeout(function() { title_startFire() }, lapse);
	}
	
}
/**
 * STOP FIRE ANIMATION
 */
function title_stopFire(){
	title_isFireAnimating = false;
}
/**
 * UNIT 5 ANIMATIONS
 */
$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};
/**
 * MOVE HAND UP
 */
function title_handUP(lapse){
	$("#U5_title-cover-arm_id").animateRotate(10, lapse, 'linear', function () {
		
	});
}
/**
 * MOVE HAND DOWN
 */
function title_handDown(lapse){
	$("#U5_title-cover-arm_id").animateRotate(10, lapse, 'linear', function () {
		
	});
}
/**
 * START HAND ANIMATION
 */
function title_startHand(){
	var lapse = 1000;
	if(title_isHandAnimating){
		if(title_leftArmMove){
			title_handUP(lapse);
			title_leftArmMove = false;
		}else{
			title_handDown(lapse);
			title_leftArmMove = true;
		}
		setTimeout(function(){title_startHand()}, lapse);
	}
	
}
/**
 * STOP HAND ANIMATION
 */
function title_stopHand(){
	title_isHandAnimating = false;
}
/**
 * MOVE LEAVES LEFT
 */
function title_leavesLeft(lapse){
	$("#U5_title-cover-leaves1_id").animate({ left:"2.7%"}, lapse);
	$("#U5_title-cover-leaves2_id").animate({ left:"72%"}, lapse);
}
/**
 * MOVE LEAVES RIGHT
 */
function title_leavesRight(lapse){
	$("#U5_title-cover-leaves1_id").animate({ left:"3%"}, lapse);
	$("#U5_title-cover-leaves2_id").animate({ left:"72.3%"}, lapse);
}
/**
 * START LEAVES ANIMATION
 */
function title_startLeaves(){
	var lapse = 600;
	var lapse2 = 300;
	if(title_isLeavesAnimating){
		if(title_leftLeavesMove){
			title_leavesLeft(lapse2);
			title_leftLeavesMove = false;
			lapse = lapse2;
		}else{
			title_leavesRight(lapse);
			title_leftLeavesMove = true;

		}
		setTimeout(function(){title_startLeaves()}, lapse);
	}
	
}
/**
 * STOP LEAVES ANIMATION
 */
function title_stopLeaves(){
	title_isLeavesAnimating = false;
}
/**
 * MOVE LEAF RIGHT
 */
function title_leafRight(speed, endPositionX, endPositionY, leaf){
	leaf.animate({ left:""+endPositionX+"%", top:endPositionY+"%"}, speed, "easeOutQuart", function (){
		if(!title_isLeafAnimating){
		leaf.hide();
		leaf.animate({ top:"8%"}, 10, "easeOutQuart", function(){
			leaf.show();
			title_isFalling = false;
		});
	}
	});
}
/**
 * START DROP LEAF ANIMATION
 */
function title_droptLeaf(drop, dropImg, startPositionX, startPositionY, title_leftLeafMove, leafNumber){
	var startPositionXdelta, endPositionX;
	var endPositionY;
	var resistance = 2;
	var max = 5;
	var min = 1;
	var speed = (Math.random() * (1200 - 600) + 600);
	var maxTop = 64;
	if((title_isFalling && leafNumber == 1)
		  || (title_isFalling2 && leafNumber == 2)
		  || (title_isFalling3 && leafNumber == 3)
		  || (title_isFalling4 && leafNumber == 4) 
		  || (title_isFalling5 && leafNumber == 5) 
		  || (title_isFalling6 && leafNumber == 6) 
		  || (title_isFalling7 && leafNumber == 7) 
		  || (title_isFalling8 && leafNumber == 8) 
		  || (title_isFalling9 && leafNumber == 9) 
		  || (title_isFalling10 && leafNumber == 10) ){
		startPositionXdelta = (Math.random() * (max - min) + min);
		endPositionY = startPositionY + (startPositionXdelta / resistance);
		if(endPositionY >= maxTop){
			endPositionY = maxTop;
			switch(leafNumber){
				case(1):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling = false;
					});
					
					return;
				case(2):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling2 = false;
					});
					return;
				case(3):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling3 = false;
					});
					return;
				case(4):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling4 = false;
					});
					return;
				case(5):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling5 = false;
					});
					return;
				case(6):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling6 = false;
					});
					return;
				case(7):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling7 = false;
					});
					return;
				case(8):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling8 = false;
					});
					return;
				case(9):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling9 = false;
					});
					return;
				case(10):
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling10 = false;
					});
					return;
				default:
					drop.hide();
					drop.animate({ top:"8%"}, 0, "easeOutQuart", function(){
						drop.show();
						title_isFalling = false;
					});
					return;
			}
			
		}
		if(title_leftLeafMove){
			endPositionX = startPositionX - startPositionXdelta;
			dropImg.attr("src", "img/unidad5/portada/hoja1.png");
			title_leafRight(speed, endPositionX, endPositionY, drop);
			title_leftLeafMove = false;
		}else{
			endPositionX = startPositionX + startPositionXdelta;
			dropImg.attr("src", "img/unidad5/portada/hoja2.png");
			title_leafRight(speed, endPositionX, endPositionY, drop);
			title_leftLeafMove = true;
		}

		setTimeout(function() { title_droptLeaf(drop, dropImg, endPositionX, endPositionY, title_leftLeafMove, leafNumber) }, speed);
	}else{
		
	}
	
}
/**
 * START DROP LEAF ANIMATION
 */
function title_startLeaf(){
	var drop = $("#U5_title-cover-leaf1_id");
	var dropImg = drop.find('#U5_title-cover-leaf1_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling == false){
		//$("#U5_title-cover-leaf1_id").show();
		title_isFalling = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 1);
		setTimeout(function() { title_startLeaf() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling == true){
		setTimeout(function() { title_startLeaf() }, lapse);
	}
		
	
	
}
/**
 * START DROP LEAF ANIMATION2
 */
function title_startLeaf2(){
	var drop = $("#U5_title-cover-leaf2_id");
	var dropImg = drop.find('#U5_title-cover-leaf2_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling2 == false){
		//$("#U5_title-cover-leaf2_id").show();
		title_isFalling2 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 2);
		setTimeout(function() { title_startLeaf2() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling2 == true){
		setTimeout(function() { title_startLeaf2() }, lapse);
	}
	
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf3(){
	var drop = $("#U5_title-cover-leaf3_id");
	var dropImg = drop.find('#U5_title-cover-leaf3_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling3 == false){
		title_isFalling3 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 3);
		setTimeout(function() { title_startLeaf3() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling3 == true){
		setTimeout(function() { title_startLeaf3() }, lapse);
	}
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf4(){
	var drop = $("#U5_title-cover-leaf4_id");
	var dropImg = drop.find('#U5_title-cover-leaf4_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling4 == false){
		title_isFalling4 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 4);
		setTimeout(function() { title_startLeaf4() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling4 == true){
		setTimeout(function() { title_startLeaf4() }, lapse);
	}
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf5(){
	var drop = $("#U5_title-cover-leaf5_id");
	var dropImg = drop.find('#U5_title-cover-leaf5_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling5 == false){
		title_isFalling5 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 5);
		setTimeout(function() { title_startLeaf5() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling5 == true){
		setTimeout(function() { title_startLeaf5() }, lapse);
	}
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf6(){
	var drop = $("#U5_title-cover-leaf6_id");
	var dropImg = drop.find('#U5_title-cover-leaf6_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling6 == false){
		title_isFalling6 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 6);
		setTimeout(function() { title_startLeaf6() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling6 == true){
		setTimeout(function() { title_startLeaf6() }, lapse);
	}else if(!title_isLeafAnimating && title_isFalling6 == true){
		drop.hide();
		drop.animate({ top:"8%"}, 10, "easeOutQuart", function(){
			drop.show();
			title_isFalling6 = false;
		});
	}
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf7(){
	var drop = $("#U5_title-cover-leaf7_id");
	var dropImg = drop.find('#U5_title-cover-leaf7_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling7 == false){
		title_isFalling7 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 7);
		setTimeout(function() { title_startLeaf7() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling7 == true){
		setTimeout(function() { title_startLeaf7() }, lapse);
	}
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf8(){
	var drop = $("#U5_title-cover-leaf8_id");
	var dropImg = drop.find('#U5_title-cover-leaf8_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling8 == false){
		title_isFalling8 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 8);
		setTimeout(function() { title_startLeaf8() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling8 == true){
		setTimeout(function() { title_startLeaf8() }, lapse);
	}
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf9(){
	var drop = $("#U5_title-cover-leaf9_id");
	var dropImg = drop.find('#U5_title-cover-leaf9_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling9 == false){
		title_isFalling9 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 9);
		setTimeout(function() { title_startLeaf9() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling9 == true){
		setTimeout(function() { title_startLeaf9() }, lapse);
	}
}
/**
 * START DROP LEAF ANIMATION3
 */
function title_startLeaf10(){
	var drop = $("#U5_title-cover-leaf10_id");
	var dropImg = drop.find('#U5_title-cover-leaf10_img_id');
	var lapse = 1000;
	var max = 40;
	var min = 10;
	var startPositionY = 8;
	var startPositionX = (Math.random() * (max - min) + min);
	if(title_isLeafAnimating && title_isFalling10 == false){
		title_isFalling10 = true;
		title_droptLeaf(drop, dropImg, startPositionX, startPositionY, true, 10);
		setTimeout(function() { title_startLeaf10() }, lapse);
	}else if(title_isLeafAnimating && title_isFalling10 == true){
		setTimeout(function() { title_startLeaf10() }, lapse);
	}
}
/**
 * STOP LEAVF ANIMATION
 */
function title_stopLeaf(){
	title_isLeafAnimating = false;
}
/**
 * UNIT 6 ANIMATIONS
 */
/**
 * START POP ANIMATION
 */
function title_startPop(){
	var lapse = (Math.random() * (1500 - 10) + 10);
	var fireNumber = Math.floor(Math.random() * 10)+1;
	var globe = $("#U6_title-cover-globe"+fireNumber+"_id")
	var options = { percent: 100 };
	if(title_isPopAnimating){
		globe.show( "scale", options, 100, callback(globe) );
		setTimeout(function() { title_startPop() }, lapse);
	}
	
}
function callback(globe) {
      setTimeout(function() {
        globe.fadeOut();
      }, 2000 );
    };
/**
 * STOP POP ANIMATION
 */
function title_stopPop(){
	title_isPopAnimating = false;
}