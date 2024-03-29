---
title: "Ubuntu 21.04 에서 카카오 톡 설치"
date: 2022-02-04
type: develop
tags:
  - Node.js
  - dev env
keywords: 
  - Node.js
  - node 버전 관리
---


# Ubuntu 21.04 에서 Kakao Talk 설치&사용

```
시스템 환경

64 bit ubuntu 21.04
```





## 1. install wine

ubuntu 에서 cpu 정보를 확인한 뒤, 해당 정보에 맞게 wine 을 설치해준다.

1. `lscpu` 명령어를 사용하여 CPU 세부 정보를 가져온다.

   ```bash
   $ lscpu
   Architecture:                    x86_64
   CPU op-mode(s):                  32-bit, 64-bit
   Byte Order:                      Little Endian
   ```

   64 bit 시스템을 실행 중임을 알 수 있다.

   

2. ubuntu repository 에서 wine을 설치한다.

   - 64 bit 사용자는 다음 명령을 실행하면 된다.

     ```bash
     sudo apt install wine64
     ```

   - 32 bit 사용자는 다음 명령어를 실행하면 된다.

     ```bash
     sudo apt install wine32
     ```



## 2. Install Kakao Talk

[링크](https://www.kakaocorp.com/page/service/service/KakaoTalk)에서 카카오톡 (windows 버전)을 다운로드 한다.  

카카오톡 설치 파일을 다운받았으면, 다운받은 폴더에서 다음 명령어를 입력하여 설치 파일을 실행한다. 

```bash
LANG="ko_KR.UTF-8" wine ~/Downloads/KakaoTalk_Setup.exe
```



윈도우에서 설치하는 것처럼 설치를 진행하면 되며, 마지막 **'설치하려는 구성 요소 선택'** 에서는 **'바탕화면에 바로가기 만들기', '빠른 실행 메뉴에 바로가기 만들기'** 를 선택해준다.


## 3. 카카오톡 언어 설정

터미널에서 아래 명령어를 입력한다.

```bash
vim ~/Desktop/카카오톡.desktop

# 또는
gedit ~/Desktop/카카오톡.desktop
```

아래처럼 wine 명령어 앞에 LANG="ko_KR.UTF-8"을 추가해준다.

```bash{3}
[Desktop Entry]
Name=카카오톡
Exec=env WINEPREFIX="/home/user/.wine" LANG="ko_KR.UTF-8"  wine-stable C:\\\\windows\\\\command\\\\start.exe /Unix /home/user/.wine/dosdevices/c:/users/Public/Desktop/카카오톡.lnk
Type=Application
StartupNotify=true
...
```

아래 명령어도 실행하여 언어설정을 추가해준다.

```bash
vim ~/.local/share/applications/wine/Programs/카카오톡/카카오톡.desktop

# 또는
gedit ~/.local/share/applications/wine/Programs/카카오톡/카카오톡.desktop
```

```bash{3}
[Desktop Entry]
Name=카카오톡
Exec=env WINEPREFIX="/home/user/.wine" LANG="ko_KR.UTF-8" wine-stable C:\\\\windows\\\\command\\\\start.exe /Unix /home/user/.wine/dosdevices/c:/ProgramData/Microsoft/Windows/Start\\ Menu/Programs/카카오톡/카카오톡.lnk
...
```

<br/>

이후, 바탕화면에서 카카오톡을 우클릭한 뒤, 'Allow Launching' 을 클릭한다.
