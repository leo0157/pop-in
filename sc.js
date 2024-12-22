$(function(){

  // 메뉴
  $('#menu li, #bg_sub, #sub').mouseenter(function(){
    $('#bg_sub').stop().slideDown();
    $('#sub').stop().slideDown();
    $('#menu li a span').css('opacity','1');
  }).mouseleave(function(){
    $('#bg_sub').stop().slideUp();
    $('#sub').stop().slideUp();
    $('#menu li a span').css('opacity','0');
  });

  //슬라이드 배너
  $('#b_btn li').first().addClass('on');
  var v=0;
  var stimer=setInterval(autoslide,3000);
  function autoslide(){
    v=v+1;
    if(v>3)
    v=0
    var slide=-(1903*v);
    $('#b_image').animate({
      left:slide
    }, 'slow');
    $('#b_btn li').removeClass('on');
    $('#b_btn li').eq(v).addClass('on');
  }
  $('#b_btn li').click(function(){
    clearInterval(stimer);
    $('#b_btn li').removeClass('on');
    $(this).addClass('on');
    var s=$(this).index();
    var slide=-(1903*s);
    $('#b_image').animate({
      left:slide
    }, 'slow');
    v=s;
    stimer=setInterval(autoslide,3000);
  });


  // 팝업

  $('#pop a').click(function(){
    $('#pop').stop().fadeOut('fast');
  });



  // 상하이동
  $(window).scroll(function(){
    if($(document).scrollTop()>50){
      $('#sc').fadeIn();
    }else{
      $('#sc').fadeOut();
    }
  });
  $('.up').click(function(){
    //$('html').scrollTop(0);
    $('html').animate({
      scrollTop:0
    }, 'slow');
  });
  $('.down').click(function(){
    //$('html').scrollTop(1700);
    $('html').animate({
      scrollTop:$(document).height()
    }, 'slow');
  });

  // 스크롤 box
  $(window).scroll(function(){
    if($(document).scrollTop()>800){
      $('#box p').stop().animate({
        left:'100px'
      }, 'slow');
      $('#box dl').addClass('text');
    }else{
      $('#box p').stop().animate({
        left:'-700px'
      }, 'slow');
      $('#box dl').removeClass('text');
    }
  });

  // ad
  var a=$('#ad').offset(); // 좌표 - x(=left),y(=top)
  $(window).scroll(function(){
    if($(document).scrollTop()>a.top){
      $('#ad').stop().animate({
        top:$(document).scrollTop()+30
      }, 'slow');
    }else{
      $('#ad').stop().animate({
        top:'30px'
      }, 'slow');
    }
  });

  $(document).ready(function () {
    // 샘플 데이터: 날짜별 스케줄
    const scheduleData = {
      "2024-01-01": ["새해 이벤트", "신년 축제"],
      "2024-01-10": ["서버 점검", "기술 세미나"],
      "2024-01-15": ["업데이트 발표회", "버전 설명회"]
    };
  
    // 캘린더 생성 (단순히 날짜 버튼 생성)
    const daysInMonth = 31; // 예: 1월
    for (let i = 1; i <= daysInMonth; i++) {
      $("#calendar-container").append(
        `<button class="calendar-day" data-date="2024-01-${String(i).padStart(2, '0')}">${i}</button>`
      );
    }
  
    // 날짜 클릭 시 스케줄 표시
    $(".calendar-day").on("click", function () {
      const selectedDate = $(this).data("date");
      const schedules = scheduleData[selectedDate] || ["행사 없음"];
      
      // 스케줄 업데이트
      $("#schedule-list").empty();
      schedules.forEach(schedule => {
        $("#schedule-list").append(`<li>${schedule}</li>`);
      });
    });
  });
});