// Скрипт по переводу самого диска

// ==UserScript==
// @id          yunpan.360.cn
// @name        yunpan.360.cn
// @description Русский перевод сайта yunpan.360.cn
// @include     http://yunpan.360.cn/*
// @include     http://*.yunpan.360.cn/*
// @include     http://yunpan.cn/*
// @include     http://*.yunpan.cn/*
// @include     http://*.yun.360.cn/*
// @include     http://*360.cn/*
// @include     http://i.360.cn/*
// @match       http://yunpan.360.cn/*
// @match       http://*.yunpan.360.cn/*
// @match       http://yunpan.cn/*
// @match       http://*.yunpan.cn/*
// @match       http://*.360.cn/*
// @grant       none
// @author      Много разных людей.
// ==/UserScript==

//Перевод местами очень вольный
// Скрипт по переводу основной части сайта.

(function (window) {

var dict = {

    'title'       : '360 Cloud Drive - бесплатное, неограниченное, безопасное пространство',   // 360云盘 - 安全免费 无限空间
    'logo'        : '360 Cloud Drive',   // 360云盘
    'nav_36'      : 'Получить 36T',   // 36T免费空间
    'nav_home'    : 'Домой',   // 首页
    'nav_group'   : 'Группы',   // 共享群
    'nav_download': 'Скачать',   // 下载
    'nav_forum'   : 'Форум',   // 论坛

    'footer_agreement'  : 'Соглашение',   // 使用协议
    'footer_privacy'    : 'Конфиденциальность',   // 隐私保护
    'footer_releasenote': 'Журнал',   // 更新日志
    'footer_help'       : 'Помощь',   // 帮助中心
    'footer_forum'      : 'Форум',   // 问题反馈
    'footer_mailto'     : 'Сообщить о незаконном содержании: ',   // 违法内容举报：

    'login_title'          : 'Добро пожаловать!',   // 欢迎使用360云盘！
    'login_account'        : '№ тел. / имя / email',   // 手机号/用户名/邮箱
    'login_account_label'  : 'Логин',   // 帐号
    'login_password'       : 'Пароль',   // 请输入您的密码
    'login_password_label' : 'Пароль',   // 密码
    'login_error'          : 'Пожалуйста, введите буквы или цифры, без учета регистра',   // 请输入图中的字母或数字，不区分大小写
    'login_use'            : 'В настоящее время вы используете облако c учетной записи',   // 您当前正在使用的云盘帐号是：
    'login_phrase'         : 'Код:',   // 验证码
    'login_phrase_label'   : 'Код:',   // 验证码
    'login_lwm'            : 'Сменить рисунок',   // 点击更换图片
    "login_refreshCaptcha" : 'Сменить',   // 换一张
    'login_tipsPhraseLogin': 'Пожалуйста, введите буквы или цифры, без учета регистра',   // 请输入图中的字母或数字，不区分大小写
    'login_regNewAccount'  : 'Регистрация',   // 注册新帐号
    'login_keep'           : ' Запомнить',   //  下次自动登录
    'login_findPwd'        : 'Забыли пароль?',   // 忘记密码？
    'login_submit'         : 'Войти',   // 登录
    'login_submit_go'      : 'Вход',   // 登录中
    'login_reg'            : 'Регистрация',   // 注册360账号
    'login_goMy'           : 'Войти в облоко',   // 进入我的云盘
    'login_info_p'         : 'Вы вошли как:',   // 您当前正在使用的云盘帐号是：
    'login_logout'         : 'Выход>>',   // 更换帐号&gt;&gt;
    'login_dl_pc'          : 'PC с синхронизацией',   // PC同步版下载
    'login_dl_mac'         : 'Mac с синхронизацией',   // Mac同步版下载
    'login_qrcode'         : 'Сканировать для загрузки',   // 手机扫描 直接下载
    'login_noCookie'       : 'Для входа необходимо включить cookie',   // 浏览器已禁止设置cookie，无法正常登录，请
    'login_opencookie'     : ' Включить cookie ',   // 启用cookie
    'login_loginErrorMsg'  : 'Введите правильные данные',   //
    'login_clientBtn'      : 'PC версия',
    'login_mobileBtn'      : 'Для мобильного',

    'reg_title'          : 'Добро пожаловать в Облако 360',   // 欢迎注册360云盘
    'reg_email'          : 'Почтовый ящик',   // 邮箱
    'reg_tips_loginEmail': 'Пожалуйста, введите свой почтовый ящик, ',   // 请输入您的常用邮箱，
    'reg_fac_email'      : 'Нет почты?',   // 没有邮箱？
    'reg_password'       : 'Пароль',   // 密码
    'reg_tips_password'  : '6-20 символов (с учетом регистра)',   // 6-20个字符，（区分大小写）
    'reg_repassword'     : 'Подтвердите пароль',   // 确认密码
    'reg_tips_repassword': 'Пожалуйста, введите пароль еще раз',   // 请再次输入密码
    'reg_agree'          : ' Я прочитал и согласен',   // 我已经阅读并同意
    'reg_fac_agree'      : '《360 Условия предоставления услуг》',   // 《360用户服务条款》
    'reg_submit'         : 'Зарегистрироваться',   // 立即注册

    'my_title'              : '360 Cloud Drive - Мой диск',   // 360云盘 - 我的云盘
    'topPanel_logo'         : 'Домашняя страница',   // 云盘首页
    'topPanel_file'         : 'Файлы', // 网盘
    'topPanel_file_title'   : 'Наиболее безопасный сетевой диск', // 最安全的网络U盘
    'topPanel_xiangce'      : 'Фотоальбом', // 相册
    'topPanel_xiangce_title': 'Фотоальбом', // 相册
    'topPanel_collect'      : 'Коллекция', // 云收藏
    'topPanel_collect_title': 'Сохраненные данные из браузера', // 从浏览器保存的内容
    'topPanel_more'         : 'Больше', // 更多
    'topPanel_more_title'   : 'Еще больше облачных сервисов', // 更多云服务

    'userInfo_profile'   : 'Профиль', // 帐号中心
    'userInfo_auth'      : 'Сертификация', // 申请个人认证
    'userInfo_message'   : 'Сообщения', // 云盘消息
    'userInfo_ypLevel'   : 'Уровень', // 云盘等级
    'userInfo_volRecords': 'Записи', // 扩容记录
    'userInfo_recharge'  : 'Обновление', // 空间升级卡
    'userInfo_inviteFri' : 'Пригласить друга', // 邀请好友
    'userInfo_tpFeedback': 'Форум', // 意见反馈
    'userInfo_tpHelp'    : 'Помощь', // 帮助中心
    'userInfo_lottery'   : 'Лотерея', // 每日抽奖
    'userInfo_tpExit'    : 'Выход', // 退出云盘

    'leftPanel_file'     : 'Все файлы', // 全部文件
    'leftPanel_video'    : 'Видео', // 视频
    'leftPanel_music'    : 'Музыка', // 音乐
    'leftPanel_text'     : 'Документы', // 文档
    'leftPanel_sFile'    : 'Сейф', // 保险箱
    'leftPanel_link'     : 'Расшаренные', // 我的分享
    'leftPanel_group'    : 'Группы', // 我的共享群
    'leftPanel_recycle'  : 'Корзина', // 回收站
    'leftPanel_space'    : '++', // 扩容
    'leftPanel_copyright': 'Авторское право', // 版权保护投诉指引

    'mainPanel_search'            : 'Поиск файла',   // 当前页文件搜索
    'mainPanel_pluginTip'         : 'Новые функции! Ускоренная загрузка. Загрузка больших файлов.',   // 新！支持云加速上传啦！支持极速秒传、大文件上传、断点续传哦~
    'mainPanel_download'          : 'Установите плагин для быстрой загрузки',   // 安装云加速控件
    'mainPanel_pluginSetupSuccess': 'Установка прошла успешно',   // 上传控件安装成功，快来体验吧！

    // btns-filelist
    'toolbar_tbUpload'            : 'Загрузить',   // 上传
    'toolbar_tbNew'               : 'Новая папка',   // 新建文件夹
    'toolbar_tbOffline'           : 'Загрузить оффлайн',   // 离线下载
    'toolbar_tbDl'                : 'Скачать',   // 下载
    'toolbar_tbPackDl'            : 'Скачать',   // 下载
    'toolbar_tbDel'               : 'Удалить',   // 删除
    'toolbar_tbLink'              : 'Общий доступ',   // 分享 (Поделиться)
    'toolbar_tbLinkBatch'         : 'Общий доступ',   // 分享 (Поделиться)
    'toolbar_tbMore'              : 'Больше',   // 更多

    // btns-sfilelist
    'toolbar_tdMoveOut'           : 'Передача файлов в сейф',   // 转出文件保险箱
    'toolbar_tbLockSfile'         : 'Сразу заблокировать сейф',   // 立即锁上保险箱

    // btns-link
    'toolbar_tbLinkView'          : 'Просмотреть общие ссылки',   // 查看分享链接
    'toolbar_tbLinkDel'           : 'Отменить общий доступ',   // 取消分享
    'toolbar_tbExtractOn'         : 'Возможность извлечения кода',   // 启用提取码
    'toolbar_tbExtractOff'        : 'Отмена извлечения кода',   // 取消提取码
    'toolbar_tbLinkCopy'          : 'Копирование общей ссылки',   // 复制分享链接
    'toolbar_shareTopTip'         : 'В связи с борьбой с порнографией, функции общего доступа временно недоступны. ',   // 为配合有关部门的“扫黄打非”净网行动，云盘分享功能临时调整。
    'toolbar_shareTopTip_a'       : 'Подробнее',   // 查看详情

    // btns-recycle
    'toolbar_tbRestore'           : 'Восстановить',   // 还原文件
    'toolbar_tbDisdel'            : 'Удалить',   // 删除
    'toolbar_tbClearall'          : 'Очистить корзину',   // 清空回收站
    'toolbar_tbOpenPassword'      : 'Установить пароль',   // 对回收站启用云盘安全密码
    'toolbar_tbOpenPasswordDone'  : 'Снять пароль',   // 回收站云盘安全密码启用中

    // btns-hisfile
    'toolbar_tbHisReFile_title'   : 'Восстановить до выбранной версии',   // 还原到选中版本
    'toolbar_tbHisReFile'         : 'Восстановить',   // 穿越到选中时光号
    'toolbar_tbHisView'           : 'Посмотреть онлайн',   // 在线查看
    'toolbar_tbHisViewPic'        : 'Посмотреть онлайн',   // 在线查看
    'toolbar_tbHisDl'             : 'Скачать',   // 下载

    'toolbar_miniUpload_title': 'Загрузить файл',   // 上传文件

    // display-mode
    'toolbar_tbText_title'    : 'Просмотр в виде списка',   // 切换到列表视图
    'toolbar_tbText'          : 'Список',   // 列表视图
    'toolbar_tbPic_title'     : 'Просмотр в виде эскизов',   // 切换到大图视图
    'toolbar_tbPic'           : 'Эскизы',   // 大图标视图

    // sort
    'toolbar_name'            : 'Имя',   // 文件名
    'toolbar_fsize'           : 'Размер',   // 大小
    'toolbar_newUpload'       : 'Последние',   // 最近上传 (Недавно загруженные)
    'toolbar_fmtime'          : 'Дата',   // 修改日期
    'toolbar_delDate'         : 'Дата',   // 删除日期
    'toolbar_shareDate'       : 'Дата',   // 日期

    'crumb_back'         : 'Назад',   // 返回上一级
    'crumb_firstItem'    : 'Все файлы',   // 全部文件
    'crumb_recyclePrompt': '(Совет: файлы в корзине не занимают места, и сохраняются в течение 90 дней, после чего будут автоматически удалены.)',   // （温馨提示：回收站文件不占用您云盘空间，保留90天后将自动删除。）

    'column_name': 'Имя файла',   // 文件名
    'column_size': 'Размер',   // 大小
    'column_time': 'Дата',   // 修改日期
    'column_code': 'Код',   // 提取码
    'column_hit' : 'Загрузки',   // 下载次数
    'column_path' : 'Каталог',   // 所在目录

    'fileListHistory_columnHisversionid': 'Версия',   // 时光号
    'fileListHistory_columnHissize'     : 'Размер',   // 大小
    'fileListHistory_columnHistime'     : 'Дата изменения',   // 修改日期

    'loadingMask': 'Загрузка списка файлов...',   // 加载文件列表中...
    'dropOverlay': 'Перетащите файлы для загрузки',   // 将文件拖放至此可以上传

    // sfile
    'safe_openPass'       : 'Войти',   // 启用保险箱
    'safe_previewInitFile': 'Узнать',   // 简单了解一下

    // x-yp
    'x_rename'            : 'Переименовать',   // 重命名
    'x_sfilemove'         : 'Переместить',   // 移动
    'x_moveoutsfile'      : 'Из сейфа',   // 转出文件保险箱
    'x_filehistory'       : 'История',   // 文件时光机
    'x_move'              : 'Переместить',   // 移动
    'x_moveinsfile'       : 'В сейф',   // 转入文件保险箱
    'x_offline'           : 'Загрузить оффлайн',   // 离线下载
    'x_opendoc'           : 'Посмотреть онлайн',   // 在线查看
    'x_dl'                : 'Скачать',   // 下载
    'x_packDl'            : 'Скачать',   // 下载
    'x_del'               : 'Удалить',   // 删除
    'x_restore'           : 'Восстановить',   // 还原
    'x_diskdel'           : 'Удалить',   // 删除
    'x_moveinfile'        : 'В сейф',   // 转入文件保险箱
    'x_link'              : 'Общий доступ',   // 分享
    'x_linkBatch'         : 'Общий доступ',   // 分享
    'x_dellink'           : 'Отменить общий доступ',   // 取消分享
    'x_linkView'          : 'Просмотреть ссылки',   // 查看分享链接
    'x_linkDel'           : 'Отменить общий доступ',   // 取消分享
    'x_linkCopy'          : 'Копировать ссылку',   // 复制分享链接
    'x_extractOn'         : 'Возможность извлечения кода',   // 启用提取码
    'x_extractOff'        : 'Отмена извлечения кода',   // 取消提取码
    'x_upload'            : 'Загрузить файл',   // 上传文件
    'x_new'               : 'Новая папка',   // 新建文件夹
    'x_refresh'           : 'Обновить',   // 刷新
    'x_copyPwd'           : 'Копировать',   // 复制

    'BasePanel_closeLink'   : 'Закрыть',   // 关闭
    'BasePanel_minimizeLink': 'Минимизитовать',   // 关闭

    "PanelUpload_hd"                : 'Загрузка файлов в облако',   // 上传文件到360云盘
    "PanelUpload_pluginTip"         : 'Установите плагин для ускорения и загрузки больших файлов. ',   // 当前浏览器可升级为“云加速上传”，支持文件秒传、断点续传、大文件上传
    "PanelUpload_pluginTip_a"       : 'Установить плагин',   // 安装升级控件
    "PanelUpload_selectFileBtn"     : 'Выбрать',   // 添加文件
    "PanelUpload_fileSelect"        : 'Файл',   // 添加文件
    "PanelUpload_folderSelect"      : 'Папку',   // 添加文件夹
    "PanelUpload_YPUpload2"         : 'Пожалуйста, выберите файл для загрузки',   // 请选择要上传的文件
    "PanelUpload_uploadDeny1"       : 'Не могут быть загружены в текущий каталог, вы можете загрузить в каталог',   // 不可上传至当前目录，可上传至“
    "PanelUpload_uploadDeny2"       : 'и его подпапки',   // ”中及其子文件
    "PanelUpload_uploadDeny_s"      : 'Все файлы',   // 全部文件
    "PanelUpload_uploadPath"        : 'В: ',   // 到：
    "PanelUpload_networkAbnormalTip": 'Проблемы с сетью, загрузка приостановлена. Пожалуйста, проверьте вашу сеть',   // 网络异常，上传暂停。请检查您的网络
    "PanelUpload_dragTip"           : 'Перетащите файлы для загрузки',   // 试试将电脑里的文件拖拽到此上传
    "PanelUpload_dragTip_p"         : '(Ваш браузер поддерживает перетаскивание)',   // （您的浏览器支持此拖拽功能）
    //    'PanelUpload_uploadTips_p1' : 'Макс. размер файла 360Мб ',   // 网页版单文件最大支持360M，
    "PanelUpload_uploadTips_p1"     : 'Для загрузки файлов больше 360Мб (до 10Гб) ',   // 网页版单文件最大支持360M，
    "PanelUpload_uploadTips_p2"     : ' для загрузки файлов 10Гб',   // ，上传10G超大文件
    "PanelUpload_uploadTips_a"      : 'установить клиент PC',   // 安装PC客户端
    "PanelUpload_uploadStatusBtn"   : 'Завершить',   // 完成
    "PanelUpload_warningNote"       : 'Инструкция',   // 上传须知
    "PanelUpload_H_tooltip"         : '360 запрещает загружать, посылать, передавать или любым другим способом размещать и/или распространять контент, который является незаконным, вредоносным, клеветническим, оскорбляет нравственность, демонстрирует (или является пропагандой) насилия и жестокости, нарушает права интеллектуальной собственности, пропагандирует ненависть и/или дискриминацию людей по расовому, этническому, половому, религиозному, социальному признакам, содержит оскорбления в адрес каких-либо лиц или организаций, содержит элементы (или является пропагандой) порнографии, детской эротики.',   // 严禁利用360云盘存储、下载、传播暴力恐怖音视频，以及其他任何非法、有害信息，一经发现将严格按照相关法律法规处理。
    "PanelUpload_em"                : 'Отменить',   // 取消
    "PanelUpload_info1"             : 'Загружено: ',   // 已上传：
    "PanelUpload_info2"             : 'Скорость: ',   // 速度：
    "PanelUpload_info3"             : 'Осталось: ',   // 剩余时间：

    "PanelOffdl_hd"            : 'Управление задачами',   // 任务管理
    "PanelOffdl_offdlTitle1"   : 'Последние ',   // 最近
    "PanelOffdl_offdlTitle2"   : ' оффлайн загрузок',   // 离线下载任务记录
    "PanelOffdl_offdlBtnCreate": 'Создать',   // 新建普通下载
    "PanelOffdl_columnName"    : 'Имя',   // 任务名
    "PanelOffdl_columnSize"    : 'Размер',   // 大小
    "PanelOffdl_columnStatus"  : 'Статус',   // 下载状态
    "PanelOffdl_columnOp"      : 'Операция',   // 操作
    "PanelOffdl_offdlSaveTip1" : 'Файлы сохраняется в ',   // 离线下载的文件统一保存到
    "PanelOffdl_offdlSaveTip2" : ' папке',   // 文件夹里
    "PanelOffdl_offdlSaveTip_s": '[специальной]',   // [来自-离线下载的文件]
    "PanelOffdl_background"    : 'В фоне',   // 后台运行
    "PanelOffdl_clean"         : 'Очистить',   // 清空历史记录

    "PanelOffdlCreate_hd"         : 'Новая загрузка в автономном режиме',   // 新建离线下载任务
    "PanelOffdlCreate_offdlTitle" : 'Пожалуйста, введите адрес ссылки, для скачивания файла:',   // 请输入要下载的文件链接地址：
    "PanelOffdlCreate_placeholder": 'Поддержка HTTP, FTP ссылок',   // 支持HTTP、FTP链接下载
    "PanelOffdlCreate_cancel"     : 'Отмена',   // 取消
    "PanelOffdlCreate_start"      : 'Начать',   // 开始下载

    'PanelFileBox_hd'    : 'Переместить файл (папку)',   // 移动文件（夹）
    'PanelFileBox_msg'   : 'Выберите место для перемещения',   // 选择移动到的位置
    'PanelFileBox_move'  : 'Переместить',   // 确定移动
    'PanelFileBox_cancel': 'Отмена',   // 取消

    'PanelLottery_content0_p1'   : 'Вы выиграли ',   // 恭喜您，本次抽奖获得了
    'PanelLottery_content0_p2'   : ' свободного места.',   // 永久免费空间。
    'PanelLottery_stars'         : 'Удача: ',   // 幸运指数：
    'PanelLottery_sina'          : 'В Weibo',   // 转发到新浪微博
    'PanelLottery_tencent'       : 'В Tencent',   // 转发到腾讯微博
    'PanelLottery_lotteryRecords': 'Мои призы',   // 查看抽奖记录
    'PanelLottery_content1_p1'   : 'Розыгрыш не удался!',   // 抱歉，抽奖失败！
    'PanelLottery_content1_p2'   : 'Попробуйте позже.',   // 请稍后重试。
    'PanelLottery_content2_p1'   : 'Вы участвовали!',   // 今日已抽奖！
    'PanelLottery_content2_p2'   : 'Попробуйте завтра.',   // 请明日再来。

    'dialogTitlebarClose'   : '',   // 关闭
    'dialogTitlebarMinimize': '',   // 最小化
    'dialogTitlebarMaximize': '',   // 最大化

    'player_pre'      : 'Предыдущий трек',   // 上一首
    'player_play'     : 'Пауза [Играть]',   // 暂停[播放]
    'player_next'     : 'Следующий трек',   // 下一首
    'player_cycle'    : 'Повторять',   // 顺序播放
    'player_random'   : 'Воспроизведение в случайном порядке',   // 随机播放
    'player_single'   : 'Один цикл',   // 单曲循环
    'player_volume'   : 'Без звука',   // 静音
    'player_btnPlay'  : 'Играть',   // 播放
    'player_btnPause' : 'Пауза',   // 暂停
    'player_btnDel'   : 'Удалить',   // 删除
    'player_selectAll': 'Выбрать все',   // 全选
    'player_remove'   : 'Удалить',   // 删除
    'player_empty'    : 'Очистить список',   // 清空列表


    'pageNav_info': 'По 50 объектов на странице',   // 当页已加载50条
    'pageNav_prev': '<Предыдущая',   // <上一页
    'pageNav_next': 'Следующая>',   // 下一页>

    ''                : ''   //
};

if (window.location.pathname === '/') {
    translate_header();
    translate_footer();
    translate_loginPanel();
    translate_loginSubmit();
    translate_downloadList();
    replace_slides();
}

if (window.location.pathname.indexOf('/reg') === 0) {

    translate_header();
    translate_footer();

    var reg_node = document.getElementById('reg');
    console.log(reg_node);
    reg_node.addEventListener('DOMNodeInserted', function (ev) {
        if (ev.target.id == 'modRegWrap') {
            translate_regPanel();
        }
    }, false);
}

if (window.location.pathname.indexOf('/my') === 0) {

    rename('title', 'text', dict.my_title);

    translate_topPanel();
    translate_userInfo();
    translate_leftPanel();
    translate_search();
    translate_setupPlugin();
    translate_toolbar();
    translate_fileListHistory();
    translate_column();
    translate_safe();
    translate_loadingMask();

    var target = document.getElementsByTagName('body')[0];
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            //            console.log(mutation.type);
//                console.log(mutation.target);
//                console.log(mutation.addedNodes);
            //            console.log(mutation.removedNodes);

            if (mutation.addedNodes[0].id === 'loadingMask') {
                translate_loadingMask();
            }
            if (mutation.addedNodes[0].id === 'dropOverlay') {
                translate_dropOverlay();
            }
            if (mutation.target.classList.contains('toolbar')) {
                translate_toolbar();
            }
            if (mutation.target.id === 'crumb') {
                translate_crumb();
            }
            if (mutation.target.classList.contains('path-item')) {
                translate_crumb();
            }
            if (mutation.target.id === 'fileListHead') {
                translate_column();
            }
            if (mutation.addedNodes[0].id === 'sfile-openSfile') {
                translate_column();
            }
            if (mutation.addedNodes[0].id === 'list') {
                translate_copyBox();
            }
            if (mutation.addedNodes[0].id === 'x-yp-1') {
                translate_x_yp_1();
            }
            if (mutation.addedNodes[0].id === 'x-yp-2') {
                translate_x_yp_2();
            }
            if (mutation.addedNodes[0].id === 'x-yp-3') {
                translate_x_yp_3();
            }
            if (mutation.addedNodes[0].id === 'x-yp-4') {
                translate_x_yp_4();
            }
            translate_toolbar();
            translate_crumb();
            translate_column();
            translate_loadingMask();
            if (mutation.addedNodes.length) {
                var i;
                for (i = 0; i < mutation.addedNodes.length; i++) {
                    if (mutation.addedNodes[i].classList.contains('file-list-head')) {
                        translate_column();
                    }
                    if (mutation.addedNodes[i].classList.contains('page-nav')) {
                        translate_pageNav();
                    }
                }
            }
            if (mutation.addedNodes[0].classList.contains('panel')) {
                if (mutation.addedNodes[0].getElementsByClassName('upload-toolbar').length) {
                    translate_PanelUpload(mutation.addedNodes[0].id);
                    create_observerPanel(mutation.addedNodes[0], translate_PanelUpload);
                }
                if (mutation.addedNodes[0].getElementsByClassName('offdl-dia').length) {
                    translate_PanelOffdl(mutation.addedNodes[0].id);
                    create_observerPanel(mutation.addedNodes[0], translate_PanelOffdl);
                }
                if (mutation.addedNodes[0].getElementsByClassName('offdl-dia-create').length) {
                    translate_PanelOffdlCreate(mutation.addedNodes[0].id);
                }
                if (mutation.addedNodes[0].getElementsByClassName('fileBox').length) {
                    translate_PanelFileBox(mutation.addedNodes[0].id);
                    create_observerPanel(mutation.addedNodes[0], translate_PanelFileBox);
                }
                if (mutation.addedNodes[0].getElementsByClassName('sina').length) {
                    translate_PanelLottery(mutation.addedNodes[0].id);
                }
            }
            if (mutation.addedNodes[0].classList.contains('mc-player')) {
                mutation.addedNodes[0].id = 'mc-player_';
                translate_McPlayer();
                create_observerPanel(mutation.addedNodes[0], translate_McPlayer);
            }
        });
    });
    var config = {
        attributes   : false,
        childList    : true,
        characterData: false,
        subtree      : true
    };
    observer.observe(target, config);
}

function rename(sel, attr, text, nn) {
    var noda;
    nn = nn || 0;
    if (noda = document.querySelectorAll(sel)) {
        for (var i = 0; i < noda.length; i++) {
            switch (attr) {
                case 'text':
                    var ch = noda[i].childNodes;
                    for (var j = nn; j < ch.length; j++) {
                        if (ch[j].nodeName === '#text') {
                            ch[j].textContent = text;
                            break;
                        }
                    }
                    break;
                case 'title':
                    noda[i].title = text;
                    break;
                case 'placeholder':
                    noda[i].placeholder = text;
                    break;
                case 'value':
                    noda[i].value = text;
                    break;
                default:
                    break;
            }
        }
    }
}

function translate_header() {
    rename('title', 'text', dict.title);
    rename('a.logo', 'text', dict.logo);
    rename('.nav a[href="http://huodong.yunpan.360.cn/xt"]', 'text', dict.nav_36);
    rename('.nav a[href="/"]', 'text', dict.nav_home);
    rename('.nav a[href="http://qun.yunpan.360.cn/"]', 'text', dict.nav_group);
    rename('.nav a[href="/index/download"]', 'text', dict.nav_download);
    rename('.nav a[href^="http://bbs.360safe.com/forum.php"]', 'text', dict.nav_forum);
    document.getElementsByClassName('nav')[0].getElementsByTagName('li')[0].style.padding = '0 30px 0 0';
}

function translate_footer() {
    rename('.footer a[href="/resource/html/agreement.html"]', 'text', dict.footer_agreement);
    rename('.footer a[href="http://www.360.cn/privacy/v2/360yunpan.html"]', 'text', dict.footer_privacy);
    rename('.footer a[href="/index/releasenote"]', 'text', dict.footer_releasenote);
    rename('.footer a[href="/index/help"]', 'text', dict.footer_help);
    rename('.footer a[href^="http://bbs.360safe.com/forum.php"]', 'text', dict.footer_forum);
    rename('.footer a[href="mailto:360report@360.cn"]', 'text', dict.footer_mailto);
}

function translate_loginPanel() {
    rename('.login-panel h1', 'text', dict.login_title);
    rename('#modLoginWrap .login-error-msg', 'text', dict.login_error);
    rename('#loginAccount', 'placeholder', dict.login_account);
    rename('#lpassword', 'placeholder', dict.login_password);
    rename('#phraseLogin', 'placeholder', dict.login_phrase);
    rename('#loginForm label[for="iskeepalive"]', 'text', dict.login_keep);
    rename('#findPwd', 'text', dict.login_findPwd);
    rename('#loginSubmit', 'value', dict.login_submit);
    rename('.login-panel a[href="http://yunpan.360.cn/reg"]', 'text', dict.login_reg);
    rename('#infobarNoCookie', 'text', dict.login_noCookie);
    rename('#infobarNoCookie a', 'text', dict.login_opencookie);
    rename('label[for="loginAccount"]', 'text', dict.login_account_label);
    rename('label[for="lpassword"]', 'text', dict.login_password_label);
    rename('label[for="phraseLogin"]', 'text', dict.login_phrase_label);
    rename('#lwm', 'title', dict.login_lwm);
    rename('#refreshCaptchaLogin', 'text', dict.login_refreshCaptcha);
    rename('#tips-phraseLogin', 'text', dict.login_tipsPhraseLogin);
    rename('.submit .reg-new-account', 'text', dict.login_regNewAccount);
    rename('#infoPanel .go-my', 'text', dict.login_goMy);
    rename('#infoPanel p', 'text', dict.login_info_p);
    rename('#infoPanel a[href^="/user/logout"]', 'text', dict.login_logout);

    var err;
    if (err = document.querySelector('#login .login-error-msg')) {
        err.addEventListener("DOMNodeInserted", function () {
            rename('#login .login-error-msg', 'text', dict.login_loginErrorMsg);
        }, false);
    }
}

function translate_loginSubmit(dots) {
    if (!dots) dots = '';
    var target = document.getElementById('loginSubmit');
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            console.log(mutation.target);
            observer.disconnect();
            rename('#loginSubmit', 'value', dict.login_submit_go + dots);
            dots += '.';
            if (dots.length > 3) dots = 0;
            translate_loginSubmit(dots);
        });
    });
    var config = {
        attributes     : true,
        attributeFilter: ["value"],
        childList      : false,
        characterData  : false,
        subtree        : false
    };
    observer.observe(target, config);
}

function translate_downloadList() {
    rename('.download-list a[href="http://down.360safe.com/yunpan/360yunpan_setup.exe"]', 'text', dict.login_dl_pc);
    rename('.download-list a[href="http://down.360safe.com/yunpan/360yunpan_mac.pkg"]', 'text', dict.login_dl_mac);
    var dl = document.querySelectorAll('.other-list a');
    for (var i = 0; i < dl.length; i++) {
        dl[i].style.width = 'auto';
        dl[i].style.paddingLeft = '10px';
        dl[i].style.paddingRight = '10px';
    }
    var qrcode = document.getElementsByClassName('qrcode-download-desc')[0];
    qrcode.textContent = dict.login_qrcode;
    qrcode.style.width = '115px';
}

function replace_slides() {
    var slides = document.querySelectorAll('.slide img');
    for (var j = 0; j < slides.length; j++) {
        slides[j].setAttribute('src', 'http://lorempixel.com/960/388/city/' + Math.floor(Math.random() * 10));
        slides[j].parentNode.getElementsByClassName('btn')[0].style.background = 'none';
    }
}

function translate_regPanel() {
    rename('h1.reg-title', 'text', dict.reg_title);
    rename('label[for="loginEmail"]', 'text', dict.reg_email);
    rename('#tips-loginEmail', 'text', dict.reg_tips_loginEmail);
    rename('#tips-loginEmail a', 'text', dict.reg_fac_email);
    rename('label[for="password"]', 'text', dict.reg_password);
    rename('#tips-password', 'text', dict.reg_tips_password);
    rename('label[for="rePassword"]', 'text', dict.reg_repassword);
    rename('#tips-rePassword', 'text', dict.reg_tips_repassword);
    rename('label[for="is_agree"]', 'text', dict.reg_agree);
    rename('label[for="is_agree"] + a', 'text', dict.reg_fac_agree);
    rename('#regSubmitBtn', 'value', dict.reg_submit);
    rename('#regSubmitBtn', 'text', dict.reg_submit);
    document.querySelector('label[for="rePassword"]').style.left = '-105px';
    document.querySelector('label[for="rePassword"]').style.width = '95px';
    document.querySelector('label[for="loginEmail"]').style.lineHeight = '18px';
    document.querySelector('label[for="rePassword"]').style.lineHeight = '18px';
}

function translate_topPanel() {
    rename('#logo', 'title', dict.topPanel_logo);
    rename('#topPanel .pan', 'text', dict.topPanel_file);
    rename('#topPanel .pan', 'title', dict.topPanel_file_title);
    rename('#topPanel .xiangce', 'text', dict.topPanel_xiangce);
    rename('#topPanel .xiangce', 'title', dict.topPanel_xiangce_title);
    rename('#topPanel .collect', 'text', dict.topPanel_collect);
    rename('#topPanel .collect', 'title', dict.topPanel_collect_title);
    rename('#topPanel .more', 'text', dict.topPanel_more);
    rename('#topPanel .more', 'title', dict.topPanel_more_title);
    var nav_a = document.querySelectorAll('.nav-bar a');
    for (var i = 0; i < nav_a.length; i++) {
        nav_a[i].style.width = 'auto';
        nav_a[i].style.background = 'none';
        nav_a[i].style.textIndent = '0';
        nav_a[i].style.lineHeight = '56px';
        nav_a[i].style.fontSize = '20px';
        nav_a[i].style.color = '#fff';
    }
}

function translate_userInfo() {
    rename('#profile .text', 'text', dict.userInfo_profile);
    rename('#userInfo a[href="http://yunpan.360.cn/userAuth"] .text', 'text', dict.userInfo_auth);
    rename('#saveMessage .text', 'text', dict.userInfo_message);
    rename('#ypLevel .text', 'text', dict.userInfo_ypLevel);
    rename('#volRecords .text', 'text', dict.userInfo_volRecords);
    rename('#recharge .text', 'text', dict.userInfo_recharge);
    rename('#inviteFri .text', 'text', dict.userInfo_inviteFri);
    rename('#tpFeedback .text', 'text', dict.userInfo_tpFeedback);
    rename('#tpHelp .text', 'text', dict.userInfo_tpHelp);
    rename('#lottery-everyday .text', 'text', dict.userInfo_lottery);
    rename('#tpExit .text', 'text', dict.userInfo_tpExit);
    document.querySelector('.user-info-wrap').style.width = '120px';
}

function translate_leftPanel() {
    rename('#leftPanel .tab-file .text', 'text', dict.leftPanel_file);
    rename('#leftPanel .tab-video .text', 'text', dict.leftPanel_video);
    rename('#leftPanel .tab-music .text', 'text', dict.leftPanel_music);
    rename('#leftPanel .tab-text .text', 'text', dict.leftPanel_text);
    rename('#leftPanel .tab-sFile .text', 'text', dict.leftPanel_sFile);
    rename('#leftPanel .tab-link .text', 'text', dict.leftPanel_link);
    rename('#leftPanel .tab-group .text', 'text', dict.leftPanel_group);
    rename('#leftPanel .tab-recycle .text', 'text', dict.leftPanel_recycle);
    rename('#leftPanel .update-space', 'text', dict.leftPanel_space);
    rename('#leftPanel .copyright-protect a', 'text', dict.leftPanel_copyright);
}

function translate_search() {
    rename('#searchPlaceholder', 'text', dict.mainPanel_search);
    rename('#searchInput', 'placeholder', dict.mainPanel_search);
}

function translate_setupPlugin() {
    rename('#pluginTip span', 'text', dict.mainPanel_pluginTip);
    rename('#pluginTip .download', 'text', dict.mainPanel_download);
    rename('#pluginSetupSuccess', 'text', dict.mainPanel_pluginSetupSuccess);
}

function translate_loadingMask() {
    rename('#loadingMask span', 'text', dict.loadingMask);
    rename('.loading-mask .text', 'text', dict.loadingMask);
}

function translate_dropOverlay() {
    rename('#dropOverlay h1', 'text', dict.dropOverlay);
}

function translate_safe() {
    rename('#sfile-openSfile .openPass', 'text', dict.safe_openPass);
    rename('#sfile-openSfile .previewInitFile', 'text', dict.safe_previewInitFile);
}

function translate_copyBox() {
    rename('#fileList .copy-box a', 'text', dict.x_copyPwd);
}

function translate_toolbar_btn() {
    // btns-filelist
    rename('#tbUpload .label', 'text', dict.toolbar_tbUpload);
    rename('#tbNew .label', 'text', dict.toolbar_tbNew);
    rename('#tbOffline .label', 'text', dict.toolbar_tbOffline);
    rename('#tbDl .label', 'text', dict.toolbar_tbDl);
    rename('#tbPackDl .label', 'text', dict.toolbar_tbPackDl);
    rename('#tbDel .label', 'text', dict.toolbar_tbDel);
    rename('#tbLink .label', 'text', dict.toolbar_tbLink);
    rename('#tbLinkBatch .label', 'text', dict.toolbar_tbLinkBatch);
    rename('#tbMore .label', 'text', dict.toolbar_tbMore);

    // btns-sfilelist
    rename('#tdMoveOut .label', 'text', dict.toolbar_tdMoveOut);
    rename('#tbLockSfile .label', 'text', dict.toolbar_tbLockSfile);

    // btns-link
    rename('#tbLinkView .label', 'text', dict.toolbar_tbLinkView);
    rename('#tbLinkDel .label', 'text', dict.toolbar_tbLinkDel);
    rename('#tbExtractOn .label', 'text', dict.toolbar_tbExtractOn);
    rename('#tbExtractOff .label', 'text', dict.toolbar_tbExtractOff);
    rename('#tbLinkCopy .label', 'text', dict.toolbar_tbLinkCopy);
    rename('.share-top-tip', 'text', dict.toolbar_shareTopTip);
    rename('.share-top-tip a', 'text', dict.toolbar_shareTopTip_a);

    // btns-recycle
    rename('#tbRestore .label', 'text', dict.toolbar_tbRestore);
    rename('#tbDisdel .label', 'text', dict.toolbar_tbDisdel);
    rename('#tbClearall .label', 'text', dict.toolbar_tbClearall);
    rename('#tbOpenPassword .label', 'text', dict.toolbar_tbOpenPassword);
    rename('#tbOpenPasswordDone .label', 'text', dict.toolbar_tbOpenPasswordDone);
    document.getElementById('tbDisdel').style.width = 'auto';

    // btns-hisfile
    rename('#tbHisReFile', 'title', dict.toolbar_tbHisReFile_title);
    rename('#tbHisReFile .label', 'text', dict.toolbar_tbHisReFile);
    rename('#tbHisView .label', 'text', dict.toolbar_tbHisView);
    rename('#tbHisViewPic .label', 'text', dict.toolbar_tbHisViewPic);
    rename('#tbHisDl .label', 'text', dict.toolbar_tbHisDl);

    rename('.mini-upload', 'title', dict.toolbar_miniUpload_title);

    rename('.toolbar span[data-cn="dl"] .label', 'text', dict.toolbar_tbDl);
    rename('.toolbar span[data-cn="del"] .label', 'text', dict.toolbar_tbDel);
    rename('.toolbar span[data-cn="share"] .label', 'text', dict.toolbar_tbLink);
    rename('.toolbar span[data-cn="more"] .label', 'text', dict.toolbar_tbMore);
}

function translate_toolbar_sort() {
    rename('.sort .name', 'text', dict.toolbar_name);
    rename('.sort .fsize', 'text', dict.toolbar_fsize);
    rename('.sort .new-upload', 'text', dict.toolbar_newUpload);
    rename('.sort .fmtime', 'text', dict.toolbar_fmtime);
    rename('.sort .del-date', 'text', dict.toolbar_delDate);
    rename('.sort .share-date', 'text', dict.toolbar_shareDate);
    var sort_a = document.querySelectorAll('#toolbar .sort a');
    for (var i = 0; i < sort_a.length; i++) {
        sort_a[i].style.fontFamily = 'inherit';
    }
}

function translate_displayMode() {
    rename('#tbText', 'title', dict.toolbar_tbText_title);
    rename('#tbText .cmd', 'text', dict.toolbar_tbText);
    rename('#tbPic', 'title', dict.toolbar_tbPic_title);
    rename('#tbPic .cmd', 'text', dict.toolbar_tbPic);

    rename('.display-mode .list', 'title', dict.toolbar_tbText_title);
    rename('.display-mode .thumb', 'title', dict.toolbar_tbPic_title);
}

function translate_toolbar() {
    translate_toolbar_btn();
    translate_toolbar_sort();
    translate_displayMode();
}

function translate_crumb() {
    var crumb;
    rename('#crumb .back', 'text', dict.crumb_back);
    rename('#crumb .first-item', 'text', dict.leftPanel_file);
    rename('#crumb .first-item', 'title', dict.leftPanel_file);
    rename('#crumb .gohome', 'text', document.querySelector('#leftPanel .nav .current .text').textContent);
    rename('#crumb .gohome', 'title', document.querySelector('#leftPanel .nav .current .text').textContent);
    rename('#crumb .recycle-prompt', 'text', dict.crumb_recyclePrompt);
    rename('#videoArea .crumb-path .last-item', 'text', dict.leftPanel_video);
    rename('#videoArea .crumb-path .last-item', 'title', dict.leftPanel_video);
    rename('#musicArea .crumb-path .last-item', 'text', dict.leftPanel_music);
    rename('#musicArea .crumb-path .last-item', 'title', dict.leftPanel_music);
    rename('#textArea .crumb-path .last-item', 'text', dict.leftPanel_text);
    rename('#textArea .crumb-path .last-item', 'title', dict.leftPanel_text);
    if (crumb = document.querySelector('#crumb .back')) {
        crumb.style.width = 'auto';
    }
}

function translate_column() {
    rename('#fileListHead .column-name .file-sort', 'text', dict.column_name);
    rename('#fileListHead .column-size .file-sort', 'text', dict.column_size);
    rename('#fileListHead .column-time .file-sort', 'text', dict.column_time);
    rename('#fileListHead .column-code', 'text', dict.column_code);
    rename('#fileListHead .column-hit', 'text', dict.column_hit);

    rename('.file-list-head .column-name span', 'text', dict.column_name);
    rename('.file-list-head .column-size span', 'text', dict.column_size);
    rename('.file-list-head .column-time span', 'text', dict.column_time);
    rename('.file-list-head .column-path span', 'text', dict.column_path);
}

function translate_fileListHistory() {
    rename('.column-hisversionid span', 'text', dict.fileListHistory_columnHisversionid);
    rename('.column-hissize span', 'text', dict.fileListHistory_columnHissize);
    rename('.column-histime span', 'text', dict.fileListHistory_columnHistime);
}

function translate_x_yp_1() {
    rename('#x-yp-1 .rename .text', 'text', dict.x_rename);
    rename('#x-yp-1 .sfilemove .text', 'text', dict.x_sfilemove);
    rename('#x-yp-1 .moveoutsfile-menu .text', 'text', dict.x_moveoutsfile);
    rename('#x-yp-1 .filehistory .text', 'text', dict.x_filehistory);
}

function translate_x_yp_2() {
    rename('#x-yp-2 .rename .text', 'text', dict.x_rename);
    rename('#x-yp-2 .move .text', 'text', dict.x_move);
    rename('#x-yp-2 .moveinsfile .text', 'text', dict.x_moveinsfile);
    rename('#x-yp-2 .offline-menu .text', 'text', dict.x_offline);
    rename('#x-yp-2 .filehistory .text', 'text', dict.x_filehistory);
}

function translate_x_yp_3() {
    rename('#x-yp-3 .opendoc .text', 'text', dict.x_opendoc);
    rename('#x-yp-3 .dl .text', 'text', dict.x_dl);
    rename('#x-yp-3 .pack-dl .text', 'text', dict.x_packDl);
    rename('#x-yp-3 .del .text', 'text', dict.x_del);
    rename('#x-yp-3 .rename .text', 'text', dict.x_rename);
    rename('#x-yp-3 .move .text', 'text', dict.x_move);
    rename('#x-yp-3 .sfilemove .text', 'text', dict.x_sfilemove);
    rename('#x-yp-3 .restore .text', 'text', dict.x_restore);
    rename('#x-yp-3 .diskdel .text', 'text', dict.x_diskdel);
    rename('#x-yp-3 .moveinsfile .text', 'text', dict.x_moveinsfile);
    rename('#x-yp-3 .moveoutsfile .text', 'text', dict.x_moveoutsfile);
    rename('#x-yp-3 .filehistory .text', 'text', dict.x_filehistory);
    rename('#x-yp-3 .link .text', 'text', dict.x_link);
    rename('#x-yp-3 .link-batch .text', 'text', dict.x_linkBatch);
    rename('#x-yp-3 .dellink .text', 'text', dict.x_dellink);
    rename('#x-yp-3 .link-view .text', 'text', dict.x_linkView);
    rename('#x-yp-3 .link-del .text', 'text', dict.x_linkDel);
    rename('#x-yp-3 .link-copy .text', 'text', dict.x_linkCopy);
    rename('#x-yp-3 .extract-on .text', 'text', dict.x_extractOn);
    rename('#x-yp-3 .extract-off .text', 'text', dict.x_extractOff);
}

function translate_x_yp_4() {
    rename('#x-yp-4 .upload .text', 'text', dict.x_upload);
    rename('#x-yp-4 .new .text', 'text', dict.x_new);
    rename('#x-yp-4 .refresh .text', 'text', dict.x_refresh);
}

function translate_pageNav() {
    rename('.page-nav .nextpager-info', 'text', dict.pageNav_info);
    rename('.page-nav .nextpager-btn-prev', 'text', dict.pageNav_prev);
    rename('.page-nav .nextpager-btn-next', 'text', dict.pageNav_next);
    document.querySelector('.page-nav .nextpager-btn-prev').style.width = 'auto';
    document.querySelector('.page-nav .nextpager-btn-prev').style.marginRight = '20px';
    document.querySelector('.page-nav .nextpager-btn-next').style.width = 'auto';
    document.querySelector('.page-nav .nextpager-btn-next').style.marginRight = '20px';
}

function translate_PanelUpload(id) {
    id = '#' + id;
    rename(id + ' .hd h3', 'text', dict.PanelUpload_hd);
    rename(id + ' .plugin-tip', 'text', dict.PanelUpload_pluginTip);
    rename(id + ' .plugin-tip a', 'text', dict.PanelUpload_pluginTip_a);
    rename(id + ' .file-select', 'text', dict.PanelUpload_fileSelect);
    rename(id + ' .folder-select', 'text', dict.PanelUpload_folderSelect);
    rename(id + ' #YPUpload-2', 'title', dict.PanelUpload_YPUpload2);
    rename(id + ' .uploadDeny', 'text', dict.PanelUpload_uploadDeny1, 0);
    rename(id + ' .uploadDeny', 'text', dict.PanelUpload_uploadDeny2, 1);
    rename(id + ' .uploadDeny span', 'text', dict.PanelUpload_uploadDeny_s);
    rename(id + ' .uploadPath', 'text', dict.PanelUpload_uploadPath);

    rename(id + ' .network-abnormal-tip', 'text', dict.PanelUpload_networkAbnormalTip);
    rename(id + ' .drag-tip h1', 'text', dict.PanelUpload_dragTip);
    rename(id + ' .drag-tip p', 'text', dict.PanelUpload_dragTip_p);
    rename(id + ' .upload-tips p:first-child', 'text', dict.PanelUpload_uploadTips_p1);
    //    rename(id+' .upload-tips p:last-child', 'text', dict.PanelUpload_uploadTips_p2);
    rename(id + ' .upload-tips p:last-child', 'text', '');
    rename(id + ' .upload-tips a', 'text', dict.PanelUpload_uploadTips_a);
    rename(id + ' #uploadStatusBtn', 'text', dict.PanelUpload_uploadStatusBtn);
    rename(id + ' .minimize-link span', 'text', dict.BasePanel_minimizeLink);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
    document.querySelector(id + ' .drag-tip').style.background = 'none';
    document.querySelector(id + ' .drag-tip h1').style.display = 'block';
    document.querySelector(id + ' .drag-tip p').style.display = 'block';
    var path = document.getElementById('curUploadPath').textContent;
    var new_path = dict.leftPanel_file;
    if (path.indexOf('/') >= 0) {
        var dir = path.slice(path.indexOf('/'));
        new_path = dict.leftPanel_file + dir;
    }
    rename(id + ' #curUploadPath', 'text', new_path);
    rename(id + ' #curUploadPath', 'title', new_path);

    var btn = document.querySelector(id + ' .jx-select-file-btn');
    btn.classList.add('y-btn');
    btn.classList.add('y-btn-blue');
    if (!btn.querySelector('.text')) {
        var sp = document.createElement('span');
        sp.classList.add('text');
        sp.style.position = 'absolute';
        sp.style.width = '100%';
        sp.style.height = '100%';
        sp.style.left = '-16px';
        sp.style.top = '6px';
        sp.textContent = dict.PanelUpload_selectFileBtn;
        btn.appendChild(sp);
        document.getElementById('YPUpload-2').style.zIndex = 1;
    }
    rename(id + ' .warning-note a', 'text', dict.PanelUpload_warningNote);
    rename(id + ' #H_tooltip p', 'text', dict.PanelUpload_H_tooltip);
    rename(id + ' #H_tooltip p+p', 'text', '');

    rename(id + ' #uploadItemList .info', 'text', dict.PanelUpload_info1, 0);
    rename(id + ' #uploadItemList .info', 'text', dict.PanelUpload_info2, 2);
    rename(id + ' #uploadItemList .info', 'text', dict.PanelUpload_info3, 4);
    rename(id + ' #uploadItemList li em', 'text', dict.PanelUpload_em);
    rename(id + ' #uploadItemList li em', 'title', dict.PanelUpload_em);
}

function translate_PanelOffdl(id) {
    id = '#' + id;
    rename(id + ' .hd h3', 'text', dict.PanelOffdl_hd);
    rename(id + ' .offdl-title', 'text', dict.PanelOffdl_offdlTitle1, 0);
    rename(id + ' .offdl-title', 'text', dict.PanelOffdl_offdlTitle2, 1);
    rename(id + ' .offdl-btn-create .label', 'text', dict.PanelOffdl_offdlBtnCreate);
    rename(id + ' .column-name', 'text', dict.PanelOffdl_columnName);
    rename(id + ' .column-size', 'text', dict.PanelOffdl_columnSize);
    rename(id + ' .column-status', 'text', dict.PanelOffdl_columnStatus);
    rename(id + ' .column-op', 'text', dict.PanelOffdl_columnOp);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip1, 0);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip2, 1);
    rename(id + ' .offdl-save-tip strong', 'text', dict.PanelOffdl_offdlSaveTip_s);
    rename(id + ' .offdl-btn-box .y-btn .label', 'text', dict.PanelOffdl_background);
    rename(id + ' .offdl-btn-box .y-btn:last-child .label', 'text', dict.PanelOffdl_clean);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
}

function translate_PanelOffdlCreate(id) {
    id = '#' + id;
    rename(id + ' .hd h3', 'text', dict.PanelOffdlCreate_hd);
    rename(id + ' .offdl-title', 'text', dict.PanelOffdlCreate_offdlTitle);
    rename(id + ' .offdl-placeholder', 'text', dict.PanelOffdlCreate_placeholder);
    rename(id + ' #offdlUrl', 'placeholder', dict.PanelOffdlCreate_placeholder);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip1, 0);
    rename(id + ' .offdl-save-tip', 'text', dict.PanelOffdl_offdlSaveTip2, 1);
    rename(id + ' .offdl-save-tip strong', 'text', dict.PanelOffdl_offdlSaveTip_s);
    rename(id + ' .offdl-btn-box .y-btn', 'text', dict.PanelOffdlCreate_cancel);
    rename(id + ' .offdl-btn-box .y-btn:last-child', 'text', dict.PanelOffdlCreate_start);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
}

function translate_PanelFileBox(id) {
    id = '#' + id;
    rename(id + ' .hd h3', 'text', dict.PanelFileBox_hd);
    rename(id + ' h3.msg', 'text', dict.PanelFileBox_msg);
    rename(id + ' .root-node strong', 'text', dict.leftPanel_file);
    rename(id + ' .y-btn.move', 'text', dict.PanelFileBox_move);
    rename(id + ' .y-btn.y-btn-gray', 'text', dict.PanelFileBox_cancel);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
}

function translate_PanelLottery(id) {
    id = '#' + id;
    rename(id + ' .content0 h2+p', 'text', dict.PanelLottery_content0_p1, 0);
    rename(id + ' .content0 h2+p', 'text', dict.PanelLottery_content0_p2, 2);
    rename(id + ' .content0 p+p', 'text', dict.PanelLottery_stars);
    rename('#lotteryRecords', 'text', dict.PanelLottery_lotteryRecords);
    rename(id + ' .sina', 'text', dict.PanelLottery_sina);
    rename(id + ' .tencent', 'text', dict.PanelLottery_tencent);
    rename(id + ' .content1 p', 'text', dict.PanelLottery_content1_p1);
    rename(id + ' .content1 p+p', 'text', dict.PanelLottery_content1_p2);
    rename(id + ' .content2 p', 'text', dict.PanelLottery_content2_p1);
    rename(id + ' .content2 p+p', 'text', dict.PanelLottery_content2_p2);
    rename(id + ' .close-link span', 'text', dict.BasePanel_closeLink);
    document.querySelector(id + ' .sina').style.left = '68px';
    document.querySelector(id + ' .tencent').style.right = '30px';
}

function translate_dialogTitlebar(sel) {
    rename(sel + ' .ui-dialog-titlebar-close', 'title', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-close .ui-button-text', 'text', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize', 'title', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize .ui-button-text', 'text', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize', 'title', dict.dialogTitlebar);
    rename(sel + ' .ui-dialog-titlebar-minimize .ui-button-text', 'text', dict.dialogTitlebar);
}

function translate_McPlayer(noda) {
    if (noda) {
        noda = '#' + noda;
    } else {
        noda = '.mc-player';
    }
    translate_dialogTitlebar(noda);
    rename(noda + ' .mc-control-pre', 'title', dict.player_pre);
    rename(noda + ' .mc-control-play', 'title', dict.player_play);
    rename(noda + ' .mc-control-next', 'title', dict.player_next);
    rename(noda + ' .cycle', 'title', dict.player_cycle);
    rename(noda + ' .random', 'title', dict.player_random);
    rename(noda + ' .single', 'title', dict.player_single);
    rename(noda + ' .volume', 'title', dict.player_volume);
    rename(noda + ' .btn-play', 'title', dict.player_btnPlay);
    rename(noda + ' .btn-pause', 'title', dict.player_btnPause);
    rename(noda + ' .btn-del', 'title', dict.player_btnDel);
    rename(noda + ' .select-all span', 'text', dict.player_selectAll);
    rename(noda + ' .remove', 'text', dict.player_remove);
    rename(noda + ' .empty', 'text', dict.player_empty);
}

function create_observerPanel(node, func) {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            func(node.id);
        });
    });
    var config = {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
    };
    observer.observe(node, config);
}

})(window);

// Скрипт по переводу самого диска


(function () {

    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ? new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length;
       excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 && (',' + excludes + ',').indexOf(',' + currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

    function translate() {
        var ts = {
            
            // От SilentTwilight      
            "今日任务":"Задание",
       "每日上限次数":"Лимит",
       "通过电脑客户端登录":"Вход с приложения",
       "通过移动端登录":"Вход с мобильного приложения ",
      "手机或iPad":"Телефон, iPad",
       "通过网页版登录":"Вход с браузера",
       "成功上传文件":"Загрузка файлов",
       "成功分享文件":"Обмен файлами",
       "每日抽奖额外增加经验":"Дополнительный опыт",
       "PC打开云盘目录":"Открытие папок",
       "更多任务，敬请期待":"Следите за обновлениями",
       "完成任务":"Завершено",
       "离任务上限还有":"Можно выполнить ",
       "我的等级特权":"Мои привилегии",
       "当前":"Уровень ",
       "等级特权":"Рейтинг",
       "数值":"Значение",
       "说明":"Описание",
       "累积等级空间奖励":"Увеличение места",
       "客户端上传文件限制":"Размер файла",
       "分享流量特权":"Трафик",
       "10G":"10 Гб",
       "通过客户端上传单个文件的限制为":"Максимальный размер загружаемого файла достиг ",
       "分享文件的下载总流量已升级为无限":"Обменный трафик теперь неограничен",
       "暂未获取等级空间奖励，升至":"По достижении уровня ",
       "级可获该奖励":" вы получите ещё ",
       "1G":"1 Гб",
       "无限":"Не ограничен",
       "说明":"Описание",
       "说明":"Описание",
       "说明":"Описание",
       "说明":"Описание",
       "说明":"Описание",
            
       "可获经验值":"Опыт",
       "每成功邀请一个好友，您可获得":"За каждого приглашённого друга вы получаете ",
       "奖励空间，邀请多个最高可获":" (максимум ",
       "您受邀的好友也有":"Также приглашённый получает ",
       "额外奖励，快邀请吧！":" места в подарок!",
       "额外奖励，快邀请吧！":" места в подарок!",
       "复制链接发送给QQ、MSN、飞信等好友":"Скопируйте ссылку и отправьте друзьям:",
       "果断分享到：":"Поделиться: ",
       "邀请好友记录":"Отчёты",
       "你已成功邀请到":"Вы пригласили: ",
       "个好友，奖励空间":"чел., получили ",
       "邀请更多好友获得更多奖励，继续加油哦！":"Приглашайте ещё друзей, получайте больше места! ",
       "为什么邀请了没有奖励?":"Как получить",
       "我的等级":"Мой уровень",
       "等级规则":"Правила",
       "距离下一级还需":"Необходимо ещё ",
       "经验值：":"Опыт: ",
       "等 ：":"Уровень: ",
       "经验值":" опыта",
       "今日还有":"Сегодня можно получить ещё ",
       "经验值未领取，可做今日任务领取":" опыта",
       "今日任务" :"Задания на сегодня ",
       "（今日还可再获取 ":"(осталось получить ещё ",
       "经验值）":" опыта)",
       "今日任务":"Задание",
       "每日上限次数":"Лимит",
       "通过电脑客户端登录":"Вход с приложения",
       "通过移动端登录(手机或iPad)":"Вход с мобильного приложения",
       "通过网页版登录":"Вход с браузера",
       "成功上传文件":"Загрузка файлов",
       "成功分享文件":"Обмена файлами",
       "每日抽奖额外增加经验":"Дополнительный опыт",
       "PC打开云盘目录":"Открытие папок",
       "更多任务，敬请期待":"Следите за обновлениями",
       "完成任务":"Завершено",
       "离任务上限还有":"Можно выполнить ",
       "完成状态":"Статус",
       "完成状态":"Статус",
       "完成状态":"Статус",
       "完成状态":"Статус",
       "完成状态":"Статус",

      "扩容记录":"Расширение",
       "退出云盘":"Выход",
       "网盘的全部图片":"Изображения",
       "相册":"Изображения",
       "全部图片":"Все",
       "最近上传":"Новые",
       "文本":"Текст",
       "其他":"Прочее",
       "我的分享":"Расшарить",
       "版权保护投诉指引":"Документация (О нас)",
       "离线下载列表":"Offline-загрузчик",
       "您一共保存了":"Сохранено",
       "个内容":"шт.",
       "帐号中心":"Профиль",
       "通过Android手机抽奖":"Лотерея (Android)",
       "成功邀请1位好友":"Регистрация по инвайту",
       "首次使用手机或iPad登录云盘奖励":"Вход с телефона",
       "通过云盘PC版抽奖":"Лотерея (PC)",
       "36T升级包":"Выполнение задания",
       "首次上传文件奖励":"Первая загрузка",
       "以下是您免费扩容的记录":"Получено",
       "每日抽奖记录":"Лотерея",
       "以下是您每日抽奖的记录":"Получено",
       "全部记录":"Все записи",
       "活动记录":"Задания",
       "以下是您任务活动的记录":"Получено",
       "您暂无此种记录":"Записей нет",
       "人气PK活动":"Активность PC",
       "任务升级记录":"Задачи",
       "以下是您任务升级的记录":"Получено",
       "购买记录":"Покупка",
       "其它记录":"Другое",
       "来自浏览器":"Браузер",
       "合计":"места",
       "申请个人认证":"Сертификат",
       "为配合有关部门的“扫黄打非”净网行动，云盘分享功能临时调整。":"Все расшариваемые ссылки проверяются на порнографию. ",
       "查看详情":"Подробнее",
       "提取码":"Код",
       "最安全的网络U盘":"Мой U-диск",
       "电脑收藏夹":"Избранное PC",
       "手机收藏夹":"Мобильное избранное",
       "浏览器扩展备份":"Расширения",
       "联系人":"Контакты",
       "短信":"SMS",
       "通话记录":"История звонков",
       "网盘":"Диск",
       "温馨提示：回收站文件不占用您云盘空间，保留90天后将自动删除。":"Удалённые файлы не занимают место и будут полностью удалены через 90 дней",
       "回收站里没有资料，很干净哦~":" Корзина пуста",
       "删除日期":"Дата удаления",
       "还原文件":"Восстановить",
       "清空回收站":"Очистить",
       "对回收站启用云盘安全密码":"Защита",
       "云盘安全密码未设置，您至少需要验证密保邮箱或绑定手机号才能继续设置":"Пароль не установлен. Необходимо активировать e-mail или номер мобильного для привязки",
       "前往绑定":"Привязка",
       "未设置":"Не установлен",
       "立即验证":"Привязка",
       "更改资料":"Изменить Инфо",
       "修改密码":"Изменить пароль",
       "密码安全":"Привязка",
       "最近登录记录":"История входов",
       "上次登录时间":"Последний вход",
      "登录日期":"Дата",
      "登录时间":"Время",
       "登录IP":"IP-адрес",
       "登录城市":"Страна",
       "俄罗斯":"Россия",
       "登录版本":"Версия",
       "立即绑定":"Привязка",
       "立即设置":"Установить",
       "什么是云盘安全密码？":"Описание",
       "帐号安全中心":"Центр безопасности",
       "（绑定手机后，您可以使用手机号登录或找回密码）":"",
       "新建普通下载":"Добавить",
       "最近离线下载任务记录":"Offline-загрузки",
       "任务管理":"Задачи",
       "任务名":"Имя",
       "下载状态":"Статус",
       "删除后可在回收站还原。":"Удалённые элементы можно восстановить из Корзины",
       "您确定要删除这":"Удалить элементы: ",
       "离线下载的文件统一保存到":"Offline-загрузки сохраняются в папке ",
       "来自-离线下载的文件":"Offline-загрузки",
       "文件夹里":" ",
       "清空历史记录":"Очистить",
       "后台运行":"Скрыть",
       "新建离线下载任务":"Новая загрузка",
      "请输入要下载的文件链接地址：":"Введите адрес ссылки:",
      "支持HTTP、FTP链接下载":"Поддерживаются HTTP, FTP адреса",
      "开始下载":"Начать",
       "云盘首页":"Мой диск",
       "360云盘 - 我的云盘":"Облако 360",
       "当前页搜索":"Поиск",
       "上传文件到360云盘":"Загрузка файлов в облако",
       "当前浏览器可升级为“云加速上传”，支持文件秒传、断点续传、大文件上传":"Ускорьте загрузку, установив специальный ",
       "安装升级控件":"плагин",
       "进入我的云盘":"Войти в диск",
       "到:":"Загрузить в: ",
       "等待上传中...":"В ожидании загрузки ...",
       "恭喜您，上传成功！":"Файл загружен без ошибок",
       "已上传到根目录：":"Загружено в:",
       "网页版单文件最大支持":"Поддерживаемый размер файла: до ",
       "网页":"Страницы",
       "安装PC客户端，上传5G超大文件":"Установите плагин для поддержки размера файла до 5 Гб",
       "全部文件":"Все файлы",
       "转入文件保险箱":"В сейф",
       "文件保险箱":"Сейф",
       "保险箱":"Сейф",
       "查看分享链接":"Перейти по ссылке доступа",
       "我分享的文件":"Расшаренные файлы",
       "我的共享群":"Мои общие группы",
       "（2013年8月14日起分享流量不限量）":" (с 14.8.2013 можно расшаривать без ограничений)",
       "分享的文件":"Расшарить",
       "回收站":"Корзина",
       "热门共享群":"Топ группы",
       "文件共享群":"Группы",
       "查找群":"Найти группу",
       "创建群":"Создать группу",
       "创建":"Создать",
       "查找":"Найти",
       "返回":"Назад",
       "打包下载":"Скачать архивом",
       "离线下载":"Offline-загрузчик",
//       "最近上传":"Загрузка",
       "上传":"Загрузить",
       "新建文件夹":"Создать папку",
       "下载/转存":"Скачали/Забрали",
       "下载次数":"Число скачиваний",
       "高速下载":"Скачать",
       "下载":"Скачать",
       "删除":"Удалить",
       "确 定":"ОК",
       "取 消":"Отмена",
       "删除成功":"Успешно удалено",
       "批量分享":"Расшарить все",
       "分享文件":"Расшарить",
       "取消分享":"Отменить шару",
      "取消":"Отмена",
       "分享者":"Кто расшарил",
       "复制分享链接":"Скопировать ссылку",
       "分享":"Расшарить",
       "更多":"Еще...",
       "重命名":"Переименовать",
       "移动":"Переместить",
       "文件时光机":"История",
       "排序：":"Сортировать по:",
       "文件名":"Название",
       "名称":"Имя",
       "6-20个字符，（区分大小写）":"6-20 символов (с учетом регистра)",
       "请输入图中的字母或数字，不区分大小写":"Пожалуйста, введите буквы или цифры, без учета регистра",
       "大小":"Размер",
       "修改日期":"Изменен",
       "每日抽奖":"Бонус",
       "已经抽奖":"Бонус",
       "书籍":"Книги",
       "文档":"Документы",
       "视频":"Видео",
       "音乐":"Музыка",
       "来自-手机":"С телефона ",
       "图片":"Картинки",
       "免费扩容":"Достижения",
       "退出群":"Покинуть",
       "退出":"Выход",
       "参与云盘双蛋活动 赢大奖":"Участвуй в облачных мероприятиях с розыгрышем призов",
       "在线查看":"Online просмотр",
       "确定":"Подтвердить",
       "完成":"Готово",
       "添加文件夹":"Добавить папку",
       "添加文件":"Добавить файл",
       "群空间":"Место",
       "邀请成员":"Пригласить",
       "群设置":"Настройки",
       "举报":"Жалоба",
       "群内新文件":"История",
       "群扩容":"Бонус",
       "群信息":"Инфо",
       "通过每日签到抽奖":"Ежедневный бонус",
       "签到抽奖":"Доб. место",
       "已经签到":"Получен",
       "查看扩容记录":"История получения",
       "日期":"Дата",
       "详情":"Детали",
       "群成员":"Участник группы",
       "36T免费空间":"Получить 36 Тб",
       "首页":"Домой",
       "手机U盘":"PDA-версия",
       "论坛":"Форум",
       "注册360账号":"Регистрация",
       "忘记密码？":"Забыл пароль?",
       "下次自动登录":"Запомнить",
       "确认密码":"Еще раз",
       "验证码":"Капча",
       "请输入您的常用邮箱":"Введите реальный e-mail",
       "没有邮箱？":"Нет почты?",
       "请再次输入密码":"Повторите пароль",
       "我已经阅读并同意":" Я прочитал и согласен с",
       "360用户服务条款":"Условиями предоставления услуг",
       "（设置密保邮箱后，您可以使用密保邮箱找回密码）":"",
       "密保邮箱":"E-Mail",
       "邮箱":"Почта",
       "启用访问密码":"Включить пароль",
       "访问密码":"Пароль на доступ",
       "云盘安全密码":" Код безопасности",
       "换一张":"Обновить",
       "操作":"Действия",
       "刷新":"Обновить",
       "已选择":"Был выбран ",
       "个文件（共":" файл(а) (",
       "收藏到云盘":"Забрать",
       "转存到我的云盘":"Забрать себе",
       "我":"Я ",
       "账号安全中心":"Профиль",
       "云盘消息":"Сообщения",
       "云盘等级":"Уровень",
       "购买空间":"Купить место",
       "空间升级卡":"Ввести карту",
       "邀请好友":"Инвайты",
       "意见反馈":"Контакты",
       "帮助中心":"Помощь",
       "加入的群":"Присоединиться к группе",
       "点击进入此群":"Нажмите, чтобы присоединиться к этой группе",
       "热门群": "Топ групп",
       "恭喜你，签到成功！":"Поздравляем! вы успешно",
       "为本群抽得空间":"Принесли группе",
       "你可能会喜欢的资源":"Вам может понравиться",
       "欢迎使用360云盘！":"Добро пожаловать!",
       "您当前正在使用的云盘帐号是":"Ваш текущий аккаунт",
       "更换账号":"Сменить учетную запись",
       "空间已用":"Использовано: ",
       ",共":", из ",
       "今日已成功抽到":"Сегодня получено ",
       "查看历史记录":"Посмотреть историю",
       "当前页文件搜索":"Поиск файлов",
       "做任务免费获取更多空间":"Выполни задания, чтобы получить место",
       "免费获取奖励":"Бесплатный доступ к наградам",
       "级":" ",
       "云盘总空间":"Всего места:",
       "云盘总":"Всего",
       "可用空间":"Доступно",
       "空间":"",
       "可用":" Доступно",
       "未验证":"Не подтвержден",
       "暂无":"Отсутствует",
       "未绑定":"Отсутсвует",
       "绑定手机后，您可以使用手机号登录或找回密码":"После привязки номера, на него можно присылать логин/пароль",
       "绑定手机":"Мобильный",
      "密码":"Пароль",
       "正在保存到云盘":"Сохраняем в облако",
       "给共享群换个漂亮头像吧！":"Для этой группы можно сделать клевый аватар",
       "是否已奖励": "Получено",
       "奖励": "Получено  ",
       "账户": "Адрес",
       "注册时间": "Дата регистрации",
       "等级：": "Уровень: ",
       "共": "Всего ",
       "项":" шт.",
       "热门推荐":"Топ рекомендаций",
       "换一换":"Еще",
       "条":" шт.",
      "扩容":"Ещё",
       "最近":"Последнее",
       "年":"-",
       "月":"-",
       "日":"",
       "":" шт.",
       "？":"? ",
       "。":". ",
       "2G":"2 Гб",
        "哦！":")",
        "次":" раз",
        "获":"+",
        "MB":" Мб",
       "TB":" Тб",
       "GB":" Гб",
            //Разное
            "任务":"Задача ",
            "每":"Каждый",
            "邀请一":" приглашенный ",
            "升至":"добавляет",
            "马上点击下方按钮进入Инвайты页面，复制“邀请链接”后通过QQ，微博，EmailРасшарить给好友.":"Нажмите на кнопку ниже чтобы перейти на страницу для приглашений, и отошлите ссылку всем кому не лень чтобы получить халявное место на диске!",
            "立即邀请":"Пригласить!",
            "关注360云盘在新浪微博的官方微博":"Надо залогинится под каким то Китайским блогом типа нашего вк. Инфа тут: http://ru.wikipedia.org/wiki/Sina_Weibo  ",
            "360安全卫士用户等 特权为安全卫士用户专享特权":"Нажмите на кнопку ниже и вас перекинет на страницу с всякими бонусами за уровни и прочими плюшками. Там еще вроде можнов выполнять задания и за это вам будут давать еще больше места на диске (Куда больше то? :Д)",
            "安装云盘手机版":"Установите приложение на Iphone или Android и получите дополнительно 2ГБ ",
            "加载文件列表中":"Загрузка",
            "加载中":"Загрузка",
            "还原":"Восстановить",
            "确认清空":"Подтвердите очистку",
            "所有已Удалить的文件无法再恢复，请慎重考虑":"Все файлы после очистки будут недоступны! Файлы в корзине не занимают место вашего диска",
            "确认要":"Точно хотите ",
            "Очистить后，":"Очистить корзину? ",
            "用云盘Загрузить文件，":"Загрузить первый файл", 
            
//Страница безопасности. (http://i.360.cn/profile/accountsecurity)
      "设置密保邮箱":"Установить E-Mail",
      "为了保护您的帐号安全，操作前请您进行安全验证":"Для защиты безопасности, пожалуйста пройдите проверку",
      "验证方式":"E-Mail",
      "校验码":"Контроль",
      "校验码常见问题":"Что такое котнтроль?",
      "E-Mail与登录Почта的区别":"ВВедите дополнительный E-Mail для восстановления доступа. (В случае потери основного почтового ящика, вы можете востановить пароль дополнительным)",
      "请设置一个您的常用Почта作为E-Mail，当您忘记Пароль时，可通过E-Mail快速重置Пароль.":"Введите дополнительный E-Mail",
      "БезопасностьУровень":"Уровень безопасности",
      "低":"Слабый",
      "通过绑定Почта后，您可以使用E-Mail找回Пароль":"Дополнительный E-Mail для восстановления пароля",
      "Мобильный后，您可以使用手机找回Пароль":"Номер мобильного для восстановления пароля",
      "登录Почта：已设置，忘记Пароль时，可通过此Почта找回Пароль":"Основной E-Mail.",
      "E-Mail：Не установлен，无法通过E-Mail找回Пароль":"Дополнительный E-Mail.",
      "Мобильный：Не установлен，无法通过手机号找回Пароль":"Номер мобильного.",
      "已验证":"Установлено",
      "修改":"Изменить",
      "设置":"Установить",
      "通过绑定Почта后，您可以使用登录Почта找回Пароль.":"Основной E-Mail для восстановления пароля.",
      "密保工具":"Защита",
      "原Пароль":"Ваш пароль",
      "新Пароль":"Новый пароль",
      "确认Новый пароль":"Повторите новый пароль",
      "帐号登录保护":"Статус входов",
      "正常":"Нормальный",
      "您的帐号近期没有异常登录":"В вашу учетную запись не заходили с подозрительных IP.",
      "帐号登录记录":"История",
      "登录产品":"Устройство",
      "云盘PC客户端":"Cloud Disk 360 (PC версия)",
      "云盘Страницы版":"Cloud Disk 360 (Веб версия)",
      "乌克兰":"Украина",
      "俄罗斯":"Россия",
      "Действия记录":"История входов",
      "帐号锁定":"Заблокировать",
      "帐号被锁定后将无法在任何360产品上登录，已登录的产品也会被强制下线.":"Вы можете заблокировать аккаунт на некоторое время при помощи SMS сообщения.",
      "如何锁定帐号?":"Как заблокировать аккаунт",
      "请使用Мобильный编辑SMS":"Для блокировки аккаунта, отправьте СМС с текстом ",
      "至":"на",
      "收到锁定成功SMS通知，则Заблокировать成功.":"после успешной блокировки вам прийдет СМС сообщение.",
      "如何解除锁定?":"Как разблокировать",
      "Каждый разЗаблокировать最长时间为15天，15天后会自动解锁.":"Блокировка автоматически снимается после 15 дней от блокировки.",
      "如果想手动解除Заблокировать，Для блокировки аккаунта":"Чтобы разблокировать сейчас",
      "收到解锁成功SMS通知，则帐号解锁成功.":"после успешной разблокировки вам прийдет СМС сообщение.",
      "发送SMS将由运营商向您收取0.1元/ шт.的费用，360不会额外收取您任何费用":"Стоимость СМС 0,1 Юань, хотя скорее всего с вас возьмут больше. (0,1 юань = 0.6 руб.)",
      "帐号安全":"Безопасность",
      "Контроль常见问题":"Что такое контроль?",
      "Контроль由六位随机数字组成":"Контроль это специальный код составлен из шести случайных чисел который высилается вам на E-Mail. Новый контрольный код можно заказать после 120 секунд, первый при этом работать не будет. Контроль действителен в течении 30 минут.",
      "重新+取Контроль后，原Контроль同时失效，请在相应页面填写最新的Контроль":"Если вы заказали новый код контроля, старый больше не будет работать",
      "Контроль验证成功一 раз后即失效":"Контроль достаточно ввести только раз",
      "为了保证您可以及时收到Контроль邮件，请您尽量将登录ПочтаУстановить为主流常用Почта，如：qq、163、126、sina、sohu、gmailПочта等":"Для того чтобы 100% получить письмо с контрольным кодом, используйте современную почту. Например gmail.com , использовать мыло.ру крайне не рекомендуется.",
      "如您多 раз重发邮件后，依然没有收到Контроль，请":"Если вы неможете получить контрольный код, свяжитесь со службой поддержки нажав на эту ссылку: ",
      "Контроль有效期为30分钟，过期后请重新+取Контроль":"Контроль действителен 30 минут.",
      "Каждый隔120秒，可重新+取一 разКонтроль":"Вы можете взять новое контрольное число через 120 сек.",
            
// Профиль. (http://i.360.cn/profile)
      "资料完整度":"Статус заполнености",
      "个性头像":"Аватар",
      "基本资料":"Основная инфо",
      "详细资料":"Детали",
      "未完整填写":"Не заполнено",
      "完善所有资料可+得Получено  ":"Заполните всю информацию и получите",
      "头　像":"Аватар",
      "登录Почта":"E-Mail",
      "昵　称":"Никнейм",
      "真实姓名":"Настоящее имя",
      "性　别":"Пол",
      "男":"М",
      "女":"Ж",
      "生　":"Возраст",
      "签　名":"Подпись",
      "所有人可见":"Видно всем",
      "自己可见":"Видно себе",
      "如何填写资料+取积分":"Как заполнить информацию и взять очки?",
      "第一步,填写全部Основная инфо，+得50积分":"Заполните всю основную информацию и получите +50 очки.",
      "第二步,继续填写全部Детали，+得其余50积分":"Заполните всю дополнительную информацию и получите +50 очки.",
      "个人资料":"Профиль",
      "血　型":"Группа крови",
      "所在地":"ПОРУССКИ",
      "Изменить头像":"Изменить аватар",
      "如果无法Загрузить头像，请尝试使用":"Если вы не можете загрузить аватар, попробуйте обычный режим",
      "支持JPG、PNG、GIFКартинки类型，不能大于3M. 推荐尺寸：180PX*180PX":"Поддерживаются JPG、PNG、GIF картинки, размер не более 3 Мб. Рекомендуемый размер: 180х180.",
            
// Учетная запись. (http://i.360.cn/profile/accountmanage)
      "帐号信息":"Учетная запись",  
      "登录名":"Логин для входа",
      "您可以用以下内容登录您的360帐号":"Вы можете использовать следующие логины для входа в аккаунт:",
      "昵称":"Никнейм",
      "Никнейм不能用来登录，但可以向Прочее用户展示您的身份！":"Никнейм не может использоваться для входа в учетную запись, но с ним другие не будут видеть ваш E-Mail!",
      "帐号绑定":"Входы на других сайтах",
      "您用第三方帐号登录360各个应用时，会将您的第三方帐号与360Входы на других сайтах在一起.":"Если вы используете свой аккаунт 360 для входа на других сайтах (что маловероятно), тогда здесь будут отображены сайты на которых вы вошли.",
      "您尚Отсутсвует任何第三方帐号":"Вы не подключали свой аккаунт к другим сайтам.",
      "帐号管理":"Учетная запись",
      "Установить用户名":"Установить имя пользователя",
      "请您填写一个喜欢的用户名，今后您可使用这个用户名登录360. 用户名一经确认，不可Изменить":"Имя пользователя будет использоватся для входа на сайт. После применения изменить будет невозможно.",  
      "用户名":"Имя пользователя",
      };
        for(var t in ts) {
            findAndReplace(t,ts[t]);
        };
        setTimeout(translate, 1000);
    };

    setTimeout(translate, 1000);

})();