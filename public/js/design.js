
/** 
 * post登陆
*/
$('#admin-login').on('click', function(){
  $.ajax({
    type:'post',
    url:'/api/login',
    data: {
      passwd: $('#admin-pw').val()
    },
    async: false,
    success: function(result){
      if(result.code === 0) {
       location.href= "/system?id=admin";
      } else {
        $('.page-heading h2').html('Password Error');
      }
    }
 });
})


/** 
 * post 新增文章 提交
*/
$('.tool-add_article button').on('click', function(){
  const self = this;
  const $btn = $('.tool-add_article button');
  let data = {
    title: $('.tool-add_article input').val(),
    content: $('.tool-add_article textarea').val()
  }
  if (!data.title || !data.content) {
    $btn.html('请检查标题或内容再提交')
    return;
  }

  $btn.html('提交中...');

  $.ajax({
    type:'post',
    url:'/api/add-article',
    data: data,
    async: false,
    success: function(result){
      if(result.code === 0) {
        $btn.html('提交成功');
      } else {
        $btn.html('提交发生异常，请稍后再试');
      }
    }
  });
})


/** 
 * get 文章管理
*/
$('.tab-head').eq(1).on('click', function(){
  const $container = $('.tab-body').eq(1)
  $.ajax({
    type:'get',
    url:'/api/all-article',
    async: false,
    success: function(result){
      if(result.code === 0) {
        const data = result.data;
        let html = '<ol class="tool-font">';
        data.forEach(item => {
          html += `<li>${item.title}<a data-article-id="${item.id}" class="tool-delete" onclick="alert('功能完善中...')">删除</a></li>`
        });
        html+= '</ol>';
        console.log(html)
        $container.html(html)
      } else {
        $container.html('获取失败，请稍后再试');
      }
    }
  });
})