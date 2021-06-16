

$(function(){
  // #tab 以外を非表示にする
  $('#contents div[id != "list"]').hide();

   // タブをクリック
  $("#list a").click(function(){
    // 一度全てのコンテンツを非表示にする
    $("#contents div").hide();

    // 選択されたコンテンツを再表示する
    $($(this).attr("href")).show();

    //追加。
    $('#list').show();

    // 現在のcurrentクラスを削除
    $(".current").removeClass("current");

    // 選択されたタブ（自分自身）にcurrentクラスを追加
    $(this).addClass("current");

    return false;
  });
});



