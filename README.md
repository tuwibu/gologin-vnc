# Gologin + VNC (docker)
1. Build image gologin
```
cd gologin
docker build --no-cache -t gologin .
```
* Build có thể bị lỗi, a thử lại vài lần khi nào đc thì thôi (do apt install bị thiếu hay lỗi mạng gì đó)
2. Build image vnc
```
cd vnc
docker build --no-cache -t vnc .
```
3. Run Docker Gologin và VNC
- Gologin
```
docker run -d --rm -p 5900:5900 gologin
```
- VNC
```
docker run -d -v /var/run/docker.sock:/var/run/docker.sock -e DOCKER_SOCKET=/var/run/docker.sock -p 8080:8080 vnc
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
7. Lệnh rút gọn
```
docker compose build --no-cache
* Build có thể bị lỗi, a thử lại vài lần khi nào đc thì thôi (do apt install bị thiếu hay lỗi mạng gì đó)
docker compose up -d
```