var posts=["2024/06/08/二进制的认识/","2024/06/09/简单的布尔逻辑/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };