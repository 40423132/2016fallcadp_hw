var tipuesearch = {"pages":[{"title":"About","url":"./pages/about/","tags":"misc","text":"2016Fall 修課成員網誌"},{"title":"1117","url":"./1117.html","tags":"HW","text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()"},{"title":"零件繪製","url":"./ling-jian-hui-zhi.html","tags":"HW","text":"cadpa作業-1 from 郭力維 on Vimeo ."},{"title":"四連桿","url":"./si-lian-gan.html","tags":"HW","text":"Solvespace 四連桿圖 w7.csv (請以滑鼠右鍵存檔) w7.slvs (請以滑鼠右鍵存檔)"},{"title":"上課筆記","url":"./shang-ke-bi-ji.html","tags":"上課筆記","text":"上課筆記 1.下載mini2016fall.7z工具 2.到mdecourse的2016fallCADP點擊fork 3.建立自己的作業倉儲，組長還須建立2016fallcadp_ag8倉儲 4.在倉儲建立gh-pages分支 5.將組別倉儲clone下來，切換到gh-pages分支 6.使用git submodule add -b gh-pages 指令將組員的作業倉儲加入子模組 7.每周定時使用 (1) git submodule init (2)git submodule update和 (3)git submodule foreach \"(git checkout gh-pages; git pull)&\"來更新 8.設定shareX的儲存位置 (1)Application settings (2)path選擇想儲存的位置即可 9.使用solvespace練習繪製零件"}]};