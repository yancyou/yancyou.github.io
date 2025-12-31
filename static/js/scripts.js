const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['about', 'publications', 'awards', 'project', 'service', 'news', 'resources', 'fun-tidbits']

// Title override function to ensure correct title display
function ensureCorrectTitle() {
    // Force title to be "Xuan Ouyang Homepage"
    if (document.title !== "Xuan Ouyang Homepage") {
        document.title = "Xuan Ouyang Homepage";
    }
}

// Call immediately
ensureCorrectTitle();

window.addEventListener('DOMContentLoaded', event => {
    // Explicitly set the document title
    document.title = "Xuan Ouyang Homepage";

    // Set an interval to keep checking the title
    setInterval(ensureCorrectTitle, 500);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    // 跳过title元素，避免覆盖HTML中设置的标题
                    if (key !== 'title') {
                    document.getElementById(key).innerHTML = yml[key];
                    }
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false });
    const promises = section_names.map(name =>
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
                
                // 如果是publications部分，初始化抽象按钮事件监听器
                if (name === 'publications') {
                    initPublicationInteractions();
                }
            })
    );

    Promise.all(promises)
        .then(() => {
            // MathJax
            MathJax.typeset();
            
            // Refresh ScrollSpy
            const scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);
            if (scrollSpy) {
                scrollSpy.refresh();
            }
        })
        .catch(error => console.log(error));
});

window.addEventListener('load', () => {
    // Refresh ScrollSpy again after all resources are loaded
    const scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);
    if (scrollSpy) {
        scrollSpy.refresh();
    }
});

// 初始化publication交互功能
function initPublicationInteractions() {
    // 等待DOM完全加载
    setTimeout(() => {
        // 为每个Abstract按钮添加点击事件
        const abstractButtons = document.querySelectorAll('.abstract-btn');
        
        abstractButtons.forEach(button => {
            // 默认状态为关闭，设置按钮文本为Abstract
            button.textContent = 'Abstract';

            const publicationItem = button.closest('.publication-item');
            const abstract = publicationItem.querySelector('.publication-abstract');
            if (abstract) {
                abstract.classList.add('is-hidden');
            }
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // 获取相应的abstract元素
                const publicationItem = this.closest('.publication-item');
                const abstract = publicationItem.querySelector('.publication-abstract');
                
                // 切换显示状态
                const isHidden = abstract.classList.contains('is-hidden');
                abstract.classList.toggle('is-hidden', !isHidden);
                
                // 更改按钮文本
                if (abstract.classList.contains('is-hidden')) {
                    this.textContent = 'Abstract';
                } else {
                    this.textContent = 'Hide Abstract';
                }
                
                // 检查滚动区域是否有溢出
                checkPublicationsOverflow();
            });
        });
        
        // 为每个publication标题添加点击事件（整个条目可点击）
        const publicationTitles = document.querySelectorAll('.publication-title h3');
        
        publicationTitles.forEach(title => {
            title.addEventListener('click', function() {
                // 这里可以添加链接跳转或其他操作
                const publicationItem = this.closest('.publication-item');
                const links = publicationItem.querySelector('.publication-links a');
                
                // 如果有链接，打开第一个链接
                if (links) {
                    window.open(links.href, '_blank');
                }
            });
        });
        
        // 检查是否有溢出
        checkPublicationsOverflow();
        
        // 监听窗口大小变化，重新检查溢出
        window.addEventListener('resize', checkPublicationsOverflow);
    }, 1000); // 给一点时间让marked.js渲染完成
}

// 检查publications区域是否有溢出
function checkPublicationsOverflow() {
    const publicationsContainer = document.querySelector('.publications-container');
    const publicationsMd = document.getElementById('publications-md');
    
    if (publicationsContainer && publicationsMd) {
        // 检查内容高度是否超过容器高度
        if (publicationsMd.scrollHeight > publicationsMd.clientHeight) {
            publicationsContainer.classList.add('has-overflow');
        } else {
            publicationsContainer.classList.remove('has-overflow');
        }
    }
} 
