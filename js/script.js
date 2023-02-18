$(function() {
  // drawer.js
  $( '.drawer' ).drawer()

  // smoothscroll
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position - $( '#js-header' ).outerHeight()
      },
      speed
    );
    return false;
  });

  // wow-js
  new WOW().init()

  //google-form
  let $form = $( "#js-form")
  $form.submit(function(e) {
    $.ajax({
     url: $form.attr('action'),
     data: $form.serialize(),
     type: "POST",
     dataType: "xml",
     statusCode: {
        0: function() {
          //送信に成功したときの処理
          $form.slideUp()
          $( "#js-success" ).slideDown()
        },
        200: function() {
          //送信に失敗したときの処理
          $form.slideUp()
          $( "#js-error" ).slideDown()
        }
      }
    });
    return false;
  });

  //formの入力確認
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on( 'change', function() {
    if (
      $( '#js-form input[type="text"]' ).val() !== "" && 
      $( '#js-form input[type="email"]' ).val() !== "" && 
      $( '#js-form input[name="entry.1593047309"]' ).prop( 'checked' ) === true
    ) {
      // 全て入力された時
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
    } else {
      // 全て入力されていない時
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )

    }
  })
})