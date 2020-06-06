select 
p.id as post_id, 
p.author_id, p.title, p.content, p.img, 
u.username as author, 
u.profile_pic as authorPicture
from posts p 
join users u on 
u.id = p.author_id
where p.id = $2