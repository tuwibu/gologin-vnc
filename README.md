# Gologin + VNC (docker)
1. Build image
* Build có thể bị lỗi, a thử lại vài lần khi nào đc thì thôi (do apt install bị thiếu hay lỗi mạng gì đó)
```
docker compose build --no-cache
docker compose up -d
```
2. Run Docker Gologin và VNC
- Gologin
```
docker run -d --rm -p 5900:5900 gologin
```
- VNC
```
docker run -d -v /var/run/docker.sock:/var/run/docker.sock -e DOCKER_SOCKET=/var/run/docker.sock -p 8080:8080 vnc
```
3. Get toàn bộ docker container
```
http://localhost:8080/containers
```
4. Xem logs của container
```
http://localhost:8080/logs/{container_id}
```
5. Kết nối vnc
```
http://localhost:8080/vnc/index.html?host={ip_vps}&port={port}&quality={quality}
- ip_vps: ip của vps
- port: port của container
- quality: chất lượng hình ảnh (1-9)
- Ví dụ: http://localhost:8080/vnc/index.html?host=localhost&port=5900
```