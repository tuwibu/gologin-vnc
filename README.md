# Gologin + VNC (docker)
1. Build image
* Build có thể bị lỗi, a thử lại vài lần khi nào đc thì thôi (do apt install bị thiếu hay lỗi mạng gì đó)
```
docker compose build --no-cache
docker compose up -d
```
2. Run Docker Gologin (ko dùng compose)
```
docker run -d --name gologin1 --rm -p 5900:5900 gologin
```
3. Start VNC Services (folder vnc)
```
start 
```
4. Get toàn bộ docker container
```
http://localhost:8080/containers
```
5. Xem logs của container
```
http://localhost:8080/logs/{container_id}
```
6. Kết nối vnc
```
http://localhost:8080/vnc/index.html?host={ip_vps}&port={port}&quality={quality}
- ip_vps: ip của vps
- port: port của container
- quality: chất lượng hình ảnh (1-9)
- Ví dụ: http://localhost:8080/vnc/index.html?host=localhost&port=5900
```
hoặc
```
http://localhost:8080/vnc/index.html?path={container_id}&quality={quality}
- container_id: id của container
```