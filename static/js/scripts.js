const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['about', 'publications', 'awards', 'project', 'service', 'news']


window.addEventListener('DOMContentLoaded', event => {

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
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
                
                // 如果是publications部分，初始化抽象按钮事件监听器
                if (name === 'publications') {
                    initPublicationInteractions();
                }
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

}); 

// 初始化publication交互功能
function initPublicationInteractions() {
    // 等待DOM完全加载
    setTimeout(() => {
        // 为每个Abstract按钮添加点击事件
        const abstractButtons = document.querySelectorAll('.abstract-btn');
        
        abstractButtons.forEach(button => {
            // 默认状态为展开，设置按钮文本为隐藏摘要
            button.textContent = 'Hide Abstract';
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // 获取相应的abstract元素
                const publicationItem = this.closest('.publication-item');
                const abstract = publicationItem.querySelector('.publication-abstract');
                
                // 切换显示状态
                abstract.style.display = abstract.style.display === 'none' ? 'block' : 'none';
                
                // 更改按钮文本
                if (abstract.style.display === 'none') {
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
