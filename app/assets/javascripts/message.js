$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
       `<div class="mainchat__message__upper-info__taker">
             ${message.user_name}
           </div>
           <div class="mainchat__message__upper-info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="message__text">
             ${message.content}
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="mainchat__message__upper-info__taker">
             ${message.user_name}
           </div>
           <div class="mainchat__message__upper-info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="mainchat__message__text">
             ${message.content}
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.mainchat__message').append(html);
    $('form')[0].reset();
    $('.mainchat__message').animate({ scrollTop: $('.mainchat__message')[0].scrollHeight});
    // サブミットのデフォルト効果で押したらりロードしないと押せなくなるのでpropでサブミットのdisableを上書きする！
    $('.form__submit').prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
});
})
});