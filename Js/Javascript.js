
const langData = {
    'en': {
        'settings': 'Settings',
        'outlook': 'Outlook',
        'outlook1': 'Light',
        'outlook2': 'Dark',
        'color': 'Color Blind',
        'color1': 'Normal',
        'color2': 'Black & White',
        'fontsize': 'Font Size',
        'fontsize1': 'Normal',
        'fontsize2': 'Large',
        'username': 'Username',
        'namenotexist': 'The username does not exist',
        'emptyusername': 'The username cannot be empty',
        'password': 'Password',
        'wrongpassword': 'Wrong Password',
        'login': 'Log in',
        'crename': 'Create a username',
        'usedname': 'The username is already in use',
        'enterpassword': 'Enter Password',
        'emptypassword': 'The password cannot be empty',
        'comfirmpassword': 'Comfirm password',
        'insamepassword': 'The two passwords do not match',
        'comfirmcre': 'Confirm creation',
        'newuser': 'New user',
        'back': 'Back',
        'oldpassword': 'Enter old password',
        'newpassword': 'Enter new password',
        'comfirm': 'Comfirm',
        'changepassword': 'Change password',
        'logout': 'Log out',
        'navHome': 'Home',
        'navt': 'Interview Question Bank',
        'navs': 'Online tutoring',
        'navd': 'Speech Interview Simulation',
        'navu': 'Text Interview Simulation',
        'navc': 'Community',
        'navm': 'Member',
        'navla': 'Language',
        'navwh': 'What is GitHub',
        'navih': 'A Open Source Platform',
        'navsh': 'Search With Filter',
        'navdh': 'Download Without Sign in',
        'navuh': 'Project Hosting',
        'navch': 'Develop Together',
        'navit': 'Our interview question bank is designed to provide job seekers with comprehensive interview preparation resources, including real and mock questions collected from free online sources and our partners. The questions are categorized by topics such as programming, system design, soft skills, and more, allowing users to practice in a targeted manner. A special feature for wrong answers helps users learn from their mistakes and improve their problem-solving skills, offering a well-rounded approach to interview preparation.',
        'navil': 'Click here or the logo in the upper right navigation bar to go to GitHub',
        'navst': 'Our online tutoring service aims to create an interactive and effective learning environment by offering video explanations, similar example problems, and recommended similar questions. Drawing on the successful experiences of platforms like Homework Help and Quark, our video tutorials not only detail the steps to solve problems but also explain concepts in a clear and accessible manner, ensuring users gain a comprehensive understanding and mastery of the subject matter. Furthermore, our intelligent recommendation system tailors similar problems for practice based on users\' learning progress and preferences, significantly enhancing their problem-solving skills and learning efficiency.',
        'navsl': 'Click here or on the "search" TAB in the navigation bar to see how it works',
        'navdt': 'Our Voice Mock Interview feature leverages cutting-edge AI technology to provide users with a simulation environment closely resembling real interviews. Users simply need to activate their microphones to commence the mock interview, during which the system analyzes key performance indicators such as speech rate and response time in real-time. Additionally, the system evaluates the interview performance by comparing the repetition rate between the user\'s responses and standard answers, culminating in a comprehensive interview report. This not only aids users in understanding their performance and areas for improvement but also boosts their confidence and preparedness for actual interviews.',
        'navdl': 'Click here or on the "download" TAB in the navigation bar to see how it works',
        'navut': 'Our Text Mock Interview feature offers users a simulated interview environment focused on written communication. Similar to the Voice Mock Interview, this feature allows users to participate in mock interviews by typing their responses, which are then intelligently analyzed based on the similarity between their responses and the standard answers. This approach is particularly beneficial for those looking to improve their written expression skills and provides an alternative for individuals who may not feel as confident in verbal communication. Through this exercise, users can gain a deeper understanding of the questions, enhance their ability to construct responses, and articulate their thoughts more precisely in actual interviews.',
        'navul': 'Click here or on the "upload" TAB in the navigation bar to see how to upload your first projecrt',
        'navct': 'Our community interaction platform encourages users to share their interview experiences and insights, incentivizing active participation through a points reward system. Here, users can freely post about their interview journeys, tips, queries, and responses, creating a mutually beneficial learning and growing environment. To maintain community order and quality, dedicated moderators oversee postings and interactions, ensuring content relevance and appropriateness. This way, our community aims to be an informative and supportive exchange hub, aiding every user in advancing their career paths.',
        'navcl': 'Click here or on the "community" TAB in the navigation bar to see how to submit your contribute to other\'s project',
        'navcm': 'Our platform features an integrated points system where users accumulate points by engaging in activities and utilizing services like video tutorials, accessing materials, participating in in-depth mock interviews, and teacher consultations. These points can be used to redeem various services and resources, as well as to elevate the user\'s membership level, unlocking additional privileges and benefits. On the membership page, users can easily manage their points balance, view membership levels, recharge, and explore a range of privileges and benefits, including exclusive offers from our partner institutions. This design aims to reward active participation, offering users more opportunities for learning and growth.',
        'navt1': 'InterviewPro',
        'navt2': 'Get offer now',
        'navbo': 'project address:https://github.com/EJkenway/Web.git',
        'snav1': 'ⅰ.Once on the site, click on the search box in the top right corner to search without registration.',
        'snav2': 'ⅱ.When you enter the keywords, you will arrive at the results page, on the left side of the page you can filter the results, '+
                    'the first part above is the type of screening results, including code, library, etc. The second part is to filter the code languages, '+
                    'including Python, C, etc.',
        'snavt': 'Search Tutorials',
        'dnavt': 'Download Tutorials',
        'dnav1': 'ⅰ.When you discover a project that piques your interest, you can easily download them and click to explore the project.',
        'dnav2': 'ⅱ.Once you\'re inside the project, you\'ll find a wealth of content. Don\'t worry, all you need to focus on is the content on the left.<br>' +
                 '&nbsp;&nbsp;∙&nbsp;First of all, there is likely a README.md file in every project. Don\'t panic; you can consider the .md file as a text document. It contains what the author wants to convey, and you can get a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;general understanding of the project through the README file.<br>' +
                 '&nbsp;&nbsp;∙&nbsp;The rest is the main body of the project. If you wish to download it, simply click on the green \'Code\' dropdown menu in the upper right corner, as indicated by the red box.',
        'dnav3': 'ⅲ.You can directly click \'Download ZIP\' to download the entire project in a compressed format.',
        'unavt': 'Upload Tutorials',
        'unav1': 'ⅰ.To create your own repository and host your project, please start by logging into your account in the top right corner of the homepage. If you don\'t have an account yet, click on \'Register\' and follow the instructions to sign up.',
        'unav2': 'ⅱ.After logging into your account, you\'ll be directed to your personal homepage. Click the red plus sign in the top right corner to create a new repository.',
        'unav3': 'ⅲ.Select"New repository".',
        'unav4': 'ⅳ.After entering the \'new repository\' interface, you\'ll encounter the following screen, where you\'ll need to make several selections.<br>' +
                 '&nbsp;&nbsp;∙&nbsp;The first section requires you to give your repository a name, and you can also provide a description for your repository.<br>' +
                 '&nbsp;&nbsp;∙&nbsp;The second section asks you to choose whether your project should be visible to everyone or kept as a private project. If you want to collaborate with others on the project, select \'Public.\'<br>' +
                 '&nbsp;&nbsp;∙&nbsp;In the third section, you have the option to add a \'README\' file to your repository. The &nbsp;&nbsp;&nbsp;&nbsp;&nbsp\'README\' file, as previously explained in the download tutorial, is a text document that serves as an introduction to your repository for other users. We recommend adding this to help others quickly understand your project.<br>' +
                 '&nbsp;&nbsp;∙&nbsp;After completing the settings mentioned above, leave the other options as default, and simply &nbsp;&nbsp;&nbsp;&nbsp;&nbspclick the green \'Create repository\' button to create your repository.',
        'unav5': 'ⅴ.Once you\'ve finished creating it, go to your repository, and select \'Add file.\'',
        'unav6': 'ⅵFinally, simply drag and drop the folder you want to upload directly into the red boxed area, and it will be uploaded instantly.',
        'cnavt': 'Pull Requests Tutorials',
        'cnav1': 'ⅰ.If you have valuable improvements to offer on someone else\'s project, you can submit your changes to their project. First, you\'ll need to upload the improved project to your own repository, following the \'Upload\' method. Then, go to \'Pull requests\' and select \'New pull request.\'',
        'cnav2': 'ⅱ.When you enter the pull request page, the content in the left red box represents the original branch of the other person\'s repository, and the content in the right red box represents your improved branch. Once you\'ve verified everything is correct, click the green button on the right to submit.',
    },
    'ch': {
        'settings': '设置',
        'outlook': '外观',
        'outlook1': '浅色',
        'outlook2': '深色',
        'color': '色盲模式',
        'color1': '正常',
        'color2': '黑白',
        'fontsize': '字体大小',
        'fontsize1': '正常',
        'fontsize2': '大',
        'username': '用户名',
        'namenotexist': '用户名不存在',
        'emptyusername': '用户名不能为空',
        'password': '密码',
        'wrongpassword': '密码错误',
        'login': '登录',
        'crename': '创建用户名',
        'usedname': '用户名已被使用',
        'enterpassword': '输入密码',
        'emptypassword': '密码不能为空',
        'comfirmpassword': '确认密码',
        'insamepassword': '密码不一致',
        'comfirmcre': '确认创建',
        'newuser': '注册新用户',
        'back': '返回',
        'oldpassword': '输入旧密码',
        'newpassword': '输入新密码',
        'comfirm': '确认',
        'changepassword': '修改密码',
        'logout': '退出登录',
        'navHome': '主页',
        'navt': '面试题库',
        'navs': '线上辅导',
        'navd': '语音模拟面试',
        'navu': '文字模拟面试',
        'navc': '社区',
        'navm': '会员',
        'navla': '语言',
        'navwh': 'InterviewPro, Offer 拿到手软',
        'navih': '面试题库',
        'navsh': '线上辅导',
        'navdh': '语音模拟面试',
        'navuh': '文字模拟面试',
        'navch': '社区',
        'navmh': '会员',
        'navit': '我们的面试题库旨在为求职者提供全面的面试准备资源，包括从网络免费资源和合作伙伴收集的真题及模拟题。题目按类别细分，涵盖编程、系统设计、软技能等多个领域，帮助用户针对性地练习。特设错题集功能，方便用户从错误中学习，提升解题技能，全方位备战面试。',
        'navil': '点击这里或右上角导航栏的徽标，即可前往GitHub。',
        'navst': '我们的线上辅导服务旨在通过视频讲解、提供相似例题和推荐相似试题的方式，为用户打造一个互动且富有成效的学习环境。借鉴了作业帮、夸克等平台的成功经验，我们的视频讲解不仅详细讲述解题步骤，还深入浅出地解释概念，确保用户能够全面理解并掌握知识点。此外，通过智能推荐系统，我们能够根据用户的学习进度和偏好，提供相似题目进行练习，有效提升用户的解题能力和学习效率。',
        'navsl': '点击这里或导航栏上的"搜索"选项卡以了解如何使用。',
        'navdt': '我们的语音模拟面试功能采用先进的AI技术，为用户提供了一个接近真实面试的模拟环境。用户只需开启麦克风即可开始模拟面试，系统会实时分析语速、回答时间等关键指标，以捕捉面试者在面试过程中的表现。此外，系统还会通过比对用户回答和标准答案的重复率，对面试表现进行综合评估，最终生成详尽的面试报告。这不仅帮助用户了解自己的表现和潜在改进空间，也使他们能够在真实面试中更加自信和准备充分。',
        'navdl': '点击这里或导航栏上的"下载"选项卡以了解如何下载。',
        'navut': '我们的文字模拟面试功能为用户提供了一个专注于书面表达的模拟面试环境。与语音模拟面试相似，这一功能允许用户通过键入回答来参与模拟面试，系统随后会根据用户回答与标准答案之间的重复率进行智能分析。这种方式特别适合那些希望提高书面表达能力的用户，也有助于那些面对口头表达不够自信的人。通过这一练习，用户可以更加深入地理解问题，提升构筑答案的能力，同时也能够在实际面试中更加精准地表达自己的思想。',
        'navul': '点击这里或导航栏上的"上传"以了解如何上传您的文件。',
        'navct': '我们的社区交互平台鼓励用户分享面试经验和知识见解，并通过积分奖励机制激励用户积极参与。在这里，用户可以自由发布关于面试的经历、技巧、疑问及回答，从而构建一个相互学习和成长的环境。为保证社区的秩序和质量，专门的社区管理员负责监督发帖和互动，确保内容的相关性和适宜性。通过这种方式，我们的社区旨在成为一个信息丰富、互助友善的交流平台，帮助每一位用户在职业道路上取得进步。',
        'navcl': '点击这里或导航栏上的"社区协作"选项卡以了解如何向他人提交您的改进。',
        'navcm': '我们的平台提供了一个综合的积分系统，用户通过参与活动、消费服务如视频讲解、获取资料、参加深度模拟面试及教师答疑等，可以累积积分。这些积分不仅可以用于兑换各种服务和资源，还能提升用户的会员等级，解锁更多特权和福利。在会员页面上，用户可以轻松管理自己的积分余额、查看会员等级、充值以及了解各种特权和福利，包括与我们合作机构提供的独家优惠。这样的设计旨在奖励积极参与的用户，同时为他们提供更多学习和成长的机会。',
        'navt1': 'InterviewPro',
        'navt2': '您的面试得力助手',
        'navbo': '项目地址:https://github.com/EJkenway/Web.git',
        'snav1': 'ⅰ.进入网页后，无需注册，点击右上角搜索框即可搜索',
        'snav2': 'ⅱ.当您输入关键词后，您将进入结果页面，在页面左侧，您可以筛选结果，页面的上半部分是筛选结果的类型，包括代码、库等。下半部分是筛选代码语言，包括Python、C等。',
        'snavt': '搜索教程',
        'dnavt': '下载教程',
        'dnav1': 'ⅰ.当您发现一个引起您兴趣的项目时，您可以点击下载该项目。',
        'dnav2': 'ⅱ.当您点击进入页面后，您会发现大量内容，不用担心，唯一需要注意的只有左侧的内容。<br>' +
                 '&nbsp;&nbsp;∙&nbsp;首先，每个项目中都大概率有一个README.md文件，不要慌张，您可以将.md文件视作<br>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp文本文档，里面记录的是作者想说的话，您可以通过README文件大致了解该项目。<br>' +
                 '&nbsp;&nbsp;∙&nbsp;剩余部分是项目主体，如果您想下载，点击红框右上角的绿色“code”下拉菜单。',
        'dnav3': 'ⅲ.直接点击“Download ZIP”便可将整个项目打包下载。',
        'unavt': '上传教程',
        'unav1': 'ⅰ.要创建您的库并上传托管您的项目，请先在主页右上角登陆您的账号，如果您还没有账号，请点击注册，按照指示注册。',
        'unav2': 'ⅱ.登陆账号后，您将进入您的个人主页，点击右上角红色加号即可创建新的库。',
        'unav3': 'ⅲ.选择"New repository".',
        'unav4': 'ⅳ.进入new repository界面后，您会看到以下界面，有几个部分需要进行选择<br>' +
                 '&nbsp;&nbsp;∙&nbsp;T第一个部分，您需要给您的库命名，同时也可以选择对库进行描述<br>' +
                 '&nbsp;&nbsp;∙&nbsp;第二个部分要求您选择您的项目是对所有人可见还是为私人项目，如果您希望与他人一起开发项目，请选择“Public”<br>' +
                 '&nbsp;&nbsp;∙&nbsp;第三个部分，您可以选择在您的库中添加一个“README”文件，“README”文件已经在Download教程中介绍过，是一个类似于文本文档的文字文件，可以向其他用户介绍您的库。这里推荐您添加，以方便其他用户快速了解您的项目。<br>' +
                 '&nbsp;&nbsp;∙&nbsp;完成以上设置后，其他选项保持默认，直接点击绿色“Create repository”创建您的库即<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可。',
        'unav5': 'ⅴ.当您完成创建后，进入您的库，选择添加文件\'Add file.\'',
        'unav6': 'ⅵ.最后，将您要上传的文件夹直接拖到红框区域就可以直接上传了',
        'cnavt': '社区协作',
        'cnav1': 'ⅰ.当您对他人的项目有好的改进意见后，您可以向他人项目提交您的改进，首先您需要将改进项目上传至您自己的库，上传方式参考“Upload”，接着选择“Pull requests”，选择"New pull request"。',
        'cnav2': 'ⅱ.进入pull request页面后，左侧红框内容为他人原仓库分支，右侧红框为您的改进仓库分支，确认无误后，点击右侧绿色按钮即可提交。',       
    },
};

function changeLanguage(lang) {
    $('[data-lang-key]').each(function() {
        var key = $(this).data('lang-key');
        $(this).html(langData[lang][key]);
    });
    var username = sessionStorage.getItem('username');
    if (lang == 'ch' && sessionStorage.getItem('login') == '1'){
        var logedText = '欢迎, ' + username;
        var logedp = '用户名: ' + username;
        $('#loged').text(logedText);
        $('#logedp').text(logedp);
    }
    if (lang == 'en' && sessionStorage.getItem('login') == '1') {
        var logedText = 'Welcome, ' + username;
        var logedp = 'Username: ' + username;
        $('#loged').text(logedText);
        $('#logedp').text(logedp);
    }
    localStorage.setItem('language', lang);
    if (sessionStorage.getItem('login') == 1 && sessionStorage.getItem('initial') == '1') {
        localStorage.setItem(sessionStorage.getItem('username') + 'lang',lang);
    }
}

function showOption(event, option) {
    event.stopPropagation();
    $('.content-section').hide();
    $('#' + option).show();
    $('.dropdown-item').removeClass('active-option');
    $(event.target).addClass('active-option');
}

function changeFontSize(size) {
    $('.size').each(function() {
        if (size === 'normal') {
            $(this).addClass('font-size-1-5').removeClass('font-size-2');
            localStorage.setItem('fontSize', 'normal');
        } else if (size === 'large') {
            $(this).addClass('font-size-2').removeClass('font-size-1-5');
            localStorage.setItem('fontSize', 'large');
        }
    });
    if (sessionStorage.getItem('login') == 1) {
        localStorage.setItem(sessionStorage.getItem('username') + 'font', size);
    }
}

function ColorBlindMode(enable) {
    $('img').each(function() {
        if (enable) {
            $(this).addClass('grayscale');
            localStorage.setItem('color', 'enabled');
        } else {
            $(this).removeClass('grayscale');
            localStorage.setItem('color', 'disabled');
        }
    });
    $('.selector').each(function() {
        if (enable) {
            $(this).addClass('grayscale');
        } else {
            $(this).removeClass('grayscale');
        }
    });
    $('dropdown-item').each(function() {
        if (enable) {
            $(this).addClass('grayscale');
        } else {
            $(this).removeClass('grayscale');
        }
    });
    if (sessionStorage.getItem('login') == 1 && enable) {
        localStorage.setItem(sessionStorage.getItem('username') + 'color', 'enabled');
    }
}

function Outlook(dark) {
    if (dark) {
        $('body').addClass('dark-theme');
        localStorage.setItem('outlook', 'dark');
    } else {
        $('body').removeClass('dark-theme');
        localStorage.setItem('outlook', 'light');
    }
    if (sessionStorage.getItem('login') == 1 && dark) {
        localStorage.setItem(sessionStorage.getItem('username') + 'outlook', 'dark');
    }
}

function initial() {
    var initial = sessionStorage.getItem('initial');
    if (initial != '1') {
        Location();
    }
    sessionStorage.setItem('initial','1');
}

function Location() {
    var confirmLocation = confirm("Would you like us to use your location to set the language?\n(You can manually set language in the upper right corner later)");
    if (confirmLocation) {
        getLocation();
        sessionStorage.setItem('initial','1');
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    if (China(latitude, longitude)) {
        changeLanguage('ch');
        alert("检测到您在中国，已自动切换到中文。\n(您可以在右上角设置中设置。)");
    }
    else {
        alert("You are not in China and the default language is English.\nYou can manually set language in the upper right corner)");
    }
}

function China(lat, lon) {
    return lat >= 3.52 && lat <= 53.37 && lon >= 73.4 && lon <= 135;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

function memory() {
    var fontSize = localStorage.getItem('fontSize');
    $('.size').each(function() {
        if (fontSize === 'normal') {
            $(this).addClass('font-size-1-5').removeClass('font-size-2');
        } else if (fontSize === 'large') {
            $(this).addClass('font-size-2').removeClass('font-size-1-5');
        }
    });
    var color = localStorage.getItem('color');
    $('img').each(function() {
        if (color === 'enabled') {
            $(this).addClass('grayscale');
        } else {
            $(this).removeClass('grayscale');
        }
    });
    $('.selector').each(function() {
        if (color === 'enabled') {
            $(this).addClass('grayscale');
        } else {
            $(this).removeClass('grayscale');
        }
    });
    $('.dropdown-item').each(function() {
        if (color === 'enabled') {
            $(this).addClass('grayscale');
        } else {
            $(this).removeClass('grayscale');
        }
    });
    var outlook = localStorage.getItem('outlook');
    if (outlook === 'dark') {
        $('body').addClass('dark-theme');
    } else if (outlook === 'light') {
        $('body').removeClass('dark-theme');
    }
    var language = localStorage.getItem('language');
    if (language) {
        changeLanguage(language);
    }
    var login = sessionStorage.getItem('login');
    var username = sessionStorage.getItem('username');
    if (login == '1') {
        if (localStorage.getItem('language') == 'ch') {
            var logedText = '欢迎, ' + username;
            var logedp = '用户名: ' + username;
            $('#loged').text(logedText);
            $('#logedp').text(logedp);
            $('.logged').show();
            $('.unlogin').hide();
        }
        if (localStorage.getItem('language') == 'en') {
            var logedText = 'Welcome, ' + username;
            var logedp = 'Username: ' + username;
            $('#loged').text(logedText);
            $('#logedp').text(logedp);
            $('.logged').show();
            $('.unlogin').hide();
        }
        var UfontSize = localStorage.getItem(username + 'font');
        $('.size').each(function() {
            if (UfontSize === 'normal') {
                $(this).addClass('font-size-1-5').removeClass('font-size-2');
            } else if (UfontSize === 'large') {
                $(this).addClass('font-size-2').removeClass('font-size-1-5');
            }
        });
        var Ucolor = localStorage.getItem(username + 'color');
        $('img').each(function() {
            if (Ucolor === 'enabled') {
                $(this).addClass('grayscale');
            } else {
                $(this).removeClass('grayscale');
            }
        });
        $('.selector').each(function() {
            if (Ucolor === 'enabled') {
                $(this).addClass('grayscale');
            } else {
                $(this).removeClass('grayscale');
            }
        });
        $('.dropdown-item').each(function() {
            if (Ucolor === 'enabled') {
                $(this).addClass('grayscale');
            } else {
                $(this).removeClass('grayscale');
            }
        });
        var Uoutlook = localStorage.getItem(username + 'outlook');
        if (Uoutlook === 'dark') {
            $('body').addClass('dark-theme');
        } else if (Uoutlook === 'light') {
            $('body').removeClass('dark-theme');
        }
        var Ulanguage = localStorage.getItem(username + 'lang');
        if (Ulanguage) {
            changeLanguage(Ulanguage);
        }
        if (sessionStorage.getItem('renew') == 1 && Ulanguage == 'ch'){
            alert('已加载您的偏好设置');
        }
        if (sessionStorage.getItem('renew') == 1 && Ulanguage == 'en'){
            alert('Your preferences have been loaded');
        }
        sessionStorage.setItem('renew', '0');
    }
}

function signup(event) {
    event.stopPropagation();
    $('.wrongpassword').hide();
    $('.namenotexist').hide();
    $('.emptyusername').hide();
    $('.login').hide();
    $('.signup').show();
}

function login(event) {
    event.stopPropagation();
    $('.emptypassword').hide();
    $('.emptyusername').hide();
    $('.insamepassword').hide();
    $('.samename').hide();
    $('.login').show();
    $('.signup').hide();
}

function logout() {
    $('.unlogin').show();
    $('.logged').hide();
    sessionStorage.setItem('login', '0');
}

function createAccount(event) {
    $('.emptypassword').hide();
    $('.emptyusername').hide();
    $('.insamepassword').hide();
    $('.samename').hide();
    event.preventDefault();
    var username = document.getElementById('createUsername').value;
    var password = document.getElementById('createPassword').value;
    var confirmPassword = document.getElementById('comfirmPassword').value;
    if (!username) {
        event.stopPropagation();
        $('.emptyusername').show();
        return;
    }
    if (!password) {
        event.stopPropagation();
        $('.emptypassword').show();
        return;
    }
    if (password !== confirmPassword) {
        event.stopPropagation();
        $('.insamepassword').show();
        return;
    }
    if (Usernamecheck(username)) {
        event.stopPropagation();
        $('.samename').show();
        return;
    }
    else{
        localStorage.setItem(username, password);
        if (localStorage.getItem('language') == 'ch') {
            event.stopPropagation();
            alert('账户创建成功!');
            login(event);
        }
        else {
            event.stopPropagation();
            alert('User creation succeeded!');
            login(event);
        }
    }
    
}

function Usernamecheck(username) {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === username) {
            return true;
        }
    }
    return false;
}

function logincheck(event) {
    $('.wrongpassword').hide();
    $('.namenotexist').hide();
    $('.emptyusername').hide();
    event.preventDefault();
    var language = localStorage.getItem('language');
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    if (!username) {
        event.stopPropagation();
        $('.emptyusername').show();
        return;
    }
    if (Usernamecheck(username)) {
        if (password == localStorage.getItem(username)) {
            sessionStorage.setItem('login', '1');
            sessionStorage.setItem('renew', '1');
            sessionStorage.setItem('username', username);
            if (localStorage.getItem('language') == 'ch') {
                var logedText = '欢迎, ' + username;
                var logedp = '用户名: ' + username;
                $('#loged').text(logedText);
                $('#logedp').text(logedp);
                $('.logged').show();
                $('.unlogin').hide();
                alert("登录成功");
            }
            else {
                var logedText = 'Welcome, ' + username;
                var logedp = 'Username: ' + username;
                $('#loged').text(logedText);
                $('#logedp').text(logedp);
                $('.logged').show();
                $('.unlogin').hide();
                alert("Login successfully");
            }
            memory(event);
        }
        else {
            event.stopPropagation();
            $('.wrongpassword').show();
            return;
        }
    }
    else {
        event.stopPropagation();
        $('.namenotexist').show();
        return;
    }
}

function change(event) {
    event.stopPropagation();
    $('.changePassword').show();
    $('.info').hide();
}

function info(event) {
    event.stopPropagation();
    $('.emptynewpassword').hide();
    $('.unpassword').hide();
    $('.wrongoldpassword').hide();
    $('.changePassword').hide();
    $('.info').show();
}

function changePassword(event) {
    $('.emptynewpassword').hide();
    $('.unpassword').hide();
    $('.wrongoldpassword').hide();
    event.preventDefault();
    var username = document.getElementById('loginUsername').value;
    var oldpassword = document.getElementById('oldPassword').value;
    var comfirmpassword = document.getElementById('comPassword').value;
    var password = document.getElementById('newPassword').value;
    if (oldpassword != localStorage.getItem(username)) {
        event.stopPropagation();
        $('.wrongoldpassword').show();
        return;
    }
    if (password != comfirmpassword) {
        event.stopPropagation();
        $('.unpassword').show();
        return;
    }
    if (!password) {
        event.stopPropagation();
        $('.emptynewpassword').show();
        return
    }
    localStorage.setItem(username,password);
    $('.logged').hide();
    $('.unlogin').show();
    if (localStorage.getItem('language') == 'ch') {
        alert('修改成功');
    }
    else {
        alert('Modify successfully');
    }
}




